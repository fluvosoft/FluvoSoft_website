import { inventoryStockTrackerFaqs } from "@/data/inventoryStockTrackerFaqs";
import {
  buildProductPageJsonLdGraph,
  buildProductPageMetadata,
  type ProductSeoConfig,
} from "@/lib/productPageSeo";

export const inventoryStockTrackerConfig: ProductSeoConfig = {
  name: "Inventory Stock Tracker",
  tagline: "Mobile Inventory & Stock Management App",
  path: "/inventory-stock-tracker",
  description:
    "Inventory Stock Tracker is a Flutter inventory app for shops and warehouses (Android 7+). Manage unlimited items, scan barcodes, record stock in/out, track customers and vendors, and view dashboard analytics — with Firebase cloud sync and offline mode. Download the APK or upgrade to Pro ($4.99/mo) or Pro Plus ($9.99/mo).",
  shortDescription:
    "Android inventory app v1.0.0 with barcode scan, cloud sync, and offline mode. Free tier, Pro $4.99/mo, Pro Plus $9.99/mo.",
  keywords: [
    "Inventory Stock Tracker",
    "inventory app android",
    "inventory app iOS",
    "stock tracker app",
    "small business inventory app",
    "barcode inventory app",
    "warehouse stock management",
    "stock in stock out app",
    "inventory management Bangladesh",
    "FluvoSoft inventory app",
    "cloud inventory app",
    "offline inventory app",
    "inventory app with barcode scanner",
    "inventory stock tracker apk download",
    "fluvosoft.com inventory app",
    "shop inventory app",
    "Zoho Corporation",
    "Zoho Inventory alternative",
  ],
  ogImagePath: "/images/inventory_stock_tracker_logo.png",
  ogImageAlt:
    "Inventory Stock Tracker — mobile inventory and stock management app by FluvoSoft",
  applicationCategory: "BusinessApplication",
  operatingSystems: ["Android 7.0+"],
  softwareVersion: "1.0.0",
  features: [
    "Unlimited items, categories, and stock movements (Free)",
    "Barcode scanner with camera",
    "Stock in, stock out, adjustments, and stock history",
    "Customers and vendors with search and filters",
    "Dashboard: sold/purchased quantities, earnings, spendings, stock value",
    "Analytics bar chart — Last 7 Days on Free; all ranges on Pro",
    "Firebase cloud sync with offline queue",
    "Activity history — 30 days Free; unlimited on Pro",
    "CSV export, low-stock alerts, multi-location, financial reports (Pro)",
    "PDF reports, cloud backup, advanced analytics, bulk ops (Pro Plus)",
  ],
  screenshotPaths: [
    "/images/inventory-app/home.png",
    "/images/inventory-app/items.png",
    "/images/inventory-app/bar-code-scan.png",
    "/images/inventory-app/add-item.png",
    "/images/inventory-app/activity-log.png",
    "/images/inventory-app/create-contact.png",
  ],
  playStoreUrl: "#",
  appStoreUrl: "#",
  apkUrl: "/downloads/inventory-stock-tracker.apk",
  apkFileName: "inventory-stock-tracker.apk",
  offers: [
    { name: "Free", price: 0 },
    { name: "Pro", price: 4.99, billingPeriod: "MONTH" },
    { name: "Pro Plus", price: 9.99, billingPeriod: "MONTH" },
  ],
  faqs: inventoryStockTrackerFaqs.map((item) => ({
    question: item.question,
    answer: item.answer,
  })),
};

export const inventoryStockTrackerMetadata =
  buildProductPageMetadata(inventoryStockTrackerConfig);

export function buildInventoryStockTrackerJsonLdGraph() {
  return buildProductPageJsonLdGraph(inventoryStockTrackerConfig);
}

/** @deprecated Use buildInventoryStockTrackerJsonLdGraph */
export const inventoryStockTrackerJsonLdBlocks = [
  buildInventoryStockTrackerJsonLdGraph,
] as const;
