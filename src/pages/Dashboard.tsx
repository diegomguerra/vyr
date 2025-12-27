import { useMemo, useState } from "react";
import {
  TabNav,
  Tab,
  PlanSelector,
  StatusPill,
  TodayCard,
  CheckinPanel,
  SmartDataPanel,
  ProgressPanel,
  InsightsPanel,
  SettingsPanel,
} from "@/components/mvp";
import type { Plan, Period, Checkin, RingDaily } from "@/lib/mvp-types";

export default function Dashboard() {
  const [plan, setPlan] = useState<Plan>("basic");
  const [tab, setTab] = useState<Tab>("home");

  const today = new Date();
  const todayISO = today.toISOString().slice(0, 10);

  const [checkins, setCheckins] = useState<Checkin[]>([]);
  const [ringConnected, setRingConnected] = useState(false);

  const [ringDaily, setRingDaily] = useState<RingDaily>({
    dateISO: todayISO,
    dataQuality: "missing",
  });

  const upsertCheckin = (c: Checkin) => {
    setCheckins((prev) => {
      const idx = prev.findIndex((x) => x.dateISO === c.dateISO && x.period === c.period);
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
    day: todayCheckins.some((c) => c.period === "day"),
    afternoon: todayCheckins.some((c) => c.period === "afternoon"),
    night: todayCheckins.some((c) => c.period === "night"),
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
              Acompanhe sua variação e evolução semanal
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
        <div className="space-y-3 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <TodayCard
              period="day"
              done={status.day}
              subtitle="Ativação & Clareza"
              onOpenCheckin={() => setTab("checkin")}
            />
            <TodayCard
              period="afternoon"
              done={status.afternoon}
              subtitle="Sustentação & Resiliência"
              onOpenCheckin={() => setTab("checkin")}
            />
            <TodayCard
              period="night"
              done={status.night}
              subtitle="Recuperação Cognitiva"
              onOpenCheckin={() => setTab("checkin")}
            />
          </div>

          {plan === "pro" && (
            <SmartDataPanel
              ringDaily={ringDaily}
              ringConnected={ringConnected}
              onConnect={() => setRingConnected(true)}
              onSyncPartial={handleSyncPartial}
              onSyncFull={handleSyncFull}
            />
          )}
        </div>
      )}

      {/* CHECK-IN TAB */}
      {tab === "checkin" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {(["day", "afternoon", "night"] as Period[]).map((p) => (
            <CheckinPanel key={p} period={p} dateISO={todayISO} onSave={upsertCheckin} />
          ))}
        </div>
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
