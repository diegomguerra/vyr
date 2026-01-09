import type { DailyGuidanceDTO, DayDirection, FluidezState, ObservationDTO } from "./labs-dtos";

type RitualInput = {
  mentalEnergy: "baixa" | "media" | "alta";
  decisionFeel: "pesada" | "neutra" | "clara";
  nodeEnabled: boolean;
};

type RitualEntry = {
  dateISO: string;
  guidance: DailyGuidanceDTO;
};

const fluidezByInput = (input: RitualInput): FluidezState => {
  if (input.mentalEnergy === "baixa" || input.decisionFeel === "pesada") {
    return "REDUZIDA";
  }
  if (input.mentalEnergy === "alta" && input.decisionFeel === "clara") {
    return "ELEVADA";
  }
  return "ESTAVEL";
};

const directionByInput = (input: RitualInput): DayDirection => {
  if (input.mentalEnergy === "baixa" || input.decisionFeel === "pesada") {
    return "REDUZIR_CARGA";
  }
  if (input.mentalEnergy === "alta" && input.decisionFeel === "clara") {
    return "AVANCAR_COM_LEVEZA";
  }
  return "SUSTENTAR";
};

const confirmationByInput = (input: RitualInput, direction: DayDirection): string => {
  const base =
    direction === "REDUZIR_CARGA"
      ? "Você já percebe o peso. Vamos reduzir e proteger o foco."
      : direction === "AVANCAR_COM_LEVEZA"
        ? "A percepção está favorável. Avance com leveza e margem."
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
    confirmation: confirmationByInput(input, direction),
  };
};

const fluidezScore: Record<FluidezState, number> = {
  REDUZIDA: 0,
  ESTAVEL: 1,
  ELEVADA: 2,
};

export const buildObservationDTO = (rituals: RitualEntry[]): ObservationDTO => {
  const recent = [...rituals].slice(0, 10);
  const avg =
    recent.reduce((acc, entry) => acc + fluidezScore[entry.guidance.fluidez], 0) / (recent.length || 1);
  const fluidezTrend =
    avg >= 1.5
      ? "Tendência mais leve nos últimos dias."
      : avg <= 0.5
        ? "Tendência mais densa nos últimos dias."
        : "Tendência estável, sem mudanças bruscas.";

  const now = new Date();
  const weekBars = Array.from({ length: 7 }).map((_, idx) => {
    const date = new Date(now);
    date.setDate(now.getDate() - (6 - idx));
    const dateISO = date.toISOString().slice(0, 10);
    return rituals.some((r) => r.dateISO === dateISO) ? "alinhado" : "falta";
  });

  const alignedCount = weekBars.filter((bar) => bar === "alinhado").length;
  const constancySummary =
    alignedCount >= 5
      ? "Constância sólida. Ritmo consistente."
      : alignedCount >= 3
        ? "Constância moderada. Espaços para sustentar."
        : "Constância baixa. Retomar alinhamentos curtos ajuda.";

  const directionCounts = rituals.reduce<Record<DayDirection, number>>(
    (acc, entry) => {
      acc[entry.guidance.direction] += 1;
      return acc;
    },
    {
      REDUZIR_CARGA: 0,
      SUSTENTAR: 0,
      AVANCAR_COM_LEVEZA: 0,
    }
  );

  const topDirection = Object.entries(directionCounts).sort((a, b) => b[1] - a[1])[0]?.[0] as
    | DayDirection
    | undefined;

  const signals = [
    topDirection === "REDUZIR_CARGA"
      ? "Mais carga observada nos últimos alinhamentos."
      : topDirection === "AVANCAR_COM_LEVEZA"
        ? "Sinais compatíveis com avanço leve."
        : "Sinais compatíveis com sustentação.",
    alignedCount >= 4 ? "Ritmo com constância percebida." : "Constância oscilando.",
  ];

  const context = rituals.length >= 4 ? "Mais movimento percebido em dias de alinhamento." : undefined;

  return {
    fluidezTrend,
    constancySummary,
    weekBars,
    signals,
    context,
  };
};
