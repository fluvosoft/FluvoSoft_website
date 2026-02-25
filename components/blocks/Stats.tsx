export interface StatItem {
  value: string | number;
  label: string;
  description?: string;
}

export interface StatsProps {
  items: StatItem[];
  className?: string;
}

export default function Stats({ items, className = "" }: StatsProps) {
  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
        >
          <p className="text-3xl font-semibold text-foreground md:text-4xl">{item.value}</p>
          <p className="mt-2 font-medium text-foreground">{item.label}</p>
          {item.description && <p className="mt-1 text-sm text-accent">{item.description}</p>}
        </div>
      ))}
    </div>
  );
}
