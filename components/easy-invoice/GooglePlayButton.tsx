"use client";

import type { ReactNode } from "react";
import { GooglePlayStoreButton as GooglePlayStoreButtonUI } from "@/components/shared/GooglePlayStoreButton";
import { useEasyInvoiceBetaModal } from "./EasyInvoiceBetaModalProvider";

export function GooglePlayButton({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
  /** @deprecated Badge image variant removed — use default filled store button */
  variant?: "default" | "badge";
}) {
  const { openBetaModal } = useEasyInvoiceBetaModal();

  return (
    <GooglePlayStoreButtonUI
      onClick={openBetaModal}
      size={size}
      className={className}
      ariaLabel="Get Easy Invoice on Google Play"
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
