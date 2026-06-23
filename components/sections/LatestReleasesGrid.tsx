import Image from "next/image";
import Link from "next/link";
import { latestReleases } from "@/data/latestReleases";

const ctaClassName =
  "inline-flex w-fit items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 text-sm font-medium text-foreground no-underline transition hover:border-cta/40 hover:bg-cta/15 hover:text-cta";

export default function LatestReleasesGrid() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {latestReleases.map((product, index) => (
        <article
          key={product.id}
          className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-cta/30 hover:bg-white/[0.05] md:p-7"
        >
          <div className="flex min-h-[100px] items-center justify-center">
            <Image
              src={product.logo}
              alt={product.logoAlt}
              width={product.logoWidth ?? 160}
              height={product.logoHeight ?? 160}
              className={`rounded-xl object-contain ${product.logoClassName ?? "h-24 w-24"}`}
              priority={index < 2}
              draggable={false}
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <p className="inline-flex rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cta">
              {product.tag}
            </p>
            <p className="text-xs font-medium uppercase tracking-wider text-foreground/70">
              {product.name}
            </p>
          </div>

          <h3 className="mt-3 text-lg font-medium tracking-tight text-foreground md:text-xl">
            {product.headline}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-accent">
            {product.description}
          </p>

          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1" role="list">
            {product.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-1.5 text-xs text-foreground/75">
                <span className="h-1 w-1 shrink-0 rounded-full bg-cta/80" aria-hidden />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
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
        </article>
      ))}
    </div>
  );
}
