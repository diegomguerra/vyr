import { Link, useLocation } from "react-router-dom";
import { CalendarDays, Sparkles, TrendingUp, ClipboardList, User } from "lucide-react";

const PRIMARY_ITEMS = [
  { to: "/app/hoje", label: "Hoje", icon: CalendarDays },
  { to: "/app/ritual", label: "Ritual", icon: Sparkles },
  { to: "/app/progresso", label: "Progresso", icon: TrendingUp },
];

const SECONDARY_ITEMS = [
  { to: "/app/perfil", label: "Perfil", icon: User },
  { to: "/app/anamnese", label: "Anamnese", icon: ClipboardList },
];

export function SidebarNav() {
  const location = useLocation();

  const renderLink = (item: { to: string; label: string; icon: typeof CalendarDays }) => {
    const isActive = location.pathname === item.to;
    const Icon = item.icon;
    return (
      <Link
        key={item.to}
        to={item.to}
        className={`
          flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium font-mono transition-all
          ${isActive 
            ? "bg-vyr-accent/15 text-vyr-white border border-vyr-accent/30" 
            : "text-vyr-gray-300 hover:text-vyr-white hover:bg-vyr-graphite/50 border border-transparent"}
        `}
      >
        <Icon className={`w-4 h-4 ${isActive ? "text-vyr-accent vyr-icon-glow" : "text-vyr-gray-400"}`} />
        {item.label}
      </Link>
    );
  };

  return (
    <nav className="vyr-card-graphite p-3 flex flex-col gap-3 h-fit">
      <div className="flex flex-col gap-1.5">
        {PRIMARY_ITEMS.map(renderLink)}
      </div>
      <div className="border-t border-vyr-gray-700/60 pt-3">
        <p className="text-[10px] font-mono text-vyr-gray-500 mb-2 px-2">Configurações</p>
        <div className="flex flex-col gap-1.5">
          {SECONDARY_ITEMS.map(renderLink)}
        </div>
      </div>
    </nav>
  );
}
