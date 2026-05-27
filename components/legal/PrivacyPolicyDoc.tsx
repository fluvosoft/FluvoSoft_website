"use client";

import { useEffect, useState } from "react";
import {
  privacyDocArticleIds,
  privacyDocChapters,
  type PrivacyDocArticle,
} from "@/data/fluvoSoftPrivacy";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5 border-l border-white/10 pl-4">
      {items.map((item) => (
        <li key={item.slice(0, 48)} className="text-sm leading-relaxed text-accent md:text-base">
          {item}
        </li>
      ))}
    </ul>
  );
}

function ArticleBody({ paragraphs, bullets }: PrivacyDocArticle) {
  return (
    <div className="mt-4 space-y-4 text-sm leading-relaxed text-accent md:text-base">
      {paragraphs?.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
      {bullets ? <BulletList items={bullets} /> : null}
    </div>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export default function PrivacyPolicyDoc() {
  const [activeId, setActiveId] = useState<string>(privacyDocArticleIds[0] ?? "overview");

  useEffect(() => {
    const elements = privacyDocArticleIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto max-w-container">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-medium text-foreground md:text-3xl">Full policy</h2>
        <p className="mt-4 text-accent">
          Structured like product documentation — use the table of contents to jump to any
          section, or read straight through.
        </p>
      </div>

      {/* Mobile: chapter jump bar */}
      <div className="mt-8 -mx-2 flex gap-2.5 overflow-x-auto px-2 pb-2 no-scrollbar lg:hidden">
        {privacyDocChapters.map((chapter) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="shrink-0 rounded-full border border-white/10 bg-dashboard-card px-5 py-2.5 text-sm font-medium text-foreground no-underline transition hover:border-cta/40 hover:text-cta"
          >
            {chapter.title}
          </a>
        ))}
      </div>

      <div className="mt-10 lg:grid lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[minmax(0,272px)_minmax(0,1fr)] xl:gap-14">
        {/* Sidebar TOC — compact, no inner scroll */}
        <aside className="hidden lg:block">
          <nav
            className="sticky top-24 rounded-xl border border-white/10 bg-dashboard-card px-4 py-4"
            aria-label="Privacy policy sections"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-cta">
              On this page
            </p>
            <ul className="mt-3 space-y-3.5">
              {privacyDocChapters.map((chapter) => {
                const chapterActive = chapter.articles.some((a) => a.id === activeId);
                return (
                  <li key={chapter.id}>
                    <a
                      href={`#${chapter.id}`}
                      className={`block text-sm font-semibold leading-tight no-underline transition ${
                        chapterActive
                          ? "text-foreground"
                          : "text-foreground/90 hover:text-cta"
                      }`}
                    >
                      {chapter.title}
                    </a>
                    <ul className="mt-1 space-y-0">
                      {chapter.articles.map((article) => {
                        const isActive = activeId === article.id;
                        return (
                          <li key={article.id}>
                            <a
                              href={`#${article.id}`}
                              className={`block border-l-2 py-1 pl-3 text-[13px] leading-tight no-underline transition ${
                                isActive
                                  ? "border-cta font-medium text-cta"
                                  : "border-transparent text-accent hover:border-white/20 hover:text-foreground"
                              }`}
                            >
                              {article.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Document body */}
        <div className="min-w-0">
          <div className="rounded-2xl border border-white/10 bg-dashboard-card/50 p-6 md:p-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            {privacyDocChapters.map((chapter, chapterIndex) => (
              <section
                key={chapter.id}
                id={chapter.id}
                className={`scroll-mt-28 ${chapterIndex > 0 ? "mt-16 border-t border-white/10 pt-16" : ""}`}
              >
                {/* Chapter header */}
                <div className="flex flex-wrap items-start gap-3">
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-md bg-cta/15 px-2 font-mono text-sm font-medium text-cta">
                    {String(chapterIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-medium text-foreground md:text-2xl">
                      {chapter.title}
                    </h2>
                    {chapter.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-accent md:text-base">
                        {chapter.description}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Articles */}
                <div className="mt-10 space-y-12">
                  {chapter.articles.map((article, articleIndex) => (
                    <article
                      key={article.id}
                      id={article.id}
                      className={`scroll-mt-28 ${
                        articleIndex > 0 ? "border-t border-white/10 pt-12" : ""
                      }`}
                    >
                      <h3 className="group flex items-center gap-2 text-lg font-medium text-foreground">
                        <a
                          href={`#${article.id}`}
                          className="no-underline transition hover:text-cta"
                        >
                          {article.title}
                        </a>
                        <LinkIcon className="h-4 w-4 shrink-0 text-accent opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100" />
                      </h3>
                      <ArticleBody {...article} />
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
