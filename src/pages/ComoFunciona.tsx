import { Link } from "react-router-dom";
import { LandingNav, Footer } from "@/components/landing";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Zap, 
  Moon, 
  Sun, 
  Sunset, 
  Activity, 
  Heart, 
  Thermometer,
  Wind,
  TrendingUp,
  BarChart3,
  Target,
  Sparkles,
  ArrowRight,
  Check,
  Smartphone,
  Watch,
  Database,
  Layers
} from "lucide-react";

import sachetDia from "@/assets/sachet-dia.png";
import sachetTarde from "@/assets/sachet-tarde.png";
import sachetNoite from "@/assets/sachet-noite.png";
import smartRing from "@/assets/smart-ring.png";
import sistemaIntegradoHero from "@/assets/sistema-integrado-hero.png";

// ========== SEÇÃO 1: SACHÊS ==========
const sachets = [
  {
    id: "dia",
    name: "NZT Dia",
    icon: Sun,
    color: "from-amber-400 to-orange-500",
    bgGradient: "from-amber-900/20 to-slate-900/50",
    borderColor: "border-amber-500/20",
    accentColor: "text-amber-400",
    topBar: "from-amber-400 to-orange-500",
    periodo: "Manhã",
    objetivo: "Ativação & Clareza",
    descricao: "Atenção sustentada, foco executivo, memória de trabalho e clareza cognitiva.",
    image: sachetDia,
    areas: [
      { name: "Córtex Pré-Frontal", funcao: "Controle executivo" },
      { name: "Hipocampo", funcao: "Memória" },
      { name: "Córtex Temporal Medial", funcao: "Aprendizado" }
    ],
    componentes: [
      { nome: "Citicolina — 250 mg", funcao: "Atenção executiva, memória de trabalho" },
      { nome: "Fosfatidilserina — 200 mg", funcao: "Velocidade cognitiva, processamento executivo" },
      { nome: "Bacopa monnieri — 400 mg", funcao: "Consolidação de memória, aprendizado" },
      { nome: "L-Teanina — 100 mg", funcao: "Atenção calma, redução de ruído cognitivo" },
      { nome: "Teacrina — 100 mg", funcao: "Energia mental sustentada" },
      { nome: "PQQ — 10 mg", funcao: "Neuroplasticidade, suporte mitocondrial" },
      { nome: "Creatina — 3 g", funcao: "Reserva energética neuronal" },
      { nome: "Vitamina B6 — 25 mg", funcao: "Síntese de neurotransmissores" },
      { nome: "Vitamina B9 — 400 mcg", funcao: "Metilação e função neural" },
      { nome: "Vitamina B12 — 500 mcg", funcao: "Manutenção da mielina" }
    ]
  },
  {
    id: "tarde",
    name: "NZT Tarde",
    icon: Sunset,
    color: "from-purple-400 to-fuchsia-500",
    bgGradient: "from-purple-900/20 to-slate-900/50",
    borderColor: "border-purple-500/20",
    accentColor: "text-purple-400",
    topBar: "from-purple-400 to-fuchsia-500",
    periodo: "Tarde",
    objetivo: "Sustentação & Resiliência",
    descricao: "Sustentar desempenho mental, reduzir fadiga cognitiva e manter estabilidade emocional.",
    image: sachetTarde,
    areas: [
      { name: "Tronco Encefálico", funcao: "Vigília" },
      { name: "Córtex Pré-Frontal", funcao: "Sustentação" },
      { name: "Amígdala", funcao: "Regulação emocional" }
    ],
    componentes: [
      { nome: "Teacrina — 100 mg", funcao: "Estado de alerta estável, energia mental" },
      { nome: "L-Teanina — 100 mg", funcao: "Controle do estresse cognitivo, foco relaxado" },
      { nome: "L-Taurina — 250 mg", funcao: "Modulação neural, redução de excitotoxicidade" },
      { nome: "Cafeína — 25 mg", funcao: "Alerta suave, sem picos" },
      { nome: "Bicarbonato de sódio — 1,4 g", funcao: "Tampão ácido-base, performance" }
    ]
  },
  {
    id: "noite",
    name: "NZT Noite",
    icon: Moon,
    color: "from-indigo-400 to-blue-500",
    bgGradient: "from-indigo-900/20 to-slate-900/50",
    borderColor: "border-indigo-500/20",
    accentColor: "text-indigo-400",
    topBar: "from-indigo-400 to-blue-500",
    periodo: "Noite",
    objetivo: "Recuperação Cognitiva",
    descricao: "Redução de hiperatividade mental, recuperação neural, consolidação de memória e qualidade do sono.",
    image: sachetNoite,
    areas: [
      { name: "Hipotálamo", funcao: "Ritmo circadiano" },
      { name: "Sistema Límbico", funcao: "Amígdala" },
      { name: "Hipocampo", funcao: "Consolidação de memória" }
    ],
    componentes: [
      { nome: "N-acetilcisteína (NAC) — 600 mg", funcao: "Regulação glutamatérgica, recuperação sináptica" },
      { nome: "Ashwagandha — 300 mg", funcao: "Modulação do estresse, redução de ativação límbica" },
      { nome: "Magnésio quelato — 200 mg", funcao: "Relaxamento neural, transição sono-vigília" }
    ]
  }
];

// ========== SEÇÃO 2: ENTRADA DE DADOS ==========
const entradaDados = [
  { icon: Target, label: "Qualidade de foco", desc: "Capacidade de concentração" },
  { icon: Sparkles, label: "Clareza mental", desc: "Nitidez do pensamento" },
  { icon: Zap, label: "Energia mental", desc: "Disposição cognitiva" },
  { icon: Activity, label: "Estresse percebido", desc: "Nível de pressão mental" },
  { icon: Moon, label: "Qualidade do sono", desc: "Descanso e recuperação" },
  { icon: Sun, label: "Despertar mental", desc: "Clareza ao acordar" }
];

// ========== SEÇÃO 3: SMART RING ==========
const ringMetrics = [
  { icon: Heart, label: "Frequência cardíaca 24/7", desc: "Monitoramento contínuo" },
  { icon: Activity, label: "HRV", desc: "Variabilidade da frequência cardíaca" },
  { icon: TrendingUp, label: "Estresse fisiológico", desc: "Medição objetiva" },
  { icon: Moon, label: "Sono automático", desc: "Tracking sem esforço" },
  { icon: Zap, label: "Atividade diária", desc: "Movimento e energia" },
  { icon: Thermometer, label: "Temperatura corporal", desc: "Padrões térmicos" },
  { icon: Wind, label: "SpO₂", desc: "Saturação de oxigênio" },
  { icon: BarChart3, label: "VO₂ estimado", desc: "Capacidade aeróbica" }
];

// ========== SEÇÃO 4: INTEGRAÇÃO ==========
const integracaoDia = [
  { acao: "Maior eficiência do PFC", impacto: "Menor esforço cognitivo", metrica: "HRV mais estável" },
  { acao: "Aumento de atenção", impacto: "Menor ativação simpática", metrica: "Redução de estresse basal" },
  { acao: "Clareza mental", impacto: "Ritmo cardíaco organizado", metrica: "FC 24h mais estável" },
  { acao: "Menor ruído mental", impacto: "Melhor eficiência energética", metrica: "VO₂ estimado / atividade" }
];

const integracaoTarde = [
  { acao: "Regulação da amígdala", impacto: "Menos picos de estresse", metrica: "HRV Stress" },
  { acao: "Sustentação do alerta", impacto: "Energia sem hiperexcitação", metrica: "FC + atividade estáveis" },
  { acao: "Resiliência ao cansaço", impacto: "Menor queda cognitiva", metrica: "All-Day Activity" },
  { acao: "Menor fadiga mental", impacto: "Menor ativação simpática tardia", metrica: "Temperatura / HRV" }
];

const integracaoNoite = [
  { acao: "Redução do eixo HPA", impacto: "Menor cortisol noturno", metrica: "HRV noturno ↑" },
  { acao: "Relaxamento límbico", impacto: "Sono mais profundo", metrica: "Auto Sleep Tracking" },
  { acao: "Consolidação de memória", impacto: "Melhor arquitetura do sono", metrica: "Fases do sono" },
  { acao: "Recuperação neural", impacto: "Menor inflamação basal", metrica: "Temperatura noturna" },
  { acao: "Estabilidade autonômica", impacto: "Melhor recuperação", metrica: "FC noturna ↓" }
];

export default function ComoFunciona() {
  return (
    <div className="min-h-screen bg-slate-950">
      <LandingNav />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 via-fuchsia-600/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-transparent" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-medium mb-6">
            <Layers className="w-4 h-4" />
            Sistema Integrado de Performance
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Como Funciona o{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">
              NZT System
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Três pilares integrados: Sachês que modulam o cérebro, SmartRing que capta respostas fisiológicas, 
            e Plataforma que transforma dados em clareza, resiliência e recuperação mensuráveis.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-6 px-4 border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#saches" className="px-5 py-2.5 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/50 transition-colors flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Sachês</span>
            </a>
            <a href="#dados" className="px-5 py-2.5 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 transition-colors flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <Smartphone className="w-4 h-4 text-violet-400" />
              <span>Entrada de Dados</span>
            </a>
            <a href="#ring" className="px-5 py-2.5 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-fuchsia-500/50 transition-colors flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <Watch className="w-4 h-4 text-fuchsia-400" />
              <span>SmartRing</span>
            </a>
            <a href="#integracao" className="px-5 py-2.5 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-colors flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <Database className="w-4 h-4 text-emerald-400" />
              <span>Sistema Integrado</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 1: SACHÊS */}
      <section id="saches" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Como Funcionam os Sachês
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Os sachês atuam modulando sistemas neurofuncionais, não "sintomas". 
              Cada período tem um objetivo fisiológico distinto, alinhado ao ritmo circadiano.
            </p>
          </div>

          <div className="space-y-8">
            {sachets.map((sachet) => (
              <div 
                key={sachet.id} 
                className={`relative rounded-2xl bg-gradient-to-b ${sachet.bgGradient} border ${sachet.borderColor} overflow-hidden`}
              >
                {/* Top bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${sachet.topBar}`} />
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Header */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-20 h-20 rounded-xl ${sachet.accentColor.replace('text-', 'bg-')}/10 flex items-center justify-center p-2`}>
                          <img src={sachet.image} alt={sachet.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <sachet.icon className={`w-4 h-4 ${sachet.accentColor}`} />
                            <span className={`text-xs ${sachet.accentColor} font-medium uppercase`}>{sachet.periodo}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white">{sachet.name}</h3>
                        </div>
                      </div>

                      <p className={`text-sm mb-2`}>
                        <strong className={sachet.accentColor}>{sachet.objetivo}.</strong>
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        {sachet.descricao}
                      </p>
                      
                      {/* Áreas do cérebro */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                          Áreas Cerebrais Moduladas
                        </h4>
                        {sachet.areas.map((area, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Brain className={`w-3.5 h-3.5 ${sachet.accentColor}`} />
                            <span className="text-white font-medium">{area.name}</span>
                            <span className="text-slate-500">— {area.funcao}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Componentes */}
                    <div className="lg:w-2/3">
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
                        Componentes & Funções
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {sachet.componentes.map((comp, i) => (
                          <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <Check className={`w-4 h-4 ${sachet.accentColor} mt-0.5 flex-shrink-0`} />
                            <div>
                              <div className="text-sm text-white font-medium">{comp.nome}</div>
                              <div className="text-xs text-slate-500">{comp.funcao}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: ENTRADA DE DADOS */}
      <section id="dados" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              Sem SmartRing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Entrada de Dados na Plataforma
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Usuários sem SmartRing alimentam a plataforma via <strong className="text-white">percepção consciente</strong>, 
              o que é fundamental para criar um baseline subjetivo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {entradaDados.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-6">
              Por que a percepção é importante?
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <span className="font-medium text-white block mb-1">Baseline subjetivo</span>
                  <span className="text-sm text-slate-500">A percepção é seu ponto de partida pessoal</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <span className="font-medium text-white block mb-1">Controle interno</span>
                  <span className="text-sm text-slate-500">Referência para comparação futura</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <span className="font-medium text-white block mb-1">Integração com Ring</span>
                  <span className="text-sm text-slate-500">Compare sensação × dado fisiológico</span>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 rounded-xl bg-slate-900/50 border border-slate-700/50">
              <p className="text-sm text-slate-400 italic text-center">
                "A plataforma não desvaloriza o dado subjetivo — ela o usa como referência."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: SMART RING */}
      <section id="ring" className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6">
              <Watch className="w-4 h-4" />
              Wearable Estratégico
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Como Funciona o SmartRing
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              O SmartRing não mede pensamento — ele mede <strong className="text-white">respostas fisiológicas</strong> que 
              refletem o estado cognitivo. São marcadores indiretos, porém objetivos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative flex items-center justify-center order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/30 via-violet-500/20 to-indigo-500/30 blur-[80px] rounded-full scale-75" />
              <div className="relative z-10 w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent rounded-full" />
                <img
                  src={smartRing}
                  alt="NZT Smart Ring"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 0 40px rgba(217, 70, 239, 0.3))' }}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 order-1 lg:order-2">
              {ringMetrics.map((metric, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-fuchsia-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center mb-3">
                    <metric.icon className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{metric.label}</h3>
                  <p className="text-xs text-slate-500">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/30 border border-fuchsia-500/20">
            <p className="text-center text-slate-400">
              Esses dados são <strong className="text-fuchsia-400">marcadores indiretos, porém objetivos</strong>, do estado neurofisiológico.
              O Ring não "mede foco", mas mede o <strong className="text-white">custo fisiológico do foco</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: INTEGRAÇÃO */}
      <section id="integracao" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
              <Database className="w-4 h-4" />
              Sistema Completo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Sachê + SmartRing + Plataforma
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              O que os sachês causam no cérebro × o que o Ring consegue medir. 
              A plataforma cruza esses dados para mostrar <strong className="text-white">progresso cognitivo mensurável</strong>.
            </p>
          </div>

          {/* Fluxo */}
          <div className="grid sm:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Zap, label: "Usuário toma o Sachê", color: "text-amber-400", bg: "bg-amber-500/10" },
              { icon: Brain, label: "Componentes atuam no cérebro", color: "text-violet-400", bg: "bg-violet-500/10" },
              { icon: Activity, label: "SmartRing capta mudanças", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10" },
              { icon: BarChart3, label: "Plataforma interpreta", color: "text-emerald-400", bg: "bg-emerald-500/10" }
            ].map((step, i) => (
              <div key={i} className="text-center p-4">
                <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center mx-auto mb-3`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <p className="text-sm text-white font-medium">{step.label}</p>
                {i < 3 && (
                  <ArrowRight className="w-4 h-4 text-slate-600 mx-auto mt-4 hidden sm:block" />
                )}
              </div>
            ))}
          </div>

          {/* Tabelas de Integração */}
          <div className="space-y-8">
            {/* DIA */}
            <div className="rounded-2xl overflow-hidden border border-amber-500/20">
              <div className="bg-gradient-to-r from-amber-900/30 to-slate-900/50 px-6 py-4 flex items-center gap-3">
                <Sun className="w-5 h-5 text-amber-400" />
                <h3 className="font-semibold text-white">Ativação & Clareza — NZT Dia</h3>
              </div>
              <div className="bg-slate-900/50 p-4">
                <div className="grid grid-cols-3 gap-2 text-xs font-medium text-slate-500 uppercase mb-3 px-2">
                  <span>Ação no Cérebro</span>
                  <span>Impacto Fisiológico</span>
                  <span>Métrica do Ring</span>
                </div>
                {integracaoDia.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <span className="text-sm text-white">{row.acao}</span>
                    <span className="text-sm text-slate-400">{row.impacto}</span>
                    <span className="text-sm text-amber-400 font-medium">{row.metrica}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TARDE */}
            <div className="rounded-2xl overflow-hidden border border-purple-500/20">
              <div className="bg-gradient-to-r from-purple-900/30 to-slate-900/50 px-6 py-4 flex items-center gap-3">
                <Sunset className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white">Sustentação & Resiliência — NZT Tarde</h3>
              </div>
              <div className="bg-slate-900/50 p-4">
                <div className="grid grid-cols-3 gap-2 text-xs font-medium text-slate-500 uppercase mb-3 px-2">
                  <span>Ação no Cérebro</span>
                  <span>Impacto Fisiológico</span>
                  <span>Métrica do Ring</span>
                </div>
                {integracaoTarde.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <span className="text-sm text-white">{row.acao}</span>
                    <span className="text-sm text-slate-400">{row.impacto}</span>
                    <span className="text-sm text-purple-400 font-medium">{row.metrica}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NOITE */}
            <div className="rounded-2xl overflow-hidden border border-indigo-500/20">
              <div className="bg-gradient-to-r from-indigo-900/30 to-slate-900/50 px-6 py-4 flex items-center gap-3">
                <Moon className="w-5 h-5 text-indigo-400" />
                <h3 className="font-semibold text-white">Recuperação Cognitiva — NZT Noite</h3>
              </div>
              <div className="bg-slate-900/50 p-4">
                <div className="grid grid-cols-3 gap-2 text-xs font-medium text-slate-500 uppercase mb-3 px-2">
                  <span>Ação no Cérebro</span>
                  <span>Impacto Fisiológico</span>
                  <span>Métrica do Ring</span>
                </div>
                {integracaoNoite.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <span className="text-sm text-white">{row.acao}</span>
                    <span className="text-sm text-slate-400">{row.impacto}</span>
                    <span className="text-sm text-indigo-400 font-medium">{row.metrica}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: O QUE A PLATAFORMA FAZ */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            O Que a Plataforma Faz
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            A plataforma não mostra dados crus apenas. Ela cria inteligência sobre sua performance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Tendências individuais", desc: "Evolução ao longo do tempo" },
              { label: "Percepção × Fisiologia", desc: "Compare sensação com dados" },
              { label: "Resposta aos sachês", desc: "Impacto mensurável" },
              { label: "Insights personalizados", desc: "Recomendações baseadas em AI" }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Hero Image */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-amber-500/20 blur-3xl rounded-full" />
            <img 
              src={sistemaIntegradoHero} 
              alt="Sistema Integrado NZT - Sachês, SmartRing e Plataforma" 
              className="relative z-10 w-full max-w-3xl mx-auto rounded-2xl shadow-2xl shadow-fuchsia-500/20"
            />
          </div>

          {/* Quote */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-violet-900/20 via-fuchsia-900/20 to-amber-900/20 border border-violet-500/20">
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
              "Os sachês modulam o cérebro.<br />
              O SmartRing capta as respostas do corpo.<br />
              A plataforma transforma isso em <span className="text-fuchsia-400">clareza</span>, <span className="text-violet-400">resiliência</span> e <span className="text-indigo-400">recuperação</span> mensuráveis."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-slate-400 mb-8">
            Escolha o plano ideal para seus objetivos de performance cognitiva.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/rotina-completa">
              <Button className="px-8 py-6 text-base font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl">
                Ver Rotina Completa
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/sistema-completo">
              <Button variant="outline" className="px-8 py-6 text-base font-semibold border-fuchsia-500/50 text-fuchsia-400 hover:bg-fuchsia-500/10 rounded-xl">
                Conhecer Sistema Completo
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
