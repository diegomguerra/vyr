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
  day: <Sun className="w-5 h-5 text-amber-400" />,
  afternoon: <Sunset className="w-5 h-5 text-orange-400" />,
  night: <Moon className="w-5 h-5 text-indigo-400" />,
};

export function TodayCard({ period, done, subtitle, onOpenCheckin }: TodayCardProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 sm:p-5">
      <div className="flex items-center gap-2.5 mb-1.5 sm:mb-2">
        {periodIcons[period]}
        <h3 className="font-semibold text-sm sm:text-base text-white">{periodLabel(period)}</h3>
      </div>
      <p className="text-[10px] sm:text-xs text-slate-400 mb-2 sm:mb-3">{subtitle}</p>
      <div className="flex items-center justify-between gap-2">
        <span className={`text-xs sm:text-sm ${done ? "text-emerald-400" : "text-slate-500"}`}>
          {done ? "✓ Feito" : "Pendente"}
        </span>
        <button 
          className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-violet-500/20 text-violet-300 border border-violet-500/30 hover:bg-violet-500/30 transition-all" 
          onClick={onOpenCheckin}
        >
          {done ? "Editar" : "Registrar"}
        </button>
      </div>
    </div>
  );
}
