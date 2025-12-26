import { useMemo } from "react";
import { TrendingUp, TrendingDown, Minus, Target } from "lucide-react";

interface EvolutionMetric {
  label: string;
  baselineAnamnese: number | null; // From onboarding
  baselineInicial: number | null;  // First days of tracking
  atual: number | null;            // Current moving average
  refRange?: { min: number; max: number };
  inverted?: boolean;              // Lower is better (e.g., stress)
}

interface BaselineEvolutionProps {
  metrics: EvolutionMetric[];
  showAnamnese?: boolean;
}

export function BaselineEvolution({ metrics, showAnamnese = true }: BaselineEvolutionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-vyr-gray-500 mb-2 font-mono">
        {showAnamnese && <span className="flex-1">Anamnese</span>}
        <span className="flex-1 text-center">Início</span>
        <span className="flex-1 text-center">Agora</span>
        <span className="w-16 text-right">Evolução</span>
      </div>
      
      {metrics.map((metric) => (
        <EvolutionRow key={metric.label} metric={metric} showAnamnese={showAnamnese} />
      ))}
    </div>
  );
}

function EvolutionRow({ 
  metric, 
  showAnamnese 
}: { 
  metric: EvolutionMetric; 
  showAnamnese: boolean;
}) {
  const evolution = useMemo(() => {
    if (metric.baselineInicial == null || metric.atual == null) return null;
    
    const diff = metric.atual - metric.baselineInicial;
    const percentChange = metric.baselineInicial !== 0 
      ? (diff / metric.baselineInicial) * 100 
      : 0;
    
    // For inverted metrics, negative change is good
    const isPositive = metric.inverted ? diff < 0 : diff > 0;
    const isNeutral = Math.abs(diff) < 0.3;
    
    return { diff, percentChange, isPositive, isNeutral };
  }, [metric]);

  const withinRef = useMemo(() => {
    if (!metric.refRange || metric.atual == null) return null;
    return metric.atual >= metric.refRange.min && metric.atual <= metric.refRange.max;
  }, [metric.refRange, metric.atual]);

  return (
    <div className="flex items-center gap-2 py-2 border-b border-vyr-gray-700/50 last:border-b-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-vyr-white truncate">{metric.label}</p>
        {metric.refRange && (
          <p className="text-xs text-vyr-gray-500 font-mono">
            Ref: {metric.refRange.min}–{metric.refRange.max}
            {withinRef !== null && (
              <span className={withinRef ? " text-vyr-accent" : " text-amber-500/70"}>
                {withinRef ? " ✓" : " •"}
              </span>
            )}
          </p>
        )}
      </div>
      
      <div className="flex items-center gap-3 text-sm">
        {showAnamnese && (
          <ValueCell 
            value={metric.baselineAnamnese} 
            variant="muted" 
            title="Valor informado na anamnese"
          />
        )}
        
        <ValueCell 
          value={metric.baselineInicial} 
          variant="default" 
          title="Média dos primeiros registros"
        />
        
        <ValueCell 
          value={metric.atual} 
          variant="highlight" 
          title="Média móvel atual (7 dias)"
        />
        
        <div className="w-16 flex items-center justify-end gap-1">
          {evolution && !evolution.isNeutral ? (
            <>
              {evolution.isPositive ? (
                <TrendingUp className="w-4 h-4 text-vyr-accent" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-400/70" />
              )}
              <span 
                className={`text-xs font-medium font-mono ${
                  evolution.isPositive ? "text-vyr-accent" : "text-red-400/70"
                }`}
              >
                {evolution.diff > 0 ? "+" : ""}{evolution.diff.toFixed(1)}
              </span>
            </>
          ) : evolution?.isNeutral ? (
            <>
              <Minus className="w-4 h-4 text-vyr-gray-500" />
              <span className="text-xs text-vyr-gray-500 font-mono">—</span>
            </>
          ) : (
            <span className="text-xs text-vyr-gray-500 font-mono">—</span>
          )}
        </div>
      </div>
    </div>
  );
}

function ValueCell({ 
  value, 
  variant, 
  title 
}: { 
  value: number | null; 
  variant: "muted" | "default" | "highlight";
  title: string;
}) {
  const styles = {
    muted: "text-vyr-gray-500",
    default: "text-vyr-gray-400",
    highlight: "text-vyr-white font-semibold",
  };

  return (
    <span 
      className={`w-8 text-center font-mono ${styles[variant]}`} 
      title={title}
    >
      {value ?? "—"}
    </span>
  );
}
