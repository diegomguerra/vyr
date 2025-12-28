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
  { key: "lowEnergy", label: "Baixa energia" },
  { key: "unusualStress", label: "Estresse" },
];

export function ConfoundersToggle({ value, onChange }: ConfoundersToggleProps) {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {CONFOUNDER_OPTIONS.map(({ key, label }) => (
        <button
          key={key}
          className={`
            px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-sm text-[10px] sm:text-xs font-medium font-mono transition-all border
            ${value[key] 
              ? "bg-vyr-accent/15 text-vyr-accent border-vyr-accent/40" 
              : "bg-vyr-gray-800/30 text-vyr-gray-300 border-vyr-gray-700/30 hover:text-vyr-white"}
          `}
          onClick={() => onChange({ ...value, [key]: !value[key] })}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
