"use client";

import { useState, useEffect, useCallback } from "react";
import Button from "@/components/ui/Button";

const NAV_TABS = ["Overview", "Customers", "Products", "Settings"];
const SUB_TABS = ["Overview", "Analytics", "Reports", "Notifications"];
const PRODUCT_SUB_TABS = ["Catalog", "Inventory", "Pricing", "Categories"];
const SETTINGS_SUB_TABS = ["Profile", "Team", "Billing", "Security"];

type MetricRow = { label: string; value: string; change: string };
const METRICS_BY_VIEW: Record<string, MetricRow[]> = {
  Overview: [
    { label: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month" },
    { label: "Subscriptions", value: "+2350", change: "+180.1% from last month" },
    { label: "Sales", value: "+12,234", change: "+19% from last month" },
    { label: "Active Now", value: "+573", change: "+201 since last hour" },
  ],
  Analytics: [
    { label: "Page Views", value: "89,234", change: "+12.3% from last week" },
    { label: "Bounce Rate", value: "32.1%", change: "-2.4% from last week" },
    { label: "Avg. Session", value: "4m 32s", change: "+18% from last week" },
    { label: "Conversions", value: "3.2%", change: "+0.8% from last week" },
  ],
  Reports: [
    { label: "Reports Generated", value: "1,247", change: "+45 this week" },
    { label: "Scheduled", value: "89", change: "12 pending" },
    { label: "Exported", value: "456", change: "+23% from last month" },
    { label: "Failed", value: "3", change: "-2 from last week" },
  ],
  Notifications: [
    { label: "Unread", value: "12", change: "3 new today" },
    { label: "Sent", value: "2,340", change: "+15% this week" },
    { label: "Opened", value: "68%", change: "+5% from last week" },
    { label: "Clicked", value: "24%", change: "+2% from last week" },
  ],
};
const METRICS_BY_VIEW_ALT: Record<string, MetricRow[]> = {
  Overview: [
    { label: "Total Revenue", value: "$46,102.34", change: "+22.3% from last month" },
    { label: "Subscriptions", value: "+2489", change: "+192% from last month" },
    { label: "Sales", value: "+12,891", change: "+21% from last month" },
    { label: "Active Now", value: "+601", change: "+218 since last hour" },
  ],
  Analytics: [
    { label: "Page Views", value: "91,445", change: "+14.1% from last week" },
    { label: "Bounce Rate", value: "30.8%", change: "-3.1% from last week" },
    { label: "Avg. Session", value: "4m 48s", change: "+20% from last week" },
    { label: "Conversions", value: "3.5%", change: "+1.1% from last week" },
  ],
  Reports: [
    { label: "Reports Generated", value: "1,289", change: "+52 this week" },
    { label: "Scheduled", value: "94", change: "10 pending" },
    { label: "Exported", value: "478", change: "+26% from last month" },
    { label: "Failed", value: "2", change: "-3 from last week" },
  ],
  Notifications: [
    { label: "Unread", value: "9", change: "2 new today" },
    { label: "Sent", value: "2,412", change: "+18% this week" },
    { label: "Opened", value: "71%", change: "+6% from last week" },
    { label: "Clicked", value: "26%", change: "+3% from last week" },
  ],
};

const CHART_DATA_BY_VIEW: Record<string, number[]> = {
  Overview: [40, 65, 45, 80, 55, 70, 50, 85, 60, 75],
  Analytics: [55, 70, 50, 65, 80, 60, 75, 55, 70, 85],
  Reports: [30, 50, 70, 45, 60, 80, 55, 65, 75, 50],
  Notifications: [60, 45, 75, 50, 65, 55, 80, 60, 70, 45],
};

const CHART_LABELS: Record<string, { title: string; subtitle: string; yLabel?: string }> = {
  Overview: { title: "Revenue Overview", subtitle: "Revenue over the last 30 days", yLabel: "Revenue ($)" },
  Analytics: { title: "Traffic", subtitle: "Page views and engagement", yLabel: "Views" },
  Reports: { title: "Reports", subtitle: "Generated and scheduled", yLabel: "Count" },
  Notifications: { title: "Notifications", subtitle: "Delivery and engagement", yLabel: "Rate" },
};

const CATALOG_CHART_LABEL = { title: "Catalog", subtitle: "Products added and performance by week", yLabel: "Units" };
const CHART_X_LABELS = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"];

function getAreaChartPaths(data: number[], data2?: number[]) {
  const w = 400, h = 80, pad = 4;
  const n = data.length;
  if (n === 0) return { d: "", d2: "" };
  const second = data2 ?? data.map((v) => v * 0.82);
  const max = Math.max(...data, ...second, 1);
  const xs = n > 1 ? data.map((_, i) => pad + (i / (n - 1)) * (w - 2 * pad)) : [pad, w - pad];
  const ys = (n > 1 ? data : [data[0]!, data[0]!]).map((v) => h - pad - (v / max) * (h - 2 * pad));
  const ys2 = (n > 1 ? second : [second[0] ?? 0, second[0] ?? 0]).map((v) => h - pad - (v / max) * (h - 2 * pad));
  const toPath = (yArr: number[]) =>
    xs.map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${yArr[i]}`).join(" ") + ` L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`;
  return { d: toPath(ys), d2: toPath(ys2) };
}

const VISITOR_TIME_RANGES = [
  { id: "3m", label: "Last 3 months" },
  { id: "30d", label: "Last 30 days" },
  { id: "7d", label: "Last 7 days" },
] as const;

const VISITOR_CHART_DATES = ["Apr 6", "Apr 13", "Apr 20", "Apr 27", "May 4", "May 11", "May 18", "May 25", "Jun 1", "Jun 7", "Jun 14", "Jun 21", "Jun 30"];
const VISITOR_AREA_DATA = [30, 45, 35, 55, 48, 62, 58, 70, 65, 78, 72, 85, 80];
const VISITOR_AREA_DATA_2 = [22, 38, 28, 48, 40, 54, 50, 62, 58, 68, 64, 75, 72];

const SALES_POOL = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$1,234.00" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$2,500.00" },
  { name: "William Kim", email: "william.kim@email.com", amount: "+$892.00" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$2,100.00" },
  { name: "James Wilson", email: "james.wilson@email.com", amount: "+$1,567.00" },
  { name: "Emma Brown", email: "emma.brown@email.com", amount: "+$3,200.00" },
  { name: "Liam Taylor", email: "liam.taylor@email.com", amount: "+$756.00" },
];

const REPORTS_LIST = [
  { id: "1", title: "Monthly Revenue Report", date: "Feb 15, 2023", status: "Completed" },
  { id: "2", title: "User Engagement Summary", date: "Feb 14, 2023", status: "Completed" },
  { id: "3", title: "Conversion Funnel Analysis", date: "Feb 13, 2023", status: "Pending" },
  { id: "4", title: "Weekly Performance Digest", date: "Feb 12, 2023", status: "Completed" },
  { id: "5", title: "A/B Test Results - Checkout", date: "Feb 11, 2023", status: "Completed" },
];

const NOTIFICATIONS_LIST = [
  { id: "1", title: "New signup: alice@example.com", time: "2 min ago", read: false },
  { id: "2", title: "Payment received: $2,500", time: "15 min ago", read: false },
  { id: "3", title: "Report ready: Monthly Revenue", time: "1 hour ago", read: true },
  { id: "4", title: "Alert: High traffic on /pricing", time: "2 hours ago", read: false },
  { id: "5", title: "Scheduled backup completed", time: "3 hours ago", read: true },
];

// Products data
const PRODUCT_METRICS: Record<string, MetricRow[]> = {
  Catalog: [
    { label: "Total Products", value: "1,247", change: "+89 this month" },
    { label: "Active SKUs", value: "892", change: "+12% from last month" },
    { label: "In Draft", value: "23", change: "5 pending review" },
    { label: "Archived", value: "332", change: "Restore anytime" },
  ],
  Inventory: [
    { label: "In Stock", value: "45,231", change: "+2,340 this week" },
    { label: "Low Stock", value: "12", change: "3 below threshold" },
    { label: "Out of Stock", value: "5", change: "-2 from last week" },
    { label: "Value", value: "$234K", change: "+8% from last month" },
  ],
  Pricing: [
    { label: "Avg. Price", value: "$42.50", change: "+$2.30 this month" },
    { label: "Discounts Active", value: "18", change: "4 ending soon" },
    { label: "Price Changes", value: "34", change: "+12 this week" },
    { label: "Margin", value: "32%", change: "+1.2% from last month" },
  ],
  Categories: [
    { label: "Categories", value: "24", change: "+2 new" },
    { label: "Subcategories", value: "89", change: "—" },
    { label: "Top Category", value: "Electronics", change: "28% of revenue" },
    { label: "Tags", value: "156", change: "+15 this month" },
  ],
};
const PRODUCT_METRICS_ALT: Record<string, MetricRow[]> = {
  Catalog: [
    { label: "Total Products", value: "1,289", change: "+94 this month" },
    { label: "Active SKUs", value: "908", change: "+14% from last month" },
    { label: "Draft", value: "21", change: "4 pending review" },
    { label: "Archived", value: "328", change: "—" },
  ],
  Inventory: [
    { label: "In Stock", value: "46,102", change: "+2,411 this week" },
    { label: "Low Stock", value: "10", change: "2 below threshold" },
    { label: "Out of Stock", value: "4", change: "-3 from last week" },
    { label: "Value", value: "$241K", change: "+9% from last month" },
  ],
  Pricing: [
    { label: "Avg. Price", value: "$43.20", change: "+$2.80 this month" },
    { label: "Discounts Active", value: "16", change: "3 ending soon" },
    { label: "Price Changes", value: "38", change: "+14 this week" },
    { label: "Margin", value: "33%", change: "+1.5% from last month" },
  ],
  Categories: [
    { label: "Categories", value: "26", change: "+3 new" },
    { label: "Subcategories", value: "91", change: "—" },
    { label: "Top Category", value: "Electronics", change: "30% of revenue" },
    { label: "Tags", value: "162", change: "+18 this month" },
  ],
};

const PRODUCTS_LIST = [
  { id: "1", name: "Wireless Earbuds Pro", sku: "SKU-8012", stock: 234, price: "$89.99", status: "Active" },
  { id: "2", name: "USB-C Hub 7-in-1", sku: "SKU-8013", stock: 12, price: "$49.99", status: "Low stock" },
  { id: "3", name: "Mechanical Keyboard", sku: "SKU-8014", stock: 0, price: "$129.99", status: "Out of stock" },
  { id: "4", name: "Monitor Stand Aluminum", sku: "SKU-8015", stock: 567, price: "$34.99", status: "Active" },
  { id: "5", name: "Webcam HD 1080p", sku: "SKU-8016", stock: 89, price: "$59.99", status: "Active" },
];

const PRODUCT_CHART: Record<string, number[]> = {
  Catalog: [50, 70, 45, 85, 60, 75, 55, 80, 65, 70],
  Inventory: [65, 55, 80, 50, 70, 60, 75, 55, 65, 80],
  Pricing: [40, 60, 75, 55, 70, 45, 65, 80, 50, 70],
  Categories: [70, 50, 65, 80, 55, 70, 60, 75, 65, 55],
};

const CATEGORIES_LIST = [
  { name: "Electronics", count: 234, revenue: "$45.2K" },
  { name: "Accessories", count: 189, revenue: "$12.1K" },
  { name: "Office", count: 156, revenue: "$28.4K" },
  { name: "Home", count: 98, revenue: "$8.9K" },
];

// Settings data
const SETTINGS_METRICS: Record<string, MetricRow[]> = {
  Profile: [
    { label: "Account age", value: "2 years", change: "Member since Feb 2023" },
    { label: "Last login", value: "2 min ago", change: "—" },
    { label: "Sessions", value: "12", change: "Active devices" },
    { label: "Storage", value: "4.2 GB", change: "of 10 GB used" },
  ],
  Team: [
    { label: "Members", value: "8", change: "2 admins, 6 members" },
    { label: "Pending", value: "1", change: "Invitation sent" },
    { label: "Roles", value: "3", change: "Admin, Editor, Viewer" },
    { label: "Activity", value: "24h", change: "Last active" },
  ],
  Billing: [
    { label: "Plan", value: "Pro", change: "$29/mo" },
    { label: "Next billing", value: "Mar 15, 2023", change: "—" },
    { label: "Payment", value: "•••• 4242", change: "Visa" },
    { label: "Invoices", value: "12", change: "3 this month" },
  ],
  Security: [
    { label: "2FA", value: "Enabled", change: "Authenticator app" },
    { label: "Sessions", value: "3", change: "Active now" },
    { label: "Logins", value: "156", change: "This month" },
    { label: "Alerts", value: "On", change: "Email + push" },
  ],
};
const SETTINGS_METRICS_ALT: Record<string, MetricRow[]> = {
  Profile: [
    { label: "Account age", value: "2 years", change: "Member since Feb 2023" },
    { label: "Last login", value: "Just now", change: "—" },
    { label: "Sessions", value: "11", change: "Active devices" },
    { label: "Storage", value: "4.5 GB", change: "of 10 GB used" },
  ],
  Team: [
    { label: "Members", value: "9", change: "2 admins, 7 members" },
    { label: "Pending", value: "0", change: "All accepted" },
    { label: "Roles", value: "3", change: "Admin, Editor, Viewer" },
    { label: "Activity", value: "2h", change: "Last active" },
  ],
  Billing: [
    { label: "Plan", value: "Pro", change: "$29/mo" },
    { label: "Next billing", value: "Mar 15, 2023", change: "—" },
    { label: "Payment", value: "•••• 4242", change: "Visa" },
    { label: "Invoices", value: "14", change: "4 this month" },
  ],
  Security: [
    { label: "2FA", value: "Enabled", change: "Authenticator app" },
    { label: "Sessions", value: "2", change: "Active now" },
    { label: "Logins", value: "161", change: "This month" },
    { label: "Alerts", value: "On", change: "Email + push" },
  ],
};

const TEAM_LIST = [
  { name: "Alicia Koch", role: "Admin", email: "alicia@example.com", status: "Active" },
  { name: "Jordan Lee", role: "Editor", email: "jordan@example.com", status: "Active" },
  { name: "Sam Wilson", role: "Viewer", email: "sam@example.com", status: "Pending" },
];

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function getSubTabsForNav(navIndex: number): string[] {
  if (navIndex === 2) return PRODUCT_SUB_TABS;
  if (navIndex === 3) return SETTINGS_SUB_TABS;
  return SUB_TABS;
}

export default function DashboardPreview() {
  const [activeNavTab, setActiveNavTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSales, setRecentSales] = useState(SALES_POOL.slice(0, 5));
  const [isPaused, setIsPaused] = useState(false);
  const [contentKey, setContentKey] = useState(0);
  const [valueTick, setValueTick] = useState(0);
  const [visitorRange, setVisitorRange] = useState<"3m" | "30d" | "7d">("3m");

  const currentSubTabs = getSubTabsForNav(activeNavTab);
  const subTabId = currentSubTabs[Math.min(activeSubTab, currentSubTabs.length - 1)] ?? currentSubTabs[0];

  const isProducts = activeNavTab === 2;
  const isSettings = activeNavTab === 3;

  const metricsBase = isProducts
    ? (PRODUCT_METRICS[subTabId] ?? PRODUCT_METRICS.Catalog)
    : isSettings
      ? (SETTINGS_METRICS[subTabId] ?? SETTINGS_METRICS.Profile)
      : (METRICS_BY_VIEW[subTabId] ?? METRICS_BY_VIEW.Overview);
  const metricsAlt = isProducts
    ? (PRODUCT_METRICS_ALT[subTabId] ?? PRODUCT_METRICS_ALT.Catalog)
    : isSettings
      ? (SETTINGS_METRICS_ALT[subTabId] ?? SETTINGS_METRICS_ALT.Profile)
      : (METRICS_BY_VIEW_ALT[subTabId] ?? METRICS_BY_VIEW_ALT.Overview);
  const metrics = valueTick === 0 ? metricsBase : metricsAlt;
  const chartHeights = isProducts
    ? (PRODUCT_CHART[subTabId] ?? PRODUCT_CHART.Catalog)
    : (CHART_DATA_BY_VIEW[subTabId] ?? CHART_DATA_BY_VIEW.Overview);

  // Auto-rotate sub-tab every 6 seconds (only for Overview/Customers)
  useEffect(() => {
    if (isPaused || isProducts || isSettings) return;
    const t = setInterval(() => {
      setActiveSubTab((prev) => (prev + 1) % SUB_TABS.length);
      setContentKey((k) => k + 1);
    }, 3000);
    return () => clearInterval(t);
  }, [isPaused, isProducts, isSettings]);

  // Auto-advance main nav page (Overview → Customers → Products → Settings) after page duration
  const PAGE_DURATION_MS = 3000; // 3 seconds per page
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setActiveNavTab((prev) => (prev + 1) % NAV_TABS.length);
      setActiveSubTab(0);
      setContentKey((k) => k + 1);
    }, PAGE_DURATION_MS);
    return () => clearInterval(t);
  }, [isPaused]);

  // Auto-update metric values (value/change) every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setValueTick((v) => (v + 1) % 2);
    }, 3000);
    return () => clearInterval(t);
  }, [isPaused]);

  // Auto-update recent sales every 5 seconds (shuffle from pool)
  useEffect(() => {
    const t = setInterval(() => {
      setRecentSales(shuffle(SALES_POOL).slice(0, 5));
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const handleSubTabClick = useCallback((i: number) => {
    setActiveSubTab(i);
    setContentKey((k) => k + 1);
  }, []);

  const handleNavTabClick = useCallback((i: number) => {
    setActiveNavTab(i);
    setActiveSubTab(0);
    setContentKey((k) => k + 1);
  }, []);

  return (
    <section className="relative px-6 pb-8 pt-0 lg:px-8 lg:pb-10 lg:pt-0">
      <div className="relative mx-auto max-w-5xl">
        {/* Wrapper with border – border fades at bottom via overlay */}
        <div
          className="animate-dashboard-enter relative z-10 overflow-visible rounded-dashboard border-[7px] border-white/20 shadow-dashboard transition-shadow duration-300 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.65),0_16px_32px_-8px_rgba(0,0,0,0.5)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
        <div className="relative overflow-hidden rounded-[calc(1rem-7px)] bg-dashboard-bg">
          {/* Glossy + shade overlay + subtle orange catch from ambient glow */}
          <div
            className="pointer-events-none absolute inset-0 z-0 rounded-[calc(1rem-7px)]"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 18%, transparent 42%, transparent 55%, rgba(0,0,0,0.06) 75%, rgba(0,0,0,0.12) 100%), linear-gradient(180deg, rgba(255,180,110,0.06) 0%, transparent 22%)",
              boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.06)",
            }}
            aria-hidden
          />
          {/* Full dashboard – subtle fade overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-20 rounded-[calc(1rem-7px)]"
            style={{ background: "rgba(0,0,0,0.22)" }}
            aria-hidden
          />
          <div className="relative z-10">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-accent-dark transition-opacity duration-200 hover:opacity-80" />
              <span className="text-sm font-medium text-accent">Alicia Koch</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" className="text-accent transition-transform duration-200 hover:rotate-180">
                <path d="M3 4.5L6 7.5L9 4.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex items-center gap-6">
              {NAV_TABS.map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleNavTabClick(i)}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    i === activeNavTab ? "text-foreground" : "text-accent-dark hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-md bg-secondary-button px-4 py-2 transition-colors duration-200 hover:bg-white/20">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent shrink-0">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-24 bg-transparent text-sm text-foreground placeholder:text-accent focus:outline-none focus:ring-0 sm:w-32"
              />
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <h2 className="text-lg font-semibold text-dashboard-title transition-opacity duration-200">
              {NAV_TABS[activeNavTab]}
            </h2>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex items-center gap-2 rounded-md border border-white/10 bg-dashboard-card px-3 py-2 text-sm text-accent transition-colors duration-200 hover:border-white/20"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Jan 20, 2023 - Feb 09, 2023
              </button>
              <Button size="sm" className="bg-tab-active-bg text-tab-active-text transition-opacity duration-200 hover:opacity-90">
                Download
              </Button>
            </div>
          </div>

          {/* Sub-nav */}
          <div className="flex flex-wrap gap-1 border-b border-white/10 px-4 py-2">
            {currentSubTabs.map((tab, i) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleSubTabClick(i)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  i === activeSubTab
                    ? "bg-tab-active-bg text-tab-active-text"
                    : "text-accent-dark hover:bg-white/10 hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
            {isPaused && (
              <span className="ml-2 self-center text-xs text-accent">Auto-paused</span>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Metric cards */}
            <div
              key={`metrics-${contentKey}-${activeNavTab}`}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              {metrics.map((m, i) => (
                <div
                  key={`${subTabId}-${m.label}`}
                  className="animate-card-enter rounded-lg bg-dashboard-card p-4 transition-colors duration-200 hover:bg-dashboard-card/90"
                  style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
                >
                  <p className="text-sm font-medium text-accent">{m.label}</p>
                  <p className="mt-1.5 text-xl font-semibold text-foreground">{m.value}</p>
                  <p className="mt-1 text-sm text-positive">{m.change}</p>
                </div>
              ))}
            </div>

            {/* Products content */}
            {isProducts && (
              <div key={`products-${contentKey}`} className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div
                  className={`animate-card-enter rounded-lg bg-dashboard-card transition-colors duration-200 hover:bg-dashboard-card/90 lg:col-span-2 ${subTabId !== "Categories" ? "flex flex-col px-4 pt-4 pb-1" : "p-4"}`}
                  style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
                >
                  <h3 className="text-base font-medium text-dashboard-title flex-shrink-0">
                    {subTabId === "Catalog" ? CATALOG_CHART_LABEL.title : subTabId}
                  </h3>
                  <p className="mt-0.5 text-xs text-accent flex-shrink-0">
                    {subTabId === "Catalog" ? CATALOG_CHART_LABEL.subtitle : (CHART_LABELS[subTabId]?.subtitle ?? "")}
                  </p>
                  {subTabId === "Categories" ? (
                    <ul className="mt-3 space-y-2">
                      {CATEGORIES_LIST.map((cat, i) => (
                        <li
                          key={cat.name}
                          className="animate-fade-in flex items-center justify-between rounded-md border border-white/5 px-3 py-2.5 transition-colors duration-200 hover:bg-white/5"
                          style={{ animationDelay: `${280 + i * 50}ms`, animationFillMode: "backwards" }}
                        >
                          <span className="text-sm font-medium text-foreground">{cat.name}</span>
                          <span className="text-xs text-accent">{cat.count} products</span>
                          <span className="text-sm text-positive">{cat.revenue}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <div className="mt-3 flex min-h-0 w-full flex-1 flex-col justify-end">
                        <div className="h-32 w-full flex-shrink-0">
                          <svg viewBox="0 0 400 80" className="h-full w-full" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="productLineFill" x1="0" x2="0" y1="1" y2="0">
                                <stop offset="0%" stopColor="rgba(251,146,60,0.4)" />
                                <stop offset="100%" stopColor="rgba(251,146,60,0.08)" />
                              </linearGradient>
                              <linearGradient id="productLineFill2" x1="0" x2="0" y1="1" y2="0">
                                <stop offset="0%" stopColor="rgba(251,146,60,0.28)" />
                                <stop offset="100%" stopColor="rgba(251,146,60,0.04)" />
                              </linearGradient>
                            </defs>
                            {(() => {
                              const { d, d2 } = getAreaChartPaths(chartHeights);
                              return (
                                <>
                                  <path d={d2} fill="url(#productLineFill2)" stroke="none" />
                                  <path d={d} fill="url(#productLineFill)" stroke="rgba(251,146,60,0.7)" strokeWidth="0.5" fillOpacity="0.95" />
                                </>
                              );
                            })()}
                          </svg>
                        </div>
                        <div
                          className="mt-1 grid w-full text-xs text-accent"
                          style={{ gridTemplateColumns: `repeat(${CHART_X_LABELS.length}, minmax(0, 1fr))` }}
                        >
                          {CHART_X_LABELS.map((l) => (
                            <span key={l} className="text-center first:text-left last:text-right">{l}</span>
                          ))}
                        </div>
                      </div>
                      {subTabId === "Catalog" && (
                        <p className="mt-1 flex-shrink-0 text-xs text-accent">{CATALOG_CHART_LABEL.yLabel}</p>
                      )}
                    </>
                  )}
                </div>
                <div
                  className="animate-card-enter rounded-lg bg-dashboard-card p-4 transition-colors duration-200 hover:bg-dashboard-card/90"
                  style={{ animationDelay: "280ms", animationFillMode: "backwards" }}
                >
                  <h3 className="text-base font-medium text-dashboard-title">
                    {subTabId === "Catalog" ? "Top products" : "Product list"}
                  </h3>
                  <p className="mt-1 text-sm text-accent">
                    {subTabId === "Catalog" ? "Best sellers by inventory and revenue." : "Top products by inventory."}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {PRODUCTS_LIST.slice(0, 3).map((p, i) => (
                      <li
                        key={p.id}
                        className="animate-fade-in flex items-center justify-between gap-3 rounded-md border border-white/5 px-3 py-2 transition-colors duration-200 hover:bg-white/5"
                        style={{ animationDelay: `${320 + i * 50}ms`, animationFillMode: "backwards" }}
                      >
                        <div>
                          <p className="text-sm font-medium text-foreground">{p.name}</p>
                          <p className="text-xs text-accent">{p.sku} · Stock: {p.stock}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{p.price}</p>
                          <span className={`text-xs ${p.status === "Active" ? "text-positive" : p.status === "Low stock" ? "text-amber-400" : "text-accent"}`}>
                            {p.status}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Settings content */}
            {isSettings && (
              <div key={`settings-${contentKey}`} className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div
                  className="animate-card-enter rounded-lg bg-dashboard-card p-4 transition-colors duration-200 hover:bg-dashboard-card/90 lg:col-span-2"
                  style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
                >
                  <h3 className="text-base font-medium text-dashboard-title">{subTabId}</h3>
                  {subTabId === "Profile" && (
                    <div className="mt-4 space-y-4">
                      <div>
                        <label className="text-xs font-medium text-accent">Display name</label>
                        <input type="text" defaultValue="Alicia Koch" className="mt-1 w-full rounded-md border border-white/10 bg-secondary-button px-3 py-2 text-sm text-foreground placeholder:text-accent focus:border-white/20 focus:outline-none" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-accent">Email</label>
                        <input type="email" defaultValue="alicia@example.com" className="mt-1 w-full rounded-md border border-white/10 bg-secondary-button px-3 py-2 text-sm text-foreground placeholder:text-accent focus:border-white/20 focus:outline-none" />
                      </div>
                      <Button size="sm" className="bg-tab-active-bg text-tab-active-text">Save changes</Button>
                    </div>
                  )}
                  {subTabId === "Team" && (
                    <ul className="mt-3 space-y-2">
                      {TEAM_LIST.map((member, i) => (
                        <li
                          key={member.email}
                          className="animate-fade-in flex items-center justify-between rounded-md border border-white/5 px-3 py-2.5 transition-colors duration-200 hover:bg-white/5"
                          style={{ animationDelay: `${280 + i * 50}ms`, animationFillMode: "backwards" }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-accent-dark" />
                            <div>
                              <p className="text-sm font-medium text-foreground">{member.name}</p>
                              <p className="text-xs text-accent">{member.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="rounded-full bg-positive/20 px-2 py-0.5 text-xs text-positive">{member.role}</span>
                            <span className={`text-xs ${member.status === "Active" ? "text-positive" : "text-accent"}`}>{member.status}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {subTabId === "Billing" && (
                    <div className="mt-3 rounded-lg border border-white/10 p-4">
                      <p className="text-sm font-medium text-foreground">Pro plan</p>
                      <p className="mt-1 text-2xl font-semibold text-foreground">$29 <span className="text-sm font-normal text-accent">/month</span></p>
                      <p className="mt-2 text-xs text-accent">Billing cycle: Monthly. Next charge: Mar 15, 2023.</p>
                      <Button size="sm" variant="secondary" className="mt-4">Change plan</Button>
                    </div>
                  )}
                  {subTabId === "Security" && (
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center justify-between rounded-md border border-white/5 px-3 py-3">
                        <div>
                          <p className="text-sm font-medium text-foreground">Two-factor authentication</p>
                          <p className="text-xs text-accent">Use an app to confirm your identity</p>
                        </div>
                        <span className="rounded-full bg-positive/20 px-2 py-0.5 text-xs text-positive">On</span>
                      </div>
                      <div className="flex items-center justify-between rounded-md border border-white/5 px-3 py-3">
                        <div>
                          <p className="text-sm font-medium text-foreground">Login alerts</p>
                          <p className="text-xs text-accent">Email when a new device signs in</p>
                        </div>
                        <span className="rounded-full bg-positive/20 px-2 py-0.5 text-xs text-positive">On</span>
                      </div>
                      <div className="flex items-center justify-between rounded-md border border-white/5 px-3 py-3">
                        <div>
                          <p className="text-sm font-medium text-foreground">Session timeout</p>
                          <p className="text-xs text-accent">Auto sign-out after 7 days</p>
                        </div>
                        <span className="text-xs text-accent">7 days</span>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="animate-card-enter rounded-lg bg-dashboard-card p-4 transition-colors duration-200 hover:bg-dashboard-card/90"
                  style={{ animationDelay: "280ms", animationFillMode: "backwards" }}
                >
                  <h3 className="text-base font-medium text-dashboard-title">Quick links</h3>
                  <ul className="mt-4 space-y-2">
                    {["API keys", "Webhooks", "Audit log", "Data export"].map((link, i) => (
                      <li key={link}>
                        <button type="button" className="animate-fade-in w-full rounded-md px-3 py-2 text-left text-sm text-foreground transition-colors duration-200 hover:bg-white/5" style={{ animationDelay: `${320 + i * 40}ms`, animationFillMode: "backwards" }}>
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Overview / Customers content (chart + recent sales) */}
            {!isProducts && !isSettings && (
              <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div
                  key={`chart-${contentKey}`}
                  className={`animate-card-enter rounded-lg bg-dashboard-card transition-colors duration-200 hover:bg-dashboard-card/90 lg:col-span-2 ${subTabId === "Overview" ? "flex flex-col px-4 pt-4 pb-1" : "p-4"}`}
                  style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
                >
                  {subTabId === "Overview" ? (
                    <>
                      <div className="flex flex-shrink-0 flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-medium text-dashboard-title">Total Visitors</h3>
                          <p className="mt-0.5 text-xs text-accent">Total for the {VISITOR_TIME_RANGES.find((r) => r.id === visitorRange)?.label.toLowerCase()}</p>
                        </div>
                        <div className="flex rounded-md border border-white/10 bg-dashboard-bg/80 p-0.5">
                          {VISITOR_TIME_RANGES.map((r) => (
                            <button
                              key={r.id}
                              type="button"
                              onClick={() => setVisitorRange(r.id)}
                              className={`rounded px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                                visitorRange === r.id
                                  ? "bg-white/15 text-foreground"
                                  : "text-accent hover:text-foreground"
                              }`}
                            >
                              {r.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="mt-3 flex min-h-0 w-full flex-1 flex-col justify-end">
                        <div className="h-32 w-full flex-shrink-0">
                          <svg viewBox="0 0 400 80" className="h-full w-full" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="visitorFill" x1="0" x2="0" y1="1" y2="0">
                                <stop offset="0%" stopColor="rgba(251,146,60,0.4)" />
                                <stop offset="100%" stopColor="rgba(251,146,60,0.08)" />
                              </linearGradient>
                              <linearGradient id="visitorFill2" x1="0" x2="0" y1="1" y2="0">
                                <stop offset="0%" stopColor="rgba(251,146,60,0.28)" />
                                <stop offset="100%" stopColor="rgba(251,146,60,0.04)" />
                              </linearGradient>
                            </defs>
                            {(() => {
                              const w = 400; const h = 80; const pad = 4;
                              const xs = VISITOR_AREA_DATA.map((_, i) => pad + (i / (VISITOR_AREA_DATA.length - 1)) * (w - 2 * pad));
                              const max = Math.max(...VISITOR_AREA_DATA);
                              const ys = VISITOR_AREA_DATA.map((v) => h - pad - (v / max) * (h - 2 * pad));
                              const d = xs.map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${ys[i]}`).join(" ") + ` L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`;
                              const ys2 = VISITOR_AREA_DATA_2.map((v) => h - pad - (v / max) * (h - 2 * pad));
                              const d2 = xs.map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${ys2[i]}`).join(" ") + ` L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`;
                              return (
                                <>
                                  <path d={d2} fill="url(#visitorFill2)" stroke="none" />
                                  <path d={d} fill="url(#visitorFill)" stroke="rgba(251,146,60,0.7)" strokeWidth="0.5" fillOpacity="0.95" />
                                </>
                              );
                            })()}
                          </svg>
                        </div>
                        <div
                          className="mt-1 grid w-full text-xs text-accent"
                          style={{ gridTemplateColumns: `repeat(${VISITOR_CHART_DATES.length}, minmax(0, 1fr))` }}
                        >
                          {VISITOR_CHART_DATES.map((d) => (
                            <span key={d} className="text-center first:text-left last:text-right">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (subTabId === "Reports" || subTabId === "Notifications") ? (
                    <ul className="mt-3 space-y-2">
                      {(subTabId === "Reports" ? REPORTS_LIST : NOTIFICATIONS_LIST).map((item: { id: string; title: string; date?: string; time?: string; status?: string; read?: boolean }, i: number) => (
                        <li
                          key={item.id}
                          className="animate-fade-in flex items-center justify-between gap-3 rounded-md border border-white/5 px-3 py-2.5 transition-colors duration-200 hover:bg-white/5"
                          style={{ animationDelay: `${280 + i * 50}ms`, animationFillMode: "backwards" }}
                        >
                          <div>
                            <p className="text-sm font-medium text-foreground">{item.title}</p>
                            <p className="text-xs text-accent">{item.date ?? item.time}</p>
                          </div>
                          {item.status && (
                            <span className="rounded-full bg-positive/20 px-2 py-0.5 text-xs text-positive">
                              {item.status}
                            </span>
                          )}
                          {item.read !== undefined && (
                            <span className={`text-xs ${item.read ? "text-accent" : "text-foreground"}`}>
                              {item.read ? "Read" : "New"}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <h3 className="text-base font-medium text-dashboard-title">
                        {CHART_LABELS[subTabId]?.title ?? subTabId}
                      </h3>
                      {CHART_LABELS[subTabId]?.subtitle && (
                        <p className="mt-0.5 text-xs text-accent">{CHART_LABELS[subTabId].subtitle}</p>
                      )}
                      <div className="mt-4 flex w-full flex-col">
                        <div className="h-32 w-full flex-shrink-0">
                          <svg viewBox="0 0 400 80" className="h-full w-full" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="overviewLineFill" x1="0" x2="0" y1="1" y2="0">
                                <stop offset="0%" stopColor="rgba(251,146,60,0.4)" />
                                <stop offset="100%" stopColor="rgba(251,146,60,0.08)" />
                              </linearGradient>
                              <linearGradient id="overviewLineFill2" x1="0" x2="0" y1="1" y2="0">
                                <stop offset="0%" stopColor="rgba(251,146,60,0.28)" />
                                <stop offset="100%" stopColor="rgba(251,146,60,0.04)" />
                              </linearGradient>
                            </defs>
                            {(() => {
                              const { d, d2 } = getAreaChartPaths(chartHeights);
                              return (
                                <>
                                  <path d={d2} fill="url(#overviewLineFill2)" stroke="none" />
                                  <path d={d} fill="url(#overviewLineFill)" stroke="rgba(251,146,60,0.7)" strokeWidth="0.5" fillOpacity="0.95" />
                                </>
                              );
                            })()}
                          </svg>
                        </div>
                        <div
                          className="mt-2 grid w-full text-xs text-accent"
                          style={{ gridTemplateColumns: `repeat(${CHART_X_LABELS.length}, minmax(0, 1fr))` }}
                        >
                          {CHART_X_LABELS.map((l) => (
                            <span key={l} className="text-center first:text-left last:text-right">{l}</span>
                          ))}
                        </div>
                      </div>
                      {CHART_LABELS[subTabId]?.yLabel && (
                        <p className="mt-1 text-xs text-accent">{CHART_LABELS[subTabId].yLabel}</p>
                      )}
                    </>
                  )}
                </div>

                <div
                  key={`sales-${recentSales.map((s) => s.email).join("-")}`}
                  className="animate-card-enter rounded-lg bg-dashboard-card p-4 transition-colors duration-200 hover:bg-dashboard-card/90"
                  style={{ animationDelay: "280ms", animationFillMode: "backwards" }}
                >
                  <h3 className="text-base font-medium text-dashboard-title">Recent Sales</h3>
                  <p className="mt-1 text-sm text-accent">Latest transactions · 265 sales this month.</p>
                  <ul className="mt-3 space-y-3">
                    {recentSales.slice(0, 3).map((s, i) => (
                      <li
                        key={`${s.email}-${i}`}
                        className="animate-fade-in flex items-center justify-between gap-3 transition-colors duration-200 hover:bg-white/5 -mx-2 rounded px-2 py-1"
                        style={{ animationDelay: `${320 + i * 60}ms`, animationFillMode: "backwards" }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-accent-dark" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{s.name}</p>
                            <p className="text-xs text-accent">{s.email}</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-foreground">{s.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
