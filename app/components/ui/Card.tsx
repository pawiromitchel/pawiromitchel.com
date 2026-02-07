import React, { ReactNode } from "react";
import Image from "next/image";

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

  const focusStyles = onClick
    ? "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    : "";

  const baseStyles =
    "rounded-2xl bg-card-bg border border-border shadow-sm transition-all duration-300";

  const finalClassName = `${baseStyles} ${paddingStyles[padding]} ${hoverStyles} ${focusStyles} ${className}`;

  // Make card keyboard accessible if it has an onClick handler
  const interactiveProps = onClick
    ? {
        tabIndex: 0,
        role: "button",
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        },
      }
    : {};

  return (
    <div className={finalClassName} onClick={onClick} {...interactiveProps}>
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function CardImage({ src, alt, className = "" }: CardImageProps) {
  return (
    <div className={`relative w-full h-48 rounded-lg mb-4 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
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
