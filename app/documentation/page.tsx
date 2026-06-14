import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResourcePage from "@/components/resources/ResourcePage";
import { documentationPage } from "@/data/resourcesPages";

export const metadata: Metadata = {
  title: "Documentation | FluvoSoft",
  description: documentationPage.metaDescription,
  keywords: documentationPage.keywords,
  openGraph: {
    title: "Documentation | FluvoSoft",
    description: documentationPage.metaDescription,
    url: "/documentation",
  },
  alternates: {
    canonical: "/documentation",
  },
};

export default function DocumentationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <ResourcePage data={documentationPage} />
      </main>
      <Footer />
    </>
  );
}
