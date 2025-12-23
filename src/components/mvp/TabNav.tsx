import { Home, ClipboardCheck, TrendingUp, Lightbulb, Settings } from "lucide-react";

type Tab = "home" | "checkin" | "progress" | "insights" | "settings";

interface TabNavProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const tabs: { key: Tab; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "home", label: "Início", Icon: Home },
  { key: "checkin", label: "Check-in", Icon: ClipboardCheck },
  { key: "progress", label: "Progresso", Icon: TrendingUp },
  { key: "insights", label: "Insights", Icon: Lightbulb },
  { key: "settings", label: "Config", Icon: Settings },
];

export function TabNav({ active, onChange }: TabNavProps) {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {tabs.map(({ key, label, Icon }) => (
        <button
          key={key}
          className={`
            flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all border
            ${active === key 
              ? "bg-violet-500/20 text-white border-violet-500/30" 
              : "bg-slate-800/30 text-slate-400 border-slate-700/30 hover:text-white hover:bg-slate-800/50"}
          `}
          onClick={() => onChange(key)}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

export type { Tab };
