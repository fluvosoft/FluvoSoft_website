import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Automation Solutions | AI Automation & RPA Services",
  description:
    "FluvoSoft automation: intelligent workflow automation, RPA, AI/ML. Streamline processes, reduce manual tasks, boost productivity. Process analysis to deployment.",
  keywords: [
    "automation solutions",
    "AI automation",
    "RPA",
    "workflow automation",
    "FluvoSoft automation",
  ],
  openGraph: {
    title: "Automation Solutions | FluvoSoft",
    description:
      "Streamline workflows with intelligent automation that learns and adapts to your business processes. Reduce manual tasks and boost productivity.",
    url: "/automation",
  },
  alternates: {
    canonical: "/automation",
  },
};

const processSteps = [
  { num: "01", title: "Process Analysis", desc: "We analyze your current workflows, identify automation opportunities, and map out processes that can be optimized through automation." },
  { num: "02", title: "Solution Design", desc: "Our team designs a customized automation solution that aligns with your business goals, integrates with existing systems, and scales with your growth." },
  { num: "03", title: "Development & Testing", desc: "We build and configure automation workflows using best practices, followed by rigorous testing to ensure reliability and accuracy." },
  { num: "04", title: "Deployment & Training", desc: "We deploy your automation solution, provide comprehensive training to your team, and ensure smooth integration with your operations." },
  { num: "05", title: "Monitoring & Optimization", desc: "Continuous monitoring, performance analysis, and optimization to ensure your automation solution delivers maximum value over time." },
];

const technologies = [
  { name: "AI/ML Integration", desc: "Machine learning models and AI algorithms that learn from your business processes and optimize workflows automatically" },
  { name: "RPA (Robotic Process Automation)", desc: "Automate repetitive tasks and business processes with intelligent bots that work 24/7" },
  { name: "Workflow Automation", desc: "Design and implement automated workflows that connect your systems and streamline operations" },
  { name: "API Integration", desc: "Seamlessly connect disparate systems and applications through robust API integrations" },
  { name: "Neural Agent Integration", desc: "Intelligent agents that understand context and make autonomous decisions to optimize business operations" },
  { name: "Generative Media Pipelines", desc: "Automated content generation and media processing pipelines for marketing and operations" },
];

const products = [
  { title: "Intelligent Workflow Engine", desc: "AI-powered workflow automation platform that learns from your business processes and continuously optimizes operations.", bullets: ["Process Learning", "Auto-Optimization", "Real-time Analytics", "Multi-system Integration"] },
  { title: "RPA Solutions", desc: "Robotic Process Automation tools that handle repetitive tasks, data entry, and routine operations with precision and speed.", bullets: ["Task Automation", "24/7 Operation", "Error Reduction", "Cost Savings"] },
  { title: "Algorithmic Business Operations", desc: "Advanced algorithms that automate complex business decisions, resource allocation, and operational planning.", bullets: ["Decision Automation", "Resource Optimization", "Predictive Analytics", "Scalable Architecture"] },
];

export default function AutomationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-container">
            <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-12">
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">Automation Solutions</h1>
                <p className="mt-6 max-w-2xl text-lg text-accent">Streamline workflows with intelligent automation that learns and adapts to your business processes. Reduce manual tasks and boost productivity.</p>
                <Link href="/#book-a-demo" className="mt-8 inline-flex rounded-full bg-cta px-6 py-3 text-sm font-medium text-white no-underline transition hover:bg-cta/90">Get Started</Link>
              </div>
              <div className="relative order-1 w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-white/10 bg-dashboard-card sm:mx-auto sm:max-w-md lg:order-2 lg:mx-0 lg:max-w-xl">
                <div className="relative flex min-h-[200px] w-full items-center justify-center sm:min-h-[220px]">
                  <img
                    src="/images/automation.png"
                    alt="Automation solutions"
                    className="block h-auto w-full max-w-full object-contain object-center max-h-[min(320px,60vw)] sm:max-h-[380px] lg:max-h-[480px]"
                    width={560}
                    height={420}
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">How Our Team Works</h2>
            <p className="mt-4 max-w-3xl text-accent">Our automation specialists combine deep technical expertise with business process knowledge to deliver solutions that drive real efficiency gains.</p>
            <h3 className="mt-8 text-xl font-medium text-foreground">Data-Driven Approach</h3>
            <p className="mt-3 max-w-3xl text-accent">Our automation team starts by deeply understanding your business processes, analyzing data flows, and identifying bottlenecks. We work closely with your team to ensure our solutions align with your operational needs and strategic objectives.</p>
            <p className="mt-3 max-w-3xl text-accent">We leverage AI and machine learning to create automation solutions that not only execute tasks but also learn and improve over time, continuously optimizing your operations.</p>
            <ul className="mt-6 list-inside list-disc space-y-2 text-accent">
              <li>Process mining and workflow analysis to identify automation opportunities</li>
              <li>Iterative development with continuous feedback and refinement</li>
              <li>AI-powered solutions that learn and adapt to your business needs</li>
            </ul>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">Our Automation Process</h2>
            <p className="mt-2 text-accent">A systematic approach to identifying, designing, and implementing automation solutions that deliver measurable results</p>
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
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">Automation Technologies We Use</h2>
            <p className="mt-2 text-accent">We leverage cutting-edge automation technologies and tools to build solutions tailored to your business needs</p>
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
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">Our Automation Products</h2>
            <p className="mt-2 text-accent">Discover our suite of automation solutions designed to streamline operations and drive efficiency</p>
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
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">Ready to Automate Your Operations?</h2>
            <p className="mt-4 text-accent">Let&apos;s discuss how intelligent automation can transform your business processes, reduce costs, and increase productivity.</p>
            <Link href="/#book-a-demo" className="mt-8 inline-flex rounded-full bg-cta px-8 py-3.5 text-sm font-medium text-white no-underline transition hover:bg-cta/90">Get Started</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
