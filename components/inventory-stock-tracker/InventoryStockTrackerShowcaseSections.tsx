import InventoryStockTrackerPhoneMockup from "./InventoryStockTrackerPhoneMockup";
import { inventoryStockTrackerScreenshots } from "@/data/inventoryStockTrackerScreenshots";

type PhoneImage = { src: string; alt: string; caption: string };

type ShowcaseBlockProps = {
  badge: string;
  title: string;
  paragraphs: string[];
  left: PhoneImage;
  right: PhoneImage;
  bgClass?: string;
};

function ShowcaseBlock({
  badge,
  title,
  paragraphs,
  left,
  right,
  bgClass = "bg-white",
}: ShowcaseBlockProps) {
  const sectionId = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <section
      className={`${bgClass} px-6 py-16 lg:px-8 lg:py-24`}
      aria-labelledby={sectionId}
    >
      <div className="mx-auto max-w-container">
        <div className="hidden items-center gap-8 lg:grid lg:grid-cols-[1fr_1.2fr_1fr] xl:gap-12">
          <div className="flex justify-center">
            <InventoryStockTrackerPhoneMockup
              src={left.src}
              alt={left.alt}
              caption={left.caption}
              screenWidth={220}
            />
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left">
            <span className="mx-auto inline-block w-fit rounded-full bg-ei-lime/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ei-forest lg:mx-0">
              {badge}
            </span>
            <h2
              id={sectionId}
              className="mt-4 font-ei-heading text-2xl font-bold leading-tight text-ei-forest md:text-3xl lg:text-[2rem] lg:leading-[1.2]"
            >
              {title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ei-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <InventoryStockTrackerPhoneMockup
              src={right.src}
              alt={right.alt}
              caption={right.caption}
              screenWidth={220}
            />
          </div>
        </div>

        <div className="lg:hidden">
          <div className="text-center">
            <span className="inline-block rounded-full bg-ei-lime/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ei-forest">
              {badge}
            </span>
            <h2 className="mt-4 font-ei-heading text-2xl font-bold leading-tight text-ei-forest md:text-3xl">
              {title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ei-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
            <InventoryStockTrackerPhoneMockup
              src={left.src}
              alt={left.alt}
              caption={left.caption}
              screenWidth={160}
            />
            <InventoryStockTrackerPhoneMockup
              src={right.src}
              alt={right.alt}
              caption={right.caption}
              screenWidth={160}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const { items, addItem, premium, settings } = inventoryStockTrackerScreenshots;

export default function InventoryStockTrackerShowcaseSections() {
  return (
    <>
      <ShowcaseBlock
        badge="Get started"
        title="Add Items in Seconds"
        paragraphs={[
          "Browse your catalog from the Items tab — search by name or SKU, scan barcodes, and filter your list. Tap Add New Item when you are ready to grow your inventory.",
          "Capture name, SKU, opening stock, reorder point, category, selling and cost prices, and warehouse location (Pro). Scan barcodes from the SKU field with your camera.",
        ]}
        left={items}
        right={addItem}
        bgClass="bg-white"
      />

      <ShowcaseBlock
        badge="Pro & Pro Plus"
        title="Unlock Premium When You Grow"
        paragraphs={[
          "Upgrade to Pro ($4.99/mo) for CSV export, all analytics ranges, low-stock alerts, contact import, filters, multi-location tracking, and financial reports.",
          "Pro Plus ($9.99/mo) adds PDF reports, cloud backup and restore, advanced analytics, and bulk operations — visible in Settings with PRO and PRO+ badges.",
        ]}
        left={premium}
        right={settings}
        bgClass="bg-ei-cream"
      />
    </>
  );
}
