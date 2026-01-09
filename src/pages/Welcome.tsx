import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Brain, User, ClipboardList, ChevronRight, Sparkles, BarChart3 } from "lucide-react";
import { getParticipante, updateParticipante } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import type { Participante, PerfilAtividade, RotinaTrabalho, NivelExperiencia, FrequenciaExercicio, ConsumoSubstancia } from "@/lib/types";
import { 
  OBJETIVOS, 
  EXPERIENCIA_SUPLEMENTOS, 
  CONDICOES_SAUDE, 
  FREQUENCIA_EXERCICIO, 
  CONSUMO_OPTIONS,
  PERFIS,
  ROTINAS 
} from "@/lib/onboarding-data";
import { DynamicIcon } from "@/components/DynamicIcon";

type WelcomeStep = "intro" | "profile" | "goals" | "activity" | "health" | "lifestyle" | "complete";

export default function Welcome() {
  const [participante, setParticipante] = useState<Participante | null>(null);
  const [step, setStep] = useState<WelcomeStep>("intro");
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Profile fields
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState<string>("NAO_INFORMAR");
  const [dataNascimento, setDataNascimento] = useState("");
  const [altura, setAltura] = useState<number | null>(null);
  const [peso, setPeso] = useState<number | null>(null);

  // Goals & Activity
  const [objetivo, setObjetivo] = useState<string | null>(null);
  const [experiencia, setExperiencia] = useState<NivelExperiencia | null>(null);
  const [perfil, setPerfil] = useState<PerfilAtividade | null>(null);
  const [rotina, setRotina] = useState<RotinaTrabalho | null>(null);

  // Health
  const [condicoes, setCondicoes] = useState<string[]>([]);
  const [medicamentos, setMedicamentos] = useState("");

  // Lifestyle
  const [qualidadeSono, setQualidadeSono] = useState<number>(5);
  const [horasSono, setHorasSono] = useState<number | null>(7);
  const [nivelEstresse, setNivelEstresse] = useState<number>(5);
  const [frequenciaExercicio, setFrequenciaExercicio] = useState<FrequenciaExercicio | null>(null);
  const [consumoCafeina, setConsumoCafeina] = useState<ConsumoSubstancia | null>(null);
  const [consumoAlcool, setConsumoAlcool] = useState<ConsumoSubstancia | null>(null);

  useEffect(() => {
    async function load() {
      const p = await getParticipante();
      if (p) {
        setParticipante(p);
        setNome(p.nome_publico || "");
        setSexo(p.sexo || "NAO_INFORMAR");
        setDataNascimento(p.data_nascimento || "");
        setAltura(p.altura_cm);
        setPeso(p.peso_kg);
        setObjetivo(p.objetivo_principal);
        setExperiencia(p.nivel_experiencia_suplementos as NivelExperiencia | null);
        setPerfil(p.perfil_atividade);
        setRotina(p.rotina_trabalho);
        setCondicoes(p.condicoes_saude || []);
        setMedicamentos(p.medicamentos_uso || "");
        setQualidadeSono(p.qualidade_sono_geral || 5);
        setHorasSono(p.horas_sono_media);
        setNivelEstresse(p.nivel_estresse_geral || 5);
        setFrequenciaExercicio(p.frequencia_exercicio as FrequenciaExercicio | null);
        setConsumoCafeina(p.consumo_cafeina as ConsumoSubstancia | null);
        setConsumoAlcool(p.consumo_alcool as ConsumoSubstancia | null);
      }
    }
    load();
  }, []);

  const toggleCondicao = (c: string) => {
    setCondicoes(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };

  const saveAndContinue = async (nextStep: WelcomeStep, complete = false) => {
    if (!participante) return;
    setSaving(true);

    try {
      await updateParticipante(participante.id, {
        nome_publico: nome,
        sexo: sexo as Participante["sexo"],
        data_nascimento: dataNascimento,
        altura_cm: altura,
        peso_kg: peso,
        objetivo_principal: objetivo,
        nivel_experiencia_suplementos: experiencia,
        perfil_atividade: perfil,
        rotina_trabalho: rotina,
        condicoes_saude: condicoes,
        medicamentos_uso: medicamentos || null,
        qualidade_sono_geral: qualidadeSono,
        horas_sono_media: horasSono,
        nivel_estresse_geral: nivelEstresse,
        frequencia_exercicio: frequenciaExercicio,
        consumo_cafeina: consumoCafeina,
        consumo_alcool: consumoAlcool,
        pratica_exercicio: frequenciaExercicio !== "NUNCA" && frequenciaExercicio !== null,
        onboarding_completo: complete,
      });

      if (complete) {
        toast({
          title: "Configuração completa",
          description: "Sua plataforma está pronta. Boas análises!",
        });
        navigate("/app/hoje");
      } else {
        setStep(nextStep);
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

  const steps: { key: WelcomeStep; label: string }[] = [
    { key: "intro", label: "Início" },
    { key: "profile", label: "Perfil" },
    { key: "goals", label: "Objetivos" },
    { key: "activity", label: "Atividade" },
    { key: "health", label: "Saúde" },
    { key: "lifestyle", label: "Estilo" },
  ];

  const currentIndex = steps.findIndex(s => s.key === step);

  if (!participante) {
    return (
      <div className="min-h-screen flex items-center justify-center vyr-gradient-bg">
        <div className="text-vyr-gray-400 animate-pulse font-mono">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen vyr-gradient-bg relative overflow-hidden">
      {/* Background effects - VYR style */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--vyr-gray-600)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--vyr-gray-600)) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute inset-0 vyr-gradient-radial opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[150px] opacity-15" style={{ background: 'hsl(var(--vyr-accent))' }} />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Progress bar - only show after intro */}
        {step !== "intro" && step !== "complete" && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {steps.slice(1).map((s, i) => (
                <div key={s.key} className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-sm flex items-center justify-center text-xs font-medium font-mono transition-all
                    ${currentIndex > i + 1 ? 'bg-vyr-accent/20 text-vyr-accent border border-vyr-accent/50' : 
                      currentIndex === i + 1 ? 'bg-vyr-accent/10 text-vyr-gray-200 border border-vyr-accent/30' : 
                      'bg-vyr-gray-800/50 text-vyr-gray-500 border border-vyr-gray-700/50'}
                  `}>
                    {i + 1}
                  </div>
                  {i < steps.length - 2 && (
                    <div className={`
                      w-8 sm:w-16 h-0.5 mx-1
                      ${currentIndex > i + 1 ? 'bg-vyr-accent/50' : 'bg-vyr-gray-700/50'}
                    `} />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-vyr-gray-500 font-mono">
              Etapa {currentIndex} de {steps.length - 1}
            </p>
          </div>
        )}

        {/* INTRO STEP */}
        {step === "intro" && (
          <div className="text-center space-y-8 py-12">
            <div className="vyr-badge-accent">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-mono tracking-wider">COGNITIVE PERFORMANCE SYSTEM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-vyr-white leading-tight font-mono tracking-tight">
              Bem-vindo ao{" "}
              <span className="text-gradient-accent">VYR</span>
            </h1>

            <p className="text-vyr-gray-300 max-w-md mx-auto leading-relaxed">
              Para personalizar sua experiência e fornecer análises precisas, precisamos conhecer seu perfil.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="vyr-card-glow flex flex-col items-center gap-2 p-4">
                <User className="w-6 h-6 text-vyr-accent vyr-icon-glow" />
                <span className="text-xs text-vyr-gray-400 font-mono">Perfil básico</span>
              </div>
              <div className="vyr-card-glow flex flex-col items-center gap-2 p-4">
                <ClipboardList className="w-6 h-6 text-vyr-cyan vyr-icon-glow" />
                <span className="text-xs text-vyr-gray-400 font-mono">Anamnese</span>
              </div>
              <div className="vyr-card-glow flex flex-col items-center gap-2 p-4">
                <BarChart3 className="w-6 h-6 text-vyr-accentGlow vyr-icon-glow" />
                <span className="text-xs text-vyr-gray-400 font-mono">Análises</span>
              </div>
            </div>

            <p className="text-xs text-vyr-gray-500 font-mono">
              Leva menos de 3 minutos. Seus dados são confidenciais.
            </p>

            <button
              onClick={() => setStep("profile")}
              className="vyr-btn-accent inline-flex items-center gap-2 px-8 py-4 rounded-sm text-vyr-white font-mono"
            >
              Começar configuração
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* PROFILE STEP */}
        {step === "profile" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-vyr-white mb-2 font-mono">Dados básicos</h2>
              <p className="text-vyr-gray-400 text-sm">Informações para calibrar referências</p>
            </div>

            <div className="vyr-card-glow p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-vyr-gray-400 mb-2 font-mono">Nome (visível no app)</label>
                  <input
                    type="text"
                    className="vyr-input rounded-sm"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-xs text-vyr-gray-400 mb-2 font-mono">Sexo biológico</label>
                  <select
                    className="vyr-input rounded-sm"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                  >
                    <option value="NAO_INFORMAR">Não informar</option>
                    <option value="MASCULINO">Masculino</option>
                    <option value="FEMININO">Feminino</option>
                    <option value="OUTRO">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-vyr-gray-400 mb-2 font-mono">Data de nascimento</label>
                <input
                  type="date"
                  className="vyr-input rounded-sm"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-vyr-gray-400 mb-2 font-mono">Altura (cm)</label>
                  <input
                    type="number"
                    className="vyr-input rounded-sm"
                    value={altura ?? ""}
                    onChange={(e) => setAltura(e.target.value ? Number(e.target.value) : null)}
                    placeholder="175"
                  />
                </div>
                <div>
                  <label className="block text-xs text-vyr-gray-400 mb-2 font-mono">Peso (kg)</label>
                  <input
                    type="number"
                    className="vyr-input rounded-sm"
                    value={peso ?? ""}
                    onChange={(e) => setPeso(e.target.value ? Number(e.target.value) : null)}
                    placeholder="70"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => saveAndContinue("goals")}
                disabled={saving || !nome || !dataNascimento}
                className="vyr-btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm font-mono disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? "Salvando..." : "Continuar"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* GOALS STEP */}
        {step === "goals" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-vyr-white mb-2 font-mono">Seus objetivos</h2>
              <p className="text-vyr-gray-400 text-sm">O que você busca com a suplementação?</p>
            </div>

            <div className="vyr-card-glow p-6 space-y-6">
              <div>
                <label className="block text-xs text-vyr-gray-400 mb-3 font-mono">Objetivo principal</label>
                <div className="grid grid-cols-1 gap-2">
                  {OBJETIVOS.map((obj) => (
                    <button
                      key={obj.value}
                      onClick={() => setObjetivo(obj.value)}
                      className={`
                        p-4 rounded-sm text-left text-sm transition-all border flex items-center gap-3
                        ${objetivo === obj.value 
                          ? 'bg-vyr-accent/10 border-vyr-accent/30 text-vyr-white' 
                          : 'bg-vyr-gray-800/50 border-vyr-gray-700/50 text-vyr-gray-300 hover:border-vyr-gray-600'}
                      `}
                    >
                      <div className="w-9 h-9 rounded-sm bg-vyr-accent/10 flex items-center justify-center flex-shrink-0">
                        <DynamicIcon name={obj.icon} className="w-5 h-5 text-vyr-accent vyr-icon-glow" />
                      </div>
                      <span>{obj.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-vyr-gray-400 mb-3 font-mono">Experiência com suplementos nootrópicos</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {EXPERIENCIA_SUPLEMENTOS.map((exp) => (
                    <button
                      key={exp.value}
                      onClick={() => setExperiencia(exp.value as NivelExperiencia)}
                      className={`
                        p-3 rounded-sm text-sm transition-all border font-mono
                        ${experiencia === exp.value 
                          ? 'bg-vyr-accent/10 border-vyr-accent/30 text-vyr-white' 
                          : 'bg-vyr-gray-800/50 border-vyr-gray-700/50 text-vyr-gray-300 hover:border-vyr-gray-600'}
                      `}
                    >
                      {exp.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep("profile")}
                className="px-6 py-3 rounded-sm text-vyr-gray-400 hover:text-vyr-white transition-colors font-mono"
              >
                Voltar
              </button>
              <button
                onClick={() => saveAndContinue("activity")}
                disabled={saving || !objetivo}
                className="vyr-btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm font-mono disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? "Salvando..." : "Continuar"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ACTIVITY STEP */}
        {step === "activity" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-vyr-white mb-2 font-mono">Perfil de atividade</h2>
              <p className="text-vyr-gray-400 text-sm">Como é seu dia a dia profissional?</p>
            </div>

            <div className="vyr-card-glow p-6 space-y-6">
              <div>
                <label className="block text-xs text-vyr-gray-400 mb-3 font-mono">Tipo de atividade principal</label>
                <div className="grid grid-cols-1 gap-2">
                  {PERFIS.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setPerfil(p.value as PerfilAtividade)}
                      className={`
                        p-4 rounded-sm text-left transition-all border flex items-start gap-4
                        ${perfil === p.value 
                          ? 'bg-vyr-accent/10 border-vyr-accent/30' 
                          : 'bg-vyr-gray-800/50 border-vyr-gray-700/50 hover:border-vyr-gray-600'}
                      `}
                    >
                      <div className="w-10 h-10 rounded-sm bg-vyr-accent/10 flex items-center justify-center flex-shrink-0">
                        <DynamicIcon name={p.icon} className="w-5 h-5 text-vyr-accent vyr-icon-glow" />
                      </div>
                      <div>
                        <div className={`font-medium font-mono ${perfil === p.value ? 'text-vyr-white' : 'text-vyr-gray-300'}`}>
                          {p.title}
                        </div>
                        <div className="text-xs text-vyr-gray-500 mt-0.5">{p.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-vyr-gray-400 mb-3 font-mono">Rotina de trabalho</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {ROTINAS.map((r) => (
                    <button
                      key={r.value}
                      onClick={() => setRotina(r.value as RotinaTrabalho)}
                      className={`
                        p-4 rounded-sm text-center transition-all border
                        ${rotina === r.value 
                          ? 'bg-vyr-accent/10 border-vyr-accent/30 text-vyr-white' 
                          : 'bg-vyr-gray-800/50 border-vyr-gray-700/50 text-vyr-gray-300 hover:border-vyr-gray-600'}
                      `}
                    >
                      <div className="w-10 h-10 rounded-sm bg-vyr-gray-800/50 flex items-center justify-center mx-auto mb-2">
                        <DynamicIcon name={r.icon} className="w-5 h-5 text-vyr-accent vyr-icon-glow" />
                      </div>
                      <span className="text-xs font-mono">{r.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep("goals")}
                className="px-6 py-3 rounded-sm text-vyr-gray-400 hover:text-vyr-white transition-colors font-mono"
              >
                Voltar
              </button>
              <button
                onClick={() => saveAndContinue("health")}
                disabled={saving || !perfil}
                className="vyr-btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm font-mono disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? "Salvando..." : "Continuar"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* HEALTH STEP */}
        {step === "health" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-vyr-white mb-2 font-mono">Condições de saúde</h2>
              <p className="text-vyr-gray-400 text-sm">Informações importantes para segurança</p>
            </div>

            <div className="vyr-card-glow p-6 space-y-6">
              <div>
                <label className="block text-xs text-vyr-gray-400 mb-3 font-mono">Possui alguma condição? (selecione as aplicáveis)</label>
                <div className="flex flex-wrap gap-2">
                  {CONDICOES_SAUDE.map((c) => (
                    <button
                      key={c.k}
                      onClick={() => toggleCondicao(c.k)}
                      className={`
                        px-4 py-2 rounded-sm text-sm transition-all border font-mono
                        ${condicoes.includes(c.k) 
                          ? 'bg-vyr-accent/10 border-vyr-accent/30 text-vyr-white' 
                          : 'bg-vyr-gray-800/50 border-vyr-gray-700/50 text-vyr-gray-400 hover:border-vyr-gray-600'}
                      `}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-vyr-gray-400 mb-2 font-mono">Medicamentos em uso (opcional)</label>
                <textarea
                  className="vyr-input rounded-sm resize-none h-20"
                  value={medicamentos}
                  onChange={(e) => setMedicamentos(e.target.value)}
                  placeholder="Liste medicamentos que usa regularmente..."
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep("activity")}
                className="px-6 py-3 rounded-sm text-vyr-gray-400 hover:text-vyr-white transition-colors font-mono"
              >
                Voltar
              </button>
              <button
                onClick={() => saveAndContinue("lifestyle")}
                disabled={saving}
                className="vyr-btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm font-mono disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? "Salvando..." : "Continuar"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* LIFESTYLE STEP */}
        {step === "lifestyle" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-vyr-white mb-2 font-mono">Estilo de vida</h2>
              <p className="text-vyr-gray-400 text-sm">Fatores que influenciam sua performance</p>
            </div>

            <div className="vyr-card-glow p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-vyr-gray-400 mb-3 font-mono">Qualidade geral do sono (0-10)</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={qualidadeSono}
                      onChange={(e) => setQualidadeSono(Number(e.target.value))}
                      className="flex-1 accent-vyr-accent"
                    />
                    <span className="text-vyr-white font-medium w-8 text-center font-mono">{qualidadeSono}</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-vyr-gray-500 mt-1">
                    <span>Péssimo</span>
                    <span>Excelente</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-vyr-gray-400 mb-3 font-mono">Nível de estresse geral (0-10)</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={nivelEstresse}
                      onChange={(e) => setNivelEstresse(Number(e.target.value))}
                      className="flex-1 accent-vyr-accent"
                    />
                    <span className="text-vyr-white font-medium w-8 text-center font-mono">{nivelEstresse}</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-vyr-gray-500 mt-1">
                    <span>Tranquilo</span>
                    <span>Muito estressado</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs text-vyr-gray-400 mb-3 font-mono">Horas de sono por noite</label>
                <div className="flex flex-wrap gap-2">
                  {[5, 6, 7, 8, 9].map((h) => (
                    <button
                      key={h}
                      onClick={() => setHorasSono(h)}
                      className={`
                        px-5 py-2 rounded-sm text-sm transition-all border font-mono
                        ${horasSono === h 
                          ? 'bg-vyr-accent/10 border-vyr-accent/30 text-vyr-white' 
                          : 'bg-vyr-gray-800/50 border-vyr-gray-700/50 text-vyr-gray-400 hover:border-vyr-gray-600'}
                      `}
                    >
                      {h}h
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-vyr-gray-400 mb-3 font-mono">Frequência de exercícios</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {FREQUENCIA_EXERCICIO.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFrequenciaExercicio(f.value as FrequenciaExercicio)}
                      className={`
                        p-3 rounded-sm text-xs transition-all border font-mono
                        ${frequenciaExercicio === f.value 
                          ? 'bg-vyr-accent/10 border-vyr-accent/30 text-vyr-white' 
                          : 'bg-vyr-gray-800/50 border-vyr-gray-700/50 text-vyr-gray-400 hover:border-vyr-gray-600'}
                      `}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-vyr-gray-400 mb-3 font-mono">Consumo de cafeína</label>
                  <div className="grid grid-cols-2 gap-2">
                    {CONSUMO_OPTIONS.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => setConsumoCafeina(c.value as ConsumoSubstancia)}
                        className={`
                          p-2 rounded-sm text-xs transition-all border font-mono
                          ${consumoCafeina === c.value 
                            ? 'bg-vyr-accent/10 border-vyr-accent/30 text-vyr-white' 
                            : 'bg-vyr-gray-800/50 border-vyr-gray-700/50 text-vyr-gray-400 hover:border-vyr-gray-600'}
                        `}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-vyr-gray-400 mb-3 font-mono">Consumo de álcool</label>
                  <div className="grid grid-cols-2 gap-2">
                    {CONSUMO_OPTIONS.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => setConsumoAlcool(c.value as ConsumoSubstancia)}
                        className={`
                          p-2 rounded-sm text-xs transition-all border font-mono
                          ${consumoAlcool === c.value 
                            ? 'bg-vyr-accent/10 border-vyr-accent/30 text-vyr-white' 
                            : 'bg-vyr-gray-800/50 border-vyr-gray-700/50 text-vyr-gray-400 hover:border-vyr-gray-600'}
                        `}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep("health")}
                className="px-6 py-3 rounded-sm text-vyr-gray-400 hover:text-vyr-white transition-colors font-mono"
              >
                Voltar
              </button>
              <button
                onClick={() => saveAndContinue("complete", true)}
                disabled={saving}
                className="vyr-btn-accent inline-flex items-center gap-2 px-8 py-3 rounded-sm font-mono shadow-[0_0_20px_hsl(var(--vyr-accent)/0.3)] hover:shadow-[0_0_30px_hsl(var(--vyr-accent)/0.4)] transition-all disabled:opacity-50"
              >
                {saving ? "Salvando..." : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Concluir e acessar
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
