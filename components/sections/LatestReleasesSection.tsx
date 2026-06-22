import LatestReleasesSlider from "@/components/sections/LatestReleasesSlider";

export default function LatestReleasesSection() {
  return (
    <section
      id="latest-releases"
      className="relative overflow-hidden bg-background px-6 py-10 lg:px-8 lg:py-14"
      aria-labelledby="latest-releases-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,107,62,0.08),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cta/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-container">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-cta">
            Latest releases
          </p>
          <h2
            id="latest-releases-heading"
            className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Products we ship
          </h2>
          <p className="mt-4 text-base leading-relaxed text-accent md:text-lg">
            Mobile apps and tools built and launched by FluvoSoft — ready to download and use today.
          </p>
        </header>

        <LatestReleasesSlider />
      </div>
    </section>
  );
}
