import type { DailyGuidanceDTO, DayDirection, FluidezState, InsightDTO } from "./labs-dtos";

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
