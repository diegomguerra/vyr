import { VYR_COLORS, VYR_TYPOGRAPHY } from "./tokens";

interface VYRLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function VYRLogo({ variant = "light", size = "md", className = "" }: VYRLogoProps) {
  const sizeStyles = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl",
  };

  const color = variant === "light" ? VYR_COLORS.white : VYR_COLORS.black;

  return (
    <span
      className={`${sizeStyles[size]} ${className}`}
      style={{
        fontFamily: VYR_TYPOGRAPHY.logo.fontFamily,
        fontWeight: VYR_TYPOGRAPHY.logo.fontWeight,
        letterSpacing: VYR_TYPOGRAPHY.logo.letterSpacing,
        color,
      }}
    >
      VYR
    </span>
  );
}
