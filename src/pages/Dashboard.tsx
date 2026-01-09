import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Lightbulb, Repeat, Sparkles, TrendingUp } from "lucide-react";
import { TabNav } from "@/components/mvp";
import type { Tab, TabConfig } from "@/components/mvp";
import { cn } from "@/lib/utils";
import { FEATURES } from "@/lib/flags";
import type { DailyGuidanceDTO, FluidezState, DayDirection } from "@/lib/labs-dtos";
import { buildDailyGuidance, buildObservationDTO } from "@/lib/labs-engine";

type RitualAnswer = {
  id: string;
  dateISO: string;
  mentalEnergy: "baixa" | "media" | "alta";
  decisionFeel: "pesada" | "neutra" | "clara";
  guidance: DailyGuidanceDTO;
};

const fluidezLabel: Record<FluidezState, string> = {
  REDUZIDA: "Reduzida",
  ESTAVEL: "Estável",
  ELEVADA: "Elevada",
};

const directionLabel: Record<DayDirection, string> = {
  REDUZIR_CARGA: "Reduzir carga",
  SUSTENTAR: "Sustentar",
  AVANCAR_COM_LEVEZA: "Avançar com leveza",
};

const directionLine: Record<DayDirection, string> = {
  REDUZIR_CARGA: "Hoje vale proteger espaço e reduzir estímulo.",
  SUSTENTAR: "Hoje vale manter o ritmo sem apertar demais.",
  AVANCAR_COM_LEVEZA: "Hoje vale avançar com leveza e foco.",
};

const tabsConfig = (insightsEnabled: boolean, progressEnabled: boolean): TabConfig[] =>
  [
    { key: "home", label: "Estado do dia", Icon: Sparkles },
    { key: "ritual", label: "Alinhamento", Icon: CheckCircle2 },
    progressEnabled ? { key: "progress", label: "Progresso", Icon: TrendingUp } : null,
    insightsEnabled ? { key: "insights", label: "Insights", Icon: Lightbulb } : null,
  ].filter((tab): tab is TabConfig => tab !== null);

export default function Dashboard() {
  const [tab, setTab] = useState<Tab>("home");
  const [rituals, setRituals] = useState<RitualAnswer[]>([]);
  const [mentalEnergy, setMentalEnergy] = useState<RitualAnswer["mentalEnergy"]>("media");
  const [decisionFeel, setDecisionFeel] = useState<RitualAnswer["decisionFeel"]>("neutra");

  const todayISO = new Date().toISOString().slice(0, 10);
  const todayRitual = rituals.find((r) => r.dateISO === todayISO);

  const guidance = useMemo(
    () => buildDailyGuidance({ mentalEnergy, decisionFeel, nodeEnabled: FEATURES.FEATURE_NODE_ENABLED }),
    [mentalEnergy, decisionFeel]
  );

  const observationDTO = useMemo(() => buildObservationDTO(rituals), [rituals]);
  const insightsReady = rituals.length >= 5;

  const tabs = tabsConfig(FEATURES.FEATURE_INSIGHTS_ENABLED && insightsReady, FEATURES.FEATURE_PROGRESS_VIEW);

  const handleRitualSubmit = () => {
    const entry: RitualAnswer = {
      id: crypto.randomUUID(),
      dateISO: todayISO,
      mentalEnergy,
      decisionFeel,
      guidance,
    };
    setRituals((prev) => {
      const next = prev.filter((item) => item.dateISO !== todayISO);
      return [entry, ...next].slice(0, 14);
    });
    setTab("home");
  };

  const renderHome = () => {
    const current = todayRitual?.guidance ?? guidance;
    return (
      <div className="space-y-5">
        <div className="vyr-card-graphite p-5 sm:p-6">
          <p className="text-xs font-mono text-vyr-gray-400">Estado do dia</p>
          <h2 className="text-xl sm:text-2xl font-semibold text-vyr-white mt-2">
            Fluidez hoje: {fluidezLabel[current.fluidez]}
          </h2>
          <p className="text-sm sm:text-base text-vyr-gray-400 mt-2">
            {directionLine[current.direction]}
          </p>
          <button
            type="button"
            onClick={() => setTab("ritual")}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-vyr-black bg-vyr-white hover:bg-vyr-gray-100 px-4 py-2 rounded-sm"
          >
            Alinhar agora
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  const renderRitual = () => (
    <div className="space-y-5">
      <div className="vyr-card-graphite p-5 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-vyr-white">Alinhamento rápido</h2>
        <p className="text-xs sm:text-sm text-vyr-gray-400 mt-1">
          Responda em menos de 60s. O sistema aprende com o seu ritmo.
        </p>
        <div className="mt-5 space-y-5">
          <div>
            <p className="text-xs font-mono text-vyr-gray-400 mb-2">Como está sua energia mental?</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "baixa", label: "Baixa" },
                { value: "media", label: "Média" },
                { value: "alta", label: "Alta" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setMentalEnergy(opt.value as RitualAnswer["mentalEnergy"])}
                  className={cn(
                    "px-3 py-2 text-xs sm:text-sm rounded-sm border font-medium",
                    mentalEnergy === opt.value
                      ? "border-vyr-accent/40 bg-vyr-accent/10 text-vyr-white"
                      : "border-vyr-gray-700/60 text-vyr-gray-400 hover:text-vyr-white hover:border-vyr-gray-500"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-mono text-vyr-gray-400 mb-2">Como a decisão parece hoje?</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "pesada", label: "Pesada" },
                { value: "neutra", label: "Neutra" },
                { value: "clara", label: "Clara" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setDecisionFeel(opt.value as RitualAnswer["decisionFeel"])}
                  className={cn(
                    "px-3 py-2 text-xs sm:text-sm rounded-sm border font-medium",
                    decisionFeel === opt.value
                      ? "border-vyr-accent/40 bg-vyr-accent/10 text-vyr-white"
                      : "border-vyr-gray-700/60 text-vyr-gray-400 hover:text-vyr-white hover:border-vyr-gray-500"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-sm border border-vyr-gray-700/60 p-4 bg-vyr-gray-900/40">
          <p className="text-xs font-mono text-vyr-gray-500">Saída única</p>
          <p className="text-lg font-semibold text-vyr-white mt-1">{directionLabel[guidance.direction]}</p>
          <p className="text-sm text-vyr-gray-400 mt-1">{guidance.confirmation}</p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-xs text-vyr-gray-500 font-mono">O sistema segue aprendendo com você.</p>
          <button
            type="button"
            onClick={handleRitualSubmit}
            className="inline-flex items-center gap-2 text-sm font-medium text-vyr-black bg-vyr-white hover:bg-vyr-gray-100 px-4 py-2 rounded-sm"
          >
            Concluir
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderProgress = () => {
    const sorted = [...rituals].sort((a, b) => (a.dateISO < b.dateISO ? -1 : 1));
    const recent = sorted.slice(-7);
    return (
      <div className="space-y-5">
        <div className="vyr-card-graphite p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-vyr-white">Progresso</h2>
          <p className="text-xs sm:text-sm text-vyr-gray-400 mt-1">
            O objetivo não é subir sempre. É reduzir dias de fricção.
          </p>
          <div className="mt-5 space-y-3">
            {recent.length === 0 ? (
              <p className="text-sm text-vyr-gray-500">Sem registros recentes.</p>
            ) : (
              recent.map((entry) => (
                <div key={entry.id} className="flex items-center justify-between text-sm">
                  <span className="text-vyr-gray-400">{entry.dateISO}</span>
                  <span className="text-vyr-white">{fluidezLabel[entry.guidance.fluidez]}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderInsights = () => {
    if (!FEATURES.FEATURE_INSIGHTS_ENABLED) {
      return (
        <div className="vyr-card-graphite p-5 sm:p-6">
          <p className="text-sm text-vyr-gray-400">Insights estão desabilitados neste momento.</p>
        </div>
      );
    }
    if (!insightsReady) {
      return (
        <div className="vyr-card-graphite p-5 sm:p-6">
          <p className="text-sm text-vyr-gray-400">
            Insights aparecem após um padrão mínimo de 5 check-ins.
          </p>
        </div>
      );
    }
    return (
      <div className="vyr-card-graphite p-5 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-vyr-white">Insight</h2>
        <p className="text-sm text-vyr-gray-400 mt-2">
          Seu alinhamento tende a ficar mais estável quando o ritual acontece no mesmo período do dia.
        </p>
      </div>
    );
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="space-y-2">
        <h1 className="text-lg sm:text-2xl font-bold text-vyr-white font-mono">VYR Labs</h1>
        <p className="text-xs sm:text-sm text-vyr-gray-400">
          Estado → direção → ação leve. Sem promessas, só alinhamento.
        </p>
      </div>

      <TabNav active={tab} onChange={(next) => setTab(next)} tabs={tabs} />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-4">
          {tab === "home" && renderHome()}
          {tab === "ritual" && renderRitual()}
          {tab === "progress" && FEATURES.FEATURE_PROGRESS_VIEW && renderProgress()}
          {tab === "insights" && renderInsights()}
        </div>

        {FEATURES.FEATURE_OBSERVATION_LAYER && (
          <aside className="hidden lg:flex flex-col gap-4">
            <div className="vyr-card-graphite p-4 border border-vyr-gray-700/60">
              <p className="text-xs font-mono text-vyr-gray-500">Observações do sistema</p>
              <p className="text-xs text-vyr-gray-400 mt-1">
                Para observação, não para decisão diária.
              </p>
            </div>

            <div className="vyr-card-graphite p-4">
              <p className="text-xs font-mono text-vyr-gray-500 mb-2">Tendência de fluidez</p>
              <p className="text-sm text-vyr-white">{observationDTO.fluidezTrend}</p>
            </div>

            <div className="vyr-card-graphite p-4">
              <p className="text-xs font-mono text-vyr-gray-500 mb-2">Constância</p>
              <p className="text-sm text-vyr-white">{observationDTO.constancySummary}</p>
              <div className="mt-3 flex gap-2">
                {observationDTO.weekBars.map((bar, idx) => (
                  <div
                    key={`${bar}-${idx}`}
                    className={cn(
                      "h-2 flex-1 rounded-full",
                      bar === "alinhado" ? "bg-vyr-accent/70" : "bg-vyr-gray-700/70"
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="vyr-card-graphite p-4">
              <p className="text-xs font-mono text-vyr-gray-500 mb-2">Sinais do sistema</p>
              <div className="space-y-2 text-sm text-vyr-white">
                {observationDTO.signals.map((signal) => (
                  <div key={signal} className="flex items-center gap-2">
                    <Repeat className="w-4 h-4 text-vyr-gray-400" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            {observationDTO.context && (
              <div className="vyr-card-graphite p-4">
                <p className="text-xs font-mono text-vyr-gray-500 mb-2">Contexto</p>
                <p className="text-sm text-vyr-white">{observationDTO.context}</p>
              </div>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}
