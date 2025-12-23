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
  Clock,
  TrendingUp,
  BarChart3,
  Target,
  Sparkles,
  ArrowRight,
  Check,
  Smartphone,
  Watch,
  Database
} from "lucide-react";

// ========== SEÇÃO 1: SACHÊS ==========
const sachets = [
  {
    id: "dia",
    name: "NZT Dia",
    icon: Sun,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-400",
    objetivo: "Ativação & Clareza",
    descricao: "Atenção sustentada, foco executivo, memória de trabalho e clareza cognitiva.",
    areas: [
      { name: "Córtex Pré-Frontal", funcao: "Controle executivo" },
      { name: "Hipocampo", funcao: "Memória" },
      { name: "Córtex Temporal Medial", funcao: "Aprendizado" }
    ],
    componentes: [
      { nome: "Citicolina (CDP-Colina)", area: "Córtex Pré-Frontal, Hipocampo", funcao: "Atenção executiva, memória de trabalho" },
      { nome: "Fosfatidilserina", area: "Córtex Pré-Frontal, Hipocampo", funcao: "Velocidade cognitiva, processamento executivo" },
      { nome: "Bacopa monnieri", area: "Hipocampo, Córtex Temporal Medial", funcao: "Consolidação de memória, aprendizado" },
      { nome: "PQQ", area: "Hipocampo, Neocórtex", funcao: "Neuroplasticidade, suporte mitocondrial" },
      { nome: "Vitaminas B6, B9, B12", area: "Sistema nervoso central", funcao: "Síntese de neurotransmissores" },
      { nome: "L-Teanina", area: "Córtex Pré-Frontal, Sistema Límbico", funcao: "Atenção calma, redução de ruído cognitivo" }
    ]
  },
  {
    id: "tarde",
    name: "NZT Tarde",
    icon: Sunset,
    color: "from-orange-400 to-rose-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    textColor: "text-orange-400",
    objetivo: "Sustentação & Resiliência",
    descricao: "Sustentar desempenho mental, reduzir fadiga cognitiva e manter estabilidade emocional.",
    areas: [
      { name: "Tronco Encefálico", funcao: "Vigília" },
      { name: "Córtex Pré-Frontal", funcao: "Sustentação" },
      { name: "Amígdala", funcao: "Regulação emocional" }
    ],
    componentes: [
      { nome: "Teacrine", area: "Sistema Reticular, Córtex Pré-Frontal", funcao: "Estado de alerta estável, energia mental" },
      { nome: "L-Teanina", area: "Córtex Pré-Frontal, Amígdala", funcao: "Controle do estresse cognitivo, foco relaxado" },
      { nome: "Bacopa monnieri", area: "Hipocampo", funcao: "Continuidade da memória e aprendizado" },
      { nome: "Fosfatidilserina", area: "Córtex Pré-Frontal", funcao: "Sustentação cognitiva ao longo do dia" }
    ]
  },
  {
    id: "noite",
    name: "NZT Noite",
    icon: Moon,
    color: "from-indigo-400 to-violet-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    textColor: "text-indigo-400",
    objetivo: "Recuperação Cognitiva",
    descricao: "Redução de hiperatividade mental, recuperação neural, consolidação de memória e qualidade do sono.",
    areas: [
      { name: "Hipotálamo", funcao: "Ritmo circadiano" },
      { name: "Sistema Límbico", funcao: "Amígdala" },
      { name: "Hipocampo", funcao: "Consolidação de memória" }
    ],
    componentes: [
      { nome: "Magnésio quelado", area: "Hipotálamo, Sistema GABAérgico", funcao: "Relaxamento neural, transição sono-vigília" },
      { nome: "Ashwagandha", area: "Eixo HPA, Amígdala", funcao: "Modulação do estresse, redução de ativação límbica" },
      { nome: "NAC (N-acetilcisteína)", area: "Córtex Pré-Frontal, Núcleo Accumbens", funcao: "Regulação glutamatérgica, recuperação sináptica" },
      { nome: "Ômega-3 (DHA/EPA)", area: "Hipocampo, Córtex Cerebral", funcao: "Reparação neuronal, plasticidade sináptica" },
      { nome: "L-Teanina (dose noturna)", area: "Sistema Límbico, Córtex Pré-Frontal", funcao: "Desaceleração cognitiva, relaxamento" }
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
    <div className="min-h-screen bg-background">
      <LandingNav />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Sistema Integrado</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Como Funciona o{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NZT System
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Três pilares integrados: Sachês que modulam o cérebro, SmartRing que capta respostas fisiológicas, 
            e Plataforma que transforma dados em clareza, resiliência e recuperação mensuráveis.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-8 px-4 border-y border-border bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#saches" className="px-6 py-3 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">Sachês</span>
            </a>
            <a href="#dados" className="px-6 py-3 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Entrada de Dados</span>
            </a>
            <a href="#ring" className="px-6 py-3 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors flex items-center gap-2">
              <Watch className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium">SmartRing</span>
            </a>
            <a href="#integracao" className="px-6 py-3 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium">Sistema Integrado</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 1: SACHÊS */}
      <section id="saches" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funcionam os Sachês
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os sachês atuam modulando sistemas neurofuncionais, não "sintomas". 
              Cada período tem um objetivo fisiológico distinto, alinhado ao ritmo circadiano.
            </p>
          </div>

          <div className="space-y-16">
            {sachets.map((sachet) => (
              <div key={sachet.id} className={`rounded-3xl border ${sachet.borderColor} ${sachet.bgColor} p-8 md:p-12`}>
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Header */}
                  <div className="lg:w-1/3">
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${sachet.color} mb-4`}>
                      <sachet.icon className="w-5 h-5 text-white" />
                      <span className="font-semibold text-white">{sachet.name}</span>
                    </div>
                    <h3 className={`text-2xl font-bold ${sachet.textColor} mb-3`}>
                      {sachet.objetivo}
                    </h3>
                    <p className="text-foreground/80 mb-6">
                      {sachet.descricao}
                    </p>
                    
                    {/* Áreas do cérebro */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                        Áreas Cerebrais Moduladas
                      </h4>
                      {sachet.areas.map((area, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Brain className={`w-4 h-4 ${sachet.textColor}`} />
                          <span className="text-foreground font-medium">{area.name}</span>
                          <span className="text-muted-foreground text-sm">— {area.funcao}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Componentes */}
                  <div className="lg:w-2/3">
                    <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-4">
                      Componentes & Funções Neurofuncionais
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {sachet.componentes.map((comp, i) => (
                        <div key={i} className="bg-background/50 rounded-xl p-4 border border-border/50">
                          <div className={`font-semibold ${sachet.textColor} mb-1`}>
                            {comp.nome}
                          </div>
                          <div className="text-xs text-muted-foreground mb-2">
                            {comp.area}
                          </div>
                          <div className="text-sm text-foreground/80">
                            {comp.funcao}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: ENTRADA DE DADOS */}
      <section id="dados" className="py-24 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Sem SmartRing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entrada de Dados na Plataforma
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Usuários sem SmartRing alimentam a plataforma via <strong className="text-foreground">percepção consciente</strong>, 
              o que é fundamental para criar um baseline subjetivo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {entradaDados.map((item, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Por que a percepção é importante?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">Baseline subjetivo</span>
                  <span className="text-muted-foreground"> — A percepção é seu ponto de partida pessoal</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">Controle interno</span>
                  <span className="text-muted-foreground"> — Serve como referência para comparação futura</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">Integração com Ring</span>
                  <span className="text-muted-foreground"> — Permite comparar sensação × dado fisiológico quando o Ring entra</span>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-foreground/80 italic">
                "A plataforma não desvaloriza o dado subjetivo — ela o usa como referência."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: SMART RING */}
      <section id="ring" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Watch className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-400 font-medium">Wearable Estratégico</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona o SmartRing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O SmartRing não mede pensamento — ele mede <strong className="text-foreground">respostas fisiológicas</strong> que 
              refletem o estado cognitivo. São marcadores indiretos, porém objetivos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {ringMetrics.map((metric, i) => (
              <div key={i} className="bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-2xl p-5 border border-violet-500/20 hover:border-violet-500/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center mb-3">
                  <metric.icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{metric.label}</h3>
                <p className="text-xs text-muted-foreground">{metric.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-violet-500/5 to-indigo-500/5 rounded-2xl p-8 border border-violet-500/20">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Vantagens do SmartRing
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-violet-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Contínuo</h4>
                <p className="text-sm text-muted-foreground">Monitoramento 24/7 sem interrupções</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-violet-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Discreto</h4>
                <p className="text-sm text-muted-foreground">Design elegante, sem estética esportiva</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-violet-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Integrado</h4>
                <p className="text-sm text-muted-foreground">Dados alimentam o dashboard cognitivo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: INTEGRAÇÃO COMPLETA */}
      <section id="integracao" className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Database className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">Sistema Completo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Tudo Funciona Integrado
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Sachê + SmartRing + Plataforma: O usuário toma o sachê, os componentes atuam em áreas cerebrais, 
              isso altera regulação autonômica, sono, estresse e recuperação. O SmartRing capta essas mudanças, 
              e a plataforma interpreta cruzando percepção, dados do Ring e histórico individual.
            </p>
          </div>

          {/* Fluxo Visual */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
              <Zap className="w-6 h-6 text-amber-400" />
              <span className="font-semibold text-foreground">Sachê</span>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30">
              <Brain className="w-6 h-6 text-rose-400" />
              <span className="font-semibold text-foreground">Cérebro</span>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border border-violet-500/30">
              <Watch className="w-6 h-6 text-violet-400" />
              <span className="font-semibold text-foreground">SmartRing</span>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
              <BarChart3 className="w-6 h-6 text-emerald-400" />
              <span className="font-semibold text-foreground">Plataforma</span>
            </div>
          </div>

          {/* Tabelas de Integração */}
          <div className="space-y-12">
            {/* DIA */}
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-6 py-4 border-b border-amber-500/30">
                <div className="flex items-center gap-3">
                  <Sun className="w-6 h-6 text-amber-400" />
                  <div>
                    <h3 className="font-bold text-foreground">Ativação & Clareza</h3>
                    <p className="text-sm text-muted-foreground">Sachê DIA — O Ring não "mede foco", mas mede o custo fisiológico do foco.</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm font-semibold text-muted-foreground mb-4 px-4">
                  <div>Ação no Cérebro</div>
                  <div>Impacto Fisiológico</div>
                  <div>Métrica do Ring</div>
                </div>
                {integracaoDia.map((item, i) => (
                  <div key={i} className="grid md:grid-cols-3 gap-4 p-4 rounded-xl bg-background/50 border border-border/50 mb-2">
                    <div className="text-foreground">{item.acao}</div>
                    <div className="text-foreground/80">{item.impacto}</div>
                    <div className="text-amber-400 font-medium">{item.metrica}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* TARDE */}
            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500/20 to-rose-500/20 px-6 py-4 border-b border-orange-500/30">
                <div className="flex items-center gap-3">
                  <Sunset className="w-6 h-6 text-orange-400" />
                  <div>
                    <h3 className="font-bold text-foreground">Sustentação & Resiliência</h3>
                    <p className="text-sm text-muted-foreground">Sachê TARDE — Aqui o Ring quantifica resiliência, não estímulo.</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm font-semibold text-muted-foreground mb-4 px-4">
                  <div>Ação no Cérebro</div>
                  <div>Impacto Fisiológico</div>
                  <div>Métrica do Ring</div>
                </div>
                {integracaoTarde.map((item, i) => (
                  <div key={i} className="grid md:grid-cols-3 gap-4 p-4 rounded-xl bg-background/50 border border-border/50 mb-2">
                    <div className="text-foreground">{item.acao}</div>
                    <div className="text-foreground/80">{item.impacto}</div>
                    <div className="text-orange-400 font-medium">{item.metrica}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* NOITE */}
            <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/5 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500/20 to-violet-500/20 px-6 py-4 border-b border-indigo-500/30">
                <div className="flex items-center gap-3">
                  <Moon className="w-6 h-6 text-indigo-400" />
                  <div>
                    <h3 className="font-bold text-foreground">Recuperação Cognitiva</h3>
                    <p className="text-sm text-muted-foreground">Sachê NOITE — Aqui o Ring é extremamente forte, pois sono é fisiologia pura.</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm font-semibold text-muted-foreground mb-4 px-4">
                  <div>Ação no Cérebro</div>
                  <div>Impacto Fisiológico</div>
                  <div>Métrica do Ring</div>
                </div>
                {integracaoNoite.map((item, i) => (
                  <div key={i} className="grid md:grid-cols-3 gap-4 p-4 rounded-xl bg-background/50 border border-border/50 mb-2">
                    <div className="text-foreground">{item.acao}</div>
                    <div className="text-foreground/80">{item.impacto}</div>
                    <div className="text-indigo-400 font-medium">{item.metrica}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que a plataforma faz */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O Que a Plataforma Faz com Tudo Isso
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            A plataforma não mostra dados crus apenas. Ela transforma informação em inteligência.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-background rounded-2xl p-6 border border-border text-left">
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Cria tendências individuais</h3>
              <p className="text-sm text-muted-foreground">Evolução histórica baseada no seu próprio progresso</p>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-border text-left">
              <Activity className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Compara percepção × fisiologia</h3>
              <p className="text-sm text-muted-foreground">Correlação entre o que você sente e o que seu corpo mostra</p>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-border text-left">
              <BarChart3 className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Mostra resposta aos sachês</h3>
              <p className="text-sm text-muted-foreground">Impacto mensurável da suplementação no seu desempenho</p>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-border text-left">
              <Target className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Identifica padrões</h3>
              <p className="text-sm text-muted-foreground">Melhora de ativação, sustentação e qualidade de recuperação</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <p className="text-xl md:text-2xl font-medium text-foreground italic">
              "Os sachês modulam o cérebro.<br />
              O SmartRing capta as respostas do corpo.<br />
              A plataforma transforma isso em clareza, resiliência e recuperação mensuráveis."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Pronto para evoluir seu desempenho cognitivo?
          </h2>
          <p className="text-muted-foreground mb-8">
            O usuário passa a ver progresso cognitivo mensurável — algo raríssimo no mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sistema-completo">
              <Button size="lg" className="w-full sm:w-auto">
                Ver Sistema Completo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
