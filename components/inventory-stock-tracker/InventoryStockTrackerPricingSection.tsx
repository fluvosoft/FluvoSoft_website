import { GooglePlayButton } from "./StoreButtons";

const freeFeatures = [
  "Unlimited items, categories, and stock movements",
  "Barcode scanner and Firebase cloud sync with offline mode",
  "Dashboard analytics (Last 7 Days)",
  "Activity history (last 30 days) and basic search",
  "Customers, vendors, and organization profile",
];

const proFeatures = [
  "CSV export & share for inventory and movements",
  "All analytics ranges: Today, Last 30 Days, All Time",
  "Low-stock alerts at reorder points",
  "Import phone contacts as customers or vendors",
  "Unlimited activity history",
  "Advanced filters, sort, group-by, multi-location tracking",
  "Financial reports: profit/loss and stock value by category",
];

const proPlusFeatures = [
  "Everything in Pro",
  "Item expiry dates, supplier info, and custom notes",
  "PDF inventory reports — generate and share",
  "Cloud backup snapshots with one-tap restore",
  "Advanced analytics: top sellers, slow movers, turnover",
  "Bulk multi-select: delete, stock changes, reassign categories",
];

const comparisonRows = [
  {
    feature: "Monthly cost",
    stockTracker: "Free · Pro $4.99 · Pro Plus $9.99",
    typical: "$15–$50/mo",
  },
  {
    feature: "Unlimited items (Free)",
    stockTracker: "Included",
    typical: "Often capped",
  },
  {
    feature: "Barcode scanning",
    stockTracker: "Included on Free",
    typical: "Often Pro only",
  },
  {
    feature: "Offline + cloud sync",
    stockTracker: "Included on Free",
    typical: "Varies by plan",
  },
  {
    feature: "CSV export",
    stockTracker: "Pro",
    typical: "Often Enterprise",
  },
  {
    feature: "PDF reports & cloud backup",
    stockTracker: "Pro Plus",
    typical: "Rare on mobile",
  },
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-ei-lime" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function InventoryStockTrackerPricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-white px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ist-pricing-heading"
    >
      <div className="mx-auto max-w-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-ei-lime/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ei-forest">
            Pricing
          </span>
          <h2
            id="ist-pricing-heading"
            className="mt-4 font-ei-heading text-3xl font-bold text-ei-forest md:text-4xl"
          >
            Start Free. Upgrade When You Need More.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ei-muted md:text-lg">
            Core inventory tools are free on Android. Pro and Pro Plus subscriptions match in-app
            plans — restore purchases after installing from Google Play when available.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-start lg:gap-6 xl:gap-8">
          <article className="ei-pricing-glow relative overflow-hidden rounded-2xl border border-ei-lime/40 bg-white p-8 lg:p-8">
            <span className="inline-flex items-center rounded-full bg-ei-lime/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ei-forest">
              Free
            </span>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-ei-muted">
              Inventory Stock Tracker
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-ei-heading text-5xl font-bold text-ei-forest">$0</span>
              <span className="text-lg text-ei-muted">forever</span>
            </div>
            <p className="mt-4 text-base text-ei-muted">
              Full access to inventory, stock tracking, contacts, and cloud backup — at no cost.
            </p>

            <ul className="mt-8 space-y-3">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-ei-forest">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-ei-forest/15 bg-ei-cream p-8 shadow-sm lg:p-8">
            <span className="inline-flex items-center rounded-full bg-ei-forest px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Pro
            </span>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-ei-muted">
              Growing businesses
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-ei-heading text-5xl font-bold text-ei-forest">$4.99</span>
              <span className="text-lg text-ei-muted">/ month</span>
            </div>
            <p className="mt-4 text-base text-ei-muted">
              Exports, full analytics, alerts, locations, and financial reports.
            </p>

            <ul className="mt-8 space-y-3">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-ei-forest">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-2xl border-2 border-ei-forest/20 bg-gradient-to-b from-white to-ei-cream/60 p-8 shadow-md lg:p-8">
            <span className="inline-flex items-center rounded-full bg-ei-lime px-3 py-1 text-xs font-bold uppercase tracking-wide text-ei-forest">
              Pro Plus
            </span>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-ei-muted">
              Advanced operations
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-ei-heading text-5xl font-bold text-ei-forest">$9.99</span>
              <span className="text-lg text-ei-muted">/ month</span>
            </div>
            <p className="mt-4 text-base text-ei-muted">
              Everything in Pro, plus PDF reports, cloud backup, and bulk analytics tools.
            </p>

            <ul className="mt-8 space-y-3">
              {proPlusFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-ei-forest">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <GooglePlayButton className="w-fit" size="large" />
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-ei-forest/10 bg-ei-cream">
          <h3 className="border-b border-ei-forest/10 bg-ei-forest px-4 py-3 font-ei-heading text-lg font-semibold text-white">
            Inventory Stock Tracker vs Typical Inventory Apps
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] text-left text-sm">
              <thead>
                <tr className="border-b border-ei-forest/10 bg-white">
                  <th scope="col" className="px-4 py-3 font-semibold text-ei-forest">
                    Feature
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-ei-forest">
                    Stock Tracker
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-ei-muted">
                    Typical apps
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-ei-forest/5 last:border-0">
                    <th scope="row" className="px-4 py-3 font-medium text-ei-forest">
                      {row.feature}
                    </th>
                    <td className="px-4 py-3 text-ei-forest">{row.stockTracker}</td>
                    <td className="px-4 py-3 text-ei-muted">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ei-muted">
          FluvoSoft Softwares — Manage your inventory with ease. Subscriptions are managed in-app
          (Android 7.0+, v1.0.0). Prices may vary by region and store.
        </p>
      </div>
    </section>
  );
}
