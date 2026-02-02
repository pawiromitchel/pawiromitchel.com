import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "neutral" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
}

export function Badge({
  children,
  variant = "neutral",
  size = "md",
  className = "",
  icon,
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-primary/10 text-primary border border-primary/20",
    neutral: "bg-gray-100 text-gray-700 border border-gray-200",
    success: "bg-green-100 text-green-700 border border-green-200",
    warning: "bg-yellow-100 text-yellow-700 border border-yellow-200",
    error: "bg-red-100 text-red-700 border border-red-200",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors duration-200 whitespace-nowrap";

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <span className={finalClassName}>
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </span>
  );
}

interface BadgeGroupProps {
  badges: string[];
  variant?: "primary" | "neutral" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function BadgeGroup({
  badges,
  variant = "neutral",
  size = "md",
  className = "",
}: BadgeGroupProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {badges.map((badge, index) => (
        <Badge key={index} variant={variant} size={size}>
          {badge}
        </Badge>
      ))}
    </div>
  );
}
