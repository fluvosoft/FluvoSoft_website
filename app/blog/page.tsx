import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResourcePage from "@/components/resources/ResourcePage";
import { blogPage } from "@/data/resourcesPages";

export const metadata: Metadata = {
  title: "Blog | FluvoSoft",
  description: blogPage.metaDescription,
  keywords: blogPage.keywords,
  openGraph: {
    title: "Blog | FluvoSoft",
    description: blogPage.metaDescription,
    url: "/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <ResourcePage data={blogPage} />
      </main>
      <Footer />
    </>
  );
}
