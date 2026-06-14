import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResourcePage from "@/components/resources/ResourcePage";
import { securityPage } from "@/data/resourcesPages";

export const metadata: Metadata = {
  title: "Security | FluvoSoft",
  description: securityPage.metaDescription,
  keywords: securityPage.keywords,
  openGraph: {
    title: "Security | FluvoSoft",
    description: securityPage.metaDescription,
    url: "/security",
  },
  alternates: {
    canonical: "/security",
  },
};

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <ResourcePage data={securityPage} />
      </main>
      <Footer />
    </>
  );
}
