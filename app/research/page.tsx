import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResourcePage from "@/components/resources/ResourcePage";
import { researchPage } from "@/data/resourcesPages";

export const metadata: Metadata = {
  title: "Research | FluvoSoft",
  description: researchPage.metaDescription,
  keywords: researchPage.keywords,
  openGraph: {
    title: "Research | FluvoSoft",
    description: researchPage.metaDescription,
    url: "/research",
  },
  alternates: {
    canonical: "/research",
  },
};

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <ResourcePage data={researchPage} />
      </main>
      <Footer />
    </>
  );
}
