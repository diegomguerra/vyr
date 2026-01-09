import { ArrowRight } from "lucide-react";
import type { DailyGuidanceDTO, FluidezState, DayDirection } from "@/lib/labs-dtos";

const fluidezLabel: Record<FluidezState, string> = {
  BAIXA: "Baixa",
  ESTAVEL: "Estável",
  ALTA: "Alta",
};

const directionLabel: Record<DayDirection, string> = {
  SUSTENTAR: "Sustentar",
  SIMPLIFICAR: "Simplificar",
  PROTEGER: "Proteger",
  RECUPERAR: "Recuperar",
};

type PrimaryCardProps = {
  guidance: DailyGuidanceDTO;
  onRitual: () => void;
};

export function PrimaryCard({ guidance, onRitual }: PrimaryCardProps) {
  return (
    <div className="vyr-card-graphite p-5 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-vyr-white">
        Fluidez hoje: {fluidezLabel[guidance.fluidez]}
      </h2>
      <p className="text-sm sm:text-base text-vyr-gray-400 mt-2">
        Direção do dia: {directionLabel[guidance.direction]}
      </p>
      <button
        type="button"
        onClick={onRitual}
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-vyr-black bg-vyr-white hover:bg-vyr-gray-100 px-4 py-2 rounded-sm"
      >
        Fazer meu alinhamento (60s)
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
