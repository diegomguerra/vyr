import type { Plan, RingDaily, Metric } from "@/lib/mvp-types";
import { StatusPill } from "./StatusPill";
import { MetricCard } from "./MetricCard";

interface InsightsPanelProps {
  plan: Plan;
  ringDaily: RingDaily;
  baselineReady: boolean;
}

export function InsightsPanel({ plan, ringDaily, baselineReady }: InsightsPanelProps) {
  const hasExportableScores =
    typeof ringDaily.healthIndex === "number" ||
    typeof ringDaily.vitalityIndex === "number" ||
    typeof ringDaily.balanceIndex === "number";

  const hasAnyMetric = (ringDaily.metrics?.length ?? 0) > 0;

  const proInsightsUnlocked =
    plan === "pro" &&
    ringDaily.dataQuality !== "missing" &&
    (hasExportableScores || hasAnyMetric);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5">
      {/* Insights Básico */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base text-white mb-2 sm:mb-3">Insights (Básico)</h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">
          Análises baseadas em consistência e auto-relato.
        </p>

        {!baselineReady ? (
          <div className="p-3 sm:p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
            <p className="text-xs sm:text-sm text-amber-400">
              ⏳ Complete 7 dias de check-ins para desbloquear.
            </p>
          </div>
        ) : (
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              Horários com melhor foco
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              Sono vs desempenho
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              Impacto de cafeína/treino/álcool
            </li>
          </ul>
        )}
      </div>

      {/* Insights Premium */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap">
          <h3 className="font-semibold text-sm sm:text-base text-white">Insights Premium</h3>
          <StatusPill variant="info">Superior</StatusPill>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">
          Convergência vs divergência — percepção × SmartData.
        </p>

        {plan !== "pro" ? (
          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-700/30">
            <p className="text-xs sm:text-sm text-slate-400">
              🔒 Disponível no Plano Superior.
            </p>
          </div>
        ) : !proInsightsUnlocked ? (
          <div className="p-3 sm:p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
            <p className="text-xs sm:text-sm text-rose-400">
              ⚠️ SmartData insuficiente.
            </p>
            <p className="text-[10px] sm:text-xs text-slate-500 mt-1.5 sm:mt-2">
              Requisito: dados do ring com qualidade parcial/boa.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <StatusPill variant="success">Confirmado</StatusPill>
              <StatusPill variant="warning">Com custo</StatusPill>
              <StatusPill variant="info">Melhora silenciosa</StatusPill>
            </div>

            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-300">
              <li>
                <strong className="text-emerald-400">Confirmado:</strong>{" "}
                percepção e índices macro sobem.
              </li>
              <li>
                <strong className="text-amber-400">Com custo:</strong>{" "}
                percepção melhora, equilíbrio cai.
              </li>
              <li>
                <strong className="text-violet-400">Melhora silenciosa:</strong>{" "}
                vitalidade sobe antes da percepção.
              </li>
            </ul>

            {ringDaily.metrics && ringDaily.metrics.length > 0 && (
              <>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-4 sm:mt-5 mb-2">
                  Métricas brutas:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {ringDaily.metrics.slice(0, 4).map((m, i) => (
                    <MetricCard key={i} metric={m} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
