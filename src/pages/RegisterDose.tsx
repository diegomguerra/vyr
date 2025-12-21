import { useEffect, useMemo, useState } from "react";
import { Card, Field, Chip, ScaleBlock } from "@/components/nzt";
import { ESCALAS, JANELAS, SINTOMAS } from "@/lib/microcopy";
import { hojeISO } from "@/lib/date";
import { getParticipante, upsertRegistroDose } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import type { JanelaDose, Severidade, Participante } from "@/lib/types";

// Todas as janelas de dose
const JANELAS_DOSE: JanelaDose[] = ["DIA", "TARDE", "NOITE"];

export default function RegisterDose() {
  const [participante, setParticipante] = useState<Participante | null>(null);
  const [data, setData] = useState(hojeISO());
  const [janela, setJanela] = useState<JanelaDose>("DIA");
  const [tomou, setTomou] = useState(true);

  const [e1, setE1] = useState(6);
  const [e2, setE2] = useState(6);
  const [e3, setE3] = useState(6);
  const [e4, setE4] = useState(6); // 4ª escala exclusiva da NOITE

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
    
    const now = new Date();
    const horario = tomou 
      ? `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
      : null;
    
    try {
      await upsertRegistroDose({
        participante_id: participante.id,
        data,
        janela,
        tomou,
        horario_tomada: horario,
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
    } catch (error) {
      console.error("Erro ao salvar:", error);
      toast({
        title: "Erro ao salvar",
        description: "Tente novamente.",
        variant: "destructive",
      });
    }
  }

  function toggleSintoma(k: string) {
    setSintomas((prev) => 
      prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]
    );
  }

  const isNoite = janela === "NOITE";

  return (
    <div className="space-y-6">
      {/* Header explicativo */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
        <h2 className="text-sm font-semibold text-primary mb-1">
          {isNoite ? "🌙 Registro de Desaceleração Noturna" : "📊 Registro de Resposta Cognitiva"}
        </h2>
        <p className="text-xs text-muted-foreground">
          {isNoite 
            ? "Avalie como seu corpo e mente estão preparados para o descanso noturno."
            : "Registre como a dose afetou sua clareza, foco e energia durante o dia."}
        </p>
      </div>

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
          <Field label="Janela do dia">
            <div className="flex gap-2">
              {JANELAS_DOSE.map((j) => (
                <button
                  key={j}
                  onClick={() => setJanela(j)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    janela === j 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {j === "DIA" ? "☀️ Manhã" : j === "TARDE" ? "🌅 Tarde" : "🌙 Noite"}
                </button>
              ))}
            </div>
          </Field>
        </div>

        <div className="flex items-center gap-3 mt-4 p-3 rounded-lg bg-muted/30">
          <span className="text-sm text-foreground font-medium">Tomou a dose?</span>
          <Chip active={tomou} onClick={() => setTomou(true)}>✓ Sim</Chip>
          <Chip active={!tomou} onClick={() => setTomou(false)}>✗ Não</Chip>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-muted/20 rounded-lg p-4 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                {isNoite ? "Escalas de desaceleração" : "Escalas de resposta cognitiva"}
              </span>
            </div>
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
            {isNoite && defs[3] && (
              <>
                <div className="h-px bg-border" />
                <ScaleBlock 
                  title={defs[3].nome} 
                  question={defs[3].pergunta} 
                  anchor={defs[3].ancora} 
                  nota={defs[3].nota}
                  value={e4} 
                  onChange={setE4} 
                />
              </>
            )}
          </div>
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
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          Esta plataforma mede adaptação gradual com comparação justa. Não existe "milagre imediato".
        </p>
      </Card>
    </div>
  );
}
