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
      <div className="glass-card p-3 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Config — Ring</h3>

        {plan !== "pro" ? (
          <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-muted/30 border border-border">
            <p className="text-xs sm:text-sm text-muted-foreground">
              🔒 Conexão com ring disponível no Plano Superior.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4">
              Fluxo do SDK: permissões, pareamento, sync e revogação.
            </p>
            <div className="flex gap-1.5 sm:gap-2 flex-wrap">
              <button className="nzt-btn text-xs sm:text-sm px-2.5 py-2 sm:px-4 sm:py-3" onClick={onConnect}>
                {ringConnected ? "Reconectar" : "Conectar"}
              </button>
              <button className="nzt-btn text-xs sm:text-sm px-2.5 py-2 sm:px-4 sm:py-3" onClick={onDisconnect}>
                Desconectar
              </button>
              <button className="nzt-btn text-xs sm:text-sm px-2.5 py-2 sm:px-4 sm:py-3 text-destructive" onClick={onClearData}>
                Limpar
              </button>
            </div>
          </>
        )}
      </div>

      {/* Config Baseline */}
      <div className="glass-card p-3 sm:p-5">
        <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Config — Baseline</h3>
        <p className="text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4">
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
