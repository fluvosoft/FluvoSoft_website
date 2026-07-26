"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { User } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { get, ref } from "firebase/database";
import { isDashboardAdmin } from "@/lib/dashboard-access";
import type {
  ContactMessage,
  ContactMessageStatus,
  KyotoHabitTrackerWishlistEntry,
  ResumeBuilderWishlistEntry,
} from "@/lib/dashboard-types";
import {
  getClientFirestore,
  getClientRtdb,
  hasFirebaseConfig,
  signInWithGoogle,
  signOutDashboard,
  subscribeToAuth,
} from "@/lib/firebase-client";

type StatusFilter = "all" | ContactMessageStatus;
type DateFilter = "all" | "today" | "7d" | "30d";
type SortOption = "newest" | "oldest" | "name";

function toDate(value: unknown): Date | null {
  if (!value) return null;
  if (value instanceof Date) return value;
  if (typeof value === "object" && value !== null && "toDate" in value) {
    return (value as { toDate: () => Date }).toDate();
  }
  return null;
}

function formatWhen(date: Date | null): string {
  if (!date) return "—";
  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function statusBadgeClass(status: ContactMessageStatus): string {
  switch (status) {
    case "new":
      return "bg-cta/20 text-cta border-cta/30";
    case "read":
      return "bg-white/10 text-foreground border-white/20";
    case "handled":
      return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
    default:
      return "bg-white/10 text-foreground border-white/20";
  }
}

function buildGmailComposeUrl(message: ContactMessage): string | null {
  const to = message.email.trim();
  if (!to) return null;

  const subject = encodeURIComponent(`Re: ${message.subject || "Your FluvoSoft inquiry"}`);
  const body = encodeURIComponent(
    `Hi ${message.name},\n\nThank you for reaching out to FluvoSoft.\n\n---\nOriginal message:\n${message.message}`
  );

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${subject}&body=${body}`;
}

function matchesDateFilter(date: Date | null, filter: DateFilter): boolean {
  if (filter === "all" || !date) return filter === "all";
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (filter === "today") return date >= startOfToday;
  const days = filter === "7d" ? 7 : 30;
  const cutoff = new Date(now);
  cutoff.setDate(cutoff.getDate() - days);
  return date >= cutoff;
}

function toWishlistDate(value: unknown): Date | null {
  if (typeof value === "number") return new Date(value);
  return toDate(value);
}

function SearchIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" />
    </svg>
  );
}

export default function DashboardApp() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [authError, setAuthError] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [wishlistEntries, setWishlistEntries] = useState<ResumeBuilderWishlistEntry[]>([]);
  const [kyotoWishlistEntries, setKyotoWishlistEntries] = useState<
    KyotoHabitTrackerWishlistEntry[]
  >([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState<DateFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState("");
  const [notes, setNotes] = useState<Record<string, string>>({});

  const isAdmin = isDashboardAdmin(user?.email);

  useEffect(() => {
    const unsubscribe = subscribeToAuth((nextUser) => {
      setUser(nextUser);
      setAuthReady(true);
      if (nextUser && !isDashboardAdmin(nextUser.email)) {
        void signOutDashboard();
        setAuthError("This Google account is not authorized for the dashboard.");
      }
    });
    return unsubscribe;
  }, []);

  const loadMessages = useCallback(async () => {
    const db = getClientFirestore();
    if (!db || !isAdmin) return;

    setLoadingMessages(true);
    setLoadError("");

    try {
      const snapshot = await getDocs(
        query(collection(db, "contactMessages"), orderBy("createdAt", "desc"), limit(100))
      );

      const rows: ContactMessage[] = snapshot.docs.map((entry) => {
        const data = entry.data();
        return {
          id: entry.id,
          name: String(data.name || ""),
          email: String(data.email || ""),
          subject: String(data.subject || ""),
          message: String(data.message || ""),
          service: data.service ? String(data.service) : null,
          location: data.location ? String(data.location) : null,
          budget: data.budget ? String(data.budget) : null,
          meetingSlot: data.meetingSlot ? String(data.meetingSlot) : null,
          ipAddress: data.ipAddress ? String(data.ipAddress) : undefined,
          ipHashHint: data.ipHashHint ? String(data.ipHashHint) : undefined,
          source: data.source ? String(data.source) : undefined,
          status: (data.status as ContactMessageStatus) || "new",
          createdAt: toDate(data.createdAt),
          handledAt: toDate(data.handledAt),
          handledBy: data.handledBy ? String(data.handledBy) : null,
          adminNote: data.adminNote ? String(data.adminNote) : null,
        };
      });

      setMessages(rows);
      setNotes(
        rows.reduce<Record<string, string>>((acc, row) => {
          acc[row.id] = row.adminNote || "";
          return acc;
        }, {})
      );

      const rtdb = getClientRtdb();
      if (rtdb) {
        const wishlistSnapshot = await get(ref(rtdb, "resumeBuilderWishlist"));
        const wishlistData = wishlistSnapshot.val() as
          | Record<
              string,
              {
                email?: string;
                product?: string;
                source?: string;
                createdAt?: number | { toDate?: () => Date };
              }
            >
          | null;

        const wishlistRows: ResumeBuilderWishlistEntry[] = wishlistData
          ? Object.entries(wishlistData).map(([id, data]) => ({
              id,
              email: String(data.email || ""),
              product: String(data.product || "Resume Builder"),
              source: String(data.source || "resume-builder-wishlist"),
              createdAt: toWishlistDate(data.createdAt),
            }))
          : [];

        wishlistRows.sort(
          (a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0)
        );
        setWishlistEntries(wishlistRows);

        const kyotoWishlistSnapshot = await get(ref(rtdb, "kyotoHabitTrackerWishlist"));
        const kyotoWishlistData = kyotoWishlistSnapshot.val() as
          | Record<
              string,
              {
                email?: string;
                product?: string;
                source?: string;
                createdAt?: number | { toDate?: () => Date };
              }
            >
          | null;

        const kyotoWishlistRows: KyotoHabitTrackerWishlistEntry[] = kyotoWishlistData
          ? Object.entries(kyotoWishlistData).map(([id, data]) => ({
              id,
              email: String(data.email || ""),
              product: String(data.product || "KYOTO Habit Tracker"),
              source: String(data.source || "kyoto-habit-tracker-wishlist"),
              createdAt: toWishlistDate(data.createdAt),
            }))
          : [];

        kyotoWishlistRows.sort(
          (a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0)
        );
        setKyotoWishlistEntries(kyotoWishlistRows);
      } else {
        setWishlistEntries([]);
        setKyotoWishlistEntries([]);
      }
    } catch {
      setLoadError(
        "Could not load dashboard data. Enable Google sign-in and publish the Firestore rules for admin emails."
      );
    } finally {
      setLoadingMessages(false);
    }
  }, [isAdmin]);

  useEffect(() => {
    if (isAdmin) void loadMessages();
  }, [isAdmin, loadMessages]);

  const serviceOptions = useMemo(() => {
    const services = new Set<string>();
    messages.forEach((message) => {
      if (message.service) services.add(message.service);
    });
    return Array.from(services).sort();
  }, [messages]);

  const counts = useMemo(
    () => ({
      all: messages.length,
      new: messages.filter((m) => m.status === "new").length,
      read: messages.filter((m) => m.status === "read").length,
      handled: messages.filter((m) => m.status === "handled").length,
    }),
    [messages]
  );

  const filteredMessages = useMemo(() => {
    const queryText = searchQuery.trim().toLowerCase();

    let rows = messages.filter((message) => {
      if (statusFilter !== "all" && message.status !== statusFilter) return false;
      if (serviceFilter !== "all" && message.service !== serviceFilter) return false;
      if (!matchesDateFilter(message.createdAt, dateFilter)) return false;

      if (!queryText) return true;

      const haystack = [
        message.name,
        message.email,
        message.subject,
        message.message,
        message.service,
        message.location,
        message.budget,
        message.meetingSlot,
        message.adminNote,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(queryText);
    });

    rows = [...rows].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      const aTime = a.createdAt?.getTime() ?? 0;
      const bTime = b.createdAt?.getTime() ?? 0;
      return sortBy === "oldest" ? aTime - bTime : bTime - aTime;
    });

    return rows;
  }, [messages, statusFilter, serviceFilter, dateFilter, searchQuery, sortBy]);

  const hasActiveFilters =
    statusFilter !== "all" ||
    serviceFilter !== "all" ||
    dateFilter !== "all" ||
    searchQuery.trim().length > 0;

  const clearFilters = () => {
    setStatusFilter("all");
    setServiceFilter("all");
    setDateFilter("all");
    setSearchQuery("");
    setSortBy("newest");
  };

  const handleSignIn = async () => {
    setSigningIn(true);
    setAuthError("");
    try {
      const signedInUser = await signInWithGoogle();
      if (!isDashboardAdmin(signedInUser.email)) {
        await signOutDashboard();
        setAuthError("This Google account is not authorized for the dashboard.");
      }
    } catch {
      setAuthError("Sign-in failed. Check Firebase Auth and authorized domains.");
    } finally {
      setSigningIn(false);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!user) {
      setLoadError("Sign in again to delete messages.");
      return;
    }

    setDeletingId(id);
    setLoadError("");

    const removeFromUi = () => {
      setMessages((prev) => prev.filter((message) => message.id !== id));
      setNotes((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
      if (expandedId === id) setExpandedId(null);
    };

    try {
      // Prefer client delete — Firestore rules already allow dashboard admins.
      const db = getClientFirestore();
      if (db) {
        try {
          await deleteDoc(doc(db, "contactMessages", id));
          removeFromUi();
          return;
        } catch (clientError) {
          const code =
            clientError instanceof FirebaseError ? clientError.code : "unknown";
          // Fall through to server delete if client rules block it
          console.warn("Client delete failed, trying admin API:", code);
        }
      }

      const token = await user.getIdToken();
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const raw = await response.text();
      let data: { ok?: boolean; message?: string } = {};
      try {
        data = raw ? (JSON.parse(raw) as { ok?: boolean; message?: string }) : {};
      } catch {
        throw new Error(
          "Delete API returned an unexpected response. Confirm FIREBASE_SERVICE_ACCOUNT_JSON is set, or publish Firestore delete rules for admin emails."
        );
      }

      if (!response.ok || !data.ok) {
        throw new Error(
          data.message ||
            `Delete failed (${response.status}). Publish Firestore delete rules for admin emails.`
        );
      }

      removeFromUi();
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : "Could not delete message.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleReplyEmail = (message: ContactMessage) => {
    setLoadError("");
    setActionMessage(`Opening Gmail compose for ${message.email} in a new tab…`);
  };

  const updateMessage = async (
    id: string,
    status: ContactMessageStatus,
    adminNote?: string
  ) => {
    const db = getClientFirestore();
    if (!db || !user?.email) return;

    setUpdatingId(id);
    try {
      await updateDoc(doc(db, "contactMessages", id), {
        status,
        handledAt: status === "handled" ? serverTimestamp() : null,
        handledBy: status === "handled" ? user.email : null,
        ...(adminNote !== undefined ? { adminNote: adminNote.trim() || null } : {}),
      });

      setMessages((prev) =>
        prev.map((message) =>
          message.id === id
            ? {
                ...message,
                status,
                adminNote: adminNote !== undefined ? adminNote.trim() || null : message.adminNote,
                handledBy: status === "handled" ? user.email : message.handledBy,
                handledAt: status === "handled" ? new Date() : message.handledAt,
              }
            : message
        )
      );
    } catch {
      setLoadError("Could not update message. Check Firestore admin rules.");
    } finally {
      setUpdatingId(null);
    }
  };

  if (!hasFirebaseConfig) {
    return (
      <main className="mx-auto flex min-h-screen max-w-lg items-center px-6 py-16">
        <p className="text-sm text-accent">
          Firebase is not configured. Add your Firebase env variables first.
        </p>
      </main>
    );
  }

  if (!authReady) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-accent">Loading dashboard…</p>
      </main>
    );
  }

  if (!user || !isAdmin) {
    return (
      <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-xl">
          <p className="text-xs font-medium uppercase tracking-wider text-cta">FluvoSoft</p>
          <h1 className="mt-2 text-2xl font-semibold text-foreground">Admin dashboard</h1>
          <p className="mt-3 text-sm leading-relaxed text-accent">
            Sign in with an authorized Google account to manage contact submissions and product
            wishlists.
          </p>
          {authError ? <p className="mt-4 text-sm text-red-400">{authError}</p> : null}
          <button
            type="button"
            onClick={() => void handleSignIn()}
            disabled={signingIn}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:opacity-60"
          >
            {signingIn ? "Signing in…" : "Continue with Google"}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
      <header className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-cta">FluvoSoft admin</p>
          <h1 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">
            Submissions dashboard
          </h1>
          <p className="mt-1 text-sm text-accent">Signed in as {user.email}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void loadMessages()}
            disabled={loadingMessages}
            className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-foreground transition hover:bg-white/5 disabled:opacity-60"
          >
            {loadingMessages ? "Refreshing…" : "Refresh"}
          </button>
          <button
            type="button"
            onClick={() => void signOutDashboard()}
            className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-foreground transition hover:bg-white/5"
          >
            Sign out
          </button>
        </div>
      </header>

      <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {(
          [
            { label: "Total", value: counts.all, tone: "text-foreground" },
            { label: "New", value: counts.new, tone: "text-cta" },
            { label: "Read", value: counts.read, tone: "text-foreground" },
            { label: "Handled", value: counts.handled, tone: "text-emerald-300" },
            {
              label: "Resume wishlist",
              value: wishlistEntries.length,
              tone: "text-sky-300",
            },
            {
              label: "KYOTO wishlist",
              value: kyotoWishlistEntries.length,
              tone: "text-orange-300",
            },
          ] as const
        ).map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
          >
            <p className="text-xs uppercase tracking-wider text-accent">{stat.label}</p>
            <p className={`mt-1 text-2xl font-semibold tabular-nums ${stat.tone}`}>{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 rounded-2xl border border-sky-500/20 bg-sky-500/[0.05] p-4 sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-sky-300">
              Resume Builder
            </p>
            <h2 className="mt-1 text-xl font-semibold text-foreground">Wishlist</h2>
            <p className="mt-1 text-sm text-accent">
              {wishlistEntries.length} Gmail {wishlistEntries.length === 1 ? "address" : "addresses"}
            </p>
          </div>
          {wishlistEntries.length ? (
            <a
              href={`mailto:?bcc=${encodeURIComponent(
                wishlistEntries.map((entry) => entry.email).join(",")
              )}`}
              className="w-fit rounded-lg border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 no-underline transition hover:bg-sky-500/15"
            >
              Email wishlist
            </a>
          ) : null}
        </div>

        {wishlistEntries.length ? (
          <div className="mt-4 max-h-72 overflow-auto rounded-xl border border-white/10 bg-black/20">
            <ul className="divide-y divide-white/10">
              {wishlistEntries.map((entry, index) => (
                <li
                  key={entry.id}
                  className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="text-xs tabular-nums text-accent">{index + 1}</span>
                    <a
                      href={`mailto:${entry.email}`}
                      className="truncate text-sm font-medium text-foreground no-underline hover:text-sky-300"
                    >
                      {entry.email}
                    </a>
                  </div>
                  <span className="text-xs text-accent">{formatWhen(entry.createdAt)}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-4 rounded-xl border border-dashed border-white/15 px-4 py-6 text-center text-sm text-accent">
            No wishlist signups yet.
          </p>
        )}
      </section>

      <section className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/[0.05] p-4 sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-orange-300">
              KYOTO Habit Tracker
            </p>
            <h2 className="mt-1 text-xl font-semibold text-foreground">Wishlist</h2>
            <p className="mt-1 text-sm text-accent">
              {kyotoWishlistEntries.length} Gmail{" "}
              {kyotoWishlistEntries.length === 1 ? "address" : "addresses"}
            </p>
          </div>
          {kyotoWishlistEntries.length ? (
            <a
              href={`mailto:?bcc=${encodeURIComponent(
                kyotoWishlistEntries.map((entry) => entry.email).join(",")
              )}`}
              className="w-fit rounded-lg border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 no-underline transition hover:bg-orange-500/15"
            >
              Email wishlist
            </a>
          ) : null}
        </div>

        {kyotoWishlistEntries.length ? (
          <div className="mt-4 max-h-72 overflow-auto rounded-xl border border-white/10 bg-black/20">
            <ul className="divide-y divide-white/10">
              {kyotoWishlistEntries.map((entry, index) => (
                <li
                  key={entry.id}
                  className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="text-xs tabular-nums text-accent">{index + 1}</span>
                    <a
                      href={`mailto:${entry.email}`}
                      className="truncate text-sm font-medium text-foreground no-underline hover:text-orange-300"
                    >
                      {entry.email}
                    </a>
                  </div>
                  <span className="text-xs text-accent">{formatWhen(entry.createdAt)}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-4 rounded-xl border border-dashed border-white/15 px-4 py-6 text-center text-sm text-accent">
            No wishlist signups yet.
          </p>
        )}
      </section>

      <section className="sticky top-0 z-10 mt-6 rounded-2xl border border-white/10 bg-[#0A0A0A]/95 p-4 backdrop-blur-md sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search submissions</span>
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-accent">
              <SearchIcon />
            </span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name, email, service, message…"
              className="w-full rounded-xl border border-white/15 bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-accent focus:border-cta/40 focus:outline-none focus:ring-2 focus:ring-cta/20"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="rounded-xl border border-white/15 bg-background px-3 py-2.5 text-sm text-foreground focus:border-cta/40 focus:outline-none focus:ring-2 focus:ring-cta/20"
              aria-label="Filter by service"
            >
              <option value="all">All services</option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value as DateFilter)}
              className="rounded-xl border border-white/15 bg-background px-3 py-2.5 text-sm text-foreground focus:border-cta/40 focus:outline-none focus:ring-2 focus:ring-cta/20"
              aria-label="Filter by date"
            >
              <option value="all">All time</option>
              <option value="today">Today</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="rounded-xl border border-white/15 bg-background px-3 py-2.5 text-sm text-foreground focus:border-cta/40 focus:outline-none focus:ring-2 focus:ring-cta/20"
              aria-label="Sort submissions"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {(["all", "new", "read", "handled"] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setStatusFilter(filter)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium capitalize transition ${
                statusFilter === filter
                  ? "border-cta/40 bg-cta/15 text-cta"
                  : "border-white/10 text-accent hover:border-white/20 hover:text-foreground"
              }`}
            >
              {filter} ({counts[filter]})
            </button>
          ))}

          {hasActiveFilters ? (
            <button
              type="button"
              onClick={clearFilters}
              className="ml-auto rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-accent transition hover:border-white/20 hover:text-foreground"
            >
              Clear filters
            </button>
          ) : null}
        </div>

        <p className="mt-3 text-xs text-accent">
          Showing {filteredMessages.length} of {messages.length} submissions
        </p>
      </section>

      {loadError ? (
        <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {loadError}
        </p>
      ) : null}

      {actionMessage ? (
        <p className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
          {actionMessage}
        </p>
      ) : null}

      {loadingMessages ? (
        <div className="mt-8 space-y-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-28 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]"
            />
          ))}
        </div>
      ) : filteredMessages.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-12 text-center">
          <p className="text-sm font-medium text-foreground">No submissions match your filters</p>
          <p className="mt-2 text-sm text-accent">
            Try a different search term or clear filters to see all messages.
          </p>
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 rounded-lg border border-white/15 px-4 py-2 text-sm text-foreground transition hover:bg-white/5"
            >
              Clear filters
            </button>
          ) : null}
        </div>
      ) : (
        <ul className="mt-6 space-y-3">
          {filteredMessages.map((message) => {
            const isExpanded = expandedId === message.id;
            const gmailUrl = buildGmailComposeUrl(message);

            return (
              <li
                key={message.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : message.id)}
                  className="flex w-full flex-col gap-3 p-4 text-left sm:flex-row sm:items-center sm:justify-between sm:p-5"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="truncate text-base font-semibold text-foreground sm:text-lg">
                        {message.name}
                      </h2>
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${statusBadgeClass(message.status)}`}
                      >
                        {message.status}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm text-accent">
                      {message.email}
                      {message.service ? ` · ${message.service}` : ""}
                    </p>
                    <p className="mt-1 line-clamp-1 text-sm text-foreground/80">{message.subject}</p>
                  </div>

                  <div className="flex shrink-0 items-center gap-3 text-xs text-accent sm:flex-col sm:items-end">
                    <span>{formatWhen(message.createdAt)}</span>
                    <span className="rounded-full border border-white/10 px-2 py-0.5">
                      {isExpanded ? "Hide" : "View"}
                    </span>
                  </div>
                </button>

                {isExpanded ? (
                  <div className="border-t border-white/10 px-4 pb-5 pt-4 sm:px-5">
                    <div className="flex flex-wrap gap-2">
                      {message.status === "new" ? (
                        <button
                          type="button"
                          disabled={updatingId === message.id}
                          onClick={() => void updateMessage(message.id, "read")}
                          className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-white/5 disabled:opacity-60"
                        >
                          Mark read
                        </button>
                      ) : null}
                      {message.status !== "handled" ? (
                        <button
                          type="button"
                          disabled={updatingId === message.id}
                          onClick={() =>
                            void updateMessage(message.id, "handled", notes[message.id] || "")
                          }
                          className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 transition hover:bg-emerald-500/15 disabled:opacity-60"
                        >
                          Mark handled
                        </button>
                      ) : null}
                      {gmailUrl ? (
                        <a
                          href={gmailUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleReplyEmail(message)}
                          className="inline-flex rounded-lg border border-cta/30 bg-cta/10 px-3 py-1.5 text-xs font-medium text-cta no-underline transition hover:bg-cta/15"
                        >
                          Reply in Gmail
                        </a>
                      ) : (
                        <span className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-accent">
                          No email
                        </span>
                      )}
                      <button
                        type="button"
                        disabled={deletingId === message.id || updatingId === message.id}
                        onClick={() => void deleteMessage(message.id)}
                        className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-300 transition hover:bg-red-500/15 disabled:opacity-60"
                      >
                        {deletingId === message.id ? "Deleting…" : "Delete"}
                      </button>
                    </div>

                    <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                      {message.service ? (
                        <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                          <dt className="text-xs uppercase tracking-wider text-accent">Service</dt>
                          <dd className="mt-1 text-foreground">{message.service}</dd>
                        </div>
                      ) : null}
                      {message.location ? (
                        <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                          <dt className="text-xs uppercase tracking-wider text-accent">Location</dt>
                          <dd className="mt-1 text-foreground">{message.location}</dd>
                        </div>
                      ) : null}
                      {message.budget ? (
                        <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                          <dt className="text-xs uppercase tracking-wider text-accent">Budget</dt>
                          <dd className="mt-1 text-foreground">{message.budget}</dd>
                        </div>
                      ) : null}
                      {message.meetingSlot ? (
                        <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                          <dt className="text-xs uppercase tracking-wider text-accent">Call slot</dt>
                          <dd className="mt-1 text-foreground">{message.meetingSlot}</dd>
                        </div>
                      ) : null}
                      <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                        <dt className="text-xs uppercase tracking-wider text-accent">IP address</dt>
                        <dd className="mt-1 font-mono text-sm text-foreground">
                          {message.ipAddress || message.ipHashHint || "Not recorded"}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
                      <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
                        {message.message}
                      </p>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor={`note-${message.id}`}
                        className="block text-xs font-medium uppercase tracking-wider text-accent"
                      >
                        Team note
                      </label>
                      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                        <input
                          id={`note-${message.id}`}
                          type="text"
                          value={notes[message.id] || ""}
                          onChange={(e) =>
                            setNotes((prev) => ({ ...prev, [message.id]: e.target.value }))
                          }
                          placeholder="Internal note for your team"
                          className="flex-1 rounded-lg border border-white/15 bg-background px-3 py-2 text-sm text-foreground placeholder:text-accent focus:border-cta/40 focus:outline-none focus:ring-2 focus:ring-cta/20"
                        />
                        <button
                          type="button"
                          disabled={updatingId === message.id}
                          onClick={() =>
                            void updateMessage(message.id, message.status, notes[message.id])
                          }
                          className="rounded-lg border border-white/15 px-4 py-2 text-sm text-foreground transition hover:bg-white/5 disabled:opacity-60"
                        >
                          Save note
                        </button>
                      </div>
                    </div>

                    {message.handledBy ? (
                      <p className="mt-3 text-xs text-accent">
                        Handled by {message.handledBy}
                        {message.handledAt ? ` · ${formatWhen(message.handledAt)}` : ""}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
