import type { ReactNode } from "react";
import { easyInvoiceConfig } from "@/lib/easyInvoiceSeo";

function DownloadIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

export function DownloadApkButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={easyInvoiceConfig.apkUrl}
      download={easyInvoiceConfig.apkFileName}
      className={`ei-cta-ghost inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ei-forest/25 bg-transparent px-5 py-3 text-sm font-semibold text-ei-forest no-underline hover:border-ei-lime hover:bg-ei-lime/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ei-lime ${className}`}
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
