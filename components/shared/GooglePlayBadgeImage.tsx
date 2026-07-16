"use client";

export const GOOGLE_PLAY_BADGE_SRC = "/images/google-play-badge.webp";

export function GooglePlayBadgeImage({
  size = "large",
  className = "",
}: {
  size?: "default" | "large";
  className?: string;
}) {
  const heightClass = size === "large" ? "h-[56px]" : "h-[46px]";
  const scaleClass = size === "large" ? "scale-[1.26]" : "scale-[1.20]";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={GOOGLE_PLAY_BADGE_SRC}
      alt=""
      aria-hidden
      className={`block w-auto max-w-full shrink-0 object-contain object-center ${heightClass} ${scaleClass} ${className}`}
      decoding="async"
    />
  );
}
