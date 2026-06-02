"use client";

import Image from "next/image";
import { AndroidMockup } from "react-device-mockup";

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
      <AndroidMockup
        screenWidth={screenWidth}
        frameColor="#1A3C2E"
        frameOnly
        hideStatusBar
        hideNavBar
        noRoundedScreen={false}
        className={animate ? "" : "drop-shadow-xl"}
      >
        <Image
          src={src}
          alt={alt}
          width={400}
          height={866}
          className="h-full w-full bg-black object-contain object-center"
          sizes={`${screenWidth}px`}
          priority={priority}
        />
      </AndroidMockup>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm font-medium text-ei-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
