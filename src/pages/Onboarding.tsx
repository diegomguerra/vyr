import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/nzt";
import { 
  OnboardingProgress, 
  StepObjetivo, 
  StepPerfil, 
  StepSaude, 
  StepSono, 
  StepEstilo 
} from "@/components/onboarding";
import { getParticipante, updateParticipante } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import type { 
  Participante, 
  PerfilAtividade, 
  RotinaTrabalho, 
  NivelExperiencia,
  FrequenciaExercicio,
  ConsumoSubstancia
} from "@/lib/types";

export default function Onboarding() {
  const [participante, setParticipante] = useState<Participante | null>(null);
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Form state
  const [objetivo, setObjetivo] = useState<string | null>(null);
  const [experiencia, setExperiencia] = useState<NivelExperiencia | null>(null);
  const [perfil, setPerfil] = useState<PerfilAtividade | null>(null);
  const [rotina, setRotina] = useState<RotinaTrabalho | null>(null);
  const [condicoes, setCondicoes] = useState<string[]>([]);
  const [medicamentos, setMedicamentos] = useState("");
  const [qualidadeSono, setQualidadeSono] = useState<number | null>(5);
  const [horasSono, setHorasSono] = useState<number | null>(null);
  const [horarioAcordar, setHorarioAcordar] = useState("07:00");
  const [horarioDormir, setHorarioDormir] = useState("23:00");
  const [nivelEstresse, setNivelEstresse] = useState<number | null>(5);
  const [frequenciaExercicio, setFrequenciaExercicio] = useState<FrequenciaExercicio | null>(null);
  const [consumoCafeina, setConsumoCafeina] = useState<ConsumoSubstancia | null>(null);
  const [consumoAlcool, setConsumoAlcool] = useState<ConsumoSubstancia | null>(null);

  useEffect(() => {
    async function load() {
      const p = await getParticipante();
      if (p) {
        setParticipante(p);
        // Load existing data
        setObjetivo(p.objetivo_principal);
        setExperiencia(p.nivel_experiencia_suplementos as NivelExperiencia | null);
        setPerfil(p.perfil_atividade);
        setRotina(p.rotina_trabalho);
        setCondicoes(p.condicoes_saude || []);
        setMedicamentos(p.medicamentos_uso || "");
        setQualidadeSono(p.qualidade_sono_geral);
        setHorasSono(p.horas_sono_media);
        setHorarioAcordar(p.horario_acordar || "07:00");
        setHorarioDormir(p.horario_dormir || "23:00");
        setNivelEstresse(p.nivel_estresse_geral);
        setFrequenciaExercicio(p.frequencia_exercicio as FrequenciaExercicio | null);
        setConsumoCafeina(p.consumo_cafeina as ConsumoSubstancia | null);
        setConsumoAlcool(p.consumo_alcool as ConsumoSubstancia | null);
        setStep(p.onboarding_etapa > 0 ? p.onboarding_etapa : 1);
      }
    }
    load();
  }, []);

  const saveProgress = async (nextStep: number, complete = false) => {
    if (!participante) return;
    setSaving(true);

    try {
      await updateParticipante(participante.id, {
        objetivo_principal: objetivo,
        nivel_experiencia_suplementos: experiencia,
        perfil_atividade: perfil,
        rotina_trabalho: rotina,
        condicoes_saude: condicoes,
        medicamentos_uso: medicamentos || null,
        qualidade_sono_geral: qualidadeSono,
        horas_sono_media: horasSono,
        horario_acordar: horarioAcordar || null,
        horario_dormir: horarioDormir || null,
        pratica_exercicio: frequenciaExercicio !== "NUNCA" && frequenciaExercicio !== null,
        frequencia_exercicio: frequenciaExercicio,
        nivel_estresse_geral: nivelEstresse,
        consumo_cafeina: consumoCafeina,
        consumo_alcool: consumoAlcool,
        onboarding_etapa: nextStep,
        onboarding_completo: complete,
      });

      setParticipante({
        ...participante,
        onboarding_etapa: nextStep,
        onboarding_completo: complete,
      });
      setStep(nextStep);

      if (complete) {
        toast({
          title: "Anamnese completa!",
          description: "Suas informações foram salvas. Bom acompanhamento!",
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Erro ao salvar:", error);
      toast({
        title: "Erro ao salvar",
        description: "Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleNext = () => {
    if (step < 5) {
      saveProgress(step + 1);
    } else {
      saveProgress(5, true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  if (!participante) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-muted-foreground text-sm animate-pulse">Carregando…</div>
      </div>
    );
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepObjetivo
            objetivo={objetivo}
            experiencia={experiencia}
            onObjetivoChange={setObjetivo}
            onExperienciaChange={setExperiencia}
          />
        );
      case 2:
        return (
          <StepPerfil
            perfil={perfil}
            rotina={rotina}
            onPerfilChange={setPerfil}
            onRotinaChange={setRotina}
          />
        );
      case 3:
        return (
          <StepSaude
            condicoes={condicoes}
            medicamentos={medicamentos}
            onCondicoesChange={setCondicoes}
            onMedicamentosChange={setMedicamentos}
          />
        );
      case 4:
        return (
          <StepSono
            qualidadeSono={qualidadeSono}
            horasSono={horasSono}
            horarioAcordar={horarioAcordar}
            horarioDormir={horarioDormir}
            onQualidadeSonoChange={setQualidadeSono}
            onHorasSonoChange={setHorasSono}
            onHorarioAcordarChange={setHorarioAcordar}
            onHorarioDormirChange={setHorarioDormir}
          />
        );
      case 5:
        return (
          <StepEstilo
            nivelEstresse={nivelEstresse}
            frequenciaExercicio={frequenciaExercicio}
            consumoCafeina={consumoCafeina}
            consumoAlcool={consumoAlcool}
            onNivelEstresseChange={setNivelEstresse}
            onFrequenciaExercicioChange={setFrequenciaExercicio}
            onConsumoCafeinaChange={setConsumoCafeina}
            onConsumoAlcoolChange={setConsumoAlcool}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card
      title="Anamnese Completa"
      subtitle="Conheça-se melhor • Resultados personalizados"
    >
      <OnboardingProgress currentStep={step} />

      <div className="min-h-[400px]">
        {renderStep()}
      </div>

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
        <button
          onClick={handleBack}
          disabled={step === 1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground hover:bg-muted"
        >
          <ChevronLeft size={18} />
          Voltar
        </button>

        <div className="text-sm text-muted-foreground">
          Etapa {step} de 5
        </div>

        <button
          onClick={handleNext}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {saving ? (
            "Salvando..."
          ) : step === 5 ? (
            <>
              Concluir
              <CheckCircle2 size={18} />
            </>
          ) : (
            <>
              Próximo
              <ChevronRight size={18} />
            </>
          )}
        </button>
      </div>
    </Card>
  );
}
