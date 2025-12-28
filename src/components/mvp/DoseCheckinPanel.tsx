import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import type { DoseType, DoseCheckin, Confounders } from "@/lib/mvp-types";
import { doseLabel, doseFields, fieldLabel } from "@/lib/mvp-types";
import { StatusPill } from "./StatusPill";
import { ConfoundersToggle } from "./ConfoundersToggle";
import { Check, X } from "lucide-react";

interface DoseCheckinPanelProps {
  dose: DoseType;
  dateISO: string;
  onSave: (checkin: DoseCheckin) => void;
  onClose: () => void;
  existingCheckin?: DoseCheckin;
}

const defaultConfounders: Confounders = {
  caffeine: false,
  workout: false,
  alcohol: false,
  travel: false,
  lowEnergy: false,
  unusualStress: false,
};

export function DoseCheckinPanel({ dose, dateISO, onSave, onClose, existingCheckin }: DoseCheckinPanelProps) {
  const fields = doseFields(dose);
  const [taken, setTaken] = useState(existingCheckin?.taken ?? true);
  const [vals, setVals] = useState<Record<string, number>>(() => ({
    focus: existingCheckin?.focus ?? 5,
    clarity: existingCheckin?.clarity ?? 5,
    energy: existingCheckin?.energy ?? 5,
    resilience: existingCheckin?.resilience ?? 5,
    windDown: existingCheckin?.windDown ?? 5,
    sleepQuality: existingCheckin?.sleepQuality ?? 5,
  }));
  const [confounders, setConfounders] = useState<Confounders>(existingCheckin?.confounders ?? defaultConfounders);

  const handleSave = () => {
    const checkin: DoseCheckin = {
      dateISO,
      dose,
      taken,
      confounders,
    };
    if (taken) {
      fields.forEach((f) => {
        (checkin as any)[f] = vals[f];
      });
    }
    onSave(checkin);
    onClose();
  };

  return (
    <div className="bg-vyr-gray-900/80 backdrop-blur-xl border border-vyr-gray-500/30 rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <div className="flex items-center gap-3">
          <h3 className="text-lg sm:text-xl font-semibold text-vyr-white font-mono">{doseLabel(dose)}</h3>
          <StatusPill>{dateISO}</StatusPill>
        </div>
        <button 
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-vyr-gray-800/50 transition-colors"
        >
          <X className="w-5 h-5 text-vyr-gray-400" />
        </button>
      </div>

      {/* Tomou a dose? */}
      <div className="mb-5 sm:mb-6">
        <p className="text-xs sm:text-sm text-vyr-gray-400 mb-3">Tomou a dose hoje?</p>
        <div className="flex gap-3">
          <button
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium font-mono transition-all border
              ${taken 
                ? "bg-vyr-accent/20 text-vyr-accent border-vyr-accent/40" 
                : "bg-vyr-gray-800/30 text-vyr-gray-400 border-vyr-gray-700/30 hover:text-vyr-white"}`}
            onClick={() => setTaken(true)}
          >
            <Check className="w-4 h-4" />
            Sim
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium font-mono transition-all border
              ${!taken 
                ? "bg-vyr-gray-600/20 text-vyr-gray-200 border-vyr-gray-500/40" 
                : "bg-vyr-gray-800/30 text-vyr-gray-400 border-vyr-gray-700/30 hover:text-vyr-white"}`}
            onClick={() => setTaken(false)}
          >
            <X className="w-4 h-4" />
            Não
          </button>
        </div>
      </div>

      {/* Métricas de percepção - só mostra se tomou */}
      {taken && (
        <div className="space-y-4 sm:space-y-5 mb-5 sm:mb-6">
          <p className="text-xs sm:text-sm text-vyr-gray-400">Como você se sentiu?</p>
          {fields.map((f) => (
            <div key={f}>
              <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5 sm:mb-2">
                <span className="text-vyr-gray-300">{fieldLabel(f)}</span>
                <span className="text-vyr-white font-medium font-mono">{vals[f]}</span>
              </div>
              <Slider
                value={[vals[f]]}
                onValueChange={([v]) => setVals((p) => ({ ...p, [f]: v }))}
                min={0}
                max={10}
                step={1}
                className="[&_[role=slider]]:bg-vyr-gray-100 [&_[role=slider]]:border-vyr-gray-400"
              />
            </div>
          ))}
        </div>
      )}

      {/* Contexto */}
      <div className="mb-5 sm:mb-6">
        <p className="text-[10px] sm:text-xs text-vyr-gray-400 mb-2">Fatores do dia</p>
        <ConfoundersToggle value={confounders} onChange={setConfounders} />
      </div>

      <button 
        className="w-full px-4 py-3 rounded-xl text-sm font-medium bg-vyr-gray-100 text-vyr-black hover:bg-vyr-white transition-all font-mono" 
        onClick={handleSave}
      >
        Salvar registro
      </button>
    </div>
  );
}
