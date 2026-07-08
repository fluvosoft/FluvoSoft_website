"use client";

import type { ReactNode } from "react";
import { GooglePlayStoreButton as GooglePlayStoreButtonUI } from "@/components/shared/GooglePlayStoreButton";
import { easyInvoiceConfig } from "@/lib/easyInvoiceSeo";

export function GooglePlayButton({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
  /** @deprecated Badge image variant removed — use default filled store button */
  variant?: "default" | "badge";
}) {
  return (
    <GooglePlayStoreButtonUI
      href={easyInvoiceConfig.playStoreUrl}
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
  return (
    <a
      href={easyInvoiceConfig.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-block no-underline ${className}`}
      aria-label="Get Easy Invoice on Google Play"
    >
      {children}
    </a>
  );
}
