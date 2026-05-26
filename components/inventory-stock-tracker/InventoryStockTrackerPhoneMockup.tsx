"use client";

import Image from "next/image";
import { IPhoneMockup } from "react-device-mockup";

type InventoryStockTrackerPhoneMockupProps = {
  src: string;
  alt: string;
  caption?: string;
  screenWidth?: number;
  priority?: boolean;
  animate?: boolean;
};

export default function InventoryStockTrackerPhoneMockup({
  src,
  alt,
  caption,
  screenWidth = 220,
  priority = false,
  animate = false,
}: InventoryStockTrackerPhoneMockupProps) {
  return (
    <figure
      className={`flex flex-col items-center ${animate ? "ei-phone-enter ei-phone-shadow" : ""}`}
    >
      <IPhoneMockup
        screenWidth={screenWidth}
        screenType="island"
        hideStatusBar
        hideNavBar
        frameColor="#1A3C2E"
        className={animate ? "" : "drop-shadow-xl"}
      >
        <div className="flex h-full w-full items-center justify-center overflow-hidden bg-white p-2">
          <Image
            src={src}
            alt={alt}
            width={400}
            height={844}
            className="h-[99%] w-[100%] object-contain object-center"
            sizes={`${screenWidth}px`}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            unoptimized={src.endsWith(".svg")}
          />
        </div>
      </IPhoneMockup>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm font-medium text-ei-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
