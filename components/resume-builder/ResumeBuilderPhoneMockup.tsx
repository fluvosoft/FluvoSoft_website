"use client";

import Image from "next/image";
import { IPhoneMockup } from "react-device-mockup";

type ResumeBuilderPhoneMockupProps = {
  src?: string;
  alt: string;
  caption?: string;
  screenWidth?: number;
  priority?: boolean;
  animate?: boolean;
  placeholderLabel?: string;
};

export default function ResumeBuilderPhoneMockup({
  src,
  alt,
  caption,
  screenWidth = 220,
  priority = false,
  animate = false,
  placeholderLabel = "Screenshot coming soon",
}: ResumeBuilderPhoneMockupProps) {
  const isPlaceholder = !src;

  return (
    <figure
      className={`flex flex-col items-center ${animate ? "rb-phone-enter rb-phone-shadow" : ""}`}
    >
      <IPhoneMockup
        screenWidth={screenWidth}
        screenType="island"
        hideStatusBar
        hideNavBar
        frameColor="#0D2847"
        className={animate ? "" : "drop-shadow-xl"}
      >
        <div className="flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-b from-rb-cream to-white p-2">
          {isPlaceholder ? (
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gradient-to-br from-rb-brand/20 via-rb-sky/10 to-rb-cream px-4 text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-rb-brand/20">
                <svg className="h-6 w-6 text-rb-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-rb-navy">{placeholderLabel}</p>
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              width={400}
              height={844}
              className="h-[99%] w-[100%] object-contain object-center"
              sizes={`${screenWidth}px`}
              priority={priority}
              loading={priority ? undefined : "lazy"}
            />
          )}
        </div>
      </IPhoneMockup>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm font-medium text-rb-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
