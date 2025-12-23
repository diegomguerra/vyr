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
        navigate("/app/painel");
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div className="text-slate-400 animate-pulse">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-indigo-500/15 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Progress bar - only show after intro */}
        {step !== "intro" && step !== "complete" && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {steps.slice(1).map((s, i) => (
                <div key={s.key} className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all
                    ${currentIndex > i + 1 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' : 
                      currentIndex === i + 1 ? 'bg-violet-500/20 text-violet-300 border border-violet-500/50' : 
                      'bg-slate-800/50 text-slate-500 border border-slate-700/50'}
                  `}>
                    {i + 1}
                  </div>
                  {i < steps.length - 2 && (
                    <div className={`
                      w-8 sm:w-16 h-0.5 mx-1
                      ${currentIndex > i + 1 ? 'bg-emerald-500/50' : 'bg-slate-700/50'}
                    `} />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-slate-500">
              Etapa {currentIndex} de {steps.length - 1}
            </p>
          </div>
        )}

        {/* INTRO STEP */}
        {step === "intro" && (
          <div className="text-center space-y-8 py-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 backdrop-blur-sm">
              <Brain className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300 font-medium">Cognitive Performance System</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Bem-vindo ao{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                NZT
              </span>
            </h1>

            <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
              Para personalizar sua experiência e fornecer análises precisas, precisamos conhecer seu perfil.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <User className="w-6 h-6 text-emerald-400" />
                <span className="text-xs text-slate-400">Perfil básico</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <ClipboardList className="w-6 h-6 text-violet-400" />
                <span className="text-xs text-slate-400">Anamnese</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <BarChart3 className="w-6 h-6 text-amber-400" />
                <span className="text-xs text-slate-400">Análises</span>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Leva menos de 3 minutos. Seus dados são confidenciais.
            </p>

            <button
              onClick={() => setStep("profile")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 text-white font-semibold shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all"
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
              <h2 className="text-2xl font-bold text-white mb-2">Dados básicos</h2>
              <p className="text-slate-400 text-sm">Informações para calibrar referências</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-2">Nome (visível no app)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none transition-colors"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2">Sexo biológico</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-white focus:border-violet-500/50 focus:outline-none transition-colors"
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
                <label className="block text-xs text-slate-400 mb-2">Data de nascimento</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-white focus:border-violet-500/50 focus:outline-none transition-colors"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-2">Altura (cm)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none transition-colors"
                    value={altura ?? ""}
                    onChange={(e) => setAltura(e.target.value ? Number(e.target.value) : null)}
                    placeholder="175"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2">Peso (kg)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none transition-colors"
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h2 className="text-2xl font-bold text-white mb-2">Seus objetivos</h2>
              <p className="text-slate-400 text-sm">O que você busca com a suplementação?</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 space-y-6">
              <div>
                <label className="block text-xs text-slate-400 mb-3">Objetivo principal</label>
                <div className="grid grid-cols-1 gap-2">
                  {OBJETIVOS.map((obj) => (
                    <button
                      key={obj.value}
                      onClick={() => setObjetivo(obj.value)}
                      className={`
                        p-4 rounded-xl text-left text-sm transition-all border flex items-center gap-3
                        ${objetivo === obj.value 
                          ? 'bg-violet-500/20 border-violet-500/50 text-white' 
                          : 'bg-slate-900/30 border-slate-700/50 text-slate-300 hover:border-slate-600'}
                      `}
                    >
                      <div className="w-9 h-9 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                        <DynamicIcon name={obj.icon} className="w-5 h-5 text-violet-400" />
                      </div>
                      <span>{obj.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-3">Experiência com suplementos nootrópicos</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {EXPERIENCIA_SUPLEMENTOS.map((exp) => (
                    <button
                      key={exp.value}
                      onClick={() => setExperiencia(exp.value as NivelExperiencia)}
                      className={`
                        p-3 rounded-xl text-sm transition-all border
                        ${experiencia === exp.value 
                          ? 'bg-violet-500/20 border-violet-500/50 text-white' 
                          : 'bg-slate-900/30 border-slate-700/50 text-slate-300 hover:border-slate-600'}
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
                className="px-6 py-3 rounded-xl text-slate-400 hover:text-white transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={() => saveAndContinue("activity")}
                disabled={saving || !objetivo}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h2 className="text-2xl font-bold text-white mb-2">Perfil de atividade</h2>
              <p className="text-slate-400 text-sm">Como é seu dia a dia profissional?</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 space-y-6">
              <div>
                <label className="block text-xs text-slate-400 mb-3">Tipo de atividade principal</label>
                <div className="grid grid-cols-1 gap-2">
                  {PERFIS.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setPerfil(p.value as PerfilAtividade)}
                      className={`
                        p-4 rounded-xl text-left transition-all border flex items-start gap-4
                        ${perfil === p.value 
                          ? 'bg-violet-500/20 border-violet-500/50' 
                          : 'bg-slate-900/30 border-slate-700/50 hover:border-slate-600'}
                      `}
                    >
                      <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                        <DynamicIcon name={p.icon} className="w-5 h-5 text-violet-400" />
                      </div>
                      <div>
                        <div className={`font-medium ${perfil === p.value ? 'text-white' : 'text-slate-300'}`}>
                          {p.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{p.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-3">Rotina de trabalho</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {ROTINAS.map((r) => (
                    <button
                      key={r.value}
                      onClick={() => setRotina(r.value as RotinaTrabalho)}
                      className={`
                        p-4 rounded-xl text-center transition-all border
                        ${rotina === r.value 
                          ? 'bg-violet-500/20 border-violet-500/50 text-white' 
                          : 'bg-slate-900/30 border-slate-700/50 text-slate-300 hover:border-slate-600'}
                      `}
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center mx-auto mb-2">
                        <DynamicIcon name={r.icon} className="w-5 h-5 text-violet-400" />
                      </div>
                      <span className="text-xs">{r.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep("goals")}
                className="px-6 py-3 rounded-xl text-slate-400 hover:text-white transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={() => saveAndContinue("health")}
                disabled={saving || !perfil}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h2 className="text-2xl font-bold text-white mb-2">Condições de saúde</h2>
              <p className="text-slate-400 text-sm">Informações importantes para segurança</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 space-y-6">
              <div>
                <label className="block text-xs text-slate-400 mb-3">Possui alguma condição? (selecione as aplicáveis)</label>
                <div className="flex flex-wrap gap-2">
                  {CONDICOES_SAUDE.map((c) => (
                    <button
                      key={c.k}
                      onClick={() => toggleCondicao(c.k)}
                      className={`
                        px-4 py-2 rounded-full text-sm transition-all border
                        ${condicoes.includes(c.k) 
                          ? 'bg-violet-500/20 border-violet-500/50 text-white' 
                          : 'bg-slate-900/30 border-slate-700/50 text-slate-400 hover:border-slate-600'}
                      `}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-2">Medicamentos em uso (opcional)</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none transition-colors resize-none h-20"
                  value={medicamentos}
                  onChange={(e) => setMedicamentos(e.target.value)}
                  placeholder="Liste medicamentos que usa regularmente..."
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep("activity")}
                className="px-6 py-3 rounded-xl text-slate-400 hover:text-white transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={() => saveAndContinue("lifestyle")}
                disabled={saving}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h2 className="text-2xl font-bold text-white mb-2">Estilo de vida</h2>
              <p className="text-slate-400 text-sm">Fatores que influenciam sua performance</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-3">Qualidade geral do sono (0-10)</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={qualidadeSono}
                      onChange={(e) => setQualidadeSono(Number(e.target.value))}
                      className="flex-1 accent-violet-500"
                    />
                    <span className="text-white font-medium w-8 text-center">{qualidadeSono}</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Péssimo</span>
                    <span>Excelente</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-3">Nível de estresse geral (0-10)</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={nivelEstresse}
                      onChange={(e) => setNivelEstresse(Number(e.target.value))}
                      className="flex-1 accent-violet-500"
                    />
                    <span className="text-white font-medium w-8 text-center">{nivelEstresse}</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Tranquilo</span>
                    <span>Muito estressado</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-3">Horas de sono por noite</label>
                <div className="flex flex-wrap gap-2">
                  {[5, 6, 7, 8, 9].map((h) => (
                    <button
                      key={h}
                      onClick={() => setHorasSono(h)}
                      className={`
                        px-5 py-2 rounded-xl text-sm transition-all border
                        ${horasSono === h 
                          ? 'bg-violet-500/20 border-violet-500/50 text-white' 
                          : 'bg-slate-900/30 border-slate-700/50 text-slate-400 hover:border-slate-600'}
                      `}
                    >
                      {h}h
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-3">Frequência de exercícios</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {FREQUENCIA_EXERCICIO.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFrequenciaExercicio(f.value as FrequenciaExercicio)}
                      className={`
                        p-3 rounded-xl text-xs transition-all border
                        ${frequenciaExercicio === f.value 
                          ? 'bg-violet-500/20 border-violet-500/50 text-white' 
                          : 'bg-slate-900/30 border-slate-700/50 text-slate-400 hover:border-slate-600'}
                      `}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-3">Consumo de cafeína</label>
                  <div className="grid grid-cols-2 gap-2">
                    {CONSUMO_OPTIONS.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => setConsumoCafeina(c.value as ConsumoSubstancia)}
                        className={`
                          p-2 rounded-xl text-xs transition-all border
                          ${consumoCafeina === c.value 
                            ? 'bg-violet-500/20 border-violet-500/50 text-white' 
                            : 'bg-slate-900/30 border-slate-700/50 text-slate-400 hover:border-slate-600'}
                        `}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-3">Consumo de álcool</label>
                  <div className="grid grid-cols-2 gap-2">
                    {CONSUMO_OPTIONS.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => setConsumoAlcool(c.value as ConsumoSubstancia)}
                        className={`
                          p-2 rounded-xl text-xs transition-all border
                          ${consumoAlcool === c.value 
                            ? 'bg-violet-500/20 border-violet-500/50 text-white' 
                            : 'bg-slate-900/30 border-slate-700/50 text-slate-400 hover:border-slate-600'}
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
                className="px-6 py-3 rounded-xl text-slate-400 hover:text-white transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={() => saveAndContinue("complete", true)}
                disabled={saving}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all disabled:opacity-50"
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