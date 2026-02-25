import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Custom Software Development | Enterprise Applications & Web Solutions",
  description:
    "FluvoSoft custom development: tailored web and enterprise applications. Next.js, React, Node.js. From MVPs to large-scale solutions. 4-8 weeks to 6+ months.",
  keywords: [
    "custom software development",
    "enterprise applications",
    "web development",
    "FluvoSoft custom development",
  ],
  openGraph: {
    title: "Custom Development | FluvoSoft",
    description:
      "Tailored applications built specifically for your needs. From web apps to enterprise solutions, we deliver software that scales with your business.",
    url: "/custom-development",
  },
  alternates: {
    canonical: "/custom-development",
  },
};

const processSteps = [
  { num: "01", title: "Discovery & Requirements", desc: "We conduct in-depth discussions to understand your business needs, goals, and technical requirements. We analyze your current systems and identify opportunities for improvement." },
  { num: "02", title: "Architecture & Design", desc: "Our team designs a scalable architecture and creates detailed specifications. We select the optimal technology stack and define the development approach." },
  { num: "03", title: "Development & Testing", desc: "We build your custom solution using agile methodologies, with regular demos and feedback cycles. Comprehensive testing ensures quality and reliability." },
  { num: "04", title: "Deployment & Integration", desc: "We deploy your solution to production, integrate with existing systems, and ensure smooth operation. Comprehensive documentation and training are provided." },
  { num: "05", title: "Support & Maintenance", desc: "Ongoing support, monitoring, and updates to keep your solution running smoothly. We offer 3 months complimentary support with extended packages available." },
];

const technologies = [
  { name: "Next.js & React", desc: "Modern React framework for building scalable, high-performance web applications with server-side rendering" },
  { name: "Node.js", desc: "Server-side JavaScript runtime for building fast, scalable backend services and APIs" },
  { name: "Cloud Infrastructure", desc: "AWS, Azure, and GCP for scalable, reliable cloud-based solutions with global reach" },
  { name: "Databases", desc: "MongoDB, PostgreSQL, and other databases tailored to your data requirements and scale" },
  { name: "Microservices Architecture", desc: "Scalable, maintainable applications built with microservices for flexibility and growth" },
  { name: "TypeScript", desc: "Type-safe development for robust, maintainable code with better developer experience" },
];

const services = [
  { title: "Enterprise Applications", desc: "Custom enterprise software solutions designed to streamline operations, improve efficiency, and drive business growth.", bullets: ["Custom Workflows", "Integration Capabilities", "Scalable Architecture", "Enterprise Security"] },
  { title: "Web Applications", desc: "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.", bullets: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"] },
  { title: "Legacy System Modernization", desc: "Transform outdated systems into modern, efficient solutions with improved performance and maintainability.", bullets: ["System Audits", "Migration Services", "Performance Improvements", "Feature Development"] },
];

const timelines = [
  { label: "Small Projects", duration: "4-8 weeks", desc: "Ideal for MVPs, prototypes, and focused feature development" },
  { label: "Medium Projects", duration: "8-16 weeks", desc: "Perfect for web applications, integrations, and mid-scale solutions" },
  { label: "Large Projects", duration: "3-6+ months", desc: "Comprehensive enterprise solutions with complex requirements" },
];

export default function CustomDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-container">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-12">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">Custom Development</h1>
                <p className="mt-6 max-w-2xl text-lg text-accent">Tailored applications built specifically for your needs. From web apps to enterprise solutions, we deliver software that scales with your business.</p>
                <Link href="/#book-a-demo" className="mt-8 inline-flex rounded-full bg-cta px-6 py-3 text-sm font-medium text-white no-underline transition hover:bg-cta/90">Get Started</Link>
              </div>
              <div className="relative mx-auto min-h-[320px] max-w-md overflow-hidden rounded-xl border border-white/10 bg-dashboard-card lg:mx-0 lg:min-h-[480px] lg:max-w-xl">
                <Image src="/images/custom%20development.png" alt="Custom development" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 28rem" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">How Our Team Works</h2>
            <p className="mt-4 max-w-3xl text-accent">Our development team combines technical excellence with business understanding to deliver custom solutions that perfectly fit your needs.</p>
            <h3 className="mt-8 text-xl font-semibold text-foreground">Client-Centric Development</h3>
            <p className="mt-3 max-w-3xl text-accent">We believe in close collaboration with our clients throughout the development process. Our team works as an extension of yours, ensuring that every feature and functionality aligns with your business objectives and user needs.</p>
            <p className="mt-3 max-w-3xl text-accent">We use agile methodologies with regular sprints, demos, and feedback cycles. This iterative approach ensures you&apos;re always in the loop and can make adjustments as we build, resulting in a solution that truly fits your requirements.</p>
            <ul className="mt-6 list-inside list-disc space-y-2 text-accent">
              <li>Agile development with regular sprints and demos</li>
              <li>Transparent communication and collaborative decision-making</li>
              <li>Flexible engagement models for startups to enterprises</li>
            </ul>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Our Development Process</h2>
            <p className="mt-2 text-accent">A proven methodology that ensures successful delivery of custom software solutions from concept to deployment</p>
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
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Technologies We Use</h2>
            <p className="mt-2 text-accent">We leverage modern, proven technologies to build scalable, maintainable, and high-performance custom solutions</p>
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
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Our Custom Development Services</h2>
            <p className="mt-2 text-accent">Comprehensive custom software solutions tailored to your specific business needs and requirements</p>
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
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Project Timelines</h2>
            <p className="mt-2 text-accent">We provide flexible timelines based on project complexity and requirements</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {timelines.map((t) => (
                <div key={t.label} className="rounded-xl border border-white/10 bg-dashboard-card p-6 text-center">
                  <p className="text-2xl font-bold text-cta">{t.duration}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{t.label}</h3>
                  <p className="mt-2 text-sm text-accent">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container text-center">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Ready to Build Your Custom Solution?</h2>
            <p className="mt-4 text-accent">Let&apos;s discuss your project requirements and create a custom software solution that perfectly fits your business needs.</p>
            <Link href="/#book-a-demo" className="mt-8 inline-flex rounded-full bg-cta px-8 py-3.5 text-sm font-medium text-white no-underline transition hover:bg-cta/90">Get Started</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
