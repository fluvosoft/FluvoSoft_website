import { ReactNode } from "react";
import Card from "@/components/ui/Card";

export interface FeatureItem {
  icon?: ReactNode;
  title: string;
  description: string;
}

export interface FeatureListProps {
  title?: string;
  subtitle?: string;
  items: FeatureItem[];
  className?: string;
}

export default function FeatureList({ title, subtitle, items, className = "" }: FeatureListProps) {
  return (
    <div className={className}>
      {title && <h2 className="text-center text-2xl font-semibold text-foreground md:text-3xl">{title}</h2>}
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-center text-accent">{subtitle}</p>}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} variant="bordered">
            {item.icon && <div className="mb-3">{item.icon}</div>}
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-accent">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
