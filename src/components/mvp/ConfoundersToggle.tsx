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
          className={`nzt-chip text-[10px] sm:text-xs px-2 py-1 sm:px-3 sm:py-2 ${value[key] ? "nzt-chip-active" : ""}`}
          onClick={() => onChange({ ...value, [key]: !value[key] })}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
