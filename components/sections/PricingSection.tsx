import PricingCard from "@/components/blocks/PricingCard";

const plans = [
  {
    name: "AI Automation",
    description: "Streamline workflows with intelligent automation that learns and adapts",
    price: "Custom",
    period: "tailored to your needs",
    cta: "Learn more",
    footer: "Workflow optimization & process learning",
    features: ["Workflow optimization", "Process learning", "Task reduction"],
  },
  {
    name: "Blockchain Development",
    description: "Secure, transparent, decentralized solutions for enterprise",
    price: "Custom",
    period: "project-based or ongoing",
    cta: "Get started",
    footer: "Smart contracts, data integrity, trust & security",
    featured: true,
    features: ["Smart contracts", "Data integrity", "Trust & security", "Decentralized networks"],
  },
  {
    name: "Custom Software",
    description: "Tailored applications built specifically for your business needs",
    price: "Custom",
    period: "scalable with your business",
    cta: "Contact us",
    footer: "Enterprise solutions & scalable architecture",
    features: ["Enterprise solutions", "Scalable architecture", "Custom development"],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="pricing-heading"
            className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Enterprise Blockchain Solutions
          </h2>
          <p className="mt-4 text-sm text-accent md:text-base">
            Scalable and secure blockchain solutions for enterprise needs. Smart contracts, tokenization, and decentralized networks.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              cta={plan.cta}
              features={plan.features}
              featured={"featured" in plan && plan.featured}
              footer={plan.footer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
