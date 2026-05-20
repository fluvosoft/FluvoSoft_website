"use client";

import { useState } from "react";
import Button from "./Button";

export interface TabsProps {
  items: { value: string; label: string; content: React.ReactNode }[];
  defaultValue?: string;
  className?: string;
}

export default function Tabs({ items, defaultValue, className = "" }: TabsProps) {
  const [active, setActive] = useState(defaultValue ?? items[0]?.value ?? "");

  return (
    <div className={className}>
      <div className="flex gap-1 rounded-lg bg-white/5 p-1">
        {items.map((tab) => (
          <Button
            key={tab.value}
            variant={active === tab.value ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setActive(tab.value)}
            className={active === tab.value ? "text-foreground" : "text-accent hover:text-foreground"}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="mt-4">
        {items.find((t) => t.value === active)?.content}
      </div>
    </div>
  );
}
