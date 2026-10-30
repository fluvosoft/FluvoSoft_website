import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutExperience from "@/components/about/AboutExperience";

export const metadata: Metadata = {
  title: "About FluvoSoft - Apps & Automation Venture Studio | Our Story, Mission & Values",
  description:
    "FluvoSoft is an apps and automation venture studio that builds its own products, including TeenyPDF, OneThing and Easy Invoice. 500+ app downloads and 7,000+ web app users. Our story, mission and values.",
  keywords: [
    "About FluvoSoft",
    "FluvoSoft story",
    "technology company",
    "software company USA",
    "app venture studio",
    "mission vision values",
  ],
  openGraph: {
    title: "About FluvoSoft - Apps & Automation Venture Studio",
    description:
      "An apps and automation venture studio building its own products: TeenyPDF, OneThing, Easy Invoice and more.",
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
