import { useEffect, useMemo, useState } from "react";
import { format, parseISO } from "date-fns";
import { Card } from "@/components/nzt";
import { getFeatureFlags } from "@/lib/feature-flags";
import { buildDayReadout, getRecentDays } from "@/lib/labs-engine";
import type { DayReadoutDTO, NodeDailySummaryDTO, RitualEntryDTO } from "@/lib/labs-types";
import { getDemoRitualEntries, getDemoSeries, getDemoToday } from "@/lib/demo-data";
import { getNodeDailySummary } from "@/lib/node-provider";
import { getRitualEntries } from "@/lib/ritual-storage";

export default function LabsToday() {
  const todayISO = new Date().toISOString().slice(0, 10);
  const flags = getFeatureFlags();
  const [entries, setEntries] = useState<RitualEntryDTO[]>([]);
  const [nodeSummary, setNodeSummary] = useState<NodeDailySummaryDTO | undefined>(undefined);

  useEffect(() => {
    if (flags.isDemoMode) {
      setEntries(getDemoRitualEntries());
      return;
    }
    setEntries(getRitualEntries());
  }, [flags.isDemoMode]);

  useEffect(() => {
    if (!flags.nodeEnabled || flags.isDemoMode) return;
    getNodeDailySummary(todayISO).then(setNodeSummary);
  }, [flags.nodeEnabled, flags.isDemoMode, todayISO]);

  const readout: DayReadoutDTO = useMemo(
    () => buildDayReadout(todayISO, entries, nodeSummary),
    [todayISO, entries, nodeSummary],
  );

  const recentDays = getRecentDays(todayISO, 7);
  const entryByDate = new Set(entries.map((entry) => entry.dateISO));

  const demoToday = flags.isDemoMode ? getDemoToday() : null;
  const demoSeries = flags.isDemoMode ? getDemoSeries() : [];
  const stateTag = demoToday?.system_state ?? readout.stateTag;
  const normalizedStateTag = stateTag === "EM_RECUPERACAO" ? "EM RECUPERACAO" : stateTag;

  const estadoLabel =
    normalizedStateTag === "FLUIDA"
      ? "FLUIDA"
      : normalizedStateTag === "EM RECUPERACAO"
        ? "EM RECUPERACAO"
        : "ESTAVEL";

  const estadoSubfrase =
    normalizedStateTag === "FLUIDA"
      ? "Constancia alta para avancar sem friccao."
      : normalizedStateTag === "EM RECUPERACAO"
        ? "Ritmo pede reducao de carga e foco no essencial."
        : "Ritmo estavel para manter continuidade.";

  const bullets = (() => {
    if (flags.isDemoMode && demoSeries.length > 0) {
      const last3 = demoSeries.slice(-3);
      const clarityAvg = (
        last3.reduce((sum, day) => sum + day.perceived_clarity, 0) / last3.length
      ).toFixed(1);
      const loadAvg = (
        last3.reduce((sum, day) => sum + day.mental_load, 0) / last3.length
      ).toFixed(1);
      const ritualCount = last3.filter((day) => day.ritual_completed).length;
      return [
        `Clareza media nos ultimos 3 dias: ${clarityAvg}/5.`,
        `Carga mental recente: ${loadAvg}/5.`,
        `Ritual presente em ${ritualCount}/3 dias, reforcando a leitura.`,
      ];
    }
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

  const comparisonText = (() => {
    if (flags.isDemoMode && demoSeries.length >= 2) {
      const today = demoSeries[demoSeries.length - 1];
      const yesterday = demoSeries[demoSeries.length - 2];
      const clarityDelta = today.perceived_clarity - yesterday.perceived_clarity;
      const loadDelta = today.mental_load - yesterday.mental_load;
      if (clarityDelta === 0 && loadDelta === 0) {
        return "Sem variacao relevante desde ontem.";
      }
      return `Desde ontem: clareza ${clarityDelta >= 0 ? "+" : ""}${clarityDelta}, carga ${loadDelta >= 0 ? "+" : ""}${loadDelta}.`;
    }
    if (readout.deltas.clarityDelta === 0 && readout.deltas.loadDelta === 0) {
      return "Sem variacao relevante desde ontem.";
    }
    return `Desde ontem: clareza ${readout.deltas.clarityDelta >= 0 ? "+" : ""}${readout.deltas.clarityDelta}, carga ${readout.deltas.loadDelta >= 0 ? "+" : ""}${readout.deltas.loadDelta}.`;
  })();

  const headlineText = (() => {
    if (!flags.isDemoMode) return readout.headline;
    if (normalizedStateTag === "FLUIDA") return "Fluidez alta para avancar com leveza.";
    if (normalizedStateTag === "EM RECUPERACAO") return "Hoje pede recuperacao operacional.";
    return "Estabilidade em curso para sustentar o ritmo.";
  })();

  const actionText = (() => {
    if (flags.isDemoMode) {
      if (normalizedStateTag === "FLUIDA") {
        return "Conclua uma entrega critica com um bloco de foco unico.";
      }
      if (normalizedStateTag === "EM RECUPERACAO") {
        return "Reduza carga, priorize uma tarefa essencial e feche o ciclo cedo.";
      }
      return "Mantenha ritmo com dois blocos curtos e pausa definida.";
    }
    return readout.microAction.title;
  })();

  return (
    <div className="space-y-4 sm:space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-vyr-gray-500">Hoje</p>
        <h1 className="text-xl sm:text-2xl font-semibold text-vyr-white">Leitura diaria acionavel</h1>
        <p className="text-xs text-vyr-gray-400">
          Inferencias observacionais. Nao usadas para decisao clinica.
        </p>
        {flags.isDemoMode && (
          <p className="text-xs text-vyr-accent uppercase tracking-[0.2em]">
            Dados simulados para demonstracao
          </p>
        )}
      </header>

      <Card title="Estado do dia" subtitle="Como voce esta hoje">
        <div className="flex flex-col gap-3 text-sm text-vyr-gray-200">
          <div className="inline-flex w-fit rounded-full border border-vyr-accent/40 px-3 py-1 text-xs uppercase tracking-[0.15em] text-vyr-accent">
            {estadoLabel}
          </div>
          <h2 className="text-base font-semibold text-vyr-white">{headlineText}</h2>
          <p className="text-sm text-vyr-gray-300">{estadoSubfrase}</p>
        </div>
      </Card>

      <Card title="Por que estou assim" subtitle="Hoje voce esta assim porque:">
        <ul className="space-y-2 text-sm text-vyr-gray-200">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-vyr-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-vyr-gray-400">
          Inferencias observacionais. Nao usadas para decisao clinica.
        </p>
      </Card>

      <Card title="Comparado a voce mesmo" subtitle="Variacao diaria sem graficos">
        <p className="text-sm text-vyr-gray-200">{comparisonText}</p>
      </Card>

      <Card title="Acao do dia" subtitle="Uma unica acao operacional">
        <p className="text-sm text-vyr-gray-200">{actionText}</p>
      </Card>

      <Card title="Linha de consistencia" subtitle="Ultimos 7 dias (feito / nao feito)">
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
