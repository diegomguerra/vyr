import { useEffect, useMemo, useState } from "react";
import { format, parseISO } from "date-fns";
import { Card } from "@/components/nzt";
import { getFeatureFlags } from "@/lib/feature-flags";
import { buildDayReadout, getRecentDays } from "@/lib/labs-engine";
import type { DayReadoutDTO, NodeDailySummaryDTO, RitualEntryDTO } from "@/lib/labs-types";
import { getNodeDailySummary } from "@/lib/node-provider";
import { getRitualEntries } from "@/lib/ritual-storage";

export default function LabsToday() {
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

  const readout: DayReadoutDTO = useMemo(
    () => buildDayReadout(todayISO, entries, nodeSummary),
    [todayISO, entries, nodeSummary],
  );

  const recentDays = getRecentDays(todayISO, 7);
  const entryByDate = new Set(entries.map((entry) => entry.dateISO));

  return (
    <div className="space-y-4 sm:space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-vyr-gray-500">Hoje</p>
        <h1 className="text-xl sm:text-2xl font-semibold text-vyr-white">{readout.headline}</h1>
        <p className="text-xs text-vyr-gray-400">
          Inferências observacionais. Não usadas para decisão clínica.
        </p>
      </header>

      <Card title="Leitura do dia" subtitle="Leitura densa com contexto operacional">
        <ul className="space-y-2 text-sm text-vyr-gray-200">
          {readout.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-vyr-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-md border border-vyr-graphite/60 bg-vyr-graphite/40 px-4 py-3 text-xs text-vyr-gray-300">
          {readout.deltas.note}
        </div>
      </Card>

      <Card title="Direção do dia" subtitle="Operacionalmente recomendado">
        <div className="flex flex-col gap-3 text-sm text-vyr-gray-200">
          <div className="inline-flex w-fit rounded-full border border-vyr-accent/40 px-3 py-1 text-xs uppercase tracking-[0.15em] text-vyr-accent">
            {readout.direction.replace("_", " ")}
          </div>
          <h3 className="text-base font-semibold text-vyr-white">{readout.microAction.title}</h3>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-vyr-gray-300">
            {readout.microAction.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </Card>

      <Card title="Mini timeline (7 dias)" subtitle="Registro diário do ritual">
        <div className="grid grid-cols-7 gap-2">
          {recentDays.map((dayISO) => {
            const active = entryByDate.has(dayISO);
            return (
              <div
                key={dayISO}
                className={`rounded-md border px-2 py-3 text-center text-xs ${
                  active
                    ? "border-vyr-accent/50 bg-vyr-accent/15 text-vyr-white"
                    : "border-vyr-graphite/50 bg-vyr-graphite/30 text-vyr-gray-400"
                }`}
              >
                <div className="text-[10px] uppercase tracking-[0.2em]">
                  {format(parseISO(dayISO), "EEEEE")}
                </div>
                <div className="text-sm font-semibold">{format(parseISO(dayISO), "d")}</div>
              </div>
            );
          })}
        </div>
      </Card>

      {flags.nodeSignalsCard && readout.nodeSignals && readout.nodeSignals.length > 0 && (
        <Card title="Sinais do Node (24h)" subtitle="Suporte opcional, sem protagonismo">
          <div className="flex flex-wrap gap-2">
            {readout.nodeSignals.map((signal) => (
              <div
                key={signal.label}
                className="rounded-full border border-vyr-graphite/60 px-3 py-1 text-xs text-vyr-gray-200"
              >
                <span className="text-vyr-gray-400">{signal.label}:</span> {signal.value}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-vyr-gray-400">
            Inferências observacionais. Não usadas para decisão clínica.
          </p>
        </Card>
      )}
    </div>
  );
}
