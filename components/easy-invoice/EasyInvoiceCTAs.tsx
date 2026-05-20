import type { ReactNode } from "react";
import { easyInvoiceConfig } from "@/lib/easyInvoiceSeo";

function PlayStoreIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.18 23.76c.31.18.68.18 1.01 0l12.57-7.27-3.18-3.18L3.18 23.76zm18.14-10.4L16.5 10.5l-3.36 3.36 3.36 3.36 4.82-2.78c.58-.34.58-1.16 0-1.5zM3.18.24c-.33.19-.55.54-.55.94v21.64c0 .4.22.75.55.94L14.82 12 3.18.24zM16.14 7.86l3.18-3.18L6.75.24c-.33-.19-.7-.19-1.01 0l10.4 7.62z" />
    </svg>
  );
}

export function GooglePlayButton({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  return (
    <a
      href={easyInvoiceConfig.playStoreUrl}
      className={`ei-cta-primary inline-flex min-w-[160px] items-center gap-2.5 rounded-xl bg-ei-forest px-5 py-3 text-white no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ei-lime ${size === "large" ? "px-6 py-3.5" : ""} ${className}`}
      aria-label="Get Easy Invoice on Google Play"
    >
      <span className="shrink-0">
        <PlayStoreIcon />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wide opacity-90">Get it on</span>
        <span className={`font-semibold ${size === "large" ? "text-base" : "text-sm"}`}>
          Google Play
        </span>
      </span>
    </a>
  );
}

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
      download
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
