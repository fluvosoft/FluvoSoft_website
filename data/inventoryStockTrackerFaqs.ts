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
      "Sign up with email and password or Google Sign-In. Verify your email before using the app. Forgot-password and reset flows are built in, and your session stays persisted when you reopen the app. Sign out clears both Firebase and Google sessions.",
  },
  {
    id: "organization",
    category: "Account",
    question: "What is organization setup?",
    answer:
      "After sign-up, set your organization profile with business name, country, and currency. This drives pricing, reports, and dashboard totals. Your data syncs to the cloud with offline support — changes upload when you are back online.",
  },
  {
    id: "add-items",
    category: "Inventory",
    question: "How do I add and manage products?",
    answer:
      "Add items with image, name, SKU, barcode, category, unit, and buy/sell prices. Scan barcodes with your phone camera or search by name, SKU, or barcode. Open any item for pricing, stock history, and profit margin. Record Stock In, Stock Out, and Adjustments from the item page or quick actions.",
  },
  {
    id: "offline",
    category: "General",
    question: "Does it work offline?",
    answer:
      "Yes. Use the app without a connection — add items, record stock movements, and view your catalog. Data syncs to the cloud automatically when you are back online, so the same inventory stays consistent across devices.",
  },
  {
    id: "dashboard",
    category: "Dashboard",
    question: "What does the dashboard show?",
    answer:
      "The dashboard summary card shows sold quantities, purchased quantities, earnings, and spendings. Quick stats include total items and total contacts. An analytics bar chart compares sales vs. purchases over time. Free users see Last 7 Days; Pro unlocks Today, Last 30 Days, and All Time.",
  },
  {
    id: "contacts",
    category: "Inventory",
    question: "How do customers and vendors work?",
    answer:
      "Add customers and vendors from the Contacts screen. Filter by type, sort by name or date, and search by name or phone. Pro users can bulk-import contacts from the device phone book as customers or vendors.",
  },
  {
    id: "activity",
    category: "General",
    question: "What is activity history?",
    answer:
      "Every action is logged — items added, stock changes, contacts, and categories. Filter by type and browse entries grouped by date with timestamps. Free accounts keep the last 30 days; Pro includes unlimited history.",
  },
  {
    id: "settings",
    category: "Account",
    question: "What can I change in Settings?",
    answer:
      "Edit your organization profile, manage categories, and set preferences such as showing low-stock items or preventing below-zero stock. Privacy controls cover diagnostics and crash reports. You can send feedback, rate the app, reset data, or delete your account.",
  },
  {
    id: "pro-features",
    category: "Pro",
    question: "What is included in Pro?",
    answer:
      "Pro ($4.99/month) adds CSV export and share, all analytics date ranges, low-stock alerts with an alert center, phone contact import, unlimited activity history, advanced filters and sort, multi-location tracking per item, and financial reports including profit/loss and stock value by category.",
  },
  {
    id: "free-vs-pro",
    category: "Pro",
    question: "Is the free plan enough to get started?",
    answer:
      "Yes. Free includes unlimited items, stock movements, contacts, and categories, barcode scanning, cloud sync with offline support, dashboard analytics for the last 7 days, activity history for 30 days, and basic search. Upgrade to Pro when you need exports, full analytics, alerts, or financial reports.",
  },
  {
    id: "platforms",
    category: "General",
    question: "Which platforms are supported?",
    answer:
      "Inventory Stock Tracker is built for Android and iOS (version 1.0.0). Use the same cloud account across phones and tablets so your stock stays in sync wherever you work.",
  },
];
