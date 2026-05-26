import InventoryStockTrackerPhoneMockup from "./InventoryStockTrackerPhoneMockup";

const MOCKUP_IMAGES = {
  dashboard: "/images/inventory-mockup-dashboard.svg",
  items: "/images/inventory-mockup-items.svg",
  stock: "/images/inventory-mockup-stock.svg",
  contacts: "/images/inventory-mockup-contacts.svg",
} as const;

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

export default function InventoryStockTrackerShowcaseSections() {
  return (
    <>
      <ShowcaseBlock
        badge="Dashboard & inventory"
        title="Know Your Stock at a Glance"
        paragraphs={[
          "The dashboard summarizes sold and purchased quantities, earnings, spendings, total items, and contacts — with a bar chart comparing sales vs. purchases over time so you always know how your business is performing.",
          "Add products with images, SKU, barcode, category, and prices. Search by name, SKU, or barcode, scan codes with your camera, and open any item for stock history and profit margin.",
        ]}
        left={{
          src: MOCKUP_IMAGES.dashboard,
          alt: "Inventory Stock Tracker dashboard showing earnings and analytics chart",
          caption: "Dashboard overview",
        }}
        right={{
          src: MOCKUP_IMAGES.items,
          alt: "Inventory Stock Tracker product list with stock quantities",
          caption: "Product catalog",
        }}
        bgClass="bg-white"
      />

      <ShowcaseBlock
        badge="Stock & contacts"
        title="Every Movement and Relationship in One Place"
        paragraphs={[
          "Record Stock In, Stock Out, and Adjustments with a clear audit trail. Preferences let you highlight low stock and optionally prevent selling below zero.",
          "Manage customers and vendors, filter by type, and search by name or phone. Pro users can import device contacts in bulk and track multiple warehouse or store locations per item.",
        ]}
        left={{
          src: MOCKUP_IMAGES.stock,
          alt: "Inventory Stock Tracker stock in and stock out movement screen",
          caption: "Stock movements",
        }}
        right={{
          src: MOCKUP_IMAGES.contacts,
          alt: "Inventory Stock Tracker contacts list for customers and vendors",
          caption: "Customers & vendors",
        }}
        bgClass="bg-ei-cream"
      />
    </>
  );
}
