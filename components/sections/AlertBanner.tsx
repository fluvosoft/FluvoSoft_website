import Link from "next/link";

export default function AlertBanner() {
  return (
    <div className="hidden border-b border-white/5 py-2.5 md:block">
      <div className="flex justify-center">
        <div className="flex items-center gap-1 md:gap-2 rounded-full bg-banner-bg px-5 py-2 text-xs md:text-sm text-accent">
          <span>Cutting-edge blockchain and intelligent automation solutions.</span>
          <Link href="#book-a-demo" className="font-medium text-foreground-muted hover:underline">
            Get started →
          </Link>
        </div>
      </div>
    </div>
  );
}
