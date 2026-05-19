import type { ReactNode } from "react";
import Image from "next/image";

function AppStoreButton({
  href,
  label,
  sublabel,
  icon,
}: {
  href: string;
  label: string;
  sublabel: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-w-[140px] items-center gap-2.5 rounded-lg bg-black px-4 py-2.5 text-white no-underline transition hover:bg-black/90"
      aria-label={label}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wide opacity-90">{sublabel}</span>
        <span className="text-sm font-semibold">{label}</span>
      </span>
    </a>
  );
}

function PlayStoreIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.18 23.76c.31.18.68.18 1.01 0l12.57-7.27-3.18-3.18L3.18 23.76zm18.14-10.4L16.5 10.5l-3.36 3.36 3.36 3.36 4.82-2.78c.58-.34.58-1.16 0-1.5zM3.18.24c-.33.19-.55.54-.55.94v21.64c0 .4.22.75.55.94L14.82 12 3.18.24zM16.14 7.86l3.18-3.18L6.75.24c-.33-.19-.7-.19-1.01 0l10.4 7.62z" />
    </svg>
  );
}

type EasyInvoiceHeroProps = {
  heroImageSrc?: string;
  heroImageAlt?: string;
};

const DEFAULT_HERO_IMAGE = "/images/easy_invoice_logo_fluvosoft.svg";

export default function EasyInvoiceHero({ heroImageSrc, heroImageAlt }: EasyInvoiceHeroProps) {
  const imageSrc = heroImageSrc ?? DEFAULT_HERO_IMAGE;

  return (
    <section
      className="bg-white pb-16 md:pb-20"
      aria-labelledby="easy-invoice-hero-heading"
    >
      <div className="mx-auto max-w-container px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-10">
          {/* Left: copy + store buttons */}
          <div className="order-2 lg:order-1">
            <h1
              id="easy-invoice-hero-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-ei-textPrimary md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
            >
              Easy Invoice — Free Mobile Invoice App for Your Business
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ei-textPrimary/80 md:text-lg">
              Create professional invoices, track payments on your dashboard, and export PDFs — free
              on Android, with 20 templates and cloud sync by FluvoSoft.
            </p>
            <div className="mt-8">
              <AppStoreButton
                href="#"
                sublabel="Get it on"
                label="Google Play"
                icon={<PlayStoreIcon />}
              />
            </div>
          </div>

          {/* Right: hero image — large, fills the column */}
          <div className="order-1 relative w-full min-h-[360px] sm:min-h-[440px] lg:order-2 lg:min-h-[520px] xl:min-h-[600px]">
            <Image
              src={imageSrc}
              alt={heroImageAlt ?? "Easy Invoice mobile app"}
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-contain object-center drop-shadow-2xl"
              priority
              unoptimized={imageSrc.endsWith(".svg")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
