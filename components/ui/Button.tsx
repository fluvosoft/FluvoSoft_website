import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary-button text-primary-button-foreground shadow-sm hover:opacity-90",
  secondary: "bg-secondary-button text-foreground hover:opacity-90",
  ghost: "bg-transparent text-foreground hover:bg-white/5",
  outline: "border border-white/20 bg-transparent text-foreground hover:bg-white/5 hover:border-white/30",
  link: "bg-transparent text-foreground underline-offset-4 hover:underline",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-sm font-medium",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md font-medium transition disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
export default Button;
