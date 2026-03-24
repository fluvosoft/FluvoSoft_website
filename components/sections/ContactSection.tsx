"use client";

import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { db, hasAllFirebaseValues } from "@/lib/firebase";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!hasAllFirebaseValues || !db) {
      setFeedback("Firebase is not configured yet. Please add environment variables.");
      return;
    }

    setIsSubmitting(true);
    setFeedback("");

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setFeedback("Message sent successfully. We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setFeedback("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book-a-demo" className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Column - Contact Details */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-medium text-foreground">
                Let&apos;s Start a Conversation
              </h3>

              <div className="mt-6 space-y-4">
                <Card variant="bordered" className="bg-white/[0.02] p-4 transition-all duration-300 hover:bg-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                      <svg className="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a href="mailto:support@fluvosoft.com" className="mt-0.5 text-xs text-accent hover:text-foreground">support@fluvosoft.com</a>
                    </div>
                  </div>
                </Card>

                <Card variant="bordered" className="bg-white/[0.02] p-4 transition-all duration-300 hover:bg-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                      <svg className="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <a href="tel:01762746646" className="mt-0.5 text-xs text-accent hover:text-foreground">01762746646</a>
                    </div>
                  </div>
                </Card>

                <Card variant="bordered" className="bg-white/[0.02] p-4 transition-all duration-300 hover:bg-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                      <svg className="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="mt-0.5 text-xs text-accent">FluvoSoft Ltd.<br />Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* CONNECT Section */}
            <div className="mt-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">
                Connect with us
              </h3>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                  aria-label="LinkedIn"
                >
                  <span className="text-sm font-medium">in</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                  aria-label="Facebook"
                >
                  <span className="text-sm font-medium">f</span>
                </a>
              </div>
            </div>

            {/* Testimonial Card */}
            <Card variant="bordered" className="mt-auto bg-white/[0.02] p-5">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-brand" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground">
                &ldquo;FluvoSoft&apos;s expertise in landing pages played a crucial role in our app&apos;s success. Highly recommended.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-medium text-white">
                  ST
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Stephany</p>
                  <p className="text-xs text-accent">PRODUCT MANAGER</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="text-lg font-medium text-foreground">Send us a Message</h3>
            <p className="mt-2 text-sm text-accent">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
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
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
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
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="mt-2"
                  value={formData.subject}
                  onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message <span className="text-cta">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                  className="mt-2 w-full rounded-md border border-white/20 bg-background px-3 py-2 text-sm text-foreground placeholder:text-accent focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-brand/50"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                />
              </div>
              {feedback ? <p className="text-sm text-accent">{feedback}</p> : null}
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
