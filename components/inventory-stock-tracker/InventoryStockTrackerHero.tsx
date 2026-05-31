import Image from "next/image";
import { inventoryStockTrackerHeroLogo } from "@/data/inventoryStockTrackerScreenshots";
import InventoryStockTrackerCounterStats from "./InventoryStockTrackerCounterStats";
import { DownloadApkButton, GooglePlayButton, TrustBadge } from "./StoreButtons";

export default function InventoryStockTrackerHero() {
  return (
    <header
      className="relative overflow-hidden bg-ei-cream"
      aria-labelledby="inventory-stock-tracker-hero-heading"
    >
      <div className="ei-hero-mesh" aria-hidden />
      <div className="ei-hero-grain" aria-hidden />

      <div className="relative mx-auto max-w-container px-6 pb-8 pt-10 lg:px-8 lg:pb-12 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <TrustBadge>
              <span aria-hidden>📦</span> Android v1.0.0 · Free · Pro $4.99 · Pro Plus $9.99/mo
            </TrustBadge>

            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-ei-forest/80">
              Inventory Stock Tracker
            </p>
            <h1
              id="inventory-stock-tracker-hero-heading"
              className="mt-2 font-ei-heading text-4xl font-bold leading-[1.1] tracking-tight text-ei-forest md:text-5xl lg:text-[3.25rem]"
            >
              Inventory App — Track Stock. Grow Your Business.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-ei-muted md:text-lg">
              Manage unlimited items, scan barcodes, record stock in and out, and track earnings
              versus spendings on a live dashboard — with Firebase cloud sync and offline mode.
              Download the Android app today; upgrade to Pro or Pro Plus when your business grows.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <GooglePlayButton size="large" />
              <DownloadApkButton size="large" />
            </div>

            <ul
              className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-ei-muted"
              aria-label="Key features"
            >
              <li>Unlimited items</li>
              <li aria-hidden className="text-ei-lime">
                ·
              </li>
              <li>Barcode scan</li>
              <li aria-hidden className="text-ei-lime">
                ·
              </li>
              <li>Cloud + offline</li>
            </ul>

            <div className="mt-10">
              <InventoryStockTrackerCounterStats />
            </div>
          </div>

          <div className="order-1 relative flex min-h-[320px] items-center justify-center lg:order-2 lg:min-h-[480px]">
            <Image
              src={inventoryStockTrackerHeroLogo.src}
              alt={inventoryStockTrackerHeroLogo.alt}
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
