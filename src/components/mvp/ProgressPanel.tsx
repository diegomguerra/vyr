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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5">
      {/* Consistência */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base text-white mb-1.5 sm:mb-2">Consistência (7 dias)</h3>
        <p className="text-[10px] sm:text-xs text-slate-400 mb-3 sm:mb-4">
          Sem consistência, qualquer score vira ruído.
        </p>
        <div className="space-y-1.5 sm:space-y-2">
          {weekDates.map((d) => {
            const count = checkinCountByDate.get(d) ?? 0;
            const isComplete = count >= 3;
            return (
              <div
                key={d}
                className={`flex items-center justify-between rounded-xl border px-3 sm:px-4 py-2 sm:py-2.5 ${
                  isComplete
                    ? "border-emerald-500/30 bg-emerald-500/10"
                    : "border-slate-700/30 bg-slate-900/30"
                }`}
              >
                <span className="text-xs sm:text-sm text-white">{formatDate(d)}</span>
                <span className={`text-[10px] sm:text-xs ${isComplete ? "text-emerald-400" : "text-slate-500"}`}>
                  {count}/3
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* SmartData tendência */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base text-white mb-1.5 sm:mb-2">SmartData — tendência</h3>

        {plan !== "pro" ? (
          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-700/30">
            <p className="text-xs sm:text-sm text-slate-400">
              🔒 Disponível no Plano Superior.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[10px] sm:text-xs text-slate-400 mb-3 sm:mb-4">
              Use os índices exportáveis como macro-sinal.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <IndexCard label="Saúde" value={ringDaily.healthIndex} icon="❤️" />
              <IndexCard label="Vitalidade" value={ringDaily.vitalityIndex} icon="⚡" />
              <IndexCard label="Equilíbrio" value={ringDaily.balanceIndex} icon="⚖️" />
            </div>
            <p className="text-[10px] sm:text-xs text-slate-500 mt-3 sm:mt-4">
              Qualidade: <strong className="text-white">{ringDaily.dataQuality}</strong>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
