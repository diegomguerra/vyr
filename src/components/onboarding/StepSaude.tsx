import { CONDICOES_SAUDE } from "@/lib/onboarding-data";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepSaudeProps {
  condicoes: string[];
  medicamentos: string;
  onCondicoesChange: (v: string[]) => void;
  onMedicamentosChange: (v: string) => void;
}

export function StepSaude({ condicoes, medicamentos, onCondicoesChange, onMedicamentosChange }: StepSaudeProps) {
  const toggleCondicao = (k: string) => {
    if (k === "nenhuma") {
      onCondicoesChange(condicoes.includes("nenhuma") ? [] : ["nenhuma"]);
    } else {
      const withoutNenhuma = condicoes.filter(c => c !== "nenhuma");
      if (withoutNenhuma.includes(k)) {
        onCondicoesChange(withoutNenhuma.filter(c => c !== k));
      } else {
        onCondicoesChange([...withoutNenhuma, k]);
      }
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
      <div>
        <h3 className="text-lg font-bold text-foreground mb-2">
          Você possui alguma condição de saúde relevante?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Selecione todas que se aplicam. Esta informação ajuda a personalizar recomendações.
        </p>
        
        <div className="grid gap-2 sm:grid-cols-2">
          {CONDICOES_SAUDE.map((opt) => {
            const isSelected = condicoes.includes(opt.k);
            const isNenhuma = opt.k === "nenhuma";
            
            return (
              <button
                key={opt.k}
                onClick={() => toggleCondicao(opt.k)}
                className={cn(
                  "p-3 rounded-xl border text-left transition-all duration-200 flex items-center gap-3",
                  isSelected
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:bg-muted/50",
                  isNenhuma && "sm:col-span-2"
                )}
              >
                <div className={cn(
                  "w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors",
                  isSelected 
                    ? "bg-primary border-primary text-primary-foreground" 
                    : "border-muted-foreground/40"
                )}>
                  {isSelected && <Check size={14} />}
                </div>
                <span className="text-sm text-foreground">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-foreground mb-2">
          Usa algum medicamento regularmente?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Opcional. Pode ser útil para entender possíveis interações.
        </p>
        
        <textarea
          value={medicamentos}
          onChange={(e) => onMedicamentosChange(e.target.value)}
          placeholder="Ex: Antidepressivo, anti-hipertensivo, etc. (deixe em branco se não usar)"
          className="w-full p-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          rows={3}
        />
      </div>
    </div>
  );
}
