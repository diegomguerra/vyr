import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, ClipboardList, User } from "lucide-react";

const NAV_ITEMS = [
  { to: "/app/painel", label: "Painel", icon: LayoutDashboard },
  { to: "/app/anamnese", label: "Anamnese", icon: ClipboardList },
  { to: "/app/perfil", label: "Perfil", icon: User },
];

export function NavSidebar() {
  const location = useLocation();

  return (
    <nav className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-3 flex flex-col gap-1.5 h-fit">
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.to;
        const Icon = item.icon;
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
              ${isActive 
                ? 'bg-violet-500/20 text-white border border-violet-500/30' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent'}
            `}
          >
            <Icon className="w-4 h-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
