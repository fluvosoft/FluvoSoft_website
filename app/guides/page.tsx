import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResourcePage from "@/components/resources/ResourcePage";
import { guidesPage } from "@/data/resourcesPages";

export const metadata: Metadata = {
  title: "Guides | FluvoSoft",
  description: guidesPage.metaDescription,
  keywords: guidesPage.keywords,
  openGraph: {
    title: "Guides | FluvoSoft",
    description: guidesPage.metaDescription,
    url: "/guides",
  },
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <ResourcePage data={guidesPage} />
      </main>
      <Footer />
    </>
  );
}
