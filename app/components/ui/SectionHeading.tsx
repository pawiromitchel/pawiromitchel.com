import React, { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  accentLine?: boolean;
}

export function SectionHeading({
  children,
  subtitle,
  centered = true,
  className = "",
  accentLine = true,
}: SectionHeadingProps) {
  const alignClass = centered ? "text-center" : "text-left";

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {accentLine && (
        <div className="flex items-center gap-3 mb-4 justify-start md:justify-center">
          <div className="w-8 h-1 bg-primary rounded-full"></div>
          {centered && (
            <div className="w-8 h-1 bg-primary rounded-full"></div>
          )}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
