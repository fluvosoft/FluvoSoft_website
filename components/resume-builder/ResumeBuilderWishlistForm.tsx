"use client";

import { FormEvent, useId, useState } from "react";

export default function ResumeBuilderWishlistForm({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [startedAt] = useState(() => Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const emailInputId = useId();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback("");

    try {
      const response = await fetch("/api/resume-builder/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          website,
          elapsedMs: Date.now() - startedAt,
        }),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Could not join the wishlist.");
      }

      setIsSuccess(true);
      setFeedback("You’re on the wishlist! We’ll notify you at launch.");
      setEmail("");
      setWebsite("");
    } catch (error) {
      setIsSuccess(false);
      setFeedback(
        error instanceof Error ? error.message : "Could not join the wishlist. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={`w-full max-w-md ${className}`} onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
      />
      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor={emailInputId}>
          Gmail address
        </label>
        <input
          id={emailInputId}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your Gmail address"
          pattern="[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail\.com"
          title="Please enter a Gmail address ending in @gmail.com"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="min-w-0 flex-1 rounded-full border border-rb-navy/15 bg-white px-5 py-3 text-sm text-rb-navy shadow-sm outline-none placeholder:text-rb-muted/70 focus:border-rb-brand focus:ring-2 focus:ring-rb-brand/20"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="rb-cta-primary shrink-0 rounded-full bg-rb-navy px-6 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Joining…" : "Wishlist now"}
        </button>
      </div>
      <p className={`mt-2 text-xs ${isSuccess ? "text-emerald-700" : "text-rb-muted"}`}>
        {feedback || "Gmail addresses only. No spam — just launch updates."}
      </p>
    </form>
  );
}
