import type { Confounders } from "@/lib/mvp-types";

interface ConfoundersToggleProps {
  value: Confounders;
  onChange: (next: Confounders) => void;
}

const CONFOUNDER_OPTIONS: { key: keyof Confounders; label: string }[] = [
  { key: "caffeine", label: "Cafeína" },
  { key: "workout", label: "Treino" },
  { key: "alcohol", label: "Álcool" },
  { key: "travel", label: "Viagem" },
  { key: "sick", label: "Doença" },
  { key: "unusualStress", label: "Estresse anormal" },
];

export function ConfoundersToggle({ value, onChange }: ConfoundersToggleProps) {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {CONFOUNDER_OPTIONS.map(({ key, label }) => (
        <button
          key={key}
          className={`
            px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-[10px] sm:text-xs font-medium transition-all border
            ${value[key] 
              ? "bg-violet-500/20 text-violet-300 border-violet-500/30" 
              : "bg-slate-800/30 text-slate-400 border-slate-700/30 hover:text-white"}
          `}
          onClick={() => onChange({ ...value, [key]: !value[key] })}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
