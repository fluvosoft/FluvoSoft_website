import Footer from "@/components/layout/Footer";
import InventoryStockTrackerHero from "@/components/inventory-stock-tracker/InventoryStockTrackerHero";
import InventoryStockTrackerNavbar from "@/components/inventory-stock-tracker/InventoryStockTrackerNavbar";
import InventoryStockTrackerFeaturesSection from "@/components/inventory-stock-tracker/InventoryStockTrackerFeaturesSection";
import InventoryStockTrackerFAQSection from "@/components/inventory-stock-tracker/InventoryStockTrackerFAQSection";
import InventoryStockTrackerShowcaseSections from "@/components/inventory-stock-tracker/InventoryStockTrackerShowcaseSections";
import InventoryStockTrackerPricingSection from "@/components/inventory-stock-tracker/InventoryStockTrackerPricingSection";
import InventoryStockTrackerJsonLd from "@/components/seo/InventoryStockTrackerJsonLd";

export default function InventoryStockTrackerPage() {
  return (
    <>
      <InventoryStockTrackerJsonLd />
      <InventoryStockTrackerNavbar />
      <main className="min-h-screen bg-ei-cream" role="main" id="main-content">
        <InventoryStockTrackerHero />
        <InventoryStockTrackerShowcaseSections />
        <InventoryStockTrackerFeaturesSection />
        <InventoryStockTrackerFAQSection />
        <InventoryStockTrackerPricingSection />
      </main>
      <div id="resources">
        <Footer />
      </div>
    </>
  );
}
