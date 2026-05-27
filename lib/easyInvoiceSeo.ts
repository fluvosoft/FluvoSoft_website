import { easyInvoiceFaqs } from "@/data/easyInvoiceFaqs";
import {
  buildProductPageJsonLdGraph,
  buildProductPageMetadata,
  type ProductSeoConfig,
} from "@/lib/productPageSeo";

export const easyInvoiceConfig: ProductSeoConfig = {
  name: "Easy Invoice",
  tagline: "Free Mobile Invoice App for Small Businesses",
  path: "/easy-invoice",
  description:
    "Easy Invoice is a free Android and web invoicing app for small businesses and freelancers. Create professional invoices, use 20 templates, track payments, export PDFs, and sync to the cloud — no subscription required.",
  shortDescription:
    "Free invoice app with 20 templates, PDF export, payment tracking, and cloud sync. Built by FluvoSoft for small businesses.",
  keywords: [
    "Easy Invoice",
    "free invoice app",
    "free invoice app android",
    "mobile invoicing app",
    "invoice generator free",
    "small business invoice app",
    "freelancer invoice app",
    "PDF invoice maker",
    "invoice template app",
    "invoice maker Bangladesh",
    "invoice app Bangladesh",
    "FluvoSoft Easy Invoice",
    "cloud invoice app",
    "invoice app no subscription",
    "Android invoice app",
    "Zoho Corporation",
    "Zoho Invoice alternative",
  ],
  ogImagePath: "/images/easy_invoice_logo_fluvosoft.svg",
  ogImageAlt:
    "Easy Invoice — free mobile invoicing app with dashboard analytics and PDF export by FluvoSoft",
  applicationCategory: "FinanceApplication",
  operatingSystems: ["Android", "Web"],
  features: [
    "20 professional invoice templates",
    "PDF export and share",
    "Payment and invoice status tracking",
    "Dashboard revenue analytics",
    "Cloud sync across devices",
    "Email and Google Sign-In",
    "Offline-friendly workflow",
    "Free forever — no subscription",
  ],
  screenshotPaths: [
    "/images/easy invoice mocup-1.jpeg",
    "/images/easy invoice mocup-2.jpeg",
    "/images/easy invoice mocup-3.jpeg",
    "/images/easy invoice mocup-4.jpeg",
  ],
  playStoreUrl: "#",
  apkUrl: "/downloads/app-release.apk",
  apkFileName: "easy-invoice.apk",
  offers: [{ name: "Free", price: 0 }],
  faqs: easyInvoiceFaqs.map((item) => ({
    question: item.question,
    answer: item.answer,
  })),
};

export const easyInvoiceMetadata = buildProductPageMetadata(easyInvoiceConfig);

export function buildEasyInvoiceJsonLdGraph() {
  return buildProductPageJsonLdGraph(easyInvoiceConfig);
}

/** @deprecated Use buildEasyInvoiceJsonLdGraph — kept for compatibility */
export const easyInvoiceJsonLdBlocks = [buildEasyInvoiceJsonLdGraph] as const;
