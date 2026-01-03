import { useState } from "react";
import { Lightbulb, TrendingUp, AlertTriangle, Sparkles, RefreshCw } from "lucide-react";
import { supabase, SUPABASE_URL } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { Participante } from "@/lib/types";

interface Insight {
  titulo: string;
  descricao: string;
  tipo: "positivo" | "atencao" | "neutro";
  categoria: "sono" | "foco" | "estresse" | "habitos" | "geral";
}

interface InsightsData {
  insights: Insight[];
  resumo: string;
}

interface InsightsCardProps {
  participante: Participante;
  metrics: {
    diaBaseline: number | null;
    diaAtual: number | null;
    tardeBaseline: number | null;
    tardeAtual: number | null;
    sonoBaseline: number | null;
    sonoAtual: number | null;
    diasAcompanhamento: number;
  };
}

const INSIGHT_ICONS = {
  sono: "🌙",
  foco: "🎯",
  estresse: "🧘",
  habitos: "⚡",
  geral: "💡",
};

const TIPO_STYLES = {
  positivo: "border-secondary/30 bg-secondary/5",
  atencao: "border-warning/30 bg-warning/5",
  neutro: "border-border bg-muted/20",
};

const TIPO_ICON_STYLES = {
  positivo: "text-secondary",
  atencao: "text-warning",
  neutro: "text-muted-foreground",
};

export function InsightsCard({ participante, metrics }: InsightsCardProps) {
  const [insights, setInsights] = useState<InsightsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generateInsights() {
    setLoading(true);
    setError(null);

    try {
      const { data: session } = await supabase.auth.getSession();
      if (!session?.session?.access_token) {
        throw new Error("Sessão não encontrada");
      }

      const response = await fetch(`${SUPABASE_URL}/functions/v1/generate-insights`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.session.access_token}`,
        },
        body: JSON.stringify({
          participante: {
            objetivo_principal: participante.objetivo_principal,
            perfil_atividade: participante.perfil_atividade,
            rotina_trabalho: participante.rotina_trabalho,
            qualidade_sono_geral: participante.qualidade_sono_geral,
            nivel_estresse_geral: participante.nivel_estresse_geral,
            horas_sono_media: participante.horas_sono_media,
            consumo_cafeina: participante.consumo_cafeina,
            consumo_alcool: participante.consumo_alcool,
            frequencia_exercicio: participante.frequencia_exercicio,
            condicoes_saude: participante.condicoes_saude,
          },
          metrics,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao gerar insights");
      }

      const data = await response.json();
      setInsights(data);
      toast.success("Insights gerados com sucesso!");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erro desconhecido";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      {/* Header com botão de gerar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Insights IA</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={generateInsights}
          disabled={loading}
          className="gap-2"
        >
          {loading ? (
            <RefreshCw className="w-3 h-3 animate-spin" />
          ) : (
            <Lightbulb className="w-3 h-3" />
          )}
          {loading ? "Analisando..." : insights ? "Atualizar" : "Gerar insights"}
        </Button>
      </div>

      {/* Estado inicial */}
      {!insights && !loading && !error && (
        <div className="py-6 text-center border border-dashed border-border rounded-xl">
          <Sparkles className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">
            Clique em "Gerar insights" para receber análises personalizadas
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            A IA analisa seu perfil e evolução para sugerir melhorias
          </p>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="py-6 text-center">
          <div className="w-8 h-8 mx-auto border-2 border-primary/30 border-t-primary rounded-full animate-spin mb-2" />
          <p className="text-sm text-muted-foreground">Analisando seus dados...</p>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="py-4 px-3 text-center border border-destructive/30 bg-destructive/5 rounded-xl">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {/* Insights */}
      {insights && !loading && (
        <div className="space-y-3">
          {/* Resumo */}
          {insights.resumo && (
            <p className="text-sm text-foreground/80 italic px-1">
              "{insights.resumo}"
            </p>
          )}

          {/* Lista de insights */}
          <div className="space-y-2">
            {insights.insights.map((insight, index) => (
              <InsightItem key={index} insight={insight} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InsightItem({ insight }: { insight: Insight }) {
  const Icon = insight.tipo === "positivo" ? TrendingUp : 
               insight.tipo === "atencao" ? AlertTriangle : Lightbulb;

  return (
    <div 
      className={`p-3 rounded-xl border transition-all ${TIPO_STYLES[insight.tipo]}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <span className="text-lg">{INSIGHT_ICONS[insight.categoria]}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-medium text-foreground">{insight.titulo}</h4>
            <Icon className={`w-3.5 h-3.5 ${TIPO_ICON_STYLES[insight.tipo]}`} />
          </div>
          <p className="text-xs text-muted-foreground mt-1">{insight.descricao}</p>
        </div>
      </div>
    </div>
  );
}
