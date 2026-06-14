import Link from "next/link";
import type { ResourcePageData } from "@/data/resourcesPages";

interface ResourcePageProps {
  data: ResourcePageData;
}

function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function ResourcePage({ data }: ResourcePageProps) {
  return (
    <>
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-container text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {data.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-accent lg:text-xl">
            {data.description}
          </p>
        </div>
      </section>

      {data.sections.map((section) => (
        <section
          key={section.id ?? section.title}
          id={section.id}
          className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-container">
            {section.title ? (
              <h2 className="text-2xl font-medium text-foreground md:text-3xl">
                {section.title}
              </h2>
            ) : null}
            {section.subtitle ? (
              <p className="mt-2 text-accent">{section.subtitle}</p>
            ) : null}

            {section.paragraphs?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-6 max-w-3xl text-base leading-relaxed text-accent md:text-lg"
              >
                {paragraph}
              </p>
            ))}

            {section.list ? (
              <ul className="mt-6 max-w-3xl list-inside list-disc space-y-2 text-accent">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}

            {section.cards ? (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.cards.map((card) => {
                  const cardContent = (
                    <>
                      {card.tag ? (
                        <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs font-medium text-cta">
                          {card.tag}
                        </span>
                      ) : null}
                      <h3 className="mt-3 text-lg font-medium text-foreground">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-accent">{card.description}</p>
                    </>
                  );

                  if (card.href) {
                    const className =
                      "group rounded-xl border border-white/10 bg-dashboard-card p-6 transition hover:border-cta/30 no-underline block";

                    return card.external ? (
                      <a
                        key={card.title}
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        {cardContent}
                      </a>
                    ) : (
                      <Link key={card.title} href={card.href} className={className}>
                        {cardContent}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={card.title}
                      className="rounded-xl border border-white/10 bg-dashboard-card p-6 transition hover:border-white/20"
                    >
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      {data.cta ? (
        <section className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-container text-center">
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">{data.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-accent">{data.cta.description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CtaLink
                href={data.cta.primary.href}
                className="inline-flex items-center justify-center rounded-full bg-cta px-8 py-3.5 text-sm font-medium text-white no-underline transition hover:bg-cta/90"
              >
                {data.cta.primary.label}
              </CtaLink>
              {data.cta.secondary ? (
                <CtaLink
                  href={data.cta.secondary.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-foreground no-underline transition hover:border-cta/50 hover:text-cta"
                >
                  {data.cta.secondary.label}
                </CtaLink>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
