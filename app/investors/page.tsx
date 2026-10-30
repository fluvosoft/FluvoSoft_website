import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo";
import { STUDIO_PRODUCTS } from "@/data/studioProducts";

const title = "Investors – FluvoSoft, an Apps & Automation Venture Studio";
const description =
  "FluvoSoft is a bootstrapped apps and automation venture studio. Six products live, 500+ app downloads and 7,000+ website visitors. Learn about our model, traction and team.";

export const metadata: Metadata = {
  title: { absolute: `${title}` },
  description,
  keywords: ["FluvoSoft investors", "FluvoSoft funding", "app venture studio", "bootstrapped app studio", "invest in app studio", "mobile app startup Bangladesh", "FluvoSoft Crunchbase"],
  alternates: { canonical: "/investors" },
  openGraph: { title, description, url: "/investors" },
};

const traction = [
  { v: "6", l: "Products live" },
  { v: "500+", l: "App downloads" },
  { v: "7,000+", l: "Website visitors" },
  { v: "2", l: "Platforms: web & Android" },
];

const model = [
  { t: "Shared engine", b: "One team, design system and release pipeline power every product, so each launch is faster and cheaper than the last." },
  { t: "Small, focused apps", b: "Each app solves one clear problem for a large audience: PDFs, notes, invoices, inventory, habits and resumes." },
  { t: "Capital-efficient", b: "Bootstrapped so far. We ship, measure real usage, then double down on the products that pull." },
  { t: "Privacy as a feature", b: "On-device processing and no forced sign-ups build trust with users in the US and worldwide." },
];

export default function InvestorsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: title,
    description,
    url: `${siteConfig.url}/investors`,
    about: { "@id": `${siteConfig.url}#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-background px-6 pb-20 pt-28 lg:px-8" role="main">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-medium uppercase tracking-wider text-cta">Investors</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-foreground md:text-6xl">
            A studio that turns small apps into a product portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-accent">
            FluvoSoft is an apps and automation venture studio based in Dhaka, Bangladesh. We build, launch and run our
            own products for users in the United States and worldwide.
          </p>

          <dl className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 lg:grid-cols-4">
            {traction.map((x, i) => (
              <div key={x.l} className={`p-6 md:p-8 ${i % 2 ? "border-l border-white/10" : ""} ${i > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
                <dd className="text-4xl font-medium tracking-tight text-foreground md:text-5xl">{x.v}</dd>
                <dt className="mt-2 text-sm text-accent">{x.l}</dt>
              </div>
            ))}
          </dl>

          <section className="mt-20" aria-labelledby="model">
            <h2 id="model" className="text-2xl font-medium text-foreground md:text-3xl">The studio model</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {model.map((m) => (
                <div key={m.t} className="rounded-xl border border-white/10 bg-[#111111] p-6">
                  <h3 className="font-medium text-foreground">{m.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-accent">{m.b}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20" aria-labelledby="portfolio">
            <h2 id="portfolio" className="text-2xl font-medium text-foreground md:text-3xl">Portfolio</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {STUDIO_PRODUCTS.map((p) => (
                <li key={p.id} className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#111111] p-4">
                  <span className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-xl ${p.logoBg ?? "bg-white"}`}>
                    <Image src={p.logo} alt={`${p.name} logo`} fill sizes="48px" className="object-contain p-1" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">{p.name}</p>
                    <p className="truncate text-xs text-muted">{p.category}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-20" aria-labelledby="team">
            <h2 id="team" className="text-2xl font-medium text-foreground md:text-3xl">Team</h2>
            <p className="mt-4 max-w-2xl text-accent">
              Led by Md Sifat Bin Jibon (CEO) and Shouvick Monzur (CTO). Meet the full team on our{" "}
              <Link href="/about" className="text-foreground underline underline-offset-4">About page</Link>.
            </p>
          </section>

          <section className="mt-20 rounded-2xl border border-white/10 bg-[#111111] p-8 md:p-12" aria-labelledby="talk">
            <h2 id="talk" className="text-2xl font-medium text-foreground md:text-3xl">Talk to us</h2>
            <p className="mt-3 max-w-xl text-accent">For investment and partnership conversations, send us a message and choose &quot;Partnership&quot;.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#book-a-demo" className="rounded-md bg-cta px-6 py-3 text-sm font-medium text-white hover:bg-cta/90">Contact the founders</Link>
              <a href="https://www.crunchbase.com/organization/fluvosoft" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-foreground hover:border-white/40">Crunchbase ↗</a>
              <a href="https://www.linkedin.com/company/fluvo-soft" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-foreground hover:border-white/40">LinkedIn ↗</a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
