import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { inventoryStockTrackerMetadata } from "@/lib/inventoryStockTrackerSeo";
import { InventoryStockTrackerBetaModalProvider } from "@/components/inventory-stock-tracker/InventoryStockTrackerBetaModalProvider";
import "../easy-invoice/easy-invoice.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-ei-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-ei-body",
  display: "swap",
});

export const metadata = inventoryStockTrackerMetadata;

export default function InventoryStockTrackerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${plusJakarta.variable} ${dmSans.variable} font-ei-body ei-page`}>
      <InventoryStockTrackerBetaModalProvider>{children}</InventoryStockTrackerBetaModalProvider>
    </div>
  );
}
