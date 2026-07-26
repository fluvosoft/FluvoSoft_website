import KyotoHero from "@/components/kyoto-habit-tracker/KyotoHero";
import KyotoNavbar from "@/components/kyoto-habit-tracker/KyotoNavbar";
import KyotoShowcaseSections from "@/components/kyoto-habit-tracker/KyotoShowcaseSections";
import KyotoFeaturesSection from "@/components/kyoto-habit-tracker/KyotoFeaturesSection";
import KyotoFAQSection from "@/components/kyoto-habit-tracker/KyotoFAQSection";
import KyotoPricingSection from "@/components/kyoto-habit-tracker/KyotoPricingSection";
import KyotoPrivacySection from "@/components/kyoto-habit-tracker/KyotoPrivacySection";
import KyotoFooter from "@/components/kyoto-habit-tracker/KyotoFooter";
import KyotoJsonLd from "@/components/seo/KyotoJsonLd";
import { kyotoMetadata } from "@/lib/kyotoSeo";

export const metadata = kyotoMetadata;

export default function KyotoHabitTrackerPage() {
  return (
    <>
      <KyotoJsonLd />
      <KyotoNavbar />
      <main className="min-h-screen bg-ky-peach" role="main" id="main-content">
        <KyotoHero />
        <KyotoShowcaseSections />
        <KyotoFeaturesSection />
        <KyotoFAQSection />
        <KyotoPricingSection />
        <KyotoPrivacySection />
      </main>
      <div id="resources">
        <KyotoFooter />
      </div>
    </>
  );
}
