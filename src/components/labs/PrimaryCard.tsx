import { ArrowRight } from "lucide-react";
import type { DailyState } from "@/lib/labs-dtos";

type PrimaryCardProps = {
  state: DailyState;
  onRitual: () => void;
};

export function PrimaryCard({ state, onRitual }: PrimaryCardProps) {
  return (
    <div className="vyr-card-graphite p-5 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-vyr-white">
        Fluidez hoje: {state.estado}
      </h2>
      <p className="text-sm sm:text-base text-vyr-gray-400 mt-2">
        Direção do dia: {state.direcao}
      </p>
      <p className="text-xs text-vyr-gray-500 mt-2">Baseado nos seus últimos registros.</p>
      <button
        type="button"
        onClick={onRitual}
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-vyr-black bg-vyr-white hover:bg-vyr-gray-100 px-4 py-2 rounded-sm"
      >
        Fazer alinhamento (≤60s)
        <ArrowRight className="w-4 h-4" />
      </button>
      <p className="text-xs text-vyr-gray-500 mt-3">Estado → Direção → Ação leve.</p>
    </div>
  );
}
