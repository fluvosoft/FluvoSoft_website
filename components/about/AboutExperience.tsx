"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const values = [
  {
    title: "Innovation First",
    description:
      "We keep up with the latest technology and always look for new ways to build better solutions.",
  },
  {
    title: "Client Success",
    description:
      "When you succeed, we succeed. We know we did a good job when our clients are happy and growing.",
  },
  {
    title: "Excellence",
    description:
      "We do our best work every time. From writing clean code to talking with clients, we keep our standards high.",
  },
  {
    title: "Security & Trust",
    description:
      "We keep your data safe and build trust by being honest about how we work and building reliable software.",
  },
];

const impact = [
  { value: "50+", label: "Projects Delivered", sub: "Successfully completed projects" },
  { value: "95%", label: "Client Retention", sub: "Long-term partnerships" },
  { value: "10+", label: "Years Experience", sub: "Industry expertise" },
  { value: "25+", label: "Team Members", sub: "Expert professionals" },
];

const leadership = [
  {
    name: "Md Sifat Bin Jibon",
    role: "Chief Executive Officer",
    title: "CEO",
    image: "/images/team/md-sifat-bin-jibon.png",
    imageAlt: "Md Sifat Bin Jibon, CEO of FluvoSoft",
    bio: "Co-founder of FluvoSoft. Blockchain developer at R3, with experience across SaaS, Web3, and custom software. Based in Dhaka.",
  },
  {
    name: "Shouvick Monzur",
    role: "Chief Technology Officer",
    title: "CTO",
    image: "/images/team/shouvick-monzur.png",
    imageAlt: "Shouvick Monzur, CTO of FluvoSoft",
    bio: "Lead software engineer with 10+ years building backends, cloud systems, and SaaS platforms. Leads FluvoSoft's technical direction.",
  },
  {
    name: "Sifat ALI",
    role: "Chief Operating Officer",
    title: "COO",
    image: "/images/team/sifat-ali.png",
    imageAlt: "Sifat ALI, COO of FluvoSoft",
    bio: "2× national hackathon winner and full-stack engineer. Runs day-to-day operations and keeps projects moving from build to delivery.",
  },
];

const advisors = [
  {
    name: "Sahid Hossain Ratul",
    role: "Business Advisor",
    title: "Advisor",
    image: "/images/team/sahid-hossain-ratul.png",
    imageAlt: "Sahid Hossain Ratul, Business Advisor at FluvoSoft",
    bio: "Advises FluvoSoft on business strategy and growth.",
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
  "Solidity",
  "Web3.js",
  "Ethers.js",
  "Ethereum",
  "Solana",
  "Hyperledger",
  "Corda",
  "Rust",
  "Truffle",
  "Hardhat",
  "IPFS",
  "MetaMask",
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
              Building smart, safe, and reliable software that helps businesses everywhere
            </p>
          </div>
          <div className="border-t-4 border-black bg-swiss-muted p-8 lg:border-t-0 lg:p-10">
            <BauhausComposition />
            <div className="swiss-diagonal space-y-4 lg:hidden">
              <div className="h-16 w-16 border-4 border-black bg-swiss-accent" />
              <div className="h-3 w-full bg-black" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                Venture catalysts studio
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
              We started as a small team who love technology. Today, we work with over 50 companies
              around the world. We build AI tools, blockchain apps, and custom software. Our focus
              on doing great work and helping clients succeed makes us a trusted choice for
              businesses looking for technology solutions.
            </p>
            <p className="max-w-2xl text-left text-base font-medium leading-relaxed text-black/75 sm:text-lg">
              From startups to enterprise companies, we&apos;ve helped businesses transform their
              operations with innovative technology solutions. Our commitment to excellence and
              client success drives everything we do.
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
              To build smart, safe, and reliable software that helps businesses everywhere. We make
              new technology easy to use and affordable for companies big and small.
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
              To be a world leader in helping businesses use technology better. We want to set the
              standard for great ideas and reliable work. We see a future where every business can
              use technology to grow and succeed.
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
              Numbers that reflect our commitment to excellence
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
              Meet the visionaries leading FluvoSoft forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
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
                    sizes="(max-width: 768px) 100vw, 33vw"
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

      {/* 07 Advisor */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[5fr_7fr]">
          <div className="swiss-diagonal border-b-4 border-black bg-swiss-muted px-6 py-12 sm:px-10 lg:border-b-0 lg:border-r-4 lg:px-12 lg:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
              07. Advisors
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tighter sm:text-4xl">
              Advisor panel
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-black/55">
              Experienced advisors supporting our strategic direction
            </p>
          </div>
          <div className="grid">
            {advisors.map((advisor) => (
              <article
                key={advisor.name}
                className="group grid border-black bg-white sm:grid-cols-[240px_1fr]"
              >
                <div className="relative aspect-square w-full overflow-hidden border-b-2 border-black bg-swiss-muted sm:aspect-auto sm:min-h-[280px] sm:border-b-0 sm:border-r-2">
                  <Image
                    src={advisor.image}
                    alt={advisor.imageAlt}
                    fill
                    sizes="240px"
                    className="object-cover object-top grayscale transition duration-150 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 transition-colors duration-150 group-hover:bg-cta group-hover:text-white sm:p-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-swiss-accent group-hover:text-white">
                    {advisor.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-black uppercase tracking-tight">{advisor.name}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-black/50 group-hover:text-white/80">
                    {advisor.role}
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-black/65 group-hover:text-white/90">
                    {advisor.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 08 Technology */}
      <section className="relative z-10 border-b-4 border-black">
        <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
            08. Stack
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
            Our technology expertise
          </h2>
          <p className="mt-2 max-w-2xl text-sm font-medium uppercase tracking-wide text-black/55">
            We work with cutting-edge technologies to deliver the best solutions for our clients
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

      {/* 09 CTA */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[5fr_7fr]">
          <div className="swiss-diagonal border-b-4 border-black bg-swiss-muted px-6 py-14 sm:px-10 lg:border-b-0 lg:border-r-4 lg:px-12 lg:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-swiss-accent sm:text-sm">
              09. Contact
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tighter sm:text-4xl">
              Ready to work together?
            </h2>
          </div>
          <div className="swiss-grid-pattern px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
            <p className="max-w-xl text-left text-sm font-medium leading-relaxed text-black/70 sm:text-base">
              Let&apos;s discuss how we can help transform your business with innovative technology
              solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row">
              <Link
                href="/#book-a-demo"
                className="inline-flex h-14 items-center justify-center gap-2 border-2 border-black bg-black px-8 text-sm font-bold uppercase tracking-widest text-white no-underline transition-colors duration-150 hover:border-cta hover:bg-cta sm:h-16"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center border-2 border-t-0 border-black bg-white px-8 text-sm font-bold uppercase tracking-widest text-black no-underline transition-colors duration-150 hover:border-cta hover:bg-cta hover:text-white sm:h-16 sm:border-l-0 sm:border-t-2"
              >
                Contact page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
