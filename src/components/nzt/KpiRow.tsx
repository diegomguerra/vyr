interface KpiRowProps {
  label: string;
  base: number | null;
  now: number | null;
  refRange?: { min: number; max: number };
}

export function KpiRow({ label, base, now, refRange }: KpiRowProps) {
  const delta = base != null && now != null ? now - base : null;
  
  return (
    <div className="flex justify-between gap-4 py-3 border-b border-border last:border-b-0">
      <div className="text-sm text-foreground/90">{label}</div>
      <div className="text-right">
        <div className="text-sm">
          <span className="text-muted-foreground">Início:</span>{" "}
          <span className="text-foreground">{base ?? "—"}</span>{" "}
          <span className="text-muted-foreground">• Agora:</span>{" "}
          <span className="text-foreground">{now ?? "—"}</span>{" "}
          {delta != null && (
            <span className={`ml-2 text-xs ${delta >= 0 ? "delta-positive" : "delta-negative"}`}>
              ({delta >= 0 ? "+" : ""}{delta.toFixed(1)})
            </span>
          )}
        </div>
        {refRange && (
          <div className="text-xs text-muted-foreground mt-1">
            Referência: {refRange.min}–{refRange.max}
          </div>
        )}
      </div>
    </div>
  );
}
