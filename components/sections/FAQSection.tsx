import Accordion from "@/components/ui/Accordion";
import { homeFaqs } from "@/data/homeFaqs";

const faqs = homeFaqs;

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
