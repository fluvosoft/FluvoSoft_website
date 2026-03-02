import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LaunchFeaturesSection from "@/components/sections/LaunchFeaturesSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import LabSection from "@/components/sections/LabSection";
import DashboardPreview from "@/components/sections/DashboardPreview";
import EverythingYouNeedSection from "@/components/sections/EverythingYouNeedSection";
import QualitySection from "@/components/sections/QualitySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/seo";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline} | Blockchain, Automation & Custom Software`,
  description:
    "FluvoSoft venture catalysts studio. Blockchain development, AI automation, custom software, and SaaS solutions. Transform your business with secure, scalable technology. Dhaka, Bangladesh.",
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-hidden" role="main">
        {/* Layered soft oval orange shine – outer ambient */}
        <div
          className="pointer-events-none absolute left-1/2 top-[22%] z-0 h-[85vh] w-[min(160vw,2000px)] -translate-x-1/2 -translate-y-1/2"
          aria-hidden
          style={{
            background: "radial-gradient(ellipse 48% 36% at 50% 50%, rgba(255,185,110,0.22) 0%, rgba(251,165,85,0.15) 28%, rgba(230,145,70,0.08) 52%, rgba(180,110,55,0.03) 75%, transparent 100%)",
          }}
        />
        {/* Inner glow – brighter core behind buttons/dashboard */}
        <div
          className="pointer-events-none absolute left-1/2 top-[26%] z-0 h-[65vh] w-[min(120vw,1400px)] -translate-x-1/2 -translate-y-1/2"
          aria-hidden
          style={{
            background: "radial-gradient(ellipse 52% 40% at 50% 50%, rgba(255,200,135,0.42) 0%, rgba(255,182,110,0.32) 12%, rgba(255,165,90,0.2) 28%, rgba(251,148,72,0.12) 48%, rgba(220,130,62,0.05) 68%, transparent 88%)",
          }}
        />
        <div className="relative z-10">
          <HeroSection />
          <DashboardPreview />
          <LaunchFeaturesSection />
          <SolutionsSection />
          <LabSection />
          <EverythingYouNeedSection />
          <QualitySection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <ContactSection />
          <CTASection />
        </div>
      </main>
      <FAQSchema />
      <Footer />
    </>
  );
}
