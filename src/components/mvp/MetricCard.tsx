import type { Metric } from "@/lib/mvp-types";

interface MetricCardProps {
  metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="glass-card p-4">
      <div className="text-sm text-muted-foreground">{metric.key}</div>
      <div className="text-2xl font-semibold mt-1">
        {Number.isFinite(metric.value) ? metric.value : "--"}
        <span className="text-sm text-muted-foreground ml-2">{metric.unit ?? ""}</span>
      </div>
      {typeof metric.confidence === "number" && (
        <div className="text-xs text-muted-foreground mt-2">
          Confiança: {(metric.confidence * 100).toFixed(0)}%
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
    <div className="glass-card p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        {icon && <span>{icon}</span>}
        {label}
      </div>
      <div className="text-2xl font-semibold mt-1">
        {typeof value === "number" ? value : "--"}
      </div>
    </div>
  );
}
