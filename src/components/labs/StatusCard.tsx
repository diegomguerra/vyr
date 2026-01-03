import { cn } from "@/lib/utils";
interface StatusCardProps {
  label: string;
  status?: "active" | "pending" | "complete";
  className?: string;
}
export function StatusCard({
  label,
  status = "active",
  className
}: StatusCardProps) {
  return <div className={cn("px-4 py-3 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm", "flex items-center justify-between gap-3", className)}>
      <span className="text-xs sm:text-sm font-mono text-primary-foreground">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <div className={cn("w-1.5 h-1.5 rounded-full", status === "active" && "bg-green-500/70", status === "pending" && "bg-yellow-500/70", status === "complete" && "bg-muted-foreground/50")} />
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-primary-foreground">
          {status === "active" ? "ativo" : status === "pending" ? "pendente" : "completo"}
        </span>
      </div>
    </div>;
}