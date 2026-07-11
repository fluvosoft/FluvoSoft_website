"use client";

import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { blogPage } from "@/data/resourcesPages";
import { blogPosts } from "@/data/blogPosts";

const posts = blogPosts;
const featured = posts[0];
const spotlight = posts.slice(1, 3);
const indexPosts = posts;
const subscribe =
  blogPage.sections.find((s) => s.id === "subscribe")?.paragraphs?.[0] ?? "";
const cta = blogPage.cta;

const topics = Array.from(new Set(posts.map((p) => p.tag))).map((tag) => ({
  tag,
  count: posts.filter((p) => p.tag === tag).length,
  href: `/blog/${posts.find((p) => p.tag === tag)?.slug ?? ""}`,
}));

const pillars = [
  {
    num: "01",
    title: "Product",
    body: "Launches and roadmap notes for Easy Invoice and Inventory Stock Tracker.",
    href: "/blog/easy-invoice-free-mobile-invoicing",
  },
  {
    num: "02",
    title: "Automation",
    body: "When workflows are ready for structured change—and when they are not.",
    href: "/blog/five-signs-workflow-ready-for-automation",
  },
  {
    num: "03",
    title: "Engineering",
    body: "Secure APIs, validation, rate limits, and observability in practice.",
    href: "/blog/building-secure-apis-saas-client-platforms",
  },
  {
    num: "04",
    title: "Company",
    body: "How FluvoSoft operates as a venture catalysts studio.",
    href: "/blog/what-we-mean-by-venture-catalysts-studio",
  },
];

const stats = [
  { value: String(posts.length).padStart(2, "0"), label: "Published posts" },
  { value: String(topics.length).padStart(2, "0"), label: "Topic lanes" },
  { value: "02", label: "Live products covered" },
  { value: "07+", label: "Avg. minutes to read" },
];

function BauhausComposition() {
  return (
    <div className="relative hidden h-full min-h-[280px] w-full swiss-grid-pattern lg:block" aria-hidden>
      <div className="absolute left-[8%] top-[12%] h-24 w-24 border-4 border-black bg-swiss-muted" />
      <div className="absolute right-[18%] top-[22%] h-16 w-16 rounded-full border-4 border-swiss-accent shadow-[0_0_0_8px_rgba(255,48,0,0.1)]" />
      <div className="absolute bottom-[18%] left-[22%] h-4 w-40 bg-black" />
      <div className="absolute bottom-[32%] right-[12%] h-32 w-20 border-4 border-black bg-swiss-accent" />
      <div className="absolute left-[42%] top-[48%] h-12 w-12 border-4 border-black bg-white" />
    </div>
  );
}

export default function BlogExperience() {
  return (
    <div className="blog-swiss relative font-inter text-swiss-fg">
      <div className="swiss-noise absolute inset-0 z-0" aria-hidden />

      {/* 01 Hero */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[8fr_4fr]">
          <div className="swiss-dots border-black px-6 py-16 sm:px-10 sm:py-20 lg:border-r-4 lg:px-12 lg:py-24">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
              01. Journal
            </p>
            <h1 className="mt-6 text-6xl font-black uppercase leading-[0.85] tracking-tighter text-swiss-fg sm:text-7xl md:text-8xl lg:text-9xl">
              Blog
            </h1>
            <p className="mt-8 max-w-xl text-left text-base font-medium leading-relaxed text-black/70 sm:text-lg">
              {blogPage.description}
            </p>
          </div>
          <div className="border-t-4 border-black bg-swiss-muted p-8 lg:border-t-0 lg:p-10">
            <BauhausComposition />
            <div className="swiss-diagonal mt-8 space-y-4 lg:mt-0 lg:hidden">
              <div className="h-16 w-16 border-4 border-black bg-swiss-accent" />
              <div className="h-3 w-full bg-black" />
            </div>
          </div>
        </div>
      </section>

      {/* 02 Featured spotlight — asymmetric 7:5 */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-b-2 border-black px-6 py-8 sm:px-10 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
              02. Spotlight
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
              Featured dispatch
            </h2>
          </div>
          <div className="grid lg:grid-cols-[7fr_5fr]">
            {featured ? (
              <Link
                href={`/blog/${featured.slug}`}
                className="group swiss-grid-pattern flex min-h-[320px] flex-col justify-between border-b-4 border-black bg-white p-8 no-underline transition-colors duration-150 hover:bg-cta hover:text-white sm:p-12 lg:border-b-0 lg:border-r-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-swiss-accent group-hover:text-white sm:text-xs">
                    {featured.tag} · {featured.readingTime}
                  </span>
                  <h3 className="mt-6 max-w-2xl text-3xl font-black uppercase leading-[0.95] tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    {featured.title}
                  </h3>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-black/65 group-hover:text-white/90 sm:text-lg">
                    {featured.description}
                  </p>
                </div>
                <span className="mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
                  Read full post
                  <ArrowUpRight
                    className="h-4 w-4 -rotate-45 transition-transform duration-150 group-hover:rotate-0"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </span>
              </Link>
            ) : null}
            <div className="flex flex-col">
              {spotlight.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group flex flex-1 flex-col justify-between bg-swiss-muted p-8 no-underline transition-colors duration-150 hover:bg-black hover:text-white sm:p-10 ${
                    i === 0 ? "border-b-4 border-black" : ""
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-swiss-accent group-hover:text-cta">
                      {String(i + 2).padStart(2, "0")} · {post.tag}
                    </span>
                    <h3 className="mt-4 text-xl font-black uppercase tracking-tight sm:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-black/60 group-hover:text-white/80">
                      {post.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-6 h-5 w-5 -rotate-45 transition-transform duration-150 group-hover:rotate-0"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 Topics mosaic — unique staggered tag grid */}
      <section className="relative z-10 border-b-4 border-black bg-black text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cta sm:text-sm">
            03. Topics
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
            Navigate by lane
          </h2>
          <div className="mt-10 grid grid-cols-2 border-2 border-white md:grid-cols-3 lg:grid-cols-5">
            {topics.map((topic, index) => (
              <Link
                key={topic.tag}
                href={topic.href}
                className={`group flex aspect-square flex-col justify-between border-white p-5 no-underline transition-colors duration-150 hover:bg-cta sm:p-6 ${
                  index % 2 === 0 ? "border-r-2" : ""
                } ${index < topics.length - 1 ? "border-b-2" : ""} md:border-r-2 md:[&:nth-child(3n)]:border-r-0 lg:border-r-2 lg:[&:nth-child(5n)]:border-r-0 lg:border-b-0`}
              >
                <Plus
                  className="h-5 w-5 transition-transform duration-150 group-hover:rotate-90"
                  strokeWidth={2.5}
                  aria-hidden
                />
                <div>
                  <p className="text-3xl font-black tracking-tighter sm:text-4xl">
                    {String(topic.count).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em]">
                    {topic.tag}
                  </p>
                </div>
              </Link>
            ))}
            <div className="swiss-diagonal col-span-2 flex aspect-auto min-h-[120px] flex-col justify-end border-t-2 border-white bg-white p-5 text-black md:col-span-3 md:aspect-auto lg:col-span-5 lg:min-h-[140px] lg:border-t-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-swiss-accent">
                Coverage
              </p>
              <p className="mt-2 max-w-2xl text-sm font-medium uppercase leading-relaxed tracking-wide text-black/70 sm:text-base">
                Product launches · Workflow automation · Studio notes · Privacy · API security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Reading index — dense numbered rows (not cards) */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
                04. Index
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
                Full reading list
              </h2>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/50">
              {indexPosts.length} entries · chronological
            </p>
          </div>
          <div className="border-2 border-black">
            {indexPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group grid grid-cols-[48px_1fr] items-stretch no-underline transition-colors duration-150 hover:bg-cta hover:text-white sm:grid-cols-[64px_140px_1fr_auto] ${
                  index < indexPosts.length - 1 ? "border-b-2 border-black" : ""
                }`}
              >
                <span className="flex items-center justify-center border-r-2 border-black bg-swiss-muted px-2 text-sm font-black group-hover:bg-black group-hover:text-cta">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="hidden items-center border-r-2 border-black px-4 text-[10px] font-bold uppercase tracking-[0.15em] text-swiss-accent group-hover:text-white sm:flex">
                  {post.tag}
                </span>
                <span className="flex flex-col justify-center gap-1 px-4 py-5 sm:px-6">
                  <span className="text-base font-bold uppercase leading-snug tracking-tight sm:text-lg">
                    {post.title}
                  </span>
                  <span className="text-xs font-medium text-black/55 group-hover:text-white/80 sm:hidden">
                    {post.tag} · {post.readingTime}
                  </span>
                </span>
                <span className="hidden items-center gap-6 border-l-2 border-black px-6 text-xs font-bold uppercase tracking-[0.12em] text-black/50 group-hover:text-white/80 sm:flex">
                  <span>{post.readingTime}</span>
                  <ArrowUpRight
                    className="h-4 w-4 -rotate-45 transition-transform duration-150 group-hover:rotate-0"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Pillars — 2×2 / 4-col giant cells */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="swiss-dots border-b-2 border-black px-6 py-8 sm:px-10 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
              05. Pillars
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
              Four writing lanes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className={`group relative flex min-h-[260px] flex-col justify-between overflow-hidden border-black bg-white p-8 no-underline transition-colors duration-150 hover:bg-cta hover:text-white sm:p-10 ${
                  index < 2 ? "border-b-2 sm:border-b-2" : "border-b-2 sm:border-b-0"
                } ${index % 2 === 0 ? "sm:border-r-2" : ""} ${
                  index < 3 ? "lg:border-r-2" : "lg:border-r-0"
                } lg:border-b-0`}
              >
                <span className="text-5xl font-black tracking-tighter text-black/10 transition-colors duration-150 group-hover:text-white/20 sm:text-6xl">
                  {pillar.num}
                </span>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60 group-hover:text-white/90">
                    {pillar.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
                    Open
                    <ArrowUpRight
                      className="h-4 w-4 -rotate-45 transition-transform duration-150 group-hover:rotate-0"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Metrics strip — 4-cell data grid */}
      <section className="relative z-10 border-b-4 border-black bg-swiss-muted">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-b-2 border-black px-6 py-8 sm:px-10 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
              06. Signal
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tighter sm:text-4xl">
              Journal at a glance
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`swiss-diagonal border-black p-8 sm:p-10 ${
                  index % 2 === 0 ? "border-r-2" : ""
                } ${index < 2 ? "border-b-2 lg:border-b-0" : ""} ${
                  index < 3 ? "lg:border-r-2" : "lg:border-r-0"
                }`}
              >
                <p className="text-5xl font-black tracking-tighter text-swiss-fg sm:text-6xl md:text-7xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-black/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Stay updated + CTA */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[5fr_7fr]">
          <div className="swiss-diagonal border-b-4 border-black bg-swiss-muted px-6 py-14 sm:px-10 lg:border-b-0 lg:border-r-4 lg:px-12 lg:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
              07. Updates
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tighter sm:text-4xl">
              Stay updated
            </h2>
            <p className="mt-6 max-w-md text-left text-sm font-medium leading-relaxed text-black/70 sm:text-base">
              {subscribe}
            </p>
          </div>

          {cta ? (
            <div className="swiss-grid-pattern px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
              <h2 className="text-2xl font-black uppercase tracking-tighter sm:text-3xl md:text-4xl">
                {cta.title}
              </h2>
              <p className="mt-4 max-w-xl text-left text-sm font-medium leading-relaxed text-black/70 sm:text-base">
                {cta.description}
              </p>
              <div className="mt-10 flex flex-col gap-0 sm:flex-row">
                <Link
                  href={cta.primary.href}
                  className="inline-flex h-14 items-center justify-center border-2 border-black bg-black px-8 text-sm font-bold uppercase tracking-widest text-white no-underline transition-colors duration-150 ease-linear hover:border-cta hover:bg-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:h-16"
                >
                  {cta.primary.label}
                </Link>
                {cta.secondary ? (
                  <Link
                    href={cta.secondary.href}
                    className="inline-flex h-14 items-center justify-center border-2 border-t-0 border-black bg-white px-8 text-sm font-bold uppercase tracking-widest text-black no-underline transition-colors duration-150 ease-linear hover:border-cta hover:bg-cta hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta sm:h-16 sm:border-l-0 sm:border-t-2"
                  >
                    {cta.secondary.label}
                  </Link>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
