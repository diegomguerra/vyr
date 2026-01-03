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
  Layers,
  CircleDot
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
    objetivo: "Estado inicial de ativação cognitiva",
    descricao: "Indução do estado cognitivo inicial do dia, com suporte à atenção, memória operacional e clareza decisória. Atua prioritariamente em circuitos associados ao controle executivo e início da carga cognitiva.",
    areas: [
      { name: "Córtex Pré-Frontal", funcao: "Controle executivo" },
      { name: "Hipocampo", funcao: "Memória de trabalho" },
      { name: "Córtex Temporal Medial", funcao: "Aprendizagem" }
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
    objetivo: "Manutenção de estado cognitivo sob carga",
    descricao: "Manutenção do desempenho cognitivo ao longo do dia, com foco na sustentação do estado mental e redução da variabilidade cognitiva sob carga prolongada.",
    areas: [
      { name: "Córtex Pré-Frontal", funcao: "Sustentação" },
      { name: "Tronco Encefálico", funcao: "Vigília" },
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
    bgColor: "bg-[#1E293B]",
    textColor: "text-vyr-white",
    accentColor: "text-vyr-gray-300",
    borderColor: "border-[#1E293B]/50",
    periodo: "Noite",
    objetivo: "Redução de carga e recuperação neural",
    descricao: "Redução progressiva da carga cognitiva e suporte a processos associados à recuperação neural, consolidação de memória e arquitetura do sono.",
    areas: [
      { name: "Hipotálamo", funcao: "Ritmo circadiano" },
      { name: "Sistema Límbico", funcao: "Regulação emocional" },
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
  { icon: Zap, label: "Energia cognitiva", desc: "Disposição mental" },
  { icon: Activity, label: "Estresse percebido", desc: "Nível de pressão mental" },
  { icon: Moon, label: "Qualidade do sono", desc: "Descanso e recuperação" },
  { icon: Sun, label: "Estado mental ao despertar", desc: "Clareza ao acordar" }
];

// ========== SEÇÃO 3: VYR NODE ==========
const ringMetrics = [
  { icon: Heart, label: "Frequência cardíaca 24/7", desc: "Monitoramento contínuo" },
  { icon: Activity, label: "HRV", desc: "Variabilidade da frequência cardíaca" },
  { icon: TrendingUp, label: "Estresse fisiológico", desc: "Medição objetiva" },
  { icon: Moon, label: "Arquitetura do sono", desc: "Tracking automático" },
  { icon: Zap, label: "Atividade diária", desc: "Movimento e energia" },
  { icon: Thermometer, label: "Temperatura corporal", desc: "Padrões térmicos" },
  { icon: Wind, label: "SpO₂", desc: "Saturação de oxigênio" },
  { icon: BarChart3, label: "VO₂ estimado", desc: "Capacidade aeróbica" }
];

// ========== SEÇÃO 4: INTEGRAÇÃO ==========
const integracaoDia = [
  { acao: "Atividade autonômica mais estável", metrica: "HRV estabilizado" },
  { acao: "Atenção sustentada", metrica: "FC 24h mais estável" },
  { acao: "Clareza cognitiva matinal", metrica: "Redução de estresse basal" }
];

const integracaoTarde = [
  { acao: "Redução de variabilidade sob carga", metrica: "HRV Stress" },
  { acao: "Sustentação do estado cognitivo", metrica: "FC + atividade estáveis" },
  { acao: "Menor fadiga mental ao final do dia", metrica: "Temperatura / HRV" }
];

const integracaoNoite = [
  { acao: "Redução de ativação noturna", metrica: "HRV noturno ↑" },
  { acao: "Consolidação de memória", metrica: "Fases do sono" },
  { acao: "Recuperação neural mais consistente", metrica: "FC noturna ↓" }
];

export default function ComoFunciona() {
  return (
    <div className="min-h-screen vyr-gradient-bg">
      <LandingNav />
      
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 vyr-gradient-radial" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="vyr-badge-accent mb-4 sm:mb-6">
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-mono tracking-wider">COGNITIVE PERFORMANCE SYSTEM</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-vyr-white mb-4 sm:mb-6">
            Como Funciona o{" "}
            <span className="font-mono tracking-wider text-gradient-accent">VYR SYSTEM</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-vyr-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
            O VYR é um sistema integrado de gestão do estado cognitivo. Ele opera a partir da combinação de modulação neurofuncional, registro consciente de estados e, opcionalmente, mensuração fisiológica contínua.
          </p>
        </div>
      </section>

      {/* ARQUITETURA DO SISTEMA - Ponto de Ancoragem */}
      <section className="py-12 sm:py-16 px-4 border-y border-vyr-accent/20 bg-vyr-graphite-dark/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-medium text-vyr-white mb-4">
              Arquitetura do Sistema
            </h2>
            <p className="text-lg sm:text-xl text-vyr-gray-300 font-medium">
              O VYR SYSTEM é estruturado em três camadas independentes e integráveis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 vyr-card-graphite border-l-2 border-l-vyr-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-sm bg-vyr-gray-100/10 flex items-center justify-center text-vyr-gray-100 font-mono font-bold text-sm">1</span>
                <Zap className="w-5 h-5 text-vyr-gray-100" />
              </div>
              <h3 className="font-mono text-vyr-white font-medium mb-2">Modulação Cognitiva</h3>
              <p className="text-sm text-vyr-gray-400">Sachês nootrópicos estruturados por período do dia</p>
            </div>
            
            <div className="p-6 vyr-card-graphite border-l-2 border-l-vyr-accent">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-sm bg-vyr-accent/10 flex items-center justify-center text-vyr-accent font-mono font-bold text-sm">2</span>
                <Smartphone className="w-5 h-5 text-vyr-accent" />
              </div>
              <h3 className="font-mono text-vyr-white font-medium mb-2">Registro de Estado</h3>
              <p className="text-sm text-vyr-gray-400">Plataforma digital para percepção consciente</p>
            </div>
            
            <div className="p-6 vyr-card-graphite border-l-2 border-l-vyr-coldBlue">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-sm bg-vyr-coldBlue/10 flex items-center justify-center text-vyr-coldBlue font-mono font-bold text-sm">3</span>
                <Watch className="w-5 h-5 text-vyr-coldBlue" />
              </div>
              <h3 className="font-mono text-vyr-white font-medium mb-2">Mensuração Fisiológica</h3>
              <p className="text-sm text-vyr-gray-400">VYR NODE — opcional</p>
            </div>
          </div>
          
          <p className="text-center text-vyr-gray-400 text-sm sm:text-base">
            Cada camada adiciona informação ao sistema. Nenhuma invalida a anterior.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-4 sm:py-6 px-4 border-b border-vyr-graphite/50 bg-vyr-graphite-dark/30 overflow-x-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 min-w-max sm:min-w-0">
            <a href="#camada1" className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-sm vyr-card-graphite flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-vyr-gray-300 hover:text-vyr-white whitespace-nowrap transition-all">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-100" />
              <span>Camada 1</span>
            </a>
            <a href="#camada2" className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-sm vyr-card-graphite flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-vyr-gray-300 hover:text-vyr-white whitespace-nowrap transition-all">
              <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-accent" />
              <span>Camada 2</span>
            </a>
            <a href="#camada3" className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-sm vyr-card-graphite flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-vyr-gray-300 hover:text-vyr-white whitespace-nowrap transition-all">
              <Watch className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-coldBlue" />
              <span>Camada 3</span>
            </a>
            <a href="#pratica" className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-sm vyr-card-graphite flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-vyr-gray-300 hover:text-vyr-white whitespace-nowrap transition-all">
              <CircleDot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-accent vyr-icon-glow" />
              <span>Na Prática</span>
            </a>
            <a href="#integracao" className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-sm vyr-card-graphite flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-vyr-gray-300 hover:text-vyr-white whitespace-nowrap transition-all">
              <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-accent vyr-icon-glow" />
              <span>Integração</span>
            </a>
          </div>
        </div>
      </section>

      {/* CAMADA 1: MODULAÇÃO COGNITIVA (SACHÊS) */}
      <section id="camada1" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="vyr-badge-accent mb-6">
              <Zap className="w-4 h-4" />
              <span className="font-mono tracking-wider">CAMADA 1</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-vyr-white mb-4">
              Modulação <span className="text-gradient-accent">Cognitiva</span>
            </h2>
            <p className="text-vyr-gray-400 max-w-2xl mx-auto mb-4">
              A primeira camada do VYR atua na modulação direta do estado cognitivo por meio de sachês nootrópicos estruturados por período do dia.
            </p>
            <p className="text-vyr-gray-300 max-w-2xl mx-auto font-medium">
              Cada sachê corresponde a um estado operacional específico do ciclo cognitivo. Essa camada é suficiente para operar o sistema.
            </p>
          </div>

          <div className="space-y-8">
            {sachets.map((sachet) => (
              <div 
                key={sachet.id} 
                className="relative rounded-sm vyr-card-graphite overflow-hidden"
              >
                {/* Top bar */}
                <div className={`absolute top-0 left-0 w-full h-1 ${sachet.bgColor}`} />
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Header */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-6 mb-4">
                        {/* Mockup visual do sachê */}
                        <div className="scale-90 sm:scale-100">
                          <SachetMockup variant={sachet.variant} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <sachet.icon className={`w-4 h-4 text-vyr-accent vyr-icon-glow`} />
                            <span className="text-xs text-vyr-accent font-mono uppercase tracking-wider">{sachet.periodo}</span>
                          </div>
                          <h3 className="text-xl font-mono font-medium text-vyr-white tracking-wide">{sachet.name}</h3>
                        </div>
                      </div>

                      <p className="text-sm mb-2">
                        <strong className="text-vyr-accent">{sachet.objetivo}.</strong>
                      </p>
                      <p className="text-sm text-vyr-gray-400 leading-relaxed mb-6">
                        {sachet.descricao}
                      </p>
                      
                      {/* Áreas do cérebro */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-vyr-gray-500 uppercase tracking-wide mb-3">
                          Áreas Moduladas
                        </h4>
                        {sachet.areas.map((area, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Brain className="w-3.5 h-3.5 text-vyr-accent vyr-icon-glow" />
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
                          <div key={i} className="flex items-start gap-2 p-3 rounded-sm bg-vyr-graphite/30 border border-vyr-graphite/50">
                            <Check className="w-4 h-4 text-vyr-accent vyr-icon-glow mt-0.5 flex-shrink-0" />
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

      {/* CAMADA 2: REGISTRO DE ESTADO (SEM VYR NODE) */}
      <section id="camada2" className="py-20 px-4 bg-vyr-graphite-dark/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="vyr-badge-accent mb-6">
              <Smartphone className="w-4 h-4" />
              <span className="font-mono tracking-wider">CAMADA 2 — PONTO DE ENTRADA NATURAL</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-vyr-white mb-4">
              Registro de <span className="text-gradient-accent">Estado</span>
              <span className="text-lg sm:text-xl text-vyr-gray-500 font-normal ml-3">(Sem VYR NODE)</span>
            </h2>
            <p className="text-vyr-gray-400 max-w-2xl mx-auto mb-4">
              Na ausência do VYR NODE, o sistema opera a partir do registro consciente dos estados cognitivos percebidos pelo usuário.
            </p>
            <p className="text-vyr-gray-300 max-w-2xl mx-auto font-medium">
              Esta é a forma mais direta de entrada no sistema e representa o núcleo funcional do VYR.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {entradaDados.map((item, i) => (
              <div key={i} className="p-5 vyr-card-graphite">
                <div className="w-10 h-10 rounded-sm bg-vyr-graphite flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-vyr-accent vyr-icon-glow" />
                </div>
                <h3 className="font-medium text-vyr-white mb-1">{item.label}</h3>
                <p className="text-sm text-vyr-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="vyr-card-graphite p-8 border-l-2 border-l-vyr-accent">
            <p className="text-vyr-gray-300 leading-relaxed mb-6">
              Essa camada permite operar o VYR de forma completa, com análise baseada em percepção consciente e histórico de estados.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-vyr-graphite flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-vyr-accent vyr-icon-glow" />
                </div>
                <div>
                  <span className="font-medium text-vyr-white block mb-1">Baseline subjetivo</span>
                  <span className="text-sm text-vyr-gray-500">Linha de base inicial do sistema</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-vyr-graphite flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-vyr-accent vyr-icon-glow" />
                </div>
                <div>
                  <span className="font-medium text-vyr-white block mb-1">Histórico de estados</span>
                  <span className="text-sm text-vyr-gray-500">Acompanhamento de variações</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-vyr-graphite flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-vyr-accent vyr-icon-glow" />
                </div>
                <div>
                  <span className="font-medium text-vyr-white block mb-1">Sistema operacional</span>
                  <span className="text-sm text-vyr-gray-500">Precisão subjetiva, mas funcional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMADA 3: MENSURAÇÃO FISIOLÓGICA CONTÍNUA (VYR NODE) */}
      <section id="camada3" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="vyr-badge-accent mb-6">
              <Watch className="w-4 h-4" />
              <span className="font-mono tracking-wider">CAMADA 3 — OPCIONAL</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-vyr-white mb-4">
              Mensuração Fisiológica <span className="text-gradient-accent">Contínua</span>
              <span className="text-lg sm:text-xl text-vyr-gray-500 font-normal ml-3">(VYR NODE)</span>
            </h2>
            <p className="text-vyr-gray-400 max-w-2xl mx-auto mb-4">
              O VYR NODE é um instrumento técnico de mensuração fisiológica contínua. Não é um acessório. Não substitui o registro consciente.
            </p>
            <p className="text-vyr-gray-300 max-w-2xl mx-auto font-medium">
              Ele complementa e valida os estados registrados com dados fisiológicos objetivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              <NodeVisual size="lg" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-lg font-medium text-vyr-white mb-6">O VYR NODE captura:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {ringMetrics.map((metric, i) => (
                  <div key={i} className="p-4 vyr-card-graphite">
                    <div className="w-10 h-10 rounded-sm bg-vyr-graphite flex items-center justify-center mb-3">
                      <metric.icon className="w-5 h-5 text-vyr-coldBlue" />
                    </div>
                    <h3 className="font-medium text-vyr-white text-sm mb-1">{metric.label}</h3>
                    <p className="text-xs text-vyr-gray-500">{metric.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="vyr-card-graphite p-8 border-l-2 border-l-vyr-coldBlue max-w-4xl mx-auto">
            <p className="text-vyr-gray-300 leading-relaxed">
              Essa camada amplia a precisão do sistema e permite correlação entre estado percebido e resposta fisiológica real.
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA NA PRÁTICA */}
      <section id="pratica" className="py-20 px-4 bg-vyr-graphite-dark/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="vyr-badge-accent mb-6">
              <CircleDot className="w-4 h-4" />
              <span className="font-mono tracking-wider">OPERAÇÃO</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-vyr-white mb-4">
              Como Funciona na <span className="text-gradient-accent">Prática</span>
            </h2>
            <p className="text-vyr-gray-300 max-w-2xl mx-auto font-medium text-lg">
              A operação do VYR não muda. O que muda é o nível de instrumentação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* SEM VYR NODE */}
            <div className="vyr-card-graphite p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-vyr-accent/10 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-vyr-accent" />
                </div>
                <h3 className="text-xl font-mono font-medium text-vyr-white">SEM VYR NODE</h3>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-vyr-gray-400 mb-6 font-mono">
                <span className="px-2 py-1 bg-vyr-graphite rounded-sm">Sachês</span>
                <ArrowRight className="w-4 h-4" />
                <span className="px-2 py-1 bg-vyr-graphite rounded-sm">Registro consciente</span>
                <ArrowRight className="w-4 h-4" />
                <span className="px-2 py-1 bg-vyr-graphite rounded-sm">Histórico</span>
              </div>
              
              <p className="text-vyr-gray-400 leading-relaxed">
                O usuário opera o sistema com base na própria percepção, construindo uma linha de base subjetiva.
              </p>
            </div>

            {/* COM VYR NODE */}
            <div className="vyr-card-graphite p-8 border border-vyr-coldBlue/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-vyr-coldBlue/10 flex items-center justify-center">
                  <Watch className="w-5 h-5 text-vyr-coldBlue" />
                </div>
                <h3 className="text-xl font-mono font-medium text-vyr-white">COM VYR NODE</h3>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-vyr-gray-400 mb-6 font-mono flex-wrap">
                <span className="px-2 py-1 bg-vyr-graphite rounded-sm">Sachês</span>
                <ArrowRight className="w-4 h-4" />
                <span className="px-2 py-1 bg-vyr-graphite rounded-sm">Registro</span>
                <ArrowRight className="w-4 h-4" />
                <span className="px-2 py-1 bg-vyr-coldBlue/20 rounded-sm text-vyr-coldBlue">Dados fisiológicos</span>
                <ArrowRight className="w-4 h-4" />
                <span className="px-2 py-1 bg-vyr-coldBlue/20 rounded-sm text-vyr-coldBlue">Correlação</span>
              </div>
              
              <p className="text-vyr-gray-400 leading-relaxed">
                O sistema passa a operar com validação objetiva, reduzindo viés perceptivo e ampliando capacidade analítica.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-vyr-gray-400 text-lg">
              Nenhum modo invalida o outro. <span className="text-vyr-white font-medium">O NODE expande o sistema. Não o redefine.</span>
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRAÇÃO SACHÊ + VYR NODE */}
      <section id="integracao" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="vyr-badge-accent mb-6">
              <Database className="w-4 h-4" />
              <span className="font-mono tracking-wider">TRÊS CAMADAS ATIVAS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-vyr-white mb-4">
              Integração Sachê + <span className="text-gradient-accent">VYR NODE</span>
            </h2>
            <p className="text-vyr-gray-400 max-w-3xl mx-auto">
              Quando as três camadas estão ativas, o sistema permite observar correlações entre modulação cognitiva, estado percebido e resposta fisiológica. Abaixo estão exemplos de padrões esperados por período.
            </p>
          </div>

          {/* VYR BOOT Integration */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Sun className="w-6 h-6 text-vyr-gray-100" />
              <h3 className="text-xl font-mono font-medium text-vyr-white tracking-wide">VYR BOOT + VYR NODE</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {integracaoDia.map((item, i) => (
                <div key={i} className="p-5 vyr-card-graphite">
                  <div className="text-sm font-medium text-vyr-white mb-3">{item.acao}</div>
                  <div className="text-xs text-vyr-accent font-mono">{item.metrica}</div>
                </div>
              ))}
            </div>
          </div>

          {/* VYR HOLD Integration */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Sunset className="w-6 h-6 text-vyr-graphite-light" />
              <h3 className="text-xl font-mono font-medium text-vyr-white tracking-wide">VYR HOLD + VYR NODE</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {integracaoTarde.map((item, i) => (
                <div key={i} className="p-5 vyr-card-graphite">
                  <div className="text-sm font-medium text-vyr-white mb-3">{item.acao}</div>
                  <div className="text-xs text-vyr-accent font-mono">{item.metrica}</div>
                </div>
              ))}
            </div>
          </div>

          {/* VYR CLEAR Integration */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Moon className="w-6 h-6 text-vyr-coldBlue" />
              <h3 className="text-xl font-mono font-medium text-vyr-white tracking-wide">VYR CLEAR + VYR NODE</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {integracaoNoite.map((item, i) => (
                <div key={i} className="p-5 rounded-sm backdrop-blur-sm border transition-all duration-300" style={{ background: 'linear-gradient(145deg, hsl(var(--vyr-accent) / 0.15) 0%, hsl(var(--vyr-graphite-dark) / 0.6) 100%)', borderColor: 'hsl(var(--vyr-accent) / 0.3)' }}>
                  <div className="text-sm font-medium text-vyr-white mb-3">{item.acao}</div>
                  <div className="text-xs text-vyr-coldBlue font-mono">{item.metrica}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-vyr-gray-500 text-sm">
            "Esperados" não significa garantidos. O sistema observa, não promete.
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 border-t border-vyr-graphite/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-vyr-white mb-6">
            Pronto para Estruturar sua <span className="text-gradient-accent">Gestão Cognitiva</span>?
          </h2>
          <p className="text-vyr-gray-400 mb-8 max-w-xl mx-auto">
            O VYR não entrega estados ideais. Ele fornece estrutura, dados e histórico para gestão consciente do estado cognitivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rotina-completa">
              <Button className="w-full sm:w-auto px-8 py-6 text-base font-mono vyr-card-graphite hover:border-vyr-accent/50 text-vyr-white rounded-sm transition-all">
                Rotina Completa
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/sistema-completo">
              <Button className="w-full sm:w-auto px-8 py-6 text-base font-mono vyr-btn-accent rounded-sm transition-all">
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
