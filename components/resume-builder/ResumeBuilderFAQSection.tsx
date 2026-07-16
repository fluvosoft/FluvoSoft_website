"use client";

import { useMemo, useState } from "react";
import {
  resumeBuilderFaqs,
  resumeBuilderFaqCategories,
  type ResumeBuilderFaqCategory,
} from "@/data/resumeBuilderFaqs";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-rb-brand transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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

export default function ResumeBuilderFAQSection() {
  const [activeCategory, setActiveCategory] = useState<ResumeBuilderFaqCategory>("All");
  const [openId, setOpenId] = useState<string | null>(resumeBuilderFaqs[0]?.id ?? null);

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "All") return resumeBuilderFaqs;
    return resumeBuilderFaqs.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-rb-cream px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="rb-faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-rb-brand/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rb-navy">
            FAQ
          </span>
          <h2
            id="rb-faq-heading"
            className="mt-4 font-rb-heading text-3xl font-bold text-rb-navy md:text-4xl"
          >
            Frequently Asked Questions About Resume Builder
          </h2>
          <p className="mt-4 text-base text-rb-muted">
            Quick answers about sign-in, templates, ATS scoring, and how the free app works.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter FAQ by category"
        >
          {resumeBuilderFaqCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => {
                setActiveCategory(category);
                setOpenId(null);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rb-brand ${
                activeCategory === category
                  ? "bg-rb-navy text-white"
                  : "border border-rb-navy/15 bg-white text-rb-navy hover:border-rb-brand"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 divide-y divide-rb-navy/10 rounded-2xl border border-rb-navy/10 bg-white shadow-sm">
          {filteredFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article key={item.id}>
                <h3 className="m-0">
                  <button
                    type="button"
                    id={`faq-trigger-${item.id}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none transition hover:bg-rb-brand/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rb-brand/50 sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span className="text-sm font-semibold text-rb-navy sm:text-base">
                      {item.question}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${item.id}`}
                  className="rb-faq-panel"
                  data-open={isOpen}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                >
                  <div className="rb-faq-panel-inner">
                    <p className="border-t border-rb-navy/5 px-5 pb-5 pt-3 text-sm leading-relaxed text-rb-muted sm:px-6 sm:pb-6 sm:text-base">
                      {item.answer}
                    </p>
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
