"use client";

import { useState, useEffect, useMemo } from "react";

const TIME_OPTIONS = ["Last 3 months", "Last 7 days"] as const;

const REVENUE_VARIANTS = [
  { value: "$1,250.00", change: "+12.5%", subtitle: "Trending up this month" },
  { value: "$1,312.50", change: "+14.2%", subtitle: "Up from last week" },
  { value: "$1,189.00", change: "+8.1%", subtitle: "Steady growth" },
];

const STATUS_TIMES = ["9:41", "9:42", "10:03", "10:15"];

const RECENT_ITEMS = [
  { id: "1", name: "Landing page", type: "page", time: "2m ago" },
  { id: "2", name: "Components", type: "folder", time: "1h ago" },
  { id: "3", name: "Dashboard", type: "page", time: "3h ago" },
  { id: "4", name: "Settings", type: "page", time: "5h ago" },
  { id: "5", name: "Analytics", type: "page", time: "12m ago" },
];

export default function MockupMobileIllustration({ className = "" }: { className?: string }) {
  const [selectedRange, setSelectedRange] = useState<typeof TIME_OPTIONS[number]>("Last 3 months");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [revenueTick, setRevenueTick] = useState(0);
  const [timeTick, setTimeTick] = useState(0);
  const [recentTick, setRecentTick] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const revenue = REVENUE_VARIANTS[revenueTick % REVENUE_VARIANTS.length];
  const statusTime = STATUS_TIMES[timeTick % STATUS_TIMES.length];
  const recentOrdered = useMemo(() => {
    const n = RECENT_ITEMS.length;
    const start = recentTick % n;
    return [...RECENT_ITEMS.slice(start), ...RECENT_ITEMS.slice(0, start)].slice(0, 4);
  }, [recentTick]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setRevenueTick((r) => r + 1);
      setTimeTick((t) => t + 1);
      setRecentTick((r) => r + 1);
    }, 3000);
    return () => clearInterval(t);
  }, [isPaused]);

  return (
    <div
      className={`mx-auto flex h-[500px] w-[420px] flex-col overflow-hidden rounded-t-[44px] border-b-0 border-[7px] border-white/20 bg-black transition-all duration-200 hover:border-white/25 ${className}`}
      style={{
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6), 0 12px 24px -8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
      aria-hidden
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Status bar */}
      <div
        className="flex items-center justify-between px-8 pt-6 pb-3 text-[15px] text-foreground"
        style={{ boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.06)" }}
      >
        <span className="tabular-nums">{statusTime}</span>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-4 rounded-sm border border-white/40" />
          <span className="text-white/70">▾</span>
          <span className="inline-block h-2.5 w-5 rounded-sm border border-white/40" />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">
        <svg className="h-7 w-7 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
        <span className="text-lg font-medium text-foreground">Documents</span>
      </div>

      {/* Content */}
      <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-hidden p-5">
        {/* Revenue card - auto-changing */}
        <div
          className="rounded-xl border border-white/10 bg-white/[0.06] p-5 transition-all duration-300"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)" }}
        >
          <p className="text-[15px] text-accent">Total Revenue</p>
          <div className="mt-1.5 flex items-baseline justify-between gap-1">
            <span className="text-xl font-medium tabular-nums text-foreground">{revenue.value}</span>
            <span className="text-[14px] text-positive">{revenue.change}</span>
          </div>
          <p className="mt-2.5 text-[14px] text-accent">{revenue.subtitle}</p>
          <p className="text-[14px] text-accent">Visitors for the last 6 months</p>
        </div>

        {/* Visitors card */}
        <div
          className="rounded-xl border border-white/10 bg-white/[0.06] p-5 transition-all duration-300"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)" }}
        >
          <p className="text-[15px] text-accent">Total Visitors</p>
          <div className="relative mt-1.5 flex items-center justify-end">
            <button
              type="button"
              onClick={() => setDropdownOpen((o) => !o)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              className="flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[14px] text-foreground shadow-sm transition-colors hover:border-white/25 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand/50"
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
            >
              {selectedRange}
              <span className="text-accent">▾</span>
            </button>
            {dropdownOpen && (
              <ul
                className="absolute right-0 top-full z-10 mt-1 min-w-[110px] rounded-md border border-white/15 bg-black py-1.5 shadow-lg"
                role="listbox"
                style={{ boxShadow: "0 10px 25px -5px rgba(0,0,0,0.4)" }}
              >
                {TIME_OPTIONS.map((opt) => (
                  <li key={opt} role="option" aria-selected={selectedRange === opt}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRange(opt);
                        setDropdownOpen(false);
                      }}
                      className={`block w-full px-4 py-2.5 text-left text-[14px] transition-colors hover:bg-white/10 ${
                        selectedRange === opt ? "bg-white/10 text-foreground" : "text-accent"
                      }`}
                    >
                      {opt}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Recent - auto-changing order */}
        <div className="border-t border-white/10 pt-5">
          <p className="mb-3 px-0.5 text-[14px] font-medium uppercase tracking-wide text-accent">Recent</p>
          <ul className="space-y-2">
            {recentOrdered.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="flex w-full items-center gap-3.5 rounded-lg px-3 py-3 text-left transition-colors hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-1 focus:ring-offset-black"
                  style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-accent shadow-inner">
                    {item.type === "folder" ? (
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                      </svg>
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] font-medium text-foreground">{item.name}</p>
                    <p className="text-[13px] text-accent">{item.time}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
