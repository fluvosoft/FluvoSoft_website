import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - FluvoSoft",
  description:
    "FluvoSoft privacy policy covering what information we collect, how we use it, who we share it with, and your privacy rights.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections: { title: string; content: ReactNode }[] = [
  {
    title: "Summary of our Privacy Policy",
    content: (
      <>
        <p>
          This Privacy Policy explains how FluvoSoft (“we”, “us”, “our”) collects, uses, stores,
          and shares information when you visit our website, contact us, subscribe to updates, use our
          products, or request our services.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-accent">
          <li>We only collect information that we need to provide our services and support.</li>
          <li>We do not sell personal information for advertising.</li>
          <li>We share information only when it’s necessary to operate, support, and run our services.</li>
          <li>You can contact us to request updates, access, or deletion where applicable.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Part I – Information we collect and control",
    content: (
      <>
        <h3 className="mt-6 text-lg font-medium text-foreground">What information we collect</h3>
        <p className="mt-3 text-accent">
          We collect information you provide to us and information generated when you interact with our
          websites and products.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-accent">
          <li>
            <strong>Account and profile information</strong> (for example, name and email) when you create
            an account or sign in to our services.
          </li>
          <li>
            <strong>Contact and request information</strong> when you reach out to us (support requests,
            proposals, or inquiries).
          </li>
          <li>
            <strong>Product data</strong> you enter into our apps (for example, invoice or inventory data).
          </li>
          <li>
            <strong>Usage data</strong> collected automatically to understand how our services are used and to
            improve reliability and performance.
          </li>
        </ul>

        <h3 className="mt-6 text-lg font-medium text-foreground">Purposes for using information</h3>
        <p className="mt-3 text-accent">
          We use information to provide requested features, operate accounts, maintain service availability,
          protect against unauthorized activity, respond to inquiries, and improve our products and support.
        </p>

        <h3 className="mt-6 text-lg font-medium text-foreground">Cookies and tracking</h3>
        <p className="mt-3 text-accent">
          We may use cookies and similar technologies to make the website work properly, understand usage,
          and remember preferences. You can typically control cookies through your browser settings.
        </p>

        <h3 className="mt-6 text-lg font-medium text-foreground">Access and security commitments</h3>
        <p className="mt-3 text-accent">
          We limit access to personal information to employees and contractors with a legitimate need to access it.
          We use reasonable safeguards to protect information in storage and during transmission.
        </p>
      </>
    ),
  },
  {
    title: "Part II – Information processed on your behalf",
    content: (
      <>
        <p className="text-accent">
          If you use our products or services to manage other people’s data (for example, customers and vendors
          inside inventory or invoicing tools), you are responsible for what you enter and control how that data
          is used. We process service data only to provide the requested functionality and support.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-accent">
          <li>You control the service data you input into our tools.</li>
          <li>You can request export or deletion where those features are available.</li>
          <li>We keep service data only for as long as needed to provide the service and comply with obligations.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Part III – General",
    content: (
      <>
        <h3 className="mt-6 text-lg font-medium text-foreground">Who we share information with</h3>
        <p className="mt-3 text-accent">
          We may share information with service providers and partners that help us operate our services and support
          our users. These providers process information only as needed to perform their functions.
        </p>

        <h3 className="mt-6 text-lg font-medium text-foreground">International transfers</h3>
        <p className="mt-3 text-accent">
          If you access our services from outside Bangladesh, your information may be transferred to and processed in
          other countries where our service providers operate. Those countries may have different data protection laws.
        </p>

        <h3 className="mt-6 text-lg font-medium text-foreground">Your privacy rights</h3>
        <p className="mt-3 text-accent">
          Depending on where you live, you may have rights including access, correction, deletion, and objection to
          certain processing. You can contact us to discuss your options.
        </p>

        <h3 className="mt-6 text-lg font-medium text-foreground">Children’s privacy</h3>
        <p className="mt-3 text-accent">
          Our services are intended for business users. We do not knowingly collect personal information from children.
          If you believe a child has provided us information, please contact us so we can address it.
        </p>

        <h3 className="mt-6 text-lg font-medium text-foreground">Changes to this policy</h3>
        <p className="mt-3 text-accent">
          We may update this Privacy Policy from time to time. Any material changes will be posted on this page, and
          we will update the “Last updated” date at the top.
        </p>
      </>
    ),
  },
  {
    title: "Contact us",
    content: (
      <>
        <p className="text-accent">
          If you have questions about privacy or want to request access or deletion, contact us at{" "}
          <a
            href="mailto:support@fluvosoft.com"
            className="font-medium text-foreground underline decoration-cta/60 underline-offset-2 hover:decoration-cta"
          >
            support@fluvosoft.com
          </a>
          .
        </p>
        <p className="mt-3 text-sm text-accent">
          Effective date: May 27, 2026 (replace with your final legal date if needed).
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background px-6 py-14 lg:px-8" role="main" id="main-content">
        <div className="mx-auto max-w-container">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-1 text-xs font-medium text-accent">
              Privacy Policy
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              FluvoSoft Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-accent">
              We respect your privacy. This page explains what information we collect, how we use it, and your privacy
              rights.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {sections.map((s, idx) => (
              <section
                key={s.title}
                aria-labelledby={`privacy-section-${s.title}`}
                className={idx === 0 ? undefined : "border-t border-white/10 pt-8"}
              >
                <h2
                  id={`privacy-section-${s.title}`}
                  className="text-xl font-medium text-foreground md:text-2xl"
                >
                  {s.title}
                </h2>
                <div className="mt-4 space-y-3 text-base leading-relaxed">{s.content}</div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <div id="resources">
        <Footer />
      </div>
    </>
  );
}

