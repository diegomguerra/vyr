interface StatusPillProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "info";
}

export function StatusPill({ children, variant = "default" }: StatusPillProps) {
  const variants = {
    default: "bg-vyr-gray-800/50 text-vyr-gray-300 border-vyr-gray-700/50",
    success: "bg-vyr-accent/10 text-vyr-accent border-vyr-accent/30",
    warning: "bg-vyr-gray-600/20 text-vyr-gray-400 border-vyr-gray-600/30",
    info: "bg-vyr-cyan/10 text-vyr-cyan border-vyr-cyan/30",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border text-xs font-medium font-mono ${variants[variant]}`}>
      {children}
    </span>
  );
}
