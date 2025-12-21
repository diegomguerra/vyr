import { useEffect, useMemo, useState } from "react";
import { Card, Field, Chip, ScaleBlock } from "@/components/nzt";
import { ESCALAS, JANELAS, SINTOMAS } from "@/lib/microcopy";
import { hojeISO } from "@/lib/date";
import { getParticipante, upsertRegistroDose } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import type { JanelaDose, Severidade, Participante } from "@/lib/types";

export default function RegisterDose() {
  const [participante, setParticipante] = useState<Participante | null>(null);
  const [data, setData] = useState(hojeISO());
  const [janela, setJanela] = useState<JanelaDose>("DIA");
  const [tomou, setTomou] = useState(true);

  const [e1, setE1] = useState(6);
  const [e2, setE2] = useState(6);
  const [e3, setE3] = useState(6);

  const [sev, setSev] = useState<Severidade>("NENHUM");
  const [sintomas, setSintomas] = useState<string[]>([]);
  const [obs, setObs] = useState("");
  
  const { toast } = useToast();

  useEffect(() => {
    async function load() {
      const p = await getParticipante();
      setParticipante(p);
    }
    load();
  }, []);

  const defs = ESCALAS[janela];
  const exemplo = useMemo(() => {
    const pa = participante?.perfil_atividade;
    return pa ? defs[0].exemploPorPerfil?.[pa] : undefined;
  }, [defs, participante?.perfil_atividade]);

  async function salvar() {
    if (!participante) return;
    
    await upsertRegistroDose({
      participante_id: participante.id,
      data,
      janela,
      tomou,
      horario_tomada: tomou ? new Date().toISOString() : null,
      escala_1: e1,
      escala_2: e2,
      escala_3: e3,
      efeito_indesejado: sev,
      sintomas,
      observacoes: obs || null,
    });
    
    toast({
      title: "Registro salvo",
      description: "Consistência > intensidade. Continue assim!",
    });
    setObs("");
  }

  function toggleSintoma(k: string) {
    setSintomas((prev) => 
      prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]
    );
  }

  return (
    <Card 
      title="Registrar dose" 
      subtitle={`${JANELAS[janela].titulo} • ${JANELAS[janela].subtitulo}`}
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
        <Field label="Janela">
          <select
            className="nzt-input"
            value={janela}
            onChange={(e) => setJanela(e.target.value as JanelaDose)}
          >
            <option value="DIA">Dia</option>
            <option value="TARDE">Tarde</option>
            <option value="NOITE">Noite</option>
          </select>
        </Field>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <span className="text-xs text-muted-foreground">Tomou?</span>
        <Chip active={tomou} onClick={() => setTomou(true)}>Sim</Chip>
        <Chip active={!tomou} onClick={() => setTomou(false)}>Não</Chip>
      </div>

      <div className="mt-6 space-y-2">
        <ScaleBlock 
          title={defs[0].nome} 
          question={defs[0].pergunta} 
          anchor={defs[0].ancora} 
          example={exemplo} 
          value={e1} 
          onChange={setE1} 
        />
        <div className="h-px bg-border" />
        <ScaleBlock 
          title={defs[1].nome} 
          question={defs[1].pergunta} 
          anchor={defs[1].ancora} 
          value={e2} 
          onChange={setE2} 
        />
        <div className="h-px bg-border" />
        <ScaleBlock 
          title={defs[2].nome} 
          question={defs[2].pergunta} 
          anchor={defs[2].ancora} 
          value={e3} 
          onChange={setE3} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <Field label="Efeito indesejado">
          <select
            className="nzt-input"
            value={sev}
            onChange={(e) => setSev(e.target.value as Severidade)}
          >
            <option value="NENHUM">Nenhum</option>
            <option value="LEVE">Leve</option>
            <option value="MODERADO">Moderado</option>
            <option value="FORTE">Forte</option>
          </select>
        </Field>

        <Field label="Sintomas (toque para marcar)">
          <div className="flex flex-wrap gap-2">
            {SINTOMAS.map((s) => (
              <button
                key={s.k}
                className={`nzt-pill ${sintomas.includes(s.k) ? "nzt-pill-active" : ""}`}
                onClick={() => toggleSintoma(s.k)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </Field>
      </div>

      <Field label="Observações (opcional)">
        <textarea
          className="nzt-input min-h-[90px] resize-none"
          value={obs}
          onChange={(e) => setObs(e.target.value)}
          placeholder="Algum contexto relevante do dia..."
        />
      </Field>

      <div className="flex gap-3 mt-5">
        <button className="nzt-btn-primary" onClick={salvar}>
          Salvar registro
        </button>
        <button 
          className="nzt-btn" 
          onClick={() => toast({ 
            title: "Dica", 
            description: "Mantenha consistência por 7 dias antes de concluir algo." 
          })}
        >
          Dica
        </button>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        Esta plataforma mede adaptação gradual com comparação justa. Não existe "milagre imediato".
      </p>
    </Card>
  );
}
