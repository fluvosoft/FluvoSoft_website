import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutExperience from "@/components/about/AboutExperience";

export const metadata: Metadata = {
  title: "About FluvoSoft - Venture Catalysts Studio | Our Story, Mission & Values",
  description:
    "About FluvoSoft venture catalysts studio. Our story, mission, vision, and values. Building smart, safe, and reliable software. 50+ projects, 95% client retention. Delaware C-Corp, United States.",
  keywords: [
    "About FluvoSoft",
    "FluvoSoft story",
    "technology company",
    "software company USA",
    "Delaware C-Corp software company",
    "mission vision values",
  ],
  openGraph: {
    title: "About FluvoSoft - Venture Catalysts Studio",
    description:
      "Our story, mission, vision, and values. Building smart, safe, and reliable software that helps businesses everywhere.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" role="main">
        <AboutExperience />
      </main>
      <Footer />
    </>
  );
}
