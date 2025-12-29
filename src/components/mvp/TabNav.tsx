import { Home, TrendingUp, Lightbulb, Settings, Activity } from "lucide-react";

type Tab = "home" | "cognitive" | "progress" | "insights" | "settings";

interface TabNavProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const tabs: { key: Tab; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "home", label: "Início", Icon: Home },
  { key: "cognitive", label: "Cognitivo", Icon: Activity },
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
            flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-sm text-xs sm:text-sm font-medium transition-all border font-mono
            ${active === key 
              ? "bg-vyr-accent/10 text-vyr-white border-vyr-accent/30" 
              : "bg-vyr-gray-800/50 text-vyr-gray-400 border-vyr-gray-700/50 hover:text-vyr-white hover:bg-vyr-gray-800"}
          `}
          onClick={() => onChange(key)}
        >
          <Icon className={`w-4 h-4 ${active === key ? 'text-vyr-accent vyr-icon-glow' : 'text-vyr-gray-300'}`} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

export type { Tab };
