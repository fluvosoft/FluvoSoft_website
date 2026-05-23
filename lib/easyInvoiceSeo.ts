import type { Metadata } from "next";
import { easyInvoiceFaqs } from "@/data/easyInvoiceFaqs";
import { siteConfig } from "@/lib/seo";

export const easyInvoiceConfig = {
  name: "Easy Invoice",
  tagline: "Free mobile invoice app for small businesses",
  path: "/easy-invoice",
  description:
    "Create professional invoices, track payments & export PDFs free. Easy Invoice by FluvoSoft — 20 templates, cloud sync, no subscriptions. Get it on Android.",
  shortDescription:
    "Create professional invoices, track payments & export PDFs free. Easy Invoice by FluvoSoft — 20 templates, cloud sync, no subscriptions.",
  keywords: [
    "free invoice app android",
    "mobile invoicing app",
    "invoice generator free",
    "small business invoice app",
    "PDF invoice maker",
    "Easy Invoice",
    "FluvoSoft",
    "invoice app Bangladesh",
  ],
  ogImagePath: "/images/easy_invoice_logo_fluvosoft.svg",
  ogImageAlt:
    "Easy Invoice Android app dashboard showing revenue overview and invoice analytics",
  playStoreUrl: "#",
  apkUrl: "/images/app-release.apk",
  apkFileName: "easy-invoice.apk",
};

const pageUrl = `${siteConfig.url}${easyInvoiceConfig.path}`;
const ogImageUrl = `${siteConfig.url}${easyInvoiceConfig.ogImagePath}`;

export const easyInvoiceMetadata: Metadata = {
  title: {
    absolute:
      "Easy Invoice – Free Mobile Invoice App for Small Businesses | FluvoSoft",
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
    title:
      "Easy Invoice – Free Mobile Invoice App for Small Businesses | FluvoSoft",
    description: easyInvoiceConfig.description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: easyInvoiceConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Easy Invoice – Free Mobile Invoice App for Small Businesses | FluvoSoft",
    description: easyInvoiceConfig.description,
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
    name: "Easy Invoice – Free Mobile Invoice App for Small Businesses",
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
      caption: easyInvoiceConfig.ogImageAlt,
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

/** SoftwareApplication — offers only; add aggregateRating when Play Store ratings are available */
export function buildEasyInvoiceSoftwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: easyInvoiceConfig.name,
    operatingSystem: "ANDROID, Web",
    applicationCategory: "FinanceApplication",
    description: easyInvoiceConfig.description,
    url: pageUrl,
    downloadUrl: easyInvoiceConfig.playStoreUrl,
    image: ogImageUrl,
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
    },
  };
}

export const easyInvoiceJsonLdBlocks = [
  buildEasyInvoiceBreadcrumbJsonLd,
  buildEasyInvoiceWebPageJsonLd,
  buildEasyInvoiceSoftwareJsonLd,
  buildEasyInvoiceFaqJsonLd,
] as const;
