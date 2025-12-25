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
            flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all border font-mono
            ${active === key 
              ? "bg-vyr-gray-100/10 text-vyr-white border-vyr-gray-100/30" 
              : "bg-vyr-gray-900/30 text-vyr-gray-500 border-vyr-gray-500/20 hover:text-vyr-white hover:bg-vyr-gray-900/50"}
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
