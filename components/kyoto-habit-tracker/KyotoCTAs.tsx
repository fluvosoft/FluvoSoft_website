import type { ReactNode } from "react";

export function TrustBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-ky-coral/40 bg-ky-coral/15 px-3 py-1 text-xs font-semibold text-ky-ink">
      {children}
    </span>
  );
}
