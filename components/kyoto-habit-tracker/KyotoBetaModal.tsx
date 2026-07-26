"use client";

import { useEffect } from "react";
import KyotoWishlistForm from "./KyotoWishlistForm";

interface KyotoBetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KyotoBetaModal({ isOpen, onClose }: KyotoBetaModalProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-ky-ink/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="ky-beta-modal-title"
      aria-describedby="ky-beta-modal-desc"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-ky-ink/10 bg-ky-peach p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ky-muted transition hover:bg-ky-ink/10 hover:text-ky-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ky-coral"
          aria-label="Close"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="pr-8">
          <span className="inline-flex rounded-full border border-ky-coral/40 bg-ky-coral/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ky-ink">
            Launching soon
          </span>
          <h2
            id="ky-beta-modal-title"
            className="mt-4 font-ky-heading text-xl font-bold text-ky-ink sm:text-2xl"
          >
            Join the KYOTO wishlist
          </h2>
          <p id="ky-beta-modal-desc" className="mt-3 text-sm leading-relaxed text-ky-muted sm:text-base">
            Be among the first to know when KYOTO Habit Tracker launches. Enter your Gmail address
            and we’ll send you the release update.
          </p>
        </div>

        <div className="mt-6">
          <KyotoWishlistForm />
          <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full rounded-xl px-4 py-2 text-sm font-medium text-ky-muted transition hover:text-ky-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ky-coral"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
