import { forwardRef } from "react";

type AlertVariant = "default" | "success" | "warning" | "destructive";

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: AlertVariant;
  title?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const variants: Record<AlertVariant, string> = {
  default: "bg-white/5 border-white/10 text-foreground",
  success: "bg-green-950/30 border-green-800/50 text-green-200",
  warning: "bg-amber-950/30 border-amber-800/50 text-amber-200",
  destructive: "bg-red-950/30 border-red-800/50 text-red-200",
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = "default", title, className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={`rounded-lg border p-4 ${variants[variant]} ${className}`}
      {...props}
    >
      {title && <h5 className="mb-1 font-medium">{title}</h5>}
      <div className="text-sm">{children}</div>
    </div>
  )
);

Alert.displayName = "Alert";
export default Alert;
