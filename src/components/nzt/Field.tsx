interface FieldProps {
  label: string;
  children: React.ReactNode;
}

export function Field({ label, children }: FieldProps) {
  return (
    <div className="my-3">
      <label className="block text-xs text-muted-foreground mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
