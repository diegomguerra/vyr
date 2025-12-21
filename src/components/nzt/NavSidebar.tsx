import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/painel", label: "Painel" },
  { to: "/dose", label: "Registrar dose" },
  { to: "/sono", label: "Sono & dia" },
  { to: "/anamnese", label: "Anamnese" },
  { to: "/perfil", label: "Perfil" },
];

export function NavSidebar() {
  const location = useLocation();

  return (
    <nav className="glass-card p-3 flex flex-col gap-2 h-fit">
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.to;
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`nzt-navlink ${isActive ? "nzt-navlink-active" : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
