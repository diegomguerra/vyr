import { BarChart3, CheckCircle2, Repeat } from "lucide-react";
import { FEATURES } from "@/lib/flags";
import { buildWeeklyInsight, fluidezToScore } from "@/lib/labs-engine";
import type { RitualEntry } from "@/lib/labs-types";

type ProgressCardsProps = {
  entries: RitualEntry[];
};

const formatPercent = (value: number) => `${Math.round(value * 100)}%`;

const calcStreak = (entries: RitualEntry[]) => {
  const days = new Set(entries.map((entry) => entry.dateISO));
  let streak = 0;
  const today = new Date();
  while (true) {
    const date = new Date(today);
    date.setDate(today.getDate() - streak);
    const dateISO = date.toISOString().slice(0, 10);
    if (!days.has(dateISO)) break;
    streak += 1;
  }
  return streak;
};

const calcVariability = (entries: RitualEntry[]) => {
  const recent = entries.slice(0, 7).map((entry) => fluidezToScore(entry.guidance.fluidez));
  if (recent.length <= 1) return 0;
  const mean = recent.reduce((sum, v) => sum + v, 0) / recent.length;
  const variance = recent.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / recent.length;
  return Math.sqrt(variance);
};

export function ProgressCards({ entries }: ProgressCardsProps) {
  const completed = entries.filter((entry) => entry.checklistComplete);
  const completionRate = entries.length === 0 ? 0 : completed.length / entries.length;
  const streak = calcStreak(entries);
  const variability = calcVariability(entries);
  const insight = buildWeeklyInsight(
    entries.map((entry) => ({
      dateISO: entry.dateISO,
      guidance: entry.guidance,
      checklistComplete: entry.checklistComplete,
    }))
  );

  return (
    <div className="space-y-4">
      <div className="vyr-card-graphite p-5 sm:p-6">
        <div className="flex items-center gap-2 text-vyr-gray-400 text-xs font-mono">
          <CheckCircle2 className="w-4 h-4" />
          Consistência
        </div>
        <div className="mt-3 space-y-1">
          <p className="text-2xl font-semibold text-vyr-white">{streak} dias seguidos</p>
          <p className="text-sm text-vyr-gray-400">
            Ritual completo em {formatPercent(completionRate)} dos dias registrados.
          </p>
        </div>
      </div>

      <div className="vyr-card-graphite p-5 sm:p-6">
        <div className="flex items-center gap-2 text-vyr-gray-400 text-xs font-mono">
          <Repeat className="w-4 h-4" />
          Estabilidade
        </div>
        <div className="mt-3 space-y-1">
          <p className="text-2xl font-semibold text-vyr-white">
            {variability < 0.5 ? "Baixa variabilidade" : variability < 0.9 ? "Variável" : "Oscilando"}
          </p>
          <p className="text-sm text-vyr-gray-400">
            Baseado nos últimos registros de fluidez.
          </p>
        </div>
      </div>

      <div className="vyr-card-graphite p-5 sm:p-6">
        <div className="flex items-center gap-2 text-vyr-gray-400 text-xs font-mono">
          <BarChart3 className="w-4 h-4" />
          Insight semanal
        </div>
        <div className="mt-3 space-y-1">
          <p className="text-lg font-semibold text-vyr-white">{insight.title}</p>
          <p className="text-sm text-vyr-gray-400">{insight.body}</p>
        </div>
      </div>

      {FEATURES.FEATURE_NODE_ENABLED && (
        <div className="vyr-card-graphite p-5 sm:p-6">
          <p className="text-xs font-mono text-vyr-gray-500">Sinais do Node</p>
          <p className="text-sm text-vyr-gray-400 mt-2">
            Tendência de recuperação compatível com sua percepção recente.
          </p>
        </div>
      )}
    </div>
  );
}
