import { useNavigate } from "react-router-dom";
import { PrimaryCard } from "@/components/labs";
import { useLabsEntries } from "@/hooks/use-labs-entries";
import { buildDailyGuidance } from "@/lib/labs-engine";
import { FEATURES } from "@/lib/flags";
import type { RitualChecklist } from "@/lib/labs-types";

const defaultInputs = {
  mentalEase: "media",
  decisionClarity: "media",
  dayLoad: "media",
} as const;

export default function LabsToday() {
  const navigate = useNavigate();
  const { entries, setEntries } = useLabsEntries();
  const todayISO = new Date().toISOString().slice(0, 10);
  const todayEntry = entries.find((entry) => entry.dateISO === todayISO);

  const guidance =
    todayEntry?.guidance ??
    buildDailyGuidance({
      ...defaultInputs,
      nodeEnabled: FEATURES.FEATURE_NODE_ENABLED,
    });

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
      <PrimaryCard guidance={guidance} onRitual={() => navigate("/app/ritual")} />

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

      <p className="text-xs text-vyr-gray-500 font-mono">
        Estado → direção → ação leve. Sem promessas, só alinhamento.
      </p>
    </div>
  );
}
