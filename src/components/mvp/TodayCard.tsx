import { Sun, Sunset, Moon } from "lucide-react";
import type { Period } from "@/lib/mvp-types";
import { periodLabel } from "@/lib/mvp-types";

interface TodayCardProps {
  period: Period;
  done: boolean;
  subtitle: string;
  onOpenCheckin: () => void;
}

const periodIcons: Record<Period, React.ReactNode> = {
  day: <Sun className="w-5 h-5 text-vyr-gray-100 vyr-icon-glow" />,
  afternoon: <Sunset className="w-5 h-5 text-vyr-accent vyr-icon-glow" />,
  night: <Moon className="w-5 h-5 text-vyr-cyan vyr-icon-glow" />,
};

export function TodayCard({ period, done, subtitle, onOpenCheckin }: TodayCardProps) {
  return (
    <div className="vyr-card-glow p-4 sm:p-5">
      <div className="flex items-center gap-2.5 mb-1.5 sm:mb-2">
        {periodIcons[period]}
        <h3 className="font-semibold text-sm sm:text-base text-vyr-white font-mono">{periodLabel(period)}</h3>
      </div>
      <p className="text-[10px] sm:text-xs text-vyr-gray-500 mb-2 sm:mb-3">{subtitle}</p>
      <div className="flex items-center justify-between gap-2">
        <span className={`text-xs sm:text-sm ${done ? "text-vyr-accent" : "text-vyr-gray-500"}`}>
          {done ? "✓ Feito" : "Pendente"}
        </span>
        <button 
          className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-sm text-xs sm:text-sm font-medium border transition-all font-mono
            ${done 
              ? 'bg-vyr-gray-800/50 text-vyr-gray-300 border-vyr-gray-700/50 hover:bg-vyr-gray-700/50' 
              : 'vyr-btn-accent border-0'}`}
          onClick={onOpenCheckin}
        >
          {done ? "Editar" : "Registrar"}
        </button>
      </div>
    </div>
  );
}
