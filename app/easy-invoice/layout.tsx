import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { easyInvoiceMetadata } from "@/lib/easyInvoiceSeo";
import { EasyInvoiceBetaModalProvider } from "@/components/easy-invoice/EasyInvoiceBetaModalProvider";
import "./easy-invoice.css";

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

export const metadata = easyInvoiceMetadata;

export default function EasyInvoiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${plusJakarta.variable} ${dmSans.variable} font-ei-body ei-page`}>
      <EasyInvoiceBetaModalProvider>{children}</EasyInvoiceBetaModalProvider>
    </div>
  );
}
