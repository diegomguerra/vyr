import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import type { Period, Checkin, Confounders } from "@/lib/mvp-types";
import { periodLabel, checkinFields, fieldLabel } from "@/lib/mvp-types";
import { StatusPill } from "./StatusPill";
import { ConfoundersToggle } from "./ConfoundersToggle";

interface CheckinPanelProps {
  period: Period;
  dateISO: string;
  onSave: (checkin: Checkin) => void;
}

const defaultConfounders: Confounders = {
  caffeine: false,
  workout: false,
  alcohol: false,
  travel: false,
  lowEnergy: false,
  unusualStress: false,
};

export function CheckinPanel({ period, dateISO, onSave }: CheckinPanelProps) {
  const fields = checkinFields(period);
  const [vals, setVals] = useState<Record<string, number>>(() => ({
    focus: 5,
    clarity: 5,
    energy: 5,
    resilience: 5,
    windDown: 5,
    sleepQuality: 5,
  }));
  const [confounders, setConfounders] = useState<Confounders>(defaultConfounders);

  const handleSave = () => {
    const checkin: Checkin = {
      dateISO,
      period,
      dose: period === "day" ? "boot" : period === "afternoon" ? "hold" : "clear",
      taken: true,
      confounders,
    };
    fields.forEach((f) => {
      (checkin as any)[f] = vals[f];
    });
    onSave(checkin);
  };

  return (
    <div className="bg-vyr-gray-900/50 backdrop-blur-xl border border-vyr-gray-500/20 rounded-2xl p-4 sm:p-5">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-vyr-white font-mono">{periodLabel(period)}</h3>
        <StatusPill>{dateISO}</StatusPill>
      </div>

      <div className="space-y-4 sm:space-y-5">
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

      <div className="mt-4 sm:mt-5">
        <p className="text-[10px] sm:text-xs text-vyr-gray-400 mb-2">Fatores do dia</p>
        <ConfoundersToggle value={confounders} onChange={setConfounders} />
      </div>

      <button 
        className="w-full mt-4 sm:mt-5 px-4 py-3 rounded-xl text-sm font-medium bg-vyr-gray-100 text-vyr-black hover:bg-vyr-white transition-all font-mono" 
        onClick={handleSave}
      >
        Salvar check-in
      </button>
    </div>
  );
}
