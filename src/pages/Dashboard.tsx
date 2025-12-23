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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">NZT — Plataforma de Testes</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Básico: percepção. Superior: percepção + SmartData (J-Style).
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <StatusPill variant={plan === "pro" ? "info" : "default"}>
              Plano: {plan === "basic" ? "Básico" : "Superior"}
            </StatusPill>
            <StatusPill variant={baselineReady ? "success" : "warning"}>
              Baseline: {baselineReady ? "OK" : `em construção (${baselineDays}/7)`}
            </StatusPill>
            {plan === "pro" && (
              <>
                <StatusPill variant={ringConnected ? "success" : "default"}>
                  Ring: {ringConnected ? "conectado" : "desconectado"}
                </StatusPill>
                <StatusPill>SmartData: {ringDaily.dataQuality}</StatusPill>
              </>
            )}
          </div>
        </div>

        <PlanSelector plan={plan} onChange={setPlan} />
      </div>

      {/* Navigation */}
      <TabNav active={tab} onChange={setTab} />

      {/* HOME TAB */}
      {tab === "home" && (
        <div className="space-y-5">
          <div className="grid md:grid-cols-3 gap-4">
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
        <div className="grid md:grid-cols-3 gap-5">
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
      <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto pt-6 border-t border-border/30">
        Schema-agnostic: renderiza métricas conforme chegam. Gated: insights só liberam com qualidade mínima de dados.
      </p>
    </div>
  );
}
