import EasyInvoicePhoneMockup from "./EasyInvoicePhoneMockup";

const MOCKUP_IMAGES = {
  dashboard: "/images/easy invoice mocup-1.jpeg",
  template: "/images/easy invoice mocup-2.jpeg",
  createInvoice: "/images/easy invoice mocup-3.jpeg",
  invoiceList: "/images/easy invoice mocup-4.jpeg",
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
        {/* Desktop: phone | copy | phone */}
        <div className="hidden items-center gap-8 lg:grid lg:grid-cols-[1fr_1.2fr_1fr] xl:gap-12">
          <div className="flex justify-center">
            <EasyInvoicePhoneMockup
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
            <EasyInvoicePhoneMockup
              src={right.src}
              alt={right.alt}
              caption={right.caption}
              screenWidth={220}
            />
          </div>
        </div>

        {/* Mobile / tablet */}
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
            <EasyInvoicePhoneMockup
              src={left.src}
              alt={left.alt}
              caption={left.caption}
              screenWidth={160}
            />
            <EasyInvoicePhoneMockup
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

export default function EasyInvoiceShowcaseSections() {
  return (
    <>
      <ShowcaseBlock
        badge="Dashboard & invoicing"
        title="Invoice Management Made Simple"
        paragraphs={[
          "The dashboard gives you a real-time overview of revenue, paid and unpaid totals, invoice counts, and month-over-month trends — plus charts, a client activity heatmap, and quick actions so you always know where your business stands.",
          "When it is time to bill, open the create-invoice flow: add clients and line items, apply tax and discounts, choose payment methods, and preview your document live before you save or share it.",
        ]}
        left={{
          src: MOCKUP_IMAGES.dashboard,
          alt: "Easy Invoice dashboard overview showing revenue and analytics",
          caption: "Dashboard overview",
        }}
        right={{
          src: MOCKUP_IMAGES.createInvoice,
          alt: "Easy Invoice create invoice screen with line items and totals",
          caption: "Create invoice",
        }}
        bgClass="bg-white"
      />

      <ShowcaseBlock
        badge="Templates & records"
        title="Free Invoice Templates for Android"
        paragraphs={[
          "Choose from 20 branded invoice templates with a live preview during onboarding or anytime in settings. Pick the layout that fits your shop and set it as your default for new documents.",
          "Your invoice library keeps every document organized — view drafts, sent, paid, and overdue items in a clean grid or list, duplicate past invoices, and stay synced with Firebase and the cloud.",
        ]}
        left={{
          src: MOCKUP_IMAGES.template,
          alt: "Easy Invoice template selection with live preview",
          caption: "Invoice templates",
        }}
        right={{
          src: MOCKUP_IMAGES.invoiceList,
          alt: "Easy Invoice list of created invoices with statuses",
          caption: "Created invoices",
        }}
        bgClass="bg-ei-cream"
      />
    </>
  );
}
