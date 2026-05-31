"use client";

import {
  productHeroCtaPlayStoreButtonLg,
  productHeroCtaPlayStoreButtonSm,
} from "@/components/shared/productHeroCtaStyles";

function GooglePlayStoreIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.5 3.5v17l14-8.5-14-8.5z" />
    </svg>
  );
}

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
      <GooglePlayStoreIcon className={isLarge ? "h-8 w-8" : "h-7 w-7"} />
      <span className="flex flex-col items-start leading-none">
        <span
          className={`font-normal uppercase text-white/95 ${
            isLarge ? "text-[11px] tracking-[0.08em]" : "text-[10px] tracking-wide"
          }`}
        >
          GET IT ON
        </span>
        <span className={`font-semibold ${isLarge ? "text-lg" : "text-sm"}`}>Google Play</span>
      </span>
    </button>
  );
}
