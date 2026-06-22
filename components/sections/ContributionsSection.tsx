import Image from "next/image";
import { contributionPartners } from "@/data/contributions";

function PartnerInitial({ name }: { name: string }) {
  const initial = name.replace(/[^a-zA-Z0-9]/g, "").charAt(0).toUpperCase() || "?";

  return (
    <span className="text-2xl font-semibold tracking-tight text-cta">{initial}</span>
  );
}

export default function ContributionsSection() {
  return (
    <section
      id="contributions"
      className="border-t border-white/10 bg-background px-6 py-10 lg:px-8 lg:py-14"
      aria-labelledby="contributions-heading"
    >
      <div className="mx-auto max-w-container">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-cta">
            Contributions
          </p>
          <h2
            id="contributions-heading"
            className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Contributions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-accent md:text-lg">
            Organizations and teams our founders have built with and contributed to
            across products, platforms, and client work.
          </p>
        </header>

        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-start justify-center gap-3 sm:gap-4">
          {contributionPartners.map((partner) => (
            <li key={partner.name} className="w-[128px] sm:w-[136px]">
              <article className="group flex flex-col items-center rounded-xl border border-white/10 bg-transparent p-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-cta/30">
                <div className="flex h-[76px] w-full items-center justify-center sm:h-20">
                  {partner.logo ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={partner.logo}
                        alt=""
                        aria-hidden
                        fill
                        sizes="136px"
                        className="object-contain object-center"
                      />
                    </div>
                  ) : (
                    <PartnerInitial name={partner.name} />
                  )}
                </div>

                <h3 className="mt-1.5 w-full px-0.5 text-center text-[11px] font-medium leading-tight text-foreground sm:text-xs">
                  {partner.name}
                </h3>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
