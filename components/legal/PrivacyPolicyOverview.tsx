import Link from "next/link";
import {
  privacyHighlights,
  privacyScopeItems,
  type PrivacyHighlightIcon,
  type PrivacyScopeIcon,
} from "@/data/fluvoSoftPrivacy";

function HighlightIcon({ icon }: { icon: PrivacyHighlightIcon }) {
  const className = "h-5 w-5 text-cta";
  switch (icon) {
    case "minimal":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M4 6h16M4 12h10M4 18h6" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 3l7 4v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V7l7-4z" strokeLinejoin="round" />
        </svg>
      );
    case "purpose":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "control":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.7 1.7 0 0 0-1-1.51 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.7 1.7 0 0 0 1.51-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.7 1.7 0 0 0 1 1.51 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87 1.7 1.7 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1z" />
        </svg>
      );
  }
}

function ScopeIcon({ icon }: { icon: PrivacyScopeIcon }) {
  const className = "h-5 w-5 text-cta";
  switch (icon) {
    case "website":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    case "apps":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" strokeLinecap="round" />
        </svg>
      );
    case "services":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M4 19V5l8-2v16l-8 2zm8-2l8 2V5l-8-2v14z" strokeLinejoin="round" />
        </svg>
      );
    case "contact":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M4 6h16v12H4V6z" strokeLinejoin="round" />
          <path d="M4 7l8 6 8-6" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function PrivacyAtAGlance() {
  return (
    <section
      id="at-a-glance"
      className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20"
      aria-labelledby="privacy-glance-heading"
    >
      <div className="mx-auto max-w-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cta">Summary</p>
            <h2
              id="privacy-glance-heading"
              className="mt-2 text-2xl font-medium text-foreground md:text-3xl"
            >
              At a glance
            </h2>
            <p className="mt-3 max-w-xl text-accent">
              Four principles that guide how we handle your information.
            </p>
          </div>
          <Link
            href="#full-policy"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-cta no-underline transition hover:text-cta/80"
          >
            Read full policy
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
          <div className="grid divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y lg:grid-cols-4 lg:divide-y-0">
            {privacyHighlights.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col border-b border-white/10 p-6 transition last:border-b-0 hover:bg-white/[0.02] sm:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cta/10 ring-1 ring-cta/20 transition group-hover:bg-cta/15">
                  <HighlightIcon icon={item.icon} />
                </div>
                <h3 className="mt-4 text-base font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-accent">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrivacyWhatThisCovers() {
  return (
    <section
      id="what-this-covers"
      className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20"
      aria-labelledby="privacy-scope-heading"
    >
      <div className="mx-auto max-w-container">
        <div className="lg:grid lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12 xl:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-wider text-cta">Scope</p>
            <h2
              id="privacy-scope-heading"
              className="mt-2 text-2xl font-medium text-foreground md:text-3xl"
            >
              What this covers
            </h2>
            <p className="mt-4 leading-relaxed text-accent">
              This Privacy Policy applies whenever you interact with FluvoSoft online or through
              our products and services.
            </p>
            <div className="mt-6 rounded-xl border border-cta/20 bg-cta/5 px-4 py-4">
              <p className="text-sm leading-relaxed text-accent">
                <span className="font-medium text-foreground">Note:</span> Some apps include their
                own in-product privacy sections. Where those exist, they supplement this policy for
                that product. See the dedicated{" "}
                <Link
                  href="#kyoto-habit-tracker"
                  className="font-medium text-cta no-underline hover:underline"
                >
                  KYOTO Habit Tracker
                </Link>{" "}
                chapter in the full policy below.
              </p>
            </div>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-0">
            {privacyScopeItems.map((item) => (
              <li key={item.id}>
                <article className="flex h-full gap-4 rounded-xl border border-white/10 bg-dashboard-card p-5 transition hover:border-cta/25 hover:bg-white/[0.02]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cta/10 ring-1 ring-cta/20">
                    <ScopeIcon icon={item.icon} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-medium text-foreground">{item.label}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-accent">
                      {item.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
