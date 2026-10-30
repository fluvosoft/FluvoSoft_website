import type { Metadata } from "next";
import ProductLanding, { type ProductLandingConfig } from "@/components/product/ProductLanding";
import { STUDIO_PRODUCTS } from "@/data/studioProducts";

const PLAY = "https://play.google.com/store/apps/details?id=com.teenypdf.www";
const WEB = "https://www.teenypdf.com/";
const title = "TeenyPDF – Free Private PDF Tools: JPG to PDF, Compress, Merge";
const description =
  "TeenyPDF is a free PDF toolkit for web and Android. Convert JPG and images to PDF, compress, merge and edit PDFs, with files processed on your device and never uploaded.";

export const metadata: Metadata = {
  title: { absolute: `${title} | FluvoSoft` },
  description,
  keywords: ["jpg to pdf", "image to pdf converter", "compress pdf", "merge pdf", "pdf converter without upload", "private pdf tools", "TeenyPDF"],
  alternates: { canonical: "/teenypdf" },
  openGraph: { title, description, url: "/teenypdf", images: ["/teenypdf/teenypdf_logo.png"] },
};

const config: ProductLandingConfig = {
  product: STUDIO_PRODUCTS.find((p) => p.id === "teenypdf")!,
  path: "/teenypdf",
  h1: "Free PDF tools that never upload your files",
  intro: "Convert, compress, merge and edit PDFs in your browser or on Android. TeenyPDF processes everything on your device, so your documents stay private.",
  platforms: ["Web", "Android", "Free", "No upload"],
  primary: { label: "Open TeenyPDF", href: WEB },
  secondary: { label: "Get it on Google Play", href: PLAY },
  features: [
    { title: "Image to PDF", body: "Turn JPG, PNG and photos into a single PDF, in the order you choose." },
    { title: "Compress PDF", body: "Shrink large PDFs so they're easy to email and upload." },
    { title: "Merge & split", body: "Combine several PDFs into one, or pull out just the pages you need." },
    { title: "Convert", body: "Convert between PDF and common formats like Word, PowerPoint and images." },
    { title: "Edit & sign", body: "Add text, annotations and signatures without leaving the app." },
    { title: "Files stay on your device", body: "No uploads to a server. TeenyPDF works locally on web and Android." },
  ],
  faqs: [
    { q: "Is TeenyPDF free?", a: "Yes, TeenyPDF is free to use on the web and on Android." },
    { q: "Are my files uploaded?", a: "No. TeenyPDF processes your files on your own device, so they are never uploaded to a server." },
    { q: "How do I convert JPG to PDF?", a: "Open TeenyPDF, choose Image to PDF, select your photos, arrange the order and export a single PDF." },
    { q: "Does it work on mobile?", a: "Yes. Use teenypdf.com in any mobile browser, or install the Android app from Google Play." },
  ],
  schema: { appName: "TeenyPDF", category: "UtilitiesApplication", os: "Android, Web", url: PLAY },
};

export default function TeenyPdfPage() {
  return <ProductLanding c={config} />;
}
