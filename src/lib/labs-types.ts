import type { DailyGuidanceDTO } from "./labs-dtos";

export type RitualInputs = {
  mentalEase: "baixa" | "media" | "alta";
  decisionClarity: "baixa" | "media" | "alta";
  dayLoad: "baixa" | "media" | "alta";
};

export type RitualChecklist = {
  tookSachet: boolean;
  didAction: boolean;
  registeredState: boolean;
};

export type RitualEntry = {
  id: string;
  dateISO: string;
  inputs: RitualInputs;
  guidance: DailyGuidanceDTO;
  checklist: RitualChecklist;
};
