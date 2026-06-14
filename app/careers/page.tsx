import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResourcePage from "@/components/resources/ResourcePage";
import { careersPage } from "@/data/resourcesPages";

export const metadata: Metadata = {
  title: "Careers | FluvoSoft",
  description: careersPage.metaDescription,
  keywords: careersPage.keywords,
  openGraph: {
    title: "Careers | FluvoSoft",
    description: careersPage.metaDescription,
    url: "/careers",
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <ResourcePage data={careersPage} />
      </main>
      <Footer />
    </>
  );
}
