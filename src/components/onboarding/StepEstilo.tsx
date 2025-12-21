import { FREQUENCIA_EXERCICIO, CONSUMO_OPTIONS } from "@/lib/onboarding-data";
import { ScaleBlock } from "@/components/nzt";
import { cn } from "@/lib/utils";
import type { FrequenciaExercicio, ConsumoSubstancia } from "@/lib/types";

interface StepEstiloProps {
  nivelEstresse: number | null;
  frequenciaExercicio: FrequenciaExercicio | null;
  consumoCafeina: ConsumoSubstancia | null;
  consumoAlcool: ConsumoSubstancia | null;
  onNivelEstresseChange: (v: number) => void;
  onFrequenciaExercicioChange: (v: FrequenciaExercicio) => void;
  onConsumoCafeinaChange: (v: ConsumoSubstancia) => void;
  onConsumoAlcoolChange: (v: ConsumoSubstancia) => void;
}

export function StepEstilo({ 
  nivelEstresse,
  frequenciaExercicio,
  consumoCafeina,
  consumoAlcool,
  onNivelEstresseChange,
  onFrequenciaExercicioChange,
  onConsumoCafeinaChange,
  onConsumoAlcoolChange
}: StepEstiloProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
      <div>
        <h3 className="text-lg font-bold text-foreground mb-2">
          Qual seu nível de estresse geral?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Considere sua rotina nas últimas semanas.
        </p>
        
        <ScaleBlock
          title="Nível de estresse"
          question="Como você classificaria seu nível de estresse geral nas últimas semanas?"
          anchor="0=muito baixo • 10=muito alto"
          value={nivelEstresse ?? 5}
          onChange={onNivelEstresseChange}
        />
      </div>

      <div>
        <h3 className="text-lg font-bold text-foreground mb-2">
          Com que frequência pratica exercícios físicos?
        </h3>
        
        <div className="grid gap-2 sm:grid-cols-2">
          {FREQUENCIA_EXERCICIO.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onFrequenciaExercicioChange(opt.value)}
              className={cn(
                "p-4 rounded-xl border text-left transition-all duration-200",
                frequenciaExercicio === opt.value
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:bg-muted/50"
              )}
            >
              <span className="text-sm font-medium text-foreground">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="text-base font-bold text-foreground mb-3">
            Consumo de cafeína
          </h3>
          <div className="grid gap-2">
            {CONSUMO_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => onConsumoCafeinaChange(opt.value)}
                className={cn(
                  "p-3 rounded-xl border text-left transition-all duration-200",
                  consumoCafeina === opt.value
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:bg-muted/50"
                )}
              >
                <span className="text-sm text-foreground">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">
            Consumo de álcool
          </h3>
          <div className="grid gap-2">
            {CONSUMO_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => onConsumoAlcoolChange(opt.value)}
                className={cn(
                  consumoAlcool === opt.value
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:bg-muted/50",
                  "p-3 rounded-xl border text-left transition-all duration-200"
                )}
              >
                <span className="text-sm text-foreground">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
