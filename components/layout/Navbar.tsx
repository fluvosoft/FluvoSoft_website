"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function ChevronDownIcon({ className, open }: { className?: string; open?: boolean }) {
  return (
    <svg
      className={`${className ?? ""} transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Brands",
    dropdown: [{ href: "https://www.meshprojukti.cloud/", label: "Lumiro", external: true }],
  },
  {
    label: "Solutions",
    dropdown: [
      { href: "/blockchain", label: "Blockchain" },
      { href: "/automation", label: "Automation" },
      { href: "/custom-development", label: "Custom Development" },
      { href: "/saas", label: "SaaS" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { href: "#security", label: "Security" },
      { href: "#guides", label: "Guides" },
      { href: "#careers", label: "Careers" },
      { href: "#research", label: "Research" },
      { href: "#book-a-demo", label: "Contact Us" },
      { href: "#blog", label: "Blog" },
      { href: "#events", label: "Events" },
      { href: "#open-source", label: "Open Source" },
      { href: "#documentation", label: "Documentation" },
    ],
  },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative z-50 bg-background">
      <nav
        ref={navRef}
        className="relative mx-auto flex items-center justify-between gap-6 px-6 py-3.5 md:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-white no-underline transition hover:opacity-90"
          aria-label="FluvoSoft home"
        >
          <Image
            src="/images/fluvo_logo.png"
            alt="FluvoSoft - Venture catalysts studio logo"
            width={140}
            height={40}
            className="h-8 w-auto md:h-9"
            priority
          />
          <span className="hidden text-lg font-medium tracking-tight lg:inline">FluvoSoft</span>
        </Link>

        {/* Nav links + CTA - desktop */}
        <div className="hidden flex-1 items-center justify-end gap-0.5 md:flex md:gap-1 lg:gap-2">
          {navLinks.map((item) =>
            "dropdown" in item ? (
              <div
                key={item.label}
                className="relative flex flex-col py-2"
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown((prev) => (prev === item.label ? null : item.label))}
                  className="flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium text-white outline-none transition hover:text-cta focus-visible:ring-2 focus-visible:ring-cta/50 md:px-3 md:text-sm"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDownIcon className="h-4 w-4 shrink-0" open={openDropdown === item.label} />
                </button>
                <div
                  className={`absolute right-0 top-full -mt-1 pt-1 transition duration-200 ${
                    openDropdown === item.label ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <ul
                    className="min-w-[220px] rounded-b-2xl bg-[#1A1A1A] py-2 shadow-xl md:rounded-b-3xl"
                    role="menu"
                  >
                    {(item.dropdown ?? []).map((sub) => (
                      <li key={sub.label} role="none">
                        <Link
                          href={sub.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2.5 text-sm text-white no-underline transition hover:bg-cta/20 hover:text-cta"
                          role="menuitem"
                          {...("external" in sub && sub.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-2 py-1.5 text-xs font-medium text-white no-underline transition hover:text-cta md:px-3 md:text-sm"
              >
                {item.label}
              </Link>
            )
          )}
          {/* Desktop CTA */}
          <Link
            href="#book-a-demo"
            className="inline-flex items-center justify-center rounded-md bg-cta px-3 py-2 text-xs font-medium text-white no-underline shadow transition hover:bg-cta/90 focus-visible:ring-2 focus-visible:ring-cta/50 lg:px-5 lg:py-2.5 lg:text-sm"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3">

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/5 text-white outline-none transition hover:bg-white/10 hover:border-white/30 focus-visible:ring-2 focus-visible:ring-cta/50 md:hidden"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
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
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 md:hidden z-50 bg-background">
          <div className="mx-auto max-w-6xl bg-[#1A1A1A] px-4 py-3 rounded-lg border border-white/10 shadow-lg">
            <div className="space-y-1">
              {navLinks.map((item) =>
                "dropdown" in item ? (
                  <div
                    key={item.label}
                    className="border-b border-white/5 pb-1 last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                      }
                      className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium text-white outline-none transition hover:bg-white/5"
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon
                        className="h-4 w-4 shrink-0"
                        open={openDropdown === item.label}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="mt-1 space-y-1 pl-4">
                        {(item.dropdown ?? []).map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => {
                              setOpenDropdown(null);
                              setIsMobileMenuOpen(false);
                            }}
                            className="block rounded-md px-2 py-1.5 text-sm text-white no-underline transition hover:bg-white/5 hover:text-cta"
                            {...("external" in sub && sub.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setOpenDropdown(null);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block rounded-md px-2 py-2 text-sm font-medium text-white no-underline transition hover:bg-white/5 hover:text-cta"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <div className="mt-3">
              <Link
                href="#book-a-demo"
                onClick={() => {
                  setOpenDropdown(null);
                  setIsMobileMenuOpen(false);
                }}
                className="flex w-full items-center justify-center rounded-md bg-cta px-4 py-2.5 text-sm font-medium text-white no-underline shadow transition hover:bg-cta/90"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
