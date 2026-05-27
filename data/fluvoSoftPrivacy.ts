export type PrivacyDocArticle = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PrivacyDocChapter = {
  id: string;
  title: string;
  description?: string;
  articles: PrivacyDocArticle[];
};

export const fluvoSoftPrivacyMeta = {
  effectiveDate: "May 27, 2026",
  lastUpdated: "May 27, 2026",
  contactEmail: "support@fluvosoft.com",
  companyName: "FluvoSoft Ltd.",
  companyLocation: "Dhaka, Bangladesh",
  websiteUrl: "https://www.fluvosoft.com",
};

export type PrivacyHighlightIcon = "minimal" | "shield" | "purpose" | "control";
export type PrivacyScopeIcon = "website" | "apps" | "services" | "contact";

export const privacyHighlights = [
  {
    id: "minimal",
    icon: "minimal" as PrivacyHighlightIcon,
    title: "Only what's needed",
    description:
      "We collect only what we need to run our website, products, and services.",
  },
  {
    id: "no-sell",
    icon: "shield" as PrivacyHighlightIcon,
    title: "No selling your data",
    description: "We do not sell your personal information for advertising.",
  },
  {
    id: "purpose",
    icon: "purpose" as PrivacyHighlightIcon,
    title: "Clear purpose",
    description:
      "We use your data to provide features, support, security, and product improvements.",
  },
  {
    id: "control",
    icon: "control" as PrivacyHighlightIcon,
    title: "You're in control",
    description:
      "You can contact us to access, correct, or delete your information where applicable.",
  },
];

export const privacyScopeItems = [
  {
    id: "website",
    icon: "website" as PrivacyScopeIcon,
    label: "Website",
    description:
      "The FluvoSoft website (fluvosoft.com) and pages that link to this policy.",
  },
  {
    id: "apps",
    icon: "apps" as PrivacyScopeIcon,
    label: "Mobile apps",
    description:
      "Our mobile applications, including Easy Invoice and Inventory Stock Tracker.",
  },
  {
    id: "services",
    icon: "services" as PrivacyScopeIcon,
    label: "Professional services",
    description:
      "Consulting, development, automation, blockchain, and SaaS services we provide.",
  },
  {
    id: "contact",
    icon: "contact" as PrivacyScopeIcon,
    label: "Communications",
    description:
      "Forms, email, demos, newsletters, and support channels operated by FluvoSoft.",
  },
];

export const privacyDocChapters: PrivacyDocChapter[] = [
  {
    id: "introduction",
    title: "Introduction",
    description: "Who this policy applies to and how we think about your data.",
    articles: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          `${fluvoSoftPrivacyMeta.companyName} respects your privacy. This policy explains what we collect, how we use it, who may access it, and what choices you have when you use our website, apps, and services.`,
          "We do not sell your personal information for advertising. We process data to operate our products, support your business, and keep our services secure and reliable.",
        ],
      },
    ],
  },
  {
    id: "collection-and-use",
    title: "Collection & use",
    description: "What we collect, why we use it, and the legal bases behind processing.",
    articles: [
      {
        id: "what-we-collect",
        title: "Information we collect",
        paragraphs: [
          "We collect information only when we have a legitimate purpose. That includes information you give us directly, information collected automatically when you use our sites and apps, and information we receive from partners when you are referred to us or sign in through a third-party login.",
        ],
        bullets: [
          "Account and profile details: name, email, phone number, company name, country, and profile preferences when you register or update your account.",
          "Contact and inquiry information: messages, support tickets, demo requests, and details you submit through forms or email.",
          "Business and product data: information you enter into our apps (such as invoices, inventory records, clients, and settings).",
          "Payment-related information: billing contact details and transaction references. We do not store full payment card numbers on our servers when payments are handled by a secure payment provider.",
          "Usage and device information: pages viewed, features used, approximate location derived from IP address, browser or device type, operating system, and diagnostic logs needed to keep services reliable.",
          "Marketing preferences: whether you subscribed to updates and how you interact with our communications.",
        ],
      },
      {
        id: "how-we-use",
        title: "How we use your information",
        paragraphs: ["We use personal information to:"],
        bullets: [
          "Provide, maintain, and improve our websites, mobile apps, and professional services.",
          "Create and manage your account and authenticate your access.",
          "Deliver customer support and respond to your requests.",
          "Send service notices, security alerts, and policy updates.",
          "Send marketing or product updates only where permitted and with opt-out options.",
          "Analyze usage trends to fix bugs, improve performance, and develop new features.",
          "Detect, prevent, and address fraud, abuse, or security incidents.",
          "Meet legal obligations and enforce our agreements.",
        ],
      },
      {
        id: "legal-bases",
        title: "Legal bases for processing",
        paragraphs: [
          "Where applicable law requires a legal basis, we rely on: performing our contract with you (delivering the service you requested), your consent (for example, optional marketing or certain cookies), our legitimate interests in operating and improving FluvoSoft (balanced against your rights), and compliance with legal obligations.",
          "You may withdraw consent at any time where processing is consent-based. Withdrawal does not affect processing that already occurred lawfully.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies and similar technologies",
        paragraphs: [
          "We use cookies and similar technologies to keep sessions secure, remember preferences, measure site traffic, and understand how features are used. You can control cookies through your browser settings. Disabling essential cookies may affect how some parts of the website work.",
          "We aim to limit non-essential tracking and do not use intrusive third-party advertising cookies on our main website.",
        ],
      },
    ],
  },
  {
    id: "sharing-and-security",
    title: "Sharing & security",
    description: "Who may access your data, how long we keep it, and how we protect it.",
    articles: [
      {
        id: "sharing",
        title: "Who we share information with",
        paragraphs: ["We do not sell personal information. We may share information with:"],
        bullets: [
          "Service providers who help us host infrastructure, send email, process payments, provide analytics, or deliver support — only as needed and under confidentiality obligations.",
          "Professional advisers (such as legal or accounting) when required.",
          "Authorities when required by law, court order, or to protect rights, safety, and security.",
          "A successor entity if FluvoSoft is involved in a merger, acquisition, or asset sale, subject to this policy or equivalent protections.",
        ],
      },
      {
        id: "retention",
        title: "How long we keep information",
        paragraphs: [
          "We retain personal information for as long as your account is active or as needed to provide services, resolve disputes, enforce agreements, and comply with law. When we no longer need the information, we delete it or anonymize it where possible.",
        ],
      },
      {
        id: "security",
        title: "Security",
        paragraphs: [
          "We use administrative, technical, and organizational measures designed to protect personal information, including access controls and encryption in transit where appropriate. No method of transmission or storage is completely secure; we cannot guarantee absolute security.",
        ],
      },
    ],
  },
  {
    id: "product-data",
    title: "Product data",
    description: "Data you create or upload inside FluvoSoft apps and platforms.",
    articles: [
      {
        id: "service-data",
        title: "Data you store in our products",
        paragraphs: [
          "When you use FluvoSoft apps to manage business records, you may upload or create data about your customers, employees, or operations. That data is yours. We process it only to provide the service, backup, sync, export, and support features you request.",
        ],
        bullets: [
          "You are responsible for having a lawful basis to collect and process data about your own customers and contacts.",
          "You can access, export, or delete service data through product features where available.",
          "We do not use your service data for our own marketing or to sell to third parties.",
          "If you close your account, we delete or anonymize service data within a reasonable period, subject to backups and legal retention requirements.",
        ],
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    description: "Choices you have and how laws may apply depending on where you live.",
    articles: [
      {
        id: "privacy-rights",
        title: "Your privacy rights",
        paragraphs: [
          "Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain processing, and to receive a copy of your data in a portable format. You may also have the right to lodge a complaint with a supervisory authority.",
          "To exercise your rights, contact us at the email below. We will respond within a reasonable time and may need to verify your identity.",
        ],
      },
      {
        id: "international",
        title: "International transfers",
        paragraphs: [
          "FluvoSoft is based in Bangladesh. If you access our services from other countries, your information may be transferred to and processed in Bangladesh and in other countries where our service providers operate. We take steps designed to ensure appropriate safeguards where required by law.",
        ],
      },
      {
        id: "children",
        title: "Children's privacy",
        paragraphs: [
          "Our services are intended for businesses and adults. We do not knowingly collect personal information from children under 13 (or the minimum age in your jurisdiction). If you believe a child has provided us information, contact us and we will take appropriate steps to delete it.",
        ],
      },
      {
        id: "third-party-links",
        title: "Third-party websites and services",
        paragraphs: [
          "Our website may link to external sites or integrate with third-party sign-in or payment services. Those services have their own privacy policies. We encourage you to review them before sharing personal information.",
        ],
      },
    ],
  },
  {
    id: "updates-and-contact",
    title: "Updates & contact",
    description: "How we notify you of changes and how to reach us.",
    articles: [
      {
        id: "changes",
        title: "Changes to this policy",
        paragraphs: [
          "We may update this Privacy Policy to reflect changes in our practices, products, or legal requirements. We will post the updated policy on this page and revise the “Last updated” date. For material changes, we may provide additional notice through the website or by email where appropriate.",
          "Continued use of our services after the effective date of an update means you accept the revised policy, unless otherwise required by law.",
        ],
      },
      {
        id: "contact",
        title: "Contact us",
        paragraphs: [
          `For privacy questions, data requests, or concerns, contact ${fluvoSoftPrivacyMeta.companyName} at ${fluvoSoftPrivacyMeta.contactEmail}.`,
          `${fluvoSoftPrivacyMeta.companyName}, ${fluvoSoftPrivacyMeta.companyLocation}.`,
        ],
      },
    ],
  },
];

/** Flat list of anchor ids for scroll-spy and mobile jump nav */
export const privacyDocArticleIds = privacyDocChapters.flatMap((chapter) =>
  chapter.articles.map((article) => article.id)
);
