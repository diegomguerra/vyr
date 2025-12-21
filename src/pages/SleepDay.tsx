import { useEffect, useState } from "react";
import { Card, Field, ScaleBlock } from "@/components/nzt";
import { hojeISO } from "@/lib/date";
import { getParticipante, upsertResumoDiario } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import type { Participante } from "@/lib/types";

export default function SleepDay() {
  const [participante, setParticipante] = useState<Participante | null>(null);
  const [data, setData] = useState(hojeISO());
  const [latencia, setLatencia] = useState(20);
  const [despertares, setDespertares] = useState(0);
  const [qualidadeSono, setQualidadeSono] = useState(6);
  const [recuperacao, setRecuperacao] = useState(6);
  const [estresse, setEstresse] = useState(5);
  const [cafeina, setCafeina] = useState(1);
  
  const { toast } = useToast();

  useEffect(() => {
    async function load() {
      const p = await getParticipante();
      setParticipante(p);
    }
    load();
  }, []);

  async function salvar() {
    if (!participante) return;
    
    await upsertResumoDiario({
      participante_id: participante.id,
      data,
      latencia_sono_min: latencia,
      despertares,
      qualidade_sono: qualidadeSono,
      recuperacao_ao_acordar: recuperacao,
      estresse_dia: estresse,
      cafeina_doses: cafeina,
    });
    
    toast({
      title: "Resumo salvo",
      description: "Tendência vale mais que um dia isolado.",
    });
  }

  return (
    <Card 
      title="Sono & dia (1x por dia)" 
      subtitle="Contexto que protege a interpretação do dado"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Data">
          <input
            type="date"
            className="nzt-input"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </Field>
        <Field label="Cafeína (doses)">
          <input
            type="number"
            className="nzt-input"
            min={0}
            max={10}
            value={cafeina}
            onChange={(e) => setCafeina(Number(e.target.value))}
          />
        </Field>
        <Field label="Latência do sono (min)">
          <input
            type="number"
            className="nzt-input"
            min={0}
            max={240}
            value={latencia}
            onChange={(e) => setLatencia(Number(e.target.value))}
          />
        </Field>
        <Field label="Despertares">
          <input
            type="number"
            className="nzt-input"
            min={0}
            max={10}
            value={despertares}
            onChange={(e) => setDespertares(Number(e.target.value))}
          />
        </Field>
      </div>

      <div className="mt-6 space-y-2">
        <ScaleBlock
          title="Qualidade do sono"
          question="Como foi a qualidade do sono?"
          anchor="0=ruim • 10=excelente"
          value={qualidadeSono}
          onChange={setQualidadeSono}
        />
        <div className="h-px bg-border" />
        <ScaleBlock
          title="Recuperação ao acordar"
          question="Como você acordou (corpo e mente)?"
          anchor="0=esgotado • 10=recuperado"
          value={recuperacao}
          onChange={setRecuperacao}
        />
        <div className="h-px bg-border" />
        <ScaleBlock
          title="Estresse do dia"
          question="Como foi o seu nível de estresse hoje?"
          anchor="0=baixo • 10=alto"
          value={estresse}
          onChange={setEstresse}
        />
      </div>

      <div className="flex gap-3 mt-5">
        <button className="nzt-btn-primary" onClick={salvar}>
          Salvar resumo
        </button>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        Sem sono/cafeína/estresse, o dado pode enganar. Aqui, contexto protege o estudo.
      </p>
    </Card>
  );
}
