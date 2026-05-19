"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type NavDropdownItem = {
  href: string;
  label: string;
  external?: boolean;
};

type NavItem =
  | { label: string; href: string }
  | { label: string; dropdown: NavDropdownItem[] };

const navItems: NavItem[] = [
  {
    label: "Features",
    dropdown: [
      { href: "/easy-invoice#features", label: "Authentication & account" },
      { href: "/easy-invoice#features", label: "Onboarding" },
      { href: "/easy-invoice#features", label: "Dashboard & analytics" },
      { href: "/easy-invoice#features", label: "Invoice builder" },
      { href: "/easy-invoice#features", label: "Invoice management" },
      { href: "/easy-invoice#features", label: "Settings & notifications" },
    ],
  },
  { label: "Pricing", href: "/easy-invoice#pricing" },
  {
    label: "Download",
    dropdown: [
      { href: "#", label: "Google Play" },
      { href: "#", label: "App Store" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { href: "/easy-invoice#faq", label: "FAQ" },
      { href: "/easy-invoice#resources", label: "Help center" },
      { href: "#", label: "Documentation" },
      { href: "#", label: "Blog" },
      { href: "/#book-a-demo", label: "Contact support" },
    ],
  },
];

const DEFAULT_LOGO = "/images/easy_invoice_logo.svg";

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

type EasyInvoiceNavbarProps = {
  logoSrc?: string;
  logoAlt?: string;
};

export default function EasyInvoiceNavbar({
  logoSrc = DEFAULT_LOGO,
  logoAlt = "Easy Invoice",
}: EasyInvoiceNavbarProps) {
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

  const closeMenus = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative z-40 border-b border-ei-primary/10 bg-white">
      <nav
        ref={navRef}
        className="mx-auto flex max-w-container items-center justify-between gap-4 px-6 py-4 lg:px-8 lg:py-5"
        aria-label="Easy Invoice navigation"
      >
        <Link
          href="/easy-invoice"
          className="flex shrink-0 items-center no-underline transition hover:opacity-90"
          aria-label="Easy Invoice home"
        >
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={480}
            height={120}
            className="h-16 w-auto max-w-[320px] object-contain object-left sm:h-20 sm:max-w-[380px] md:h-24 md:max-w-[440px] lg:max-w-[520px]"
            unoptimized={logoSrc.endsWith(".svg")}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex lg:gap-2">
          {navItems.map((item) =>
            "dropdown" in item ? (
              <div key={item.label} className="relative flex flex-col py-1">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                  }
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ei-textPrimary outline-none transition hover:bg-ei-primary/5 focus-visible:ring-2 focus-visible:ring-ei-primary/30"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDownIcon className="h-4 w-4" open={openDropdown === item.label} />
                </button>
                <div
                  className={`absolute right-0 top-full pt-1 transition duration-200 ${
                    openDropdown === item.label ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <ul
                    className="min-w-[200px] rounded-lg border border-ei-primary/10 bg-white py-1.5 shadow-lg"
                    role="menu"
                  >
                    {item.dropdown.map((sub) => (
                      <li key={sub.label} role="none">
                        <Link
                          href={sub.href}
                          onClick={closeMenus}
                          className="block px-4 py-2 text-sm text-ei-textPrimary no-underline transition hover:bg-ei-primary/5 hover:text-ei-primaryDark"
                          role="menuitem"
                          {...(sub.external
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
                className="rounded-md px-3 py-2 text-sm font-medium text-ei-textPrimary no-underline transition hover:bg-ei-primary/5"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-ei-textPrimary outline-none transition hover:bg-ei-primary/5 focus-visible:ring-2 focus-visible:ring-ei-primary/30 md:hidden"
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
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-ei-primary/10 bg-white px-6 py-3 md:hidden">
          <div className="space-y-1">
            {navItems.map((item) =>
              "dropdown" in item ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                    }
                    className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium text-ei-textPrimary"
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDownIcon className="h-4 w-4" open={openDropdown === item.label} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="mb-2 space-y-1 pl-3">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={closeMenus}
                          className="block rounded-md px-2 py-1.5 text-sm text-ei-textPrimary/80 no-underline hover:bg-ei-primary/5"
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
                  onClick={closeMenus}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-ei-textPrimary no-underline hover:bg-ei-primary/5"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
