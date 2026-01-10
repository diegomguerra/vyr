import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/nzt";
import { getFeatureFlags } from "@/lib/feature-flags";
import { buildWeeklySummaries } from "@/lib/labs-engine";
import type { NodeDailySummaryDTO, RitualEntryDTO } from "@/lib/labs-types";
import { getNodeDailySummary } from "@/lib/node-provider";
import { getRitualEntries } from "@/lib/ritual-storage";

const trendCopy = (node?: NodeDailySummaryDTO, entries?: RitualEntryDTO[]) => {
  if (!node || !entries || entries.length === 0) {
    return [
      "Padrão em formação: sono x clareza ainda sem base suficiente.",
      "Padrão em formação: carga x HRV ainda sem base suficiente.",
    ];
  }
  const last = entries[entries.length - 1];
  const sleepTrend =
    node.sleepQualityTag === "GOOD" && last.decisionClarity >= 4
      ? "Sono percebido como bom aparece alinhado a maior clareza."
      : "Sono ainda sem correlação estável com clareza.";
  const hrvTrend =
    node.hrvTag === "LOWER_THAN_BASELINE" && last.perceivedLoad === "HIGH"
      ? "Carga elevada aparece junto de HRV abaixo do baseline."
      : "Carga e HRV ainda variam sem padrão claro.";
  return [sleepTrend, hrvTrend];
};

export default function LabsProgress() {
  const todayISO = new Date().toISOString().slice(0, 10);
  const flags = getFeatureFlags();
  const [entries, setEntries] = useState<RitualEntryDTO[]>([]);
  const [nodeSummary, setNodeSummary] = useState<NodeDailySummaryDTO | undefined>(undefined);

  useEffect(() => {
    setEntries(getRitualEntries());
  }, []);

  useEffect(() => {
    if (!flags.nodeEnabled) return;
    getNodeDailySummary(todayISO).then(setNodeSummary);
  }, [flags.nodeEnabled, todayISO]);

  const weeklyCards = useMemo(() => buildWeeklySummaries(todayISO, entries, 4), [todayISO, entries]);
  const trends = trendCopy(nodeSummary, entries);

  if (!flags.progressWeeklyEnabled) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-semibold text-vyr-white">Progresso</h1>
        <p className="text-sm text-vyr-gray-400">Progresso semanal desativado pelas flags.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-vyr-gray-500">Progresso</p>
        <h1 className="text-xl sm:text-2xl font-semibold text-vyr-white">
          Evolução semanal e constância
        </h1>
        <p className="text-xs text-vyr-gray-400">
          Inferências observacionais. Não usadas para decisão clínica.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {weeklyCards.map((card) => (
          <Card key={card.weekLabel} title={card.weekLabel} subtitle="Ritual e variabilidade">
            <div className="space-y-2 text-sm text-vyr-gray-300">
              <p>
                Rituais: <span className="text-vyr-white">{card.ritualsDone}</span> / {card.ritualsTarget}
              </p>
              <p>Variabilidade: {card.variabilityTag}</p>
              <p>{card.note}</p>
            </div>
          </Card>
        ))}
      </div>

      {flags.nodeTrendsProgress && (
        <Card title="Tendências observacionais" subtitle="Node como suporte opcional">
          <ul className="list-disc space-y-2 pl-5 text-sm text-vyr-gray-300">
            {trends.map((trend) => (
              <li key={trend}>{trend}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-vyr-gray-400">
            Inferências observacionais. Não usadas para decisão clínica.
          </p>
        </Card>
      )}
    </div>
  );
}
