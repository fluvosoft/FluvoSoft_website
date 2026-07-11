import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CareersExperience from "@/components/careers/CareersExperience";
import CareersJsonLd from "@/components/seo/CareersJsonLd";
import { careersMetadata } from "@/lib/careersSeo";

export const metadata: Metadata = careersMetadata;

export default function CareersPage() {
  return (
    <>
      <CareersJsonLd />
      <Navbar />
      <main className="careers-page min-h-screen" role="main">
        <CareersExperience />
      </main>
      <Footer />
    </>
  );
}
