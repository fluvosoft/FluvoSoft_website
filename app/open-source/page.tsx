import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResourcePage from "@/components/resources/ResourcePage";
import { openSourcePage } from "@/data/resourcesPages";

export const metadata: Metadata = {
  title: "Open Source | FluvoSoft",
  description: openSourcePage.metaDescription,
  keywords: openSourcePage.keywords,
  openGraph: {
    title: "Open Source | FluvoSoft",
    description: openSourcePage.metaDescription,
    url: "/open-source",
  },
  alternates: {
    canonical: "/open-source",
  },
};

export default function OpenSourcePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <ResourcePage data={openSourcePage} />
      </main>
      <Footer />
    </>
  );
}
