import type { ReactNode } from "react";

type FeatureCard = {
  title: string;
  description: string;
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
    title: "Authentication",
    description: "Email, Google Sign-In, verification, and secure persisted sessions.",
    icon: <IconAuth />,
  },
  {
    title: "Onboarding",
    description: "Intro carousel, shop profile setup, and template selection with live preview.",
    icon: <IconOnboarding />,
  },
  {
    title: "Main Shell",
    description: "Responsive navigation — sidebar on desktop, bottom nav on mobile.",
    icon: <IconShell />,
  },
  {
    title: "Dashboard & Analytics",
    description: "Revenue overview, trends, heatmaps, top clients, and recent invoices.",
    icon: <IconDashboard />,
  },
  {
    title: "Invoice Management",
    description: "Grid and list views, statuses from draft to paid, duplicate and cloud sync.",
    icon: <IconInvoices />,
  },
  {
    title: "Invoice Builder",
    description: "Line items, tax, discounts, 20 templates, live preview, and PDF export.",
    icon: <IconBuilder />,
    featured: true,
  },
  {
    title: "Settings",
    description: "Profile, default template, password reset, licenses, and sign out.",
    icon: <IconSettings />,
  },
  {
    title: "Notifications",
    description: "In-app inbox with unread badges so you never miss an update.",
    icon: <IconNotifications />,
  },
];

function FeatureCardBlock({ card, index }: { card: FeatureCard; index: number }) {
  const isFeatured = card.featured;

  return (
    <article
      className={`group ei-card-lift relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 ${
        isFeatured
          ? "border-2 border-ei-lime/50 bg-gradient-to-br from-ei-forest via-[#245a45] to-ei-teal text-white shadow-[0_20px_50px_-16px_rgba(26,60,46,0.45)]"
          : "border border-ei-forest/10 bg-gradient-to-b from-white to-ei-cream/40 shadow-[0_4px_24px_-8px_rgba(26,60,46,0.08)] hover:border-ei-lime/40"
      }`}
    >
      <span
        className={`absolute right-5 top-5 font-ei-heading text-3xl font-bold tabular-nums ${
          isFeatured ? "text-white/15" : "text-ei-forest/10"
        }`}
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-105 ${
          isFeatured
            ? "bg-white/15 text-ei-lime ring-1 ring-white/20"
            : "bg-ei-lime/25 text-ei-forest ring-1 ring-ei-lime/30"
        }`}
      >
        {card.icon}
      </div>

      <h3
        className={`font-ei-heading text-xl font-bold leading-snug ${
          isFeatured ? "text-white" : "text-ei-forest"
        }`}
      >
        {card.title}
      </h3>

      <p
        className={`mt-3 flex-1 text-[15px] leading-relaxed ${
          isFeatured ? "text-white/85" : "text-ei-muted"
        }`}
      >
        {card.description}
      </p>

      <div
        className={`mt-5 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16 ${
          isFeatured ? "bg-ei-lime" : "bg-ei-lime/60 group-hover:bg-ei-lime"
        }`}
        aria-hidden
      />
    </article>
  );
}

export default function EasyInvoiceFeaturesSection() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 bg-ei-cream px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ei-features-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(140,198,63,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-ei-lime/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ei-forest">
            App features
          </span>
          <h2
            id="ei-features-heading"
            className="mt-4 font-ei-heading text-3xl font-bold text-ei-forest md:text-4xl"
          >
            Everything You Need to Invoice on the Go
          </h2>
          <p className="mt-4 text-base text-ei-muted">
            From sign-up and onboarding to invoicing, analytics, and notifications — built for
            Android and web.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featureAreas.map((card, index) => (
            <FeatureCardBlock key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
