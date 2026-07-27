"use client";

import { useMemo, useState } from "react";
import { kyotoPrivacyMeta } from "@/data/kyotoPrivacy";

type PrivacyItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function KyotoPrivacySection() {
  const [openId, setOpenId] = useState<string>("overview");

  const items: PrivacyItem[] = useMemo(
    () => [
      {
        id: "overview",
        title: "Overview",
        content: (
          <>
            <p>
              KYOTO Habit Tracker (“the App”) is provided by {kyotoPrivacyMeta.companyName}. This
              section summarizes how we handle information when you use the App.
            </p>
            <p className="mt-3">
              We do not sell your personal information. We process data to run the App, provide
              habit tracking and social features, and keep your account in sync across sessions.
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
              Account details: name, email, profile photo, @username, birthdate, gender, and
              authentication identifiers when you sign up with email or Google Sign-In.
            </li>
            <li>
              Habit and progress data: habits you create, check-ins, streaks, reminders, mood logs,
              challenge progress, clubs you join, and achievements.
            </li>
            <li>
              Social data: friend requests, friendships, and in-app notifications related to
              activity and community.
            </li>
            <li>
              Usage and device data: app interactions, device type/OS, and general analytics used to
              operate and improve the App.
            </li>
          </ul>
        ),
      },
      {
        id: "use",
        title: "How we use information",
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Provide habit tracking, streaks, reminders, mood, clubs, challenges, and leaderboard.</li>
            <li>Authenticate you, maintain your session, and protect your account.</li>
            <li>Sync habits, progress, and social connections across sessions.</li>
            <li>
              Send service-related communications such as email verification, password reset, and
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
                Photos / camera: when you add a profile photo. We access only the files you choose.
              </li>
              <li>
                Notifications: optional push alerts for reminders and social or progress updates. You
                can turn these off in device or app settings.
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
            <p>We share information with service providers only as needed to run the App, including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Identity and sign-in services (email/password and Google Sign-In)</li>
              <li>Cloud hosting and database sync for habits, profile, and social data</li>
              <li>Push notification services (when enabled)</li>
              <li>Analytics and crash reporting to improve stability (where enabled)</li>
            </ul>
            <p className="mt-3 text-sm text-ky-muted">
              These providers process information under their own privacy policies. See our{" "}
              <a
                href="/privacy#kyoto-third-parties"
                className="font-medium text-ky-ink underline decoration-ky-coral/60 underline-offset-2 hover:decoration-ky-coral"
              >
                full privacy policy
              </a>{" "}
              for more detail.
            </p>
          </>
        ),
      },
      {
        id: "account-deletion",
        title: "Account deletion",
        content: (
          <>
            <p>
              If you created a KYOTO account, you can request deletion of your account and associated
              personal data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Email{" "}
                <a
                  href={`mailto:${kyotoPrivacyMeta.contactEmail}?subject=KYOTO%20account%20deletion`}
                  className="font-medium text-ky-ink underline decoration-ky-coral/60 underline-offset-2 hover:decoration-ky-coral"
                >
                  {kyotoPrivacyMeta.contactEmail}
                </a>{" "}
                from the address linked to your account.
              </li>
              <li>
                If your app version includes Delete account in Settings, you may use that option
                instead.
              </li>
            </ul>
            <p className="mt-3 text-sm text-ky-muted">
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
              <li>Manage habits, friends, and mood data inside the App.</li>
              <li>Delete your account as described above, or contact us for privacy questions.</li>
            </ul>
            <p className="mt-3 text-sm text-ky-muted">
              Effective {kyotoPrivacyMeta.effectiveDate} · Last updated{" "}
              {kyotoPrivacyMeta.lastUpdated}
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
      className="scroll-mt-24 bg-ky-peach px-6 py-16 lg:px-8 lg:py-24"
      aria-labelledby="ky-privacy-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-ky-coral/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ky-ink">
            Legal
          </span>
          <h2
            id="ky-privacy-heading"
            className="mt-4 font-ky-heading text-3xl font-bold text-ky-ink md:text-4xl"
          >
            Privacy Policy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ky-muted">
            KYOTO keeps habit and social data secure and in sync. Here&apos;s a plain-language view
            of what we collect and why. For the full policy, see{" "}
            <a
              href="/privacy"
              className="font-medium text-ky-ink underline decoration-ky-coral/60 underline-offset-2 hover:decoration-ky-coral"
            >
              fluvosoft.com/privacy
            </a>
            .
          </p>
        </div>

        <div className="mt-10 divide-y divide-ky-ink/10 rounded-2xl border border-ky-ink/10 bg-white shadow-sm">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article key={item.id}>
                <h3 className="m-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none transition hover:bg-ky-coral/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ky-coral/50 sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={`ky-privacy-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                  >
                    <span className="text-sm font-semibold text-ky-ink sm:text-base">
                      {item.title}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-ky-coral transition-transform duration-300 ${
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
                  id={`ky-privacy-panel-${item.id}`}
                  className="ky-faq-panel"
                  data-open={isOpen}
                  role="region"
                >
                  <div className="ky-faq-panel-inner">
                    <div className="border-t border-ky-ink/5 px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
                      <div className="text-sm leading-relaxed text-ky-muted sm:text-base">
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
