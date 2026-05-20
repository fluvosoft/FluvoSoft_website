"use client";

import {
  BlockchainIllustration,
  MockupMobileIllustration,
  CodeEditorIllustration,
  TextingMockupIllustration,
} from "@/components/illustrations";

const features = [
  {
    title: "Blockchain Integration",
    description:
      "Seamlessly integrate blockchain technology into your applications. Secure, decentralized, and transparent solutions for the modern web.",
    Illustration: BlockchainIllustration,
    illustrationClass: "max-w-full",
  },
  {
    title: "You're in control",
    description:
      "This is not a component library. It's a collection of re-usable components that you can copy and paste into your apps.",
    Illustration: MockupMobileIllustration,
    illustrationClass: "shrink-0 w-full max-w-full",
  },
  {
    title: "Fits right into your stack",
    description:
      "Built with modern web technologies and tools that fit right into any React project. No bloat, no extra dependencies, no risk of conflicts.",
    Illustration: CodeEditorIllustration,
    illustrationClass: "w-full",
  },
  {
    title: "Data-agnostic",
    description:
      "All the data is separate from components so you can edit it in seconds or make it dynamic. Easily connect to a CMS of your choice.",
    Illustration: TextingMockupIllustration,
    illustrationClass: "w-full",
  },
];

export default function LaunchFeaturesSection() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="features-heading">
      <div className="mx-auto max-w-container">
        <h2 id="features-heading" className="text-center text-2xl font-medium text-foreground md:text-3xl lg:text-4xl">
          Build blockchain and automation solutions, faster.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {features.map(({ title, description, Illustration, illustrationClass }, index) => (
            <article
              key={title}
              className={`group flex flex-col rounded-xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand/50 focus-within:ring-offset-2 focus-within:ring-offset-background ${
                title === "You're in control" || title === "Blockchain Integration" || title === "Data-agnostic" || title === "Fits right into your stack"
                  ? "border-white/5 bg-transparent hover:border-white/10 hover:shadow-none"
                  : "border-white/10 bg-dashboard-card hover:border-white/20 hover:shadow-lg hover:shadow-black/20"
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div
                className={`flex flex-shrink-0 items-center justify-center text-brand transition-transform duration-300 group-hover:scale-[1.02] min-h-[180px] ${
                  title === "Data-agnostic"
                    ? "md:min-h-[260px]"
                    : title === "Fits right into your stack"
                      ? "md:h-[280px] lg:h-[320px]"
                      : title === "Blockchain Integration"
                        ? "md:h-[360px] lg:h-[440px] md:overflow-hidden"
                        : "md:min-h-[240px]"
                }`}
              >
                <Illustration className={illustrationClass} />
              </div>
              <h3 className="mt-5 text-lg font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-accent">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
