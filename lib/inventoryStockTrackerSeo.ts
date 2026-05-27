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
    "Inventory Stock Tracker is a mobile inventory app for small businesses and shops. Manage products, scan barcodes, record stock in/out, track customers and vendors, and view sales analytics — with cloud sync and offline mode on Android and iOS.",
  shortDescription:
    "Inventory app with barcode scan, stock movements, dashboard analytics, and cloud sync. Free tier plus Pro from $4.99/month.",
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
    "shop inventory app",
    "Zoho Corporation",
    "Zoho Inventory alternative",
  ],
  ogImagePath: "/images/inventory_stock_tracker_logo.png",
  ogImageAlt:
    "Inventory Stock Tracker — mobile inventory and stock management app by FluvoSoft",
  applicationCategory: "BusinessApplication",
  operatingSystems: ["Android", "iOS"],
  softwareVersion: "1.0.0",
  features: [
    "Product catalog with SKU and barcode",
    "Barcode scanner",
    "Stock in, stock out, and adjustments",
    "Customers and vendors",
    "Dashboard sales vs purchases analytics",
    "Cloud sync with offline support",
    "CSV export (Pro)",
    "Low-stock alerts (Pro)",
  ],
  screenshotPaths: [
    "/images/inventory-mockup-dashboard.svg",
    "/images/inventory-mockup-items.svg",
    "/images/inventory-mockup-stock.svg",
    "/images/inventory-mockup-contacts.svg",
  ],
  playStoreUrl: "#",
  appStoreUrl: "#",
  apkUrl: "/downloads/inventory-stock-tracker.apk",
  apkFileName: "inventory-stock-tracker.apk",
  offers: [
    { name: "Free", price: 0 },
    { name: "Pro", price: 4.99, billingPeriod: "MONTH" },
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
