"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const values = [
  {
    title: "One job, done well",
    description:
      "Every product solves one clear problem. We would rather ship a small tool that works than a big one that doesn't.",
  },
  {
    title: "Users first",
    description:
      "We build for the people who download our apps. Reviews and feedback emails decide what we fix and build next.",
  },
  {
    title: "Ship, then improve",
    description:
      "We launch early, listen closely and keep updating. A product is never finished while people are still using it.",
  },
  {
    title: "Private by default",
    description:
      "No forced sign-ups and no selling data. Wherever we can, your files and notes stay on your own device.",
  },
];

const impact = [
  { value: "7,000+", label: "Web app users", sub: "On TeenyPDF and Easy Invoice web" },
  { value: "500+", label: "App downloads", sub: "On Google Play" },
  { value: "6", label: "Products shipped", sub: "Built and run in-house" },
  { value: "2", label: "Platforms", sub: "Web and Android" },
];

const leadership = [
  {
    name: "Md Sifat Bin Jibon",
    role: "Chief Executive Officer",
    title: "CEO",
    image: "/images/team/md-sifat-bin-jibon.webp",
    imageAlt: "Md Sifat Bin Jibon, CEO of FluvoSoft",
    bio: "Co-founder of FluvoSoft. Leads product and strategy across the studio. Previously a blockchain developer at R3, with experience across SaaS and mobile apps. Based in Dhaka.",
  },
  {
    name: "Shouvick Monzur",
    role: "Chief Technology Officer",
    title: "CTO",
    image: "/images/team/shouvick-monzur.webp",
    imageAlt: "Shouvick Monzur, CTO of FluvoSoft",
    bio: "Lead software engineer with 10+ years building backends, cloud systems, and SaaS platforms. Leads engineering across FluvoSoft's apps.",
  },
];

const technologies = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Vue.js",
  "Angular",
  "Flutter",
  "React Native",
  "Swift",
  "Kotlin",
  "Node.js",
  "Go",
  "Python",
  "Java",
  "Express.js",
  "GraphQL",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Rust",
  "AWS",
  "Firebase",
  "Docker",
  "Kubernetes",
  "Azure",
  "Google Cloud",
  "Terraform",
  "CI/CD",
  "Git",
  "GitHub Actions",
  "Jenkins",
  "Linux",
];

function BauhausComposition() {
  return (
    <div className="relative hidden h-full min-h-[280px] w-full swiss-grid-pattern lg:block" aria-hidden>
      <div className="absolute left-[10%] top-[14%] h-28 w-28 border-4 border-black bg-white" />
      <div className="absolute right-[16%] top-[20%] h-20 w-20 rounded-full border-4 border-swiss-accent shadow-[0_0_0_8px_rgba(255,48,0,0.1)]" />
      <div className="absolute bottom-[20%] left-[18%] h-4 w-44 bg-black" />
      <div className="absolute bottom-[28%] right-[10%] h-36 w-16 border-4 border-black bg-swiss-accent" />
      <div className="absolute left-[48%] top-[46%] h-14 w-14 border-4 border-black bg-swiss-muted" />
    </div>
  );
}

export default function AboutExperience() {
  return (
    <div className="about-swiss relative font-inter text-swiss-fg">
      <div className="swiss-noise absolute inset-0 z-0" aria-hidden />

      {/* 01 Hero */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[8fr_4fr]">
          <div className="swiss-dots border-black px-6 py-16 sm:px-10 sm:py-20 lg:border-r-4 lg:px-12 lg:py-24">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
              01. Studio
            </p>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.85] tracking-tighter text-swiss-fg sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              About
              <br />
              FluvoSoft
            </h1>
            <p className="mt-8 max-w-xl text-left text-base font-medium leading-relaxed text-black/70 sm:text-lg">
              A venture studio that builds and ships its own apps and automation tools, simple products that take busywork off people's plates.
            </p>
          </div>
          <div className="border-t-4 border-black bg-swiss-muted p-8 lg:border-t-0 lg:p-10">
            <BauhausComposition />
            <div className="swiss-diagonal space-y-4 lg:hidden">
              <div className="h-16 w-16 border-4 border-black bg-swiss-accent" />
              <div className="h-3 w-full bg-black" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                Apps &amp; automation venture studio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Story — asymmetric */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[5fr_7fr]">
          <div className="swiss-diagonal border-b-4 border-black bg-swiss-muted px-6 py-12 sm:px-10 lg:border-b-0 lg:border-r-4 lg:px-12 lg:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
              02. Story
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
              Our story
            </h2>
          </div>
          <div className="swiss-grid-pattern space-y-6 px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
            <p className="max-w-2xl text-left text-base font-medium leading-relaxed text-black/75 sm:text-lg">
              FluvoSoft started in Dhaka as a small team of engineers who had spent years shipping
              software for other companies. We wanted to build our own products, so we turned the
              studio into a place where we design, launch and run our own apps.
            </p>
            <p className="max-w-2xl text-left text-base font-medium leading-relaxed text-black/75 sm:text-lg">
              Today we run six products, including TeenyPDF, OneThing and Easy Invoice. Together they
              have been downloaded 500+ times on Google Play, and more than 7,000 people use our web
              apps. Every product is built, launched and maintained by our own team.
            </p>
          </div>
        </div>
      </section>

      {/* 03 Mission / Vision */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
          <div className="border-b-4 border-black bg-white p-8 sm:p-10 md:border-b-0 md:border-r-4 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent">
              03. Mission
            </p>
            <h2 className="mt-4 text-2xl font-black uppercase tracking-tighter sm:text-3xl md:text-4xl">
              Our mission
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black/70 sm:text-lg">
              To build simple, focused apps and automation tools that take busywork off people&apos;s
              plates, so they can spend their time on work that matters.
            </p>
          </div>
          <div className="swiss-dots bg-swiss-muted p-8 sm:p-10 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent">
              03. Vision
            </p>
            <h2 className="mt-4 text-2xl font-black uppercase tracking-tighter sm:text-3xl md:text-4xl">
              Our vision
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black/70 sm:text-lg">
              A growing family of small, trusted products, each one doing a single job really well,
              used by people and small businesses around the world.
            </p>
          </div>
        </div>
      </section>

      {/* 04 Values — 4-col grid */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-b-2 border-black px-6 py-8 sm:px-10 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
              04. Values
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
              Our values
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-black/55">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, index) => (
              <div
                key={v.title}
                className={`group min-h-[220px] border-black bg-white p-8 transition-colors duration-150 hover:bg-cta hover:text-white sm:p-10 ${
                  index < 2 ? "border-b-2" : "border-b-2 sm:border-b-2 lg:border-b-0"
                } ${index % 2 === 0 ? "sm:border-r-2" : ""} ${
                  index < 3 ? "lg:border-r-2" : "lg:border-r-0"
                } ${index >= 2 ? "sm:border-b-0 lg:border-b-0" : ""}`}
              >
                <span className="text-4xl font-black tracking-tighter text-black/10 group-hover:text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-black uppercase tracking-tight">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60 group-hover:text-white/90">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Impact stats */}
      <section className="relative z-10 border-b-4 border-black bg-black text-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-b-2 border-white px-6 py-8 sm:px-10 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cta sm:text-sm">
              05. Impact
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
              Our impact
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/55">
              Real people using our products
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {impact.map((item, index) => (
              <div
                key={item.label}
                className={`border-white p-8 sm:p-10 ${index % 2 === 0 ? "border-r-2" : ""} ${
                  index < 2 ? "border-b-2 lg:border-b-0" : ""
                } ${index < 3 ? "lg:border-r-2" : "lg:border-r-0"}`}
              >
                <p className="text-4xl font-black tracking-tighter text-cta sm:text-5xl md:text-6xl">
                  {item.value}
                </p>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.15em]">{item.label}</p>
                <p className="mt-2 text-xs font-medium text-white/50">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Leadership */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="swiss-dots border-b-2 border-black px-6 py-8 sm:px-10 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
              06. Leadership
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
              Leadership team
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-black/55">
              The people building FluvoSoft&apos;s products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {leadership.map((leader, index) => (
              <article
                key={leader.title}
                className={`group flex flex-col border-black bg-white transition-colors duration-150 hover:bg-cta hover:text-white ${
                  index < leadership.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2" : ""
                }`}
              >
                <div className="relative aspect-square w-full overflow-hidden border-b-2 border-black bg-swiss-muted">
                  <Image
                    src={leader.image}
                    alt={leader.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top grayscale transition duration-150 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-swiss-accent group-hover:text-white">
                    {leader.title}
                  </p>
                  <h3 className="mt-2 text-xl font-black uppercase tracking-tight">{leader.name}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-black/50 group-hover:text-white/80">
                    {leader.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-black/65 group-hover:text-white/90">
                    {leader.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Technology */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
            07. Stack
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
            What we build with
          </h2>
          <p className="mt-2 max-w-2xl text-sm font-medium uppercase tracking-wide text-black/55">
            The tools behind our web and mobile apps
          </p>
          <div className="mt-10 grid grid-cols-2 border-2 border-black sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className={`flex min-h-[72px] items-center border-black px-3 py-4 text-xs font-bold uppercase tracking-wide transition-colors duration-150 hover:bg-cta hover:text-white sm:px-4 sm:text-sm ${
                  (index + 1) % 2 !== 0 ? "border-r-2" : ""
                } ${(index + 1) % 3 !== 0 ? "sm:border-r-2" : "sm:border-r-0"} ${
                  (index + 1) % 4 !== 0 ? "md:border-r-2" : "md:border-r-0"
                } ${(index + 1) % 6 !== 0 ? "lg:border-r-2" : "lg:border-r-0"} ${
                  index < technologies.length - (technologies.length % 6 || 6)
                    ? "border-b-2"
                    : "border-b-2 last:border-b-2"
                }`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 CTA */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[5fr_7fr]">
          <div className="swiss-diagonal border-b-4 border-black bg-swiss-muted px-6 py-14 sm:px-10 lg:border-b-0 lg:border-r-4 lg:px-12 lg:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
              08. Contact
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tighter sm:text-4xl">
              Try what we build
            </h2>
          </div>
          <div className="swiss-grid-pattern px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
            <p className="max-w-xl text-left text-sm font-medium leading-relaxed text-black/70 sm:text-base">
              Browse our apps, or send us feedback, ideas and partnership requests. We read every
              message.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row">
              <Link
                href="/#showcase-heading"
                className="inline-flex h-14 items-center justify-center gap-2 border-2 border-black bg-black px-8 text-sm font-bold uppercase tracking-widest text-white no-underline transition-colors duration-150 hover:border-cta hover:bg-cta sm:h-16"
              >
                Our products
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center border-2 border-t-0 border-black bg-white px-8 text-sm font-bold uppercase tracking-widest text-black no-underline transition-colors duration-150 hover:border-cta hover:bg-cta hover:text-white sm:h-16 sm:border-l-0 sm:border-t-2"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
