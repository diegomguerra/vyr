import { useMemo, useState } from "react";
import {
  TabNav,
  Tab,
  PlanSelector,
  StatusPill,
  DoseCard,
  DoseCheckinPanel,
  SmartDataPanel,
  ProgressPanel,
  InsightsPanel,
  SettingsPanel,
} from "@/components/mvp";
import { CognitiveDashboard } from "@/components/cognitive";
import type { Plan, DoseType, DoseCheckin, RingDaily } from "@/lib/mvp-types";

export default function Dashboard() {
  const [plan, setPlan] = useState<Plan>("basic");
  const [tab, setTab] = useState<Tab>("home");

  const today = new Date();
  const todayISO = today.toISOString().slice(0, 10);

  const [checkins, setCheckins] = useState<DoseCheckin[]>([]);
  const [ringConnected, setRingConnected] = useState(false);
  const [activeCheckin, setActiveCheckin] = useState<DoseType | null>(null);

  const [ringDaily, setRingDaily] = useState<RingDaily>({
    dateISO: todayISO,
    dataQuality: "missing",
  });

  const upsertCheckin = (c: DoseCheckin) => {
    setCheckins((prev) => {
      const idx = prev.findIndex((x) => x.dateISO === c.dateISO && x.dose === c.dose);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = c;
        return copy;
      }
      return [...prev, c];
    });
  };

  const baselineDays = useMemo(() => new Set(checkins.map((c) => c.dateISO)).size, [checkins]);
  const baselineReady = baselineDays >= 7;

  const todayCheckins = checkins.filter((c) => c.dateISO === todayISO);
  const status = {
    boot: todayCheckins.some((c) => c.dose === "boot"),
    hold: todayCheckins.some((c) => c.dose === "hold"),
    clear: todayCheckins.some((c) => c.dose === "clear"),
  };

  const getExistingCheckin = (dose: DoseType) => {
    return checkins.find((c) => c.dateISO === todayISO && c.dose === dose);
  };

  const handleSyncPartial = () => {
    setRingDaily({
      dateISO: todayISO,
      dataQuality: "partial",
      healthIndex: 71,
      vitalityIndex: 64,
      balanceIndex: 58,
      metrics: [
        { key: "heart_rate_avg", value: 62, unit: "bpm" },
        { key: "stress_score", value: 43, unit: "score" },
      ],
    });
  };

  const handleSyncFull = () => {
    setRingDaily({
      dateISO: todayISO,
      dataQuality: "good",
      healthIndex: 79,
      vitalityIndex: 73,
      balanceIndex: 69,
      metrics: [
        { key: "sleep_total", value: 430, unit: "min" },
        { key: "hrv", value: 52, unit: "ms" },
        { key: "resting_hr", value: 56, unit: "bpm" },
        { key: "spo2_avg", value: 97, unit: "%" },
        { key: "temp_avg", value: 36.4, unit: "°C" },
        { key: "steps", value: 7200, unit: "steps" },
        { key: "stress_score", value: 28, unit: "score" },
      ],
    });
  };

  const handleClearData = () => {
    setRingDaily({ dateISO: todayISO, dataQuality: "missing" });
    setRingConnected(false);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg sm:text-2xl font-bold text-vyr-white font-mono">Painel de Gestão Cognitiva</h1>
            <p className="text-vyr-gray-400 text-xs sm:text-sm mt-1">
              Registre suas doses e acompanhe sua evolução
            </p>
          </div>
          <div className="flex-shrink-0">
            <PlanSelector plan={plan} onChange={setPlan} />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <StatusPill variant={plan === "pro" ? "info" : "default"}>
            {plan === "basic" ? "Básico" : "Superior"}
          </StatusPill>
          <StatusPill variant={baselineReady ? "success" : "warning"}>
            Baseline: {baselineReady ? "OK" : `${baselineDays}/7`}
          </StatusPill>
          {plan === "pro" && (
            <>
              <StatusPill variant={ringConnected ? "success" : "default"}>
                NODE: {ringConnected ? "on" : "off"}
              </StatusPill>
              <StatusPill>Data: {ringDaily.dataQuality}</StatusPill>
            </>
          )}
        </div>
      </div>

      {/* Navigation */}
      <TabNav active={tab} onChange={setTab} />

      {/* HOME TAB */}
      {tab === "home" && (
        <div className="space-y-4 sm:space-y-5">
          {/* Modal de check-in ativo */}
          {activeCheckin && (
            <DoseCheckinPanel
              dose={activeCheckin}
              dateISO={todayISO}
              onSave={upsertCheckin}
              onClose={() => setActiveCheckin(null)}
              existingCheckin={getExistingCheckin(activeCheckin)}
            />
          )}

          {/* Cards de dose - só mostra quando não tem modal ativo */}
          {!activeCheckin && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <DoseCard
                  dose="boot"
                  done={status.boot}
                  onRegister={() => setActiveCheckin("boot")}
                />
                <DoseCard
                  dose="hold"
                  done={status.hold}
                  onRegister={() => setActiveCheckin("hold")}
                />
                <DoseCard
                  dose="clear"
                  done={status.clear}
                  onRegister={() => setActiveCheckin("clear")}
                />
              </div>

              {plan === "pro" && (
              <SmartDataPanel
                ringDaily={ringDaily}
                ringConnected={ringConnected}
                onConnect={() => setRingConnected(true)}
                onSyncPartial={handleSyncPartial}
                onSyncFull={handleSyncFull}
                onManualData={setRingDaily}
              />
              )}
            </>
          )}
        </div>
      )}

      {/* COGNITIVE TAB - New Dashboard */}
      {tab === "cognitive" && (
        <CognitiveDashboard checkins={checkins} />
      )}

      {/* PROGRESS TAB */}
      {tab === "progress" && (
        <ProgressPanel plan={plan} ringDaily={ringDaily} checkins={checkins} />
      )}

      {/* INSIGHTS TAB */}
      {tab === "insights" && (
        <InsightsPanel plan={plan} ringDaily={ringDaily} baselineReady={baselineReady} />
      )}

      {/* SETTINGS TAB */}
      {tab === "settings" && (
        <SettingsPanel
          plan={plan}
          ringConnected={ringConnected}
          baselineDays={baselineDays}
          onConnect={() => setRingConnected(true)}
          onDisconnect={() => setRingConnected(false)}
          onClearData={handleClearData}
        />
      )}

      {/* Footer note */}
      <p className="text-xs text-vyr-gray-400 text-center max-w-2xl mx-auto pt-6 border-t border-vyr-gray-600/30">
        Dados são processados localmente. Insights liberados com qualidade mínima de dados.
      </p>
    </div>
  );
}
