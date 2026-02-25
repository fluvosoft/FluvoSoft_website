import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative px-6 pt-8 pb-12 lg:px-8 lg:pt-14 lg:pb-16">
      <div className="mx-auto max-w-container text-center">
        <p className="mx-auto mb-2 max-w-xl text-sm font-medium uppercase tracking-wider text-cta">
          FluvoSoft venture catalysts studio
        </p>
        <p className="mx-auto mb-4 max-w-xl text-sm font-medium uppercase tracking-wider text-accent">
          FluvoSoft Works With
        </p>
        <h1 className="mx-auto max-w-3xl text-hero font-medium leading-tight tracking-tight text-foreground lg:text-hero-lg">
          Blockchain and
          <br />
          <span className="text-foreground-muted">Automation</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg font-normal text-accent lg:text-xl">
          Transform your business with cutting-edge blockchain solutions and intelligent automation. Build secure, decentralized applications and streamline operations with FluvoSoft&apos;s innovative technology platform.
        </p>
        <div className="mt-10 mb-8 flex flex-wrap items-center justify-center gap-4 lg:mt-12 lg:mb-12">
          <Link href="#book-a-demo" className="inline-flex items-center justify-center rounded-md bg-primary-button px-6 py-3 text-sm font-medium text-primary-button-foreground shadow-sm transition hover:opacity-90">
            Get started
          </Link>
          <Link href="#watch-video">
            <Button variant="secondary" size="lg">Watch video</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
