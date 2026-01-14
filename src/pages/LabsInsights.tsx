import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/nzt";
import { getFeatureFlags } from "@/lib/feature-flags";
import { buildInsights } from "@/lib/labs-engine";
import type { RitualEntryDTO } from "@/lib/labs-types";
import { getDemoInsights, getDemoRitualEntries } from "@/lib/demo-data";
import { getRitualEntries } from "@/lib/ritual-storage";

export default function LabsInsights() {
  const flags = getFeatureFlags();
  const [entries, setEntries] = useState<RitualEntryDTO[]>([]);

  useEffect(() => {
    if (flags.isDemoMode) {
      setEntries(getDemoRitualEntries());
      return;
    }
    setEntries(getRitualEntries());
  }, [flags.isDemoMode]);

  const insights = useMemo(
    () => (flags.isDemoMode ? getDemoInsights() : buildInsights(entries)),
    [entries, flags.isDemoMode],
  );

  if (!flags.insightsEnabled) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-semibold text-vyr-white">Insights</h1>
        <p className="text-sm text-vyr-gray-400">Insights desativados pelas flags.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-vyr-gray-500">Insights</p>
        <h1 className="text-xl sm:text-2xl font-semibold text-vyr-white">
          Leituras semanais e padrões de consistência
        </h1>
        <p className="text-xs text-vyr-gray-400">
          Inferências observacionais. Não usadas para decisão clínica.
        </p>
        {flags.isDemoMode && (
          <p className="text-xs text-vyr-accent uppercase tracking-[0.2em]">
            Dados simulados para demonstração
          </p>
        )}
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Insight semanal" subtitle="Resumo dos últimos 7 dias">
          <p className="text-sm text-vyr-gray-300">{insights.weekly}</p>
        </Card>
        <Card title="Insight de consistência" subtitle="Ritual e constância">
          <p className="text-sm text-vyr-gray-300">{insights.consistency}</p>
        </Card>
        <Card title="Insight de variabilidade" subtitle="Oscilação recente">
          <p className="text-sm text-vyr-gray-300">{insights.variability}</p>
        </Card>
      </div>
    </div>
  );
}
