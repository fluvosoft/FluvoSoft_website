"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-container px-6 py-12 lg:px-8">
        <div className="flex flex-wrap gap-8 border-b border-white/10 pb-12">
          <div className="min-w-[140px]">
            <Link href="/" className="flex items-center gap-2 text-foreground no-underline hover:opacity-90" aria-label="FluvoSoft home">
              <Image
                src="/images/fluvo_logo.png"
                alt="FluvoSoft logo"
                width={120}
                height={34}
                className="h-7 w-auto"
              />
              <span className="text-lg font-medium">FluvoSoft</span>
            </Link>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-cta">
              Venture catalysts studio
            </p>
            <p className="mt-3 text-sm text-accent">
              FluvoSoft Ltd.
              <br />
              Dhaka, Bangladesh
            </p>
            <div className="mt-4 flex gap-3">
              <Link href="#" className="text-sm text-accent hover:text-foreground" aria-label="Connect">
                Connect with us
              </Link>
            </div>
          </div>
          <div className="flex min-w-[120px] flex-col gap-3">
            <h4 className="text-sm font-medium text-foreground">Company</h4>
            <Link href="/about" className="text-sm text-accent hover:text-foreground">
              About us
            </Link>
            <Link href="#" className="text-sm text-accent hover:text-foreground">
              Documents
            </Link>
          </div>
          <div className="ml-auto flex min-w-[200px] flex-col gap-3">
            <h4 className="text-sm font-medium text-foreground">Subscribe</h4>
            <p className="text-sm text-accent">Stay updated with our latest news and updates.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email"
                className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-foreground placeholder:text-accent focus:border-cta/50 focus:outline-none focus:ring-1 focus:ring-cta/50"
              />
              <button
                type="submit"
                className="rounded-lg bg-cta px-4 py-2 text-sm font-medium text-white transition hover:bg-cta/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <p className="text-sm text-accent">
            FluvoSoft | Copyright © {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-accent hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-accent hover:text-foreground">
              Terms of Use
            </Link>
            <Link href="#" className="text-sm text-accent hover:text-foreground">
              User Agreement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
