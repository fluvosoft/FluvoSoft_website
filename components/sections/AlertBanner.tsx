import Link from "next/link";

export default function AlertBanner() {
  return (
    <div className="border-b border-white/5 py-2.5">
      <div className="flex justify-center">
        <div className="flex items-center gap-2 rounded-full bg-banner-bg px-5 py-2 text-sm text-accent">
          <span>We are open-sourcing Scale GenAI Platform&apos;s agentic infrastructure layer.</span>
          <Link href="#" className="font-semibold text-foreground-muted hover:underline">
            Try now →
          </Link>
        </div>
      </div>
    </div>
  );
}
