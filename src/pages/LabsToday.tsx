import { useNavigate } from "react-router-dom";
import { PrimaryCard } from "@/components/labs";
import { useLabsEntries } from "@/hooks/use-labs-entries";
import { buildDailyState } from "@/lib/labs-engine";
import type { RitualChecklist } from "@/lib/labs-types";

export default function LabsToday() {
  const navigate = useNavigate();
  const { entries, setEntries } = useLabsEntries();
  const todayISO = new Date().toISOString().slice(0, 10);
  const todayEntry = entries.find((entry) => entry.dateISO === todayISO);

  const dailyState = buildDailyState(entries);
  const latestInputs = todayEntry?.inputs;
  const cargaPercebida =
    latestInputs?.dayLoad === "alta" ? "Alta" : latestInputs?.dayLoad === "baixa" ? "Baixa" : "Média";
  const clarezaMental =
    latestInputs?.decisionClarity === "alta"
      ? "Fluida"
      : latestInputs?.decisionClarity === "baixa"
        ? "Em recuperação"
        : "Estável";
  const consistencia7 =
    entries.filter((entry) => {
      const date = new Date(entry.dateISO);
      const diff = (new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
      return diff <= 7;
    }).length ?? 0;

  const checklist = todayEntry?.checklist ?? {
    tookSachet: false,
    didAction: false,
    registeredState: false,
  };

  const updateChecklist = (next: RitualChecklist) => {
    if (!todayEntry) return;
    setEntries((prev) =>
      prev.map((entry) => (entry.dateISO === todayISO ? { ...entry, checklist: next } : entry))
    );
  };

  return (
    <div className="space-y-5">
      <PrimaryCard state={dailyState} onRitual={() => navigate("/app/ritual")} />

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="vyr-card-graphite p-4">
          <p className="text-xs font-mono text-vyr-gray-500">Carga percebida</p>
          <p className="text-lg font-semibold text-vyr-white">{cargaPercebida}</p>
        </div>
        <div className="vyr-card-graphite p-4">
          <p className="text-xs font-mono text-vyr-gray-500">Clareza mental</p>
          <p className="text-lg font-semibold text-vyr-white">{clarezaMental}</p>
        </div>
        <div className="vyr-card-graphite p-4">
          <p className="text-xs font-mono text-vyr-gray-500">Consistência (7 dias)</p>
          <p className="text-lg font-semibold text-vyr-white">{consistencia7} / 7 dias</p>
        </div>
      </div>

      <div className="vyr-card-graphite p-5 sm:p-6 space-y-3">
        <h3 className="text-sm font-mono text-vyr-gray-400">Ritual de hoje</h3>
        {[
          { key: "tookSachet", label: "Tomei o sachê do período" },
          { key: "didAction", label: "Fiz a ação leve sugerida" },
          { key: "registeredState", label: "Registrei meu estado" },
        ].map((item) => (
          <label
            key={item.key}
            className={`flex items-center gap-3 text-sm ${todayEntry ? "text-vyr-gray-300" : "text-vyr-gray-500"}`}
          >
            <input
              type="checkbox"
              disabled={!todayEntry}
              checked={checklist[item.key as keyof RitualChecklist]}
              onChange={(event) =>
                updateChecklist({
                  ...checklist,
                  [item.key]: event.target.checked,
                } as RitualChecklist)
              }
              className="h-4 w-4 rounded border-vyr-gray-600 bg-vyr-gray-900"
            />
            {item.label}
          </label>
        ))}
        {!todayEntry && (
          <p className="text-xs text-vyr-gray-500 font-mono">
            Faça seu alinhamento para liberar o checklist.
          </p>
        )}
      </div>
    </div>
  );
}
