"use client";

const items = [
  {
    title: "Defense & Intelligence",
    description: "Orchestrate agent workflows for decision advantage. Transform complex data into actionable intelligence with advanced AI agents.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Solutions",
    description: "Deploy intelligent agents that automate workflows and enhance productivity across your organization with continuous learning.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Blockchain Infrastructure",
    description: "Scalable and secure blockchain solutions for enterprise needs. Smart contracts, tokenization, and decentralized networks.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Fine-Tuning & RLHF",
    description: "Adapt best-in-class foundation models to your business and your specific data for sustainable AI programs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2 15 8l6 .5-4.5 4 1.5 6-6-3.5-6 3.5 1.5-6L3 8.5 9 8l3-6Z" />
      </svg>
    ),
  },
  {
    title: "Foundation Models",
    description: "Integrate with leading AI models, from open-source to closed-source, including Google, Meta, Cohere, and more.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Data",
    description: "Integrate your enterprise data into the fold of these models for long-term strategic differentiation.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

export default function EverythingYouNeedSection() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="everything-heading">
      <div className="mx-auto max-w-container">
        <h2
          id="everything-heading"
          className="text-center text-3xl font-medium text-foreground md:text-4xl lg:text-5xl"
        >
          Apply AI — Agentic Solutions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-accent">
          Transform your data and expertise into agentic solutions that continuously improve with human interaction.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-black/20 focus-within:ring-2 focus-within:ring-brand/50 focus-within:ring-offset-2 focus-within:ring-offset-background"
              tabIndex={0}
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-foreground transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06]">
                {item.icon}
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-accent">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

