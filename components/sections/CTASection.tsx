import Link from "next/link";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="cta-heading"
          className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          Ready to transform your business?
        </h2>
        <p className="mt-4 text-accent">
          Get in touch with our team to discuss your project and discover how FluvoSoft can help.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="#book-a-demo">
            <Button size="lg">Book a Demo</Button>
          </Link>
          <Link href="#book-a-demo">
            <Button variant="outline" size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
