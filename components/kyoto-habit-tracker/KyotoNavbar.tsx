"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { WishlistNavButton } from "./KyotoWishlistButton";

const navLinks = [
  { label: "Features", href: "/kyoto-habit-tracker#features" },
  { label: "Pricing", href: "/kyoto-habit-tracker#pricing" },
  { label: "FAQ", href: "/kyoto-habit-tracker#faq" },
  { label: "Privacy", href: "/kyoto-habit-tracker#privacy" },
];

function ArrowLeftIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function BackToHomeButton({ onClick, className = "" }: { onClick?: () => void; className?: string }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-full border border-ky-ink/15 bg-white/80 px-3.5 py-2 text-sm font-medium text-ky-ink no-underline shadow-sm backdrop-blur-sm transition hover:border-ky-coral/50 hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ky-coral ${className}`}
      aria-label="Back to FluvoSoft home"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ky-coral/25 text-ky-ink transition group-hover:bg-ky-coral/40">
        <ArrowLeftIcon />
      </span>
      <span className="hidden sm:inline">FluvoSoft</span>
      <span className="sm:hidden">Home</span>
    </Link>
  );
}

export default function KyotoNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ky-ink/10 bg-ky-peach/90 shadow-[0_1px_0_rgba(26,26,26,0.04)] backdrop-blur-lg">
      <div ref={navRef}>
        <nav
          className="relative mx-auto flex max-w-container items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-3.5"
          aria-label="KYOTO Habit Tracker navigation"
        >
          <BackToHomeButton onClick={closeMenu} />

          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-ky-ink/10 bg-white/80 p-1.5 shadow-md backdrop-blur-sm">
              <Link
                href="/kyoto-habit-tracker"
                className="rounded-full px-3 py-1.5 font-ky-heading text-sm font-bold text-ky-ink no-underline"
                aria-label="KYOTO Habit Tracker page top"
              >
                KYOTO
              </Link>
              <span className="h-4 w-px bg-ky-ink/15" aria-hidden />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ky-nav-link rounded-full px-3.5 py-1.5 font-ky-body text-sm font-medium text-ky-muted no-underline transition hover:bg-ky-coral/15 hover:text-ky-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ky-coral"
                >
                  {link.label}
                </Link>
              ))}
              <WishlistNavButton className="ky-cta-primary ml-1 rounded-full bg-ky-coral px-4 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ky-coral">
                Join wishlist
              </WishlistNavButton>
            </div>
          </div>

          <Link
            href="/kyoto-habit-tracker"
            className="absolute left-1/2 -translate-x-1/2 truncate font-ky-heading text-sm font-bold text-ky-ink no-underline md:hidden"
          >
            KYOTO
          </Link>

          <button
            type="button"
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ky-ink/10 bg-white/80 text-ky-ink shadow-sm transition hover:border-ky-coral/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ky-coral md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
              {isMobileMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>

          <div className="hidden w-10 md:block" aria-hidden />
        </nav>

        {isMobileMenuOpen && (
          <div className="border-t border-ky-ink/10 bg-ky-peach px-4 py-5 shadow-lg md:hidden">
            <div className="mx-auto flex max-w-sm flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-center text-sm font-medium text-ky-ink no-underline transition hover:bg-ky-coral/15"
                >
                  {link.label}
                </Link>
              ))}
              <WishlistNavButton
                onClick={closeMenu}
                className="ky-cta-primary mt-2 w-full rounded-full bg-ky-coral px-4 py-3 text-center text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ky-coral"
              >
                Join wishlist
              </WishlistNavButton>
              <div className="mt-4 flex justify-center border-t border-ky-ink/10 pt-4">
                <BackToHomeButton onClick={closeMenu} className="w-full justify-center sm:w-auto" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
