import Link from "next/link";

const includedFeatures = [
  "Unlimited invoices and clients",
  "All 20 professional templates",
  "Dashboard, analytics, and PDF export",
  "Cloud sync with Firebase",
  "No subscription or in-app purchases",
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
    <svg className="h-5 w-5 shrink-0 text-ei-nav" viewBox="0 0 24 24" fill="none" aria-hidden>
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
      className="scroll-mt-32 border-t border-ei-primary/10 bg-white px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ei-pricing-heading"
    >
      <div className="mx-auto max-w-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-md bg-ei-nav/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ei-primaryDark">
            Pricing
          </span>
          <h2
            id="ei-pricing-heading"
            className="mt-4 text-3xl font-bold leading-tight text-ei-textPrimary md:text-4xl"
          >
            Completely free to use
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ei-textPrimary/75 md:text-lg">
            Easy Invoice has no monthly fees, no premium tiers, and no paywalls on essential features.
            The app is supported by optional Google ads so we can keep invoicing accessible for every
            business.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-10">
          {/* Free plan card */}
          <article className="relative overflow-hidden rounded-2xl border border-ei-primary/10 bg-white p-8 shadow-lg lg:p-10">
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-ei-nav/10"
              aria-hidden
            />
            <p className="text-sm font-semibold uppercase tracking-wider text-ei-nav">
              Easy Invoice
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight text-ei-textPrimary">$0</span>
              <span className="text-lg text-ei-textPrimary/60">forever</span>
            </div>
            <p className="mt-4 text-base text-ei-textPrimary/80">
              Full access to invoicing, templates, analytics, and cloud backup — at no cost.
            </p>

            <ul className="mt-8 space-y-3">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-ei-textPrimary/85">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-ei-primaryDark px-8 py-3.5 text-sm font-semibold text-white no-underline transition hover:bg-ei-primary sm:w-auto"
            >
              Get it on Google Play
            </Link>
          </article>

          {/* How ads work */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-ei-primary/10 bg-ei-nav/5 p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-ei-textPrimary">How we keep it free</h3>
              <p className="mt-2 text-sm leading-relaxed text-ei-textPrimary/75">
                Instead of charging for subscriptions, Easy Invoice uses Google AdMob. Ads are
                designed to stay out of your way until you interact with them — they never block
                basic invoicing.
              </p>
            </div>

            {adNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-2xl border border-ei-primary/10 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-ei-textPrimary">{note.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ei-textPrimary/75">
                  {note.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ei-textPrimary/60">
          Prices and ad placements may vary by platform and region. Easy Invoice remains free — ads
          are the only monetization.
        </p>
      </div>
    </section>
  );
}
