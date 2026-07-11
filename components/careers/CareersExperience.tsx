"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import {
  AnimatedLetterParagraph,
  WordsPullUp,
  WordsPullUpMultiStyle,
} from "@/components/careers/careersAnimations";
import {
  careersCultureParagraphs,
  careersInternRoles,
  careersProgramDetails,
} from "@/data/resourcesPages";
import { CareersApplyButton } from "@/components/careers/CareersApplyButton";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";
const FEATURE_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

const FEATURE_ICONS = [
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
];

const ROLE_CHECKLISTS: Record<string, string[]> = {
  "Full-Stack Engineer Intern": [
    "React, Next.js, and Node.js project tasks",
    "API and web feature delivery with mentor review",
    "Portfolio-ready outcomes every sprint",
    "Unpaid · 6 months · certificate on completion",
  ],
  "Mobile Developer Intern (Flutter)": [
    "Android features for Easy Invoice and Inventory apps",
    "Offline-first patterns and polished mobile UX",
    "Task-based scope with clear deliverables",
    "Unpaid · 6 months · certificate on completion",
  ],
  "Blockchain Developer Intern": [
    "Smart contract and integration support tasks",
    "Web3 and enterprise blockchain exposure",
    "Research plus hands-on prototype work",
    "Unpaid · 6 months · certificate on completion",
  ],
  "DevOps / Cloud Engineer Intern": [
    "CI/CD and deployment workflow support",
    "Observability and infrastructure hygiene",
    "Secure cloud practices on real products",
    "Unpaid · 6 months · certificate on completion",
  ],
};

const CARD_EASE = [0.22, 1, 0.36, 1] as const;
const FADE_EASE = [0.16, 1, 0.3, 1] as const;

function FeatureRoleCard({
  index,
  title,
  number,
  icon,
  items,
  applyRole,
}: {
  index: number;
  title: string;
  number: string;
  icon: string;
  items: string[];
  applyRole?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: CARD_EASE }}
      className="flex min-h-[320px] flex-col rounded-2xl bg-careers-feature p-4 sm:min-h-0 sm:p-5 md:p-6"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt=""
        className="h-10 w-10 rounded object-cover sm:h-12 sm:w-12"
      />
      <h3 className="mt-4 text-lg text-careers-text sm:text-xl">
        {title}
        <span className="ml-2 text-sm text-gray-500">({number})</span>
      </h3>
      <ul className="mt-4 flex-1 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-xs text-gray-400 sm:text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-careers-primary" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {applyRole ? (
        <div className="mt-6">
          <CareersApplyButton role={applyRole} variant="link" label="Apply" />
        </div>
      ) : null}
    </motion.div>
  );
}

export default function CareersExperience() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const roleCards = careersInternRoles.slice(0, 3);

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="h-screen p-4 md:p-6">
        <div className="relative h-full rounded-2xl md:rounded-[2rem]">
          <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-[2rem]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={HERO_VIDEO}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-7 md:p-9 lg:p-11">
            <div className="grid grid-cols-12 items-end gap-6">
              <div className="col-span-12 pr-2 sm:pr-6 md:pr-10 lg:col-span-8 lg:pr-12">
                <WordsPullUp
                  as="h1"
                  text="Careers"
                  className="w-fit max-w-full origin-left text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] text-careers-text sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[18vw]"
                />
              </div>
              <div className="pointer-events-auto col-span-12 flex flex-col gap-5 lg:col-span-4">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5, ease: FADE_EASE }}
                  className="text-xs leading-[1.2] text-careers-primary/70 sm:text-sm md:text-base"
                  style={{ color: "rgba(222, 219, 200, 0.7)" }}
                >
                  Join FluvoSoft as an intern. Gain hands-on experience building blockchain,
                  automation, and software products used by businesses worldwide.
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.7, ease: FADE_EASE }}
                >
                  <CareersApplyButton role="FluvoSoft Intern Program" label="Apply now" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="bg-black px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-careers-card px-6 py-12 text-center sm:px-10 sm:py-16 md:py-20">
          <p className="text-[10px] text-careers-primary sm:text-xs">Intern program</p>

          <WordsPullUpMultiStyle
            className="mx-auto mt-6 max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
            segments={[
              { text: "We are FluvoSoft,", className: "font-normal text-careers-text" },
              {
                text: "a venture catalysts studio.",
                className: "font-instrument-serif italic text-careers-text",
              },
              {
                text: "Our intern program turns curiosity into shipped software.",
                className: "font-normal text-careers-text",
              },
            ]}
          />

          <AnimatedLetterParagraph
            text={
              careersCultureParagraphs.join(" ") ||
              "FluvoSoft interns work on defined tasks with mentor support, build portfolio-ready outcomes, and learn how a product studio ships software from idea to delivery."
            }
            className="mx-auto mt-10 max-w-2xl text-center text-pretty text-xs leading-relaxed text-careers-primary sm:text-sm md:text-base"
          />

          <ul className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-2">
            {careersProgramDetails.map((detail) => (
              <li
                key={detail}
                className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-gray-400 sm:text-xs"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 3: FEATURES / OPEN ROLES */}
      <section className="relative min-h-screen bg-black px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden />

        <div ref={featuresRef} className="relative mx-auto max-w-[1400px]">
          <WordsPullUpMultiStyle
            className="mx-auto max-w-4xl text-center text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
            segments={[
              {
                text: "Studio-grade experience for future engineers.",
                className: "text-careers-primary",
              },
              {
                text: "Built for learners. Powered by real projects.",
                className: "text-gray-500",
              },
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-2 md:gap-1 lg:h-[480px] lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={featuresInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: CARD_EASE }}
              className="relative min-h-[280px] overflow-hidden rounded-2xl lg:min-h-0"
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={FEATURE_VIDEO}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-5 left-5 text-lg text-careers-text sm:text-xl">
                Your growth canvas.
              </p>
            </motion.div>

            {roleCards.map((role, index) => (
              <FeatureRoleCard
                key={role.title}
                index={index + 1}
                title={role.title.replace(" Intern", "")}
                number={`0${index + 1}`}
                icon={FEATURE_ICONS[index] ?? FEATURE_ICONS[0]}
                items={ROLE_CHECKLISTS[role.title] ?? [role.description]}
                applyRole={role.title}
              />
            ))}
          </div>

          {careersInternRoles[3] ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: CARD_EASE }}
              className="mt-3 rounded-2xl bg-careers-feature p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm text-gray-500">(04)</p>
                  <h3 className="mt-1 text-xl text-careers-text sm:text-2xl">
                    {careersInternRoles[3].title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm text-gray-400">
                    {careersInternRoles[3].description}
                  </p>
                </div>
                <CareersApplyButton
                  role={careersInternRoles[3].title}
                  label="Apply"
                />
              </div>
            </motion.div>
          ) : null}
        </div>
      </section>
    </>
  );
}
