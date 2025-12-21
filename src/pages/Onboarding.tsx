import { useEffect, useState } from "react";
import { Card, Chip } from "@/components/nzt";
import { PERFIS } from "@/lib/microcopy";
import { getParticipante, updateParticipante } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import type { Participante, PerfilAtividade, RotinaTrabalho } from "@/lib/types";

export default function Onboarding() {
  const [participante, setParticipante] = useState<Participante | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    async function load() {
      console.log("Onboarding: Carregando participante...");
      const p = await getParticipante();
      console.log("Onboarding: Participante carregado:", p);
      console.log("Onboarding: PERFIS disponíveis:", PERFIS);
      setParticipante(p);
    }
    load();
  }, []);

  if (!participante) {
    return (
      <div className="text-muted-foreground text-sm">Carregando…</div>
    );
  }

  console.log("Onboarding: Renderizando com participante:", participante.id);

  async function setPerfil(v: PerfilAtividade) {
    if (!participante) return;
    await updateParticipante(participante.id, { perfil_atividade: v });
    setParticipante({ ...participante, perfil_atividade: v });
  }

  async function setRotina(v: RotinaTrabalho) {
    if (!participante) return;
    await updateParticipante(participante.id, { rotina_trabalho: v });
    setParticipante({ ...participante, rotina_trabalho: v });
  }

  function concluir() {
    toast({
      title: "Anamnese salva",
      description: "Agora é consistência. Continue registrando!",
    });
  }

  return (
    <Card
      title="Vamos conhecer sua forma de atuação"
      subtitle="Sem hierarquia • sem rótulos • com respeito"
    >
      <p className="text-sm text-foreground/80 leading-relaxed">
        Cada pessoa exerce atenção, clareza e energia de uma forma única.
        Aqui não existe atividade mais ou menos importante — apenas{" "}
        <strong className="text-foreground">formas diferentes de contribuir</strong>.
        Suas respostas nos ajudam a falar com você da maneira mais adequada ao seu dia a dia.
      </p>

      <h4 className="font-bold mt-6 mb-3">
        Qual tipo de atividade ocupa a maior parte do seu dia?
      </h4>
      <div className="space-y-3">
        {PERFIS.map((opt) => (
          <button
            key={opt.value}
            className={`w-full p-4 rounded-xl border text-left transition-all duration-200 ${
              participante.perfil_atividade === opt.value
                ? "border-primary/70 bg-primary/10"
                : "border-border bg-muted/30 hover:bg-muted/50"
            }`}
            onClick={() => setPerfil(opt.value)}
          >
            <div className="font-bold text-sm text-foreground">{opt.title}</div>
            <div className="text-xs text-muted-foreground mt-1">{opt.desc}</div>
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        Todas as opções exigem alto nível de atenção, energia e clareza — apenas de maneiras diferentes.
      </p>

      <h4 className="font-bold mt-6 mb-3">
        Seu dia costuma ser mais composto por:
      </h4>
      <div className="flex flex-wrap gap-3">
        <Chip 
          active={participante.rotina_trabalho === "REUNIOES"} 
          onClick={() => setRotina("REUNIOES")}
        >
          Reuniões e interações
        </Chip>
        <Chip 
          active={participante.rotina_trabalho === "FOCO"} 
          onClick={() => setRotina("FOCO")}
        >
          Foco individual
        </Chip>
        <Chip 
          active={participante.rotina_trabalho === "MISTO"} 
          onClick={() => setRotina("MISTO")}
        >
          Combinação dos dois
        </Chip>
      </div>

      <div className="mt-6">
        <button className="nzt-btn-primary" onClick={concluir}>
          Concluir
        </button>
      </div>
    </Card>
  );
}
