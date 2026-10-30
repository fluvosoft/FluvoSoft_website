export interface ResourceCard {
  title: string;
  description: string;
  href?: string;
  tag?: string;
  external?: boolean;
  applyHref?: string;
  applyLabel?: string;
}

export interface ResourceSection {
  id?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  list?: string[];
  cards?: ResourceCard[];
}

export interface ResourcePageData {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  sections: ResourceSection[];
  cta?: {
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
}

export const securityPage: ResourcePageData = {
  slug: "security",
  title: "Security",
  description:
    "How FluvoSoft protects your data, applications, and infrastructure across every product and engagement.",
  metaDescription:
    "FluvoSoft security practices: encryption, access controls, secure development, incident response, and compliance for enterprise and SaaS products.",
  keywords: [
    "FluvoSoft security",
    "data protection",
    "application security",
    "secure software development",
    "encryption",
  ],
  sections: [
    {
      id: "overview",
      title: "Security at FluvoSoft",
      paragraphs: [
        "Security is built into how we design, build, and operate software—not added at the end. Whether you use our SaaS products, mobile apps, or custom solutions, we apply consistent controls to protect confidentiality, integrity, and availability.",
        "Our team follows secure development practices, least-privilege access, and regular reviews so your business can move fast without trading off trust.",
      ],
    },
    {
      id: "practices",
      title: "Core security practices",
      cards: [
        {
          title: "Encryption in transit & at rest",
          description:
            "TLS for data in transit and industry-standard encryption for stored data, credentials, and backups where applicable.",
        },
        {
          title: "Access control",
          description:
            "Role-based access, multi-factor authentication for internal systems, and principle of least privilege across environments.",
        },
        {
          title: "Secure development lifecycle",
          description:
            "Code review, dependency monitoring, environment separation, and security considerations in architecture and deployment.",
        },
        {
          title: "Monitoring & incident response",
          description:
            "Logging, alerting, and documented procedures to detect, contain, and respond to security events quickly.",
        },
        {
          title: "Vendor & infrastructure hygiene",
          description:
            "Hardened cloud configuration, patched dependencies, and careful evaluation of third-party services and integrations.",
        },
        {
          title: "Privacy by design",
          description:
            "Data minimization, clear retention practices, and alignment with our Privacy Policy across products and client work.",
        },
      ],
    },
    {
      id: "products",
      title: "Product & client work",
      paragraphs: [
        "Easy Invoice and Inventory Stock Tracker are designed with local-first and cloud-sync patterns that limit unnecessary data exposure. Custom development and enterprise engagements include threat modeling, secure API design, and deployment guidance tailored to your stack.",
        "If you have specific compliance, audit, or security questionnaire requirements, our team can provide documentation and walk through controls during onboarding.",
      ],
      list: [
        "Secure authentication and session handling for web and mobile products",
        "API rate limiting and input validation on server-side endpoints",
        "Regular dependency and vulnerability review for maintained codebases",
        "Documented data handling aligned with our Privacy Policy",
      ],
    },
  ],
  cta: {
    title: "Security questions or audit requests?",
    description: "Reach out for security documentation, vendor questionnaires, or incident reporting.",
    primary: { label: "Contact security team", href: "/contact" },
    secondary: { label: "Read Privacy Policy", href: "/privacy" },
  },
};

const CAREERS_APPLY_EMAIL = "ceo@fluvosoft.com";

export { CAREERS_APPLY_EMAIL };

export function careersApplyMailto(role: string) {
  return `mailto:${CAREERS_APPLY_EMAIL}?subject=${encodeURIComponent(`Intern Application — ${role}`)}`;
}

export const careersPage: ResourcePageData = {
  slug: "careers",
  title: "Careers",
  description:
    "Join FluvoSoft as an intern. Gain hands-on experience building blockchain, automation, and software products used by businesses worldwide.",
  metaDescription:
    "FluvoSoft intern program: unpaid, task-based roles for 6 months with a completion certificate. Apply for engineering internships.",
  keywords: [
    "FluvoSoft careers",
    "FluvoSoft internship",
    "software engineering intern",
    "remote software internship",
    "tech intern certificate",
  ],
  sections: [
    {
      id: "culture",
      title: "Intern with us",
      paragraphs: [
        "FluvoSoft is an apps and automation venture studio—we design, ship and run our own products. Our intern program is designed for learners who want real product experience across web, mobile and automation.",
        "Interns work on defined tasks with mentor support, build portfolio-ready outcomes, and learn how a product studio ships software from idea to delivery.",
      ],
    },
    {
      id: "program",
      title: "Program details",
      list: [
        "All open roles are intern positions",
        "Unpaid, task-based work with clear deliverables",
        "6-month duration",
        "Certificate provided upon successful completion",
        "Remote-friendly collaboration with teams in the United States and Bangladesh",
      ],
    },
    {
      id: "values",
      title: "What we look for",
      list: [
        "Strong fundamentals and curiosity about new tools and domains",
        "Willingness to take ownership of assigned tasks through delivery",
        "Clear written communication with teammates",
        "Respect for security, reliability, and maintainable code",
        "Bias toward learning by building useful outcomes",
      ],
    },
    {
      id: "openings",
      title: "Open intern roles",
      subtitle: "Unpaid · Task-based · 6 months · Certificate on completion",
      cards: [
        {
          title: "Full-Stack Engineer Intern",
          description:
            "Support web and API features for SaaS products and client projects using React, Next.js, Node.js, and modern cloud tooling.",
          tag: "Intern · Engineering",
          applyHref: careersApplyMailto("Full-Stack Engineer Intern"),
        },
        {
          title: "Mobile Developer Intern (Flutter)",
          description:
            "Contribute to Easy Invoice and Inventory Stock Tracker on Android with polished UX and reliable offline-first patterns.",
          tag: "Intern · Engineering",
          applyHref: careersApplyMailto("Mobile Developer Intern (Flutter)"),
        },
        {
          title: "Blockchain Developer Intern",
          description:
            "Assist with smart contracts, integrations, and distributed systems for enterprise and Web3 engagements.",
          tag: "Intern · Engineering",
          applyHref: careersApplyMailto("Blockchain Developer Intern"),
        },
        {
          title: "DevOps / Cloud Engineer Intern",
          description:
            "Help with CI/CD, observability, and secure infrastructure for products and client deployments.",
          tag: "Intern · Infrastructure",
          applyHref: careersApplyMailto("DevOps / Cloud Engineer Intern"),
        },
      ],
    },
  ],
  cta: {
    title: "Ready to apply?",
    description:
      "Send your resume, portfolio, or GitHub profile to our CEO. Mention the intern role you are applying for and we will review your application.",
    primary: {
      label: "Apply via email",
      href: careersApplyMailto("FluvoSoft Intern Program"),
    },
    secondary: { label: "Learn about us", href: "/about" },
  },
};

export const careersInternRoles =
  careersPage.sections.find((section) => section.id === "openings")?.cards ?? [];

export const careersProgramDetails =
  careersPage.sections.find((section) => section.id === "program")?.list ?? [];

export const careersCultureParagraphs =
  careersPage.sections.find((section) => section.id === "culture")?.paragraphs ?? [];

export const careersApplyHref = careersApplyMailto("FluvoSoft Intern Program");

export const blogPage: ResourcePageData = {
  slug: "blog",
  title: "Blog",
  description:
    "News, product updates, and engineering notes from the FluvoSoft team.",
  metaDescription:
    "FluvoSoft blog: product launches, engineering tutorials, company news, and perspectives on blockchain, automation, and SaaS.",
  keywords: ["FluvoSoft blog", "software blog", "product updates", "engineering"],
  sections: [
    {
      id: "featured",
      title: "Latest posts",
      cards: [
        {
          title: "Introducing Inventory Stock Tracker on Google Play",
          description:
            "Our new Android app helps small businesses track stock, movements, and alerts—built with the same care as Easy Invoice.",
          href: "/blog/inventory-stock-tracker-google-play",
          tag: "Product",
        },
        {
          title: "Easy Invoice: free invoicing for mobile teams",
          description:
            "Why we built a simple, offline-friendly invoice app and what is next on the roadmap.",
          href: "/blog/easy-invoice-free-mobile-invoicing",
          tag: "Product",
        },
        {
          title: "Five signs your workflow is ready for automation",
          description:
            "Repetitive steps, manual handoffs, and error-prone data entry are signals—not every process needs a bot on day one.",
          href: "/blog/five-signs-workflow-ready-for-automation",
          tag: "Automation",
        },
        {
          title: "What is an app venture studio?",
          description:
            "Why FluvoSoft builds and runs its own apps, and how a small studio ships six products.",
          href: "/blog/what-is-an-app-venture-studio",
          tag: "Company",
        },
        {
          title: "Privacy Policy refresh: clearer language, same commitments",
          description:
            "We updated our policy overview to make data practices easier to understand across web and mobile products.",
          href: "/blog/privacy-policy-refresh",
          tag: "Legal",
        },
        {
          title: "OneThing: a sticky note widget for Android",
          description:
            "Keep one note on your home and lock screen and focus on one task at a time.",
          href: "/blog/onething-sticky-note-widget-android",
          tag: "Product",
        },
        {
          title: "How to convert JPG to PDF without uploading",
          description:
            "Turn images into a PDF privately with TeenyPDF, on the web or Android.",
          href: "/blog/convert-jpg-to-pdf-without-uploading",
          tag: "Guide",
        },
      ],
    },
    {
      id: "subscribe",
      title: "Stay updated",
      paragraphs: [
        "Subscribe on our homepage footer for product launches, blog posts, and event announcements. We keep emails focused and infrequent.",
      ],
    },
  ],
  cta: {
    title: "Have a story idea or guest post?",
    description: "We welcome perspectives from users, partners and builders in our ecosystem.",
    primary: { label: "Contact us", href: "/contact" },
    secondary: { label: "See our products", href: "/#showcase-heading" },
  },
};

export const resourcePages = {
  security: securityPage,
  careers: careersPage,
  blog: blogPage,
} as const;

export type ResourcePageSlug = keyof typeof resourcePages;
