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
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base text-white mb-2 sm:mb-3">Config — Ring</h3>

        {plan !== "pro" ? (
          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-700/30">
            <p className="text-xs sm:text-sm text-slate-400">
              🔒 Conexão com ring disponível no Plano Superior.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[10px] sm:text-xs text-slate-400 mb-3 sm:mb-4">
              Fluxo do SDK: permissões, pareamento, sync e revogação.
            </p>
            <div className="flex gap-1.5 sm:gap-2 flex-wrap">
              <button 
                className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:bg-slate-700 transition-all" 
                onClick={onConnect}
              >
                {ringConnected ? "Reconectar" : "Conectar"}
              </button>
              <button 
                className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:bg-slate-700 transition-all" 
                onClick={onDisconnect}
              >
                Desconectar
              </button>
              <button 
                className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20 transition-all" 
                onClick={onClearData}
              >
                Limpar
              </button>
            </div>
          </>
        )}
      </div>

      {/* Config Baseline */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base text-white mb-2 sm:mb-3">Config — Baseline</h3>
        <p className="text-[10px] sm:text-xs text-slate-400 mb-3 sm:mb-4">
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
