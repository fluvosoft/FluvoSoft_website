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
        <div className="aspect-[4/1] w-full bg-[#e0cdc6]">
          <InteractivePixelCanvas className="cursor-crosshair" />
        </div>
      </div>

      <div className="mx-auto max-w-container px-6 lg:px-8">
        <div className="text-center">
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
            Transform your business with cutting-edge blockchain solutions and intelligent automation. Build secure,
            decentralized applications and streamline operations with FluvoSoft&apos;s innovative technology platform.
          </p>
          <div className="mt-10 mb-8 flex flex-wrap items-center justify-center gap-4 lg:mt-12 lg:mb-12">
            <Link
              href="#book-a-demo"
              className="inline-flex items-center justify-center rounded-full bg-cta px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-cta/25 transition hover:bg-cta/90 focus-visible:ring-2 focus-visible:ring-cta/50"
            >
              Get Pricing
            </Link>
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-white/40 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Watch video
            </button>
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
