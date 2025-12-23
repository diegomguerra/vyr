type Tab = "home" | "checkin" | "progress" | "insights" | "settings";

interface TabNavProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const tabs: { key: Tab; label: string; icon: string }[] = [
  { key: "home", label: "Início", icon: "🏠" },
  { key: "checkin", label: "Check-in", icon: "✏️" },
  { key: "progress", label: "Progresso", icon: "📈" },
  { key: "insights", label: "Insights", icon: "💡" },
  { key: "settings", label: "Config", icon: "⚙️" },
];

export function TabNav({ active, onChange }: TabNavProps) {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {tabs.map(({ key, label, icon }) => (
        <button
          key={key}
          className={`nzt-pill flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 ${active === key ? "nzt-pill-active" : ""}`}
          onClick={() => onChange(key)}
        >
          <span className="text-sm sm:text-base">{icon}</span>
          <span className="text-[10px] sm:text-xs">{label}</span>
        </button>
      ))}
    </div>
  );
}

export type { Tab };
