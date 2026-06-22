"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import BookingCalendar, {
  type BookingSelection,
  formatBookingSlot,
} from "@/components/contact/BookingCalendar";

const SERVICES = [
  "Custom Software Development",
  "Mobile App Development",
  "Blockchain Solutions",
  "AI & Automation",
  "SaaS Product Development",
  "Consulting / Discovery Call",
  "Other",
];

const BUDGETS = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const selectClassName =
  "mt-2 w-full rounded-md border border-white/20 bg-background px-3 py-2 text-sm text-foreground focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-brand/50";

const socialIconClassName =
  "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition hover:border-white/20 hover:bg-white/[0.08] hover:text-cta";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/fluvo-soft",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/fluvosoft",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@fluvosoftinfo",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-.584-2.043-1.494-3.453-2.82-4.425-1.33-.975-3.104-1.483-5.275-1.498h-.006c-2.904.02-5.102.98-6.536 2.853-1.332 1.743-2.011 4.248-2.02 7.436v.017c.009 3.19.688 5.695 2.02 7.438 1.434 1.873 3.632 2.833 6.536 2.853h.006c2.297-.015 4.116-.63 5.573-1.893 1.548-1.347 2.41-3.286 2.558-5.77l.008-.142h-5.83v-2.73h8.38c.09.59.14 1.198.15 1.817.044 3.053-.816 5.51-2.557 7.308-1.844 1.893-4.59 2.896-8.164 2.921z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fluvosoftinfo/",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61586723829777",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
] as const;

export default function ContactSection() {
  const [booking, setBooking] = useState<BookingSelection | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    location: "",
    budget: "",
    about: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [startedAt] = useState(() => Date.now());

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback("");

    if (!booking) {
      setFeedback("Please select a date and time for your call.");
      setIsSubmitting(false);
      return;
    }

    const meetingSlot = formatBookingSlot(booking);
    const message = [
      `Preferred call: ${meetingSlot}`,
      formData.service ? `Service: ${formData.service}` : null,
      formData.location ? `Location: ${formData.location}` : null,
      formData.budget ? `Budget: ${formData.budget}` : null,
      "",
      formData.about,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Project inquiry${formData.service ? `: ${formData.service}` : ""}`,
          message,
          service: formData.service,
          location: formData.location,
          budget: formData.budget,
          meetingSlot,
          elapsedMs: Date.now() - startedAt,
          website: formData.website,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data?.ok) {
        throw new Error(data?.message || "Failed");
      }

      setFeedback("Project details sent. We will confirm your call time by email soon.");
      setFormData({
        name: "",
        email: "",
        service: "",
        location: "",
        budget: "",
        about: "",
        website: "",
      });
      setBooking(null);
    } catch (error) {
      if (error instanceof Error && error.message) {
        setFeedback(error.message);
      } else {
        setFeedback("Failed to send your details. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book-a-demo" className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-container">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="grid lg:grid-cols-2">
            {/* Book a quick call */}
            <div className="border-b border-white/10 bg-gradient-to-br from-cta/12 via-cta/5 to-transparent p-6 md:p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] p-2"
                  aria-hidden
                >
                  <Image
                    src="/images/fluvo_logo.png"
                    alt=""
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                    aria-hidden
                  />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-cta">Book a quick call</p>
                  <h2 id="contact-heading" className="mt-1 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                    Talk with our team
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={socialIconClassName}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-xs text-foreground/80">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  30 min
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M8 10h8M8 14h5" />
                  </svg>
                  Google Meet
                </span>
              </div>

              <div className="mt-6">
                <BookingCalendar selection={booking} onSelect={setBooking} />
              </div>
            </div>

            {/* Project form */}
            <div className="p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-cta">Tell me about your project</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Have a project idea in mind?
              </h3>

              {booking ? (
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                      <svg className="h-4 w-4 text-cta" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    </div>
                    <p className="text-sm text-foreground">{formatBookingSlot(booking)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setBooking(null)}
                    className="text-xs font-medium uppercase tracking-wider text-cta transition hover:text-brand-foreground"
                  >
                    Change time slot
                  </button>
                </div>
              ) : (
                <p className="mt-5 rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-accent">
                  Select a date and time on the left to schedule your call.
                </p>
              )}

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="website-contact" className="sr-only">
                    Website
                  </label>
                  <Input
                    id="website-contact"
                    name="website"
                    type="text"
                    autoComplete="off"
                    tabIndex={-1}
                    className="hidden"
                    value={formData.website}
                    onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-foreground">
                      Name <span className="text-cta">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="mt-2"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-foreground">
                      Email <span className="text-cta">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="mt-2"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium uppercase tracking-wider text-foreground">
                      Service <span className="text-cta">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      className={selectClassName}
                      required
                      value={formData.service}
                      onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-xs font-medium uppercase tracking-wider text-foreground">
                      Location <span className="text-cta">*</span>
                    </label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="City, country"
                      className="mt-2"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs font-medium uppercase tracking-wider text-foreground">
                    Budget (USD) <span className="text-cta">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className={selectClassName}
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData((prev) => ({ ...prev, budget: e.target.value }))}
                  >
                    <option value="">Select a budget range</option>
                    {BUDGETS.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="about" className="block text-xs font-medium uppercase tracking-wider text-foreground">
                    About the project <span className="text-cta">*</span>
                  </label>
                  <textarea
                    id="about"
                    rows={4}
                    placeholder="Tell us about your goals, timeline, and what you want to build..."
                    className="mt-2 w-full rounded-md border border-white/20 bg-background px-3 py-2 text-sm text-foreground placeholder:text-accent focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-brand/50"
                    required
                    value={formData.about}
                    onChange={(e) => setFormData((prev) => ({ ...prev, about: e.target.value }))}
                  />
                </div>

                {feedback ? <p className="text-sm text-accent">{feedback}</p> : null}

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send project details"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
