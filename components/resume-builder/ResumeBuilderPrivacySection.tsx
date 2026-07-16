"use client";

import { useMemo, useState } from "react";
import { resumeBuilderPrivacyMeta } from "@/data/resumeBuilderPrivacy";

type PrivacyItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function ResumeBuilderPrivacySection() {
  const [openId, setOpenId] = useState<string>("overview");

  const items: PrivacyItem[] = useMemo(
    () => [
      {
        id: "overview",
        title: "Overview",
        content: (
          <>
            <p>
              Resume Builder (“the App”) is provided by {resumeBuilderPrivacyMeta.companyName}. This
              section summarizes how we handle information when you use the App.
            </p>
            <p className="mt-3">
              We do not sell your personal information. We process data to run the App, provide
              resume-building features, and keep your account and resumes in sync across sessions.
            </p>
          </>
        ),
      },
      {
        id: "collect",
        title: "Information we collect",
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Account details: name, email address, profile photo, and authentication identifiers
              when you sign up with email or Google Sign-In.
            </li>
            <li>
              Profile and resume data: headline, location, phone, resume sections, templates,
              completion progress, ATS scores, and uploaded resume PDFs when you choose to import.
            </li>
            <li>
              Usage and device data: app interactions, device type/OS, and general analytics used to
              operate and improve the App.
            </li>
            <li>
              Optional advertising interaction data when ads are shown in the native app (where
              supported).
            </li>
          </ul>
        ),
      },
      {
        id: "use",
        title: "How we use information",
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Provide resume templates, editor, ATS scoring, and PDF export.</li>
            <li>Authenticate you, maintain your session, and protect your account.</li>
            <li>Generate resume previews and deliver PDFs.</li>
            <li>Sync resumes and progress across sessions.</li>
            <li>
              Send service-related communications, such as email verification, password reset, and
              push/in-app notifications (when enabled).
            </li>
            <li>Improve reliability, troubleshoot issues, and support new App features.</li>
          </ul>
        ),
      },
      {
        id: "permissions",
        title: "Device permissions",
        content: (
          <>
            <p>The App requests permissions only when a feature needs them:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Photos / camera / storage: when you add a profile photo or upload a resume PDF. We
                access only the files you choose.
              </li>
              <li>
                Notifications: optional push alerts for service messages. You can turn these off in
                device or app settings.
              </li>
            </ul>
            <p className="mt-3 text-sm text-rb-muted">
              Denying a permission may limit related features but core resume building remains
              available.
            </p>
          </>
        ),
      },
      {
        id: "third-parties",
        title: "Third-party services",
        content: (
          <>
            <p>We share information with service providers only as needed to run the App, including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Identity and sign-in services (email/password and Google Sign-In)</li>
              <li>Cloud hosting and database sync for resumes, profile, and settings</li>
              <li>File storage for resume PDFs and exports</li>
              <li>Push notification services (when enabled)</li>
              <li>Analytics and crash reporting to improve stability (where enabled)</li>
              <li>Optional advertising services in the native Android app (where supported)</li>
            </ul>
            <p className="mt-3 text-sm text-rb-muted">
              These providers process information under their own privacy policies. See our{" "}
              <a
                href="/privacy#mobile-third-parties"
                className="font-medium text-rb-navy underline decoration-rb-brand/60 underline-offset-2 hover:decoration-rb-brand"
              >
                full privacy policy
              </a>{" "}
              for more detail.
            </p>
          </>
        ),
      },
      {
        id: "retention",
        title: "Data retention & security",
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>
              We retain account and resume records while your account is active, and for a reasonable
              period afterward, unless you delete your account or applicable law requires otherwise.
            </li>
            <li>
              We use industry-standard safeguards to protect data in transit and at rest, including
              access controls and encryption where applicable.
            </li>
            <li>
              No method of storage or transmission is 100% secure; we cannot guarantee absolute
              security.
            </li>
          </ul>
        ),
      },
      {
        id: "account-deletion",
        title: "Account deletion",
        content: (
          <>
            <p>
              If you created a Resume Builder account, you can request deletion of your account and
              associated personal data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Email{" "}
                <a
                  href={`mailto:${resumeBuilderPrivacyMeta.contactEmail}?subject=Resume%20Builder%20account%20deletion`}
                  className="font-medium text-rb-navy underline decoration-rb-brand/60 underline-offset-2 hover:decoration-rb-brand"
                >
                  {resumeBuilderPrivacyMeta.contactEmail}
                </a>{" "}
                from the address linked to your account.
              </li>
              <li>
                If your app version includes Delete account in Settings, you may use that option
                instead.
              </li>
            </ul>
            <p className="mt-3 text-sm text-rb-muted">
              After deletion, we remove personal data from active systems within a reasonable period,
              typically within 30 days. Backup copies may persist for up to 90 days before automatic
              removal.
            </p>
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
              <li>Manage your resume data inside the App.</li>
              <li>Delete your account as described above, or contact us for privacy questions.</li>
            </ul>
            <p className="mt-3 text-sm text-rb-muted">
              Effective {resumeBuilderPrivacyMeta.effectiveDate} · Last updated{" "}
              {resumeBuilderPrivacyMeta.lastUpdated}
            </p>
          </>
        ),
      },
      {
        id: "international",
        title: "International users & children",
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>
              FluvoSoft is based in Bangladesh. If you use the App from other countries, your data may
              be transferred to and processed in Bangladesh and in countries where our service
              providers operate.
            </li>
            <li>
              The App is intended for job seekers and professionals and is not directed to children.
              We do not knowingly collect personal information from children.
            </li>
          </ul>
        ),
      },
      {
        id: "changes",
        title: "Policy updates",
        content: (
          <>
            <p>
              We may update this Privacy Policy section from time to time. Any changes will be posted
              on this page with an updated “Last updated” date.
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
      className="scroll-mt-24 bg-rb-cream px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="rb-privacy-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-rb-brand/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rb-navy">
            Legal
          </span>
          <h2
            id="rb-privacy-heading"
            className="mt-4 font-rb-heading text-3xl font-bold text-rb-navy md:text-4xl"
          >
            Privacy Policy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-rb-muted">
            Resume Builder keeps your resume data secure and in sync across sessions. Here&apos;s a
            quick, plain-language view of what we collect and why. For the full policy, see{" "}
            <a
              href="/privacy"
              className="font-medium text-rb-navy underline decoration-rb-brand/60 underline-offset-2 hover:decoration-rb-brand"
            >
              fluvosoft.com/privacy
            </a>
            .
          </p>
        </div>

        <div className="mt-10 divide-y divide-rb-navy/10 rounded-2xl border border-rb-navy/10 bg-white shadow-sm">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article key={item.id}>
                <h3 className="m-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none transition hover:bg-rb-brand/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rb-brand/50 sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={`privacy-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                  >
                    <span className="text-sm font-semibold text-rb-navy sm:text-base">
                      {item.title}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-rb-brand transition-transform duration-300 ${
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
                  className="rb-faq-panel"
                  data-open={isOpen}
                  role="region"
                >
                  <div className="rb-faq-panel-inner">
                    <div className="border-t border-rb-navy/5 px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
                      <div className="text-sm leading-relaxed text-rb-muted sm:text-base">
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
