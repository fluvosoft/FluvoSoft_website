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
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/fluvo_logo.png`,
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
    },
  };
}

export function buildJsonLdWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}
