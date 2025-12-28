import type { Plan, RingDaily, DoseCheckin, DoseType } from "@/lib/mvp-types";
import { IndexCard } from "./MetricCard";
import { useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

interface ProgressPanelProps {
  plan: Plan;
  ringDaily: RingDaily;
  checkins: DoseCheckin[];
}

export function ProgressPanel({ plan, ringDaily, checkins }: ProgressPanelProps) {
  const today = new Date();

  const weekDates = useMemo(() => {
    const arr: string[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      arr.push(d.toISOString().slice(0, 10));
    }
    return arr;
  }, []);

  const checkinCountByDate = useMemo(() => {
    const m = new Map<string, { boot: boolean; hold: boolean; clear: boolean }>();
    for (const d of weekDates) m.set(d, { boot: false, hold: false, clear: false });
    for (const c of checkins) {
      if (m.has(c.dateISO) && c.dose) {
        const current = m.get(c.dateISO)!;
        current[c.dose] = true;
      }
    }
    return m;
  }, [checkins, weekDates]);

  // Dados para o gráfico
  const chartData = useMemo(() => {
    return weekDates.map((date) => {
      const dayCheckins = checkins.filter(c => c.dateISO === date && c.taken);
      const avgFocus = dayCheckins.reduce((acc, c) => acc + (c.focus ?? 0), 0) / Math.max(dayCheckins.length, 1);
      const avgEnergy = dayCheckins.reduce((acc, c) => acc + (c.energy ?? 0), 0) / Math.max(dayCheckins.length, 1);
      const avgClarity = dayCheckins.reduce((acc, c) => acc + (c.clarity ?? 0), 0) / Math.max(dayCheckins.length, 1);
      
      const d = new Date(date);
      return {
        date: d.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric" }),
        foco: dayCheckins.length > 0 ? Math.round(avgFocus * 10) / 10 : null,
        energia: dayCheckins.length > 0 ? Math.round(avgEnergy * 10) / 10 : null,
        clareza: dayCheckins.length > 0 ? Math.round(avgClarity * 10) / 10 : null,
      };
    });
  }, [checkins, weekDates]);

  const hasChartData = chartData.some(d => d.foco !== null || d.energia !== null || d.clareza !== null);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric" });
  };

  const countDoses = (doses: { boot: boolean; hold: boolean; clear: boolean }) => {
    return [doses.boot, doses.hold, doses.clear].filter(Boolean).length;
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Gráfico de evolução */}
      <div className="bg-vyr-gray-900/50 backdrop-blur-xl border border-vyr-gray-500/20 rounded-2xl p-4 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base text-vyr-white mb-1.5 sm:mb-2 font-mono">Evolução semanal</h3>
        <p className="text-[10px] sm:text-xs text-vyr-gray-500 mb-4">
          Média diária de percepção por métrica.
        </p>
        
        {!hasChartData ? (
          <div className="h-48 flex items-center justify-center text-vyr-gray-500 text-sm">
            Registre doses para ver o gráfico de evolução
          </div>
        ) : (
          <div className="h-48 sm:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorFoco" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F5F1E6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F5F1E6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEnergia" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorClareza" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.3} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fill: '#888', fontSize: 10 }}
                  axisLine={{ stroke: '#444' }}
                  tickLine={false}
                />
                <YAxis 
                  domain={[0, 10]} 
                  tick={{ fill: '#888', fontSize: 10 }}
                  axisLine={{ stroke: '#444' }}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                  labelStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="foco" 
                  stroke="#F5F1E6" 
                  fillOpacity={1} 
                  fill="url(#colorFoco)" 
                  strokeWidth={2}
                  connectNulls
                  name="Foco"
                />
                <Area 
                  type="monotone" 
                  dataKey="energia" 
                  stroke="#D4AF37" 
                  fillOpacity={1} 
                  fill="url(#colorEnergia)" 
                  strokeWidth={2}
                  connectNulls
                  name="Energia"
                />
                <Area 
                  type="monotone" 
                  dataKey="clareza" 
                  stroke="#4ECDC4" 
                  fillOpacity={1} 
                  fill="url(#colorClareza)" 
                  strokeWidth={2}
                  connectNulls
                  name="Clareza"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="flex gap-4 mt-3 text-[10px] sm:text-xs text-vyr-gray-400">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-vyr-gray-100 rounded" />
            <span>Foco</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-vyr-accent rounded" />
            <span>Energia</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-vyr-cyan rounded" />
            <span>Clareza</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5">
        {/* Consistência */}
        <div className="bg-vyr-gray-900/50 backdrop-blur-xl border border-vyr-gray-500/20 rounded-2xl p-4 sm:p-5">
          <h3 className="font-semibold text-sm sm:text-base text-vyr-white mb-1.5 sm:mb-2 font-mono">Consistência (7 dias)</h3>
          <p className="text-[10px] sm:text-xs text-vyr-gray-500 mb-3 sm:mb-4">
            Doses registradas por dia.
          </p>
          <div className="space-y-1.5 sm:space-y-2">
            {weekDates.map((d) => {
              const doses = checkinCountByDate.get(d) ?? { boot: false, hold: false, clear: false };
              const count = countDoses(doses);
              const isComplete = count >= 3;
              return (
                <div
                  key={d}
                  className={`flex items-center justify-between rounded-xl border px-3 sm:px-4 py-2 sm:py-2.5 ${
                    isComplete
                      ? "border-vyr-accent/30 bg-vyr-accent/10"
                      : "border-vyr-gray-500/20 bg-vyr-gray-900/30"
                  }`}
                >
                  <span className="text-xs sm:text-sm text-vyr-white font-mono">{formatDate(d)}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${doses.boot ? 'bg-vyr-accent/20 text-vyr-accent' : 'bg-vyr-gray-800 text-vyr-gray-600'}`}>B</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${doses.hold ? 'bg-vyr-cyan/20 text-vyr-cyan' : 'bg-vyr-gray-800 text-vyr-gray-600'}`}>H</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${doses.clear ? 'bg-vyr-gray-100/20 text-vyr-gray-100' : 'bg-vyr-gray-800 text-vyr-gray-600'}`}>C</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SmartData tendência */}
        <div className="bg-vyr-gray-900/50 backdrop-blur-xl border border-vyr-gray-500/20 rounded-2xl p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
          <h3 className="font-semibold text-sm sm:text-base text-vyr-white font-mono">VYR NODE — tendência</h3>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-vyr-accent/20 text-vyr-accent font-mono">Beta</span>
        </div>

        <p className="text-[10px] sm:text-xs text-vyr-gray-500 mb-3 sm:mb-4">
          Use os índices exportáveis como macro-sinal.
        </p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <IndexCard label="Saúde" value={ringDaily.healthIndex} icon="❤️" />
            <IndexCard label="Vitalidade" value={ringDaily.vitalityIndex} icon="⚡" />
            <IndexCard label="Equilíbrio" value={ringDaily.balanceIndex} icon="⚖️" />
          </div>
          <p className="text-[10px] sm:text-xs text-vyr-gray-500 mt-3 sm:mt-4">
            Qualidade: <strong className="text-vyr-white font-mono">{ringDaily.dataQuality}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
