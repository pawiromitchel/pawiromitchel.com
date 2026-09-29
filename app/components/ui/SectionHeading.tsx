import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  tone?: "operate" | "build";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  tone = "operate",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12", className)}>
      <div className="max-w-2xl">
        <p
          className={cn(
            "mb-3 font-mono text-xs font-medium tracking-widest uppercase sm:text-[13px]",
            tone === "operate" ? "text-operate" : "text-build"
          )}
        >
          {eyebrow}
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-[-0.03em] text-balance sm:text-[44px] sm:leading-[1.05]">
          {title}
        </h2>
        {description && <p className="mt-4 text-muted-foreground text-pretty sm:text-lg">{description}</p>}
      </div>
      {action}
    </div>
  );
}

// Underlined text link used for "More on GitHub", "All posts" and the like.
export const sectionLinkClass =
  "inline-flex items-center gap-1.5 border-b border-input pb-0.5 text-sm font-medium transition-colors hover:border-foreground";
