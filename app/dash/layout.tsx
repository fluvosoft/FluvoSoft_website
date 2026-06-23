import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#0A0A0A] text-foreground">{children}</div>;
}
