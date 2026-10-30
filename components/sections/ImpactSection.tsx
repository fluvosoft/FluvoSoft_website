import Image from "next/image";

const stats = [
  { value: "7,000+", label: "Web app users", note: "on TeenyPDF and Easy Invoice web" },
  { value: "500+", label: "App downloads", note: "on Google Play" },
  { value: "6", label: "Products shipped", note: "built and run in-house" },
  { value: "2", label: "Platforms", note: "Web and Android" },
];

const places = [
  { name: "teenypdf.com", desc: "TeenyPDF web app", href: "https://www.teenypdf.com/", logo: "/teenypdf/teenypdf_logo.png" },
  { name: "easyinvoice.fluvosoft.com", desc: "Easy Invoice web app", href: "https://easyinvoice.fluvosoft.com/", logo: "/images/easy_invoice_logo.webp" },
  { name: "Google Play", desc: "All our Android apps", href: "https://play.google.com/store/apps/dev?id=8673019455685564114", logo: "/images/google-play-badge.webp" },
];

export default function ImpactSection() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-container">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-cta">The people we serve</p>
          <h2 id="impact-heading" className="mt-2 text-2xl font-medium text-foreground md:text-3xl lg:text-4xl">
            Real people use our products every day
          </h2>
          <p className="mt-4 text-accent">
            From freelancers sending invoices to students converting PDFs, thousands of people have found a FluvoSoft
            product that saves them time.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 md:p-8 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${i > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dd className="text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                {s.value.replace(/\+$/, "")}
                {s.value.endsWith("+") && <span className="text-cta">+</span>}
              </dd>
              <dt className="mt-3 text-sm font-medium text-foreground">{s.label}</dt>
              <p className="mt-1 text-xs text-muted">{s.note}</p>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">Where to find us</p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {places.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#111111] p-4 transition hover:border-white/25"
                >
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white">
                    <Image src={p.logo} alt="" fill sizes="40px" className="object-contain p-1" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm text-foreground group-hover:text-cta">{p.name}</span>
                    <span className="block truncate text-xs text-muted">{p.desc}</span>
                  </span>
                  <span aria-hidden className="text-muted group-hover:text-cta">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
