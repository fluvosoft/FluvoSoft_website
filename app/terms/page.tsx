import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TermsOfUseContent from "@/components/legal/TermsOfUseContent";
import { fluvoSoftTermsMeta } from "@/data/fluvoSoftTerms";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for FluvoSoft apps and services, including subscriptions and purchases.",
  keywords: [
    "FluvoSoft terms of use",
    "FluvoSoft user agreement",
    "TeenyPDF subscription",
    "Google Play terms",
    "Ad Free subscription",
    "FluvoSoft",
  ],
  openGraph: {
    title: "Terms of Use | FluvoSoft",
    description:
      "Terms of Use for FluvoSoft apps and services, including subscriptions and purchases.",
    url: "/terms",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfUsePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FluvoSoft Terms of Use",
    description:
      "Terms of Use for FluvoSoft apps and services, including subscriptions and purchases.",
    url: `${siteConfig.url}/terms`,
    dateModified: fluvoSoftTermsMeta.lastUpdated,
    publisher: {
      "@type": "Organization",
      name: fluvoSoftTermsMeta.companyName,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-background" role="main" id="main-content">
        <TermsOfUseContent />
      </main>
      <div id="resources">
        <Footer />
      </div>
    </>
  );
}
