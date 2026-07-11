export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  publishedAt: string;
  readingTime: string;
  metaDescription: string;
  keywords: string[];
  relatedHref?: string;
  relatedLabel?: string;
  sections: BlogPostSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "inventory-stock-tracker-google-play",
    title: "Introducing Inventory Stock Tracker on Google Play",
    description:
      "Our new Android app helps small businesses track stock, movements, and alerts—built with the same care as Easy Invoice.",
    tag: "Product",
    publishedAt: "2026-06-15",
    readingTime: "9 min read",
    metaDescription:
      "Inventory Stock Tracker by FluvoSoft: Android inventory app for small businesses. Track stock, barcode scanning, Firebase sync, and offline mode. Learn features, pricing, and how to get started.",
    keywords: [
      "Inventory Stock Tracker",
      "inventory app Android",
      "stock management app",
      "barcode inventory tracker",
      "small business inventory software",
      "FluvoSoft inventory",
      "offline inventory app",
      "Firebase inventory sync",
    ],
    relatedHref: "/inventory-stock-tracker",
    relatedLabel: "View Inventory Stock Tracker",
    sections: [
      {
        heading: "Why inventory still breaks small teams",
        paragraphs: [
          "Many shops and warehouses still rely on notebooks, spreadsheets, or memory. That works until a busy week arrives: a missed stock-out, a duplicated order, or a mismatch between what the shelf shows and what the spreadsheet claims. Inventory Stock Tracker was built for those moments—when owners need a clear, mobile-first record of what they have, what moved, and what needs attention.",
          "FluvoSoft already ships Easy Invoice for freelancers and small businesses who need professional invoices without a subscription wall. Inventory Stock Tracker extends that same product philosophy into operations: practical tools, readable screens, and workflows that survive spotty connectivity.",
        ],
      },
      {
        heading: "What Inventory Stock Tracker does",
        paragraphs: [
          "The app is designed for Android 7.0 and newer. You can manage unlimited items, scan barcodes, record stock in and out, track customers and vendors, and review activity on a dashboard. Cloud sync with Firebase keeps data aligned across devices, while an offline queue stores changes when the network drops and uploads them when you reconnect.",
          "For growing shops, the difference between “we think we have stock” and “we know we have stock” is cash flow. Alerts and clear movement history reduce guesswork. Whether you run a retail counter, a warehouse bay, or a multi-SKU home business, the goal is the same: fewer surprises and a single source of truth on your phone.",
        ],
      },
      {
        heading: "Built for real-world Android use",
        paragraphs: [
          "Mobile inventory tools fail when they assume perfect Wi‑Fi, perfect barcode scanners, and perfect data entry habits. We designed Inventory Stock Tracker around imperfect conditions: busy floors, shared devices, and mixed online/offline days. Offline mode is not a footnote—it is part of the core workflow so stock movements are not lost when coverage dips.",
          "Barcode scanning speeds intake and picking. Dashboard analytics surface movement patterns without forcing owners into a desktop BI tool. Customer and vendor records keep purchasing and fulfillment context next to the stock ledger, which matters when a supplier delay or a VIP order changes priorities mid-day.",
        ],
      },
      {
        heading: "Pricing, Play Store access, and next steps",
        paragraphs: [
          "Teams can start with the free experience and upgrade to Pro or Pro Plus when they need more capacity and features. The Google Play listing is the preferred path for updates and installs. If you are evaluating inventory software for a small business, start by mapping your top SKUs, your busiest stock-in/stock-out moments, and who on the team needs access.",
          "Inventory Stock Tracker sits alongside FluvoSoft’s broader stack—invoicing, automation consulting, and custom development—so operations data can eventually connect to how you get paid and how you scale. Explore the product page for feature details, FAQ answers, and download options, then install from Google Play when you are ready to run your first stock session.",
        ],
      },
    ],
  },
  {
    slug: "easy-invoice-free-mobile-invoicing",
    title: "Easy Invoice: free invoicing for mobile teams",
    description:
      "Why we built a simple, offline-friendly invoice app and what is next on the roadmap.",
    tag: "Product",
    publishedAt: "2026-05-20",
    readingTime: "10 min read",
    metaDescription:
      "Easy Invoice by FluvoSoft is a free Android and web invoice app for small businesses and freelancers. Templates, PDF export, payment tracking, and cloud sync—no subscription required.",
    keywords: [
      "Easy Invoice",
      "free invoice app",
      "free invoice app Android",
      "mobile invoicing app",
      "PDF invoice maker",
      "invoice template app",
      "small business invoice app",
      "FluvoSoft Easy Invoice",
      "invoice app no subscription",
    ],
    relatedHref: "/easy-invoice",
    relatedLabel: "Try Easy Invoice",
    sections: [
      {
        heading: "Invoicing should not require a subscription",
        paragraphs: [
          "Freelancers and small businesses often face a false choice: stay in Word or Excel and look unprofessional, or pay monthly for tools with features they never use. Easy Invoice exists to close that gap. It is a free mobile and web invoicing app from FluvoSoft with professional templates, PDF export, payment tracking, and cloud sync—without a subscription wall for core use.",
          "We built Easy Invoice for people who create invoices in the field, between client visits, or late at night after a project wraps. The product prioritizes speed: pick a template, add line items, export a PDF, and share. Status tracking (draft, sent, paid, overdue) keeps receivables visible without turning your phone into a full accounting suite.",
        ],
      },
      {
        heading: "Templates, PDFs, and workflows that travel",
        paragraphs: [
          "Twenty professional templates give a polished first impression across industries. Live preview and server-rendered HTML help you trust what clients will see before you send. PDF download and share cover the last mile: WhatsApp, email, or file handoff. Currency options and regional payment methods (including Cash, Bank transfer, Card, Bkash, Nagad, PayPal, and Other) reflect how teams actually get paid in markets like Bangladesh and beyond.",
          "Cloud sync and Firebase-backed storage keep invoice libraries organized across devices. Offline-friendly patterns matter when connectivity is unreliable. Email and Google Sign-In cover account setup; session persistence means you spend less time logging back in and more time closing invoices.",
        ],
      },
      {
        heading: "Android, web, and Google Play",
        paragraphs: [
          "Easy Invoice is available on Android and as a web experience at easyinvoice.fluvosoft.com. The Google Play listing is the recommended install path for Android users. Product pages on fluvosoft.com explain features, FAQ answers, and privacy practices so you can evaluate the app before creating an account.",
          "Roadmap work continues on polish, reliability, and clarity—not feature bloat. We care about template quality, sync resilience, and invoice status hygiene because those are the moments that decide whether a freelancer gets paid this week.",
        ],
      },
      {
        heading: "Who Easy Invoice is for",
        paragraphs: [
          "If you are a freelancer, consultant, shop owner, or small agency that needs professional invoices without enterprise pricing, Easy Invoice is built for you. If you need deep accounting, payroll, or multi-entity consolidation, you may still want a heavier system later—but you should not need that weight to send your first clean invoice today.",
          "Start on Google Play or the web version, set up your shop profile, choose a template, and create a draft. Pair it with Inventory Stock Tracker when stock and sales need to move together. FluvoSoft’s goal is simple: tools that help small businesses look professional and stay in control of cash flow.",
        ],
      },
    ],
  },
  {
    slug: "five-signs-workflow-ready-for-automation",
    title: "Five signs your workflow is ready for automation",
    description:
      "Repetitive steps, manual handoffs, and error-prone data entry are signals—not every process needs a bot on day one.",
    tag: "Automation",
    publishedAt: "2026-04-28",
    readingTime: "11 min read",
    metaDescription:
      "Learn five practical signs your business workflow is ready for automation: repetitive tasks, manual handoffs, error-prone data entry, delayed reporting, and scaling bottlenecks. FluvoSoft automation consulting guidance.",
    keywords: [
      "business process automation",
      "workflow automation",
      "automation consulting",
      "signs you need automation",
      "RPA for small business",
      "FluvoSoft automation",
      "process improvement software",
      "reduce manual work",
    ],
    relatedHref: "/automation",
    relatedLabel: "Explore Automation",
    sections: [
      {
        heading: "Automation is a diagnosis, not a trend",
        paragraphs: [
          "Teams often ask for “automation” when what they feel is friction: delayed approvals, copy-paste between tools, or reports that take a full day to assemble. The right response is not to bolt a bot onto every step. The right response is to recognize patterns that mean a process is ready for structured change—and to start where ROI is clearest.",
          "FluvoSoft helps organizations design automation that fits real constraints: legacy systems, human approvals that must stay human, and data that is messy before it is machine-readable. Below are five signs we look for in discovery workshops.",
        ],
      },
      {
        heading: "1. The same steps repeat every day with little judgment",
        paragraphs: [
          "If a teammate can describe a weekly process as a fixed checklist—export file, rename columns, upload, notify Slack, update spreadsheet—automation is usually viable. High repetition plus low ambiguity is the classic automation sweet spot. Capture the checklist, measure time spent, and estimate error rate before you write a single integration.",
          "Be careful with processes that look repetitive but hide exceptions every third run. Those need decision rules documented first, or humans stay in the loop by design.",
        ],
      },
      {
        heading: "2. Handoffs depend on memory, email, or chat pings",
        paragraphs: [
          "When work dies in someone’s inbox, automation and workflow tooling can enforce status, owners, and SLAs. The goal is not to remove people—it is to remove “Did you see my email?” as the operating system. Structured queues, notifications, and audit trails beat tribal knowledge.",
          "This is especially common in client services, fulfillment, and finance ops where multiple roles touch the same case. A visible state machine (new → in progress → waiting → done) often delivers more value than a flashy AI demo.",
        ],
      },
      {
        heading: "3. Data entry errors create expensive rework",
        paragraphs: [
          "Duplicate invoices, mistyped quantities, and mismatched IDs are not “people problems” alone—they are interface and validation problems. Automation can validate, transform, and reconcile before data lands in a system of record. Pair that with clear ownership when exceptions fire.",
          "If your team spends more time fixing data than analyzing it, prioritize validation and integration quality over new dashboards.",
        ],
      },
      {
        heading: "4. Reporting is always late and always manual",
        paragraphs: [
          "When leadership asks for numbers and someone rebuilds a spreadsheet from five exports, you have a reporting automation candidate. Scheduled extracts, warehouse syncs, and standardized metrics reduce scramble. Start with one trusted weekly report before attempting a full analytics platform.",
          "Late reporting also hides operational risk. If you only learn about stockouts or overdue invoices at month-end, automation that surfaces those signals earlier is worth more than prettier charts.",
        ],
      },
      {
        heading: "5. Growth makes the current process break",
        paragraphs: [
          "A process that works at ten orders a day may collapse at fifty. If hiring is the only way you scale a workflow, ask whether parts of the work are rules-based. Automation is often cheaper than another headcount for pure throughput tasks—and it frees people for judgment-heavy work.",
          "Ready does not mean automate everything. It means pick one high-friction path, measure baseline time and error, implement a controlled change, and expand. FluvoSoft’s automation practice focuses on that discipline: discovery, prioritization, implementation, and handoff so your team owns the system after go-live.",
        ],
      },
    ],
  },
  {
    slug: "what-we-mean-by-venture-catalysts-studio",
    title: "What we mean by venture catalysts studio",
    description:
      "How FluvoSoft combines product building, client delivery, and long-term technology partnerships.",
    tag: "Company",
    publishedAt: "2026-03-18",
    readingTime: "8 min read",
    metaDescription:
      "FluvoSoft is a venture catalysts studio: we ship SaaS products like Easy Invoice, deliver custom software and blockchain solutions, and partner with businesses for long-term technology growth.",
    keywords: [
      "venture catalysts studio",
      "FluvoSoft",
      "software studio",
      "product studio",
      "custom software development company",
      "SaaS product studio",
      "blockchain development partner",
      "technology consulting studio",
    ],
    relatedHref: "/about",
    relatedLabel: "About FluvoSoft",
    sections: [
      {
        heading: "Not only an agency. Not only a product company.",
        paragraphs: [
          "FluvoSoft describes itself as a venture catalysts studio because the work spans both sides of modern software: we build and ship our own products, and we partner with clients on ambitious delivery. Agencies often stop at project handoff. Pure product companies often ignore bespoke enterprise needs. We sit in the middle on purpose.",
          "That dual motion shapes culture and hiring. Engineers learn from real users of Easy Invoice and Inventory Stock Tracker while also solving client constraints in blockchain, automation, SaaS, and custom development. The result is a studio that stays sharp on craft and grounded in commercial outcomes.",
        ],
      },
      {
        heading: "Products as proof, services as partnership",
        paragraphs: [
          "Shipping products forces accountability: release quality, support, privacy, store listings, and roadmap honesty. Those muscles transfer to client work. When we propose an architecture or a delivery plan, it is informed by systems we operate ourselves—not only slide decks.",
          "Client engagements, in turn, expose new domains and scale problems that feed product insight. A warehouse automation conversation may sharpen how we think about inventory UX. A SaaS security review may harden defaults across our stack. Catalyst means we accelerate both the client’s venture and our own.",
        ],
      },
      {
        heading: "How we work with teams",
        paragraphs: [
          "Partnerships start with clarity: goals, constraints, success metrics, and what “done” means for the first milestone. We favor shipping working software in iterations over multi-month big bangs. Documentation, security practices, and maintainable code are part of delivery—not optional extras.",
          "Whether you need a mobile invoice app recommendation, a blockchain proof of concept, or a custom platform, the studio model means you get a team that thinks in products and systems. Explore About FluvoSoft for mission, leadership, and values—and Contact us when you are ready to start a conversation.",
        ],
      },
      {
        heading: "Where we are headed",
        paragraphs: [
          "We continue investing in FluvoSoft Lab and R&D so experiments can become products. We continue serving clients who need reliable engineering partners. And we keep the bar high on communication: clear writing, honest estimates, and outcomes you can measure.",
          "Venture catalysts is not a slogan. It is how we choose work, how we structure teams, and how we decide what to build next.",
        ],
      },
    ],
  },
  {
    slug: "privacy-policy-refresh",
    title: "Privacy Policy refresh: clearer language, same commitments",
    description:
      "We updated our policy overview to make data practices easier to understand across web and mobile products.",
    tag: "Legal",
    publishedAt: "2026-02-10",
    readingTime: "7 min read",
    metaDescription:
      "FluvoSoft Privacy Policy refresh: clearer language on data collection, Firebase usage, account deletion, and privacy rights for Easy Invoice, Inventory Stock Tracker, and fluvosoft.com.",
    keywords: [
      "FluvoSoft privacy policy",
      "app privacy policy",
      "data protection software company",
      "Easy Invoice privacy",
      "mobile app privacy",
      "account deletion request",
      "Firebase privacy",
      "user data rights",
    ],
    relatedHref: "/privacy",
    relatedLabel: "Read Privacy Policy",
    sections: [
      {
        heading: "Why we refreshed the language",
        paragraphs: [
          "Privacy pages often read like they were written for lawyers first and users second. FluvoSoft’s Privacy Policy refresh keeps the same core commitments—protect personal data, explain what we collect, and honor deletion and access requests—while making the overview easier to scan for people using Easy Invoice, Inventory Stock Tracker, and the company website.",
          "Clearer language is a product decision. Users should understand authentication data, analytics, cloud storage, and how to contact support without decoding dense clauses. Transparency builds trust for free apps and paid upgrades alike.",
        ],
      },
      {
        heading: "What did not change",
        paragraphs: [
          "Our commitments remain: collect what we need to operate products, secure data in transit and at rest where applicable, limit access internally, and provide paths to ask questions or request account deletion. Product-specific details for Easy Invoice and other apps continue to explain Firebase authentication, Realtime Database or Firestore storage, and related infrastructure.",
          "If your app version includes in-app account deletion in Settings, you may use that path. You can also email support@fluvosoft.com from the address linked to your account. We want deletion and privacy questions to be actionable, not theoretical.",
        ],
      },
      {
        heading: "How to read the policy as a user",
        paragraphs: [
          "Start with the overview sections: what data we collect, why we collect it, how long we retain it, and who we share it with (for example cloud providers required to run the service). Then read product-specific notes if you use a particular FluvoSoft app. Finally, note the contact channel for privacy requests.",
          "Security practices—encryption, access control, secure development—are covered on our Security page and complement the Privacy Policy. Privacy says what we do with data; security describes how we protect systems that hold it.",
        ],
      },
      {
        heading: "What to do if you have a question",
        paragraphs: [
          "Email support@fluvosoft.com for privacy questions, data requests, or concerns about a specific product. Include the email on your account and which app or site page you are referring to so we can respond accurately.",
          "We will keep refining clarity as products evolve. The goal is simple: you should never need a law degree to understand how FluvoSoft handles your information.",
        ],
      },
    ],
  },
  {
    slug: "building-secure-apis-saas-client-platforms",
    title: "Building secure APIs for SaaS and client platforms",
    description:
      "Authentication, validation, rate limits, and observability patterns we use across engagements.",
    tag: "Engineering",
    publishedAt: "2026-01-22",
    readingTime: "12 min read",
    metaDescription:
      "Engineering guide from FluvoSoft: secure API design for SaaS and client platforms—authentication, input validation, rate limiting, observability, and secure development practices.",
    keywords: [
      "secure API design",
      "SaaS API security",
      "API authentication best practices",
      "rate limiting APIs",
      "API validation",
      "observability for APIs",
      "FluvoSoft engineering",
      "secure software development",
    ],
    relatedHref: "/security",
    relatedLabel: "Read Security practices",
    sections: [
      {
        heading: "APIs are the attack surface and the product",
        paragraphs: [
          "Modern SaaS and client platforms expose value through APIs: mobile apps, partner integrations, web dashboards, and background jobs all depend on them. That makes API security inseparable from product quality. A broken auth check is a data breach; a missing rate limit is an outage; silent failures without logs are unsolvable incidents.",
          "At FluvoSoft we treat secure API design as a default for Easy Invoice backends, Inventory Stock Tracker services, and client platforms. Below are patterns we reuse: authentication, validation, rate limiting, and observability—paired with process habits from our Security page.",
        ],
      },
      {
        heading: "Authentication and authorization",
        paragraphs: [
          "Prefer proven providers and protocols over homemade crypto. Use short-lived tokens where appropriate, enforce HTTPS, and separate authentication (who you are) from authorization (what you can do). Role-based checks belong on the server—never only in the client UI.",
          "For user-facing apps, session persistence must still revoke correctly on password reset or account deletion. For service-to-service calls, use scoped credentials and rotate secrets. Least privilege is not optional when one compromised key can read an entire collection.",
        ],
      },
      {
        heading: "Validation and abuse resistance",
        paragraphs: [
          "Validate every input at the boundary: types, lengths, enums, and business rules. Reject early with clear errors that do not leak internals. Honeypot fields and minimum form timing can reduce obvious bot noise on public endpoints without harming real users.",
          "Rate limits per IP and per user protect expensive operations—login, password reset, contact forms, and report generation. Combine limits with monitoring so you see spikes before users feel them. Idempotency keys help when clients retry payments or create resources under flaky networks.",
        ],
      },
      {
        heading: "Observability and incident readiness",
        paragraphs: [
          "Logs, metrics, and traces turn “it feels slow” into actionable signals. Correlate request IDs across services. Alert on error rates and latency, not only on absolute downtime. Document how to rotate keys, revoke sessions, and communicate during an incident.",
          "Secure development lifecycle habits—code review, dependency monitoring, environment separation—reduce the chance that a vulnerable library or a debug endpoint reaches production. Security is continuous, not a one-time audit.",
        ],
      },
      {
        heading: "Apply this to your next SaaS milestone",
        paragraphs: [
          "If you are shipping a new API surface, checklist auth, validation, rate limits, and observability before marketing launch. If you already have traffic, start with the highest-risk endpoints: authentication, file upload, admin actions, and anything that touches PII or payments.",
          "FluvoSoft can help design and implement these patterns as part of custom development or SaaS engagements. Read our Security overview for company practices, then contact us if you want a concrete review of your API surface.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
