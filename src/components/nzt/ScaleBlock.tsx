interface ScaleBlockProps {
  title: string;
  question: string;
  anchor: string;
  example?: string;
  value: number;
  onChange: (value: number) => void;
}

export function ScaleBlock({ title, question, anchor, example, value, onChange }: ScaleBlockProps) {
  return (
    <div className="py-3">
      <div className="flex justify-between items-center">
        <span className="font-bold text-foreground">{title}</span>
        <span className="text-xs text-muted-foreground">{value}/10</span>
      </div>
      <p className="mt-2 text-sm text-foreground/85">{question}</p>
      {example && (
        <p className="mt-2 text-xs text-foreground/75 italic">{example}</p>
      )}
      <p className="mt-2 text-xs text-muted-foreground">{anchor}</p>
      <input
        type="range"
        min={0}
        max={10}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-3 accent-primary cursor-pointer"
      />
    </div>
  );
}
