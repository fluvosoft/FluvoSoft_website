import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | FluvoSoft",
  description:
    "Contact FluvoSoft for demos, consulting, support, careers, and partnerships. Email support@fluvosoft.com or send a message through our contact form.",
  keywords: [
    "contact FluvoSoft",
    "book a demo",
    "FluvoSoft support",
    "software consulting",
    "software company USA",
    "Delaware United States",
  ],
  openGraph: {
    title: "Contact Us | FluvoSoft",
    description:
      "Get in touch with FluvoSoft for product demos, custom software, automation, and blockchain solutions.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-container text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-accent lg:text-xl">
              Book a quick call and tell us about your project — we&apos;ll get back to you with next steps.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
