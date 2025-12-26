import type { Plan } from "@/lib/mvp-types";

interface PlanSelectorProps {
  plan: Plan;
  onChange: (plan: Plan) => void;
}

export function PlanSelector({ plan, onChange }: PlanSelectorProps) {
  return (
    <div className="flex gap-2">
      <button
        className={`
          px-4 py-2 rounded-sm text-xs font-medium transition-all border font-mono
          ${plan === "basic" 
            ? "bg-vyr-accent/10 text-vyr-white border-vyr-accent/30" 
            : "bg-vyr-gray-800/50 text-vyr-gray-400 border-vyr-gray-700/50 hover:text-vyr-white"}
        `}
        onClick={() => onChange("basic")}
      >
        Básico
      </button>
      <button
        className={`
          px-4 py-2 rounded-sm text-xs font-medium transition-all border font-mono
          ${plan === "pro" 
            ? "bg-vyr-accent/10 text-vyr-white border-vyr-accent/30" 
            : "bg-vyr-gray-800/50 text-vyr-gray-400 border-vyr-gray-700/50 hover:text-vyr-white"}
        `}
        onClick={() => onChange("pro")}
      >
        Superior
      </button>
    </div>
  );
}
