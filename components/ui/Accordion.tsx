"use client";

import { useState } from "react";
import Button from "./Button";

export interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export function AccordionItem({ value, trigger, children }: AccordionItemProps) {
  return { value, trigger, children };
}

export interface AccordionProps {
  items: { value: string; trigger: React.ReactNode; content: React.ReactNode }[];
  type?: "single" | "multiple";
  className?: string;
}

export default function Accordion({ items, type = "single", className = "" }: AccordionProps) {
  const [open, setOpen] = useState<string | string[]>(type === "single" ? items[0]?.value ?? "" : []);

  const isOpen = (v: string) =>
    type === "single" ? open === v : Array.isArray(open) && open.includes(v);

  const toggle = (v: string) => {
    if (type === "single") setOpen(isOpen(v) ? "" : v);
    else
      setOpen((prev) => {
        const arr = Array.isArray(prev) ? prev : [];
        return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
      });
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {items.map((item) => (
        <div key={item.value} className="border-b border-white/10">
          <Button
            variant="ghost"
            onClick={() => toggle(item.value)}
            className="w-full justify-between py-4 text-left text-sm font-medium text-foreground hover:text-foreground"
          >
            {item.trigger}
            <svg
              className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                isOpen(item.value) ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </Button>
          {isOpen(item.value) && (
            <div className="pb-4 text-sm text-accent">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
