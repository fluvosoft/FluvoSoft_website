import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blockchain Development Services | Smart Contracts & Decentralized Solutions",
  description:
    "FluvoSoft blockchain development: secure, transparent, decentralized solutions. Smart contracts, Ethereum, Solana, Hyperledger, Corda. Enterprise blockchain. Get started.",
  keywords: [
    "blockchain development",
    "smart contracts",
    "Ethereum",
    "Solana",
    "decentralized solutions",
    "FluvoSoft blockchain",
  ],
  openGraph: {
    title: "Blockchain Development | FluvoSoft",
    description:
      "Building secure, transparent, and decentralized solutions that transform how businesses operate and trust is established.",
    url: "/blockchain",
  },
  alternates: {
    canonical: "/blockchain",
  },
};

const processSteps = [
  { num: "01", title: "Discovery & Planning", desc: "We analyze your requirements, identify use cases, and design the optimal blockchain architecture for your needs." },
  { num: "02", title: "Architecture Design", desc: "Our team designs a scalable, secure blockchain solution tailored to your business requirements and compliance needs." },
  { num: "03", title: "Development & Testing", desc: "We develop smart contracts and dApps using best practices, followed by comprehensive testing and security audits." },
  { num: "04", title: "Deployment & Integration", desc: "We deploy your blockchain solution and integrate it with existing systems, ensuring seamless operation." },
  { num: "05", title: "Maintenance & Support", desc: "Ongoing support, monitoring, and updates to keep your blockchain solution secure and optimized." },
];

const technologies = [
  { name: "Ethereum", desc: "Smart contract development on the world's most popular blockchain platform" },
  { name: "Solana", desc: "High-performance blockchain for scalable decentralized applications" },
  { name: "Hyperledger", desc: "Enterprise-grade blockchain frameworks for business applications" },
  { name: "Corda", desc: "Distributed ledger technology for regulated financial markets" },
  { name: "Solidity", desc: "Smart contract programming language for Ethereum and EVM-compatible chains" },
  { name: "Web3.js", desc: "JavaScript library for interacting with Ethereum blockchain" },
];

const products = [
  { title: "FluvoSoft Solana Toolkit", desc: "Comprehensive development toolkit for building Solana-based applications with pre-built components and utilities.", bullets: ["Smart Contract Templates", "Wallet Integration", "Transaction Management", "Testing Framework"] },
  { title: "Corda Enterprise Solutions", desc: "Enterprise blockchain solutions built on Corda for regulated industries and financial institutions.", bullets: ["Regulatory Compliance", "Privacy Features", "Scalable Architecture", "Enterprise Support"] },
  { title: "Custom Smart Contracts", desc: "Tailored smart contract development for DeFi, NFTs, DAOs, and other blockchain applications.", bullets: ["Custom Logic", "Security Audits", "Gas Optimization", "Multi-chain Support"] },
];

export default function BlockchainPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-container">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-12">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">Blockchain Development</h1>
                <p className="mt-6 max-w-2xl text-lg text-accent">Building secure, transparent, and decentralized solutions that transform how businesses operate and trust is established.</p>
                <Link href="/#book-a-demo" className="mt-8 inline-flex rounded-full bg-cta px-6 py-3 text-sm font-medium text-white no-underline transition hover:bg-cta/90">Get Started</Link>
              </div>
              <div className="relative mx-auto min-h-[320px] max-w-md overflow-hidden rounded-xl border border-white/10 bg-dashboard-card lg:mx-0 lg:min-h-[480px] lg:max-w-xl">
                <Image src="/images/Blockchain.png" alt="Blockchain development" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 28rem" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">How Our Team Works</h2>
            <p className="mt-4 max-w-3xl text-accent">Our blockchain development team combines deep technical expertise with business acumen to deliver solutions that drive real value.</p>
            <h3 className="mt-8 text-xl font-medium text-foreground">Collaborative Approach</h3>
            <p className="mt-3 max-w-3xl text-accent">Our blockchain team works closely with your business stakeholders to understand your unique challenges and opportunities. We believe in transparent communication and iterative development, ensuring you&apos;re involved at every stage of the process.</p>
            <p className="mt-3 max-w-3xl text-accent">We combine agile methodologies with blockchain best practices, allowing us to adapt quickly to changing requirements while maintaining the highest standards of security and quality.</p>
            <ul className="mt-6 list-inside list-disc space-y-2 text-accent">
              <li>Cross-functional teams with blockchain, security, and business expertise</li>
              <li>Regular sprints and demos to keep you informed</li>
              <li>Security-first mindset with regular audits and reviews</li>
            </ul>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">Our Development Process</h2>
            <p className="mt-2 text-accent">A proven methodology that ensures secure, scalable, and successful blockchain implementations</p>
            <div className="mt-10 space-y-8">
              {processSteps.map((step) => (
                <div key={step.num} className="flex gap-6">
                  <span className="text-2xl font-semibold text-cta">{step.num}</span>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                    <p className="mt-2 text-accent">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">Blockchain Technologies We Use</h2>
            <p className="mt-2 text-accent">We work with leading blockchain platforms and tools to build the right solution for your needs</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((t) => (
                <div key={t.name} className="rounded-xl border border-white/10 bg-dashboard-card p-6">
                  <h3 className="font-medium text-foreground">{t.name}</h3>
                  <p className="mt-2 text-sm text-accent">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">Our Blockchain Products</h2>
            <p className="mt-2 text-accent">Explore our suite of blockchain solutions designed to solve real-world business challenges</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {products.map((p) => (
                <div key={p.title} className="rounded-xl border border-white/10 bg-dashboard-card p-6">
                  <h3 className="text-lg font-medium text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm text-accent">{p.desc}</p>
                  <ul className="mt-4 list-inside list-disc text-sm text-accent">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <Link href="/#book-a-demo" className="mt-4 inline-block text-sm font-medium text-cta hover:underline">Learn more</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container text-center">
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">Ready to Build Your Blockchain Solution?</h2>
            <p className="mt-4 text-accent">Let&apos;s discuss how blockchain technology can transform your business operations and create new opportunities for growth.</p>
            <Link href="/#book-a-demo" className="mt-8 inline-flex rounded-full bg-cta px-8 py-3.5 text-sm font-medium text-white no-underline transition hover:bg-cta/90">Get Started</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
