import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, action, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex flex-wrap items-end justify-between gap-4", className)}>
      <div className="max-w-2xl">
        <p className="mb-2 font-mono text-xs font-medium tracking-wider text-brand uppercase">{eyebrow}</p>
        <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">{title}</h2>
        {description && <p className="mt-3 text-muted-foreground text-pretty">{description}</p>}
      </div>
      {action}
    </div>
  );
}
