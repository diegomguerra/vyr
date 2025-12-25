import { VYR_COLORS, VYR_LABELS, VYR_TYPOGRAPHY } from "./tokens";

type LabelKey = keyof typeof VYR_LABELS;

interface LabelProps {
  variant: LabelKey;
  showSubtitle?: boolean;
  className?: string;
}

export function Label({ variant, showSubtitle = false, className = "" }: LabelProps) {
  const label = VYR_LABELS[variant];
  
  return (
    <div 
      className={`inline-flex flex-col ${className}`}
      style={{ fontFamily: VYR_TYPOGRAPHY.logo.fontFamily }}
    >
      <span 
        className="text-sm tracking-[0.35em]"
        style={{ 
          color: VYR_COLORS.white,
          fontWeight: VYR_TYPOGRAPHY.logo.fontWeight 
        }}
      >
        VYR
      </span>
      <span 
        className="text-xs tracking-[0.25em] -mt-0.5"
        style={{ 
          color: VYR_COLORS.gray[400],
          fontWeight: 400 
        }}
      >
        {label.name.split(" ")[1]}
      </span>
      {showSubtitle && (
        <span 
          className="text-[10px] tracking-wider mt-2 opacity-50"
          style={{ color: VYR_COLORS.gray[500] }}
        >
          {label.old}
        </span>
      )}
    </div>
  );
}

export function AllLabels() {
  const variants: LabelKey[] = ["BOOT", "HOLD", "CLEAR", "SYSTEM", "NODE"];
  
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {variants.map((variant) => (
        <div 
          key={variant} 
          className="p-6 rounded-sm"
          style={{ backgroundColor: VYR_LABELS[variant].color }}
        >
          <Label variant={variant} />
        </div>
      ))}
    </div>
  );
}

export function LabelComparison() {
  const variants: LabelKey[] = ["BOOT", "HOLD", "CLEAR", "SYSTEM", "NODE"];
  
  return (
    <div 
      className="grid gap-4"
      style={{ fontFamily: VYR_TYPOGRAPHY.logo.fontFamily }}
    >
      {variants.map((variant) => {
        const label = VYR_LABELS[variant];
        return (
          <div 
            key={variant}
            className="flex items-center gap-6 py-3 border-b"
            style={{ borderColor: VYR_COLORS.gray[800] }}
          >
            <span 
              className="w-32 text-xs tracking-wider opacity-40 line-through"
              style={{ color: VYR_COLORS.gray[500] }}
            >
              {label.old}
            </span>
            <span 
              className="text-lg"
              style={{ color: VYR_COLORS.gray[600] }}
            >
              →
            </span>
            <span 
              className="text-sm tracking-[0.3em]"
              style={{ color: VYR_COLORS.white }}
            >
              {label.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
