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
          className={`
            flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all border
            ${active === key 
              ? "bg-violet-500/20 text-white border-violet-500/30" 
              : "bg-slate-800/30 text-slate-400 border-slate-700/30 hover:text-white hover:bg-slate-800/50"}
          `}
          onClick={() => onChange(key)}
        >
          <span className="text-sm sm:text-base">{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

export type { Tab };
