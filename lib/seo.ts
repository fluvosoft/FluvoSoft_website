/**
 * Shared SEO config for FluvoSoft
 */
export const siteConfig = {
  name: "FluvoSoft",
  tagline: "Venture catalysts studio",
  description:
    "FluvoSoft venture catalysts studio. Transform your business with cutting-edge blockchain solutions, AI automation, and custom software. Blockchain development, automation, SaaS, and enterprise solutions.",
  url: "https://www.fluvosoft.com",
  locale: "en",
  keywords: [
    "FluvoSoft",
    "venture catalysts",
    "blockchain development",
    "AI automation",
    "custom software",
    "SaaS",
    "smart contracts",
    "enterprise solutions",
    "technology solutions",
    "Dhaka",
    "Bangladesh",
    "Easy Invoice",
    "free invoice app",
    "mobile invoicing",
    "Inventory Stock Tracker",
    "inventory app",
    "stock management app",
    "Zoho Corporation",
    "Zoho",
  ],
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "FluvoSoft",
  },
  twitter: {
    card: "summary_large_image",
  },
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
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@fluvosoft.com",
      contactType: "customer service",
      areaServed: "Worldwide",
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
