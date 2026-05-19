import type { Metadata } from "next";
import { easyInvoiceFaqs } from "@/data/easyInvoiceFaqs";
import { siteConfig } from "@/lib/seo";

export const easyInvoiceConfig = {
  name: "Easy Invoice",
  tagline: "Free mobile invoice app for small businesses",
  path: "/easy-invoice",
  description:
    "Easy Invoice by FluvoSoft is a free mobile invoicing app. Create professional invoices with 20 templates, track payments on your dashboard, export PDFs, and sync to the cloud — no subscription required.",
  shortDescription:
    "Free invoice app with templates, dashboard analytics, PDF export, and cloud sync. Built for businesses in Bangladesh and worldwide.",
  keywords: [
    "Easy Invoice",
    "free invoice app",
    "mobile invoicing app",
    "invoice software",
    "invoicing app Bangladesh",
    "invoice generator",
    "PDF invoice",
    "small business invoicing",
    "FluvoSoft Easy Invoice",
    "invoice templates",
    "free invoicing software",
    "Android invoice app",
  ],
  ogImagePath: "/images/easy invoice mocup-1.jpeg",
  applicationCategory: "BusinessApplication",
  operatingSystems: ["Android"],
};

const pageUrl = `${siteConfig.url}${easyInvoiceConfig.path}`;
const ogImageUrl = `${siteConfig.url}${encodeURI(easyInvoiceConfig.ogImagePath)}`;

export const easyInvoiceMetadata: Metadata = {
  title: {
    absolute: "Easy Invoice — Free Mobile Invoice App | FluvoSoft",
  },
  description: easyInvoiceConfig.description,
  keywords: easyInvoiceConfig.keywords,
  authors: [{ name: "FluvoSoft", url: siteConfig.url }],
  creator: "FluvoSoft",
  publisher: "FluvoSoft",
  category: "Business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.openGraph.locale,
    url: pageUrl,
    siteName: siteConfig.openGraph.siteName,
    title: "Easy Invoice — Free Mobile Invoice App | FluvoSoft",
    description: easyInvoiceConfig.shortDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Easy Invoice app dashboard on mobile — free invoicing by FluvoSoft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Invoice — Free Mobile Invoice App",
    description: easyInvoiceConfig.shortDescription,
    images: [ogImageUrl],
  },
  alternates: {
    canonical: pageUrl,
  },
  other: {
    "application-name": easyInvoiceConfig.name,
  },
};

export function buildEasyInvoiceBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: easyInvoiceConfig.name,
        item: pageUrl,
      },
    ],
  };
}

export function buildEasyInvoiceWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Easy Invoice — Free Mobile Invoice App",
    description: easyInvoiceConfig.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}#website`,
      url: siteConfig.url,
      name: siteConfig.name,
    },
    about: {
      "@type": "SoftwareApplication",
      name: easyInvoiceConfig.name,
    },
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function buildEasyInvoiceSoftwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: easyInvoiceConfig.name,
    applicationCategory: easyInvoiceConfig.applicationCategory,
    operatingSystem: easyInvoiceConfig.operatingSystems,
    description: easyInvoiceConfig.description,
    url: pageUrl,
    image: ogImageUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Professional invoice creation with 20 templates",
      "Dashboard analytics and revenue tracking",
      "PDF export and cloud sync",
      "Client management and payment tracking",
      "Google Sign-In and email authentication",
      "Multi-language invoice support",
    ],
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/fluvo_logo.png`,
      },
    },
    brand: {
      "@type": "Brand",
      name: easyInvoiceConfig.name,
    },
  };
}

export function buildEasyInvoiceFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: easyInvoiceFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildEasyInvoiceJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildEasyInvoiceWebPageJsonLd(),
      buildEasyInvoiceBreadcrumbJsonLd(),
      buildEasyInvoiceSoftwareJsonLd(),
      buildEasyInvoiceFaqJsonLd(),
    ],
  };
}
