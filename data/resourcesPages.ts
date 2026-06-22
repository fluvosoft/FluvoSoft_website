export interface ResourceCard {
  title: string;
  description: string;
  href?: string;
  tag?: string;
  external?: boolean;
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

export const careersPage: ResourcePageData = {
  slug: "careers",
  title: "Careers",
  description:
    "Join FluvoSoft and help build blockchain, automation, and software products used by businesses worldwide.",
  metaDescription:
    "Careers at FluvoSoft: open roles in engineering, product, and operations. Remote-friendly team based in Dhaka, Bangladesh.",
  keywords: [
    "FluvoSoft careers",
    "software jobs Dhaka",
    "blockchain jobs",
    "remote engineering jobs",
  ],
  sections: [
    {
      id: "culture",
      title: "Work with us",
      paragraphs: [
        "FluvoSoft is a venture catalysts studio—we ship our own products and partner with clients on ambitious technology work. You will work across SaaS, mobile, blockchain, and automation with a team that values craft, ownership, and clear communication.",
        "We are based in Dhaka and collaborate with clients and teammates globally. Whether you prefer deep individual work or cross-functional delivery, there is room to grow your scope as the company grows.",
      ],
    },
    {
      id: "values",
      title: "What we look for",
      list: [
        "Strong fundamentals and curiosity about new tools and domains",
        "Ownership from idea through delivery, including documentation and handoff",
        "Clear written and spoken communication with teammates and clients",
        "Respect for security, reliability, and maintainable code",
        "Bias toward shipping useful outcomes, not perfect abstractions",
      ],
    },
    {
      id: "openings",
      title: "Open roles",
      subtitle: "We are growing across engineering and operations",
      cards: [
        {
          title: "Full-Stack Engineer",
          description:
            "Build and maintain web and API features for SaaS products and client projects using React, Next.js, Node.js, and modern cloud tooling.",
          tag: "Engineering",
        },
        {
          title: "Mobile Developer (Flutter)",
          description:
            "Ship and improve Easy Invoice and Inventory Stock Tracker on Android with polished UX and reliable offline-first patterns.",
          tag: "Engineering",
        },
        {
          title: "Blockchain Developer",
          description:
            "Design smart contracts, integrations, and distributed systems for enterprise and Web3 engagements.",
          tag: "Engineering",
        },
        {
          title: "DevOps / Cloud Engineer",
          description:
            "Own CI/CD, observability, and secure infrastructure for products and client deployments.",
          tag: "Infrastructure",
        },
      ],
    },
  ],
  cta: {
    title: "Interested in joining FluvoSoft?",
    description: "Send your resume, portfolio, or GitHub profile. We review every application and respond when there is a strong fit.",
    primary: { label: "Apply via email", href: "mailto:support@fluvosoft.com?subject=Careers%20at%20FluvoSoft" },
    secondary: { label: "Learn about us", href: "/about" },
  },
};

export const researchPage: ResourcePageData = {
  slug: "research",
  title: "Research",
  description:
    "Insights from FluvoSoft on blockchain, automation, SaaS architecture, and building reliable software at scale.",
  metaDescription:
    "FluvoSoft research and insights on blockchain adoption, workflow automation, SaaS product design, and software engineering practices.",
  keywords: [
    "FluvoSoft research",
    "blockchain insights",
    "automation research",
    "software engineering",
  ],
  sections: [
    {
      id: "focus",
      title: "Research focus areas",
      paragraphs: [
        "We publish practical research drawn from client work and internal product development—not abstract theory. Our notes help teams evaluate technology choices, estimate effort, and avoid common pitfalls.",
      ],
      cards: [
        {
          title: "Enterprise blockchain readiness",
          description:
            "When consortium chains, public networks, or hybrid models make sense for supply chain, finance, and identity use cases.",
          href: "/blockchain",
          tag: "Blockchain",
        },
        {
          title: "Automation ROI modeling",
          description:
            "How to quantify time saved, error reduction, and throughput gains before investing in RPA or AI-assisted workflows.",
          href: "/automation",
          tag: "Automation",
        },
        {
          title: "SaaS multi-tenancy patterns",
          description:
            "Trade-offs between shared schema, isolated tenants, and per-customer deployments for B2B products.",
          href: "/saas",
          tag: "SaaS",
        },
        {
          title: "Mobile offline-first design",
          description:
            "Sync strategies, conflict resolution, and UX patterns for field teams using invoicing and inventory apps.",
          tag: "Mobile",
        },
      ],
    },
    {
      id: "publications",
      title: "Recent publications",
      cards: [
        {
          title: "From hackathon prototype to production SaaS",
          description:
            "Lessons from shipping Easy Invoice and Inventory Stock Tracker—from MVP scope to store launch and user feedback loops.",
          tag: "Case study",
        },
        {
          title: "Security checklist for early-stage products",
          description:
            "Minimum viable controls for startups and internal tools before a full compliance program is in place.",
          href: "/security",
          tag: "Security",
        },
        {
          title: "Custom vs. configurable software",
          description:
            "A decision matrix for teams choosing between bespoke builds, low-code, and packaged platforms.",
          href: "/custom-development",
          tag: "Strategy",
        },
      ],
    },
  ],
  cta: {
    title: "Collaborate on research",
    description: "Partners and clients can co-author case studies or request deep dives on specific technology decisions.",
    primary: { label: "Get in touch", href: "/contact" },
    secondary: { label: "Read our blog", href: "/blog" },
  },
};

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
          href: "/inventory-stock-tracker",
          tag: "Product",
        },
        {
          title: "Easy Invoice: free invoicing for mobile teams",
          description:
            "Why we built a simple, offline-friendly invoice app and what is next on the roadmap.",
          href: "/easy-invoice",
          tag: "Product",
        },
        {
          title: "Five signs your workflow is ready for automation",
          description:
            "Repetitive steps, manual handoffs, and error-prone data entry are signals—not every process needs a bot on day one.",
          href: "/automation",
          tag: "Automation",
        },
        {
          title: "What we mean by venture catalysts studio",
          description:
            "How FluvoSoft combines product building, client delivery, and long-term technology partnerships.",
          href: "/about",
          tag: "Company",
        },
        {
          title: "Privacy Policy refresh: clearer language, same commitments",
          description:
            "We updated our policy overview to make data practices easier to understand across web and mobile products.",
          href: "/privacy",
          tag: "Legal",
        },
        {
          title: "Building secure APIs for SaaS and client platforms",
          description:
            "Authentication, validation, rate limits, and observability patterns we use across engagements.",
          href: "/security",
          tag: "Engineering",
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
    description: "We welcome perspectives from partners, clients, and builders in our ecosystem.",
    primary: { label: "Contact us", href: "/contact" },
    secondary: { label: "Read research", href: "/research" },
  },
};

export const resourcePages = {
  security: securityPage,
  careers: careersPage,
  research: researchPage,
  blog: blogPage,
} as const;

export type ResourcePageSlug = keyof typeof resourcePages;
