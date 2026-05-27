import EasyInvoiceHero from "@/components/easy-invoice/EasyInvoiceHero";
import EasyInvoiceNavbar from "@/components/easy-invoice/EasyInvoiceNavbar";
import EasyInvoiceFeaturesSection from "@/components/easy-invoice/EasyInvoiceFeaturesSection";
import EasyInvoiceFAQSection from "@/components/easy-invoice/EasyInvoiceFAQSection";
import EasyInvoiceShowcaseSections from "@/components/easy-invoice/EasyInvoiceShowcaseSections";
import EasyInvoicePricingSection from "@/components/easy-invoice/EasyInvoicePricingSection";
import EasyInvoicePrivacySection from "@/components/easy-invoice/EasyInvoicePrivacySection";
import EasyInvoiceFooter from "@/components/easy-invoice/EasyInvoiceFooter";
import EasyInvoiceJsonLd from "@/components/seo/EasyInvoiceJsonLd";
import { easyInvoiceMetadata } from "@/lib/easyInvoiceSeo";

export const metadata = easyInvoiceMetadata;

export default function EasyInvoicePage() {
  return (
    <>
      <EasyInvoiceJsonLd />
      <EasyInvoiceNavbar />
      <main className="min-h-screen bg-ei-cream" role="main" id="main-content">
        <EasyInvoiceHero />
        <EasyInvoiceShowcaseSections />
        <EasyInvoiceFeaturesSection />
        <EasyInvoiceFAQSection />
        <EasyInvoicePricingSection />
        <EasyInvoicePrivacySection />
      </main>
      <div id="resources">
        <EasyInvoiceFooter />
      </div>
    </>
  );
}
