import { GooglePlayButton } from "./StoreButtons";

const freeFeatures = [
  "Unlimited items, stock movements, contacts, and categories",
  "Barcode scanner and cloud sync with offline support",
  "Dashboard with Last 7 Days analytics",
  "Activity history (last 30 days) and basic search",
];

const proFeatures = [
  "CSV export & share for inventory and movements",
  "All analytics ranges: Today, Last 30 Days, All Time",
  "Low stock alerts and alert center",
  "Import phone contacts as customers or vendors",
  "Unlimited activity history",
  "Advanced filters, multi-location tracking, financial reports",
];

const comparisonRows = [
  {
    feature: "Monthly cost",
    stockTracker: "Free tier + Pro $4.99/mo",
    typical: "$15–$50/mo",
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
            All core inventory features are free. Pro unlocks exports, full analytics, alerts, and
            financial reports for growing businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
          <article className="ei-pricing-glow relative overflow-hidden rounded-2xl border border-ei-lime/40 bg-white p-8 lg:p-10">
            <span className="inline-flex items-center rounded-full bg-ei-lime/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ei-forest">
              Free — default
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

          <article className="relative overflow-hidden rounded-2xl border border-ei-forest/15 bg-ei-cream p-8 shadow-sm lg:p-10">
            <span className="inline-flex items-center rounded-full bg-ei-forest px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Pro
            </span>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-ei-muted">
              For growing businesses
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-ei-heading text-5xl font-bold text-ei-forest">$4.99</span>
              <span className="text-lg text-ei-muted">/ month</span>
            </div>
            <p className="mt-4 text-base text-ei-muted">
              Everything in Free, plus exports, full analytics, alerts, and advanced tools.
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
        </div>

        <div className="mt-10 flex justify-center">
          <GooglePlayButton className="w-full sm:w-auto" size="large" />
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

        <div className="mt-6 rounded-2xl border border-dashed border-ei-forest/20 bg-white p-6 text-center shadow-sm">
          <h3 className="font-ei-heading font-semibold text-ei-forest">Pro Plus — coming soon</h3>
          <p className="mt-2 text-sm leading-relaxed text-ei-muted">
            A future tier with additional premium features for larger businesses and multi-team
            operations.
          </p>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ei-muted">
          FluvoSoft Softwares — Manage your inventory with ease. Prices may vary by platform and
          region. Version 1.0.0.
        </p>
      </div>
    </section>
  );
}
