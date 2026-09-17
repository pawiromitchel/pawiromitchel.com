import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
}

export function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
  onClick,
}: CardProps) {
  const paddingStyles = {
    none: "",
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
  };

  const hoverStyles = hover
    ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer"
    : "";

  const baseStyles =
    "rounded-2xl bg-card-bg border border-border shadow-sm transition-all duration-300";

  const finalClassName = `${baseStyles} ${paddingStyles[padding]} ${hoverStyles} ${className}`;

  return (
    <div className={finalClassName} onClick={onClick}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-semibold text-foreground mb-2 ${className}`}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <p className={`text-muted text-sm leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
