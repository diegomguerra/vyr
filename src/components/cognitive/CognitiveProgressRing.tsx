import { useMemo } from "react";

type CognitiveLevel = "inicio" | "construcao" | "consistente" | "avancado";

interface CognitiveProgressRingProps {
  /** 0-100 score baseado em execução cognitiva */
  value: number;
  /** Animação ao carregar */
  animate?: boolean;
}

const LEVELS: { key: CognitiveLevel; label: string; min: number }[] = [
  { key: "inicio", label: "Início", min: 0 },
  { key: "construcao", label: "Em Construção", min: 25 },
  { key: "consistente", label: "Consistente", min: 55 },
  { key: "avancado", label: "Avançado", min: 80 },
];

function getLevel(value: number): { key: CognitiveLevel; label: string } {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (value >= LEVELS[i].min) return LEVELS[i];
  }
  return LEVELS[0];
}

export function CognitiveProgressRing({ value, animate = true }: CognitiveProgressRingProps) {
  const level = useMemo(() => getLevel(value), [value]);
  
  // Arc de 270 graus (não fecha 360)
  const radius = 90;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  
  // 270 graus = 3/4 do círculo
  const arcLength = circumference * 0.75;
  const progress = (value / 100) * arcLength;
  const offset = arcLength - progress;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <svg
          width={radius * 2}
          height={radius * 2}
          className={animate ? "animate-fade-in" : ""}
          style={{ transform: "rotate(-225deg)" }}
        >
          {/* Background arc */}
          <circle
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
            className="opacity-30"
          />
          
          {/* Progress arc */}
          <circle
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            fill="none"
            stroke="hsl(var(--vyr-accent))"
            strokeWidth={strokeWidth}
            strokeDasharray={`${progress} ${circumference}`}
            strokeLinecap="round"
            className={animate ? "transition-all duration-1000 ease-out" : ""}
            style={{
              filter: "drop-shadow(0 0 8px hsl(var(--vyr-accent) / 0.4))"
            }}
          />
        </svg>
        
        {/* Central content */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ transform: "translateY(-8px)" }}
        >
          <span className="text-5xl font-bold text-foreground font-mono tracking-tight">
            {value}
          </span>
          <span className="text-sm text-foreground/70 font-mono tracking-wider mt-1">
            ÍNDICE
          </span>
        </div>
      </div>
      
      {/* Status label */}
      <div className="text-center space-y-2">
        <div className={`
          inline-flex items-center gap-2 px-4 py-2 rounded-sm border
          ${level.key === "avancado" 
            ? "border-vyr-accent/50 bg-vyr-accent/15 text-vyr-accent-glow" 
            : level.key === "consistente"
            ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-400"
            : level.key === "construcao"
            ? "border-amber-500/40 bg-amber-500/15 text-amber-400"
            : "border-border bg-muted/40 text-foreground/70"
          }
        `}>
          <div className={`w-2 h-2 rounded-full ${
            level.key === "avancado" ? "bg-vyr-accent-glow" :
            level.key === "consistente" ? "bg-emerald-400" :
            level.key === "construcao" ? "bg-amber-400" :
            "bg-foreground/50"
          }`} />
          <span className="text-base font-medium">{level.label}</span>
        </div>
        
        <p className="text-sm text-foreground/60 max-w-[220px] mx-auto">
          Baseado em execução cognitiva declarada pelo usuário
        </p>
      </div>
    </div>
  );
}
