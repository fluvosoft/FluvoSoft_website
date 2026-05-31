"use client";

import { useEffect } from "react";
import { DownloadApkButton } from "./StoreButtons";

interface InventoryStockTrackerBetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InventoryStockTrackerBetaModal({
  isOpen,
  onClose,
}: InventoryStockTrackerBetaModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ei-forest/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="ist-beta-modal-title"
      aria-describedby="ist-beta-modal-desc"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-ei-forest/10 bg-ei-cream p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ei-muted transition hover:bg-ei-forest/10 hover:text-ei-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ei-lime"
          aria-label="Close"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="pr-8">
          <span className="inline-flex rounded-full border border-ei-lime/40 bg-ei-lime/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ei-forest">
            Coming soon
          </span>
          <h2
            id="ist-beta-modal-title"
            className="mt-4 font-ei-heading text-xl font-bold text-ei-forest sm:text-2xl"
          >
            Store listings coming soon
          </h2>
          <p id="ist-beta-modal-desc" className="mt-3 text-sm leading-relaxed text-ei-muted sm:text-base">
            Inventory Stock Tracker v1.0.0 is on Google Play soon. Install now on Android 7.0+ with
            the release APK below (package fluvosoft.com).
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <DownloadApkButton className="w-full justify-center sm:flex-1" />
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-4 py-3 text-sm font-medium text-ei-muted transition hover:text-ei-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ei-lime"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
