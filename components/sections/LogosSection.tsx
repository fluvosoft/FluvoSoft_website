import Logos from "@/components/blocks/Logos";

const partners = ["Dolby", "Nike", "Zoom", "Adept", "TIME", "Character.ai"];

function LogoItem({ name }: { name: string }) {
  return (
    <span className="flex min-w-[220px] shrink-0 items-center justify-center text-2xl font-medium text-accent transition hover:text-foreground md:min-w-[240px] md:text-3xl lg:text-4xl">
      {name}
    </span>
  );
}

export default function LogosSection() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-container overflow-hidden">
        <Logos scroll title="FluvoSoft works with Generative AI Companies, BD Government Agencies & Enterprises">
          {partners.map((name) => (
            <LogoItem key={name} name={name} />
          ))}
        </Logos>
      </div>
    </section>
  );
}
