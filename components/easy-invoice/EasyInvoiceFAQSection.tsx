"use client";

import { useMemo, useState } from "react";
import {
  easyInvoiceFaqs,
  easyInvoiceFaqCategories,
  type EasyInvoiceFaqCategory,
} from "@/data/easyInvoiceFaqs";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-ei-lime transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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

export default function EasyInvoiceFAQSection() {
  const [activeCategory, setActiveCategory] = useState<EasyInvoiceFaqCategory>("All");
  const [openId, setOpenId] = useState<string | null>(easyInvoiceFaqs[0]?.id ?? null);

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "All") return easyInvoiceFaqs;
    return easyInvoiceFaqs.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-ei-cream px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ei-faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-ei-lime/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ei-forest">
            FAQ
          </span>
          <h2
            id="ei-faq-heading"
            className="mt-4 font-ei-heading text-3xl font-bold text-ei-forest md:text-4xl"
          >
            Frequently Asked Questions About Easy Invoice
          </h2>
          <p className="mt-4 text-base text-ei-muted">
            Quick answers about sign-in, invoicing, templates, and how the free app works.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter FAQ by category"
        >
          {easyInvoiceFaqCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => {
                setActiveCategory(category);
                setOpenId(null);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ei-lime ${
                activeCategory === category
                  ? "bg-ei-forest text-white"
                  : "border border-ei-forest/15 bg-white text-ei-forest hover:border-ei-lime"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 divide-y divide-ei-forest/10 rounded-2xl border border-ei-forest/10 bg-white shadow-sm">
          {filteredFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article key={item.id}>
                <h3 className="m-0">
                  <button
                    type="button"
                    id={`faq-trigger-${item.id}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none transition hover:bg-ei-lime/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ei-lime/50 sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span className="text-sm font-semibold text-ei-forest sm:text-base">
                      {item.question}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${item.id}`}
                  className="ei-faq-panel"
                  data-open={isOpen}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                >
                  <div className="ei-faq-panel-inner">
                    <p className="border-t border-ei-forest/5 px-5 pb-5 pt-3 text-sm leading-relaxed text-ei-muted sm:px-6 sm:pb-6 sm:text-base">
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
