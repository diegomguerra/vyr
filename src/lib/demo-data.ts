import { format, parseISO, startOfWeek, subDays } from "date-fns";
import type { RitualEntryDTO } from "./labs-types";

export type DailyState = {
  date: string;
  perceived_clarity: number;
  perceived_energy: number;
  mental_load: number;
  decision_confidence: number;
  end_of_day_fatigue: number;
  ritual_completed: boolean;
  system_state: "FLUIDA" | "ESTÁVEL" | "EM_RECUPERAÇÃO";
};

const clamp = (value: number) => Math.min(5, Math.max(1, value));

const hashSeed = (input: string) => {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 33 + input.charCodeAt(i)) % 997;
  }
  return hash / 997;
};

const buildDailyState = (dateISO: string, index: number): DailyState => {
  const phaseVariance = index < 15 ? 1.4 : index < 45 ? 1.0 : 0.6;
  const seed = hashSeed(dateISO);
  const noise = (seed - 0.5) * 2 * phaseVariance;

  const ritual_completed = seed > 0.3;

  const perceived_clarity = clamp(Math.round(3 + noise + (ritual_completed ? 1 : 0)));
  const perceived_energy = clamp(Math.round(3 + noise * 0.8 + (ritual_completed ? 1 : 0)));
  const mental_load = clamp(Math.round(3 - noise + (ritual_completed ? -1 : 1)));
  const decision_confidence = clamp(Math.round(3 + noise * 0.9 + (ritual_completed ? 1 : 0)));
  const end_of_day_fatigue = clamp(Math.round(3 - noise + (ritual_completed ? -1 : 1)));

  const system_state =
    perceived_clarity >= 4 && mental_load <= 2
      ? "FLUIDA"
      : end_of_day_fatigue >= 4 || mental_load >= 4
        ? "EM_RECUPERAÇÃO"
        : "ESTÁVEL";

  return {
    date: dateISO,
    perceived_clarity,
    perceived_energy,
    mental_load,
    decision_confidence,
    end_of_day_fatigue,
    ritual_completed,
    system_state,
  };
};

let cachedSeries: DailyState[] | null = null;

export const getDemoSeries = (): DailyState[] => {
  if (cachedSeries) return cachedSeries;
  const today = new Date();
  cachedSeries = Array.from({ length: 90 }, (_, index) => {
    const dateISO = format(subDays(today, 89 - index), "yyyy-MM-dd");
    return buildDailyState(dateISO, index);
  });
  return cachedSeries;
};

export const getDemoToday = (): DailyState => {
  const series = getDemoSeries();
  return series[series.length - 1];
};

export const getDemoRitualEntries = (): RitualEntryDTO[] => {
  return getDemoSeries()
    .filter((day) => day.ritual_completed)
    .map((day) => {
      const perceivedLoad =
        day.mental_load >= 4 ? "HIGH" : day.mental_load <= 2 ? "LOW" : "MEDIUM";
      return {
        dateISO: day.date,
        mentalLightness: day.perceived_energy as 1 | 2 | 3 | 4 | 5,
        decisionClarity: day.perceived_clarity as 1 | 2 | 3 | 4 | 5,
        perceivedLoad,
        completedAtISO: `${day.date}T20:00:00.000Z`,
      };
    });
};

export const getDemoInsights = () => {
  const series = getDemoSeries();
  const last7 = series.slice(-7);
  const last28 = series.slice(-28);
  const ritualsLast7 = last7.filter((day) => day.ritual_completed).length;
  const clarityUp = last7.slice(1).filter((day, index) => day.perceived_clarity >= last7[index].perceived_clarity).length;
  const fatigueAfterLoad = last7.filter((day) => day.mental_load >= 4).length > 0;

  return {
    weekly:
      ritualsLast7 >= 5
        ? "Quando você mantém constância por 3 dias, sua clareza tende a subir."
        : "Constância parcial ainda limita a leitura semanal.",
    consistency:
      clarityUp >= 4
        ? "Sequências curtas de ritual mantêm a clareza estável."
        : "Sequências irregulares reduzem estabilidade na clareza.",
    variability:
      last28.filter((day) => day.mental_load <= 2).length >= 14
        ? "Sua variabilidade diminuiu nas últimas 4 semanas."
        : fatigueAfterLoad
          ? "Dias com maior carga mental antecedem fadiga no fim do dia."
          : "Variabilidade moderada, com sinais de estabilização.",
  };
};

export type DemoWeeklyMetric = {
  weekLabel: string;
  clarityAvg: number;
  loadAvg: number;
  variability: number;
};

export const getDemoWeeklyMetrics = (): DemoWeeklyMetric[] => {
  const series = getDemoSeries();
  const start = startOfWeek(parseISO(series[0].date), { weekStartsOn: 1 });
  const end = startOfWeek(parseISO(series[series.length - 1].date), { weekStartsOn: 1 });
  const weeks: DemoWeeklyMetric[] = [];

  let current = start;
  let index = 1;
  while (current <= end) {
    const next = new Date(current);
    next.setDate(current.getDate() + 7);
    const weekEntries = series.filter((day) => {
      const date = parseISO(day.date);
      return date >= current && date < next;
    });
    if (weekEntries.length > 0) {
      const clarityAvg =
        weekEntries.reduce((sum, day) => sum + day.perceived_clarity, 0) / weekEntries.length;
      const loadAvg =
        weekEntries.reduce((sum, day) => sum + day.mental_load, 0) / weekEntries.length;
      const variance =
        weekEntries.reduce((sum, day) => sum + (day.perceived_clarity - clarityAvg) ** 2, 0) /
        weekEntries.length;
      weeks.push({
        weekLabel: `Semana ${index}`,
        clarityAvg: Number(clarityAvg.toFixed(1)),
        loadAvg: Number(loadAvg.toFixed(1)),
        variability: Number(Math.min(5, Math.max(1, variance)).toFixed(1)),
      });
      index += 1;
    }
    current = next;
  }

  return weeks.slice(-13);
};
