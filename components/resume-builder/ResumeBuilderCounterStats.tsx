"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  displayOverride?: (value: number) => string;
};

const stats: StatItem[] = [
  { label: "Templates", value: 20, suffix: "+" },
  { label: "Free", value: 100, suffix: "%" },
  {
    label: "PDF Export",
    value: 1,
    displayOverride: (value) => `${value}-tap`,
  },
];

function AnimatedStat({ item, active }: { item: StatItem; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1200;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(item.value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, item.value]);

  const displayText = item.displayOverride
    ? item.displayOverride(display)
    : `${item.prefix ?? ""}${display}${item.suffix ?? ""}`;

  return (
    <div className="text-center">
      <p className="font-rb-heading text-2xl font-bold text-rb-navy sm:text-3xl md:text-4xl">
        {displayText}
      </p>
      <p className="mt-1 text-sm text-rb-muted">{item.label}</p>
    </div>
  );
}

export default function ResumeBuilderCounterStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-2xl grid-cols-3 gap-4 rounded-2xl border border-rb-navy/10 bg-white/80 px-4 py-6 backdrop-blur-sm md:gap-8 md:px-8"
      aria-label="Resume Builder highlights"
    >
      {stats.map((item) => (
        <AnimatedStat key={item.label} item={item} active={active} />
      ))}
    </div>
  );
}
