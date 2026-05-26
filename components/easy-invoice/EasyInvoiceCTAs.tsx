import type { ReactNode } from "react";
import { easyInvoiceConfig } from "@/lib/easyInvoiceSeo";

const heroCtaBase =
  "inline-flex min-h-[52px] min-w-[168px] items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ei-lime";

function DownloadIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

export function DownloadApkButton({
  className = "",
  size = "large",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  return (
    <a
      href={easyInvoiceConfig.apkUrl}
      download={easyInvoiceConfig.apkFileName}
      className={`ei-cta-ghost ${heroCtaBase} border-2 border-ei-forest/25 bg-transparent text-base font-semibold text-ei-forest hover:border-ei-lime hover:bg-ei-lime/10 ${size === "default" ? "min-h-[48px] min-w-[160px] px-5 py-3 text-sm" : ""} ${className}`}
      aria-label="Download Easy Invoice APK for Android"
    >
      <DownloadIcon />
      Download APK
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
