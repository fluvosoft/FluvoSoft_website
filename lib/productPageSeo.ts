import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export type ProductOfferConfig = {
  name: string;
  price: number;
  priceCurrency?: string;
  billingPeriod?: "MONTH" | "YEAR";
};

export type ProductSeoConfig = {
  name: string;
  tagline: string;
  path: string;
  description: string;
  shortDescription: string;
  keywords: string[];
  ogImagePath: string;
  ogImageAlt: string;
  applicationCategory: string;
  operatingSystems: string[];
  features: string[];
  screenshotPaths?: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  apkUrl?: string;
  apkFileName?: string;
  webUrl?: string;
  softwareVersion?: string;
  offers: ProductOfferConfig[];
  faqs: { question: string; answer: string }[];
};

function absoluteUrl(path: string) {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

function encodeAssetUrl(path: string) {
  return `${siteConfig.url}${encodeURI(path)}`;
}

export function buildProductPageMetadata(config: ProductSeoConfig): Metadata {
  const pageUrl = absoluteUrl(config.path);
  const ogImageUrl = absoluteUrl(config.ogImagePath);
  const title = `${config.name} – ${config.tagline} | ${siteConfig.name}`;
  const ogTitle = title;

  const appLinks: Metadata["appLinks"] = {};
  if (config.appStoreUrl && config.appStoreUrl !== "#") {
    appLinks.ios = { url: config.appStoreUrl };
  }

  return {
    title: { absolute: title },
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Business",
    applicationName: config.name,
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
      title: ogTitle,
      description: config.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: config.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: config.shortDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: pageUrl,
    },
    ...(Object.keys(appLinks).length > 0 ? { appLinks } : {}),
    other: {
      "application-name": config.name,
      "og:see_also": siteConfig.url,
    },
  };
}

export function buildProductPageJsonLdGraph(config: ProductSeoConfig) {
  const pageUrl = absoluteUrl(config.path);
  const ogImageUrl = absoluteUrl(config.ogImagePath);
  const orgId = `${siteConfig.url}#organization`;
  const websiteId = `${siteConfig.url}#website`;
  const webpageId = `${pageUrl}#webpage`;
  const appId = `${pageUrl}#app`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;

  const downloadUrls = [config.playStoreUrl, config.appStoreUrl, config.apkUrl]
    .filter((url): url is string => Boolean(url && url !== "#"))
    .map((url) => (url.startsWith("http") ? url : absoluteUrl(url)));

  const screenshots = (config.screenshotPaths ?? []).map((path) => encodeAssetUrl(path));

  const offers = config.offers.map((offer) => ({
    "@type": "Offer" as const,
    name: offer.name,
    price: offer.price,
    priceCurrency: offer.priceCurrency ?? "USD",
    availability: "https://schema.org/InStock",
    ...(offer.billingPeriod
      ? {
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: offer.price,
            priceCurrency: offer.priceCurrency ?? "USD",
            unitText: offer.billingPeriod,
          },
        }
      : {}),
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/fluvo_logo.png"),
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": orgId },
        inLanguage: siteConfig.locale,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
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
            name: config.name,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: pageUrl,
        name: `${config.name} – ${config.tagline}`,
        description: config.description,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        about: { "@id": appId },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: ogImageUrl,
          caption: config.ogImageAlt,
        },
        publisher: { "@id": orgId },
        mainEntity: { "@id": appId },
      },
      {
        "@type": ["SoftwareApplication", "MobileApplication"],
        "@id": appId,
        name: config.name,
        applicationCategory: config.applicationCategory,
        operatingSystem: config.operatingSystems.join(", "),
        description: config.description,
        url: pageUrl,
        image: ogImageUrl,
        featureList: config.features,
        ...(screenshots.length > 0 ? { screenshot: screenshots } : {}),
        ...(config.softwareVersion ? { softwareVersion: config.softwareVersion } : {}),
        ...(downloadUrls.length > 0
          ? {
              downloadUrl: downloadUrls,
              installUrl: downloadUrls[0],
            }
          : {}),
        offers: offers.length === 1 ? offers[0] : offers,
        author: { "@id": orgId },
        publisher: { "@id": orgId },
        brand: {
          "@type": "Brand",
          name: siteConfig.name,
        },
        countriesSupported: "BD",
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        isPartOf: { "@id": webpageId },
        mainEntity: config.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
