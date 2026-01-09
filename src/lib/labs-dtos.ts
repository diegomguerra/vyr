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
