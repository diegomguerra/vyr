import { useEffect, useMemo, useState } from "react";
import { Card, Badge, MiniLine, ProfileSummary, BaselineEvolution, InsightsCard } from "@/components/nzt";
import { baselineInicial, mediaMovel } from "@/lib/baseline";
import { getParticipante, getReferencias, getSeries30d, getSono60d, getNoite60d } from "@/lib/api";
import { calcularIdade } from "@/lib/date";
import type { Participante, SerieData } from "@/lib/types";

export default function Dashboard() {
  const [participante, setParticipante] = useState<Participante | null>(null);
  const [series, setSeries] = useState<SerieData[]>([]);
  const [sono, setSono] = useState<{ data: string; valor: number | null }[]>([]);
  const [noite, setNoite] = useState<{ data: string; valor: number | null }[]>([]);
  const [refs, setRefs] = useState<Record<string, { min: number; max: number }>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const p = await getParticipante();
      setParticipante(p);
      const s = await getSeries30d();
      setSeries(s);

      if (p) {
        const [sonoData, noiteData] = await Promise.all([
          getSono60d(p.id),
          getNoite60d(p.id),
        ]);
        setSono(sonoData);
        setNoite(noiteData);

        const idade = calcularIdade(p.data_nascimento);
        const refRows = await getReferencias(p.sexo, idade);
        const map: Record<string, { min: number; max: number }> = {};
        refRows.forEach((r) => {
          map[r.metrica] = { min: Number(r.faixa_min), max: Number(r.faixa_max) };
        });
        setRefs(map);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  const serieDia = useMemo(() => (
    series.filter((x) => x.janela === "DIA").map((x) => ({ data: x.data, valor: x.escala_1 ?? null }))
  ), [series]);

  const serieTarde = useMemo(() => (
    series.filter((x) => x.janela === "TARDE").map((x) => ({ data: x.data, valor: x.escala_1 ?? null }))
  ), [series]);

  const kpis = useMemo(() => ({
    dia: { base: baselineInicial(serieDia), now: mediaMovel(serieDia) },
    tarde: { base: baselineInicial(serieTarde), now: mediaMovel(serieTarde) },
    sono: { base: baselineInicial(sono), now: mediaMovel(sono) },
    noite: { base: baselineInicial(noite), now: mediaMovel(noite) },
  }), [serieDia, serieTarde, sono, noite]);

  // Evolution metrics combining anamnese baseline with tracking data
  const evolutionMetrics = useMemo(() => {
    if (!participante) return [];
    
    return [
      {
        label: "Clareza mental (dia)",
        baselineAnamnese: null,
        baselineInicial: kpis.dia.base,
        atual: kpis.dia.now,
        refRange: refs["dia_clareza"],
      },
      {
        label: "Foco (tarde)",
        baselineAnamnese: null,
        baselineInicial: kpis.tarde.base,
        atual: kpis.tarde.now,
        refRange: refs["tarde_foco"],
      },
      {
        label: "Desaceleração noturna",
        baselineAnamnese: null,
        baselineInicial: kpis.noite.base,
        atual: kpis.noite.now,
        refRange: refs["noite_desaceleracao"],
      },
      {
        label: "Qualidade do sono",
        baselineAnamnese: participante.qualidade_sono_geral,
        baselineInicial: kpis.sono.base,
        atual: kpis.sono.now,
        refRange: refs["sono_qualidade"],
      },
      {
        label: "Nível de estresse",
        baselineAnamnese: participante.nivel_estresse_geral,
        baselineInicial: null,
        atual: null,
        inverted: true,
      },
    ].filter(m => m.baselineAnamnese != null || m.baselineInicial != null || m.atual != null);
  }, [participante, kpis, refs]);

  // Calculate days since first record
  const daysSinceStart = useMemo(() => {
    if (!series.length && !sono.length) return 0;
    const allDates = [...series.map(s => s.data), ...sono.map(s => s.data)].filter(Boolean);
    if (!allDates.length) return 0;
    const first = new Date(Math.min(...allDates.map(d => new Date(d).getTime())));
    const now = new Date();
    return Math.floor((now.getTime() - first.getTime()) / (1000 * 60 * 60 * 24));
  }, [series, sono]);

  const hasEnoughData = serieDia.length >= 3 || serieTarde.length >= 3 || sono.length >= 3 || noite.length >= 3;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-pulse text-muted-foreground">Carregando dados...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header com contexto */}
      <div className="flex flex-wrap items-center gap-3">
        <Badge>
          {daysSinceStart > 0 ? `${daysSinceStart} dias de acompanhamento` : "Início do acompanhamento"}
        </Badge>
        <Badge>Média móvel 7 dias</Badge>
        {hasEnoughData && <Badge>Baseline: primeiros 3 registros</Badge>}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Perfil do usuário - dados da anamnese */}
        {participante && (
          <Card 
            title="Seu perfil" 
            subtitle="Dados coletados na anamnese"
            className="lg:col-span-1 lg:row-span-2"
          >
            <ProfileSummary participante={participante} />
          </Card>
        )}

        {/* Evolução comparativa */}
        <Card 
          title="Sua evolução" 
          subtitle="Comparação: anamnese → início → agora"
          className="lg:col-span-3"
        >
          {hasEnoughData ? (
            <BaselineEvolution metrics={evolutionMetrics} showAnamnese={true} />
          ) : (
            <div className="py-8 text-center">
              <p className="text-muted-foreground">
                Continue registrando para visualizar sua evolução.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Precisamos de pelo menos 3 registros para calcular seu baseline.
              </p>
            </div>
          )}
        </Card>

        {/* Insights IA */}
        {participante && (
          <Card 
            title="Recomendações" 
            subtitle="Análise personalizada com IA"
            className="lg:col-span-3"
          >
            <InsightsCard 
              participante={participante} 
              metrics={{
                diaBaseline: kpis.dia.base,
                diaAtual: kpis.dia.now,
                tardeBaseline: kpis.tarde.base,
                tardeAtual: kpis.tarde.now,
                sonoBaseline: kpis.sono.base,
                sonoAtual: kpis.sono.now,
                diasAcompanhamento: daysSinceStart,
              }}
            />
          </Card>
        )}

        {/* Gráficos de DOSE - resposta cognitiva */}
        <Card 
          title="📊 Resposta Cognitiva" 
          subtitle="Efeito das doses (DIA + TARDE)"
          className="lg:col-span-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                ☀️ Clareza mental (Dia)
              </h4>
              <MiniLine 
                data={serieDia} 
                refMin={refs["dia_clareza"]?.min} 
                refMax={refs["dia_clareza"]?.max} 
              />
              {kpis.dia.base && kpis.dia.now && (
                <p className="text-xs text-muted-foreground mt-2">
                  Baseline: {kpis.dia.base}/10 → Atual: {kpis.dia.now}/10
                </p>
              )}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                🌅 Foco (Tarde)
              </h4>
              <MiniLine 
                data={serieTarde} 
                refMin={refs["tarde_foco"]?.min} 
                refMax={refs["tarde_foco"]?.max} 
              />
              {kpis.tarde.base && kpis.tarde.now && (
                <p className="text-xs text-muted-foreground mt-2">
                  Baseline: {kpis.tarde.base}/10 → Atual: {kpis.tarde.now}/10
                </p>
              )}
            </div>
          </div>
        </Card>

        {/* Gráficos de SONO + NOITE - separados */}
        <Card 
          title="🌙 Sono & Desaceleração" 
          subtitle="Dose noturna vs Qualidade do sono"
          className="lg:col-span-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/20">
              <h4 className="text-sm font-semibold text-secondary mb-2 flex items-center gap-2">
                💊 Dose Noturna (Knight)
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Desaceleração, prontidão para dormir, tranquilidade
              </p>
              <MiniLine 
                data={noite} 
                refMin={refs["noite_desaceleracao"]?.min} 
                refMax={refs["noite_desaceleracao"]?.max} 
              />
              {kpis.noite.base && kpis.noite.now && (
                <p className="text-xs text-muted-foreground mt-2">
                  Baseline: {kpis.noite.base}/10 → Atual: {kpis.noite.now}/10
                </p>
              )}
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                😴 Qualidade do Sono
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Latência, despertares, recuperação ao acordar
              </p>
              <MiniLine 
                data={sono} 
                refMin={refs["sono_qualidade"]?.min} 
                refMax={refs["sono_qualidade"]?.max} 
              />
              {participante?.qualidade_sono_geral && kpis.sono.now && (
                <p className="text-xs text-muted-foreground mt-2">
                  Anamnese: {participante.qualidade_sono_geral}/10 → Atual: {kpis.sono.now}/10
                </p>
              )}
            </div>
          </div>
        </Card>

        {/* Grid de métricas adicionais */}
        <Card 
          title="Correlações observadas" 
          subtitle="Padrões identificados nos seus dados"
          className="lg:col-span-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CorrelationTile 
              label="Sono × Clareza"
              value={participante?.qualidade_sono_geral && kpis.dia.now 
                ? `${participante.qualidade_sono_geral} → ${kpis.dia.now}` 
                : null}
              trend={kpis.dia.base && kpis.dia.now ? kpis.dia.now - kpis.dia.base : null}
            />
            <CorrelationTile 
              label="Noite × Sono"
              value={kpis.noite.now && kpis.sono.now 
                ? `${kpis.noite.now} → ${kpis.sono.now}` 
                : null}
              trend={kpis.sono.base && kpis.sono.now ? kpis.sono.now - kpis.sono.base : null}
            />
            <CorrelationTile 
              label="Estresse × Foco"
              value={participante?.nivel_estresse_geral && kpis.tarde.now 
                ? `${participante.nivel_estresse_geral} → ${kpis.tarde.now}` 
                : null}
              trend={kpis.tarde.base && kpis.tarde.now ? kpis.tarde.now - kpis.tarde.base : null}
              inverted
            />
            <CorrelationTile 
              label="Dias registrados"
              value={`${daysSinceStart} dias`}
              trend={null}
            />
          </div>
        </Card>
      </div>

      {/* Nota explicativa */}
      <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
        O painel separa <strong>resposta cognitiva</strong> (doses dia/tarde) de <strong>sono</strong> (qualidade + dose noturna). 
        Priorizamos tendência e consistência, não dias isolados.
      </p>
    </div>
  );
}

function CorrelationTile({ 
  label, 
  value, 
  trend,
  inverted 
}: { 
  label: string; 
  value: string | null; 
  trend: number | null;
  inverted?: boolean;
}) {
  const isPositive = trend !== null && (inverted ? trend < 0 : trend > 0);
  const isNegative = trend !== null && (inverted ? trend > 0 : trend < 0);
  
  return (
    <div className="p-3 rounded-xl bg-muted/30 border border-border/50">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-foreground">{value ?? "—"}</span>
        {trend !== null && Math.abs(trend) >= 0.3 && (
          <span className={`text-xs ${isPositive ? "text-secondary" : isNegative ? "text-destructive" : "text-muted-foreground"}`}>
            ({trend > 0 ? "+" : ""}{trend.toFixed(1)})
          </span>
        )}
      </div>
    </div>
  );
}
