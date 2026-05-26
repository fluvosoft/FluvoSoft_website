import type { ReactNode } from "react";

type FeatureCard = {
  title: string;
  description: string;
  icon: ReactNode;
  featured?: boolean;
};

function IconAccount() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function IconInventory() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
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

function IconContacts() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function IconActivity() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconBarcode() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h2m14 0h2M3 17h2m14 0h2M7 7v10m3-10v10m4-10v10m3-10v10" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
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

const featureAreas: FeatureCard[] = [
  {
    title: "Account & Setup",
    description:
      "Sign up with email or Google, verify your email, and set your organization profile with business name, country, and currency.",
    icon: <IconAccount />,
  },
  {
    title: "Inventory Management",
    description:
      "Add items with images, SKU, barcode, and prices. Scan barcodes, record stock in/out/adjustments, and view profit margins.",
    icon: <IconInventory />,
    featured: true,
  },
  {
    title: "Dashboard & Analytics",
    description:
      "Summary of sales, purchases, earnings, and spendings plus a bar chart of sales vs. purchases over time.",
    icon: <IconDashboard />,
  },
  {
    title: "Contacts",
    description:
      "Customers and vendors with filter, sort, and search. Pro adds bulk import from your phone contacts.",
    icon: <IconContacts />,
  },
  {
    title: "Activity History",
    description:
      "Full log of items, stock, contacts, and categories — filter by type, grouped by date with timestamps.",
    icon: <IconActivity />,
  },
  {
    title: "Barcode Scanner",
    description: "Use your phone camera to scan product barcodes when adding or finding items.",
    icon: <IconBarcode />,
  },
  {
    title: "Cloud & Offline",
    description:
      "Real-time cloud sync across devices. Work offline; changes upload automatically when you reconnect.",
    icon: <IconCloud />,
  },
  {
    title: "Settings",
    description:
      "Organization profile, categories, low-stock preferences, privacy controls, feedback, and account management.",
    icon: <IconSettings />,
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

export default function InventoryStockTrackerFeaturesSection() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 bg-ei-cream px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ist-features-heading"
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
            id="ist-features-heading"
            className="mt-4 font-ei-heading text-3xl font-bold text-ei-forest md:text-4xl"
          >
            Everything You Need to Manage Stock on the Go
          </h2>
          <p className="mt-4 text-base text-ei-muted">
            From sign-up and organization setup to inventory, analytics, contacts, and activity
            history — built for Android and iOS.
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
