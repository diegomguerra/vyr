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
    <div className="p-4 sm:p-5 rounded-lg border border-border/50 bg-card/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        
        {/* Period toggle */}
        <div className="flex items-center gap-1 p-0.5 rounded-md bg-muted/30">
          {([7, 14, 30] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`
                px-2 py-1 text-xs font-mono rounded transition-all
                ${period === p 
                  ? "bg-vyr-accent/20 text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {p}d
            </button>
          ))}
        </div>
      </div>
      
      {filteredData.length > 0 ? (
        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
              <XAxis 
                dataKey="date" 
                tickFormatter={formatDate}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                interval="preserveStartEnd"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
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
        <div className="h-[180px] flex items-center justify-center text-sm text-muted-foreground">
          Ainda não há dados suficientes. A consistência constrói clareza.
        </div>
      )}
    </div>
  );
}
