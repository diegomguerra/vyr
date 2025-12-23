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
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">SmartData (J-Style)</h3>
        <div className="flex gap-2">
          <StatusPill variant={ringConnected ? "success" : "default"}>
            Ring: {ringConnected ? "conectado" : "desconectado"}
          </StatusPill>
          <StatusPill variant={qualityVariant}>
            Qualidade: {ringDaily.dataQuality}
          </StatusPill>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <StatusPill variant="info">Índice de Saúde</StatusPill>
        <StatusPill variant="info">Vitalidade</StatusPill>
        <StatusPill variant="info">Equilíbrio</StatusPill>
        <StatusPill>Métricas brutas (variável)</StatusPill>
      </div>

      <div className="flex gap-2 flex-wrap mb-5">
        <button className="nzt-btn text-sm" onClick={onConnect}>
          {ringConnected ? "Reconectar" : "Conectar Ring"}
        </button>
        <button className="nzt-btn text-sm" onClick={onSyncPartial}>
          Sync parcial
        </button>
        <button className="nzt-btn text-sm" onClick={onSyncFull}>
          Sync completo
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <IndexCard label="Índice de Saúde" value={ringDaily.healthIndex} icon="❤️" />
        <IndexCard label="Vitalidade" value={ringDaily.vitalityIndex} icon="⚡" />
        <IndexCard label="Equilíbrio" value={ringDaily.balanceIndex} icon="⚖️" />
      </div>

      {ringDaily.metrics && ringDaily.metrics.length > 0 && (
        <>
          <p className="text-xs text-muted-foreground mb-2">Métricas brutas</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {ringDaily.metrics.map((m, i) => (
              <MetricCard key={i} metric={m} />
            ))}
          </div>
        </>
      )}

      <p className="text-xs text-muted-foreground mt-4">
        Nota: interpretação premium fica bloqueada se o dado estiver ausente/ruim.
      </p>
    </div>
  );
}
