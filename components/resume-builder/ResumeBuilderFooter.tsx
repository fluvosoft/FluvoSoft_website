import Link from "next/link";
import Image from "next/image";

export default function ResumeBuilderFooter() {
  return (
    <footer className="border-t border-rb-navy/10 bg-rb-navy text-white">
      <div className="mx-auto max-w-container px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <div className="min-w-[200px]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 no-underline hover:opacity-90"
              aria-label="FluvoSoft home"
            >
              <Image
                src="/images/fluvo_logo.png"
                alt="FluvoSoft logo"
                width={120}
                height={34}
                className="h-7 w-auto brightness-0 invert"
              />
              <span className="font-rb-heading text-lg font-semibold">FluvoSoft</span>
            </Link>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-rb-sky">
              Venture catalysts studio
            </p>
            <p className="mt-3 text-sm text-white/75">
              FluvoSoft Ltd.
              <br />
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="flex min-w-[140px] flex-col gap-3">
            <h4 className="text-sm font-semibold text-white">Resume Builder</h4>
            <Link
              href="/resume-builder#features"
              className="text-sm text-white/75 no-underline transition hover:text-rb-sky"
            >
              Features
            </Link>
            <Link
              href="/resume-builder#pricing"
              className="text-sm text-white/75 no-underline transition hover:text-rb-sky"
            >
              Pricing
            </Link>
            <Link
              href="/resume-builder#faq"
              className="text-sm text-white/75 no-underline transition hover:text-rb-sky"
            >
              FAQ
            </Link>
            <Link
              href="/resume-builder#privacy"
              className="text-sm text-white/75 no-underline transition hover:text-rb-sky"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex min-w-[140px] flex-col gap-3">
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <Link
              href="/about"
              className="text-sm text-white/75 no-underline transition hover:text-rb-sky"
            >
              About us
            </Link>
            <Link
              href="/"
              className="text-sm text-white/75 no-underline transition hover:text-rb-sky"
            >
              FluvoSoft.com
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/65">
            FluvoSoft | Copyright © {new Date().getFullYear()}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/resume-builder#privacy"
              className="text-sm text-white/75 no-underline transition hover:text-rb-sky"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-sm text-white/75 no-underline transition hover:text-rb-sky"
            >
              Terms of Use
            </Link>
            <Link
              href="/"
              className="text-sm text-white/75 no-underline transition hover:text-rb-sky"
            >
              User Agreement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
