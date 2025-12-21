import { PERFIS, ROTINAS } from "@/lib/onboarding-data";
import { cn } from "@/lib/utils";
import type { PerfilAtividade, RotinaTrabalho } from "@/lib/types";

interface StepPerfilProps {
  perfil: PerfilAtividade | null;
  rotina: RotinaTrabalho | null;
  onPerfilChange: (v: PerfilAtividade) => void;
  onRotinaChange: (v: RotinaTrabalho) => void;
}

export function StepPerfil({ perfil, rotina, onPerfilChange, onRotinaChange }: StepPerfilProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
      <div>
        <h3 className="text-lg font-bold text-foreground mb-2">
          Qual atividade ocupa a maior parte do seu dia?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Sem hierarquia, apenas formas diferentes de contribuir.
        </p>
        
        <div className="grid gap-3">
          {PERFIS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onPerfilChange(opt.value)}
              className={cn(
                "w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-4",
                perfil === opt.value
                  ? "border-primary bg-primary/10 shadow-sm"
                  : "border-border bg-card hover:bg-muted/50 hover:border-muted-foreground/30"
              )}
            >
              <span className="text-2xl">{opt.icon}</span>
              <div>
                <div className="font-bold text-sm text-foreground">{opt.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{opt.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-foreground mb-2">
          Seu dia costuma ser mais composto por:
        </h3>
        
        <div className="grid gap-3 sm:grid-cols-3">
          {ROTINAS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onRotinaChange(opt.value)}
              className={cn(
                "p-4 rounded-xl border text-center transition-all duration-200",
                rotina === opt.value
                  ? "border-primary bg-primary/10 shadow-sm"
                  : "border-border bg-card hover:bg-muted/50 hover:border-muted-foreground/30"
              )}
            >
              <span className="text-2xl block mb-2">{opt.icon}</span>
              <span className="text-sm font-medium text-foreground">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
