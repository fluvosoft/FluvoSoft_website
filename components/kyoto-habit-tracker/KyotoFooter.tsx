import Link from "next/link";
import Image from "next/image";

export default function KyotoFooter() {
  return (
    <footer className="border-t border-ky-ink/10 bg-ky-ink text-white">
      <div className="mx-auto max-w-container px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <div className="min-w-[200px]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 no-underline hover:opacity-90"
              aria-label="FluvoSoft home"
            >
              <Image
                src="/images/fluvo_logo.webp"
                alt="FluvoSoft logo"
                width={120}
                height={34}
                className="h-7 w-auto brightness-0 invert"
              />
              <span className="font-ky-heading text-lg font-semibold">FluvoSoft</span>
            </Link>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-ky-blush">
              Venture catalysts studio
            </p>
            <p className="mt-3 text-sm text-white/75">
              FluvoSoft Ltd.
              <br />
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="flex min-w-[140px] flex-col gap-3">
            <h4 className="text-sm font-semibold text-white">KYOTO</h4>
            <Link
              href="/kyoto-habit-tracker#features"
              className="text-sm text-white/75 no-underline transition hover:text-ky-coral"
            >
              Features
            </Link>
            <Link
              href="/kyoto-habit-tracker#pricing"
              className="text-sm text-white/75 no-underline transition hover:text-ky-coral"
            >
              Pricing
            </Link>
            <Link
              href="/kyoto-habit-tracker#faq"
              className="text-sm text-white/75 no-underline transition hover:text-ky-coral"
            >
              FAQ
            </Link>
            <Link
              href="/kyoto-habit-tracker#privacy"
              className="text-sm text-white/75 no-underline transition hover:text-ky-coral"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex min-w-[140px] flex-col gap-3">
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <Link
              href="/about"
              className="text-sm text-white/75 no-underline transition hover:text-ky-coral"
            >
              About us
            </Link>
            <Link
              href="/"
              className="text-sm text-white/75 no-underline transition hover:text-ky-coral"
            >
              FluvoSoft.com
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/65">
            © {new Date().getFullYear()} FluvoSoft Ltd. KYOTO Habit Tracker.
          </p>
          <Link
            href="/privacy"
            className="text-sm text-white/65 no-underline transition hover:text-ky-coral"
          >
            Company privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
