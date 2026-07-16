import ResumeBuilderWishlistForm from "./ResumeBuilderWishlistForm";

const includedFeatures = [
  "Unlimited resumes and sections",
  "All 20 professional templates",
  "ATS score, live preview, and PDF export",
  "No subscription or in-app purchases",
];

const comparisonRows = [
  { feature: "Monthly subscription", resumeBuilder: "None — $0 forever", typical: "$5–$15/mo" },
  { feature: "Resume templates", resumeBuilder: "20 included free", typical: "Limited on free tier" },
  { feature: "ATS score checker", resumeBuilder: "Included", typical: "Often paywalled" },
  { feature: "PDF export", resumeBuilder: "Included", typical: "Often paywalled" },
];

const adNotes = [
  {
    title: "Banner ads on Home",
    description:
      "The native app may show banner ads on Home — one dismissible and one inline. Ads help keep Resume Builder free for everyone.",
  },
  {
    title: "Full-screen ads before export",
    description:
      "Full-screen ads may appear before resume preview or PDF export in the native Android app.",
  },
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-rb-brand" viewBox="0 0 24 24" fill="none" aria-hidden>
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

export default function ResumeBuilderPricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-white px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="rb-pricing-heading"
    >
      <div className="mx-auto max-w-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-rb-brand/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rb-navy">
            Pricing
          </span>
          <h2
            id="rb-pricing-heading"
            className="mt-4 font-rb-heading text-3xl font-bold text-rb-navy md:text-4xl"
          >
            $0 Forever — No Hidden Fees
          </h2>
          <p className="mt-4 text-base leading-relaxed text-rb-muted md:text-lg">
            Resume Builder has no monthly fees, no premium tiers, and no paywalls on essential
            features. Optional ads keep resume building accessible for everyone.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-10">
          <article className="rb-pricing-glow relative overflow-hidden rounded-2xl border border-rb-brand/40 bg-white p-8 lg:p-10">
            <span className="inline-flex items-center rounded-full bg-rb-brand/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-rb-navy">
              No hidden fees
            </span>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-rb-muted">
              Resume Builder
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-rb-heading text-5xl font-bold text-rb-navy">$0</span>
              <span className="text-lg text-rb-muted">forever</span>
            </div>
            <p className="mt-4 text-base text-rb-muted">
              Full access to templates, editor, ATS scoring, and cloud sync — at no cost.
            </p>

            <ul className="mt-8 space-y-3">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-rb-navy">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <ResumeBuilderWishlistForm />
            </div>
          </article>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-rb-navy/10 bg-rb-cream">
              <h3 className="border-b border-rb-navy/10 bg-rb-navy px-4 py-3 font-rb-heading text-lg font-semibold text-white">
                Resume Builder vs Typical Resume Apps
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-rb-navy/10 bg-white">
                      <th scope="col" className="px-4 py-3 font-semibold text-rb-navy">
                        Feature
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-rb-navy">
                        Resume Builder
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-rb-muted">
                        Typical apps
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.feature} className="border-b border-rb-navy/5 last:border-0">
                        <th scope="row" className="px-4 py-3 font-medium text-rb-navy">
                          {row.feature}
                        </th>
                        <td className="px-4 py-3 text-rb-navy">{row.resumeBuilder}</td>
                        <td className="px-4 py-3 text-rb-muted">{row.typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {adNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-2xl border border-rb-navy/10 bg-white p-6 shadow-sm"
              >
                <h3 className="font-rb-heading font-semibold text-rb-navy">{note.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-rb-muted">{note.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-rb-muted">
          Prices and ad placements may vary by platform and region. Resume Builder remains free — ads
          are the only monetization.
        </p>
      </div>
    </section>
  );
}
