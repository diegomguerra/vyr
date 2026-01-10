import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/nzt";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { getFeatureFlags } from "@/lib/feature-flags";
import type { NodeDailySummaryDTO, RitualEntryDTO } from "@/lib/labs-types";
import { getNodeDailySummary } from "@/lib/node-provider";
import { getRitualEntryByDate, upsertRitualEntry } from "@/lib/ritual-storage";

const buildPrefillFromNode = (node?: NodeDailySummaryDTO) => {
  if (!node) return null;
  const mentalLightness = node.energyTag === "HIGH" ? 4 : node.energyTag === "LOW" ? 2 : 3;
  const decisionClarity =
    node.hrvTag === "ABOVE_BASELINE" ? 4 : node.hrvTag === "LOWER_THAN_BASELINE" ? 2 : 3;
  const perceivedLoad =
    node.movementTag === "HIGH"
      ? "HIGH"
      : node.movementTag === "LOW"
        ? "LOW"
        : "MEDIUM";
  return { mentalLightness, decisionClarity, perceivedLoad };
};

export default function LabsRitual() {
  const todayISO = new Date().toISOString().slice(0, 10);
  const flags = getFeatureFlags();
  const { toast } = useToast();
  const [nodeSummary, setNodeSummary] = useState<NodeDailySummaryDTO | undefined>(undefined);

  const [mentalLightness, setMentalLightness] = useState<1 | 2 | 3 | 4 | 5>(3);
  const [decisionClarity, setDecisionClarity] = useState<1 | 2 | 3 | 4 | 5>(3);
  const [perceivedLoad, setPerceivedLoad] = useState<"LOW" | "MEDIUM" | "HIGH">("MEDIUM");

  useEffect(() => {
    if (flags.isDemoMode) return;
    const existing = getRitualEntryByDate(todayISO);
    if (existing) {
      setMentalLightness(existing.mentalLightness);
      setDecisionClarity(existing.decisionClarity);
      setPerceivedLoad(existing.perceivedLoad);
    }
  }, [flags.isDemoMode, todayISO]);

  useEffect(() => {
    if (!flags.nodeEnabled || flags.isDemoMode) return;
    getNodeDailySummary(todayISO).then(setNodeSummary);
  }, [flags.nodeEnabled, flags.isDemoMode, todayISO]);

  useEffect(() => {
    if (!flags.nodePrefillRitual || !nodeSummary || flags.isDemoMode) return;
    const existing = getRitualEntryByDate(todayISO);
    if (existing) return;
    const suggestion = buildPrefillFromNode(nodeSummary);
    if (!suggestion) return;
    setMentalLightness(suggestion.mentalLightness);
    setDecisionClarity(suggestion.decisionClarity);
    setPerceivedLoad(suggestion.perceivedLoad);
  }, [flags.nodePrefillRitual, nodeSummary, todayISO]);

  const suggestion = useMemo(() => buildPrefillFromNode(nodeSummary), [nodeSummary]);

  const handleSave = () => {
    if (flags.isDemoMode) {
      toast({
        title: "Modo demo ativo",
        description: "Dados simulados para demonstração. O ritual não foi salvo.",
      });
      return;
    }
    const entry: RitualEntryDTO = {
      dateISO: todayISO,
      mentalLightness,
      decisionClarity,
      perceivedLoad,
      completedAtISO: new Date().toISOString(),
    };
    upsertRitualEntry(entry);
    toast({
      title: "Ritual registrado",
      description: "Ritual registrado. Leitura do dia atualizada.",
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-vyr-gray-500">Ritual (≤60s)</p>
        <h1 className="text-xl sm:text-2xl font-semibold text-vyr-white">
          Check-in rápido para atualizar seu estado
        </h1>
        <p className="text-xs text-vyr-gray-400">
          Três inputs. Registro local. Sem fricção.
        </p>
        {flags.isDemoMode && (
          <p className="text-xs text-vyr-accent uppercase tracking-[0.2em]">
            Dados simulados para demonstração
          </p>
        )}
      </header>

      {flags.nodePrefillRitual && suggestion && (
        <Card title="Sugestão leve do Node" subtitle="Apenas apoio opcional">
          <p className="text-sm text-vyr-gray-300">
            Baseado nos sinais do Node, sugerimos leveza {suggestion.mentalLightness}/5, clareza{" "}
            {suggestion.decisionClarity}/5 e carga{" "}
            {suggestion.perceivedLoad === "LOW" ? "baixa" : suggestion.perceivedLoad === "HIGH" ? "alta" : "média"}.
          </p>
        </Card>
      )}

      <Card title="Leveza mental" subtitle="Como você está percebendo o nível de leveza">
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setMentalLightness(value as 1 | 2 | 3 | 4 | 5)}
              className={`rounded-md border px-3 py-3 text-sm font-semibold transition ${
                mentalLightness === value
                  ? "border-vyr-accent bg-vyr-accent/20 text-vyr-white"
                  : "border-vyr-graphite/60 text-vyr-gray-300 hover:border-vyr-gray-500"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </Card>

      <Card title="Clareza de decisão" subtitle="O quanto as decisões parecem claras">
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setDecisionClarity(value as 1 | 2 | 3 | 4 | 5)}
              className={`rounded-md border px-3 py-3 text-sm font-semibold transition ${
                decisionClarity === value
                  ? "border-vyr-accent bg-vyr-accent/20 text-vyr-white"
                  : "border-vyr-graphite/60 text-vyr-gray-300 hover:border-vyr-gray-500"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </Card>

      <Card title="Carga percebida" subtitle="Como a carga do dia está aparecendo">
        <div className="grid grid-cols-3 gap-2">
          {(["LOW", "MEDIUM", "HIGH"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setPerceivedLoad(value)}
              className={`rounded-md border px-3 py-3 text-sm font-semibold transition ${
                perceivedLoad === value
                  ? "border-vyr-accent bg-vyr-accent/20 text-vyr-white"
                  : "border-vyr-graphite/60 text-vyr-gray-300 hover:border-vyr-gray-500"
              }`}
            >
              {value === "LOW" ? "Baixa" : value === "HIGH" ? "Alta" : "Média"}
            </button>
          ))}
        </div>
      </Card>

      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={flags.isDemoMode}
          className="bg-vyr-white text-vyr-black hover:bg-vyr-gray-100"
        >
          {flags.isDemoMode ? "Modo demo ativo" : "Salvar ritual"}
        </Button>
      </div>
    </div>
  );
}
