export const inventoryStockTrackerScreenshots = {
  home: {
    src: "/images/inventory-app/home.webp",
    alt: "Inventory Stock Tracker home dashboard with summary and analytics",
  },
  items: {
    src: "/images/inventory-app/items.webp",
    alt: "Inventory Stock Tracker items list with search and quick add",
  },
  barCodeScan: {
    src: "/images/inventory-app/bar-code-scan.webp",
    alt: "Inventory Stock Tracker barcode scanner with camera view and scan frame",
  },
  addItem: {
    src: "/images/inventory-app/add-item.webp",
    alt: "Inventory Stock Tracker add item form with SKU, stock, and pricing fields",
  },
  activityLog: {
    src: "/images/inventory-app/activity-log.webp",
    alt: "Inventory Stock Tracker activity log showing recent changes",
  },
  createContact: {
    src: "/images/inventory-app/create-contact.webp",
    alt: "Inventory Stock Tracker create contact screen for customers and vendors",
  },
} as const;

export const inventoryStockTrackerScreenshotList = Object.values(
  inventoryStockTrackerScreenshots
);

/** App logo used in the product hero */
export const inventoryStockTrackerHeroLogo = {
  src: "/images/inventory_stock_tracker_logo.webp",
  alt: "Inventory Stock Tracker app logo by FluvoSoft",
} as const;
