import type { Metadata } from "next";
import ProductLanding, { type ProductLandingConfig } from "@/components/product/ProductLanding";
import { STUDIO_PRODUCTS } from "@/data/studioProducts";

const PLAY = "https://play.google.com/store/apps/details?id=com.fluvosoft.onething";
const title = "OneThing – Sticky Note Widget for Android Home & Lock Screen";
const description =
  "OneThing is a free sticky note widget for Android. Keep one note on your home screen and lock screen, style it your way, and archive it when done. No account, no tracking.";

export const metadata: Metadata = {
  title: { absolute: `${title} | FluvoSoft` },
  description,
  keywords: ["sticky note widget android", "home screen notes widget", "lock screen notes app", "one task at a time app", "minimalist notes app", "OneThing app", "sticky notes widget"],
  alternates: { canonical: "/onething" },
  openGraph: { title, description, url: "/onething", images: ["/OneThing/logo.png"] },
};

const config: ProductLandingConfig = {
  product: STUDIO_PRODUCTS.find((p) => p.id === "onething")!,
  path: "/onething",
  h1: "A sticky note widget for your home and lock screen",
  intro: "OneThing keeps a single note in view, on your home screen and lock screen. Finish it, archive it, start the next. One thing at a time.",
  platforms: ["Android", "Free", "No account"],
  primary: { label: "Get it on Google Play", href: PLAY },
  features: [
    { title: "One active note", body: "Only one note at a time, so the task that matters is always in front of you." },
    { title: "Home screen widget", body: "A sticky note widget with custom backgrounds, fonts, text size and color, with a live preview." },
    { title: "Lock screen display", body: "See your active note every time you pick up your phone, with no alarms or sounds." },
    { title: "Archive", body: "Finished notes are saved with their dates, so you can look back or reopen them." },
    { title: "Private by design", body: "No account, no cloud sync and no tracking. Your notes stay on your device." },
    { title: "Five font styles", body: "Sans, serif, mono, rounded and handwritten, so the widget matches your home screen." },
  ],
  faqs: [
    { q: "Is OneThing free?", a: "Yes, OneThing is free to download on Google Play." },
    { q: "Can I add more than one note?", a: "No, by design. OneThing holds one active note. Archive it to free the slot for the next one." },
    { q: "Does OneThing work on the lock screen?", a: "Yes. Your active note can be shown on the lock screen so you see it every time you pick up your phone." },
    { q: "Do I need an account?", a: "No. There is no sign-in, no cloud sync and no tracking. Notes stay on your device." },
    { q: "Is OneThing available on iPhone?", a: "Not yet. OneThing is currently available for Android on Google Play." },
  ],
  schema: { appName: "OneThing: Sticky Notes Widget", category: "ProductivityApplication", os: "Android", url: PLAY },
};

export default function OneThingPage() {
  return <ProductLanding c={config} />;
}
