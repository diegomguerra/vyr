import { Moon, Zap, Brain, Dumbbell } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Status = "favoravel" | "neutro" | "desfavoravel";
type CardType = "sono" | "energia" | "estresse" | "exercicio";

interface PhysiologicalCardProps {
  type: CardType;
  value: string;
  subValue?: string;
  status: Status;
}

const CARD_CONFIG: Record<CardType, { icon: LucideIcon; label: string }> = {
  sono: { icon: Moon, label: "Sono" },
  energia: { icon: Zap, label: "Energia ao Acordar" },
  estresse: { icon: Brain, label: "Estresse Percebido" },
  exercicio: { icon: Dumbbell, label: "Exercício" },
};

const STATUS_STYLES: Record<Status, { bg: string; border: string; dot: string; text: string }> = {
  favoravel: {
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/20",
    dot: "bg-emerald-400",
    text: "text-emerald-400",
  },
  neutro: {
    bg: "bg-muted/20",
    border: "border-border/50",
    dot: "bg-muted-foreground",
    text: "text-muted-foreground",
  },
  desfavoravel: {
    bg: "bg-amber-500/5",
    border: "border-amber-500/20",
    dot: "bg-amber-400",
    text: "text-amber-400",
  },
};

const STATUS_LABEL: Record<Status, string> = {
  favoravel: "Favorável",
  neutro: "Neutro",
  desfavoravel: "Desfavorável",
};

export function PhysiologicalCard({ type, value, subValue, status }: PhysiologicalCardProps) {
  const config = CARD_CONFIG[type];
  const styles = STATUS_STYLES[status];
  const Icon = config.icon;

  return (
    <div className={`
      p-4 rounded-lg border transition-all duration-200
      ${styles.bg} ${styles.border}
    `}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-md bg-muted/30">
            <Icon className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-mono tracking-wide">
              {config.label}
            </p>
            <p className="text-sm font-medium text-foreground mt-0.5">
              {value}
              {subValue && (
                <span className="text-muted-foreground font-normal ml-1.5">
                  {subValue}
                </span>
              )}
            </p>
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
          <span className={`text-[10px] font-mono ${styles.text}`}>
            {STATUS_LABEL[status]}
          </span>
        </div>
      </div>
    </div>
  );
}
