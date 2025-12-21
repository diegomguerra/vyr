import { useEffect, useState } from "react";
import { Card, Field } from "@/components/nzt";
import { getParticipante, updateParticipante } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import type { Participante } from "@/lib/types";

export default function Profile() {
  const [participante, setParticipante] = useState<Participante | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    async function load() {
      const p = await getParticipante();
      setParticipante(p);
    }
    load();
  }, []);

  if (!participante) {
    return (
      <div className="text-muted-foreground text-sm">Carregando…</div>
    );
  }

  async function patch(field: keyof Participante, value: unknown) {
    await updateParticipante(participante!.id, { [field]: value } as Partial<Participante>);
    setParticipante({ ...participante!, [field]: value });
    toast({
      title: "Perfil atualizado",
      description: `${field} salvo com sucesso.`,
    });
  }

  return (
    <Card 
      title="Perfil" 
      subtitle="Dados mínimos para personalização e referências"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Código">
          <input
            className="nzt-input bg-muted/50 cursor-not-allowed"
            value={participante.codigo}
            readOnly
          />
        </Field>
        <Field label="Nome (como aparece no app)">
          <input
            className="nzt-input"
            value={participante.nome_publico}
            onChange={(e) => patch("nome_publico", e.target.value)}
          />
        </Field>

        <Field label="Sexo">
          <select
            className="nzt-input"
            value={participante.sexo}
            onChange={(e) => patch("sexo", e.target.value)}
          >
            <option value="NAO_INFORMAR">Não informar</option>
            <option value="MASCULINO">Masculino</option>
            <option value="FEMININO">Feminino</option>
            <option value="OUTRO">Outro</option>
          </select>
        </Field>

        <Field label="Data de nascimento">
          <input
            type="date"
            className="nzt-input"
            value={participante.data_nascimento}
            onChange={(e) => patch("data_nascimento", e.target.value)}
          />
        </Field>

        <Field label="Altura (cm)">
          <input
            type="number"
            className="nzt-input"
            value={participante.altura_cm ?? ""}
            onChange={(e) => 
              patch("altura_cm", e.target.value ? Number(e.target.value) : null)
            }
          />
        </Field>

        <Field label="Peso (kg)">
          <input
            type="number"
            className="nzt-input"
            value={participante.peso_kg ?? ""}
            onChange={(e) => 
              patch("peso_kg", e.target.value ? Number(e.target.value) : null)
            }
          />
        </Field>
      </div>
    </Card>
  );
}
