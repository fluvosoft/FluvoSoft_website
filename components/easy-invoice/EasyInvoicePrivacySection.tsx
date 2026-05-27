"use client";

import { useMemo, useState } from "react";

import { easyInvoicePrivacyMeta } from "@/data/easyInvoicePrivacy";

type PrivacyItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function EasyInvoicePrivacySection() {
  const [openId, setOpenId] = useState<string>("overview");

  const items: PrivacyItem[] = useMemo(
    () => [
      {
        id: "overview",
        title: "Overview",
        content: (
          <>
            <p>
              Easy Invoice (“the App”) is provided by {easyInvoicePrivacyMeta.companyName}. This
              section summarizes how we handle information when you use the App.
            </p>
            <p className="mt-3">
              We do not sell your personal information. We process data to run the App, provide
              invoicing features, and keep your account and records in sync across devices.
            </p>
          </>
        ),
      },
      {
        id: "collect",
        title: "Information we collect",
        content: (
          <>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Account details: name, email address, profile photo, and authentication identifiers
                when you sign up with email or Google Sign-In.
              </li>
              <li>
                Business data you enter: invoices, clients/vendors, line items, tax/discount settings,
                payment methods, templates, and related attachments.
              </li>
              <li>
                Usage and device data: app interactions, device type/OS, and general analytics used
                to operate and improve the App.
              </li>
              <li>
                Optional advertising interaction data when optional ads are enabled in the App (where supported).
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "use",
        title: "How we use information",
        content: (
          <>
            <ul className="list-disc space-y-2 pl-5">
              <li>Provide invoicing, templates, and dashboard analytics.</li>
              <li>Authenticate you, maintain your session, and protect your account.</li>
              <li>Generate invoice previews and deliver PDFs (including server-rendered output).</li>
              <li>Sync your data across devices and support offline use.</li>
              <li>
                Send service-related communications, such as email verification, password reset, and
                push/in-app notifications (when enabled).
              </li>
              <li>
                Improve reliability, troubleshoot issues, and support new App features.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "third-parties",
        title: "Third-party services",
        content: (
          <>
            <p>
              We share information with service providers only as needed to run the App,
              including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Identity and sign-in services</li>
              <li>Cloud hosting and storage for your invoices and settings</li>
              <li>Services used to generate and deliver invoice previews/PDFs</li>
              <li>Notification services (when enabled)</li>
              <li>Optional advertising services (only where ads are supported)</li>
            </ul>
            <p className="mt-3 text-sm text-ei-muted">
              These service providers process information under their own privacy policies. We share only what’s needed to provide the App.
            </p>
          </>
        ),
      },
      {
        id: "retention",
        title: "Data retention & security",
        content: (
          <>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                We retain account and business records while your account is active, and for a
                reasonable period afterward, unless you delete your account or applicable law requires otherwise.
              </li>
              <li>
                We use industry-standard safeguards to protect data in transit and at rest, including
                access controls and encryption where applicable.
              </li>
              <li>
                No method of storage or transmission is 100% secure; we cannot guarantee absolute security.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "rights",
        title: "Your choices & contact",
        content: (
          <>
            <ul className="list-disc space-y-2 pl-5">
              <li>Disable push notifications in your device settings.</li>
              <li>Export or manage your invoice data inside the App (where features are available).</li>
              <li>
                Opt out of optional rewarded ads by not watching them (core features remain available).
              </li>
              <li>
                Contact us at{" "}
                <a
                  href={`mailto:${easyInvoicePrivacyMeta.contactEmail}`}
                  className="font-medium text-ei-forest underline decoration-ei-lime/60 underline-offset-2 hover:decoration-ei-lime"
                >
                  {easyInvoicePrivacyMeta.contactEmail}
                </a>{" "}
                for privacy questions, data requests, or account deletion.
              </li>
            </ul>
            <p className="mt-3 text-sm text-ei-muted">
              Effective {easyInvoicePrivacyMeta.effectiveDate} · Last updated{" "}
              {easyInvoicePrivacyMeta.lastUpdated}
            </p>
          </>
        ),
      },
      {
        id: "international",
        title: "International users & children",
        content: (
          <>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                FluvoSoft is based in Bangladesh. If you use the App from other countries, your data may
                be transferred to and processed in Bangladesh and in countries where our service providers operate.
              </li>
              <li>
                The App is intended for business users and is not directed to children. We do not knowingly collect
                personal information from children.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "changes",
        title: "Policy updates",
        content: (
          <>
            <p>
              We may update this Privacy Policy section from time to time. Any changes will be posted on this page
              with an updated “Last updated” date.
            </p>
            <p className="mt-3">
              Continued use of the App after changes means you accept the updated section.
            </p>
          </>
        ),
      },
    ],
    []
  );

  return (
    <section
      id="privacy"
      className="scroll-mt-24 bg-ei-cream px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ei-privacy-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-ei-lime/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ei-forest">
            Legal
          </span>
          <h2
            id="ei-privacy-heading"
            className="mt-4 font-ei-heading text-3xl font-bold text-ei-forest md:text-4xl"
          >
            Privacy Policy
          </h2>
          <p className="mt-4 text-base text-ei-muted leading-relaxed">
            Easy Invoice keeps your invoicing data secure and in sync across devices. Here’s a
            quick, plain-language view of what we collect and why.
          </p>
        </div>

        <div className="mt-10 divide-y divide-ei-forest/10 rounded-2xl border border-ei-forest/10 bg-white shadow-sm">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article key={item.id}>
                <h3 className="m-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none transition hover:bg-ei-lime/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ei-lime/50 sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={`privacy-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                  >
                    <span className="text-sm font-semibold text-ei-forest sm:text-base">
                      {item.title}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-ei-lime transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </h3>

                <div
                  id={`privacy-panel-${item.id}`}
                  className="ei-faq-panel"
                  data-open={isOpen}
                  role="region"
                  aria-labelledby={`privacy-trigger-${item.id}`}
                >
                  <div className="ei-faq-panel-inner">
                    <div className="border-t border-ei-forest/5 px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
                      <div className="text-sm leading-relaxed text-ei-muted sm:text-base">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
