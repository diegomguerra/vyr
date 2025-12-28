import { useState } from "react";
import { IndexCard, MetricCard } from "./MetricCard";
import { StatusPill } from "./StatusPill";
import { Slider } from "@/components/ui/slider";
import type { RingDaily, Metric } from "@/lib/mvp-types";
import { Watch, Edit3, X, Check } from "lucide-react";

interface SmartDataPanelProps {
  ringDaily: RingDaily;
  ringConnected: boolean;
  onConnect: () => void;
  onSyncPartial: () => void;
  onSyncFull: () => void;
  onManualData?: (data: RingDaily) => void;
}

type ManualMetrics = {
  sleepHours: number;
  sleepQuality: number;
  hrv: number;
  restingHr: number;
  steps: number;
  stressLevel: number;
};

const defaultManualMetrics: ManualMetrics = {
  sleepHours: 7,
  sleepQuality: 7,
  hrv: 45,
  restingHr: 60,
  steps: 5000,
  stressLevel: 5,
};

export function SmartDataPanel({
  ringDaily,
  ringConnected,
  onConnect,
  onSyncPartial,
  onSyncFull,
  onManualData,
}: SmartDataPanelProps) {
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualMetrics, setManualMetrics] = useState<ManualMetrics>(defaultManualMetrics);

  const qualityVariant = ringDaily.dataQuality === "good" 
    ? "success" 
    : ringDaily.dataQuality === "partial" 
      ? "warning" 
      : "default";

  const handleSaveManual = () => {
    const metrics: Metric[] = [
      { key: "sleep_total", value: manualMetrics.sleepHours * 60, unit: "min" },
      { key: "sleep_quality", value: manualMetrics.sleepQuality, unit: "score" },
      { key: "hrv", value: manualMetrics.hrv, unit: "ms" },
      { key: "resting_hr", value: manualMetrics.restingHr, unit: "bpm" },
      { key: "steps", value: manualMetrics.steps, unit: "steps" },
      { key: "stress_score", value: manualMetrics.stressLevel, unit: "score" },
    ];

    // Calcular índices baseados nas métricas manuais
    const healthIndex = Math.round(
      (manualMetrics.sleepQuality * 4 + (100 - manualMetrics.restingHr) * 0.3 + manualMetrics.hrv * 0.5) / 5
    );
    const vitalityIndex = Math.round(
      (manualMetrics.steps / 100 + manualMetrics.sleepQuality * 3 + (10 - manualMetrics.stressLevel) * 2) / 5
    );
    const balanceIndex = Math.round(
      ((10 - manualMetrics.stressLevel) * 4 + manualMetrics.sleepQuality * 3 + manualMetrics.hrv * 0.3) / 5
    );

    const manualData: RingDaily = {
      dateISO: ringDaily.dateISO,
      dataQuality: "partial",
      healthIndex: Math.min(100, Math.max(0, healthIndex)),
      vitalityIndex: Math.min(100, Math.max(0, vitalityIndex)),
      balanceIndex: Math.min(100, Math.max(0, balanceIndex)),
      metrics,
    };

    onManualData?.(manualData);
    setShowManualInput(false);
  };

  return (
    <div className="bg-vyr-gray-900/50 backdrop-blur-xl border border-vyr-gray-500/20 rounded-2xl p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-vyr-white font-mono">Dados Fisiológicos</h3>
          <StatusPill variant="info">Beta</StatusPill>
        </div>
        <div className="flex gap-1.5 sm:gap-2 flex-wrap">
          <StatusPill variant={ringConnected ? "success" : "default"}>
            {ringConnected ? "Conectado" : "Offline"}
          </StatusPill>
          <StatusPill variant={qualityVariant}>
            {ringDaily.dataQuality}
          </StatusPill>
        </div>
      </div>

      {/* Modo de entrada manual */}
      {showManualInput ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-sm text-vyr-gray-300">
              <Watch className="w-4 h-4 inline mr-1.5" />
              Insira dados do seu wearable
            </p>
            <button 
              onClick={() => setShowManualInput(false)}
              className="p-1.5 rounded-lg hover:bg-vyr-gray-800/50 transition-colors"
            >
              <X className="w-4 h-4 text-vyr-gray-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Sono - horas */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-vyr-gray-400">Horas de sono</span>
                <span className="text-vyr-white font-mono">{manualMetrics.sleepHours}h</span>
              </div>
              <Slider
                value={[manualMetrics.sleepHours]}
                onValueChange={([v]) => setManualMetrics(p => ({ ...p, sleepHours: v }))}
                min={3}
                max={12}
                step={0.5}
                className="[&_[role=slider]]:bg-vyr-gray-100"
              />
            </div>

            {/* Qualidade do sono */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-vyr-gray-400">Qualidade do sono</span>
                <span className="text-vyr-white font-mono">{manualMetrics.sleepQuality}/10</span>
              </div>
              <Slider
                value={[manualMetrics.sleepQuality]}
                onValueChange={([v]) => setManualMetrics(p => ({ ...p, sleepQuality: v }))}
                min={1}
                max={10}
                step={1}
                className="[&_[role=slider]]:bg-vyr-gray-100"
              />
            </div>

            {/* HRV */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-vyr-gray-400">HRV (ms)</span>
                <span className="text-vyr-white font-mono">{manualMetrics.hrv}</span>
              </div>
              <Slider
                value={[manualMetrics.hrv]}
                onValueChange={([v]) => setManualMetrics(p => ({ ...p, hrv: v }))}
                min={15}
                max={100}
                step={1}
                className="[&_[role=slider]]:bg-vyr-gray-100"
              />
            </div>

            {/* FC repouso */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-vyr-gray-400">FC repouso (bpm)</span>
                <span className="text-vyr-white font-mono">{manualMetrics.restingHr}</span>
              </div>
              <Slider
                value={[manualMetrics.restingHr]}
                onValueChange={([v]) => setManualMetrics(p => ({ ...p, restingHr: v }))}
                min={40}
                max={100}
                step={1}
                className="[&_[role=slider]]:bg-vyr-gray-100"
              />
            </div>

            {/* Passos */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-vyr-gray-400">Passos</span>
                <span className="text-vyr-white font-mono">{manualMetrics.steps.toLocaleString()}</span>
              </div>
              <Slider
                value={[manualMetrics.steps]}
                onValueChange={([v]) => setManualMetrics(p => ({ ...p, steps: v }))}
                min={0}
                max={20000}
                step={500}
                className="[&_[role=slider]]:bg-vyr-gray-100"
              />
            </div>

            {/* Nível de estresse */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-vyr-gray-400">Nível de estresse</span>
                <span className="text-vyr-white font-mono">{manualMetrics.stressLevel}/10</span>
              </div>
              <Slider
                value={[manualMetrics.stressLevel]}
                onValueChange={([v]) => setManualMetrics(p => ({ ...p, stressLevel: v }))}
                min={1}
                max={10}
                step={1}
                className="[&_[role=slider]]:bg-vyr-gray-100"
              />
            </div>
          </div>

          <button 
            className="w-full px-4 py-3 rounded-xl text-sm font-medium bg-vyr-accent text-vyr-black hover:bg-vyr-accent/90 transition-all font-mono flex items-center justify-center gap-2"
            onClick={handleSaveManual}
          >
            <Check className="w-4 h-4" />
            Salvar dados
          </button>

          <p className="text-[10px] text-vyr-gray-500 text-center">
            Dados de Apple Watch, Garmin, Oura, Whoop ou outro wearable
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <StatusPill variant="info">Saúde</StatusPill>
            <StatusPill variant="info">Vitalidade</StatusPill>
            <StatusPill variant="info">Equilíbrio</StatusPill>
          </div>

          <div className="flex gap-1.5 sm:gap-2 flex-wrap mb-4 sm:mb-5">
            <button 
              className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-vyr-accent/20 text-vyr-accent border border-vyr-accent/30 hover:bg-vyr-accent/30 transition-all font-mono flex items-center gap-1.5" 
              onClick={() => setShowManualInput(true)}
            >
              <Edit3 className="w-3.5 h-3.5" />
              Manual
            </button>
            <button 
              className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-vyr-gray-900/50 text-vyr-gray-100 border border-vyr-gray-500/20 hover:bg-vyr-gray-900 transition-all font-mono" 
              onClick={onConnect}
            >
              {ringConnected ? "Reconectar" : "Conectar NODE"}
            </button>
            <button 
              className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-vyr-gray-900/50 text-vyr-gray-100 border border-vyr-gray-500/20 hover:bg-vyr-gray-900 transition-all font-mono" 
              onClick={onSyncPartial}
            >
              Sync parcial
            </button>
            <button 
              className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-vyr-gray-900/50 text-vyr-gray-100 border border-vyr-gray-500/20 hover:bg-vyr-gray-900 transition-all font-mono" 
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
              <p className="text-xs text-vyr-gray-500 mb-2">Métricas brutas</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {ringDaily.metrics.map((m, i) => (
                  <MetricCard key={i} metric={m} />
                ))}
              </div>
            </>
          )}

          <p className="text-[10px] text-vyr-gray-500 mt-3 sm:mt-4">
            Use dados manuais de wearables enquanto o VYR NODE não está disponível.
          </p>
        </>
      )}
    </div>
  );
}
