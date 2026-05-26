export default function QualitySection() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="quality-heading">
      {/* Heading + copy */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2
          id="quality-heading"
          className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          Our focus is progressing markets
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
          Effectively deploying enterprise solutions requires a deep knowledge of business operations, technology implementation, practical workflows, and industry best practices.
        </p>
      </div>

      {/* Glowing orange full circle with absolute automation dashboard overlay */}
      <div className="relative mt-12 flex justify-center">
        {/* Globe / sun */}
        <div className="pointer-events-none flex items-center justify-center">
          <svg
            className="w-full max-w-[900px] h-auto md:h-[900px] md:w-[900px]"
            viewBox="0 0 900 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="orangeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(30,15,8,0)" />
                <stop offset="20%" stopColor="rgba(30,15,8,0)" />
                <stop offset="40%" stopColor="rgba(30,15,8,0)" />
                <stop offset="50%" stopColor="rgba(30,15,8,0)" />
                <stop offset="55%" stopColor="rgba(30,15,8,0.02)" />
                <stop offset="60%" stopColor="rgba(50,25,12,0.05)" />
                <stop offset="70%" stopColor="rgba(80,40,20,0.15)" />
                <stop offset="80%" stopColor="rgba(120,60,30,0.3)" />
                <stop offset="87%" stopColor="rgba(180,90,40,0.5)" />
                <stop offset="92%" stopColor="rgba(220,110,50,0.75)" />
                <stop offset="96%" stopColor="rgba(245,130,50,0.9)" />
                <stop offset="98%" stopColor="rgba(255,170,80,1)" />
                <stop offset="100%" stopColor="rgba(255,240,180,1)" />
              </radialGradient>
              <linearGradient id="halfMoonMask" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="35%" stopColor="white" stopOpacity="1" />
                <stop offset="40%" stopColor="white" stopOpacity="0.9" />
                <stop offset="45%" stopColor="white" stopOpacity="0.6" />
                <stop offset="50%" stopColor="white" stopOpacity="0.3" />
                <stop offset="55%" stopColor="white" stopOpacity="0.1" />
                <stop offset="60%" stopColor="white" stopOpacity="0.05" />
                <stop offset="65%" stopColor="white" stopOpacity="0.02" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <mask id="halfMoonMaskId">
                <rect width="900" height="900" fill="url(#halfMoonMask)" />
              </mask>
            </defs>
            <circle
              cx="450"
              cy="450"
              r="420"
              fill="url(#orangeGlow)"
              mask="url(#halfMoonMaskId)"
            />
          </svg>
        </div>

        {/* Automation mini-dashboard overlay (absolute over globe) */}
        <div className="pointer-events-auto absolute inset-x-0 top-[22%] flex justify-center px-4 sm:top-[24%]">
          <div className="animate-dashboard-enter w-full max-w-[900px] rounded-2xl border border-white/15 bg-dashboard-bg/95 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.7)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_32px_80px_rgba(0,0,0,0.85)] sm:p-5">
              {/* Top row: user + tabs + search */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-accent-dark" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Automation Orchestrator</p>
                    <p className="text-[11px] text-accent">Alicia Koch · Ops Lead</p>
                  </div>
                </div>
                <div className="no-scrollbar flex flex-nowrap items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/40 px-1 py-1 text-[11px] text-accent sm:text-xs">
                  {["Overview", "Workflows", "Agents", "Integrations"].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      className={`shrink-0 rounded-full px-2.5 py-1 ${
                        tab === "Workflows"
                          ? "bg-white text-[11px] font-medium text-black sm:text-xs"
                          : "text-[11px] text-accent hover:text-foreground sm:text-xs"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1 rounded-full bg-secondary-button px-2 py-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-3.5 w-3.5 text-accent"
                  >
                    <circle cx="11" cy="11" r="7" strokeWidth="2" />
                    <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search automations..."
                    className="w-24 bg-transparent text-[11px] text-foreground placeholder:text-accent focus:outline-none sm:w-32"
                  />
                </div>
              </div>

              {/* Date + CTA */}
              <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3 text-[11px] text-accent sm:flex-row sm:items-center sm:justify-between sm:text-xs">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-white/5 px-2 py-1">Automation</span>
                  <span>Jan 20 – Feb 09, 2023</span>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1 rounded-full bg-tab-active-bg px-3 py-1.5 text-[11px] font-medium text-tab-active-text sm:text-xs"
                >
                  <span>Download run log</span>
                </button>
              </div>

              {/* Metrics + list */}
              <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] sm:grid-cols-4 sm:text-xs">
                <div className="animate-card-enter" style={{ animationDelay: "40ms", animationFillMode: "backwards" }}>
                  <p className="text-accent">Runs today</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">1,248</p>
                  <p className="mt-0.5 text-[11px] text-positive">+18.4% vs yesterday</p>
                </div>
                <div className="animate-card-enter" style={{ animationDelay: "80ms", animationFillMode: "backwards" }}>
                  <p className="text-accent">Hours saved</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">326h</p>
                  <p className="mt-0.5 text-[11px] text-positive">+42h this week</p>
                </div>
                <div className="animate-card-enter" style={{ animationDelay: "120ms", animationFillMode: "backwards" }}>
                  <p className="text-accent">Success rate</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">98.4%</p>
                  <p className="mt-0.5 text-[11px] text-positive">Failures auto‑retried</p>
                </div>
                <div className="animate-card-enter" style={{ animationDelay: "160ms", animationFillMode: "backwards" }}>
                  <p className="text-accent">Active bots</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">37</p>
                  <p className="mt-0.5 text-[11px] text-accent">12 on critical flows</p>
                </div>
              </div>

              <div className="mt-3 grid gap-3 md:grid-cols-[1.4fr_1fr]">
                {/* Mini chart labels area (static) */}
                <div className="animate-card-enter rounded-lg border border-white/10 bg-dashboard-card/80 px-3 py-2" style={{ animationDelay: "200ms", animationFillMode: "backwards" }}>
                  <div className="flex items-center justify-between text-[11px] text-accent sm:text-xs">
                    <span>Automation throughput</span>
                    <span className="text-positive">Stable</span>
                  </div>
                  <div className="mt-2 h-16 w-full rounded-md bg-gradient-to-t from-brand/20 via-brand/40 to-brand/60 opacity-80" />
                  <div className="mt-1 grid grid-cols-8 text-[10px] text-accent">
                    {["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"].map((w) => (
                      <span key={w} className="text-center first:text-left last:text-right">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Queue list */}
                <div className="animate-card-enter rounded-lg border border-white/10 bg-dashboard-card/80 px-3 py-2" style={{ animationDelay: "240ms", animationFillMode: "backwards" }}>
                  <p className="text-[11px] font-medium text-dashboard-title sm:text-xs">Automation queue</p>
                  <p className="mt-0.5 text-[11px] text-accent">Top workflows by activity.</p>
                  <ul className="mt-2 space-y-1.5 text-[11px] sm:text-xs">
                    {[
                      { name: "Invoice extraction", status: "Running", detail: "58 docs in last 10 min" },
                      { name: "Onboarding sequence", status: "Queued", detail: "12 new signups" },
                      { name: "Ticket triage", status: "Healthy", detail: "89 tickets routed" },
                    ].map((flow) => (
                      <li
                        key={flow.name}
                        className="animate-fade-in flex items-center justify-between gap-2 rounded-md bg-white/5 px-2 py-1.5"
                        style={{ animationDelay: "260ms", animationFillMode: "backwards" }}
                      >
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-foreground">{flow.name}</p>
                          <p className="truncate text-[11px] text-accent">{flow.detail}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-positive/15 px-2 py-0.5 text-[10px] text-positive">
                          {flow.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
