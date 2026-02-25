"use client";

import Link from "next/link";
import Image from "next/image";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 pb-2 md:px-6">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-2xl bg-[#1A1A1A] px-6 py-3.5 shadow-lg md:rounded-3xl md:px-8"
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
          <span className="text-lg font-medium tracking-tight">FluvoSoft</span>
        </Link>

        {/* Nav links - hidden on small screens, add mobile menu later if needed */}
        <div className="hidden flex-1 items-center justify-center gap-1 md:flex md:gap-2">
          {navLinks.map((item) =>
            "dropdown" in item ? (
              <div
                key={item.label}
                className="group relative flex flex-col py-2"
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-white outline-none transition hover:text-cta focus-visible:ring-2 focus-visible:ring-cta/50"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDownIcon className="h-4 w-4 shrink-0 transition group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full -mt-1 pt-1 opacity-0 transition group-hover:opacity-100">
                  <ul
                    className="min-w-[220px] rounded-b-2xl bg-[#1A1A1A] py-2 shadow-xl md:rounded-b-3xl"
                    role="menu"
                  >
                    {(item.dropdown ?? []).map((sub) => (
                      <li key={sub.label} role="none">
                        <Link
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-white no-underline transition hover:bg-white/5 hover:text-cta"
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
                className="rounded-md px-3 py-1.5 text-sm font-medium text-white no-underline transition hover:text-cta"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="shrink-0">
          <Link
            href="#book-a-demo"
            className="inline-flex items-center justify-center rounded-full bg-cta px-5 py-2.5 text-sm font-medium text-white no-underline shadow transition hover:bg-cta/90 focus-visible:ring-2 focus-visible:ring-cta/50"
          >
            Book a Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}
