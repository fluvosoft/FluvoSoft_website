import InventoryStockTrackerPhoneMockup from "./InventoryStockTrackerPhoneMockup";
import { inventoryStockTrackerScreenshots } from "@/data/inventoryStockTrackerScreenshots";

type PhoneImage = { src: string; alt: string };

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
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
            <InventoryStockTrackerPhoneMockup
              src={left.src}
              alt={left.alt}
              screenWidth={160}
            />
            <InventoryStockTrackerPhoneMockup
              src={right.src}
              alt={right.alt}
              screenWidth={160}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const { home, items, barCodeScan, addItem, activityLog, createContact } =
  inventoryStockTrackerScreenshots;

export default function InventoryStockTrackerShowcaseSections() {
  return (
    <>
      <ShowcaseBlock
        badge="Overview"
        title="See Your Inventory at a Glance"
        paragraphs={[
          "Get an instant snapshot of sold vs purchased quantities, earnings, and spendings — plus clean analytics for recent performance.",
          "Find any product fast with search, then scan barcodes to pull up the right SKU in seconds.",
        ]}
        left={home}
        right={barCodeScan}
        bgClass="bg-white"
      />

      <ShowcaseBlock
        badge="Daily workflow"
        title="Add Items, Track Activity, Manage Contacts"
        paragraphs={[
          "Add items with SKU and pricing, update stock as it moves, and keep customers and vendors organized as you grow.",
          "Built for speed: the essentials are always one tap away, without extra clutter.",
        ]}
        left={items}
        right={addItem}
        bgClass="bg-ei-cream"
      />

      <ShowcaseBlock
        badge="History"
        title="Keep a Clear Activity Trail"
        paragraphs={[
          "Every key action is logged so you can confirm what changed and when — ideal when more than one person manages stock.",
          "Scan recent activity to spot mistakes early and keep your numbers accurate.",
        ]}
        left={activityLog}
        right={createContact}
        bgClass="bg-white"
      />

    </>
  );
}
