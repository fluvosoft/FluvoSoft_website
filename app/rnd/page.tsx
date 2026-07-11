import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "R&D Lab | Research & Development",
  description:
    "FluvoSoft R&D — where curiosity becomes code. We explore emerging technology, prototype fast, and turn experiments into products.",
  alternates: {
    canonical: "/rnd",
  },
};

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4";
const ABOUT_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4";
const CTA_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4";

const NFT_CARDS = [
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    name: "Signal",
    score: "8.7/10",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    name: "Horizon",
    score: "9/10",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    name: "Drift",
    score: "8.2/10",
  },
];

const ABOUT_PARAGRAPH =
  "Where curiosity becomes code. We explore emerging technology, prototype fast, and turn bold experiments into real software";

function MailIcon({ className }: { className?: string }) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const RND_SOCIAL_LINKS = [
  {
    label: "FluvoSoft on LinkedIn",
    href: "https://www.linkedin.com/company/fluvo-soft",
    external: true,
    icon: LinkedInIcon,
  },
  {
    label: "FluvoSoft on Facebook",
    href: "https://www.facebook.com/profile.php?id=61586723829777",
    external: true,
    icon: FacebookIcon,
  },
  {
    label: "Email FluvoSoft support",
    href: "mailto:support@fluvosoft.com",
    external: false,
    icon: MailIcon,
  },
] as const;

export default function RnDPage() {
  return (
    <div className="min-h-screen bg-[#010828] font-mono text-cream">
      {/* Texture overlay — inline SVG noise (no external asset; public/texture.png was never added) */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        aria-hidden
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "cover",
          mixBlendMode: "lighten",
          opacity: 0.6,
        }}
      />

      {/* Site navbar (our theme) */}
      <Navbar />

      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative min-h-screen overflow-hidden rounded-b-[32px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-[#010828]/20" aria-hidden />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1831px] flex-col px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
          {/* Social icons — desktop (top-right) */}
          <div className="absolute right-4 top-10 z-20 hidden flex-col gap-3 sm:right-6 lg:right-10 lg:flex">
            {RND_SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="liquid-glass flex h-14 w-14 items-center justify-center rounded-[1rem] text-cream transition-colors hover:bg-white/10"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Hero content */}
          <div className="relative flex flex-1 flex-col justify-center py-16">
            <div className="relative lg:ml-32 lg:max-w-[780px]">
              <h1 className="font-grotesk text-[40px] uppercase leading-[1.05] text-cream sm:text-[60px] md:text-[75px] md:leading-[1] lg:text-[90px]">
                Beyond ideas and ( their ) familiar boundaries
              </h1>
              <span className="pointer-events-none absolute -right-2 top-0 -rotate-1 font-condiment text-[24px] normal-case text-neon opacity-90 mix-blend-exclusion sm:text-[32px] md:text-[40px] lg:-right-10 lg:text-[48px]">
                FluvoSoft R&amp;D
              </span>
            </div>

            {/* Social icons — mobile */}
            <div className="mt-10 flex justify-center gap-3 lg:hidden">
              {RND_SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="liquid-glass flex h-14 w-14 items-center justify-center rounded-[1rem] text-cream transition-colors hover:bg-white/10"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: ABOUT ================= */}
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={ABOUT_VIDEO}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 mx-auto max-w-[1831px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          {/* Top row */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="relative">
              <h2 className="font-grotesk text-[32px] uppercase leading-[1.05] text-cream sm:text-[44px] md:text-[52px] lg:text-[60px]">
                Hello!
                <br />
                We&apos;re fluvosoft
              </h2>
              <span className="pointer-events-none absolute -bottom-2 right-0 rotate-2 font-condiment text-[36px] normal-case text-neon mix-blend-exclusion sm:text-[48px] md:text-[58px] lg:-right-8 lg:text-[68px]">
                R&amp;D
              </span>
            </div>
            <p className="max-w-[266px] font-mono text-[14px] uppercase leading-relaxed text-cream sm:text-[16px]">
              {ABOUT_PARAGRAPH}
            </p>
          </div>

          {/* Bottom row — decorative faint paragraphs */}
          <div className="mt-24 flex items-start justify-between gap-10 sm:mt-40 lg:mt-64">
            <div className="space-y-6">
              <p className="max-w-[266px] font-mono text-[14px] uppercase leading-relaxed text-[#010828] opacity-10 sm:text-[16px] lg:text-cream">
                {ABOUT_PARAGRAPH}
              </p>
              <p className="max-w-[266px] font-mono text-[14px] uppercase leading-relaxed text-[#010828] opacity-10 sm:text-[16px] lg:text-cream">
                {ABOUT_PARAGRAPH}
              </p>
            </div>
            <div className="hidden space-y-6 lg:block">
              <p className="max-w-[266px] font-mono text-[14px] uppercase leading-relaxed text-cream opacity-10 sm:text-[16px]">
                {ABOUT_PARAGRAPH}
              </p>
              <p className="max-w-[266px] font-mono text-[14px] uppercase leading-relaxed text-cream opacity-10 sm:text-[16px]">
                {ABOUT_PARAGRAPH}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: PROJECT GRID ================= */}
      <section className="relative bg-[#010828]">
        <div className="mx-auto max-w-[1831px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          {/* Header row */}
          <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-grotesk text-[32px] uppercase leading-[1.05] text-cream sm:text-[44px] md:text-[52px] lg:text-[60px]">
              Projects from
              <br />
              <span className="ml-12 md:ml-24 lg:ml-32">
                <span className="font-condiment normal-case text-neon">the</span>{" "}
                <span className="font-grotesk">lab</span>
              </span>
            </h2>

            {/* SEE ALL PROJECTS button */}
            <a href="#" className="group inline-block no-underline">
              <div className="flex items-end gap-3">
                <span className="font-grotesk text-[32px] uppercase leading-none text-cream sm:text-[44px] md:text-[52px] lg:text-[60px]">
                  See
                </span>
                <span className="flex flex-col font-grotesk text-[20px] uppercase leading-tight text-cream sm:text-[26px] md:text-[32px] lg:text-[36px]">
                  <span>All</span>
                  <span>Projects</span>
                </span>
              </div>
              <div className="mt-2 h-[6px] w-full bg-neon transition-all group-hover:opacity-80 lg:h-[10px]" />
            </a>
          </div>

          {/* Card grid */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NFT_CARDS.map((card, i) => (
              <div
                key={i}
                className="liquid-glass rounded-[32px] p-[18px] transition-colors hover:bg-white/10"
              >
                <div className="relative w-full overflow-hidden rounded-[24px] pb-[100%]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  {/* Overlay bar */}
                  <div className="liquid-glass absolute inset-x-4 bottom-4 flex items-center justify-between rounded-[20px] px-5 py-4">
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase text-cream/70">
                        Readiness · {card.name}
                      </span>
                      <span className="text-[16px] text-cream">{card.score}</span>
                    </div>
                    <button
                      type="button"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] text-white shadow-lg shadow-purple-500/50 transition-transform hover:scale-110"
                      aria-label="View project"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: CTA ================= */}
      <section className="relative bg-[#010828]">
        <video
          className="block h-auto w-full"
          src={CTA_VIDEO}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Text block */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="relative w-full text-right lg:pl-[15%] lg:pr-[20%]">
            <div className="relative inline-block px-4 sm:px-6 lg:px-0">
              <span className="pointer-events-none absolute -top-4 left-0 font-condiment text-[17px] normal-case text-neon mix-blend-exclusion sm:-top-8 sm:text-[32px] md:text-[48px] lg:-top-14 lg:text-[68px]">
                Go beyond
              </span>
              <h2 className="font-grotesk text-[16px] uppercase leading-[1.1] text-cream sm:text-[28px] md:text-[44px] lg:text-[60px]">
                <span className="mb-4 block sm:mb-8 lg:mb-12">Join us.</span>
                Prototype the unknown.
                <br />
                Define what&apos;s next.
                <br />
                Build the future.
              </h2>
            </div>
          </div>
        </div>

        {/* Social icons — bottom-left */}
        <div className="absolute bottom-[12%] left-[8%] z-10 sm:bottom-[16%] lg:bottom-[20%]">
          <div className="liquid-glass flex flex-col overflow-hidden rounded-[0.5rem] sm:rounded-[0.875rem] lg:rounded-[1.25rem]">
            {RND_SOCIAL_LINKS.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`flex w-[14vw] items-center justify-center py-4 text-cream transition-colors hover:bg-white/10 sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] ${
                    i < RND_SOCIAL_LINKS.length - 1 ? "border-b border-white/10" : ""
                  }`}
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
