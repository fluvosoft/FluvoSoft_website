"use client";

import {
  productHeroCtaPlayStoreButtonLg,
  productHeroCtaPlayStoreButtonSm,
} from "@/components/shared/productHeroCtaStyles";
import { GooglePlayBadgeImage } from "@/components/shared/GooglePlayBadgeImage";

export function GooglePlayStoreButton({
  onClick,
  href,
  className = "",
  size = "large",
  ariaLabel,
}: {
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: "default" | "large";
  ariaLabel: string;
}) {
  const isLarge = size === "large";
  const buttonClassName = `${isLarge ? productHeroCtaPlayStoreButtonLg : productHeroCtaPlayStoreButtonSm} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClassName}
        aria-label={ariaLabel}
      >
        <GooglePlayBadgeImage size={size} className="pointer-events-none" />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClassName}
      aria-label={ariaLabel}
    >
      <GooglePlayBadgeImage size={size} className="pointer-events-none" />
    </button>
  );
}
