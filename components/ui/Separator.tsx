export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export default function Separator({ orientation = "horizontal", className = "" }: SeparatorProps) {
  return (
    <div
      role="separator"
      className={
        orientation === "horizontal"
          ? `h-px w-full bg-white/10 ${className}`
          : `h-full w-px bg-white/10 ${className}`
      }
    />
  );
}
