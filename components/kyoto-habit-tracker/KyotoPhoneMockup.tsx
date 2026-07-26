"use client";

import Image from "next/image";
import { IPhoneMockup } from "react-device-mockup";

type KyotoPhoneMockupProps = {
  src?: string;
  alt: string;
  caption?: string;
  screenWidth?: number;
  priority?: boolean;
  animate?: boolean;
  placeholderLabel?: string;
};

export default function KyotoPhoneMockup({
  src,
  alt,
  caption,
  screenWidth = 220,
  priority = false,
  animate = false,
  placeholderLabel = "Screenshot coming soon",
}: KyotoPhoneMockupProps) {
  const isPlaceholder = !src;

  return (
    <figure
      className={`flex flex-col items-center ${animate ? "ky-phone-enter ky-phone-shadow" : ""}`}
    >
      <IPhoneMockup
        screenWidth={screenWidth}
        screenType="island"
        hideStatusBar
        hideNavBar
        frameColor="#1A1A1A"
        className={animate ? "" : "drop-shadow-xl"}
      >
        <div className="flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-b from-ky-peach to-white p-2">
          {isPlaceholder ? (
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gradient-to-br from-ky-coral/20 via-ky-blush/20 to-ky-peach px-4 text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-ky-coral/20">
                <svg
                  className="h-6 w-6 text-ky-coral"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-xs font-semibold text-ky-ink">{placeholderLabel}</p>
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
        <figcaption className="mt-4 text-center text-sm font-medium text-ky-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
