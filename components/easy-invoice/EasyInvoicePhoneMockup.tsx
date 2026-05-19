"use client";

import Image from "next/image";
import { IPhoneMockup } from "react-device-mockup";

type EasyInvoicePhoneMockupProps = {
  src: string;
  alt: string;
  caption?: string;
  screenWidth?: number;
};

export default function EasyInvoicePhoneMockup({
  src,
  alt,
  caption,
  screenWidth = 220,
}: EasyInvoicePhoneMockupProps) {
  return (
    <figure className="flex flex-col items-center">
      <IPhoneMockup
        screenWidth={screenWidth}
        screenType="island"
        hideStatusBar
        hideNavBar
        frameColor="#2d2d2d"
        className="drop-shadow-xl"
      >
        <div className="flex h-full w-full items-center justify-center overflow-hidden bg-white p-2">
          <Image
            src={src}
            alt={alt}
            width={400}
            height={844}
            className="h-[99%] w-[100%] object-contain object-center"
            sizes={`${screenWidth}px`}
          />
        </div>
      </IPhoneMockup>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm font-medium text-ei-textPrimary/70">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
