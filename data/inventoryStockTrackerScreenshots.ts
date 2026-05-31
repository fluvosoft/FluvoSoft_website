export const inventoryStockTrackerScreenshots = {
  items: {
    src: "/images/inventory-app/items.png",
    alt: "Inventory Stock Tracker items screen with search, barcode scan, and add new item",
    caption: "Items",
  },
  addItem: {
    src: "/images/inventory-app/add-item.png",
    alt: "Inventory Stock Tracker add item form with SKU, stock, and pricing fields",
    caption: "Add item",
  },
  premium: {
    src: "/images/inventory-app/premium.png",
    alt: "Inventory Stock Tracker unlock premium screen with Pro and Pro Plus plans",
    caption: "Pro plans",
  },
  settings: {
    src: "/images/inventory-app/settings.png",
    alt: "Inventory Stock Tracker settings with export, reports, and backup options",
    caption: "Settings",
  },
} as const;

export const inventoryStockTrackerScreenshotList = Object.values(
  inventoryStockTrackerScreenshots
);

/** App logo used in the product hero */
export const inventoryStockTrackerHeroLogo = {
  src: "/images/inventory_stock_tracker_logo.png",
  alt: "Inventory Stock Tracker app logo by FluvoSoft",
} as const;
