export interface LatestRelease {
  id: string;
  name: string;
  tag: string;
  headline: string;
  description: string;
  bullets: string[];
  href: string;
  image: string;
  imageAlt: string;
  cta: string;
  imageAspect?: string;
  imageScale?: string;
  imageContainerClass?: string;
  display?: "image" | "phone-mockup";
  mockup?: "easy-invoice" | "inventory";
  phoneMockupWidth?: number;
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
    image: "/images/inventory-app/home.png",
    imageAlt: "Inventory Stock Tracker app home screen",
    cta: "View product",
    display: "phone-mockup",
    mockup: "inventory",
    phoneMockupWidth: 230,
    imageContainerClass: "min-h-[260px] lg:min-h-[300px]",
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
    image: "/images/easy invoice mocup-3.jpeg",
    imageAlt: "Easy Invoice create invoice screen on mobile",
    cta: "View product",
    display: "phone-mockup",
    phoneMockupWidth: 190,
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
    image: "/images/easy-invoice-web-dashboard.png",
    imageAlt: "Easy Invoice web dashboard at easyinvoice.fluvosoft.com",
    cta: "Try web version",
    external: true,
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
    image: "/images/fluvo_logo.png",
    imageAlt: "SANDBOX by FluvoSoft",
    cta: "Try SANDBOX",
    external: true,
  },
];
