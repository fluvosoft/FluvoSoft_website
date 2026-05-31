export type InventoryStockTrackerFaqCategory =
  | "All"
  | "Account"
  | "Inventory"
  | "Dashboard"
  | "Pro"
  | "General";

export type InventoryStockTrackerFaq = {
  id: string;
  question: string;
  answer: string;
  category: Exclude<InventoryStockTrackerFaqCategory, "All">;
};

export const inventoryStockTrackerFaqCategories: InventoryStockTrackerFaqCategory[] = [
  "All",
  "Account",
  "Inventory",
  "Dashboard",
  "Pro",
  "General",
];

export const inventoryStockTrackerFaqs: InventoryStockTrackerFaq[] = [
  {
    id: "sign-in",
    category: "Account",
    question: "How do I create an account and sign in?",
    answer:
      "Sign up with email and password or Google Sign-In, then verify your email before using the app. Forgot-password and reset flows are built in. Your session stays persisted when you reopen the app, and sign out clears both Firebase and Google sessions.",
  },
  {
    id: "organization",
    category: "Account",
    question: "What is organization setup?",
    answer:
      "After sign-up, set your organization profile with business name, country, and currency. This drives pricing, reports, and dashboard totals. Data syncs to Firebase with offline support — queued changes upload when you are back online.",
  },
  {
    id: "add-items",
    category: "Inventory",
    question: "How do I add and manage products?",
    answer:
      "Add items with image, name, SKU, barcode, category, unit, buy/sell prices, and optional reorder point. Scan barcodes with your camera or search by name, SKU, or barcode. Open any item for pricing, stock history, and profit margin. Record Stock In, Stock Out, and Adjustments from the item page or quick actions.",
  },
  {
    id: "offline",
    category: "General",
    question: "Does it work offline?",
    answer:
      "Yes. Use the app without a connection — add items, record stock movements, and browse your catalog. The app shows “Offline — changes will sync when online” and uploads automatically when connectivity returns.",
  },
  {
    id: "dashboard",
    category: "Dashboard",
    question: "What does the dashboard show?",
    answer:
      "The dashboard summarizes sold and purchased quantities, earnings, spendings, total items, contacts, and current stock value, with a bar chart comparing sales vs. purchases. Free accounts use Last 7 Days; Pro unlocks Today, Last 30 Days, and All Time ranges.",
  },
  {
    id: "contacts",
    category: "Inventory",
    question: "How do customers and vendors work?",
    answer:
      "Add customers and vendors from Contacts, filter by type, sort by name or date, and search by name or phone. Pro users can bulk-import phone contacts as customers or vendors (READ_CONTACTS permission required).",
  },
  {
    id: "activity",
    category: "General",
    question: "What is activity history?",
    answer:
      "Every action is logged — items, stock changes, contacts, and categories — with filters and date grouping. Free accounts see the last 30 days; Pro includes unlimited activity history.",
  },
  {
    id: "settings",
    category: "Account",
    question: "What can I change in Settings?",
    answer:
      "Edit your organization profile, manage categories, and set preferences: show low-stock or zero-stock items on the dashboard, display pricing on item tiles, prevent below-zero stock, and control diagnostics/crash reports. You can send feedback, rate the app, reset data, or delete your account.",
  },
  {
    id: "pro-features",
    category: "Pro",
    question: "What is included in Pro ($4.99/month)?",
    answer:
      "Pro adds CSV export and share, all analytics date ranges, low-stock alerts at reorder points, phone contact import, unlimited activity history, advanced filter/sort/group-by, multi-location (warehouse) tracking per item, and financial reports including profit/loss and stock value by category.",
  },
  {
    id: "pro-plus-features",
    category: "Pro",
    question: "What is included in Pro Plus ($9.99/month)?",
    answer:
      "Pro Plus includes everything in Pro, plus item expiry dates, supplier info, custom notes, professional PDF inventory reports, cloud backup snapshots with restore, advanced analytics (top-selling and slow-moving items, category insights, stock turnover), and bulk multi-select for delete, stock changes, and category reassignment.",
  },
  {
    id: "free-vs-pro",
    category: "Pro",
    question: "Is the free plan enough to get started?",
    answer:
      "Yes. Free includes unlimited items and categories, barcode scanning, stock movements, contacts, cloud sync with offline support, dashboard analytics for the last 7 days, and 30-day activity history. Upgrade to Pro or Pro Plus when you need exports, full analytics, alerts, locations, or PDF/backup tools.",
  },
  {
    id: "platforms",
    category: "General",
    question: "Which platforms are supported?",
    answer:
      "The current release is Android 7.0+ (API 24+), version 1.0.0, package fluvosoft.com. Download the APK from this page for early access while Google Play listing is prepared. Sign in with the same Firebase account to keep inventory in sync across Android devices.",
  },
  {
    id: "download-apk",
    category: "General",
    question: "How do I install the Android APK?",
    answer:
      "Tap Download APK on this page, allow installs from your browser or files app if prompted, then open inventory-stock-tracker.apk. You need Android 7.0 or newer. For production updates, use Restore Purchase in the app after subscribing through Google Play when the store listing goes live.",
  },
];
