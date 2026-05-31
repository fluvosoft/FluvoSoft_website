"use client";

import type { ReactNode } from "react";
import { GooglePlayStoreButton as GooglePlayStoreButtonUI } from "@/components/shared/GooglePlayStoreButton";
import {
  productHeroCtaGhostApkButton,
  productHeroCtaGhostSm,
} from "@/components/shared/productHeroCtaStyles";
import { inventoryStockTrackerConfig } from "@/lib/inventoryStockTrackerSeo";
import { useInventoryStockTrackerBetaModal } from "./InventoryStockTrackerBetaModalProvider";

function DownloadIcon() {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

export function DownloadApkButton({
  className = "",
  size = "large",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  return (
    <a
      href={inventoryStockTrackerConfig.apkUrl}
      download={inventoryStockTrackerConfig.apkFileName}
      className={`${size === "default" ? productHeroCtaGhostSm : productHeroCtaGhostApkButton} no-underline text-ei-forest ${className}`}
      aria-label="Download Inventory Stock Tracker APK for Android"
    >
      <DownloadIcon />
      Download APK
    </a>
  );
}

export function TrustBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-ei-lime/40 bg-ei-lime/15 px-3 py-1 text-xs font-semibold text-ei-forest">
      {children}
    </span>
  );
}

export function GooglePlayButton({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
  /** @deprecated Badge image variant removed — use default filled store button */
  variant?: "default" | "badge";
}) {
  const { openBetaModal } = useInventoryStockTrackerBetaModal();

  return (
    <GooglePlayStoreButtonUI
      onClick={openBetaModal}
      size={size}
      className={className}
      ariaLabel="Get Inventory Stock Tracker on Google Play"
    />
  );
}

export function PlayStoreNavButton({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { openBetaModal } = useInventoryStockTrackerBetaModal();

  return (
    <button
      type="button"
      onClick={() => {
        openBetaModal();
        onClick?.();
      }}
      className={className}
      aria-label="Get Inventory Stock Tracker on Google Play"
    >
      {children}
    </button>
  );
}
