import Image from "next/image";
import Link from "next/link";

const apps = [
  { name: "TeenyPDF", href: "/teenypdf", logo: "/teenypdf/teenypdf_logo.png", line: "Private PDF tools" },
  { name: "OneThing", href: "/onething", logo: "/OneThing/logo.png", line: "Sticky note widget" },
  { name: "Easy Invoice", href: "/easy-invoice", logo: "/images/easy_invoice_logo.webp", line: "Free invoicing" },
  { name: "Inventory", href: "/inventory-stock-tracker", logo: "/images/inventory_stock_tracker_logo.webp", line: "Stock tracker" },
];

/** Compact cross-promo strip for high-traffic utility pages (e.g. /privacy). */
export default function OurAppsStrip() {
  return (
    <aside aria-label="FluvoSoft apps" className="border-b border-white/10 bg-[#0f0f0f] px-6 py-5 lg:px-8">
      <div className="mx-auto flex max-w-container flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-accent">
          <span className="font-medium text-foreground">Using one of our apps?</span> Explore the rest of the FluvoSoft studio.
        </p>
        <ul className="flex flex-wrap gap-2">
          {apps.map((a) => (
            <li key={a.name}>
              <Link
                href={a.href}
                className="flex items-center gap-2 rounded-full border border-white/10 py-1 pl-1 pr-3 text-xs text-foreground transition hover:border-cta"
              >
                <span className="relative h-6 w-6 overflow-hidden rounded-full bg-white">
                  <Image src={a.logo} alt="" fill sizes="24px" className="object-contain p-0.5" />
                </span>
                {a.name}
                <span className="hidden text-muted sm:inline">· {a.line}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
