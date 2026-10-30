import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import { CAREERS_APPLY_EMAIL, careersInternRoles } from "@/data/resourcesPages";

const CAREERS_PATH = "/careers";

/** Target keyword clusters for FluvoSoft careers (remote-friendly, US + worldwide) */
export const careersSeoKeywords = [
  // Brand + entity
  "FluvoSoft careers",
  "FluvoSoft internship",
  "FluvoSoft intern program",
  "FluvoSoft app studio careers",
  "app studio internship",
  "product studio jobs remote",
  // Internship intent (remote / USA)
  "remote software engineering internship USA",
  "software engineer intern remote United States",
  "full stack developer intern remote",
  "Flutter mobile developer intern",
  "DevOps cloud engineering intern",
  "SaaS engineering internship",
  "unpaid software internship certificate",
  "6 month tech internship remote",
  "startup software intern USA",
  "venture catalyst studio internship",
  "R&D software engineering intern",
];

export const careersFaqs = [
  {
    question: "What does FluvoSoft do?",
    answer:
      "FluvoSoft is an apps and automation venture studio based in Dhaka, Bangladesh. We build and run our own products, including TeenyPDF, OneThing and Easy Invoice, used by people in the United States and worldwide.",
  },
  {
    question: "Are FluvoSoft internships paid?",
    answer:
      "FluvoSoft intern roles are unpaid and task-based. Each internship runs for six months and includes mentor support, real project deliverables, and a certificate upon successful completion.",
  },
  {
    question: "Can I apply from the United States?",
    answer:
      "Yes. Our intern program is remote-friendly and open to applicants in the United States and internationally. Apply by emailing ceo@fluvosoft.com with your resume, portfolio, or GitHub profile and the role you are interested in.",
  },
  {
    question: "What intern roles is FluvoSoft hiring for?",
    answer:
      "We hire Full-Stack Engineer Interns, Mobile Developer Interns (Flutter), Blockchain Developer Interns, and DevOps / Cloud Engineer Interns. All roles are intern positions focused on production-quality software work.",
  },
  {
    question: "How do I apply for a FluvoSoft internship?",
    answer:
      `Email ceo@fluvosoft.com with the subject line "Intern Application — [role name]". Include your resume, portfolio, or GitHub profile and a short note about why you want to join FluvoSoft.`,
  },
];

const careersTitle =
  "Careers & Internships | FluvoSoft – Apps & Automation Venture Studio";

const careersDescription =
  "Join FluvoSoft, an apps and automation venture studio. Remote-friendly software internships in full-stack, Flutter mobile and DevOps, working on real products. Six-month, task-based program with certificate. Apply at ceo@fluvosoft.com.";

const careersShortDescription =
  "Remote-friendly internships at an app venture studio: engineering, mobile and cloud.";

function absoluteUrl(path: string) {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildCareersMetadata(): Metadata {
  const pageUrl = absoluteUrl(CAREERS_PATH);
  const ogImageUrl = absoluteUrl("/images/fluvo_logo.png");

  return {
    title: { absolute: careersTitle },
    description: careersDescription,
    keywords: careersSeoKeywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Careers",
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
      title: careersTitle,
      description: careersDescription,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "FluvoSoft careers — app studio internships",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: careersTitle,
      description: careersShortDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: pageUrl,
    },
    other: {
      "geo.region": "BD-13",
      "geo.placename": "Dhaka, Bangladesh",
    },
  };
}

export function buildCareersJsonLdGraph() {
  const pageUrl = absoluteUrl(CAREERS_PATH);
  const orgId = `${siteConfig.url}#organization`;
  const websiteId = `${siteConfig.url}#website`;
  const webpageId = `${pageUrl}#webpage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;
  const employerId = `${pageUrl}#employer`;
  const logoUrl = absoluteUrl("/images/fluvo_logo.png");

  const datePosted = "2026-07-01";
  const validThrough = "2027-06-30";

  const jobPostings = careersInternRoles.map((role, index) => ({
    "@type": "JobPosting" as const,
    "@id": `${pageUrl}#job-${index + 1}`,
    title: role.title,
    description: `${role.description} Unpaid, task-based internship. Duration: 6 months. Certificate provided upon successful completion.`,
    datePosted,
    validThrough,
    employmentType: "INTERN",
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: [
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    hiringOrganization: { "@id": employerId },
    identifier: {
      "@type": "PropertyValue",
      name: "FluvoSoft",
      value: role.title,
    },
    directApply: true,
    applicationContact: {
      "@type": "ContactPoint",
      email: CAREERS_APPLY_EMAIL,
      contactType: "recruiting",
    },
    url: pageUrl,
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
          url: logoUrl,
        },
      },
      {
        "@type": "Organization",
        "@id": employerId,
        name: "FluvoSoft",
        legalName: "FluvoSoft Ltd.",
        url: siteConfig.url,
        logo: logoUrl,
        description:
          "FluvoSoft is an apps and automation venture studio building its own mobile and web products.",
        foundingLocation: {
          "@type": "Place",
          name: "Dhaka, Bangladesh",
        },
        areaServed: ["United States", "Worldwide"],
        sameAs: [siteConfig.url, ...siteConfig.sameAs],
        parentOrganization: { "@id": orgId },
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
            name: "Careers",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: pageUrl,
        name: careersTitle,
        description: careersDescription,
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        breadcrumb: { "@id": breadcrumbId },
        about: { "@id": employerId },
        publisher: { "@id": orgId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: logoUrl,
          caption: "FluvoSoft careers and internships",
        },
        mainEntity: jobPostings.map((job) => ({ "@id": job["@id"] })),
      },
      ...jobPostings,
      {
        "@type": "FAQPage",
        "@id": faqId,
        isPartOf: { "@id": webpageId },
        mainEntity: careersFaqs.map((item) => ({
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

export const careersMetadata = buildCareersMetadata();
