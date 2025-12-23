interface StatusPillProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "info";
}

export function StatusPill({ children, variant = "default" }: StatusPillProps) {
  const variants = {
    default: "nzt-badge",
    success: "nzt-badge border-secondary/50 bg-secondary/10 text-secondary",
    warning: "nzt-badge border-warning/50 bg-warning/10 text-warning",
    info: "nzt-badge border-accent/50 bg-accent/10 text-accent",
  };

  return (
    <span className={variants[variant]}>
      {children}
    </span>
  );
}
