import { useEffect, useMemo, useState } from "react";
import { Card, Badge, KpiRow, MiniLine } from "@/components/nzt";
import { baselineInicial, mediaMovel } from "@/lib/baseline";
import { getParticipante, getReferencias, getSeries30d, getSono60d } from "@/lib/api";
import { calcularIdade } from "@/lib/date";
import type { Participante, SerieData } from "@/lib/types";

export default function Dashboard() {
  const [participante, setParticipante] = useState<Participante | null>(null);
  const [series, setSeries] = useState<SerieData[]>([]);
  const [sono, setSono] = useState<{ data: string; valor: number | null }[]>([]);
  const [refs, setRefs] = useState<Record<string, { min: number; max: number }>>({});

  useEffect(() => {
    async function loadData() {
      const p = await getParticipante();
      setParticipante(p);
      const s = await getSeries30d();
      setSeries(s);

      if (p) {
        const sonoData = await getSono60d(p.id);
        setSono(sonoData);

        const idade = calcularIdade(p.data_nascimento);
        const refRows = await getReferencias(p.sexo, idade);
        const map: Record<string, { min: number; max: number }> = {};
        refRows.forEach((r) => {
          map[r.metrica] = { min: Number(r.faixa_min), max: Number(r.faixa_max) };
        });
        setRefs(map);
      }
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
  }), [serieDia, serieTarde, sono]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card 
        title="Seu progresso (comparação justa)" 
        subtitle="Você vs você no início • e uma faixa de referência realista"
        className="lg:col-span-1"
      >
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge>Estável • média móvel 7 dias</Badge>
          <Badge>Sem promessas imediatas</Badge>
        </div>

        <KpiRow 
          label="Dia • Clareza mental" 
          base={kpis.dia.base} 
          now={kpis.dia.now} 
          refRange={refs["dia_clareza"]} 
        />
        <KpiRow 
          label="Tarde • Foco de ataque" 
          base={kpis.tarde.base} 
          now={kpis.tarde.now} 
          refRange={refs["tarde_foco"]} 
        />
        <KpiRow 
          label="Sono • Qualidade" 
          base={kpis.sono.base} 
          now={kpis.sono.now} 
          refRange={refs["sono_qualidade"]} 
        />

        <p className="text-xs text-muted-foreground mt-4">
          O painel prioriza tendência e consistência. Um dia "fora do padrão" não define você.
        </p>
      </Card>

      <Card title="Dia • Clareza (tendência)" subtitle="Escala 0–10">
        <MiniLine 
          data={serieDia} 
          refMin={refs["dia_clareza"]?.min} 
          refMax={refs["dia_clareza"]?.max} 
        />
      </Card>

      <Card title="Tarde • Foco (tendência)" subtitle="Escala 0–10">
        <MiniLine 
          data={serieTarde} 
          refMin={refs["tarde_foco"]?.min} 
          refMax={refs["tarde_foco"]?.max} 
        />
      </Card>

      <Card 
        title="Sono • Qualidade (tendência)" 
        subtitle="Resumo diário (manhã seguinte)"
        className="lg:col-span-3"
      >
        <MiniLine 
          data={sono} 
          refMin={refs["sono_qualidade"]?.min} 
          refMax={refs["sono_qualidade"]?.max} 
        />
      </Card>
    </div>
  );
}
