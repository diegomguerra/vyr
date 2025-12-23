import type { Period } from "@/lib/mvp-types";
import { periodLabel } from "@/lib/mvp-types";

interface TodayCardProps {
  period: Period;
  done: boolean;
  subtitle: string;
  onOpenCheckin: () => void;
}

const periodIcons: Record<Period, string> = {
  day: "☀️",
  afternoon: "🌅",
  night: "🌙",
};

export function TodayCard({ period, done, subtitle, onOpenCheckin }: TodayCardProps) {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{periodIcons[period]}</span>
        <h3 className="font-semibold">{periodLabel(period)}</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-3">{subtitle}</p>
      <div className="flex items-center justify-between">
        <span className={`text-sm ${done ? "text-secondary" : "text-muted-foreground"}`}>
          {done ? "✓ Concluído" : "Pendente"}
        </span>
        <button className="nzt-btn text-sm" onClick={onOpenCheckin}>
          {done ? "Editar" : "Registrar"}
        </button>
      </div>
    </div>
  );
}
