import type { ReactNode } from "react";

type FeatureCard = {
  title: string;
  summary: string;
  highlights: string[];
  icon: ReactNode;
  featured?: boolean;
};

function IconAuth() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function IconOnboarding() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function IconShell() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function IconInvoices() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function IconBuilder() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconNotifications() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

const featureAreas: FeatureCard[] = [
  {
    title: "Authentication & account",
    summary: "Secure sign-in with email, Google, and verified sessions.",
    highlights: ["Email & Google sign-in", "Verification & password reset", "Persisted sessions"],
    icon: <IconAuth />,
  },
  {
    title: "Onboarding",
    summary: "Guided setup from first launch to your first invoice.",
    highlights: ["Intro carousel & shop profile", "20 invoice templates", "Progress saved to Firebase"],
    icon: <IconOnboarding />,
  },
  {
    title: "Main app shell",
    summary: "A responsive home for dashboard, invoices, and settings.",
    highlights: ["Sidebar or bottom nav by screen", "Quick new-invoice shortcut", "Settings & notifications"],
    icon: <IconShell />,
  },
  {
    title: "Dashboard & analytics",
    summary: "Revenue, trends, and activity at a glance.",
    highlights: ["Paid vs unpaid overview", "Charts & client heatmap", "Recent invoices & quick actions"],
    icon: <IconDashboard />,
  },
  {
    title: "Invoice management",
    summary: "Create, track, and organize every invoice in one place.",
    highlights: ["Grid & list views", "Draft through cancelled statuses", "Duplicate, delete & cloud sync"],
    icon: <IconInvoices />,
  },
  {
    title: "Invoice builder",
    summary: "Full create/edit flow with live preview and PDF export.",
    highlights: ["Line items, tax & discounts", "20 templates & live preview", "PDF download & share"],
    icon: <IconBuilder />,
    featured: true,
  },
  {
    title: "Settings",
    summary: "Account, defaults, and app preferences in one screen.",
    highlights: ["Profile & reset password", "Default template picker", "Licenses & sign out"],
    icon: <IconSettings />,
  },
  {
    title: "Notifications",
    summary: "Stay updated with an in-app inbox and unread badges.",
    highlights: ["In-app notification center", "Unread count on entry", "Push-ready architecture"],
    icon: <IconNotifications />,
  },
];

const leftColumnFeatures = featureAreas.slice(0, 2);
const rightGridFeatures = featureAreas.slice(2);

function FeatureCardBlock({ card }: { card: FeatureCard }) {
  const isFeatured = card.featured;

  return (
    <article
      className={`flex h-full flex-col rounded-2xl p-6 shadow-sm transition hover:shadow-md ${
        isFeatured
          ? "bg-ei-feature-gradient text-white shadow-md"
          : "border border-ei-primary/8 bg-white"
      }`}
    >
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
          isFeatured ? "bg-white/20 text-white" : "bg-ei-nav/15 text-ei-primaryDark"
        }`}
      >
        {card.icon}
      </div>
      <h3 className={`text-lg font-semibold ${isFeatured ? "text-white" : "text-ei-textPrimary"}`}>
        {card.title}
      </h3>
      <p
        className={`mt-2 text-sm leading-relaxed ${isFeatured ? "text-white/90" : "text-ei-textPrimary/75"}`}
      >
        {card.summary}
      </p>
      <ul
        className={`mt-4 space-y-1.5 text-sm ${isFeatured ? "text-white/85" : "text-ei-textPrimary/70"}`}
      >
        {card.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className={isFeatured ? "text-ei-action" : "text-ei-nav"} aria-hidden>
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function EasyInvoiceFeaturesSection() {
  return (
    <section
      id="features"
      className="relative scroll-mt-32 overflow-hidden border-t border-ei-primary/10 bg-white px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ei-features-heading"
    >
      <div
        className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-ei-action/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-12 h-80 w-80 rounded-full bg-ei-secondary/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-ei-nav/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block rounded-md bg-ei-nav/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ei-primaryDark">
                App features
              </span>
              <h2
                id="ei-features-heading"
                className="mt-4 text-3xl font-bold leading-tight text-ei-textPrimary md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
              >
                Everything in Easy Invoice, at a glance
              </h2>
              <p className="mt-4 max-w-md text-base text-ei-textPrimary/75">
                From sign-up and onboarding to invoicing, analytics, and notifications — built for
                mobile and web with your brand in mind.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {leftColumnFeatures.map((card) => (
                <FeatureCardBlock key={card.title} card={card} />
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {rightGridFeatures.map((card) => (
              <FeatureCardBlock key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
