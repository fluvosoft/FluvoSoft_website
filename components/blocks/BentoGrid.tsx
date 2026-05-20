import { ReactNode } from "react";
import Card from "@/components/ui/Card";

export interface BentoCellProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  span?: "1" | "2" | "3";
}

export function BentoCell({ title, description, children, className = "", span = "1" }: BentoCellProps) {
  const spanClass = span === "2" ? "md:col-span-2" : span === "3" ? "md:col-span-3" : "";
  return (
    <Card variant="bordered" className={`${spanClass} ${className}`}>
      {title && <h3 className="text-lg font-medium text-foreground">{title}</h3>}
      {description && <p className="mt-1 text-sm text-accent">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </Card>
  );
}

export interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export default function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 gap-4 md:grid-cols-3 ${className}`}>
      {children}
    </div>
  );
}
