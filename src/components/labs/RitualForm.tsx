import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DailyGuidanceDTO, DayDirection } from "@/lib/labs-dtos";
import type { RitualInputs } from "@/lib/labs-types";

const directionLabel: Record<DayDirection, string> = {
  SUSTENTAR: "Sustentar",
  SIMPLIFICAR: "Simplificar",
  PROTEGER: "Proteger",
  RECUPERAR: "Recuperar",
};

type RitualFormProps = {
  inputs: RitualInputs;
  guidance: DailyGuidanceDTO;
  onChange: (next: RitualInputs) => void;
  onSubmit: () => void;
};

export function RitualForm({ inputs, guidance, onChange, onSubmit }: RitualFormProps) {
  const renderOptions = (
    label: string,
    value: RitualInputs[keyof RitualInputs],
    options: Array<{ value: RitualInputs[keyof RitualInputs]; label: string }>,
    onSelect: (value: RitualInputs[keyof RitualInputs]) => void
  ) => (
    <div>
      <p className="text-xs font-mono text-vyr-gray-400 mb-2">{label}</p>
      <div className="grid grid-cols-3 gap-2">
        {options.map((opt) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={cn(
              "px-3 py-2 text-xs sm:text-sm rounded-sm border font-medium",
              value === opt.value
                ? "border-vyr-accent/40 bg-vyr-accent/10 text-vyr-white"
                : "border-vyr-gray-700/60 text-vyr-gray-400 hover:text-vyr-white hover:border-vyr-gray-500"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="vyr-card-graphite p-5 sm:p-6 space-y-5">
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-vyr-white">Ritual (≤60s)</h2>
        <p className="text-xs sm:text-sm text-vyr-gray-400 mt-1">
          Check-in rápido para reduzir esforço invisível.
        </p>
      </div>

      <div className="space-y-5">
        {renderOptions(
          "Leveza mental",
          inputs.mentalEase,
          [
            { value: "baixa", label: "Baixa" },
            { value: "media", label: "Média" },
            { value: "alta", label: "Alta" },
          ],
          (value) => onChange({ ...inputs, mentalEase: value as RitualInputs["mentalEase"] })
        )}
        {renderOptions(
          "Clareza para decidir",
          inputs.decisionClarity,
          [
            { value: "baixa", label: "Baixa" },
            { value: "media", label: "Média" },
            { value: "alta", label: "Alta" },
          ],
          (value) => onChange({ ...inputs, decisionClarity: value as RitualInputs["decisionClarity"] })
        )}
        {renderOptions(
          "Carga do dia",
          inputs.dayLoad,
          [
            { value: "baixa", label: "Baixa" },
            { value: "media", label: "Média" },
            { value: "alta", label: "Alta" },
          ],
          (value) => onChange({ ...inputs, dayLoad: value as RitualInputs["dayLoad"] })
        )}
      </div>

      <div className="rounded-sm border border-vyr-gray-700/60 p-4 bg-vyr-gray-900/40">
        <p className="text-xs font-mono text-vyr-gray-500">Direção única</p>
        <p className="text-lg font-semibold text-vyr-white mt-1">{directionLabel[guidance.direction]}</p>
        <p className="text-sm text-vyr-gray-400 mt-2">Ação leve: {guidance.action}</p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-vyr-gray-500 font-mono">O sistema segue aprendendo com você.</p>
        <button
          type="button"
          onClick={onSubmit}
          className="inline-flex items-center gap-2 text-sm font-medium text-vyr-black bg-vyr-white hover:bg-vyr-gray-100 px-4 py-2 rounded-sm"
        >
          Concluir e registrar
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
