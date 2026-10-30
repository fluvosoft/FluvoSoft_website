import Image from "next/image";

const stage =
  "relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-xl border border-white/5 p-6 md:min-h-[300px]";

function ProductChip({ logo, name, logoBg = "bg-white" }: { logo: string; name: string; logoBg?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pl-1 pr-3 text-xs text-accent">
      <span className={`relative h-5 w-5 overflow-hidden rounded-full ${logoBg}`}>
        <Image src={logo} alt="" fill sizes="20px" className="object-contain p-0.5" />
      </span>
      {name}
    </span>
  );
}

/* 1 — OneThing: one note, in the app's own paper style */
function FocusVisual() {
  return (
    <div className={`${stage} bg-[#F3EDE3]`}>
      <div className="relative w-full max-w-[290px]">
        <div className="absolute inset-x-8 -bottom-4 h-full rounded-2xl border-2 border-neutral-900/10 bg-[#E4DCCF]" />
        <div className="absolute inset-x-4 -bottom-2 h-full rounded-2xl border-2 border-neutral-900/15 bg-[#EAE3D7]" />
        <div className="relative rotate-[-2deg] rounded-2xl border-2 border-neutral-900 bg-[#FBF8F2] p-5 shadow-[4px_4px_0_#171717]">
          <div className="flex items-center justify-between">
            <span className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-neutral-900 text-xs font-bold text-neutral-900">
              1<span className="text-[#E8590C]">.</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">now</span>
          </div>
          <p className="mt-3 font-serif text-xl font-semibold leading-snug text-neutral-900">Finish the pitch deck</p>
          <p className="mt-1 font-serif text-xs text-neutral-500">Your active note. Archive it when you&apos;re done.</p>
        </div>
      </div>
    </div>
  );
}

/* 2 — Easy Invoice: background flow */
function FlowVisual() {
  const steps = [
    { t: "Invoice INV-1042 created", s: "09:14" },
    { t: "Sent to client as PDF", s: "09:15" },
    { t: "Payment marked as received", s: "Thu" },
    { t: "Dashboard revenue updated", s: "auto" },
  ];
  return (
    <div className={`${stage} bg-[#0d1514]`}>
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#2A9D9F]/20 blur-3xl" />
      <ol className="relative w-full max-w-[310px]">
        {steps.map((x, i) => (
          <li key={x.t} className="relative flex gap-3 pb-5 last:pb-0">
            {i < steps.length - 1 && <span className="absolute left-[9px] top-5 h-full w-px bg-[#2A9D9F]/30" />}
            <span
              className={`relative mt-0.5 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border text-[10px] ${
                i < 3 ? "border-[#2A9D9F] bg-[#2A9D9F]/20 text-[#5fd3d5]" : "border-[#2A9D9F]/40 text-[#5fd3d5]"
              }`}
            >
              {i < 3 ? "✓" : <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5fd3d5]" />}
            </span>
            <div className="flex flex-1 items-baseline justify-between gap-3">
              <span className="text-sm text-foreground">{x.t}</span>
              <span className="font-mono text-[11px] text-muted">{x.s}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* 3 — TeenyPDF: files stay on device */
function PrivacyVisual() {
  return (
    <div className={`${stage} bg-[#160d0e]`}>
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-[#E5484D]/20 blur-3xl" />
      <div className="relative w-full max-w-[310px] rounded-xl border border-white/10 bg-black/50 p-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-8 items-center justify-center rounded-md bg-[#E5484D] text-[9px] font-bold text-white">PDF</span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm text-foreground">contract_signed.pdf</p>
            <p className="text-[11px] text-muted">2.4 MB → 640 KB</p>
          </div>
          <span className="text-xs text-[#ff8a8d]">Compressed</span>
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full rounded-full bg-[#E5484D]" />
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
          {[
            ["Uploaded to server", "Never"],
            ["Processed", "On device"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-md border border-white/5 px-2.5 py-2">
              <dt className="text-muted">{k}</dt>
              <dd className="mt-0.5 font-medium text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

/* 4 — Studio shelf: the products we've shipped */
function ShelfVisual() {
  const apps = [
    { n: "TeenyPDF", l: "/teenypdf/teenypdf_logo.png", p: "Web · Android" },
    { n: "OneThing", l: "/OneThing/logo.png", p: "Android" },
    { n: "Easy Invoice", l: "/images/easy_invoice_logo.webp", p: "Web · Android" },
    { n: "Inventory Stock Tracker", l: "/images/inventory_stock_tracker_logo.webp", p: "Android" },
    { n: "KYOTO Habit Tracker", l: "/habit_tracker/habit_tracker_kyoto_logo.png", p: "Android" },
    { n: "Resume Builder", l: "/images/resume-builder/resume_builder_logo.webp", p: "Android" },
  ];
  return (
    <div className={`${stage} bg-[#0f0f0f]`}>
      <ul className="grid w-full max-w-[340px] grid-cols-3 gap-3">
        {apps.map((a) => (
          <li key={a.n} className="flex flex-col items-center text-center">
            <span className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white">
              <Image src={a.l} alt={`${a.n} logo`} fill sizes="56px" className="object-contain p-1.5" />
            </span>
            <span className="mt-2 line-clamp-1 text-[11px] text-foreground">{a.n}</span>
            <span className="text-[10px] text-muted">{a.p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const features = [
  {
    title: "One job, done well",
    description: "Every product solves one clear problem. OneThing keeps a single note on your home and lock screen, and nothing else.",
    chip: { name: "OneThing", logo: "/OneThing/logo.png" },
    Visual: FocusVisual,
  },
  {
    title: "Automation that runs quietly",
    description: "Easy Invoice handles the follow-through: PDFs, payment status and revenue totals update without extra work.",
    chip: { name: "Easy Invoice", logo: "/images/easy_invoice_logo.webp" },
    Visual: FlowVisual,
  },
  {
    title: "Private by default",
    description: "TeenyPDF works on your device, so your documents are never uploaded. No forced sign-ups across our apps.",
    chip: { name: "TeenyPDF", logo: "/teenypdf/teenypdf_logo.png" },
    Visual: PrivacyVisual,
  },
  {
    title: "Shipped, not just planned",
    description: "Six products live on the web and Google Play, built, launched and maintained by our own team.",
    chip: { name: "FluvoSoft studio", logo: "/images/fluvo_logo.webp", logoBg: "bg-neutral-800" },
    Visual: ShelfVisual,
  },
];

export default function LaunchFeaturesSection() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="features-heading">
      <div className="mx-auto max-w-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-cta">Our principles</p>
          <h2 id="features-heading" className="mt-2 text-2xl font-medium text-foreground md:text-3xl lg:text-4xl">
            How we build our products
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {features.map(({ title, description, chip, Visual }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-white/5 bg-[#111111] p-4 transition-colors duration-300 hover:border-white/15 md:p-5"
            >
              <Visual />
              <div className="px-1 pb-1 pt-5">
                <ProductChip {...chip} />
                <h3 className="mt-3 text-lg font-medium text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-accent">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
