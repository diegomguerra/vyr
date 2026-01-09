import { ProgressCards } from "@/components/labs";
import { useLabsEntries } from "@/hooks/use-labs-entries";

export default function LabsProgress() {
  const { entries } = useLabsEntries();

  return (
    <div className="space-y-4">
      <ProgressCards entries={entries} />
      <p className="text-xs text-vyr-gray-500 font-mono">
        O sistema está aprendendo com você. Sem promessas clínicas.
      </p>
    </div>
  );
}
