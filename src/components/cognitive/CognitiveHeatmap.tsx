import { useMemo } from "react";

type DayOfWeek = "seg" | "ter" | "qua" | "qui" | "sex" | "sab" | "dom";
type Period = "manha" | "tarde" | "noite";

interface HeatmapCell {
  day: DayOfWeek;
  period: Period;
  intensity: number; // 0-4 (0 = nenhuma, 4 = máxima)
}

interface CognitiveHeatmapProps {
  data: HeatmapCell[];
}

const DAYS: DayOfWeek[] = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"];
const DAY_LABELS: Record<DayOfWeek, string> = {
  seg: "Seg", ter: "Ter", qua: "Qua", qui: "Qui", sex: "Sex", sab: "Sáb", dom: "Dom"
};

const PERIODS: Period[] = ["manha", "tarde", "noite"];
const PERIOD_LABELS: Record<Period, string> = {
  manha: "Manhã",
  tarde: "Tarde",
  noite: "Noite"
};

const INTENSITY_STYLES = [
  "bg-muted/20",           // 0 - nenhuma
  "bg-vyr-accent/20",      // 1 - baixa
  "bg-vyr-accent/40",      // 2 - média
  "bg-vyr-accent/60",      // 3 - alta
  "bg-vyr-accent/80",      // 4 - máxima
];

export function CognitiveHeatmap({ data }: CognitiveHeatmapProps) {
  const heatmapGrid = useMemo(() => {
    const grid: Record<string, number> = {};
    
    // Initialize all cells with 0
    PERIODS.forEach(period => {
      DAYS.forEach(day => {
        grid[`${period}-${day}`] = 0;
      });
    });
    
    // Fill with actual data
    data.forEach(cell => {
      grid[`${cell.period}-${cell.day}`] = cell.intensity;
    });
    
    return grid;
  }, [data]);

  return (
    <div className="p-5 sm:p-6 rounded-lg border border-border/60 bg-card/60">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-medium text-foreground">Heatmap Cognitivo</h3>
        <span className="text-sm text-foreground/60 font-mono">Última semana</span>
      </div>
      
      {/* Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[320px]">
          {/* Header row - days */}
          <div className="grid grid-cols-8 gap-1.5 mb-2">
            <div /> {/* Empty corner cell */}
            {DAYS.map(day => (
              <div 
                key={day}
                className="text-center text-xs text-foreground/70 font-mono py-1"
              >
                {DAY_LABELS[day]}
              </div>
            ))}
          </div>
          
          {/* Data rows */}
          {PERIODS.map(period => (
            <div key={period} className="grid grid-cols-8 gap-1.5 mb-2">
              {/* Period label */}
              <div className="text-xs text-foreground/70 font-mono flex items-center pr-2">
                {PERIOD_LABELS[period]}
              </div>
              
              {/* Cells */}
              {DAYS.map(day => {
                const intensity = heatmapGrid[`${period}-${day}`];
                return (
                  <div
                    key={`${period}-${day}`}
                    className={`
                      aspect-square rounded-sm transition-all duration-200
                      hover:ring-1 hover:ring-vyr-accent/50 cursor-default
                      ${INTENSITY_STYLES[intensity]}
                    `}
                    title={`${PERIOD_LABELS[period]} - ${DAY_LABELS[day]}: ${
                      intensity === 0 ? "Sem atividade" :
                      intensity === 1 ? "Atividade baixa" :
                      intensity === 2 ? "Atividade média" :
                      intensity === 3 ? "Atividade alta" :
                      "Atividade máxima"
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-end gap-1.5 mt-5">
        <span className="text-xs text-foreground/60 mr-1">Menos</span>
        {INTENSITY_STYLES.map((style, i) => (
          <div 
            key={i} 
            className={`w-4 h-4 rounded-sm ${style}`}
          />
        ))}
        <span className="text-xs text-foreground/60 ml-1">Mais</span>
      </div>
    </div>
  );
}

// Helper to generate sample data
export function generateSampleHeatmapData(): HeatmapCell[] {
  const data: HeatmapCell[] = [];
  const random = (max: number) => Math.floor(Math.random() * (max + 1));
  
  DAYS.forEach(day => {
    PERIODS.forEach(period => {
      // Higher intensity during weekdays and morning/afternoon
      const weekdayBonus = ["seg", "ter", "qua", "qui", "sex"].includes(day) ? 1 : 0;
      const periodBonus = period === "manha" ? 1 : period === "tarde" ? 0.5 : 0;
      const base = random(2) + weekdayBonus + (random(1) * periodBonus);
      
      data.push({
        day,
        period,
        intensity: Math.min(4, Math.round(base)) as 0 | 1 | 2 | 3 | 4,
      });
    });
  });
  
  return data;
}
