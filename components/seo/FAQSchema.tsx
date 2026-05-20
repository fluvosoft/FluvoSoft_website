const faqs = [
  {
    q: "Is FluvoSoft easy to customise?",
    a: "Yes, FluvoSoft is designed with customization in mind. All components are built with Tailwind CSS and can be easily modified to match your brand. The code is clean, well-structured, and fully documented, making it simple to customize colors, spacing, typography, and layouts to fit your needs.",
  },
  {
    q: "Is FluvoSoft optimized for search engines?",
    a: "Absolutely. FluvoSoft follows SEO best practices with semantic HTML, proper heading structure, meta tags support, and optimized performance. All components are built with accessibility and SEO in mind, ensuring your landing pages rank well in search engines.",
  },
  {
    q: "How does FluvoSoft compare to no-code tools?",
    a: "FluvoSoft gives you the flexibility and control of code without the limitations of no-code platforms. You can customize everything, integrate with any backend or CMS, and deploy anywhere. Unlike no-code tools, you own the code and can modify it as needed for your specific requirements.",
  },
  {
    q: "Why not just code a website yourself?",
    a: "While you could build everything from scratch, FluvoSoft saves you weeks or months of development time. We've already solved common design patterns, accessibility challenges, and responsive layouts. You get production-ready components that you can customize, allowing you to focus on your content and business logic instead of reinventing the wheel.",
  },
  {
    q: "Can I get a refund if I don't like it?",
    a: "Yes, we offer a 30-day money-back guarantee. If FluvoSoft doesn't meet your expectations, contact us within 30 days of purchase and we'll provide a full refund, no questions asked.",
  },
  {
    q: "What features will be added in the future?",
    a: "We're constantly improving FluvoSoft based on user feedback. Upcoming features include additional component variations, more animation options, enhanced accessibility features, and integrations with popular CMS platforms. All updates are included with your purchase at no additional cost.",
  },
];

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
