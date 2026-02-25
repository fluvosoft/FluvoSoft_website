import { ReactNode } from "react";
import Button from "@/components/ui/Button";

export interface CTAProps {
  title: string;
  description?: string;
  primaryAction: { label: string; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
  className?: string;
  children?: ReactNode;
}

export default function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  className = "",
}: CTAProps) {
  return (
    <section className={`border-t border-white/10 py-24 text-center ${className}`}>
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{title}</h2>
        {description && <p className="mx-auto mt-4 text-accent">{description}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" onClick={primaryAction.onClick}>
            {primaryAction.label}
          </Button>
          {secondaryAction && (
            <Button variant="outline" size="lg" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
