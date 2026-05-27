"use client";

import type { ReactNode } from "react";
import { GooglePlayBadgeImage } from "@/components/shared/GooglePlayBadgeImage";
import {
  productHeroCtaBase,
  productHeroCtaGhostButton,
  productHeroCtaGhostBadgeButton,
  productHeroCtaGhostSm,
  productHeroCtaGhostBadgeSm,
} from "@/components/shared/productHeroCtaStyles";
import { useEasyInvoiceBetaModal } from "./EasyInvoiceBetaModalProvider";

function PlayStoreIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.18 23.76c.31.18.68.18 1.01 0l12.57-7.27-3.18-3.18L3.18 23.76zm18.14-10.4L16.5 10.5l-3.36 3.36 3.36 3.36 4.82-2.78c.58-.34.58-1.16 0-1.5zM3.18.24c-.33.19-.55.54-.55.94v21.64c0 .4.22.75.55.94L14.82 12 3.18.24zM16.14 7.86l3.18-3.18L6.75.24c-.33-.19-.7-.19-1.01 0l10.4 7.62z" />
    </svg>
  );
}

export function GooglePlayButton({
  className = "",
  size = "default",
  variant = "default",
}: {
  className?: string;
  size?: "default" | "large";
  variant?: "default" | "badge";
}) {
  const { openBetaModal } = useEasyInvoiceBetaModal();

  if (variant === "badge") {
    return (
      <button
        type="button"
        onClick={openBetaModal}
        className={`${size === "default" ? productHeroCtaGhostBadgeSm : productHeroCtaGhostBadgeButton} ${className}`}
        aria-label="Get Easy Invoice on Google Play"
      >
        <GooglePlayBadgeImage size={size} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={openBetaModal}
      className={`ei-cta-primary ${productHeroCtaBase} bg-ei-forest text-white ${size === "default" ? "h-[48px] min-w-[160px] px-5 py-3" : ""} ${className}`}
      aria-label="Get Easy Invoice on Google Play"
    >
      <span className="shrink-0">
        <PlayStoreIcon />
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] uppercase tracking-wide opacity-90">Get it on</span>
        <span className={`font-semibold ${size === "large" ? "text-base" : "text-sm"}`}>
          Google Play
        </span>
      </span>
    </button>
  );
}

export function PlayStoreNavButton({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { openBetaModal } = useEasyInvoiceBetaModal();

  return (
    <button
      type="button"
      onClick={() => {
        openBetaModal();
        onClick?.();
      }}
      className={className}
      aria-label="Get Easy Invoice on Google Play"
    >
      {children}
    </button>
  );
}
