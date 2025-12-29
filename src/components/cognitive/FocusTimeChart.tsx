import { useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Period = 7 | 14 | 30;

interface DataPoint {
  date: string;
  value: number;
}

interface FocusTimeChartProps {
  data: DataPoint[];
  title?: string;
  yAxisLabel?: string;
}

export function FocusTimeChart({ 
  data, 
  title = "Tempo de Foco",
  yAxisLabel = "min"
}: FocusTimeChartProps) {
  const [period, setPeriod] = useState<Period>(7);
  
  const filteredData = useMemo(() => {
    return data.slice(-period);
  }, [data, period]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
  };

  return (
    <div className="p-5 sm:p-6 rounded-lg border border-border/60 bg-card/60">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-medium text-foreground">{title}</h3>
        
        {/* Period toggle */}
        <div className="flex items-center gap-1 p-0.5 rounded-md bg-muted/40">
          {([7, 14, 30] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`
                px-3 py-1.5 text-sm font-mono rounded transition-all
                ${period === p 
                  ? "bg-vyr-accent/25 text-foreground" 
                  : "text-foreground/60 hover:text-foreground"
                }
              `}
            >
              {p}d
            </button>
          ))}
        </div>
      </div>
      
      {filteredData.length > 0 ? (
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
              <XAxis 
                dataKey="date" 
                tickFormatter={formatDate}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "hsl(var(--foreground) / 0.6)" }}
                interval="preserveStartEnd"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "hsl(var(--foreground) / 0.6)" }}
                width={35}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
                formatter={(value: number) => [`${value} ${yAxisLabel}`, title]}
                labelFormatter={formatDate}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--vyr-accent))"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "hsl(var(--vyr-accent))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="h-[200px] flex items-center justify-center text-base text-foreground/60">
          Ainda não há dados suficientes. A consistência constrói clareza.
        </div>
      )}
    </div>
  );
}
