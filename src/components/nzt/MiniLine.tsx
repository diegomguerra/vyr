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
          <CartesianGrid strokeDasharray="4 4" stroke="hsl(220 13% 18%)" />
          <XAxis 
            dataKey="dataFormatada" 
            tick={{ fontSize: 10, fill: "hsl(220 9% 46%)" }}
            stroke="hsl(220 13% 18%)"
          />
          <YAxis 
            domain={[0, 10]} 
            tick={{ fontSize: 10, fill: "hsl(220 9% 46%)" }}
            stroke="hsl(220 13% 18%)"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(220 13% 10%)",
              border: "1px solid hsl(220 13% 22%)",
              borderRadius: "8px",
              color: "hsl(0 0% 98%)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
            }}
          />
          {typeof refMin === "number" && typeof refMax === "number" && (
            <ReferenceArea 
              y1={refMin} 
              y2={refMax} 
              strokeOpacity={0} 
              fill="hsl(215 25% 27%)"
              fillOpacity={0.15} 
            />
          )}
          <Line 
            type="monotone" 
            dataKey="valor" 
            stroke="hsl(215 25% 27%)" 
            strokeWidth={2} 
            dot={false}
            activeDot={{ r: 4, fill: "hsl(215 25% 27%)", stroke: "hsl(0 0% 98%)", strokeWidth: 1 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
