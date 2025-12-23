interface StatusPillProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "info";
}

export function StatusPill({ children, variant = "default" }: StatusPillProps) {
  const variants = {
    default: "bg-slate-800/50 text-slate-300 border-slate-700/50",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    info: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
