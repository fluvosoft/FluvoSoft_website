import ResumeBuilderHero from "@/components/resume-builder/ResumeBuilderHero";
import ResumeBuilderNavbar from "@/components/resume-builder/ResumeBuilderNavbar";
import ResumeBuilderFeaturesSection from "@/components/resume-builder/ResumeBuilderFeaturesSection";
import ResumeBuilderFAQSection from "@/components/resume-builder/ResumeBuilderFAQSection";
import ResumeBuilderShowcaseSections from "@/components/resume-builder/ResumeBuilderShowcaseSections";
import ResumeBuilderPricingSection from "@/components/resume-builder/ResumeBuilderPricingSection";
import ResumeBuilderPrivacySection from "@/components/resume-builder/ResumeBuilderPrivacySection";
import ResumeBuilderFooter from "@/components/resume-builder/ResumeBuilderFooter";
import ResumeBuilderJsonLd from "@/components/seo/ResumeBuilderJsonLd";
import { resumeBuilderMetadata } from "@/lib/resumeBuilderSeo";

export const metadata = resumeBuilderMetadata;

export default function ResumeBuilderPage() {
  return (
    <>
      <ResumeBuilderJsonLd />
      <ResumeBuilderNavbar />
      <main className="min-h-screen bg-rb-cream" role="main" id="main-content">
        <ResumeBuilderHero />
        <ResumeBuilderShowcaseSections />
        <ResumeBuilderFeaturesSection />
        <ResumeBuilderFAQSection />
        <ResumeBuilderPricingSection />
        <ResumeBuilderPrivacySection />
      </main>
      <div id="resources">
        <ResumeBuilderFooter />
      </div>
    </>
  );
}
