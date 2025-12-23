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
    <div className="grid lg:grid-cols-2 gap-5">
      {/* Config Ring */}
      <div className="glass-card p-5">
        <h3 className="font-semibold mb-3">Configurações — Ring</h3>

        {plan !== "pro" ? (
          <div className="p-4 rounded-xl bg-muted/30 border border-border">
            <p className="text-sm text-muted-foreground">
              🔒 Conexão com ring disponível no Plano Superior.
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs text-muted-foreground mb-4">
              Fluxo do SDK: permissões, pareamento, sync e revogação.
            </p>
            <div className="flex gap-2 flex-wrap">
              <button className="nzt-btn text-sm" onClick={onConnect}>
                {ringConnected ? "Reconectar" : "Conectar"}
              </button>
              <button className="nzt-btn text-sm" onClick={onDisconnect}>
                Desconectar
              </button>
              <button className="nzt-btn text-sm text-destructive" onClick={onClearData}>
                Limpar dados
              </button>
            </div>
          </>
        )}
      </div>

      {/* Config Baseline */}
      <div className="glass-card p-5">
        <h3 className="font-semibold mb-3">Configurações — Baseline</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Defina o baseline mínimo (ex.: 7 dias). Sem baseline, resultados são instáveis.
        </p>
        <div className="flex items-center gap-3">
          <StatusPill variant={baselineDays >= 7 ? "success" : "warning"}>
            Dias coletados: {baselineDays}/7
          </StatusPill>
          <StatusPill>Meta: 7 dias</StatusPill>
        </div>
      </div>
    </div>
  );
}
