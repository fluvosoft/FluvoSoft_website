"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

const stats: StatItem[] = [
  { label: "App version", value: 1, suffix: ".0.0" },
  { label: "Unlimited items", value: 100, suffix: "%" },
  { label: "Pro from", value: 4, prefix: "$", suffix: ".99/mo" },
];

function AnimatedStat({ item, active }: { item: StatItem; active: boolean }) {
  const [display, setDisplay] = useState(item.label === "App version" ? item.value : 0);

  useEffect(() => {
    if (!active || item.label === "App version") return;

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

  const displayText =
    item.label === "App version"
      ? `v${item.value}${item.suffix ?? ""}`
      : `${item.prefix ?? ""}${display}${item.suffix ?? ""}`;

  return (
    <div className="min-w-0 text-center">
      <p className="break-words font-ei-heading text-xl font-bold text-ei-forest sm:text-3xl md:text-4xl">
        {displayText}
      </p>
      <p className="mt-1 text-sm text-ei-muted">{item.label}</p>
    </div>
  );
}

export default function InventoryStockTrackerCounterStats() {
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
      className="mx-auto grid max-w-2xl grid-cols-3 gap-3 rounded-2xl border border-ei-forest/10 bg-white/80 px-3 py-4 backdrop-blur-sm sm:gap-6 sm:px-4 sm:py-6 md:gap-8 md:px-8"
      aria-label="Inventory Stock Tracker highlights"
    >
      {stats.map((item) => (
        <AnimatedStat key={item.label} item={item} active={active} />
      ))}
    </div>
  );
}
