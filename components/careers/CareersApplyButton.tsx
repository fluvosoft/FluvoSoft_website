"use client";

import { useCallback, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CAREERS_APPLY_EMAIL } from "@/data/resourcesPages";

function applySubject(role: string) {
  return `Intern Application — ${role}`;
}

export function CareersApplyButton({
  role,
  variant = "pill",
  label = "Apply now",
  className = "",
}: {
  role: string;
  variant?: "pill" | "link";
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleApply = useCallback(async () => {
    const subject = applySubject(role);
    const text = `Email: ${CAREERS_APPLY_EMAIL}\nSubject: ${subject}`;

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 3500);
  }, [role]);

  if (variant === "link") {
    return (
      <button
        type="button"
        onClick={handleApply}
        className={`group inline-flex items-center gap-2 text-sm text-careers-primary transition hover:gap-3 ${className}`}
        aria-label={`Copy application email for ${role}`}
      >
        {copied ? "Email copied" : label}
        <ArrowRight
          className="h-4 w-4 -rotate-45 transition group-hover:translate-x-0.5"
          aria-hidden
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleApply}
      className={`group inline-flex w-fit items-center gap-2 rounded-full bg-careers-primary py-2 pl-5 pr-2 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base ${className}`}
      aria-label={`Copy application email for ${role}`}
    >
      {copied ? "Email copied!" : label}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition group-hover:scale-110 sm:h-10 sm:w-10">
        <ArrowRight className="h-4 w-4 text-careers-primary" aria-hidden />
      </span>
    </button>
  );
}
