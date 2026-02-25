import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About FluvoSoft - Venture Catalysts Studio | Our Story, Mission & Values",
  description:
    "About FluvoSoft venture catalysts studio. Our story, mission, vision, and values. Building smart, safe, and reliable software. 50+ projects, 95% client retention. Dhaka, Bangladesh.",
  keywords: [
    "About FluvoSoft",
    "FluvoSoft story",
    "technology company",
    "software company Dhaka",
    "mission vision values",
  ],
  openGraph: {
    title: "About FluvoSoft - Venture Catalysts Studio",
    description:
      "Our story, mission, vision, and values. Building smart, safe, and reliable software that helps businesses everywhere.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

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

const technologies = [
  "Next.js 15",
  "React 19",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Firebase",
  "Solidity",
  "Web3.js",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        {/* Hero */}
        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-container text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              About FluvoSoft
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-accent lg:text-xl">
              Building smart, safe, and reliable software that helps businesses everywhere
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Our Story</h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-accent md:text-lg">
              We started as a small team who love technology. Today, we work with over 50 companies around the world. We build AI tools, blockchain apps, and custom software. Our focus on doing great work and helping clients succeed makes us a trusted choice for businesses looking for technology solutions.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-accent md:text-lg">
              From startups to enterprise companies, we&apos;ve helped businesses transform their operations with innovative technology solutions. Our commitment to excellence and client success drives everything we do.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold text-foreground md:text-2xl">Our Mission</h2>
                <p className="mt-4 text-base leading-relaxed text-accent">
                  To build smart, safe, and reliable software that helps businesses everywhere. We make new technology easy to use and affordable for companies big and small.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground md:text-2xl">Our Vision</h2>
                <p className="mt-4 text-base leading-relaxed text-accent">
                  To be a world leader in helping businesses use technology better. We want to set the standard for great ideas and reliable work. We see a future where every business can use technology to grow and succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Our Values</h2>
            <p className="mt-2 text-accent">The principles that guide everything we do</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-white/10 bg-dashboard-card p-6 transition hover:border-white/20"
                >
                  <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-accent">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Our Impact</h2>
            <p className="mt-2 text-accent">Numbers that reflect our commitment to excellence</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impact.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-dashboard-card p-6 text-center transition hover:border-cta/30"
                >
                  <p className="text-3xl font-bold text-cta md:text-4xl">{item.value}</p>
                  <p className="mt-2 font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-sm text-accent">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Expertise */}
        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Our Technology Expertise
            </h2>
            <p className="mt-2 text-accent">
              We work with cutting-edge technologies to deliver the best solutions for our clients
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container text-center">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready to Work Together?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-accent">
              Let&apos;s discuss how we can help transform your business with innovative technology solutions.
            </p>
            <Link
              href="/#book-a-demo"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-cta px-8 py-3.5 text-sm font-medium text-white no-underline transition hover:bg-cta/90"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
