import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceArea } from "recharts";
import { formatarData } from "@/lib/date";

interface MiniLineProps {
  data: { data: string; valor: number | null }[];
  refMin?: number;
  refMax?: number;
}

export function MiniLine({ data, refMin, refMax }: MiniLineProps) {
  const formattedData = data.map(item => ({
    ...item,
    dataFormatada: formatarData(item.data),
  }));

  return (
    <div className="h-60">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="4 4" stroke="hsl(var(--vyr-gray-700))" />
          <XAxis 
            dataKey="dataFormatada" 
            tick={{ fontSize: 10, fill: "hsl(var(--vyr-gray-300))" }}
            stroke="hsl(var(--vyr-gray-700))"
          />
          <YAxis 
            domain={[0, 10]} 
            tick={{ fontSize: 10, fill: "hsl(var(--vyr-gray-300))" }}
            stroke="hsl(var(--vyr-gray-700))"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(var(--vyr-gray-900))",
              border: "1px solid hsl(var(--vyr-gray-700))",
              borderRadius: "8px",
              color: "hsl(var(--vyr-white))",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
            }}
          />
          {typeof refMin === "number" && typeof refMax === "number" && (
            <ReferenceArea 
              y1={refMin} 
              y2={refMax} 
              strokeOpacity={0} 
              fill="hsl(var(--vyr-accent))"
              fillOpacity={0.15} 
            />
          )}
          <Line 
            type="monotone" 
            dataKey="valor" 
            stroke="hsl(var(--vyr-accent))" 
            strokeWidth={2} 
            dot={false}
            activeDot={{ r: 4, fill: "hsl(var(--vyr-accent))", stroke: "hsl(var(--vyr-white))", strokeWidth: 1 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
