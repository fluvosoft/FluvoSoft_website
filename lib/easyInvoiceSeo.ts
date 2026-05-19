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
  ogImagePath: "/images/easy_invoice_logo.svg",
  ogImageAlt: "Easy Invoice logo by FluvoSoft",
};

const pageUrl = `${siteConfig.url}${easyInvoiceConfig.path}`;
const ogImageUrl = `${siteConfig.url}${easyInvoiceConfig.ogImagePath}`;

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
        width: 512,
        height: 512,
        alt: easyInvoiceConfig.ogImageAlt,
        type: "image/svg+xml",
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

/** BreadcrumbList — valid for rich results */
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

/** WebPage — no nested SoftwareApplication (avoids duplicate invalid app entities) */
export function buildEasyInvoiceWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Easy Invoice — Free Mobile Invoice App",
    description: easyInvoiceConfig.description,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      url: siteConfig.url,
      name: siteConfig.name,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImageUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
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

/**
 * Software App rich results require aggregateRating OR review (Google).
 * Enable after the Play Store listing has real ratings — do not use placeholder values.
 */
export function buildEasyInvoiceSoftwareJsonLd(options: {
  ratingValue: number;
  ratingCount: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: easyInvoiceConfig.name,
    operatingSystem: "ANDROID",
    applicationCategory: "FinanceApplication",
    description: easyInvoiceConfig.description,
    url: pageUrl,
    image: ogImageUrl,
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: options.ratingValue,
      ratingCount: options.ratingCount,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export const easyInvoiceJsonLdBlocks = [
  buildEasyInvoiceBreadcrumbJsonLd,
  buildEasyInvoiceWebPageJsonLd,
  buildEasyInvoiceFaqJsonLd,
] as const;
