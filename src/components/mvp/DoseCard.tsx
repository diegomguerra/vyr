import { Zap, Shield, Moon } from "lucide-react";
import type { DoseType } from "@/lib/mvp-types";
import { doseLabel, doseDescription } from "@/lib/mvp-types";

interface DoseCardProps {
  dose: DoseType;
  done: boolean;
  onRegister: () => void;
}

const doseIcons: Record<DoseType, React.ReactNode> = {
  boot: <Zap className="w-5 h-5 text-vyr-accent vyr-icon-glow" />,
  hold: <Shield className="w-5 h-5 text-vyr-cyan vyr-icon-glow" />,
  clear: <Moon className="w-5 h-5 text-vyr-gray-100 vyr-icon-glow" />,
};

const doseColors: Record<DoseType, string> = {
  boot: "border-vyr-accent/30",
  hold: "border-vyr-cyan/30",
  clear: "border-vyr-gray-100/30",
};

export function DoseCard({ dose, done, onRegister }: DoseCardProps) {
  return (
    <div className={`vyr-card-glow p-4 sm:p-5 ${doseColors[dose]}`}>
      <div className="flex items-center gap-2.5 mb-1.5 sm:mb-2">
        {doseIcons[dose]}
        <h3 className="font-semibold text-sm sm:text-base text-vyr-white font-mono">{doseLabel(dose)}</h3>
      </div>
      <p className="text-[10px] sm:text-xs text-vyr-gray-400 mb-2 sm:mb-3">{doseDescription(dose)}</p>
      <div className="flex items-center justify-between gap-2">
        <span className={`text-xs sm:text-sm ${done ? "text-vyr-accent" : "text-vyr-gray-400"}`}>
          {done ? "✓ Registrado" : "Pendente"}
        </span>
        <button 
          className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-sm text-xs sm:text-sm font-medium border transition-all font-mono
            ${done 
              ? 'bg-vyr-gray-800/50 text-vyr-gray-300 border-vyr-gray-700/50 hover:bg-vyr-gray-700/50' 
              : 'vyr-btn-accent border-0'}`}
          onClick={onRegister}
        >
          {done ? "Editar" : "Registrar"}
        </button>
      </div>
    </div>
  );
}
