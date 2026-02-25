import { ReactNode } from "react";

export interface LogosProps {
  title?: string;
  children: ReactNode;
  className?: string;
  /** If true, renders a left-to-right infinite marquee row */
  scroll?: boolean;
}

export default function Logos({ title, children, className = "", scroll = false }: LogosProps) {
  if (scroll) {
    return (
      <div className={className}>
        {title && (
          <h2 className="text-center text-sm font-medium uppercase tracking-wider text-accent">
            {title}
          </h2>
        )}
        <div className="mt-8 overflow-hidden" aria-hidden>
          <div className="flex w-max items-center justify-start gap-12 animate-logos-marquee">
            <div className="flex shrink-0 items-center justify-start gap-12">{children}</div>
            <div className="flex shrink-0 items-center justify-start gap-12" aria-hidden>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className}>
      {title && (
        <h2 className="text-center text-sm font-medium uppercase tracking-wider text-accent">
          {title}
        </h2>
      )}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-12">
        {children}
      </div>
    </div>
  );
}
