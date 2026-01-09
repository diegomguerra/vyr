export type FluidezState = "REDUZIDA" | "ESTAVEL" | "ELEVADA";
export type DayDirection = "REDUZIR_CARGA" | "SUSTENTAR" | "AVANCAR_COM_LEVEZA";

export type DailyGuidanceDTO = {
  fluidez: FluidezState;
  direction: DayDirection;
  confirmation?: string;
};

export type ObservationDTO = {
  fluidezTrend: string;
  constancySummary: string;
  weekBars: Array<"alinhado" | "falta">;
  signals: string[];
  context?: string;
};
