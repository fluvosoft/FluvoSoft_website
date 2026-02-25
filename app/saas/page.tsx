import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SaaS Platform Development | Cloud-Based Software Solutions",
  description:
    "FluvoSoft SaaS development: scalable cloud platforms, subscription management, multi-tenant architecture. Build and scale your SaaS product. Get started.",
  keywords: [
    "SaaS development",
    "SaaS platform",
    "cloud software",
    "subscription management",
    "FluvoSoft SaaS",
  ],
  openGraph: {
    title: "SaaS Products | FluvoSoft",
    description:
      "Scalable software-as-a-service solutions that grow with your business. Cloud-based platforms with subscription management, analytics, and seamless integrations.",
    url: "/saas",
  },
  alternates: {
    canonical: "/saas",
  },
};

const processSteps = [
  { num: "01", title: "Strategy & Planning", desc: "We analyze your business model, define pricing strategies, and plan the SaaS architecture. We identify key features, user flows, and technical requirements." },
  { num: "02", title: "Architecture Design", desc: "Our team designs a scalable, multi-tenant SaaS architecture with subscription management, billing systems, and integration capabilities." },
  { num: "03", title: "Development & Integration", desc: "We build your SaaS platform with payment processing, user management, analytics, and third-party integrations. Agile development ensures rapid iteration." },
  { num: "04", title: "Testing & Launch", desc: "Comprehensive testing including load testing, security audits, and user acceptance testing. We deploy to production with monitoring and support." },
  { num: "05", title: "Growth & Optimization", desc: "Ongoing monitoring, performance optimization, feature development, and scaling to support your growing user base and business needs." },
];

const technologies = [
  { name: "Cloud Infrastructure", desc: "AWS, Azure, and GCP for scalable, reliable cloud-based SaaS platforms with global reach and high availability" },
  { name: "Subscription Management", desc: "Robust billing and subscription systems with payment processing, plan management, and automated renewals" },
  { name: "Multi-tenancy Architecture", desc: "Secure, scalable multi-tenant architecture that efficiently serves multiple customers from a single platform" },
  { name: "API & Integrations", desc: "Comprehensive APIs and third-party integrations to connect with popular tools and services" },
  { name: "Analytics & Reporting", desc: "Advanced analytics dashboards and reporting tools to track usage, performance, and business metrics" },
  { name: "Security & Compliance", desc: "Enterprise-grade security with SSL/TLS, 2FA, GDPR compliance, and regular security audits" },
];

const services = [
  { title: "SaaS Platform Development", desc: "End-to-end SaaS platform development with subscription management, user management, and scalable architecture.", bullets: ["Subscription Billing", "User Management", "Scalable Infrastructure", "Multi-tenant Architecture"] },
  { title: "SaaS Migration Services", desc: "Migrate your existing application to a SaaS model with cloud infrastructure and subscription management.", bullets: ["Cloud Migration", "Architecture Redesign", "Data Migration", "Zero Downtime"] },
  { title: "SaaS Analytics Platform", desc: "Comprehensive analytics and reporting solutions for SaaS businesses to track metrics and optimize performance.", bullets: ["Usage Analytics", "Revenue Tracking", "User Behavior Insights", "Custom Dashboards"] },
];

export default function SaasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-container">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-12">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">SaaS Products</h1>
                <p className="mt-6 max-w-2xl text-lg text-accent">Scalable software-as-a-service solutions that grow with your business. Cloud-based platforms with subscription management, analytics, and seamless integrations.</p>
                <Link href="/#book-a-demo" className="mt-8 inline-flex rounded-full bg-cta px-6 py-3 text-sm font-medium text-white no-underline transition hover:bg-cta/90">Get Started</Link>
              </div>
              <div className="relative mx-auto min-h-[320px] max-w-md overflow-hidden rounded-xl border border-white/10 bg-dashboard-card lg:mx-0 lg:min-h-[480px] lg:max-w-xl">
                <Image src="/images/SaaS.png" alt="SaaS products" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 28rem" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">How Our Team Works</h2>
            <p className="mt-4 max-w-3xl text-accent">Our SaaS development team specializes in building scalable, cloud-native platforms that deliver exceptional user experiences and drive business growth.</p>
            <h3 className="mt-8 text-xl font-semibold text-foreground">Scalability-First Approach</h3>
            <p className="mt-3 max-w-3xl text-accent">We design SaaS platforms with scalability at the core. Our team builds cloud-native solutions using microservices architecture, ensuring your platform can handle growth from startup to enterprise scale.</p>
            <p className="mt-3 max-w-3xl text-accent">We focus on creating seamless user experiences, robust subscription management, and comprehensive analytics that help you understand and optimize your business performance.</p>
            <ul className="mt-6 list-inside list-disc space-y-2 text-accent">
              <li>Cloud-native architecture designed for scale and reliability</li>
              <li>Agile development with continuous deployment and iteration</li>
              <li>Data-driven insights and analytics to optimize growth</li>
            </ul>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Our SaaS Development Process</h2>
            <p className="mt-2 text-accent">A comprehensive approach to building successful SaaS platforms from concept to launch and beyond</p>
            <div className="mt-10 space-y-8">
              {processSteps.map((step) => (
                <div key={step.num} className="flex gap-6">
                  <span className="text-2xl font-bold text-cta">{step.num}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-accent">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">SaaS Technologies We Use</h2>
            <p className="mt-2 text-accent">We leverage cutting-edge technologies and best practices to build robust, scalable SaaS platforms</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((t) => (
                <div key={t.name} className="rounded-xl border border-white/10 bg-dashboard-card p-6">
                  <h3 className="font-semibold text-foreground">{t.name}</h3>
                  <p className="mt-2 text-sm text-accent">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Our SaaS Services</h2>
            <p className="mt-2 text-accent">Comprehensive SaaS development and management services to help you build and scale your platform</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((p) => (
                <div key={p.title} className="rounded-xl border border-white/10 bg-dashboard-card p-6">
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
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
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Ready to Build Your SaaS Platform?</h2>
            <p className="mt-4 text-accent">Let&apos;s discuss how we can help you build a scalable, successful SaaS platform that grows with your business and delights your users.</p>
            <Link href="/#book-a-demo" className="mt-8 inline-flex rounded-full bg-cta px-8 py-3.5 text-sm font-medium text-white no-underline transition hover:bg-cta/90">Get Started</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
