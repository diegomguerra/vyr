export type FluidezState = "BAIXA" | "ESTAVEL" | "ALTA";
export type DayDirection = "SUSTENTAR" | "SIMPLIFICAR" | "PROTEGER" | "RECUPERAR";

export type DailyGuidanceDTO = {
  fluidez: FluidezState;
  direction: DayDirection;
  action: string;
  confirmation?: string;
};

export type InsightDTO = {
  title: string;
  body: string;
};

export type DailyState = {
  estado: "Estável" | "Em recuperação" | "Fluido";
  direcao: "Sustentar" | "Reduzir carga" | "Consolidar";
};

export type WeeklySummary = {
  weekLabel: string;
  ritualsDone: number;
  ritualsTotal: number;
  variabilityLabel: "Baixa" | "Moderada" | "Alta";
};
