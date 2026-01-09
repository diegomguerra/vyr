import { BarChart3 } from "lucide-react";
import { FEATURES } from "@/lib/flags";
import { buildWeeklySummaries } from "@/lib/labs-engine";
import type { RitualEntry } from "@/lib/labs-types";

type ProgressCardsProps = {
  entries: RitualEntry[];
};

export function ProgressCards({ entries }: ProgressCardsProps) {
  const summaries = buildWeeklySummaries(
    entries.map((entry) => ({
      dateISO: entry.dateISO,
      guidance: entry.guidance,
      checklistComplete: entry.checklist.didAction && entry.checklist.registeredState,
    }))
  );

  if (!FEATURES.progress_weekly_enabled) {
    return (
      <div className="vyr-card-graphite p-5 sm:p-6">
        <p className="text-sm text-vyr-gray-400">Progresso semanal desabilitado.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {summaries.length === 0 ? (
        <div className="vyr-card-graphite p-5 sm:p-6">
          <p className="text-sm text-vyr-gray-400">Sem registros semanais ainda.</p>
        </div>
      ) : (
        summaries.map((summary) => (
          <div key={summary.weekLabel} className="vyr-card-graphite p-5 sm:p-6">
            <div className="flex items-center gap-2 text-vyr-gray-400 text-xs font-mono">
              <BarChart3 className="w-4 h-4" />
              {summary.weekLabel}
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-lg font-semibold text-vyr-white">
                Rituais feitos: {summary.ritualsDone} / {summary.ritualsTotal}
              </p>
              <p className="text-sm text-vyr-gray-400">Variabilidade: {summary.variabilityLabel}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
