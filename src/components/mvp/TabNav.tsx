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
    <div className="flex flex-wrap gap-2">
      {tabs.map(({ key, label, icon }) => (
        <button
          key={key}
          className={`nzt-pill flex items-center gap-2 ${active === key ? "nzt-pill-active" : ""}`}
          onClick={() => onChange(key)}
        >
          <span>{icon}</span>
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}

export type { Tab };
