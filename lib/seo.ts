/**
 * Shared SEO config for FluvoSoft (US + worldwide audience, based in Dhaka)
 */
export const siteConfig = {
  name: "FluvoSoft",
  tagline: "Apps & Automation Venture Studio",
  description:
    "FluvoSoft is an apps and automation venture studio based in Dhaka, Bangladesh. We build and run our own products, including TeenyPDF, OneThing, Easy Invoice, Inventory Stock Tracker, KYOTO Habit Tracker and Resume Builder, used by people in the United States and worldwide.",
  url: "https://www.fluvosoft.com",
  locale: "en-US",
  keywords: [
    "FluvoSoft",
    "FluvoSoft apps",
    "app venture studio",
    "indie app studio",
    "bootstrapped app studio",
    "product studio",
    "mobile app company",
    "automation tools",
    "productivity apps",
    "TeenyPDF",
    "OneThing sticky notes widget",
    "Easy Invoice",
    "free invoice app",
    "Inventory Stock Tracker",
    "KYOTO Habit Tracker",
    "Resume Builder app",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FluvoSoft",
  },
  twitter: {
    card: "summary_large_image",
  },
  geo: {
    region: "BD-13",
    placename: "Dhaka, Bangladesh",
    country: "BD",
  },
  sameAs: [
    "https://www.linkedin.com/company/fluvo-soft",
    "https://www.crunchbase.com/organization/fluvosoft",
    "https://play.google.com/store/apps/dev?id=8673019455685564114",
  ],
  playDeveloperUrl: "https://play.google.com/store/apps/dev?id=8673019455685564114",
};

export function buildJsonLdOrganization() {
  const logoUrl = `${siteConfig.url}/images/fluvo_logo.png`;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      contentUrl: logoUrl,
    },
    image: logoUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: siteConfig.sameAs,
    founders: [
      { "@type": "Person", name: "Md Sifat Bin Jibon", jobTitle: "CEO" },
      { "@type": "Person", name: "Shouvick Monzur", jobTitle: "CTO" },
    ],
    knowsAbout: ["mobile apps", "productivity software", "workflow automation", "PDF tools", "invoicing software"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@fluvosoft.com",
      contactType: "customer service",
      areaServed: ["US", "Worldwide"],
      availableLanguage: ["English"],
    },
  };
}

export function buildJsonLdWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
  };
}

/** Bing / Google site ownership meta tags (set via env on production). */
export function buildSiteVerificationMetadata() {
  const bingCode = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();
  const googleMetaCode = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

  if (!bingCode && !googleMetaCode) {
    return undefined;
  }

  return {
    ...(googleMetaCode ? { google: googleMetaCode } : {}),
    ...(bingCode
      ? {
          other: {
            "msvalidate.01": bingCode,
          },
        }
      : {}),
  };
}
