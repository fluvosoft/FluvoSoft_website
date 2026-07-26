import KyotoWishlistForm from "./KyotoWishlistForm";

const includedFeatures = [
  "Daily habit check-ins, streaks, and reminders",
  "Build good habits and quit bad ones",
  "Clubs, challenges, friends, and leaderboard",
  "Activity stats, mood tracking, and achievements",
];

const pillars = [
  {
    title: "Build",
    description: "Start good habits and quit bad ones with templates, custom options, and reminders.",
  },
  {
    title: "Track",
    description: "Check in daily and see streaks, charts, points, and mood over time.",
  },
  {
    title: "Grow",
    description: "Learn tips, take challenges, and unlock achievements for consistency.",
  },
  {
    title: "Connect",
    description: "Friends, clubs, and a leaderboard keep motivation shared — not solo.",
  },
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-ky-coral" viewBox="0 0 24 24" fill="none" aria-hidden>
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

export default function KyotoPricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-white px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ky-pricing-heading"
    >
      <div className="mx-auto max-w-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-ky-coral/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ky-ink">
            Pricing
          </span>
          <h2
            id="ky-pricing-heading"
            className="mt-4 font-ky-heading text-3xl font-bold text-ky-ink md:text-4xl"
          >
            Free to start — built for everyday routines
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ky-muted md:text-lg">
            KYOTO is warm and approachable: habits, progress, and community without making change
            feel strict or clinical. Core tracking stays free so routines stay human.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-10">
          <article className="ky-pricing-glow relative overflow-hidden rounded-2xl border border-ky-coral/40 bg-white p-8 lg:p-10">
            <span className="inline-flex items-center rounded-full bg-ky-coral/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ky-ink">
              Core product
            </span>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-ky-muted">
              KYOTO Habit Tracker
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-ky-heading text-5xl font-bold text-ky-ink">$0</span>
              <span className="text-lg text-ky-muted">to start</span>
            </div>
            <p className="mt-4 text-base text-ky-muted">
              Create an account, set up starter habits, and use Home, Explore, Activity, and Profile
              without a subscription gate on the essentials.
            </p>
            <ul className="mt-6 space-y-3">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-ky-ink">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <KyotoWishlistForm className="max-w-none" />
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-ky-ink/10 bg-ky-peach/60 p-6"
              >
                <h3 className="font-ky-heading text-lg font-bold text-ky-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ky-muted">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
