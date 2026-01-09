import { Link } from "react-router-dom";
import { ClipboardList, User } from "lucide-react";

const MENU_ITEMS = [
  { to: "/app/perfil", label: "Perfil", icon: User },
  { to: "/app/anamnese", label: "Anamnese", icon: ClipboardList },
];

export default function LabsMenu() {
  return (
    <div className="vyr-card-graphite p-5 sm:p-6 space-y-3">
      <h2 className="text-lg font-semibold text-vyr-white">Menu</h2>
      <p className="text-xs text-vyr-gray-500 font-mono">
        Configurações e dados opcionais.
      </p>
      <div className="space-y-2">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium text-vyr-gray-300 hover:text-vyr-white hover:bg-vyr-graphite/50 border border-vyr-gray-700/60"
            >
              <Icon className="w-4 h-4 text-vyr-gray-400" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
