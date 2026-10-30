import Link from "next/link";

const categories = [
  {
    tag: "01",
    title: "Productivity apps",
    description: "Small, focused tools for everyday work: handle documents, keep priorities in view and build better habits.",
    products: [
      { name: "TeenyPDF", href: "/teenypdf" },
      { name: "OneThing", href: "/onething" },
      { name: "KYOTO Habit Tracker", href: "/kyoto-habit-tracker" },
    ],
  },
  {
    tag: "02",
    title: "Business tools",
    description: "Apps that run the paperwork side of a small business, from invoices and payments to stock and staff.",
    products: [
      { name: "Easy Invoice", href: "/easy-invoice" },
      { name: "Inventory Stock Tracker", href: "/inventory-stock-tracker" },
    ],
  },
  {
    tag: "03",
    title: "Career tools",
    description: "Tools that help people present themselves well and get to the next job faster.",
    products: [{ name: "Resume Builder", href: "/resume-builder" }],
  },
];

export default function WhatWeBuildSection() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="what-we-build-heading">
      <div className="mx-auto max-w-container">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-cta">What we build</p>
          <h2 id="what-we-build-heading" className="mt-2 text-2xl font-medium text-foreground md:text-3xl lg:text-4xl">
            Three shelves, one standard
          </h2>
          <p className="mt-4 text-accent">
            Every FluvoSoft product sits in one of these categories, and each one is designed, built and maintained in-house.
          </p>
        </div>

        <div className="mt-10 grid divide-y divide-white/10 border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {categories.map((c) => (
            <div key={c.title} className="flex flex-col py-8 md:px-8 md:first:pl-0 md:last:pr-0">
              <span className="font-mono text-xs text-cta">{c.tag}</span>
              <h3 className="mt-3 text-xl font-medium text-foreground">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-accent">{c.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.products.map((p) => {
                  const ext = p.href.startsWith("http");
                  return (
                    <li key={p.name}>
                      <Link
                        href={p.href}
                        {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs text-foreground transition hover:border-cta hover:text-cta"
                      >
                        {p.name} <span aria-hidden>{ext ? "↗" : "→"}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
