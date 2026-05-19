"use client";

import { useState } from "react";
import { easyInvoiceFaqs } from "@/data/easyInvoiceFaqs";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-ei-nav transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
  const [openId, setOpenId] = useState<string | null>(easyInvoiceFaqs[0]?.id ?? null);

  return (
    <section
      id="faq"
      className="scroll-mt-32 border-t border-ei-primary/10 bg-white px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ei-faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-md bg-ei-nav/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ei-primaryDark">
            FAQ
          </span>
          <h2
            id="ei-faq-heading"
            className="mt-4 text-3xl font-bold leading-tight text-ei-textPrimary md:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-ei-textPrimary/75">
            Quick answers about sign-in, invoicing, templates, and how the app works.
          </p>
        </div>

        <div className="mt-12 divide-y divide-ei-primary/10 rounded-2xl border border-ei-primary/10 bg-white shadow-sm">
          {easyInvoiceFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  id={`faq-trigger-${item.id}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none transition hover:bg-ei-nav/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ei-nav/40 sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span className="text-sm font-semibold text-ei-textPrimary sm:text-base">
                    {item.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                {isOpen && (
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${item.id}`}
                    className="border-t border-ei-primary/5 px-5 pb-5 pt-1 sm:px-6 sm:pb-6"
                  >
                    <p className="text-sm leading-relaxed text-ei-textPrimary/80 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
