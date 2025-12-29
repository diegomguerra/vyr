import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

type CognitiveActivity = "trabalho" | "estudo" | "escrita" | "decisao" | "criativo";

interface ProfileDataPoint {
  activity: CognitiveActivity;
  hours: number;
}

interface CognitiveProfileChartProps {
  data: ProfileDataPoint[];
}

const ACTIVITY_LABELS: Record<CognitiveActivity, string> = {
  trabalho: "Trabalho",
  estudo: "Estudo",
  escrita: "Escrita",
  decisao: "Decisão",
  criativo: "Criativo",
};

const ACTIVITY_COLORS = [
  "hsl(var(--vyr-accent))",
  "hsl(var(--vyr-cyan))",
  "hsl(210 15% 45%)",
  "hsl(210 12% 50%)",
  "hsl(210 10% 55%)",
];

export function CognitiveProfileChart({ data }: CognitiveProfileChartProps) {
  const chartData = useMemo(() => {
    const total = data.reduce((acc, d) => acc + d.hours, 0);
    return data.map(d => ({
      ...d,
      label: ACTIVITY_LABELS[d.activity],
      percentage: total > 0 ? Math.round((d.hours / total) * 100) : 0,
    }));
  }, [data]);

  return (
    <div className="p-5 sm:p-6 rounded-lg border border-border/60 bg-card/60">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-medium text-foreground">Perfil Cognitivo</h3>
        <span className="text-sm text-foreground/60 font-mono">Distribuição por tipo</span>
      </div>
      
      {chartData.length > 0 && chartData.some(d => d.hours > 0) ? (
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={chartData} 
              layout="vertical"
              margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            >
              <XAxis 
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "hsl(var(--foreground) / 0.6)" }}
              />
              <YAxis 
                type="category"
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "hsl(var(--foreground) / 0.7)" }}
                width={70}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
                formatter={(value: number, name: string, props: any) => [
                  `${value}h (${props.payload.percentage}%)`,
                  "Tempo"
                ]}
              />
              <Bar 
                dataKey="hours" 
                radius={[0, 4, 4, 0]}
              >
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={ACTIVITY_COLORS[index % ACTIVITY_COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="h-[200px] flex items-center justify-center text-base text-foreground/60">
          Ainda não há dados suficientes.
        </div>
      )}
    </div>
  );
}

// Helper to generate sample data
export function generateSampleProfileData(): ProfileDataPoint[] {
  return [
    { activity: "trabalho", hours: 18 },
    { activity: "estudo", hours: 8 },
    { activity: "escrita", hours: 5 },
    { activity: "decisao", hours: 4 },
    { activity: "criativo", hours: 3 },
  ];
}
