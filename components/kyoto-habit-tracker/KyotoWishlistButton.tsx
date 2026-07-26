"use client";

import type { ReactNode } from "react";
import { useKyotoBetaModal } from "./KyotoBetaModalProvider";

export function WishlistNavButton({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { openBetaModal } = useKyotoBetaModal();

  return (
    <button
      type="button"
      onClick={() => {
        openBetaModal();
        onClick?.();
      }}
      className={className}
      aria-label="Join the KYOTO Habit Tracker wishlist"
    >
      {children}
    </button>
  );
}
