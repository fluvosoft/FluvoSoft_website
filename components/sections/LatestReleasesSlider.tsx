"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EasyInvoicePhoneMockup from "@/components/easy-invoice/EasyInvoicePhoneMockup";
import InventoryStockTrackerPhoneMockup from "@/components/inventory-stock-tracker/InventoryStockTrackerPhoneMockup";
import { latestReleases } from "@/data/latestReleases";

const AUTO_PLAY_MS = 6000;

export default function LatestReleasesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = latestReleases.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (isPaused || total <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  return (
    <div
      className="mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
        <div
          className="flex w-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
        >
          {latestReleases.map((product) => {
            const ctaClassName =
              "mt-4 inline-flex w-fit self-center items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 text-sm font-medium text-foreground no-underline transition hover:border-cta/40 hover:bg-cta/15 hover:text-cta lg:self-start";

            return (
              <article
                key={product.id}
                className="flex min-w-full flex-[0_0_100%] items-center overflow-hidden px-5 py-6 isolate md:px-8 md:py-7 lg:px-10"
                aria-hidden={latestReleases[activeIndex]?.id !== product.id}
              >
                <div className="grid w-full items-center gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
                  <div
                    className={`mx-auto flex w-full items-center justify-center ${
                      product.display === "phone-mockup"
                        ? product.imageContainerClass ?? "min-h-[200px] lg:min-h-[220px]"
                        : `relative overflow-hidden ${
                            product.imageContainerClass ??
                            "h-[180px] max-w-[240px] lg:h-[220px] lg:max-w-none"
                          }`
                    }`}
                  >
                    {product.display === "phone-mockup" ? (
                      product.mockup === "inventory" ? (
                        <InventoryStockTrackerPhoneMockup
                          src={product.image}
                          alt={product.imageAlt}
                          screenWidth={product.phoneMockupWidth ?? 230}
                          priority={product.id === latestReleases[0].id}
                        />
                      ) : (
                        <EasyInvoicePhoneMockup
                          src={product.image}
                          alt={product.imageAlt}
                          screenWidth={product.phoneMockupWidth ?? 240}
                          priority={product.id === latestReleases[0].id}
                        />
                      )
                    ) : (
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 340px, 520px"
                        className={`object-contain object-center ${product.imageScale ?? ""}`}
                        priority={product.id === latestReleases[0].id}
                        draggable={false}
                      />
                    )}
                  </div>

                  <div className="flex flex-col justify-center text-center lg:text-left">
                    <div className="flex flex-col items-center gap-1 lg:flex-row lg:items-center lg:gap-3">
                      <p className="inline-flex rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cta">
                        {product.tag}
                      </p>
                      <p className="text-xs font-medium uppercase tracking-wider text-foreground/70">
                        {product.name}
                      </p>
                    </div>
                    <h3 className="mx-auto mt-2 max-w-xl text-lg font-medium tracking-tight text-foreground md:text-xl lg:mx-0">
                      {product.headline}
                    </h3>
                    <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-accent lg:mx-0">
                      {product.description}
                    </p>

                    <ul className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 lg:justify-start" role="list">
                      {product.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-1.5 text-xs text-foreground/75">
                          <span className="h-1 w-1 shrink-0 rounded-full bg-cta/80" aria-hidden />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {product.external ? (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={ctaClassName}
                      >
                        {product.cta}
                      </a>
                    ) : (
                      <Link href={product.href} className={ctaClassName}>
                        {product.cta}
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <div className="flex items-center gap-2" role="tablist" aria-label="Product slides">
          {latestReleases.map((product, index) => (
            <button
              key={product.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show ${product.name} ${product.tag}`}
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-cta"
                  : "w-1.5 bg-white/20 hover:bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
