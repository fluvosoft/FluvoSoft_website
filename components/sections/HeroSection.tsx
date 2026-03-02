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
              Blockchain Consulting &<br />
              Automation Partner
            </h1>
          </div>

          {/* Vertical divider */}
          <div className="hidden h-24 w-px bg-white/10 lg:block" />

          {/* Right section - Buttons (1/3 width) */}
          <div className="flex flex-col gap-4 lg:w-1/3 lg:items-center lg:pl-8">
            <Link
              href="#book-a-demo"
              className="inline-flex w-full items-center justify-center rounded-md bg-cta px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-cta/25 transition hover:bg-cta/90 focus-visible:ring-2 focus-visible:ring-cta/50"
            >
              Get Pricing
            </Link>
            <Link
              href="#book-a-demo"
              className="inline-flex w-full items-center justify-center rounded-md bg-cta px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-cta/25 transition hover:bg-cta/90 focus-visible:ring-2 focus-visible:ring-cta/50"
            >
              Schedule a Consultation
            </Link>
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
