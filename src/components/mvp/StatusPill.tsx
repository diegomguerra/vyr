interface StatusPillProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "info";
}

export function StatusPill({ children, variant = "default" }: StatusPillProps) {
  const variants = {
    default: "bg-vyr-gray-900/50 text-vyr-gray-100 border-vyr-gray-500/20",
    success: "bg-vyr-gray-100/10 text-vyr-gray-100 border-vyr-gray-100/30",
    warning: "bg-vyr-gray-500/10 text-vyr-gray-500 border-vyr-gray-500/30",
    info: "bg-vyr-cold-blue/10 text-vyr-cold-blue border-vyr-cold-blue/30",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium font-mono ${variants[variant]}`}>
      {children}
    </span>
  );
}
