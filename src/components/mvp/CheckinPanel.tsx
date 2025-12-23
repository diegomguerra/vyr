import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { StatusPill } from "./StatusPill";
import { ConfoundersToggle } from "./ConfoundersToggle";
import type { Period, Checkin, Confounders } from "@/lib/mvp-types";
import { periodLabel, checkinFields, fieldLabel } from "@/lib/mvp-types";

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
  sick: false,
  unusualStress: false,
};

export function CheckinPanel({ period, dateISO, onSave }: CheckinPanelProps) {
  const fields = checkinFields(period);
  const [vals, setVals] = useState<Record<string, number>>(() => ({
    focus: 5,
    clarity: 5,
    energy: 5,
    resilience: 5,
    perceivedStress: 5,
    windDown: 5,
    sleepQuality: 5,
    wakeQuality: 5,
  }));
  const [confounders, setConfounders] = useState<Confounders>(defaultConfounders);

  const handleSave = () => {
    const checkin: Checkin = {
      dateISO,
      period,
      confounders,
    };
    fields.forEach((f) => {
      (checkin as any)[f] = vals[f];
    });
    onSave(checkin);
  };

  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{periodLabel(period)}</h3>
        <StatusPill>{dateISO}</StatusPill>
      </div>

      <div className="space-y-5">
        {fields.map((f) => (
          <div key={f}>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">{fieldLabel(f)}</span>
              <span className="text-foreground font-medium">{vals[f]}</span>
            </div>
            <Slider
              value={[vals[f]]}
              onValueChange={([v]) => setVals((p) => ({ ...p, [f]: v }))}
              min={0}
              max={10}
              step={1}
            />
          </div>
        ))}
      </div>

      <div className="mt-5">
        <p className="text-xs text-muted-foreground mb-2">Contexto do dia</p>
        <ConfoundersToggle value={confounders} onChange={setConfounders} />
      </div>

      <button className="nzt-btn-primary w-full mt-5" onClick={handleSave}>
        Salvar check-in
      </button>
    </div>
  );
}
