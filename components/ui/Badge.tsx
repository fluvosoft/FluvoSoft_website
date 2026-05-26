import { forwardRef } from "react";

type BadgeVariant = "default" | "secondary" | "outline" | "brand";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  className?: string;
  children?: React.ReactNode;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-white/10 text-foreground",
  secondary: "bg-white/5 text-accent",
  outline: "border border-white/20 bg-transparent text-foreground",
  brand: "bg-brand/20 text-brand-foreground",
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", className = "", children, ...props }, ref) => (
    <span
      ref={ref}
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
);

Badge.displayName = "Badge";
export default Badge;
