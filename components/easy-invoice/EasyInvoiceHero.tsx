import Image from "next/image";
import EasyInvoiceCounterStats from "./EasyInvoiceCounterStats";
import { DownloadApkButton, TrustBadge } from "./EasyInvoiceCTAs";
import { GooglePlayButton } from "./GooglePlayButton";

const HERO_LOGO = "/images/easy_invoice_logo_fluvosoft.svg";

export default function EasyInvoiceHero() {
  return (
    <header className="relative overflow-hidden bg-ei-cream" aria-labelledby="easy-invoice-hero-heading">
      <div className="ei-hero-mesh" aria-hidden />
      <div className="ei-hero-grain" aria-hidden />

      <div className="relative mx-auto max-w-container px-6 pb-8 pt-10 lg:px-8 lg:pb-12 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <TrustBadge>
              <span aria-hidden>⭐</span> Free Forever — No Subscriptions
            </TrustBadge>

            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-ei-forest/80">
              Easy Invoice
            </p>
            <h1
              id="easy-invoice-hero-heading"
              className="mt-2 font-ei-heading text-4xl font-bold leading-[1.1] tracking-tight text-ei-forest md:text-5xl lg:text-[3.25rem]"
            >
              Free Invoice App — Invoice in Seconds. Get Paid Faster.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-ei-muted md:text-lg">
              Create professional invoices, track payments, and export PDFs — free on Android and
              web. Easy Invoice by FluvoSoft is built for small businesses and freelancers in
              Bangladesh and worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-stretch gap-3">
              <GooglePlayButton size="large" />
              <DownloadApkButton size="large" />
            </div>

            <ul
              className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-ei-muted"
              aria-label="Key features"
            >
              <li>20 Templates</li>
              <li aria-hidden className="text-ei-lime">
                ·
              </li>
              <li>Cloud Sync</li>
              <li aria-hidden className="text-ei-lime">
                ·
              </li>
              <li>PDF Export</li>
            </ul>

            <div className="mt-10">
              <EasyInvoiceCounterStats />
            </div>
          </div>

          <div className="order-1 relative flex min-h-[320px] items-center justify-center lg:order-2 lg:min-h-[480px]">
            <Image
              src={HERO_LOGO}
              alt="Easy Invoice app logo by FluvoSoft"
              width={520}
              height={520}
              className="ei-phone-enter h-auto w-full max-w-md object-contain drop-shadow-2xl lg:max-w-lg"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </header>
  );
}
