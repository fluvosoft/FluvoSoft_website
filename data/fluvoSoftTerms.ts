import type {
  LegalDocLink,
  PrivacyDocArticle,
  PrivacyDocChapter,
  PrivacyHighlightIcon,
  PrivacyScopeIcon,
} from "@/data/fluvoSoftPrivacy";

export const fluvoSoftTermsMeta = {
  effectiveDate: "24 September 2026",
  lastUpdated: "24 September 2026",
  contactEmail: "support@fluvosoft.com",
  companyName: "FluvoSoft",
  companyLocation: "Bangladesh",
  websiteUrl: "https://www.fluvosoft.com",
};

export const termsHighlights = [
  {
    id: "accept",
    icon: "purpose" as PrivacyHighlightIcon,
    title: "Using means accepting",
    description:
      "Using FluvoSoft apps and websites means you accept these Terms of Use.",
  },
  {
    id: "on-device",
    icon: "shield" as PrivacyHighlightIcon,
    title: "On-device files",
    description:
      "Files you open or create are processed on your device, not uploaded for conversion.",
  },
  {
    id: "subscriptions",
    icon: "control" as PrivacyHighlightIcon,
    title: "You manage billing",
    description:
      "Subscriptions are billed through Google Play. Cancel anytime in Payments and subscriptions.",
  },
  {
    id: "your-files",
    icon: "minimal" as PrivacyHighlightIcon,
    title: "Your documents stay yours",
    description:
      "FluvoSoft owns the apps and branding. You keep all rights to your own files.",
  },
];

export const termsScopeItems = [
  {
    id: "website",
    icon: "website" as PrivacyScopeIcon,
    label: "Website",
    description:
      "The FluvoSoft website (fluvosoft.com) and pages that link to these terms.",
  },
  {
    id: "apps",
    icon: "apps" as PrivacyScopeIcon,
    label: "Mobile apps",
    description:
      "FluvoSoft apps on Google Play, including Image to PDF Converter & Maker (TeenyPDF).",
  },
  {
    id: "services",
    icon: "services" as PrivacyScopeIcon,
    label: "Subscriptions",
    description:
      "Optional paid features such as the Ad Free subscription billed through Google Play.",
  },
  {
    id: "contact",
    icon: "contact" as PrivacyScopeIcon,
    label: "Support",
    description: `Questions about these terms: ${fluvoSoftTermsMeta.contactEmail}.`,
  },
];

const refundPolicyLink: LegalDocLink = {
  href: "https://support.google.com/googleplay/answer/2479637",
  label: "Google Play refund policy",
  external: true,
};

export const termsDocChapters: PrivacyDocChapter[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    description: "These terms apply when you use FluvoSoft apps and websites.",
    articles: [
      {
        id: "acceptance-of-terms",
        title: "Acceptance of terms",
        paragraphs: [
          "Using FluvoSoft apps and websites means you accept these Terms of Use.",
          "These terms are provided by FluvoSoft.",
          `Contact: ${fluvoSoftTermsMeta.contactEmail}`,
        ],
      },
    ],
  },
  {
    id: "our-apps",
    title: "Our apps",
    description: "What FluvoSoft publishes and how the apps work.",
    articles: [
      {
        id: "apps-we-publish",
        title: "Our apps",
        paragraphs: [
          "FluvoSoft publishes mobile apps on Google Play, including Image to PDF Converter & Maker (TeenyPDF).",
          "Apps are provided free, with optional paid features.",
          "Files you open or create are processed on your device.",
        ],
      },
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions and purchases",
    description: "How Ad Free billing, trials, renewal, and refunds work on Google Play.",
    articles: [
      {
        id: "subscriptions-and-purchases",
        title: "Subscriptions and purchases",
        paragraphs: [
          "Some FluvoSoft apps offer optional paid features through Google Play. The details below apply to those purchases.",
        ],
        bullets: [
          "The Ad Free subscription removes all advertising in the app.",
          "It is billed monthly at the price shown in the app, which varies by country.",
          "A 3 day free trial may be offered to new subscribers. If you do not cancel before the trial ends, the subscription starts and the first payment is taken.",
          "The subscription renews automatically unless you cancel at least 24 hours before the end of the current period.",
          "Payment is charged to your Google Play account at confirmation of purchase.",
          "You manage or cancel in Google Play: open the Play Store, then Payments and subscriptions, then Subscriptions. Cancelling stops future renewals. You keep access until the end of the paid period.",
          "Refunds are handled by Google Play under Google's refund policy.",
          "Prices may change. You will be notified in advance and may cancel.",
        ],
        links: [refundPolicyLink],
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    description: "Rules for using FluvoSoft apps.",
    articles: [
      {
        id: "acceptable-use-rules",
        title: "Acceptable use",
        paragraphs: [
          "You may not reverse engineer the apps, resell them, or use them for unlawful content.",
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    description: "Who owns the apps, branding, and your files.",
    articles: [
      {
        id: "ip-rights",
        title: "Intellectual property",
        paragraphs: [
          "FluvoSoft owns the apps and branding.",
          "You keep all rights to your own documents and files.",
        ],
      },
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer and limitation of liability",
    description: "The apps are provided as is. Keep backups of important files.",
    articles: [
      {
        id: "disclaimer-and-liability",
        title: "Disclaimer and limitation of liability",
        paragraphs: [
          'The apps are provided "as is".',
          "FluvoSoft is not liable for data loss.",
          "You should keep backups of important documents.",
        ],
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    description: "How we update this page.",
    articles: [
      {
        id: "changes-to-these-terms",
        title: "Changes to these terms",
        paragraphs: [
          "FluvoSoft may update these terms.",
          "When we do, the updated date is shown at the top of this page.",
        ],
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing law",
    description: "Which law applies to these terms.",
    articles: [
      {
        id: "governing-law-bangladesh",
        title: "Governing law",
        paragraphs: ["These terms are governed by the laws of Bangladesh."],
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    description: "How to reach FluvoSoft about these terms.",
    articles: [
      {
        id: "contact-us",
        title: "Contact",
        paragraphs: [
          `For questions about these Terms of Use, contact FluvoSoft at ${fluvoSoftTermsMeta.contactEmail}.`,
          "Our Privacy Policy explains how we handle your information.",
        ],
        links: [
          { href: "/privacy", label: "Read the Privacy Policy" },
          {
            href: `mailto:${fluvoSoftTermsMeta.contactEmail}`,
            label: fluvoSoftTermsMeta.contactEmail,
          },
        ],
      } satisfies PrivacyDocArticle,
    ],
  },
];

export const termsDocArticleIds = termsDocChapters.flatMap((chapter) =>
  chapter.articles.map((article) => article.id)
);
