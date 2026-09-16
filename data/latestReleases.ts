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
  secondaryCta?: {
    label: string;
    href: string;
    external?: boolean;
  };
}

export const latestReleases: LatestRelease[] = [
  {
    id: "teenypdf",
    name: "TeenyPDF",
    tag: "New release",
    headline: "Free Private PDF Tools. No Upload.",
    description:
      "Browser-based PDF toolkit to convert, edit, compress, and merge documents. Files stay on your device—100% private.",
    bullets: ["No upload", "Edit & convert", "Mobile + web"],
    href: "https://www.teenypdf.com/",
    logo: "/teenypdf/teenypdf_logo.png",
    logoAlt: "TeenyPDF logo",
    logoWidth: 1024,
    logoHeight: 1024,
    cta: "Try TeenyPDF",
    external: true,
    logoClassName: "h-24 w-24 md:h-28 md:w-28",
    secondaryCta: {
      label: "Try Mobile App",
      href: "https://play.google.com/store/apps/details?id=com.teenypdf.www",
      external: true,
    },
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
    logo: "/images/easy_invoice_logo.webp",
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
    logo: "/images/easy_invoice_logo.webp",
    logoAlt: "Easy Invoice web app logo",
    logoWidth: 142,
    logoHeight: 63,
    cta: "Try web version",
    external: true,
    logoClassName: "h-16 w-auto md:h-20",
  },
];
