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
          px-4 py-2 rounded-xl text-xs font-medium transition-all border
          ${plan === "basic" 
            ? "bg-violet-500/20 text-white border-violet-500/30" 
            : "bg-slate-800/30 text-slate-400 border-slate-700/30 hover:text-white"}
        `}
        onClick={() => onChange("basic")}
      >
        Básico
      </button>
      <button
        className={`
          px-4 py-2 rounded-xl text-xs font-medium transition-all border
          ${plan === "pro" 
            ? "bg-violet-500/20 text-white border-violet-500/30" 
            : "bg-slate-800/30 text-slate-400 border-slate-700/30 hover:text-white"}
        `}
        onClick={() => onChange("pro")}
      >
        Superior
      </button>
    </div>
  );
}
