import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "R&D | Research & Development Lab",
  description:
    "FluvoSoft R&D lab — where ideas become prototypes. We explore emerging tech, run experiments, and build the next generation of blockchain, AI, and software products.",
  keywords: [
    "R&D",
    "research and development",
    "innovation lab",
    "technology prototyping",
    "FluvoSoft lab",
    "emerging technology",
  ],
  openGraph: {
    title: "R&D | FluvoSoft",
    description:
      "Our research and development lab explores bold ideas, prototypes fast, and turns experiments into products that matter.",
    url: "/rnd",
  },
  alternates: {
    canonical: "/rnd",
  },
};

const pillars = [
  {
    label: "Research",
    tagline: "Ask the hard questions",
    description:
      "We study emerging technologies, market shifts, and unsolved problems. Our research feeds directly into what we build — no ivory tower, just practical discovery.",
    points: ["Technology scouting", "Feasibility studies", "Proof-of-concept design", "Industry trend analysis"],
  },
  {
    label: "Development",
    tagline: "Build what works",
    description:
      "We turn hypotheses into working prototypes. Fast iterations, real code, measurable outcomes — then we refine until it's ready to ship or scale.",
    points: ["Rapid prototyping", "MVP engineering", "Performance benchmarking", "Production handoff"],
  },
];

const processSteps = [
  { num: "01", title: "Explore", desc: "Identify opportunities at the intersection of technology and business. Scan trends, map gaps, and frame testable hypotheses." },
  { num: "02", title: "Experiment", desc: "Build small, focused prototypes to validate assumptions. Fail fast, learn faster, and document every insight." },
  { num: "03", title: "Evaluate", desc: "Measure results against clear success criteria — performance, usability, security, and commercial viability." },
  { num: "04", title: "Evolve", desc: "Promote winners into products, client solutions, or open-source contributions. Iterate or pivot based on evidence." },
];

const focusAreas = [
  { title: "AI & Machine Learning", desc: "LLM integrations, intelligent agents, and automation pipelines that learn from real workflows.", icon: "◈" },
  { title: "Blockchain & Web3", desc: "Smart contracts, tokenization, DeFi primitives, and enterprise distributed ledger experiments.", icon: "⬡" },
  { title: "Product Innovation", desc: "New SaaS concepts, mobile apps, and tools born inside FluvoSoft Lab — like Easy Invoice.", icon: "◎" },
  { title: "Infrastructure & DevOps", desc: "Cloud-native architectures, edge computing, and developer tooling that accelerates delivery.", icon: "⬢" },
];

const principles = [
  { title: "Curiosity-Driven", desc: "We chase questions, not just answers. Every project starts with genuine curiosity about what's possible." },
  { title: "Evidence Over Opinion", desc: "Data and working code beat assumptions. We validate before we commit." },
  { title: "Ship to Learn", desc: "Prototypes in users' hands reveal more than months of planning. We build early and iterate often." },
  { title: "Open Collaboration", desc: "We share findings with clients, partners, and the community — research only matters when it creates value." },
];

function RdHeroVisual() {
  return (
    <div className="relative flex aspect-square w-full max-w-md items-center justify-center" aria-hidden>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,107,62,0.18) 0%, rgba(251,146,60,0.08) 40%, transparent 70%)",
        }}
      />
      {/* Outer orbit ring */}
      <svg viewBox="0 0 320 320" className="absolute h-full w-full" fill="none">
        <circle cx="160" cy="160" r="140" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="160" cy="160" r="100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <circle cx="160" cy="160" r="60" stroke="rgba(255,107,62,0.25)" strokeWidth="1.5" />
        {/* Orbit nodes */}
        <circle cx="160" cy="20" r="5" fill="#FF6B3E" opacity="0.9" />
        <circle cx="300" cy="160" r="4" fill="#FB923C" opacity="0.7" />
        <circle cx="160" cy="300" r="4" fill="#FDBA74" opacity="0.6" />
        <circle cx="20" cy="160" r="5" fill="#FF6B3E" opacity="0.8" />
        <circle cx="255" cy="65" r="3" fill="rgba(255,255,255,0.4)" />
        <circle cx="65" cy="255" r="3" fill="rgba(255,255,255,0.3)" />
        {/* Connection lines */}
        <line x1="160" y1="160" x2="160" y2="20" stroke="rgba(255,107,62,0.2)" strokeWidth="1" />
        <line x1="160" y1="160" x2="300" y2="160" stroke="rgba(255,107,62,0.15)" strokeWidth="1" />
        <line x1="160" y1="160" x2="160" y2="300" stroke="rgba(255,107,62,0.15)" strokeWidth="1" />
        <line x1="160" y1="160" x2="20" y2="160" stroke="rgba(255,107,62,0.2)" strokeWidth="1" />
        {/* Center flask / beaker silhouette */}
        <path
          d="M148 110 h24 v30 l20 50 a12 12 0 0 1 -10 18 h-44 a12 12 0 0 1 -10 -18 l20 -50 v-30 z"
          fill="rgba(255,107,62,0.12)"
          stroke="rgba(255,107,62,0.5)"
          strokeWidth="1.5"
        />
        <rect x="148" y="102" width="24" height="10" rx="2" fill="rgba(255,107,62,0.2)" stroke="rgba(255,107,62,0.4)" strokeWidth="1" />
        {/* Liquid level */}
        <path
          d="M136 178 l16 38 a8 8 0 0 0 16 0 l16 -38"
          fill="rgba(255,107,62,0.25)"
        />
        {/* Bubbles */}
        <circle cx="155" cy="195" r="3" fill="rgba(251,146,60,0.6)" />
        <circle cx="168" cy="205" r="2" fill="rgba(253,186,116,0.5)" />
        <circle cx="160" cy="188" r="2" fill="rgba(255,255,255,0.3)" />
      </svg>
      {/* R&D badge */}
      <div className="relative z-10 rounded-2xl border border-white/10 bg-dashboard-card/80 px-6 py-4 backdrop-blur-sm">
        <p className="text-center text-3xl font-bold tracking-tight text-foreground">
          <span className="text-cta">R</span>
          <span className="text-accent">&</span>
          <span className="text-cta">D</span>
        </p>
        <p className="mt-1 text-center text-xs font-medium uppercase tracking-widest text-accent">FluvoSoft Lab</p>
      </div>
    </div>
  );
}

export default function RnDPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-24">
          {/* Dot grid background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            aria-hidden
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative mx-auto max-w-container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14">
              <div className="order-2 lg:order-1">
                <p className="text-sm font-medium uppercase tracking-widest text-cta">FluvoSoft Lab</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  <span className="text-cta">R</span>
                  <span className="text-accent">esearch</span>
                  {" "}
                  <span className="text-accent">&</span>
                  {" "}
                  <span className="text-cta">D</span>
                  <span className="text-accent">evelopment</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-accent">
                  Where bold ideas meet working code. Our R&D lab explores emerging technologies, runs fast experiments, and builds the prototypes that become tomorrow&apos;s products.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/#book-a-demo"
                    className="inline-flex rounded-full bg-cta px-6 py-3 text-sm font-medium text-white no-underline transition hover:bg-cta/90"
                  >
                    Partner With Us
                  </Link>
                  <Link
                    href="/research"
                    className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-foreground no-underline transition hover:border-cta/50 hover:text-cta"
                  >
                    Read Our Research
                  </Link>
                </div>
              </div>
              <div className="order-1 flex justify-center lg:order-2">
                <RdHeroVisual />
              </div>
            </div>
          </div>
        </section>

        {/* Research & Development pillars */}
        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">Two Sides of Innovation</h2>
            <p className="mt-2 max-w-2xl text-accent">
              R&D isn&apos;t a department — it&apos;s a mindset. Research asks &ldquo;what if?&rdquo; Development answers with &ldquo;here&apos;s how.&rdquo;
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="rounded-2xl border border-white/10 bg-dashboard-card p-8 transition hover:border-cta/30"
                >
                  <p className="text-sm font-medium uppercase tracking-wider text-cta">{pillar.label}</p>
                  <h3 className="mt-2 text-xl font-medium text-foreground">{pillar.tagline}</h3>
                  <p className="mt-4 text-accent">{pillar.description}</p>
                  <ul className="mt-6 space-y-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-accent">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cta" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">Our R&D Process</h2>
            <p className="mt-2 text-accent">From spark to solution — a disciplined cycle of discovery and delivery</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.num} className="rounded-xl border border-white/10 bg-dashboard-card p-6">
                  <span className="text-2xl font-semibold text-cta">{step.num}</span>
                  <h3 className="mt-3 text-lg font-medium text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-accent">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Focus areas */}
        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">What We Explore</h2>
            <p className="mt-2 text-accent">Active research domains inside FluvoSoft Lab</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="group rounded-xl border border-white/10 bg-dashboard-card p-6 transition hover:border-cta/30"
                >
                  <span className="text-2xl text-cta transition group-hover:scale-110" aria-hidden>
                    {area.icon}
                  </span>
                  <h3 className="mt-4 font-medium text-foreground">{area.title}</h3>
                  <p className="mt-2 text-sm text-accent">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">Lab Principles</h2>
            <p className="mt-2 text-accent">The values that guide every experiment we run</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((p) => (
                <div key={p.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="font-medium text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-accent">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <div className="rounded-2xl border border-cta/20 bg-gradient-to-br from-cta/10 via-dashboard-card to-dashboard-card px-8 py-14 text-center md:px-16">
              <p className="text-sm font-medium uppercase tracking-widest text-cta">FluvoSoft Lab</p>
              <h2 className="mt-4 text-2xl font-medium text-foreground md:text-3xl">
                Have an idea worth exploring?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-accent">
                Whether you&apos;re a startup with a bold concept or an enterprise looking to innovate, our R&D team can help you prototype, validate, and build.
              </p>
              <Link
                href="/#book-a-demo"
                className="mt-8 inline-flex rounded-full bg-cta px-8 py-3.5 text-sm font-medium text-white no-underline transition hover:bg-cta/90"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
