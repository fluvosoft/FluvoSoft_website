export interface LatestRelease {
  id: string;
  name: string;
  tag: string;
  headline: string;
  description: string;
  bullets: string[];
  href: string;
  logo: string;
  logoAlt: string;
  logoWidth?: number;
  logoHeight?: number;
  cta: string;
  logoClassName?: string;
  external?: boolean;
}

export const latestReleases: LatestRelease[] = [
  {
    id: "inventory-stock-tracker",
    name: "Inventory Stock Tracker",
    tag: "New release",
    headline: "Track Stock. Grow Your Business.",
    description:
      "Android inventory app with barcode scan, stock in/out, cloud sync, and offline mode for shops and warehouses.",
    bullets: ["Barcode scan", "Cloud + offline", "Live dashboard"],
    href: "/inventory-stock-tracker",
    logo: "/images/inventory_stock_tracker_logo.png",
    logoAlt: "Inventory Stock Tracker app logo",
    cta: "View product",
    logoClassName: "h-24 w-24 md:h-28 md:w-28",
  },
  {
    id: "easy-invoice-mobile",
    name: "Easy Invoice",
    tag: "Mobile app",
    headline: "Invoice in Seconds. Get Paid Faster.",
    description:
      "Free invoicing app for small businesses. Create invoices, use templates, track payments, and export PDFs.",
    bullets: ["20 templates", "PDF export", "Free forever"],
    href: "/easy-invoice",
    logo: "/images/easy_invoice_logo.png",
    logoAlt: "Easy Invoice app logo",
    logoWidth: 142,
    logoHeight: 63,
    cta: "View product",
    logoClassName: "h-16 w-auto md:h-20",
  },
  {
    id: "easy-invoice-web",
    name: "Easy Invoice",
    tag: "Web app",
    headline: "The only invoicing dashboard you'll ever need.",
    description:
      "Track revenue, monitor payments, and manage clients from one beautiful command center at easyinvoice.fluvosoft.com.",
    bullets: ["Analytics dashboard", "20+ templates", "Free to start"],
    href: "https://easyinvoice.fluvosoft.com/",
    logo: "/images/easy_invoice_logo.png",
    logoAlt: "Easy Invoice web app logo",
    logoWidth: 142,
    logoHeight: 63,
    cta: "Try web version",
    external: true,
    logoClassName: "h-16 w-auto md:h-20",
  },
  {
    id: "sandbox",
    name: "SANDBOX",
    tag: "Web app",
    headline: "Honest Startup Feedback. No Sugar-Coating.",
    description:
      "Paste your website or app store URL and get blunt, useful feedback from founders who have been there.",
    bullets: ["Startup reviews", "URL feedback", "Open source"],
    href: "https://www.sandboxbd.com/",
    logo: "/images/sandbox_logo.png",
    logoAlt: "SANDBOXBD logo",
    logoWidth: 446,
    logoHeight: 146,
    cta: "Try SANDBOX",
    external: true,
    logoClassName: "h-14 w-auto md:h-16",
  },
];
