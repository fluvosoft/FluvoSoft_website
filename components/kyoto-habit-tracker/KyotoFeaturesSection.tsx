import type { ReactNode } from "react";

type FeatureCard = {
  title: string;
  description: string;
  icon: ReactNode;
  featured?: boolean;
};

function IconBolt() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function IconCompass() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5l-2 5-5 2 2-5 5-2z" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m6-4a3 3 0 11-6 0 3 3 0 016 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconMood() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M7 4h10v4a5 5 0 01-10 0V4zM7 6H5a2 2 0 000 4h2M17 6h2a2 2 0 010 4h-2" />
    </svg>
  );
}

const featureAreas: FeatureCard[] = [
  {
    title: "Getting Started",
    description:
      "Branded welcome, onboarding slides, email or Google sign-in, email verification, and Terms & Privacy acknowledgment. Returning users skip intro and continue where they left off.",
    icon: <IconBolt />,
  },
  {
    title: "Home — Daily Habits",
    description:
      "Personalized greeting, date strip, mark habits complete, streak visibility, Today / Clubs toggle, notifications, and a center + for habits or mood.",
    icon: <IconHome />,
    featured: true,
  },
  {
    title: "Creating Habits",
    description:
      "Quit bad habits or start good ones — custom name, icon, color, times per day, build vs quit, and daily reminders with optional notes.",
    icon: <IconPlus />,
  },
  {
    title: "Explore",
    description:
      "Suggested habits, Habit Clubs, challenges, Learn Habits tips, and live search across habits, clubs, and challenges.",
    icon: <IconCompass />,
  },
  {
    title: "Activity & Progress",
    description:
      "Daily, Weekly, and Monthly views with success rate, completions, points, best streak, missed days, charts, and mood overview.",
    icon: <IconChart />,
  },
  {
    title: "Friends & Social",
    description:
      "Friend requests by @username, profiles, clubs, challenges, leaderboard, and in-app notifications for social and progress updates.",
    icon: <IconUsers />,
  },
  {
    title: "Mood Tracking",
    description:
      "Log how you feel from Activity or the center + menu, then review moods across the week alongside habit stats.",
    icon: <IconMood />,
  },
  {
    title: "Achievements",
    description:
      "Unlock milestones for multi-day streaks, early progress, and social or community engagement.",
    icon: <IconTrophy />,
  },
];

function FeatureCardBlock({ card, index }: { card: FeatureCard; index: number }) {
  const isFeatured = card.featured;

  return (
    <article
      className={`group ky-card-lift relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 ${
        isFeatured
          ? "border-2 border-ky-coral/40 bg-gradient-to-br from-ky-coral via-[#FF7A55] to-ky-coralDark text-white shadow-[0_20px_50px_-16px_rgba(255,107,69,0.45)]"
          : "border border-ky-ink/8 bg-gradient-to-b from-white to-ky-peach/50 shadow-[0_4px_24px_-8px_rgba(255,107,69,0.1)] hover:border-ky-coral/40"
      }`}
    >
      <span
        className={`absolute right-5 top-5 font-ky-heading text-3xl font-bold tabular-nums ${
          isFeatured ? "text-white/15" : "text-ky-ink/10"
        }`}
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-105 ${
          isFeatured
            ? "bg-white/20 text-white ring-1 ring-white/25"
            : "bg-ky-coral/20 text-ky-coral ring-1 ring-ky-coral/25"
        }`}
      >
        {card.icon}
      </div>

      <h3
        className={`font-ky-heading text-xl font-bold leading-snug ${
          isFeatured ? "text-white" : "text-ky-ink"
        }`}
      >
        {card.title}
      </h3>

      <p
        className={`mt-3 flex-1 text-[15px] leading-relaxed ${
          isFeatured ? "text-white/85" : "text-ky-muted"
        }`}
      >
        {card.description}
      </p>

      <div
        className={`mt-5 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16 ${
          isFeatured ? "bg-white" : "bg-ky-coral/60 group-hover:bg-ky-coral"
        }`}
        aria-hidden
      />
    </article>
  );
}

export default function KyotoFeaturesSection() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 bg-ky-peach px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ky-features-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(58,122,85,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-ky-coral/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ky-ink">
            App features
          </span>
          <h2
            id="ky-features-heading"
            className="mt-4 font-ky-heading text-3xl font-bold text-ky-ink md:text-4xl"
          >
            Everything in KYOTO Habit Tracker
          </h2>
          <p className="mt-4 text-base text-ky-muted">
            Build good habits, stick with them, and grow with others — daily check-ins, clubs,
            challenges, mood, and friendly accountability in one warm, light app.
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
