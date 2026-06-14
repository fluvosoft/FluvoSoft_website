import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResourcePage from "@/components/resources/ResourcePage";
import { eventsPage } from "@/data/resourcesPages";

export const metadata: Metadata = {
  title: "Events | FluvoSoft",
  description: eventsPage.metaDescription,
  keywords: eventsPage.keywords,
  openGraph: {
    title: "Events | FluvoSoft",
    description: eventsPage.metaDescription,
    url: "/events",
  },
  alternates: {
    canonical: "/events",
  },
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" role="main">
        <ResourcePage data={eventsPage} />
      </main>
      <Footer />
    </>
  );
}
