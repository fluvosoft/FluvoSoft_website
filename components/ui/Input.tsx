import { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, ...props }, ref) => (
    <input
      ref={ref}
      className={`w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-accent focus:outline-none focus:ring-2 focus:ring-brand/50 disabled:opacity-50 ${
        error ? "border-red-500" : "border-white/20"
      } ${className}`}
      {...props}
    />
  )
);

Input.displayName = "Input";
export default Input;
