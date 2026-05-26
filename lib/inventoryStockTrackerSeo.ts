import type { Metadata } from "next";
import { inventoryStockTrackerFaqs } from "@/data/inventoryStockTrackerFaqs";
import { siteConfig } from "@/lib/seo";

export const inventoryStockTrackerConfig = {
  name: "Inventory Stock Tracker",
  tagline: "Cloud inventory app for small businesses",
  path: "/inventory-stock-tracker",
  description:
    "Manage product stock, track stock in/out, and see sales analytics on Android and iOS. Inventory Stock Tracker by FluvoSoft — cloud sync, barcode scan, free core features.",
  shortDescription:
    "Manage product stock, track movements, and view dashboard analytics. Cloud sync with offline support by FluvoSoft.",
  keywords: [
    "inventory app android",
    "stock tracker app",
    "small business inventory",
    "barcode inventory app",
    "warehouse stock management",
    "Inventory Stock Tracker",
    "FluvoSoft",
    "inventory app Bangladesh",
  ],
  ogImagePath: "/images/inventory_stock_tracker_logo.png",
  ogImageAlt:
    "Inventory Stock Tracker app logo — cloud inventory management for small businesses",
  playStoreUrl: "#",
  appStoreUrl: "#",
  apkUrl: "/downloads/inventory-stock-tracker.apk",
  apkFileName: "inventory-stock-tracker.apk",
};

const pageUrl = `${siteConfig.url}${inventoryStockTrackerConfig.path}`;
const ogImageUrl = `${siteConfig.url}${inventoryStockTrackerConfig.ogImagePath}`;

export const inventoryStockTrackerMetadata: Metadata = {
  title: {
    absolute:
      "Inventory Stock Tracker – Mobile Inventory App for Small Business | FluvoSoft",
  },
  description: inventoryStockTrackerConfig.description,
  keywords: inventoryStockTrackerConfig.keywords,
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
      "Inventory Stock Tracker – Mobile Inventory App for Small Business | FluvoSoft",
    description: inventoryStockTrackerConfig.description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: inventoryStockTrackerConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Inventory Stock Tracker – Mobile Inventory App for Small Business | FluvoSoft",
    description: inventoryStockTrackerConfig.description,
    images: [ogImageUrl],
  },
  alternates: {
    canonical: pageUrl,
  },
  other: {
    "application-name": inventoryStockTrackerConfig.name,
  },
};

export function buildInventoryStockTrackerBreadcrumbJsonLd() {
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
        name: inventoryStockTrackerConfig.name,
        item: pageUrl,
      },
    ],
  };
}

export function buildInventoryStockTrackerWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Inventory Stock Tracker – Mobile Inventory App for Small Business",
    description: inventoryStockTrackerConfig.description,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      url: siteConfig.url,
      name: siteConfig.name,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImageUrl,
      caption: inventoryStockTrackerConfig.ogImageAlt,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function buildInventoryStockTrackerFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: inventoryStockTrackerFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildInventoryStockTrackerSoftwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: inventoryStockTrackerConfig.name,
    operatingSystem: "ANDROID, iOS",
    applicationCategory: "BusinessApplication",
    description: inventoryStockTrackerConfig.description,
    url: pageUrl,
    downloadUrl: inventoryStockTrackerConfig.playStoreUrl,
    image: ogImageUrl,
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: 0,
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: 4.99,
        priceCurrency: "USD",
        billingIncrement: 1,
        unitText: "MONTH",
      },
    ],
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

export const inventoryStockTrackerJsonLdBlocks = [
  buildInventoryStockTrackerBreadcrumbJsonLd,
  buildInventoryStockTrackerWebPageJsonLd,
  buildInventoryStockTrackerSoftwareJsonLd,
  buildInventoryStockTrackerFaqJsonLd,
] as const;
