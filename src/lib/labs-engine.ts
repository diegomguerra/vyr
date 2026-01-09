import type { DailyGuidanceDTO, DayDirection, DailyState, FluidezState, InsightDTO, WeeklySummary } from "./labs-dtos";

type RitualInput = {
  mentalEase: "baixa" | "media" | "alta";
  decisionClarity: "baixa" | "media" | "alta";
  dayLoad: "baixa" | "media" | "alta";
  nodeEnabled: boolean;
};

type RitualEntry = {
  dateISO: string;
  guidance: DailyGuidanceDTO;
  checklistComplete: boolean;
};

const fluidezByInput = (input: RitualInput): FluidezState => {
  if (input.mentalEase === "baixa" || input.decisionClarity === "baixa") return "BAIXA";
  if (input.mentalEase === "alta" && input.decisionClarity === "alta" && input.dayLoad === "baixa") {
    return "ALTA";
  }
  return "ESTAVEL";
};

const directionByInput = (input: RitualInput): DayDirection => {
  if (input.dayLoad === "alta" && input.mentalEase === "baixa") {
    return "RECUPERAR";
  }
  if (input.dayLoad === "alta") {
    return "PROTEGER";
  }
  if (input.mentalEase === "baixa" || input.decisionClarity === "baixa") {
    return "SIMPLIFICAR";
  }
  return "SUSTENTAR";
};

const actionByDirection: Record<DayDirection, string> = {
  SUSTENTAR: "Feche um pequeno ciclo agora (20–60s).",
  SIMPLIFICAR: "Reduza para uma prioridade e avance só nela.",
  PROTEGER: "Crie um bloco curto sem interrupções.",
  RECUPERAR: "Respire em 4 ciclos e recupere espaço mental.",
};

const confirmationByInput = (input: RitualInput, direction: DayDirection): string => {
  const base =
    direction === "RECUPERAR"
      ? "Vamos recuperar leveza antes de avançar."
      : direction === "PROTEGER"
        ? "Hoje vale proteger espaço e reduzir pressão."
        : direction === "SIMPLIFICAR"
          ? "Hoje vale simplificar para manter fluidez."
          : "O ritmo parece estável. Sustente com constância.";

  if (!input.nodeEnabled) return base;
  return `${base} Sinais do sistema seguem compatíveis com sua leitura.`;
};

export const buildDailyGuidance = (input: RitualInput): DailyGuidanceDTO => {
  const fluidez = fluidezByInput(input);
  const direction = directionByInput(input);
  return {
    fluidez,
    direction,
    action: actionByDirection[direction],
    confirmation: confirmationByInput(input, direction),
  };
};

const fluidezScore: Record<FluidezState, number> = { BAIXA: 0, ESTAVEL: 1, ALTA: 2 };

export const buildWeeklyInsight = (rituals: RitualEntry[]): InsightDTO => {
  const recent = rituals.slice(0, 7);
  if (recent.length === 0) {
    return {
      title: "Ainda sem padrão",
      body: "Quando houver mais registros, o sistema resume seus padrões semanais.",
    };
  }

  const completionRate = recent.filter((entry) => entry.checklistComplete).length / recent.length;
  const avgScore =
    recent.reduce((acc, entry) => acc + fluidezScore[entry.guidance.fluidez], 0) / recent.length;

  if (completionRate >= 0.7 && avgScore >= 1.3) {
    return {
      title: "Ritmo consistente",
      body: "A constância está ajudando a manter a fluidez estável.",
    };
  }

  if (completionRate < 0.4) {
    return {
      title: "Espaço para retomar",
      body: "Retomar alinhamentos curtos pode reduzir esforço invisível.",
    };
  }

  return {
    title: "Padrões emergindo",
    body: "Os registros já mostram um ritmo mais claro nos próximos dias.",
  };
};

export const fluidezToScore = (fluidez: FluidezState) => fluidezScore[fluidez];

export const buildDailyState = (rituals: RitualEntry[]): DailyState => {
  if (rituals.length === 0) {
    return {
      estado: "Estável",
      direcao: "Sustentar",
    };
  }

  const latest = rituals[0];
  const estado =
    latest.guidance.fluidez === "ALTA"
      ? "Fluido"
      : latest.guidance.fluidez === "BAIXA"
        ? "Em recuperação"
        : "Estável";

  const direcao =
    latest.guidance.direction === "SUSTENTAR"
      ? "Sustentar"
      : latest.guidance.direction === "PROTEGER"
        ? "Consolidar"
        : "Reduzir carga";

  return { estado, direcao };
};

const summariesOrderLabel = (index: number) => index + 1;

const getWeekKey = (dateISO: string) => {
  const date = new Date(dateISO);
  const day = date.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  const monday = new Date(date);
  monday.setDate(date.getDate() + diff);
  const year = monday.getFullYear();
  const weekStart = monday.toISOString().slice(0, 10);
  return `${year}-${weekStart}`;
};

export const buildWeeklySummaries = (rituals: RitualEntry[]): WeeklySummary[] => {
  const grouped = new Map<string, RitualEntry[]>();
  rituals.forEach((entry) => {
    const key = getWeekKey(entry.dateISO);
    const list = grouped.get(key) ?? [];
    list.push(entry);
    grouped.set(key, list);
  });

  return Array.from(grouped.entries())
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .slice(0, 6)
    .map(([key, entries], idx) => {
      const ritualsDone = entries.length;
      const ritualsTotal = 7;
      const variabilityScore =
        entries.reduce((sum, entry) => sum + fluidezToScore(entry.guidance.fluidez), 0) / entries.length;
      const variabilityLabel =
        variabilityScore >= 1.5 ? "Baixa" : variabilityScore >= 0.9 ? "Moderada" : "Alta";
      return {
        weekLabel: `Semana ${summariesOrderLabel(idx)}`,
        ritualsDone,
        ritualsTotal,
        variabilityLabel,
      };
    });
};

export const buildConsistencyInsight = (rituals: RitualEntry[]): string => {
  const count = rituals.length;
  if (count === 0) return "Sem registros ainda. O sistema aprende com repetição.";
  if (count < 3) return "Constância inicial. Mais alguns dias ajudam a definir padrão.";
  if (count < 7) return "Ritmo em construção. Continue sustentando os registros.";
  return "Constância sólida. O padrão começa a ficar claro.";
};

export const buildVariationInsight = (rituals: RitualEntry[]): string => {
  if (rituals.length < 2) return "Variabilidade baixa por falta de registros.";
  const scores = rituals.slice(0, 7).map((entry) => fluidezToScore(entry.guidance.fluidez));
  const mean = scores.reduce((sum, value) => sum + value, 0) / scores.length;
  const variance = scores.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / scores.length;
  const stdDev = Math.sqrt(variance);
  if (stdDev < 0.4) return "Baixa variabilidade nos últimos 7 dias.";
  if (stdDev < 0.8) return "Variabilidade moderada nos últimos 7 dias.";
  return "Alta variabilidade nos últimos 7 dias.";
};
