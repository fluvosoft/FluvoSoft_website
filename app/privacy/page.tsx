import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";
import { fluvoSoftPrivacyMeta } from "@/data/fluvoSoftPrivacy";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | FluvoSoft",
  description:
    "Read FluvoSoft's Privacy Policy for our website and apps, including KYOTO Habit Tracker, Easy Invoice, Resume Builder, and Inventory Stock Tracker.",
  keywords: [
    "FluvoSoft privacy policy",
    "KYOTO Habit Tracker privacy",
    "data protection",
    "personal information",
    "FluvoSoft Ltd",
    "Delaware United States",
  ],
  openGraph: {
    title: "Privacy Policy | FluvoSoft",
    description:
      "How FluvoSoft collects, uses, stores, and protects your information across our website and products, including KYOTO Habit Tracker.",
    url: "/privacy",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FluvoSoft Privacy Policy",
    description:
      "Read FluvoSoft's Privacy Policy to learn what information we collect, how we use and protect it, your rights, and how to contact us.",
    url: `${siteConfig.url}/privacy`,
    dateModified: fluvoSoftPrivacyMeta.lastUpdated,
    publisher: {
      "@type": "Organization",
      name: fluvoSoftPrivacyMeta.companyName,
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
        <PrivacyPolicyContent />
      </main>
      <div id="resources">
        <Footer />
      </div>
    </>
  );
}
