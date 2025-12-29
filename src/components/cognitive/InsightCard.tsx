import { Lightbulb } from "lucide-react";

interface InsightCardProps {
  insight: string;
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <div className="p-4 rounded-lg border border-border/60 bg-card/60 flex items-start gap-3">
      <div className="p-2.5 rounded-md bg-vyr-accent/15 flex-shrink-0">
        <Lightbulb className="w-5 h-5 text-vyr-accent-glow" />
      </div>
      <p className="text-base text-foreground/80 leading-relaxed">
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
      <div className="p-6 rounded-lg border border-border/60 bg-card/60 text-center">
        <p className="text-base text-foreground/60">
          Ainda não há dados suficientes para gerar insights.
          <br />
          <span className="text-sm">A consistência constrói clareza.</span>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium text-foreground">Interpretações</h3>
      <div className="grid gap-3">
        {insights.map((insight, index) => (
          <InsightCard key={index} insight={insight} />
        ))}
      </div>
    </div>
  );
}
