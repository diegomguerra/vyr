import { IndexCard, MetricCard } from "./MetricCard";
import { StatusPill } from "./StatusPill";
import type { RingDaily } from "@/lib/mvp-types";

interface SmartDataPanelProps {
  ringDaily: RingDaily;
  ringConnected: boolean;
  onConnect: () => void;
  onSyncPartial: () => void;
  onSyncFull: () => void;
}

export function SmartDataPanel({
  ringDaily,
  ringConnected,
  onConnect,
  onSyncPartial,
  onSyncFull,
}: SmartDataPanelProps) {
  const qualityVariant = ringDaily.dataQuality === "good" 
    ? "success" 
    : ringDaily.dataQuality === "partial" 
      ? "warning" 
      : "default";

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-white">SmartData (J-Style)</h3>
        <div className="flex gap-1.5 sm:gap-2 flex-wrap">
          <StatusPill variant={ringConnected ? "success" : "default"}>
            Ring: {ringConnected ? "on" : "off"}
          </StatusPill>
          <StatusPill variant={qualityVariant}>
            {ringDaily.dataQuality}
          </StatusPill>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
        <StatusPill variant="info">Saúde</StatusPill>
        <StatusPill variant="info">Vitalidade</StatusPill>
        <StatusPill variant="info">Equilíbrio</StatusPill>
      </div>

      <div className="flex gap-1.5 sm:gap-2 flex-wrap mb-4 sm:mb-5">
        <button 
          className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:bg-slate-700 transition-all" 
          onClick={onConnect}
        >
          {ringConnected ? "Reconectar" : "Conectar"}
        </button>
        <button 
          className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:bg-slate-700 transition-all" 
          onClick={onSyncPartial}
        >
          Sync parcial
        </button>
        <button 
          className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:bg-slate-700 transition-all" 
          onClick={onSyncFull}
        >
          Sync completo
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
        <IndexCard label="Saúde" value={ringDaily.healthIndex} icon="❤️" />
        <IndexCard label="Vitalidade" value={ringDaily.vitalityIndex} icon="⚡" />
        <IndexCard label="Equilíbrio" value={ringDaily.balanceIndex} icon="⚖️" />
      </div>

      {ringDaily.metrics && ringDaily.metrics.length > 0 && (
        <>
          <p className="text-xs text-slate-500 mb-2">Métricas brutas</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {ringDaily.metrics.map((m, i) => (
              <MetricCard key={i} metric={m} />
            ))}
          </div>
        </>
      )}

      <p className="text-xs text-slate-500 mt-3 sm:mt-4">
        Nota: interpretação premium bloqueada se dado ausente/ruim.
      </p>
    </div>
  );
}
