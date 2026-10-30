import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo";
import type { StudioProduct } from "@/data/studioProducts";

export type ProductLandingConfig = {
  product: StudioProduct;
  path: string;
  h1: string;
  intro: string;
  platforms: string[];
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  features: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  schema: { appName: string; category: string; os: string; url: string };
};

export default function ProductLanding({ c }: { c: ProductLandingConfig }) {
  const p = c.product;
  const pageUrl = `${siteConfig.url}${c.path}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MobileApplication",
        name: c.schema.appName,
        alternateName: p.name,
        description: c.intro,
        applicationCategory: c.schema.category,
        operatingSystem: c.schema.os,
        url: pageUrl,
        installUrl: c.schema.url,
        image: `${siteConfig.url}${p.logo}`,
        screenshot: p.shots.slice(0, 4),
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@id": `${siteConfig.url}#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: p.name, item: pageUrl },
        ],
      },
    ],
  };
  const ext = (h: string) => (h.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-background px-6 pb-20 pt-28 lg:px-8" role="main">
        <div className="mx-auto max-w-container">
          <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl" style={{ background: p.accent }} aria-hidden />
            <div className="relative flex items-center gap-4">
              <span className={`relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 ${p.logoBg ?? "bg-white"}`}>
                <Image src={p.logo} alt={`${p.name} logo`} fill sizes="64px" className="object-contain p-1.5" priority />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">{p.category} · by FluvoSoft</p>
                <p className="text-lg font-medium text-foreground">{p.name}</p>
              </div>
            </div>
            <h1 className="relative mt-8 max-w-3xl text-3xl font-medium tracking-tight text-foreground md:text-5xl">{c.h1}</h1>
            <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-accent md:text-lg">{c.intro}</p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a href={c.primary.href} {...ext(c.primary.href)} className="rounded-md px-6 py-3 text-sm font-medium text-white transition hover:opacity-90" style={{ background: p.accent }}>
                {c.primary.label}
              </a>
              {c.secondary && (
                <a href={c.secondary.href} {...ext(c.secondary.href)} className="rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-foreground transition hover:border-white/40">
                  {c.secondary.label}
                </a>
              )}
            </div>
            <ul className="relative mt-6 flex flex-wrap gap-2 text-xs text-accent">
              {c.platforms.map((x) => (
                <li key={x} className="rounded-full border border-white/10 px-3 py-1">{x}</li>
              ))}
            </ul>
          </header>

          <section aria-label="Screenshots" className="mt-10">
            <ul className="flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {p.shots.map((s, i) => (
                <li key={s} className="shrink-0 snap-start">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s} alt={`${p.name} screenshot ${i + 1}`} loading={i < 3 ? "eager" : "lazy"} referrerPolicy="no-referrer" className="block h-[320px] min-w-[180px] w-auto rounded-xl border border-white/10 bg-neutral-900 object-contain lg:h-[420px] lg:min-w-[236px]" />
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="features" className="mt-16">
            <h2 id="features" className="text-2xl font-medium text-foreground md:text-3xl">Features</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.features.map((f) => (
                <div key={f.title} className="rounded-xl border border-white/10 bg-[#111111] p-5">
                  <h3 className="font-medium text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-accent">{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="faq" className="mt-16 max-w-3xl">
            <h2 id="faq" className="text-2xl font-medium text-foreground md:text-3xl">Frequently asked questions</h2>
            <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {c.faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-medium text-foreground">{f.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-accent">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <p className="mt-16 text-sm text-accent">
            {p.name} is made by <Link href="/" className="text-foreground underline-offset-4 hover:underline">FluvoSoft</Link>, an apps &amp; automation venture studio.{" "}
            <Link href="/privacy" className="text-foreground underline-offset-4 hover:underline">Privacy policy</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
