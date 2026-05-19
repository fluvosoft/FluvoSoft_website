import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EasyInvoiceHero from "@/components/easy-invoice/EasyInvoiceHero";
import EasyInvoiceNavbar from "@/components/easy-invoice/EasyInvoiceNavbar";
import EasyInvoiceFeaturesSection from "@/components/easy-invoice/EasyInvoiceFeaturesSection";
import EasyInvoiceFAQSection from "@/components/easy-invoice/EasyInvoiceFAQSection";
import EasyInvoiceShowcaseSections from "@/components/easy-invoice/EasyInvoiceShowcaseSections";
import EasyInvoicePricingSection from "@/components/easy-invoice/EasyInvoicePricingSection";
import EasyInvoiceJsonLd from "@/components/seo/EasyInvoiceJsonLd";
import { easyInvoiceMetadata } from "@/lib/easyInvoiceSeo";

export const metadata = easyInvoiceMetadata;

export default function EasyInvoicePage() {
  return (
    <>
      <EasyInvoiceJsonLd />
      <Navbar />
      <EasyInvoiceNavbar />
      <main className="min-h-screen bg-white" role="main" id="main-content">
        <EasyInvoiceHero />
        <EasyInvoiceShowcaseSections />
        <EasyInvoiceFeaturesSection />
        <EasyInvoiceFAQSection />
        <EasyInvoicePricingSection />
      </main>
      <div id="resources">
        <Footer />
      </div>
    </>
  );
}
