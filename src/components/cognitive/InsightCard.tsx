import { Lightbulb } from "lucide-react";

interface InsightCardProps {
  insight: string;
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <div className="p-4 rounded-lg border border-border/50 bg-card/50 flex items-start gap-3">
      <div className="p-2 rounded-md bg-vyr-accent/10 flex-shrink-0">
        <Lightbulb className="w-4 h-4 text-vyr-accent-glow" />
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {insight}
      </p>
    </div>
  );
}

interface InsightsSectionProps {
  insights: string[];
}

export function InsightsSection({ insights }: InsightsSectionProps) {
  if (insights.length === 0) {
    return (
      <div className="p-6 rounded-lg border border-border/50 bg-card/50 text-center">
        <p className="text-sm text-muted-foreground">
          Ainda não há dados suficientes para gerar insights.
          <br />
          <span className="text-xs">A consistência constrói clareza.</span>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-foreground">Interpretações</h3>
      <div className="grid gap-3">
        {insights.map((insight, index) => (
          <InsightCard key={index} insight={insight} />
        ))}
      </div>
    </div>
  );
}
