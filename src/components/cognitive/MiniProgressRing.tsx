import { TrendingUp, TrendingDown, Minus } from "lucide-react";

type Trend = "up" | "down" | "stable";

interface MiniProgressRingProps {
  label: string;
  value: number;
  maxValue?: number;
  trend: Trend;
  unit?: string;
}

export function MiniProgressRing({ 
  label, 
  value, 
  maxValue = 100, 
  trend,
  unit 
}: MiniProgressRingProps) {
  const radius = 36;
  const strokeWidth = 4;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  
  const arcLength = circumference * 0.75;
  const progress = (Math.min(value, maxValue) / maxValue) * arcLength;

  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
  const trendColor = trend === "up" ? "text-emerald-400" : trend === "down" ? "text-rose-400" : "text-muted-foreground";

  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border/50 bg-card/50">
      <div className="relative">
        <svg
          width={radius * 2}
          height={radius * 2}
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
            className="transition-all duration-700 ease-out"
          />
        </svg>
        
        {/* Central value */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: "translateY(-3px)" }}
        >
          <span className="text-lg font-bold text-foreground font-mono">
            {value}{unit && <span className="text-xs text-muted-foreground ml-0.5">{unit}</span>}
          </span>
        </div>
      </div>
      
      {/* Label and trend */}
      <div className="text-center space-y-1">
        <span className="text-xs font-medium text-foreground">{label}</span>
        <div className={`flex items-center justify-center gap-1 ${trendColor}`}>
          <TrendIcon className="w-3 h-3" />
          <span className="text-[10px] font-mono">
            {trend === "up" ? "subindo" : trend === "down" ? "caindo" : "estável"}
          </span>
        </div>
      </div>
    </div>
  );
}
