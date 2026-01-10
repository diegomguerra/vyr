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

  const estadoLabel =
    readout.stateTag === "FLUIDA"
      ? "FLUIDA"
      : readout.stateTag === "EM_RECUPERACAO"
        ? "EM RECUPERAÇÃO"
        : "ESTÁVEL";
  const estadoSubfrase =
    readout.stateTag === "FLUIDA"
      ? "Constância alta para avançar sem fricção."
      : readout.stateTag === "EM_RECUPERACAO"
        ? "Ritmo pede redução de carga e foco no essencial."
        : "Ritmo estável para manter continuidade.";

  const bullets = (() => {
    const base = readout.bullets.slice(0, 3);
    if (flags.nodeEnabled && readout.nodeSignals && readout.nodeSignals.length > 0) {
      const signals = readout.nodeSignals
        .map((signal) => `${signal.label} ${signal.value}`)
        .join(", ");
      base[2] = `Sinais do Node: ${signals}.`;
    }
    while (base.length < 3) {
      base.push("Registro do ritual sustenta a leitura operacional.");
    }
    return base.slice(0, 3);
  })();

  const comparisonText =
    readout.deltas.clarityDelta === 0 && readout.deltas.loadDelta === 0
      ? "Sem variação relevante desde ontem."
      : `Desde ontem: clareza ${readout.deltas.clarityDelta >= 0 ? "+" : ""}${readout.deltas.clarityDelta}, carga ${readout.deltas.loadDelta >= 0 ? "+" : ""}${readout.deltas.loadDelta}.`;

  return (
    <div className="space-y-4 sm:space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-vyr-gray-500">Hoje</p>
        <h1 className="text-xl sm:text-2xl font-semibold text-vyr-white">Leitura diária acionável</h1>
        <p className="text-xs text-vyr-gray-400">
          Inferências observacionais. Não usadas para decisão clínica.
        </p>
      </header>

      <Card title="Estado do dia" subtitle="Como você está hoje">
        <div className="flex flex-col gap-3 text-sm text-vyr-gray-200">
          <div className="inline-flex w-fit rounded-full border border-vyr-accent/40 px-3 py-1 text-xs uppercase tracking-[0.15em] text-vyr-accent">
            {estadoLabel}
          </div>
          <h2 className="text-base font-semibold text-vyr-white">{readout.headline}</h2>
          <p className="text-sm text-vyr-gray-300">{estadoSubfrase}</p>
        </div>
      </Card>

      <Card title="Por que estou assim" subtitle="Hoje você está assim porque:">
        <ul className="space-y-2 text-sm text-vyr-gray-200">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-vyr-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-vyr-gray-400">
          Inferências observacionais. Não usadas para decisão clínica.
        </p>
      </Card>

      <Card title="Comparado a você mesmo" subtitle="Variação diária sem gráficos">
        <p className="text-sm text-vyr-gray-200">{comparisonText}</p>
      </Card>

      <Card title="Ação do dia" subtitle="Uma única ação operacional">
        <p className="text-sm text-vyr-gray-200">{readout.microAction.title}</p>
      </Card>

      <Card title="Linha de consistência" subtitle="Últimos 7 dias (feito / não feito)">
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
    </div>
  );
}
