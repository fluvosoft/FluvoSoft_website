"use client";

export const GOOGLE_PLAY_BADGE_SRC = "/images/google-play-badge.png";

export function GooglePlayBadgeImage({
  size = "large",
  className = "",
}: {
  size?: "default" | "large";
  className?: string;
}) {
  const heightClass = size === "large" ? "h-[44px]" : "h-[36px]";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={GOOGLE_PLAY_BADGE_SRC}
      alt=""
      aria-hidden
      className={`block w-auto max-w-full shrink-0 object-contain ${heightClass} ${className}`}
      decoding="async"
    />
  );
}
