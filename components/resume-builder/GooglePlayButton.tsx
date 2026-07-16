"use client";

import type { ReactNode } from "react";
import { useResumeBuilderBetaModal } from "./ResumeBuilderBetaModalProvider";

export function WishlistNavButton({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { openBetaModal } = useResumeBuilderBetaModal();

  return (
    <button
      type="button"
      onClick={() => {
        openBetaModal();
        onClick?.();
      }}
      className={className}
      aria-label="Join the Resume Builder wishlist"
    >
      {children}
    </button>
  );
}
