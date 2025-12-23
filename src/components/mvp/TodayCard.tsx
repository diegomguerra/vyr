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
    <div className="glass-card p-3 sm:p-5">
      <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
        <span className="text-lg sm:text-xl">{periodIcons[period]}</span>
        <h3 className="font-semibold text-sm sm:text-base">{periodLabel(period)}</h3>
      </div>
      <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">{subtitle}</p>
      <div className="flex items-center justify-between gap-2">
        <span className={`text-xs sm:text-sm ${done ? "text-secondary" : "text-muted-foreground"}`}>
          {done ? "✓ Feito" : "Pendente"}
        </span>
        <button className="nzt-btn text-xs sm:text-sm px-2.5 py-1.5 sm:px-4 sm:py-3" onClick={onOpenCheckin}>
          {done ? "Editar" : "Registrar"}
        </button>
      </div>
    </div>
  );
}
