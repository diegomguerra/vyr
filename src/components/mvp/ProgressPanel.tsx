import type { Plan, RingDaily, Checkin } from "@/lib/mvp-types";
import { IndexCard } from "./MetricCard";
import { useMemo } from "react";

interface ProgressPanelProps {
  plan: Plan;
  ringDaily: RingDaily;
  checkins: Checkin[];
}

export function ProgressPanel({ plan, ringDaily, checkins }: ProgressPanelProps) {
  const today = new Date();

  const weekDates = useMemo(() => {
    const arr: string[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      arr.push(d.toISOString().slice(0, 10));
    }
    return arr;
  }, []);

  const checkinCountByDate = useMemo(() => {
    const m = new Map<string, number>();
    for (const d of weekDates) m.set(d, 0);
    for (const c of checkins) {
      if (m.has(c.dateISO)) m.set(c.dateISO, (m.get(c.dateISO) ?? 0) + 1);
    }
    return m;
  }, [checkins, weekDates]);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric" });
  };

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      {/* Consistência */}
      <div className="glass-card p-5">
        <h3 className="font-semibold mb-2">Consistência (últimos 7 dias)</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Sem consistência, qualquer score vira ruído. Aqui você força hábito.
        </p>
        <div className="space-y-2">
          {weekDates.map((d) => {
            const count = checkinCountByDate.get(d) ?? 0;
            const isComplete = count >= 3;
            return (
              <div
                key={d}
                className={`flex items-center justify-between rounded-xl border px-4 py-2 ${
                  isComplete
                    ? "border-secondary/50 bg-secondary/10"
                    : "border-border bg-muted/20"
                }`}
              >
                <span className="text-sm">{formatDate(d)}</span>
                <span className={`text-xs ${isComplete ? "text-secondary" : "text-muted-foreground"}`}>
                  {count}/3 check-ins
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* SmartData tendência */}
      <div className="glass-card p-5">
        <h3 className="font-semibold mb-2">SmartData — tendência macro</h3>

        {plan !== "pro" ? (
          <div className="p-4 rounded-xl bg-muted/30 border border-border">
            <p className="text-sm text-muted-foreground">
              🔒 Disponível no Plano Superior.
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs text-muted-foreground mb-4">
              Use os índices exportáveis como macro-sinal enquanto valida o schema.
            </p>
            <div className="grid grid-cols-3 gap-3">
              <IndexCard label="Saúde" value={ringDaily.healthIndex} icon="❤️" />
              <IndexCard label="Vitalidade" value={ringDaily.vitalityIndex} icon="⚡" />
              <IndexCard label="Equilíbrio" value={ringDaily.balanceIndex} icon="⚖️" />
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Qualidade do dado: <strong>{ringDaily.dataQuality}</strong>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
