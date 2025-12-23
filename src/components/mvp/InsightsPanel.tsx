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
    <div className="grid lg:grid-cols-2 gap-5">
      {/* Insights Básico */}
      <div className="glass-card p-5">
        <h3 className="font-semibold mb-3">Insights (Básico) — percepção</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Análises baseadas em consistência e auto-relato.
        </p>

        {!baselineReady ? (
          <div className="p-4 rounded-xl bg-warning/10 border border-warning/30">
            <p className="text-sm text-warning">
              ⏳ Complete 7 dias de check-ins para desbloquear insights.
            </p>
          </div>
        ) : (
          <ul className="space-y-2 text-sm text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-secondary">•</span>
              Quais horários têm melhor foco reportado
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary">•</span>
              Dias com melhor sono percebido vs melhor desempenho
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary">•</span>
              Impacto de cafeína/treino/álcool (auto-relato)
            </li>
          </ul>
        )}
      </div>

      {/* Insights Premium */}
      <div className="glass-card p-5">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="font-semibold">Insights Premium</h3>
          <StatusPill variant="info">Superior</StatusPill>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Convergência vs divergência — percepção × SmartData.
        </p>

        {plan !== "pro" ? (
          <div className="p-4 rounded-xl bg-muted/30 border border-border">
            <p className="text-sm text-muted-foreground">
              🔒 Disponível no Plano Superior.
            </p>
          </div>
        ) : !proInsightsUnlocked ? (
          <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30">
            <p className="text-sm text-destructive">
              ⚠️ Bloqueado: SmartData insuficiente ou ausente.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Requisito mínimo: dados do ring com qualidade parcial/boa.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-2 mb-4">
              <StatusPill variant="success">Confirmado</StatusPill>
              <StatusPill variant="warning">Com custo</StatusPill>
              <StatusPill variant="info">Melhora silenciosa</StatusPill>
            </div>

            <ul className="space-y-3 text-sm text-foreground">
              <li>
                <strong className="text-secondary">Confirmado:</strong>{" "}
                percepção melhora e índices macro sobem.
              </li>
              <li>
                <strong className="text-warning">Com custo:</strong>{" "}
                percepção melhora mas equilíbrio cai.
              </li>
              <li>
                <strong className="text-accent">Melhora silenciosa:</strong>{" "}
                vitalidade sobe antes da percepção.
              </li>
            </ul>

            {ringDaily.metrics && ringDaily.metrics.length > 0 && (
              <>
                <p className="text-xs text-muted-foreground mt-5 mb-2">
                  Métricas brutas (transparência):
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
