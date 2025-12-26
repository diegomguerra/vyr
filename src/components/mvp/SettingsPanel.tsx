import type { Plan, RingDaily } from "@/lib/mvp-types";
import { StatusPill } from "./StatusPill";

interface SettingsPanelProps {
  plan: Plan;
  ringConnected: boolean;
  baselineDays: number;
  onConnect: () => void;
  onDisconnect: () => void;
  onClearData: () => void;
}

export function SettingsPanel({
  plan,
  ringConnected,
  baselineDays,
  onConnect,
  onDisconnect,
  onClearData,
}: SettingsPanelProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5">
      {/* Config Ring */}
      <div className="vyr-card-graphite p-4 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base text-vyr-white mb-2 sm:mb-3 font-mono">Config — Ring</h3>

        {plan !== "pro" ? (
          <div className="p-3 sm:p-4 rounded-sm bg-vyr-gray-900/50 border border-vyr-gray-700/30">
            <p className="text-xs sm:text-sm text-vyr-gray-400 font-mono">
              🔒 Conexão com ring disponível no Plano Superior.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[10px] sm:text-xs text-vyr-gray-400 mb-3 sm:mb-4 font-mono">
              Fluxo do SDK: permissões, pareamento, sync e revogação.
            </p>
            <div className="flex gap-1.5 sm:gap-2 flex-wrap">
              <button 
                className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-sm text-xs sm:text-sm font-medium font-mono bg-vyr-gray-700/50 text-vyr-gray-300 border border-vyr-gray-600/50 hover:bg-vyr-gray-700 transition-all" 
                onClick={onConnect}
              >
                {ringConnected ? "Reconectar" : "Conectar"}
              </button>
              <button 
                className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-sm text-xs sm:text-sm font-medium font-mono bg-vyr-gray-700/50 text-vyr-gray-300 border border-vyr-gray-600/50 hover:bg-vyr-gray-700 transition-all" 
                onClick={onDisconnect}
              >
                Desconectar
              </button>
              <button 
                className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-sm text-xs sm:text-sm font-medium font-mono bg-red-500/10 text-red-400/80 border border-red-500/30 hover:bg-red-500/20 transition-all" 
                onClick={onClearData}
              >
                Limpar
              </button>
            </div>
          </>
        )}
      </div>

      {/* Config Baseline */}
      <div className="vyr-card-graphite p-4 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base text-vyr-white mb-2 sm:mb-3 font-mono">Config — Baseline</h3>
        <p className="text-[10px] sm:text-xs text-vyr-gray-400 mb-3 sm:mb-4 font-mono">
          Sem baseline, resultados são instáveis.
        </p>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <StatusPill variant={baselineDays >= 7 ? "success" : "warning"}>
            Dias: {baselineDays}/7
          </StatusPill>
          <StatusPill>Meta: 7 dias</StatusPill>
        </div>
      </div>
    </div>
  );
}
