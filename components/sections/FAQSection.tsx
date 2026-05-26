import Accordion from "@/components/ui/Accordion";

const faqs = [
  {
    q: "What blockchain platforms does FluvoSoft work with?",
    a: "FluvoSoft specializes in multiple blockchain platforms including Ethereum, Solana, Hyperledger, and Corda. Our team has extensive experience developing smart contracts, decentralized applications (dApps), and enterprise blockchain solutions tailored to your specific business needs.",
  },
  {
    q: "What types of automation services do you offer?",
    a: "We provide comprehensive automation services including AI-powered automation, Robotic Process Automation (RPA), workflow automation, and intelligent process automation. Our solutions help streamline operations, reduce manual work, and improve efficiency across your organization.",
  },
  {
    q: "How long does a typical blockchain or automation project take?",
    a: "Project timelines vary based on complexity and scope. A typical blockchain consulting engagement ranges from 4-12 weeks, while automation projects can take 6-16 weeks depending on the processes being automated. We provide detailed timelines during our initial consultation and keep you updated throughout the project.",
  },
  {
    q: "Do you provide ongoing support after project completion?",
    a: "Yes, we offer comprehensive support and maintenance services. This includes monitoring, updates, security audits, and technical support. We believe in long-term partnerships and ensure your solutions continue to perform optimally as your business evolves.",
  },
  {
    q: "What industries do you serve?",
    a: "FluvoSoft works with businesses across various industries including finance, healthcare, supply chain, manufacturing, and technology. Our blockchain and automation solutions are adaptable to meet the unique requirements and compliance needs of different sectors.",
  },
  {
    q: "How do I get started with FluvoSoft?",
    a: "Getting started is easy. Schedule a consultation with our team to discuss your specific needs. We'll analyze your requirements, provide recommendations, and create a customized proposal. You can reach out through our contact form or book a demo to learn more about how we can help transform your business.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="text-center text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          Frequently Asked Questions
        </h2>
        <div className="mt-12">
          <Accordion
            items={faqs.map((item) => ({
              value: item.q,
              trigger: item.q,
              content: <p className="leading-relaxed">{item.a}</p>,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
