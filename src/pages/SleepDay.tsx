import { useEffect, useState } from "react";
import { Card, Field, ScaleBlock, Chip } from "@/components/nzt";
import { ESCALAS } from "@/lib/microcopy";
import { hojeISO } from "@/lib/date";
import { getParticipante, upsertResumoDiario, upsertRegistroDose } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import type { Participante, Severidade } from "@/lib/types";

const SINTOMAS_NOITE = [
  { k: "insonia", label: "Insônia" },
  { k: "agitacao", label: "Agitação" },
  { k: "ansiedade", label: "Ansiedade" },
  { k: "sonolencia_fora_de_hora", label: "Sonolência excessiva" },
];

export default function SleepDay() {
  const [participante, setParticipante] = useState<Participante | null>(null);
  const [data, setData] = useState(hojeISO());
  
  // Sono físico
  const [latencia, setLatencia] = useState(20);
  const [despertares, setDespertares] = useState(0);
  const [qualidadeSono, setQualidadeSono] = useState(6);
  const [recuperacao, setRecuperacao] = useState(6);
  
  // Contexto do dia
  const [estresse, setEstresse] = useState(5);
  const [cafeina, setCafeina] = useState(1);
  
  // Dose noturna (Knight)
  const [tomouNoite, setTomouNoite] = useState(true);
  const [e1, setE1] = useState(6);
  const [e2, setE2] = useState(6);
  const [e3, setE3] = useState(6);
  const [sevNoite, setSevNoite] = useState<Severidade>("NENHUM");
  const [sintomasNoite, setSintomasNoite] = useState<string[]>([]);
  
  const { toast } = useToast();
  const defsNoite = ESCALAS.NOITE;

  useEffect(() => {
    async function load() {
      const p = await getParticipante();
      setParticipante(p);
    }
    load();
  }, []);

  function toggleSintoma(k: string) {
    setSintomasNoite((prev) => 
      prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]
    );
  }

  async function salvar() {
    if (!participante) return;
    
    try {
      // Salva resumo diário (sono + contexto)
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
      
      // Salva dose noturna se tomou
      const now = new Date();
      const horario = tomouNoite 
        ? `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
        : null;
        
      await upsertRegistroDose({
        participante_id: participante.id,
        data,
        janela: "NOITE",
        tomou: tomouNoite,
        horario_tomada: horario,
        escala_1: e1,
        escala_2: e2,
        escala_3: e3,
        efeito_indesejado: sevNoite,
        sintomas: sintomasNoite,
        observacoes: null,
      });
      
      toast({
        title: "Registro completo salvo",
        description: "Sono + dose noturna registrados. Tendência vale mais que um dia.",
      });
    } catch (error) {
      console.error("Erro ao salvar:", error);
      toast({
        title: "Erro ao salvar",
        description: "Tente novamente.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="space-y-6">
      {/* Header explicativo */}
      <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4">
        <h2 className="text-sm font-semibold text-secondary mb-1">
          🌙 Registro de Sono & Noite
        </h2>
        <p className="text-xs text-muted-foreground">
          Aqui você registra a <strong>qualidade do sono</strong>, contexto do dia (cafeína, estresse) 
          e a <strong>dose noturna (Knight)</strong> para desaceleração.
        </p>
      </div>

      {/* Seção: Sono físico */}
      <Card 
        title="Qualidade do sono" 
        subtitle="Como foi sua noite de sono?"
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
          <Field label="Latência do sono (min)">
            <input
              type="number"
              className="nzt-input"
              min={0}
              max={240}
              value={latencia}
              onChange={(e) => setLatencia(Number(e.target.value))}
              placeholder="Tempo para pegar no sono"
            />
          </Field>
          <Field label="Despertares noturnos">
            <input
              type="number"
              className="nzt-input"
              min={0}
              max={10}
              value={despertares}
              onChange={(e) => setDespertares(Number(e.target.value))}
            />
          </Field>
          <div></div>
        </div>

        <div className="mt-6 space-y-4">
          <ScaleBlock
            title="Qualidade do sono"
            question="Como foi a qualidade do seu sono?"
            anchor="0=péssimo • 10=excelente"
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
        </div>
      </Card>

      {/* Seção: Contexto do dia */}
      <Card 
        title="Contexto do dia" 
        subtitle="Fatores que influenciam a interpretação"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div></div>
        </div>
        
        <div className="mt-4">
          <ScaleBlock
            title="Estresse do dia"
            question="Como foi o seu nível de estresse hoje?"
            anchor="0=tranquilo • 10=muito estressado"
            value={estresse}
            onChange={setEstresse}
          />
        </div>
      </Card>

      {/* Seção: Dose noturna */}
      <Card 
        title="Dose Noturna (Knight)" 
        subtitle="Desaceleração • Pronto para dormir • Tranquilidade"
      >
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 mb-4">
          <span className="text-sm text-foreground font-medium">Tomou a dose noturna?</span>
          <Chip active={tomouNoite} onClick={() => setTomouNoite(true)}>✓ Sim</Chip>
          <Chip active={!tomouNoite} onClick={() => setTomouNoite(false)}>✗ Não</Chip>
        </div>

        {tomouNoite && (
          <>
            <div className="bg-muted/20 rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                  Escalas de resposta noturna
                </span>
              </div>
              <ScaleBlock 
                title={defsNoite[0].nome} 
                question={defsNoite[0].pergunta} 
                anchor={defsNoite[0].ancora} 
                value={e1} 
                onChange={setE1} 
              />
              <div className="h-px bg-border" />
              <ScaleBlock 
                title={defsNoite[1].nome} 
                question={defsNoite[1].pergunta} 
                anchor={defsNoite[1].ancora} 
                value={e2} 
                onChange={setE2} 
              />
              <div className="h-px bg-border" />
              <ScaleBlock 
                title={defsNoite[2].nome} 
                question={defsNoite[2].pergunta} 
                anchor={defsNoite[2].ancora} 
                value={e3} 
                onChange={setE3} 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Field label="Efeito indesejado">
                <select
                  className="nzt-input"
                  value={sevNoite}
                  onChange={(e) => setSevNoite(e.target.value as Severidade)}
                >
                  <option value="NENHUM">Nenhum</option>
                  <option value="LEVE">Leve</option>
                  <option value="MODERADO">Moderado</option>
                  <option value="FORTE">Forte</option>
                </select>
              </Field>

              <Field label="Sintomas (toque para marcar)">
                <div className="flex flex-wrap gap-2">
                  {SINTOMAS_NOITE.map((s) => (
                    <button
                      key={s.k}
                      className={`nzt-pill ${sintomasNoite.includes(s.k) ? "nzt-pill-active" : ""}`}
                      onClick={() => toggleSintoma(s.k)}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </Field>
            </div>
          </>
        )}
      </Card>

      {/* Botão de salvar */}
      <div className="flex gap-3">
        <button className="nzt-btn-primary" onClick={salvar}>
          Salvar registro completo
        </button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Sem sono/cafeína/estresse, o dado pode enganar. Aqui, contexto protege o estudo.
      </p>
    </div>
  );
}
