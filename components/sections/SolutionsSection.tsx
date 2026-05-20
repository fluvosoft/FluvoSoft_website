import Link from "next/link";

const solutions = [
  {
    title: "AI Automation",
    tagline: "Automate",
    description:
      "Streamline workflows with intelligent automation that learns and adapts to your business processes. Reduce manual tasks by up to 80% and boost productivity.",
    bullets: ["Workflow Optimization", "Process Learning", "Task Reduction"],
    href: "#automation",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Blockchain Development",
    tagline: "Decentralize",
    description:
      "Secure, transparent, decentralized solutions built on cutting-edge blockchain technology. Ensure data integrity and trust in every transaction.",
    bullets: ["Smart Contracts", "Data Integrity", "Trust & Security"],
    href: "#blockchain",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Custom Software",
    tagline: "Customize",
    description:
      "Tailored applications built specifically for your needs. From web apps to enterprise solutions, we deliver software that scales with your business.",
    bullets: ["Enterprise Solutions", "Scalable Architecture", "Custom Development"],
    href: "#custom-development",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h10M4 18h16" />
        <path d="M19 10v4" />
      </svg>
    ),
  },
  {
    title: "SaaS Products",
    tagline: "Scale",
    description:
      "Scalable software-as-a-service solutions that grow with your business. Cloud-based platforms with subscription management, analytics, and seamless integrations.",
    bullets: ["Cloud-Based", "Subscription Management", "Seamless Integration"],
    href: "#saas",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="solutions-heading">
      <div className="mx-auto max-w-container">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-cta">
            Solutions
          </p>
          <h2
            id="solutions-heading"
            className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Our Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-accent md:text-lg">
            Innovative technology solutions to help your business grow and succeed. We deliver cutting-edge software that transforms operations and drives success.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {solutions.map(({ title, tagline, description, bullets, href, icon }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-dashboard-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cta/30 hover:shadow-xl hover:shadow-black/30 focus-within:ring-2 focus-within:ring-cta/30 focus-within:ring-offset-2 focus-within:ring-offset-background md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cta transition-colors duration-300 group-hover:border-cta/30 group-hover:bg-cta/10">
                  {icon}
                </span>
                <span className="rounded-full border border-cta/40 bg-cta/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cta">
                  {tagline}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-medium text-foreground md:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-accent">
                {description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2" role="list">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-accent">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cta" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href={href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cta no-underline transition hover:gap-3 hover:underline"
              >
                Learn more
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#book-a-demo"
            className="inline-flex items-center justify-center rounded-full bg-cta px-8 py-3.5 text-sm font-medium text-white no-underline transition hover:bg-cta/90 focus-visible:ring-2 focus-visible:ring-cta/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Explore All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
