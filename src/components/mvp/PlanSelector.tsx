import type { Plan } from "@/lib/mvp-types";

interface PlanSelectorProps {
  plan: Plan;
  onChange: (plan: Plan) => void;
}

export function PlanSelector({ plan, onChange }: PlanSelectorProps) {
  return (
    <div className="flex gap-2">
      <button
        className={`nzt-chip ${plan === "basic" ? "nzt-chip-active" : ""}`}
        onClick={() => onChange("basic")}
      >
        Básico
      </button>
      <button
        className={`nzt-chip ${plan === "pro" ? "nzt-chip-active" : ""}`}
        onClick={() => onChange("pro")}
      >
        Superior
      </button>
    </div>
  );
}
