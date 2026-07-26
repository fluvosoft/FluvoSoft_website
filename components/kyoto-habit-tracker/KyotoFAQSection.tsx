"use client";

import { useMemo, useState } from "react";
import {
  kyotoFaqs,
  kyotoFaqCategories,
  type KyotoFaqCategory,
} from "@/data/kyotoFaqs";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-ky-coral transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function KyotoFAQSection() {
  const [activeCategory, setActiveCategory] = useState<KyotoFaqCategory>("All");
  const [openId, setOpenId] = useState<string | null>(kyotoFaqs[0]?.id ?? null);

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "All") return kyotoFaqs;
    return kyotoFaqs.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-ky-peach px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ky-faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-ky-coral/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ky-ink">
            FAQ
          </span>
          <h2
            id="ky-faq-heading"
            className="mt-4 font-ky-heading text-3xl font-bold text-ky-ink md:text-4xl"
          >
            Frequently Asked Questions About KYOTO
          </h2>
          <p className="mt-4 text-base text-ky-muted">
            Quick answers about habits, clubs, friends, mood, and how the app is organized.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter FAQ by category"
        >
          {kyotoFaqCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => {
                setActiveCategory(category);
                setOpenId(null);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ky-coral ${
                activeCategory === category
                  ? "bg-ky-ink text-white"
                  : "border border-ky-ink/15 bg-white text-ky-ink hover:border-ky-coral"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 divide-y divide-ky-ink/10 rounded-2xl border border-ky-ink/10 bg-white shadow-sm">
          {filteredFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article key={item.id}>
                <h3 className="m-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none transition hover:bg-ky-coral/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ky-coral/50 sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={`ky-faq-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span className="text-sm font-semibold text-ky-ink sm:text-base">
                      {item.question}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </button>
                </h3>
                <div
                  id={`ky-faq-panel-${item.id}`}
                  className="ky-faq-panel"
                  data-open={isOpen}
                  role="region"
                >
                  <div className="ky-faq-panel-inner">
                    <div className="border-t border-ky-ink/5 px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
                      <p className="text-sm leading-relaxed text-ky-muted sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
