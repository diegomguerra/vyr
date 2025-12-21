import { OBJETIVOS, EXPERIENCIA_SUPLEMENTOS } from "@/lib/onboarding-data";
import { cn } from "@/lib/utils";
import type { NivelExperiencia } from "@/lib/types";

interface StepObjetivoProps {
  objetivo: string | null;
  experiencia: NivelExperiencia | null;
  onObjetivoChange: (v: string) => void;
  onExperienciaChange: (v: NivelExperiencia) => void;
}

export function StepObjetivo({ objetivo, experiencia, onObjetivoChange, onExperienciaChange }: StepObjetivoProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
      <div>
        <h3 className="text-lg font-bold text-foreground mb-2">
          Qual seu principal objetivo?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Selecione o que mais representa sua busca neste momento.
        </p>
        
        <div className="grid gap-3">
          {OBJETIVOS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onObjetivoChange(opt.value)}
              className={cn(
                "w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-4",
                objetivo === opt.value
                  ? "border-primary bg-primary/10 shadow-sm"
                  : "border-border bg-card hover:bg-muted/50 hover:border-muted-foreground/30"
              )}
            >
              <span className="text-2xl">{opt.icon}</span>
              <span className="font-medium text-foreground">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-foreground mb-2">
          Qual sua experiência com suplementos nootrópicos?
        </h3>
        
        <div className="grid gap-3">
          {EXPERIENCIA_SUPLEMENTOS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onExperienciaChange(opt.value)}
              className={cn(
                "w-full p-4 rounded-xl border text-left transition-all duration-200",
                experiencia === opt.value
                  ? "border-primary bg-primary/10 shadow-sm"
                  : "border-border bg-card hover:bg-muted/50 hover:border-muted-foreground/30"
              )}
            >
              <div className="font-bold text-sm text-foreground">{opt.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{opt.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
