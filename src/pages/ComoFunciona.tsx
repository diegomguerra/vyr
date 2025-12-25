import { Link } from "react-router-dom";
import { LandingNav, Footer } from "@/components/landing";
import { Button } from "@/components/ui/button";
import { SachetMockup, NodeVisual } from "@/brand";
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

// ========== SEÇÃO 1: SACHÊS ==========
const sachets = [
  {
    id: "dia",
    name: "VYR BOOT",
    variant: "BOOT" as const,
    icon: Sun,
    bgColor: "bg-vyr-gray-100",
    textColor: "text-vyr-black",
    accentColor: "text-vyr-gray-600",
    borderColor: "border-vyr-gray-300",
    periodo: "Manhã",
    objetivo: "Ativação & Clareza",
    descricao: "Atenção sustentada, foco executivo, memória de trabalho e clareza cognitiva.",
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
    name: "VYR HOLD",
    variant: "HOLD" as const,
    icon: Sunset,
    bgColor: "bg-vyr-gray-600",
    textColor: "text-vyr-white",
    accentColor: "text-vyr-gray-300",
    borderColor: "border-vyr-gray-500",
    periodo: "Tarde",
    objetivo: "Sustentação & Resiliência",
    descricao: "Sustentar desempenho mental, reduzir fadiga cognitiva e manter estabilidade emocional.",
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
    name: "VYR CLEAR",
    variant: "CLEAR" as const,
    icon: Moon,
    bgColor: "bg-vyr-coldBlue",
    textColor: "text-vyr-white",
    accentColor: "text-vyr-gray-300",
    borderColor: "border-vyr-cold-blue/50",
    periodo: "Noite",
    objetivo: "Recuperação Cognitiva",
    descricao: "Redução de hiperatividade mental, recuperação neural, consolidação de memória e qualidade do sono.",
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

// ========== SEÇÃO 3: VYR NODE ==========
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
    <div className="min-h-screen bg-vyr-black">
      <LandingNav />
      
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-vyr-gray-900/50 via-transparent to-transparent" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-vyr-gray-800/50 border border-vyr-gray-700/50 text-vyr-gray-300 text-xs sm:text-sm font-mono mb-4 sm:mb-6">
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Sistema Integrado de Performance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-vyr-white mb-4 sm:mb-6">
            Como Funciona o{" "}
            <span className="font-mono tracking-wider">VYR SYSTEM</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-vyr-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
            Três pilares integrados: Sachês que modulam o cérebro, VYR NODE que capta respostas fisiológicas, 
            e Plataforma que transforma dados em clareza, resiliência e recuperação mensuráveis.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-4 sm:py-6 px-4 border-y border-vyr-gray-800 bg-vyr-gray-900/50 overflow-x-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 min-w-max sm:min-w-0">
            <a href="#saches" className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-vyr-gray-800/50 border border-vyr-gray-700/50 hover:border-vyr-gray-500 transition-colors flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-vyr-gray-300 hover:text-vyr-white whitespace-nowrap">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-400" />
              <span>Sachês</span>
            </a>
            <a href="#dados" className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-vyr-gray-800/50 border border-vyr-gray-700/50 hover:border-vyr-gray-500 transition-colors flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-vyr-gray-300 hover:text-vyr-white whitespace-nowrap">
              <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-400" />
              <span>Dados</span>
            </a>
            <a href="#ring" className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-vyr-gray-800/50 border border-vyr-gray-700/50 hover:border-vyr-gray-500 transition-colors flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-vyr-gray-300 hover:text-vyr-white whitespace-nowrap">
              <Watch className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-400" />
              <span>VYR NODE</span>
            </a>
            <a href="#integracao" className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-vyr-gray-800/50 border border-vyr-gray-700/50 hover:border-vyr-gray-500 transition-colors flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-vyr-gray-300 hover:text-vyr-white whitespace-nowrap">
              <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-400" />
              <span>Integração</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 1: SACHÊS */}
      <section id="saches" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-vyr-white mb-4">
              Como Funcionam os Sachês
            </h2>
            <p className="text-vyr-gray-400 max-w-2xl mx-auto">
              Os sachês atuam modulando sistemas neurofuncionais, não "sintomas". 
              Cada período tem um objetivo fisiológico distinto, alinhado ao ritmo circadiano.
            </p>
          </div>

          <div className="space-y-8">
            {sachets.map((sachet) => (
              <div 
                key={sachet.id} 
                className={`relative rounded-sm bg-vyr-gray-900/80 border ${sachet.borderColor} overflow-hidden`}
              >
                {/* Top bar */}
                <div className={`absolute top-0 left-0 w-full h-1 ${sachet.bgColor}`} />
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Header */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        {/* Mockup visual do sachê */}
                        <div className="scale-75">
                          <SachetMockup variant={sachet.variant} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <sachet.icon className={`w-4 h-4 ${sachet.accentColor}`} />
                            <span className={`text-xs ${sachet.accentColor} font-mono uppercase tracking-wider`}>{sachet.periodo}</span>
                          </div>
                          <h3 className="text-xl font-mono font-bold text-vyr-white tracking-wide">{sachet.name}</h3>
                        </div>
                      </div>

                      <p className={`text-sm mb-2`}>
                        <strong className={sachet.accentColor}>{sachet.objetivo}.</strong>
                      </p>
                      <p className="text-sm text-vyr-gray-400 leading-relaxed mb-6">
                        {sachet.descricao}
                      </p>
                      
                      {/* Áreas do cérebro */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-vyr-gray-500 uppercase tracking-wide mb-3">
                          Áreas Cerebrais Moduladas
                        </h4>
                        {sachet.areas.map((area, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Brain className={`w-3.5 h-3.5 ${sachet.accentColor}`} />
                            <span className="text-vyr-white font-medium">{area.name}</span>
                            <span className="text-vyr-gray-500">— {area.funcao}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Componentes */}
                    <div className="lg:w-2/3">
                      <h4 className="text-xs font-semibold text-vyr-gray-500 uppercase tracking-wide mb-4">
                        Componentes & Funções
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {sachet.componentes.map((comp, i) => (
                          <div key={i} className="flex items-start gap-2 p-3 rounded-sm bg-vyr-gray-800/50 border border-vyr-gray-700/50">
                            <Check className={`w-4 h-4 ${sachet.accentColor} mt-0.5 flex-shrink-0`} />
                            <div>
                              <div className="text-sm text-vyr-white font-medium">{comp.nome}</div>
                              <div className="text-xs text-vyr-gray-500">{comp.funcao}</div>
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
      <section id="dados" className="py-20 px-4 bg-gradient-to-b from-vyr-black to-vyr-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vyr-gray-800/50 border border-vyr-gray-700/50 text-vyr-gray-300 text-sm font-mono mb-6">
              <Smartphone className="w-4 h-4" />
              Sem VYR NODE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-vyr-white mb-4">
              Entrada de Dados na Plataforma
            </h2>
            <p className="text-vyr-gray-400 max-w-2xl mx-auto">
              Usuários sem VYR NODE alimentam a plataforma via <strong className="text-vyr-white">percepção consciente</strong>, 
              o que é fundamental para criar um baseline subjetivo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {entradaDados.map((item, i) => (
              <div key={i} className="p-5 rounded-sm bg-vyr-gray-800/50 border border-vyr-gray-700/50 hover:border-vyr-gray-500 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-vyr-gray-700/50 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-vyr-gray-300" />
                </div>
                <h3 className="font-semibold text-vyr-white mb-1">{item.label}</h3>
                <p className="text-sm text-vyr-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-vyr-gray-800/50 rounded-sm p-8 border border-vyr-gray-700/50">
            <h3 className="text-xl font-semibold text-vyr-white mb-6">
              Por que a percepção é importante?
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-vyr-gray-700/50 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-vyr-gray-300" />
                </div>
                <div>
                  <span className="font-medium text-vyr-white block mb-1">Baseline subjetivo</span>
                  <span className="text-sm text-vyr-gray-500">A percepção é seu ponto de partida pessoal</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-vyr-gray-700/50 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-vyr-gray-300" />
                </div>
                <div>
                  <span className="font-medium text-vyr-white block mb-1">Controle interno</span>
                  <span className="text-sm text-vyr-gray-500">Referência para comparação futura</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-vyr-gray-700/50 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-vyr-gray-300" />
                </div>
                <div>
                  <span className="font-medium text-vyr-white block mb-1">Validação cruzada</span>
                  <span className="text-sm text-vyr-gray-500">Quando combinada com dados objetivos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: VYR NODE */}
      <section id="ring" className="py-20 px-4 bg-vyr-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vyr-gray-800/50 border border-vyr-gray-700/50 text-vyr-gray-300 text-sm font-mono mb-6">
              <Watch className="w-4 h-4" />
              Monitoramento Fisiológico
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-vyr-white mb-4">
              <span className="font-mono tracking-wider">VYR NODE</span>
            </h2>
            <p className="text-vyr-gray-400 max-w-2xl mx-auto">
              O VYR NODE é um instrumento técnico de coleta contínua, não um acessório. 
              Capta marcadores fisiológicos objetivos que complementam seus registros subjetivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              {/* VYR NODE Visual CSS-based */}
              <NodeVisual size="lg" />
            </div>
            <div className="order-1 md:order-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {ringMetrics.map((metric, i) => (
                  <div key={i} className="p-4 rounded-sm bg-vyr-gray-800/50 border border-vyr-gray-700/50 hover:border-vyr-gray-500 transition-colors">
                    <div className="w-10 h-10 rounded-sm bg-vyr-gray-700/50 flex items-center justify-center mb-3">
                      <metric.icon className="w-5 h-5 text-vyr-gray-300" />
                    </div>
                    <h3 className="font-semibold text-vyr-white text-sm mb-1">{metric.label}</h3>
                    <p className="text-xs text-vyr-gray-500">{metric.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: INTEGRAÇÃO */}
      <section id="integracao" className="py-20 px-4 bg-vyr-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vyr-gray-800/50 border border-vyr-gray-700/50 text-vyr-gray-300 text-sm font-mono mb-6">
              <Database className="w-4 h-4" />
              Correlações Inteligentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-vyr-white mb-4">
              Integração Sachê + VYR NODE
            </h2>
            <p className="text-vyr-gray-400 max-w-2xl mx-auto">
              Quando o VYR NODE está ativo, cada sachet gera sinais fisiológicos rastreáveis. 
              Aqui está o que esperamos observar em cada período.
            </p>
          </div>

          {/* VYR BOOT Integration */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Sun className="w-6 h-6 text-vyr-gray-100" />
              <h3 className="text-xl font-mono font-bold text-vyr-white tracking-wide">VYR BOOT + VYR NODE</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {integracaoDia.map((item, i) => (
                <div key={i} className="p-4 rounded-sm bg-vyr-gray-800/30 border border-vyr-gray-700/50">
                  <div className="text-sm font-medium text-vyr-white mb-2">{item.acao}</div>
                  <div className="text-xs text-vyr-gray-500 mb-2">{item.impacto}</div>
                  <div className="text-xs text-vyr-gray-400 font-mono">{item.metrica}</div>
                </div>
              ))}
            </div>
          </div>

          {/* VYR HOLD Integration */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Sunset className="w-6 h-6 text-vyr-gray-400" />
              <h3 className="text-xl font-mono font-bold text-vyr-white tracking-wide">VYR HOLD + VYR NODE</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {integracaoTarde.map((item, i) => (
                <div key={i} className="p-4 rounded-sm bg-vyr-gray-800/30 border border-vyr-gray-700/50">
                  <div className="text-sm font-medium text-vyr-white mb-2">{item.acao}</div>
                  <div className="text-xs text-vyr-gray-500 mb-2">{item.impacto}</div>
                  <div className="text-xs text-vyr-gray-400 font-mono">{item.metrica}</div>
                </div>
              ))}
            </div>
          </div>

          {/* VYR CLEAR Integration */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Moon className="w-6 h-6 text-vyr-cold-blue" />
              <h3 className="text-xl font-mono font-bold text-vyr-white tracking-wide">VYR CLEAR + VYR NODE</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {integracaoNoite.map((item, i) => (
                <div key={i} className="p-4 rounded-sm bg-vyr-cold-blue/10 border border-vyr-cold-blue/30">
                  <div className="text-sm font-medium text-vyr-white mb-2">{item.acao}</div>
                  <div className="text-xs text-vyr-gray-500 mb-2">{item.impacto}</div>
                  <div className="text-xs text-vyr-cold-blue font-mono">{item.metrica}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-b from-vyr-gray-900 to-vyr-black border-t border-vyr-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-vyr-white mb-6">
            Pronto para Otimizar sua Performance?
          </h2>
          <p className="text-vyr-gray-400 mb-8 max-w-xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades e comece sua jornada de otimização cognitiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rotina-completa">
              <Button className="w-full sm:w-auto px-8 py-6 text-base font-mono bg-vyr-gray-800 hover:bg-vyr-gray-700 text-vyr-white border border-vyr-gray-600 rounded-sm transition-all">
                Rotina Completa
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/sistema-completo">
              <Button className="w-full sm:w-auto px-8 py-6 text-base font-mono bg-vyr-white hover:bg-vyr-gray-100 text-vyr-black rounded-sm transition-all">
                VYR SYSTEM
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}