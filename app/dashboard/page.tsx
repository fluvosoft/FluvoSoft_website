import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DashboardPreview from "@/components/sections/DashboardPreview";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-8rem)]">
        <DashboardPreview />
      </main>
      <Footer />
    </>
  );
}
