import { GooglePlayButton } from "./GooglePlayButton";

const includedFeatures = [
  "Unlimited invoices and clients",
  "All 20 professional templates",
  "Dashboard, analytics, and PDF export",
  "No subscription or in-app purchases",
];

const comparisonRows = [
  { feature: "Monthly subscription", easyInvoice: "None — $0 forever", typical: "$9–$30/mo" },
  { feature: "Invoice templates", easyInvoice: "20 included free", typical: "Limited on free tier" },
  { feature: "PDF export", easyInvoice: "Included", typical: "Often paywalled" },
];

const adNotes = [
  {
    title: "Rewarded ads (optional)",
    description:
      "On supported actions — such as opening an invoice for edit — you may choose to watch a short Google ad to continue. Watching is optional and keeps core invoicing free for everyone.",
  },
  {
    title: "Banner ads on larger screens",
    description:
      "In the native mobile app on wide layouts, a small AdMob banner may appear. Banner ads are not shown on the web version.",
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

export default function EasyInvoicePricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-white px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ei-pricing-heading"
    >
      <div className="mx-auto max-w-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-ei-lime/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ei-forest">
            Pricing
          </span>
          <h2
            id="ei-pricing-heading"
            className="mt-4 font-ei-heading text-3xl font-bold text-ei-forest md:text-4xl"
          >
            $0 Forever — No Hidden Fees
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ei-muted md:text-lg">
            Easy Invoice has no monthly fees, no premium tiers, and no paywalls on essential
            features. Optional Google AdMob ads keep invoicing accessible for every business.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-10">
          <article className="ei-pricing-glow relative overflow-hidden rounded-2xl border border-ei-lime/40 bg-white p-8 lg:p-10">
            <span className="inline-flex items-center rounded-full bg-ei-lime/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ei-forest">
              No hidden fees
            </span>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-ei-muted">
              Easy Invoice
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-ei-heading text-5xl font-bold text-ei-forest">$0</span>
              <span className="text-lg text-ei-muted">forever</span>
            </div>
            <p className="mt-4 text-base text-ei-muted">
              Full access to invoicing, templates, analytics, and cloud backup — at no cost.
            </p>

            <ul className="mt-8 space-y-3">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-ei-forest">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <GooglePlayButton className="w-fit" size="large" />
            </div>
          </article>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-ei-forest/10 bg-ei-cream">
              <h3 className="border-b border-ei-forest/10 bg-ei-forest px-4 py-3 font-ei-heading text-lg font-semibold text-white">
                Easy Invoice vs Typical Invoice Apps
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-ei-forest/10 bg-white">
                      <th scope="col" className="px-4 py-3 font-semibold text-ei-forest">
                        Feature
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-ei-forest">
                        Easy Invoice
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
                        <td className="px-4 py-3 text-ei-forest">{row.easyInvoice}</td>
                        <td className="px-4 py-3 text-ei-muted">{row.typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {adNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-2xl border border-ei-forest/10 bg-white p-6 shadow-sm"
              >
                <h3 className="font-ei-heading font-semibold text-ei-forest">{note.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ei-muted">{note.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ei-muted">
          Prices and ad placements may vary by platform and region. Easy Invoice remains free — ads
          are the only monetization.
        </p>
      </div>
    </section>
  );
}
