import type { ReactNode } from "react";

type FeatureCard = {
  title: string;
  description: string;
  icon: ReactNode;
  featured?: boolean;
};

function IconGettingStarted() {
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

function IconTemplates() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  );
}

function IconEditor() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
}

function IconPreview() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function IconLibrary() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}

function IconAts() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
    title: "Getting Started",
    description:
      "Splash screen, intro slides, email or Google sign-in, verification, and first-time profile and template setup.",
    icon: <IconGettingStarted />,
  },
  {
    title: "Home",
    description:
      "Greeting, notifications, resume count, latest progress, recent resumes, templates carousel, and ATS score card.",
    icon: <IconHome />,
  },
  {
    title: "Templates",
    description:
      "Browse 20 layouts, search and filter by category, and start a new resume with any free template.",
    icon: <IconTemplates />,
  },
  {
    title: "Create & Edit",
    description:
      "Collapsible sections, auto-fill, draft save with completion %, writing tips, and template switching.",
    icon: <IconEditor />,
    featured: true,
  },
  {
    title: "Preview & Share",
    description: "Live resume preview, download as PDF, and share through your device share sheet.",
    icon: <IconPreview />,
  },
  {
    title: "My Resumes",
    description:
      "Search and filter your library, open to edit, duplicate resumes, and delete with confirmation.",
    icon: <IconLibrary />,
  },
  {
    title: "ATS Score & Tips",
    description:
      "Upload a PDF, get readiness scores, actionable tips with point boosts, and re-check anytime.",
    icon: <IconAts />,
  },
  {
    title: "Profile & Settings",
    description:
      "Edit profile details, preferred template, push notifications, inbox, and sign out.",
    icon: <IconSettings />,
  },
];

function FeatureCardBlock({ card, index }: { card: FeatureCard; index: number }) {
  const isFeatured = card.featured;

  return (
    <article
      className={`group rb-card-lift relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 ${
        isFeatured
          ? "border-2 border-rb-brand/50 bg-gradient-to-br from-rb-navy via-[#1A4A75] to-rb-deep text-white shadow-[0_20px_50px_-16px_rgba(13,40,71,0.45)]"
          : "border border-rb-navy/10 bg-gradient-to-b from-white to-rb-cream/40 shadow-[0_4px_24px_-8px_rgba(13,40,71,0.08)] hover:border-rb-brand/40"
      }`}
    >
      <span
        className={`absolute right-5 top-5 font-rb-heading text-3xl font-bold tabular-nums ${
          isFeatured ? "text-white/15" : "text-rb-navy/10"
        }`}
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-105 ${
          isFeatured
            ? "bg-white/15 text-rb-sky ring-1 ring-white/20"
            : "bg-rb-brand/25 text-rb-navy ring-1 ring-rb-brand/30"
        }`}
      >
        {card.icon}
      </div>

      <h3
        className={`font-rb-heading text-xl font-bold leading-snug ${
          isFeatured ? "text-white" : "text-rb-navy"
        }`}
      >
        {card.title}
      </h3>

      <p
        className={`mt-3 flex-1 text-[15px] leading-relaxed ${
          isFeatured ? "text-white/85" : "text-rb-muted"
        }`}
      >
        {card.description}
      </p>

      <div
        className={`mt-5 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16 ${
          isFeatured ? "bg-rb-sky" : "bg-rb-brand/60 group-hover:bg-rb-brand"
        }`}
        aria-hidden
      />
    </article>
  );
}

export default function ResumeBuilderFeaturesSection() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 bg-rb-cream px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="rb-features-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(43,121,194,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-rb-brand/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rb-navy">
            App features
          </span>
          <h2
            id="rb-features-heading"
            className="mt-4 font-rb-heading text-3xl font-bold text-rb-navy md:text-4xl"
          >
            Everything You Need to Build Your Resume
          </h2>
          <p className="mt-4 text-base text-rb-muted">
            From sign-up and onboarding to templates, ATS scoring, and PDF export — built for
            Android.
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
