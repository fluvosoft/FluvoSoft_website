import type { ReactNode } from "react";
import { easyInvoiceConfig } from "@/lib/easyInvoiceSeo";
import {
  productHeroCtaGhostApkButton,
  productHeroCtaGhostSm,
} from "@/components/shared/productHeroCtaStyles";

function WebIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

export function WebVersionButton({
  className = "",
  size = "large",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  return (
    <a
      href={easyInvoiceConfig.webUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${size === "default" ? productHeroCtaGhostSm : productHeroCtaGhostApkButton} no-underline text-ei-forest ${className}`}
      aria-label="Try Easy Invoice web version at easyinvoice.fluvosoft.com"
    >
      <WebIcon />
      Try web version
    </a>
  );
}

export function TrustBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-ei-lime/40 bg-ei-lime/15 px-3 py-1 text-xs font-semibold text-ei-forest">
      {children}
    </span>
  );
}
