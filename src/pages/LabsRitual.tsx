import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RitualForm } from "@/components/labs";
import { useLabsEntries } from "@/hooks/use-labs-entries";
import { buildDailyGuidance } from "@/lib/labs-engine";
import { FEATURES } from "@/lib/flags";
import { createId } from "@/lib/id";
import type { RitualInputs, RitualEntry } from "@/lib/labs-types";

const initialInputs: RitualInputs = {
  mentalEase: "media",
  decisionClarity: "media",
  dayLoad: "media",
};

export default function LabsRitual() {
  const navigate = useNavigate();
  const { setEntries } = useLabsEntries();
  const [inputs, setInputs] = useState<RitualInputs>(initialInputs);

  const guidance = buildDailyGuidance({ ...inputs, nodeEnabled: FEATURES.FEATURE_NODE_ENABLED });

  const handleSubmit = () => {
    const todayISO = new Date().toISOString().slice(0, 10);
    const entry: RitualEntry = {
      id: createId(),
      dateISO: todayISO,
      inputs,
      guidance,
      checklist: {
        tookSachet: false,
        didAction: false,
        registeredState: true,
      },
    };

    setEntries((prev) => {
      const next = prev.filter((item) => item.dateISO !== todayISO);
      return [entry, ...next].slice(0, 30);
    });
    navigate("/app/hoje");
  };

  return (
    <RitualForm inputs={inputs} guidance={guidance} onChange={setInputs} onSubmit={handleSubmit} />
  );
}
