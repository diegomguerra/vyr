// NZT MVP - Tipos para nova arquitetura

export type Plan = "basic" | "pro";
export type DoseType = "boot" | "hold" | "clear";
export type DataQuality = "missing" | "partial" | "good";

export type Confounders = {
  caffeine?: boolean;
  workout?: boolean;
  alcohol?: boolean;
  travel?: boolean;
  lowEnergy?: boolean;  // Renomeado de "sick" para algo mais neutro
  unusualStress?: boolean;
};

export type DoseCheckin = {
  dateISO: string;
  dose: DoseType;
  taken: boolean;
  timeOfDay?: string;
  // percepção específica de cada dose
  focus?: number;
  clarity?: number;
  energy?: number;
  resilience?: number;
  windDown?: number;
  sleepQuality?: number;
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
export function doseLabel(d: DoseType): string {
  if (d === "boot") return "BOOT";
  if (d === "hold") return "HOLD";
  return "CLEAR";
}

export function doseDescription(d: DoseType): string {
  if (d === "boot") return "Ativação matinal";
  if (d === "hold") return "Sustentação diurna";
  return "Recuperação noturna";
}

export function doseFields(d: DoseType): readonly string[] {
  if (d === "boot") return ["focus", "clarity", "energy"] as const;
  if (d === "hold") return ["energy", "resilience"] as const;
  return ["windDown", "sleepQuality"] as const;
}

export function fieldLabel(f: string): string {
  switch (f) {
    case "focus": return "Foco";
    case "clarity": return "Clareza";
    case "energy": return "Energia";
    case "resilience": return "Resiliência";
    case "windDown": return "Desaceleração mental";
    case "sleepQuality": return "Sono (percebido)";
    default: return f;
  }
}

// Legado - manter para compatibilidade
export type Period = "day" | "afternoon" | "night";
export type Checkin = DoseCheckin & { period?: Period };
export function periodLabel(p: Period): string {
  if (p === "day") return "Dia";
  if (p === "afternoon") return "Tarde";
  return "Noite";
}
export function checkinFields(p: Period): readonly string[] {
  if (p === "day") return ["focus", "clarity", "energy"] as const;
  if (p === "afternoon") return ["energy", "resilience"] as const;
  return ["windDown", "sleepQuality"] as const;
}
