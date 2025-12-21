interface ChipProps {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export function Chip({ active = false, onClick, children }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`nzt-chip ${active ? "nzt-chip-active" : ""}`}
    >
      {children}
    </button>
  );
}
