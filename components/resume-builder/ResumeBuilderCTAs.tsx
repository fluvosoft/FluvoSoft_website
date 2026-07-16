import type { ReactNode } from "react";

export function TrustBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-rb-brand/40 bg-rb-brand/15 px-3 py-1 text-xs font-semibold text-rb-navy">
      {children}
    </span>
  );
}
