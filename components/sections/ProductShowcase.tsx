"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { STUDIO_PRODUCTS as PRODUCTS, type StudioProduct as Product } from "@/data/studioProducts";

function Shot({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <li className="shrink-0 snap-start">
      {/* Natural aspect ratio, fixed height (like Google Play), so landscape graphics aren't cropped. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setOk(false)}
        className="block h-[260px] min-w-[146px] w-auto sm:min-w-[180px] lg:min-w-[203px] object-contain rounded-xl border border-white/10 bg-neutral-900 sm:h-[320px] lg:h-[360px]"
      />
    </li>
  );
}

function ProductCard({ p }: { p: Product }) {
  const rail = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => rail.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  const external = p.href.startsWith("http");

  return (
    <article
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-5 md:p-7"
      aria-labelledby={`${p.id}-name`}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-[0.12] blur-3xl"
        style={{ background: p.accent }}
        aria-hidden
      />

      <header className="relative flex flex-wrap items-center gap-4">
        <div className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 ${p.logoBg ?? "bg-white/5"}`}>
          <Image src={p.logo} alt={`${p.name} logo`} fill sizes="56px" className="object-contain p-1.5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 id={`${p.id}-name`} className="text-lg font-medium text-foreground md:text-xl">{p.name}</h3>
          <p className="text-xs text-muted">{p.category} · by FluvoSoft</p>
        </div>
        <a
          href={p.href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="rounded-md px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          style={{ background: p.accent }}
        >
          {p.ctaLabel}
        </a>
        {p.web && (
          <a
            href={p.web.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-foreground transition hover:border-white/40"
          >
            {p.web.label} ↗
          </a>
        )}
      </header>

      <p className="relative mt-4 max-w-xl text-sm leading-relaxed text-accent">{p.tagline}</p>

      <div className="relative mt-5">
        <ul
          ref={rail}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {p.shots.map((s, i) => (
            <Shot key={s} src={s} alt={`${p.name} screenshot ${i + 1}`} />
          ))}
        </ul>
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label={`Previous ${p.name} screenshots`}
          className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/80 text-foreground backdrop-blur transition hover:border-white/30 md:flex"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label={`Next ${p.name} screenshots`}
          className="absolute right-0 top-1/2 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/80 text-foreground backdrop-blur transition hover:border-white/30 md:flex"
        >
          ›
        </button>
      </div>
    </article>
  );
}

export default function ProductShowcase() {
  return (
    <section className="relative px-6 pb-16 lg:px-8 lg:pb-24" aria-labelledby="showcase-heading">
      <div className="mx-auto max-w-container">
        <div className="border-t border-white/10 pt-10">
          <p className="text-sm font-medium uppercase tracking-wider text-cta">In the studio</p>
          <h2 id="showcase-heading" className="mt-2 text-2xl font-medium text-foreground md:text-3xl">
            Real products, used every day
          </h2>
        </div>

        <div className="mt-8 grid gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
