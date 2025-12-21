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
          <CartesianGrid strokeDasharray="4 4" stroke="hsl(240 6% 20%)" />
          <XAxis 
            dataKey="dataFormatada" 
            tick={{ fontSize: 10, fill: "hsl(240 5% 65%)" }}
            stroke="hsl(240 6% 20%)"
          />
          <YAxis 
            domain={[0, 10]} 
            tick={{ fontSize: 10, fill: "hsl(240 5% 65%)" }}
            stroke="hsl(240 6% 20%)"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(240 6% 10%)",
              border: "1px solid hsl(240 6% 20%)",
              borderRadius: "8px",
              color: "hsl(0 0% 95%)",
            }}
          />
          {typeof refMin === "number" && typeof refMax === "number" && (
            <ReferenceArea 
              y1={refMin} 
              y2={refMax} 
              strokeOpacity={0} 
              fill="hsl(160 84% 39%)"
              fillOpacity={0.1} 
            />
          )}
          <Line 
            type="monotone" 
            dataKey="valor" 
            stroke="hsl(262 83% 58%)" 
            strokeWidth={2} 
            dot={false}
            activeDot={{ r: 4, fill: "hsl(262 83% 58%)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
