"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import VideoModal from "@/components/ui/VideoModal";
import InteractivePixelCanvas from "@/components/ui/InteractivePixelCanvas";

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Canvas: full webpage width band with interactive pixels */}
      <div className="mb-12 w-full overflow-hidden lg:mb-16">
        <div className="aspect-[4/1] w-full bg-[#f0dcc8]">
          <InteractivePixelCanvas className="cursor-crosshair" />
        </div>
      </div>

      <div className="mx-auto max-w-container px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-0">
          {/* Left section - Text (2/3 width) */}
          <div className="flex-1 lg:w-2/3 lg:pr-8">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-cta">
              FluvoSoft venture catalysts studio
            </p>
            
            <h1 className="text-4xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              Apps & Automation<br />
              Venture Studio
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-accent md:text-lg">
              We're a venture studio that builds and ships our own apps and automation tools,
              simple products that take busywork off your plate so you can focus on what matters.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden h-24 w-px bg-white/10 lg:block" />

          {/* Right section - CTAs (1/3 width) */}
          <div className="flex flex-col gap-4 lg:w-1/3 lg:items-center lg:pl-8">
            <Link
              href="#latest-releases"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-cta px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-cta/25 transition hover:bg-cta/90 focus-visible:ring-2 focus-visible:ring-cta/50"
            >
              Explore Our Products
              <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
            </Link>
            <a
              href="https://play.google.com/store/apps/dev?id=8673019455685564114"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-foreground/15 px-8 py-3.5 text-sm font-medium text-foreground transition hover:border-cta hover:text-cta focus-visible:ring-2 focus-visible:ring-cta/50"
            >
              See Our Apps on Google Play
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/videos/Gig_Preview.mp4"
      />
    </section>
  );
}
