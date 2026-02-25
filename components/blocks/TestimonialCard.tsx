import Card from "@/components/ui/Card";

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  avatar?: string;
  initial?: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  initial,
  className = "",
}: TestimonialCardProps) {
  return (
    <Card variant="bordered" className={`bg-gradient-to-b from-white/20 to-white/5 ${className}`}>
      <p className="text-foreground">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/20 text-lg font-medium text-foreground">
          {initial ?? name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-foreground">{name}</p>
          {role && <p className="text-sm text-accent">{role}</p>}
        </div>
      </div>
    </Card>
  );
}
