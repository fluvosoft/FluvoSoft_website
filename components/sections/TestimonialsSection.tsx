"use client";

import Card from "@/components/ui/Card";

const testimonials = [
  {
    quote:
      "Testing out FluvoSoft's polished UI—this is exactly what we've been waiting for. The components feel fast, clean, and production-ready.",
    name: "Fabrizio Fernandez",
    handle: "@fab3304",
    initial: "F",
  },
  {
    quote:
      "Digging into FluvoSoft UI. Those shadows are giving me serious design envy—everything looks crisp and intentional.",
    name: "Felix Beaumont",
    handle: "@felixbs",
    initial: "F",
  },
  {
    quote:
      "The animations and spacing are spot on. It feels premium without being heavy—perfect for modern landing pages.",
    name: "Ida N.",
    handle: "@idan",
    initial: "I",
  },
  {
    quote:
      "Exploring FluvoSoft's sleek UI. It's like a dark mode enthusiast's playground—fast, accessible, and beautifully consistent.",
    name: "Darius Flynn",
    handle: "@flynnn",
    initial: "D",
  },
  {
    quote:
      "Just made my first website with it. The layout system is speaking my language—everything snaps into place seamlessly.",
    name: "Kai Nakamura",
    handle: "@KaiNakWave",
    initial: "K",
  },
];

// Split into two rows
const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3);

// Duplicate for seamless infinite scroll
const firstRowDuplicated = [...firstRow, ...firstRow];
const secondRowDuplicated = [...secondRow, ...secondRow];

function TestimonialCard({ testimonial, className = "" }: { testimonial: typeof testimonials[0]; className?: string }) {
  return (
    <Card
      variant="bordered"
      className={`group shrink-0 bg-white/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-black/20 ${className}`}
      style={{ width: "400px" }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-medium text-foreground">
          {testimonial.initial}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground">{testimonial.name}</p>
          <p className="truncate text-xs text-accent">{testimonial.handle}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/90">{testimonial.quote}</p>
    </Card>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Loved by designers and
            <br />
            developers across the planet
          </h2>
          <p className="mt-4 text-sm text-accent md:text-base">
            Here's what people are saying about FluvoSoft UI
          </p>
        </div>

        {/* First row - scroll right to left */}
        <div className="relative mt-12 overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
          <div className="flex gap-6 animate-scroll-right-to-left">
            {firstRowDuplicated.map((t, idx) => (
              <TestimonialCard key={`row1-${idx}`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Second row - scroll left to right */}
        <div className="relative mt-6 overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
          <div className="flex gap-6 animate-scroll-left-to-right">
            {secondRowDuplicated.map((t, idx) => (
              <TestimonialCard key={`row2-${idx}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
