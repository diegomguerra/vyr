// NZT MVP - Tipos para nova arquitetura

export type Plan = "basic" | "pro";
export type Period = "day" | "afternoon" | "night";
export type DataQuality = "missing" | "partial" | "good";

export type Confounders = {
  caffeine?: boolean;
  workout?: boolean;
  alcohol?: boolean;
  travel?: boolean;
  sick?: boolean;
  unusualStress?: boolean;
};

export type Checkin = {
  dateISO: string;
  period: Period;
  // percepção
  focus?: number;
  clarity?: number;
  energy?: number;
  resilience?: number;
  perceivedStress?: number;
  windDown?: number;
  sleepQuality?: number;
  wakeQuality?: number;
  // contexto
  confounders: Confounders;
};

export type Metric = {
  key: string;
  value: number;
  unit?: string;
  confidence?: number; // 0..1 if provided by SDK
};

export type RingDaily = {
  dateISO: string;
  // índices exportáveis confirmados
  healthIndex?: number;
  vitalityIndex?: number;
  balanceIndex?: number;
  // métricas brutas (schema variável)
  metrics?: Metric[];
  // qualidade do dia (calculada por você ou vinda do SDK)
  dataQuality: DataQuality;
};

// Helpers
export function periodLabel(p: Period): string {
  if (p === "day") return "Dia";
  if (p === "afternoon") return "Tarde";
  return "Noite";
}

export function checkinFields(p: Period): readonly string[] {
  if (p === "day") return ["focus", "clarity", "energy"] as const;
  if (p === "afternoon") return ["energy", "resilience", "perceivedStress"] as const;
  return ["windDown", "sleepQuality", "wakeQuality"] as const;
}

export function fieldLabel(f: string): string {
  switch (f) {
    case "focus": return "Foco";
    case "clarity": return "Clareza";
    case "energy": return "Energia";
    case "resilience": return "Resiliência";
    case "perceivedStress": return "Estresse percebido";
    case "windDown": return "Desaceleração mental";
    case "sleepQuality": return "Sono (percebido)";
    case "wakeQuality": return "Despertar (percebido)";
    default: return f;
  }
}
