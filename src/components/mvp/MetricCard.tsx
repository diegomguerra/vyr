import type { Metric } from "@/lib/mvp-types";

interface MetricCardProps {
  metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="glass-card p-2.5 sm:p-4">
      <div className="text-xs sm:text-sm text-muted-foreground truncate">{metric.key}</div>
      <div className="text-lg sm:text-2xl font-semibold mt-0.5 sm:mt-1">
        {Number.isFinite(metric.value) ? metric.value : "--"}
        <span className="text-xs sm:text-sm text-muted-foreground ml-1 sm:ml-2">{metric.unit ?? ""}</span>
      </div>
      {typeof metric.confidence === "number" && (
        <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2">
          Conf: {(metric.confidence * 100).toFixed(0)}%
        </div>
      )}
    </div>
  );
}

interface IndexCardProps {
  label: string;
  value?: number;
  icon?: string;
}

export function IndexCard({ label, value, icon }: IndexCardProps) {
  return (
    <div className="glass-card p-2.5 sm:p-4">
      <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground">
        {icon && <span className="text-sm sm:text-base">{icon}</span>}
        <span className="truncate">{label}</span>
      </div>
      <div className="text-xl sm:text-2xl font-semibold mt-0.5 sm:mt-1">
        {typeof value === "number" ? value : "--"}
      </div>
    </div>
  );
}
