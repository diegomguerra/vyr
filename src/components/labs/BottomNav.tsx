import { Link, useLocation } from "react-router-dom";
import { CalendarDays, Sparkles, TrendingUp } from "lucide-react";

const NAV_ITEMS = [
  { to: "/app/hoje", label: "Hoje", icon: CalendarDays },
  { to: "/app/ritual", label: "Ritual", icon: Sparkles },
  { to: "/app/progresso", label: "Progresso", icon: TrendingUp },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-vyr-graphite-dark/95 backdrop-blur-xl border-t border-vyr-graphite/50">
      <div className="flex items-center justify-around py-2 px-1 safe-area-inset-bottom">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-sm text-vyr-gray-400 hover:text-vyr-white hover:bg-vyr-graphite/50 transition-all min-w-0 ${
                isActive ? "text-vyr-white" : ""
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-vyr-accent" : "text-vyr-gray-400"}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
