import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="cta-heading" className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Less busywork starts with one app.
        </h2>
        <p className="mt-4 text-accent">Pick a FluvoSoft product and try it today. Most are free to start.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#showcase-heading"
            className="inline-flex items-center justify-center rounded-md bg-cta px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-cta/25 transition hover:bg-cta/90"
          >
            Browse our apps
          </Link>
          <Link
            href="#book-a-demo"
            className="inline-flex items-center justify-center rounded-md border border-foreground/15 px-8 py-3.5 text-sm font-medium text-foreground transition hover:border-cta hover:text-cta"
          >
            Send us feedback
          </Link>
        </div>
      </div>
    </section>
  );
}
