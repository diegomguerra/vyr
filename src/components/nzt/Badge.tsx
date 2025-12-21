interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="nzt-badge">
      {children}
    </span>
  );
}
