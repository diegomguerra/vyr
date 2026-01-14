import { addDays, format, parseISO, startOfWeek, subDays } from "date-fns";
import type { DayReadoutDTO, NodeDailySummaryDTO, RitualEntryDTO, WeeklySummaryDTO } from "./labs-types";

const clampDelta = (value: number): -2 | -1 | 0 | 1 | 2 => {
  if (value <= -2) return -2;
  if (value === -1) return -1;
  if (value === 1) return 1;
  if (value >= 2) return 2;
  return 0;
};

const loadScore = (load: RitualEntryDTO["perceivedLoad"]) => {
  switch (load) {
    case "LOW":
      return 1;
    case "MEDIUM":
      return 3;
    case "HIGH":
      return 5;
    default:
      return 3;
  }
};

const getStateTag = (entry?: RitualEntryDTO): DayReadoutDTO["stateTag"] => {
  if (!entry) return "ESTAVEL";
  if (entry.perceivedLoad === "HIGH" || entry.mentalLightness <= 2) return "EM_RECUPERACAO";
  if (entry.mentalLightness >= 4 && entry.decisionClarity >= 4 && entry.perceivedLoad === "LOW") {
    return "FLUIDA";
  }
  return "ESTAVEL";
};

const getDirection = (entry?: RitualEntryDTO): DayReadoutDTO["direction"] => {
  if (!entry) return "SUSTENTAR";
  if (entry.perceivedLoad === "HIGH" && entry.decisionClarity <= 2) return "RECALIBRAR";
  if (entry.perceivedLoad === "HIGH" || entry.decisionClarity <= 3) return "AJUSTAR_CARGA";
  return "SUSTENTAR";
};

const getMicroAction = (direction: DayReadoutDTO["direction"]): DayReadoutDTO["microAction"] => {
  switch (direction) {
    case "RECALIBRAR":
      return {
        title: "Recalibrar ritmo",
        steps: ["Reduza a exigência por 2 ciclos de foco", "Priorize uma entrega essencial", "Feche o dia com 10 min de desaceleração"],
      };
    case "AJUSTAR_CARGA":
      return {
        title: "Ajustar carga",
        steps: ["Agrupe decisões em um bloco", "Faça uma pausa curta após o bloco", "Evite alternância excessiva"],
      };
    default:
      return {
        title: "Sustentar constância",
        steps: ["Mantenha o ritual em horário consistente", "Registre uma observação curta", "Finalize com revisão leve do dia"],
      };
  }
};

const formatLoad = (load?: RitualEntryDTO["perceivedLoad"]) => {
  if (!load) return "não registrada";
  if (load === "LOW") return "baixa";
  if (load === "MEDIUM") return "média";
  return "alta";
};

const mapNodeSignals = (node?: NodeDailySummaryDTO): { label: string; value: string }[] => {
  if (!node) return [];
  const signals: { label: string; value: string }[] = [];
  if (node.sleepQualityTag) signals.push({ label: "Sono", value: node.sleepQualityTag });
  if (node.hrvTag) signals.push({ label: "HRV", value: node.hrvTag });
  if (node.rhrTag) signals.push({ label: "RHR", value: node.rhrTag });
  if (node.movementTag) signals.push({ label: "Movimento", value: node.movementTag });
  if (node.energyTag) signals.push({ label: "Energia", value: node.energyTag });
  return signals.slice(0, 4);
};

export const buildDayReadout = (
  dateISO: string,
  entries: RitualEntryDTO[],
  nodeSummary?: NodeDailySummaryDTO,
): DayReadoutDTO => {
  const entry = entries.find((item) => item.dateISO === dateISO);
  const yesterdayISO = format(subDays(parseISO(dateISO), 1), "yyyy-MM-dd");
  const yesterday = entries.find((item) => item.dateISO === yesterdayISO);
  const stateTag = getStateTag(entry ?? entries[entries.length - 1]);
  const direction = getDirection(entry ?? entries[entries.length - 1]);
  const microAction = getMicroAction(direction);

  const clarityDelta = entry && yesterday ? clampDelta(entry.decisionClarity - yesterday.decisionClarity) : 0;
  const loadDelta = entry && yesterday ? clampDelta(loadScore(yesterday.perceivedLoad) - loadScore(entry.perceivedLoad)) : 0;

  const headlineMap: Record<DayReadoutDTO["stateTag"], string> = {
    EM_RECUPERACAO: "Hoje pede recuperação operacional.",
    ESTAVEL: "Estabilidade em curso para sustentar o ritmo.",
    FLUIDA: "Fluidez alta para avançar com leveza.",
  };

  const bullets = entry
    ? [
        `Leveza mental percebida: ${entry.mentalLightness}/5.`,
        `Clareza de decisão: ${entry.decisionClarity}/5.`,
        `Carga percebida hoje: ${formatLoad(entry.perceivedLoad)}.`,
      ]
    : [
        "Sem ritual registrado hoje: use o ritual de 60s para atualizar a leitura.",
        "Último registro indica constância moderada.",
        "Contexto operacional segue estável sem sinais extremos.",
      ];

  const note = entry && yesterday
    ? `Comparação com ontem: clareza ${clarityDelta >= 0 ? "+" : ""}${clarityDelta}, carga ${loadDelta >= 0 ? "+" : ""}${loadDelta}.`
    : "Sem comparação com ontem por falta de histórico imediato.";

  return {
    dateISO,
    stateTag,
    headline: headlineMap[stateTag],
    bullets,
    deltas: { clarityDelta, loadDelta, note },
    direction,
    microAction,
    nodeSignals: nodeSummary ? mapNodeSignals(nodeSummary) : undefined,
  };
};

const getVariabilityTag = (entries: RitualEntryDTO[]): WeeklySummaryDTO["variabilityTag"] => {
  if (entries.length <= 2) return "BAIXA";
  const values = entries.map((entry) => entry.mentalLightness + entry.decisionClarity);
  const avg = values.reduce((sum, value) => sum + value, 0) / values.length;
  const variance =
    values.reduce((sum, value) => sum + (value - avg) ** 2, 0) / values.length;
  if (variance < 1.2) return "BAIXA";
  if (variance < 3) return "MODERADA";
  return "ALTA";
};

export const buildWeeklySummary = (weekLabel: string, weekEntries: RitualEntryDTO[]): WeeklySummaryDTO => {
  const ritualsDone = weekEntries.length;
  const variabilityTag = getVariabilityTag(weekEntries);
  const note =
    ritualsDone === 0
      ? "Padrão em formação: registre rituais para consolidar leitura."
      : ritualsDone < 4
        ? "Consistência parcial, mantendo base em formação."
        : "Consistência sólida com leitura mais confiável.";

  return {
    weekLabel,
    ritualsDone,
    ritualsTarget: 7,
    variabilityTag,
    note,
  };
};

export const buildWeeklySummaries = (dateISO: string, entries: RitualEntryDTO[], weeks = 4) => {
  const start = startOfWeek(parseISO(dateISO), { weekStartsOn: 1 });
  return Array.from({ length: weeks }, (_, index) => {
    const offset = weeks - 1 - index;
    const weekStart = subDays(start, offset * 7);
    const weekEnd = addDays(weekStart, 6);
    const weekLabel = `Semana ${index + 1}`;
    const weekEntries = entries.filter((entry) => {
      const date = parseISO(entry.dateISO);
      return date >= weekStart && date <= weekEnd;
    });
    return buildWeeklySummary(weekLabel, weekEntries);
  });
};

export const buildInsights = (entries: RitualEntryDTO[]) => {
  if (entries.length === 0) {
    return {
      weekly: "Padrão em formação: registre rituais para gerar leitura semanal.",
      consistency: "Padrão em formação: consistência ainda sem base suficiente.",
      variability: "Padrão em formação: variabilidade ainda não observável.",
    };
  }

  const last7 = entries.slice(-7);
  const ritualsDone = last7.length;
  const weekly =
    ritualsDone >= 5
      ? "Semana com presença alta no ritual, sustentando leitura contínua."
      : "Semana em construção: aumentar constância reforça a leitura.";

  const consistency =
    ritualsDone >= 6
      ? "Constância alta: rituais quase diários mantêm clareza operacional."
      : ritualsDone >= 3
        ? "Constância moderada: pequenas lacunas reduzem precisão."
        : "Constância baixa: priorize micro-ritual diário.";

  const variabilityTag = getVariabilityTag(last7);
  const variability =
    variabilityTag === "BAIXA"
      ? "Variabilidade baixa: padrões estáveis no curto prazo."
      : variabilityTag === "MODERADA"
        ? "Variabilidade moderada: ajustes pontuais podem ajudar."
        : "Variabilidade alta: sinais oscilam mais que o usual.";

  return { weekly, consistency, variability };
};

export const getRecentDays = (dateISO: string, days = 7) => {
  return Array.from({ length: days }, (_, index) =>
    format(subDays(parseISO(dateISO), days - 1 - index), "yyyy-MM-dd"),
  );
};
