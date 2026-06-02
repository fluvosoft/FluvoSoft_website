"use client";

import {
  productHeroCtaPlayStoreButtonLg,
  productHeroCtaPlayStoreButtonSm,
} from "@/components/shared/productHeroCtaStyles";
import { GooglePlayBadgeImage } from "@/components/shared/GooglePlayBadgeImage";

export function GooglePlayStoreButton({
  onClick,
  className = "",
  size = "large",
  ariaLabel,
}: {
  onClick: () => void;
  className?: string;
  size?: "default" | "large";
  ariaLabel: string;
}) {
  const isLarge = size === "large";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${isLarge ? productHeroCtaPlayStoreButtonLg : productHeroCtaPlayStoreButtonSm} ${className}`}
      aria-label={ariaLabel}
    >
      <GooglePlayBadgeImage size={size} className="pointer-events-none" />
    </button>
  );
}
