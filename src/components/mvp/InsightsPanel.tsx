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
      <div className="bg-vyr-gray-900/50 backdrop-blur-xl border border-vyr-gray-500/20 rounded-2xl p-4 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base text-vyr-white mb-2 sm:mb-3 font-mono">Insights (Básico)</h3>
        <p className="text-xs sm:text-sm text-vyr-gray-500 mb-3 sm:mb-4">
          Análises baseadas em consistência e auto-relato.
        </p>

        {!baselineReady ? (
          <div className="p-3 sm:p-4 rounded-xl bg-vyr-gray-500/10 border border-vyr-gray-500/30">
            <p className="text-xs sm:text-sm text-vyr-gray-500">
              ⏳ Complete 7 dias de check-ins para desbloquear.
            </p>
          </div>
        ) : (
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-vyr-gray-100">
            <li className="flex items-start gap-2">
              <span className="text-vyr-gray-100">•</span>
              Horários com melhor foco
            </li>
            <li className="flex items-start gap-2">
              <span className="text-vyr-gray-100">•</span>
              Sono vs desempenho
            </li>
            <li className="flex items-start gap-2">
              <span className="text-vyr-gray-100">•</span>
              Impacto de cafeína/treino/álcool
            </li>
          </ul>
        )}
      </div>

      {/* Insights Premium */}
      <div className="bg-vyr-gray-900/50 backdrop-blur-xl border border-vyr-gray-500/20 rounded-2xl p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap">
          <h3 className="font-semibold text-sm sm:text-base text-vyr-white font-mono">Insights Premium</h3>
          <StatusPill variant="info">Superior</StatusPill>
        </div>
        <p className="text-xs sm:text-sm text-vyr-gray-500 mb-3 sm:mb-4">
          Convergência vs divergência — percepção × VYR NODE.
        </p>

        {plan !== "pro" ? (
          <div className="p-3 sm:p-4 rounded-xl bg-vyr-gray-900/50 border border-vyr-gray-500/20">
            <p className="text-xs sm:text-sm text-vyr-gray-500">
              🔒 Disponível no Plano Superior.
            </p>
          </div>
        ) : !proInsightsUnlocked ? (
          <div className="p-3 sm:p-4 rounded-xl bg-vyr-gray-500/10 border border-vyr-gray-500/30">
            <p className="text-xs sm:text-sm text-vyr-gray-500">
              ⚠️ VYR NODE insuficiente.
            </p>
            <p className="text-[10px] sm:text-xs text-vyr-gray-500 mt-1.5 sm:mt-2">
              Requisito: dados do NODE com qualidade parcial/boa.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <StatusPill variant="success">Confirmado</StatusPill>
              <StatusPill variant="warning">Com custo</StatusPill>
              <StatusPill variant="info">Melhora silenciosa</StatusPill>
            </div>

            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-vyr-gray-100">
              <li>
                <strong className="text-vyr-gray-100">Confirmado:</strong>{" "}
                percepção e índices macro sobem.
              </li>
              <li>
                <strong className="text-vyr-gray-500">Com custo:</strong>{" "}
                percepção melhora, equilíbrio cai.
              </li>
              <li>
                <strong className="text-vyr-cold-blue">Melhora silenciosa:</strong>{" "}
                vitalidade sobe antes da percepção.
              </li>
            </ul>

            {ringDaily.metrics && ringDaily.metrics.length > 0 && (
              <>
                <p className="text-[10px] sm:text-xs text-vyr-gray-500 mt-4 sm:mt-5 mb-2">
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
