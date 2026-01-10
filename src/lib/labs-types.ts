export type RitualEntryDTO = {
  dateISO: string;
  mentalLightness: 1 | 2 | 3 | 4 | 5;
  decisionClarity: 1 | 2 | 3 | 4 | 5;
  perceivedLoad: "LOW" | "MEDIUM" | "HIGH";
  completedAtISO: string;
};

export type NodeDailySummaryDTO = {
  dateISO: string;
  sleepQualityTag?: "SHORT" | "OK" | "GOOD";
  hrvTag?: "LOWER_THAN_BASELINE" | "IN_BASELINE" | "ABOVE_BASELINE";
  rhrTag?: "LOWER_THAN_BASELINE" | "IN_BASELINE" | "ABOVE_BASELINE";
  movementTag?: "LOW" | "MODERATE" | "HIGH";
  energyTag?: "LOW" | "OK" | "HIGH";
  vendor?: string;
  confidence?: number;
};

export type DayReadoutDTO = {
  dateISO: string;
  stateTag: "EM_RECUPERACAO" | "ESTAVEL" | "FLUIDA";
  headline: string;
  bullets: string[];
  deltas: { clarityDelta: -2 | -1 | 0 | 1 | 2; loadDelta: -2 | -1 | 0 | 1 | 2; note: string };
  direction: "SUSTENTAR" | "AJUSTAR_CARGA" | "RECALIBRAR";
  microAction: { title: string; steps: string[] };
  nodeSignals?: { label: string; value: string }[];
};

export type WeeklySummaryDTO = {
  weekLabel: string;
  ritualsDone: number;
  ritualsTarget: 7;
  variabilityTag: "BAIXA" | "MODERADA" | "ALTA";
  note: string;
};
