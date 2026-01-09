import { useLabsEntries } from "@/hooks/use-labs-entries";
import { buildConsistencyInsight, buildVariationInsight, buildWeeklyInsight } from "@/lib/labs-engine";
import { FEATURES } from "@/lib/flags";

export default function LabsInsights() {
  const { entries } = useLabsEntries();
  const weekly = buildWeeklyInsight(
    entries.map((entry) => ({
      dateISO: entry.dateISO,
      guidance: entry.guidance,
      checklistComplete: entry.checklist.didAction && entry.checklist.registeredState,
    }))
  );

  const consistency = buildConsistencyInsight(
    entries.map((entry) => ({
      dateISO: entry.dateISO,
      guidance: entry.guidance,
      checklistComplete: entry.checklist.didAction && entry.checklist.registeredState,
    }))
  );

  const variation = buildVariationInsight(
    entries.map((entry) => ({
      dateISO: entry.dateISO,
      guidance: entry.guidance,
      checklistComplete: entry.checklist.didAction && entry.checklist.registeredState,
    }))
  );

  if (!FEATURES.insights_enabled) {
    return (
      <div className="vyr-card-graphite p-5 sm:p-6">
        <p className="text-sm text-vyr-gray-400">Insights desabilitados.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="vyr-card-graphite p-5 sm:p-6">
        <p className="text-xs font-mono text-vyr-gray-500">Insight semanal</p>
        <p className="text-lg font-semibold text-vyr-white mt-2">{weekly.title}</p>
        <p className="text-sm text-vyr-gray-400 mt-2">{weekly.body}</p>
      </div>
      <div className="vyr-card-graphite p-5 sm:p-6">
        <p className="text-xs font-mono text-vyr-gray-500">Insight de consistência</p>
        <p className="text-sm text-vyr-white mt-2">{consistency}</p>
      </div>
      <div className="vyr-card-graphite p-5 sm:p-6">
        <p className="text-xs font-mono text-vyr-gray-500">Insight de variação</p>
        <p className="text-sm text-vyr-white mt-2">{variation}</p>
      </div>
    </div>
  );
}
