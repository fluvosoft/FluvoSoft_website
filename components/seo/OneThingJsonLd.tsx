import { siteConfig } from "@/lib/seo";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.fluvosoft.onething";

export default function OneThingJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": `${siteConfig.url}/#onething`,
    name: "OneThing: Sticky Notes Widget",
    alternateName: "OneThing",
    description:
      "Sticky note widget and notepad for Android home and lock screen. Keep one active note visible, archive it when finished, and stay focused on one task at a time. No account, no cloud sync, no tracking.",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Android",
    url: PLAY_URL,
    downloadUrl: PLAY_URL,
    installUrl: PLAY_URL,
    image: `${siteConfig.url}/OneThing/logo.png`,
    contentRating: "Everyone",
    featureList: [
      "One active sticky note at a time",
      "Home screen sticky note widget",
      "Lock screen note display",
      "Custom backgrounds, fonts, text size and color",
      "Archive of past notes with dates",
      "No account, no cloud sync, no tracking",
    ],
    keywords:
      "sticky notes widget, home screen note, lock screen note, notepad widget, focus app, one task at a time, minimalist notes",
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
