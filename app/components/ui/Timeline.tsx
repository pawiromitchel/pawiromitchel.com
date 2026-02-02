import React, { ReactNode } from "react";

interface TimelineItemProps {
  title: string | ReactNode;
  subtitle?: string;
  description?: string;
  date?: string;
  icon?: ReactNode;
  children?: ReactNode;
  isLast?: boolean;
}

export function TimelineItem({
  title,
  subtitle,
  description,
  date,
  icon,
  children,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="flex gap-6 pb-8 relative">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>
        {/* Line */}
        {!isLast && (
          <div className="w-1 h-24 bg-primary/30 mt-2"></div>
        )}
      </div>

      {/* Content */}
      <div className="pt-1 flex-1">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        {subtitle && (
          <p className="text-primary font-medium text-sm">{subtitle}</p>
        )}
        {date && <p className="text-muted text-sm mt-1">{date}</p>}
        {description && (
          <p className="text-muted mt-3 leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
  vertical?: boolean;
}

export function Timeline({
  children,
  className = "",
  vertical = true,
}: TimelineProps) {
  return (
    <div className={`${vertical ? "relative" : ""} ${className}`}>
      {children}
    </div>
  );
}

// Horizontal timeline for tech evolution
interface HorizontalTimelineItemProps {
  period: string;
  title: string;
  description: string;
  technologies: string[];
  isActive?: boolean;
}

export function HorizontalTimelineItem({
  period,
  title,
  description,
  technologies,
  isActive = false,
}: HorizontalTimelineItemProps) {
  return (
    <div className={`min-w-max flex flex-col items-center`}>
      {/* Dot */}
      <div
        className={`w-4 h-4 rounded-full border-4 border-white shadow-md z-10 ${
          isActive ? "bg-primary" : "bg-gray-300"
        }`}
      ></div>
      {/* Content box */}
      <div
        className={`mt-4 p-4 rounded-lg w-72 text-center transition-all duration-300 ${
          isActive
            ? "bg-primary/10 border border-primary"
            : "bg-white border border-border"
        }`}
      >
        <p className="text-sm font-semibold text-primary">{period}</p>
        <h4 className="text-lg font-bold text-foreground mt-1">{title}</h4>
        <p className="text-muted text-sm mt-2">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3 justify-center">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface HorizontalTimelineProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalTimeline({
  children,
  className = "",
}: HorizontalTimelineProps) {
  return (
    <div className={`relative flex items-start gap-2 overflow-x-auto pb-4 ${className}`}>
      {/* Connecting line */}
      <div className="absolute top-4 left-0 right-0 h-1 bg-primary/30 z-0"></div>
      {/* Items */}
      <div className="relative z-10 flex gap-8 px-4">{children}</div>
    </div>
  );
}
