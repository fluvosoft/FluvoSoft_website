import { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export interface PricingCardProps {
  name: string;
  description: string;
  price: string | number;
  period?: string;
  cta: string;
  ctaVariant?: "primary" | "outline";
  features: string[];
  featured?: boolean;
  footer?: string;
  className?: string;
  children?: ReactNode;
}

export default function PricingCard({
  name,
  description,
  price,
  period,
  cta,
  ctaVariant = "outline",
  features,
  featured,
  footer,
  className = "",
}: PricingCardProps) {
  return (
    <Card
      variant="bordered"
      className={`group flex h-full flex-col transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg hover:shadow-black/20 ${
        featured ? "border-brand/30 bg-gradient-to-b from-brand/10 to-brand/5" : ""
      } ${className}`}
    >
      <div className="flex items-center gap-2">
        {featured && (
          <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        )}
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      </div>
      <p className="mt-2 text-sm text-accent">{description}</p>
      <div className="mt-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-semibold text-foreground">{price}</span>
        </div>
        {period && <p className="mt-1 text-sm text-accent">{period}</p>}
      </div>
      <Button
        variant={featured ? "primary" : ctaVariant}
        className="mt-6 w-full"
        size="lg"
      >
        {cta}
      </Button>
      {footer && <p className="mt-4 text-xs text-accent">{footer}</p>}
      <ul className="mt-6 space-y-2 border-t border-white/10 pt-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-foreground">
            <span className="mt-0.5 shrink-0 text-brand">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
