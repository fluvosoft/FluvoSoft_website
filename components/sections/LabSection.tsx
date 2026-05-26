import Link from "next/link";

export default function LabSection() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="lab-heading">
      <div className="mx-auto max-w-container">
        <div className="rounded-2xl border border-white/10 bg-dashboard-card px-8 py-16 text-center md:px-12 lg:px-20">
          <p className="text-sm font-medium uppercase tracking-wider text-cta">FluvoSoft Lab</p>
          <h2
            id="lab-heading"
            className="mx-auto mt-4 max-w-3xl text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            The Old Economy is Dying. We Are Building the New One.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-accent md:text-lg">
            Don&apos;t just watch the next trillion-dollar wealth transfer—control it. We are moving the world&apos;s real assets on-chain, making finance instant, borderless, and programmable. The future belongs to those who build it first.
          </p>
          <Link
            href="#book-a-demo"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-cta px-6 py-3 text-sm font-medium text-white no-underline transition hover:bg-cta/90"
          >
            Seize the Future
          </Link>
        </div>
      </div>
    </section>
  );
}
