import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sun, Moon, Sunset, Shield, Sparkles, ArrowRight, Activity, Brain, Heart, Zap, BarChart3, Lightbulb, Wifi, BatteryCharging, Fingerprint } from "lucide-react";
import { LandingNav, Footer } from "@/components/landing";
import { SachetMockup, NodeVisual } from "@/brand";

const ringFeatures = [
  {
    icon: Heart,
    title: "HRV Contínuo",
    description: "Variabilidade da frequência cardíaca medida 24/7 para avaliar estresse e recuperação em tempo real.",
  },
  {
    icon: Activity,
    title: "SpO2 & Frequência Cardíaca",
    description: "Monitoramento de oxigenação sanguínea e batimentos cardíacos ao longo do dia e durante o sono.",
  },
  {
    icon: Moon,
    title: "Arquitetura do Sono",
    description: "Análise detalhada das fases do sono: leve, profundo e REM. Entenda a qualidade real do seu descanso.",
  },
  {
    icon: Zap,
    title: "Prontidão & Energia",
    description: "Score diário de prontidão física e mental baseado em múltiplos indicadores biométricos.",
  },
  {
    icon: Fingerprint,
    title: "Sensores PPG",
    description: "Sensores ópticos de alta precisão com luzes verde e vermelha para leituras precisas.",
  },
  {
    icon: BatteryCharging,
    title: "Bateria de Longa Duração",
    description: "Até 7 dias de bateria com carregamento magnético rápido em cerca de 1 hora.",
  },
];

const platformFeatures = [
  {
    icon: BarChart3,
    title: "Painel de Gestão Cognitiva",
    description: "Visualize todas as suas métricas em um painel unificado com gráficos evolutivos.",
  },
  {
    icon: Brain,
    title: "Correlações Inteligentes",
    description: "O sistema cruza dados do VYR NODE com seus registros de suplementação para identificar padrões.",
    exclusive: true,
  },
  {
    icon: Lightbulb,
    title: "Insights de AI Personalizados",
    description: "Recomendações baseadas em inteligência artificial que aprendem com seus dados únicos.",
    exclusive: true,
  },
  {
    icon: Wifi,
    title: "Sincronização Automática",
    description: "Dados do VYR NODE sincronizados automaticamente com a plataforma via Bluetooth.",
  },
];

const included = [
  { text: "12 meses de VYR BOOT (360 sachês)", icon: Sun, color: "text-vyr-gray-100" },
  { text: "12 meses de VYR HOLD (360 sachês)", icon: Sunset, color: "text-vyr-gray-400" },
  { text: "12 meses de VYR CLEAR (360 sachês)", icon: Moon, color: "text-vyr-cold-blue" },
  { text: "VYR NODE (sensor contínuo)", icon: Activity, color: "text-vyr-gray-300" },
  { text: "Plataforma Premium com Correlações", icon: BarChart3, color: "text-vyr-gray-300" },
  { text: "Insights de AI Avançados", icon: Brain, color: "text-vyr-gray-300" },
  { text: "Entrega expressa grátis", icon: Check, color: "text-vyr-gray-400" },
  { text: "Suporte prioritário", icon: Shield, color: "text-vyr-gray-400" },
];

// Componente de visualização das 3 caixas VYR
function AllBoxesPreview() {
  return (
    <div className="flex items-end justify-center gap-4 sm:gap-6 py-6">
      {/* VYR BOOT Box */}
      <div className="relative" style={{ perspective: "400px" }}>
        <div 
          className="relative w-16 sm:w-24 lg:w-28 h-22 sm:h-32 lg:h-40 rounded-sm bg-vyr-gray-100 flex flex-col items-center justify-center"
          style={{ transform: "rotateY(-8deg)", boxShadow: "6px 0 20px -5px rgba(0,0,0,0.5)" }}
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.35em] text-vyr-black font-medium">VYR</span>
          <span className="font-mono text-[8px] sm:text-[10px] tracking-[0.25em] text-vyr-gray-500">BOOT</span>
          <span className="font-mono text-[5px] sm:text-[6px] tracking-wider text-vyr-gray-400 mt-3 sm:mt-4 opacity-60">30 SACHETS</span>
        </div>
      </div>
      
      {/* VYR HOLD Box */}
      <div className="relative" style={{ perspective: "400px" }}>
        <div 
          className="relative w-16 sm:w-24 lg:w-28 h-22 sm:h-32 lg:h-40 rounded-sm bg-vyr-gray-600 flex flex-col items-center justify-center"
          style={{ boxShadow: "0 0 30px -5px rgba(0,0,0,0.5)" }}
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.35em] text-vyr-white font-medium">VYR</span>
          <span className="font-mono text-[8px] sm:text-[10px] tracking-[0.25em] text-vyr-gray-300">HOLD</span>
          <span className="font-mono text-[5px] sm:text-[6px] tracking-wider text-vyr-gray-400 mt-3 sm:mt-4 opacity-60">30 SACHETS</span>
        </div>
      </div>
      
      {/* VYR CLEAR Box */}
      <div className="relative" style={{ perspective: "400px" }}>
        <div
          className="relative w-16 sm:w-24 lg:w-28 h-22 sm:h-32 lg:h-40 rounded-sm bg-[#1E293B] flex flex-col items-center justify-center"
          style={{ transform: "rotateY(8deg)", boxShadow: "-6px 0 20px -5px rgba(0,0,0,0.5)" }}
        >
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.35em] text-vyr-white font-medium">VYR</span>
          <span className="font-mono text-[8px] sm:text-[10px] tracking-[0.25em] text-vyr-gray-300">CLEAR</span>
          <span className="font-mono text-[5px] sm:text-[6px] tracking-wider text-vyr-gray-400 mt-3 sm:mt-4 opacity-60">30 SACHETS</span>
        </div>
      </div>
    </div>
  );
}

export default function SistemaCompleto() {
  return (
    <div className="min-h-screen bg-vyr-black">
      <LandingNav />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-vyr-gray-900/50 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-vyr-gray-800/50 border border-vyr-gray-700/50 text-vyr-gray-300 text-xs sm:text-sm font-mono mb-4 sm:mb-6">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Sistema Completo de Performance
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-vyr-white mb-4 sm:mb-6">
                Dados Precisos.
                <span className="block font-mono tracking-wider text-vyr-gray-300">
                  Decisões Inteligentes.
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-vyr-gray-400 mb-6 sm:mb-8 leading-relaxed">
                A combinação definitiva: 12 meses de suplementação cognitiva + VYR NODE com sensores avançados + Plataforma com Correlações e AI.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm bg-vyr-gray-800/50 border border-vyr-gray-700/50">
                  <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-400" />
                  <span className="text-xs sm:text-sm text-vyr-gray-300 font-mono">VYR NODE</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm bg-vyr-gray-800/50 border border-vyr-gray-700/50">
                  <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-400" />
                  <span className="text-xs sm:text-sm text-vyr-gray-300">Insights AI</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm bg-vyr-gray-800/50 border border-vyr-gray-700/50">
                  <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-400" />
                  <span className="text-xs sm:text-sm text-vyr-gray-300">Correlações</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-vyr-gray-900/80 rounded-sm p-4 sm:p-6 border border-vyr-gray-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs sm:text-sm text-vyr-gray-500 line-through">R$ 6.561</span>
                  <span className="text-xs sm:text-sm font-semibold text-vyr-gray-300 bg-vyr-gray-800 px-2 py-0.5 sm:py-1 rounded-sm font-mono">
                    -40% OFF
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-vyr-white">R$ 3.937</span>
                  <span className="text-sm sm:text-base text-vyr-gray-400">ou 12x de R$ 328</span>
                </div>

                <Link to="/login?signup=true">
                  <Button className="w-full py-4 sm:py-6 text-base sm:text-lg font-mono bg-vyr-white hover:bg-vyr-gray-100 text-vyr-black rounded-sm transition-all duration-300 hover:scale-[1.02]">
                    Quero o VYR SYSTEM
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-xs text-vyr-gray-500 mt-3 flex items-center justify-center gap-2">
                  <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Compra 100% segura • Garantia de 30 dias
                </p>
              </div>
            </div>

            {/* Hero Visual - VYR NODE + Boxes CSS-based */}
            <div className="relative flex flex-col items-center gap-8">
              {/* VYR NODE Visual */}
              <NodeVisual size="lg" />
              
              {/* 3 Boxes Preview */}
              <AllBoxesPreview />
            </div>
          </div>

          {/* Sachets Overview com mockups CSS */}
          <div className="mt-12 sm:mt-20">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-vyr-white mb-3 sm:mb-4">
                Os 3 Sachês do Ciclo Cognitivo
              </h2>
              <p className="text-sm sm:text-base text-vyr-gray-400 max-w-2xl mx-auto px-2">
                Fórmulas sincronizadas com seu ritmo circadiano para expansão da capacidade funcional ao longo do dia.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {/* VYR BOOT */}
              <div className="relative p-6 rounded-sm bg-vyr-gray-900/80 border border-vyr-gray-600/30 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-vyr-gray-100" />
                <div className="flex items-center gap-6 mb-4">
                  <div className="scale-90 sm:scale-100">
                    <SachetMockup variant="BOOT" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Sun className="w-4 h-4 text-vyr-gray-100" />
                      <span className="text-xs text-vyr-gray-100 font-mono uppercase tracking-wider">Manhã</span>
                    </div>
                    <h3 className="text-xl font-mono font-bold text-vyr-white tracking-wide">VYR BOOT</h3>
                  </div>
                </div>
                <p className="text-sm text-vyr-gray-400 leading-relaxed mb-4">
                  <strong className="text-vyr-gray-100">Foco e energia cognitiva.</strong> Induz estado cognitivo inicial para clareza mental e concentração nas primeiras horas do dia.
                </p>
                <ul className="space-y-2 text-xs text-vyr-gray-500">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-vyr-gray-100" />
                    Citicolina, Bacopa, Creatina
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-vyr-gray-100" />
                    Vitaminas B6, B9, B12
                  </li>
                </ul>
              </div>

              {/* VYR HOLD */}
              <div className="relative p-6 rounded-sm bg-vyr-gray-900/80 border border-vyr-gray-500/30 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-vyr-gray-600" />
                <div className="flex items-center gap-6 mb-4">
                  <div className="scale-90 sm:scale-100">
                    <SachetMockup variant="HOLD" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Sunset className="w-4 h-4 text-vyr-gray-400" />
                      <span className="text-xs text-vyr-gray-400 font-mono uppercase tracking-wider">Tarde</span>
                    </div>
                    <h3 className="text-xl font-mono font-bold text-vyr-white tracking-wide">VYR HOLD</h3>
                  </div>
                </div>
                <p className="text-sm text-vyr-gray-400 leading-relaxed mb-4">
                  <strong className="text-vyr-gray-300">Sustentação e resiliência.</strong> Contribui para manutenção do estado cognitivo enquanto prepara a transição para o relaxamento noturno.
                </p>
                <ul className="space-y-2 text-xs text-vyr-gray-500">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-vyr-gray-400" />
                    Teacrina, L-Taurina
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-vyr-gray-400" />
                    L-Teanina, Cafeína leve
                  </li>
                </ul>
              </div>

              {/* VYR CLEAR */}
              <div className="relative p-6 rounded-sm bg-vyr-gray-900/80 border border-vyr-cold-blue/30 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-vyr-coldBlue" />
                <div className="flex items-center gap-6 mb-4">
                  <div className="scale-90 sm:scale-100">
                    <SachetMockup variant="CLEAR" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Moon className="w-4 h-4 text-vyr-cold-blue" />
                      <span className="text-xs text-vyr-cold-blue font-mono uppercase tracking-wider">Noite</span>
                    </div>
                    <h3 className="text-xl font-mono font-bold text-vyr-white tracking-wide">VYR CLEAR</h3>
                  </div>
                </div>
                <p className="text-sm text-vyr-gray-400 leading-relaxed mb-4">
                  <strong className="text-vyr-cold-blue">Sono reparador.</strong> Promove relaxamento profundo e favorece a consolidação da memória durante o sono.
                </p>
                <ul className="space-y-2 text-xs text-vyr-gray-500">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-vyr-cold-blue" />
                    NAC, Ashwagandha
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-vyr-cold-blue" />
                    Magnésio quelato
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-sm text-vyr-gray-500 mt-8">
              <span className="text-vyr-gray-300 font-mono">1.080 sachês</span> inclusos no VYR SYSTEM — suprimento para 12 meses.
            </p>
          </div>
        </div>
      </section>

      {/* VYR NODE Features */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-vyr-black to-vyr-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-vyr-white mb-3 sm:mb-4">
              <span className="font-mono tracking-wider">VYR NODE</span>: Monitoramento Biométrico
            </h2>
            <p className="text-sm sm:text-base text-vyr-gray-400 max-w-2xl mx-auto px-2">
              Sensores PPG e de movimento combinando luzes verde e vermelha para monitorar com precisão sua frequência cardíaca, oxigenação e movimentos 24/7.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {ringFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-sm bg-vyr-gray-900/50 border border-vyr-gray-700/50 hover:border-vyr-gray-500 transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-vyr-gray-800/50 flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-vyr-gray-300" />
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-vyr-white mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-vyr-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-12 sm:py-20 bg-vyr-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-vyr-white mb-3 sm:mb-4">
              Plataforma Premium
            </h2>
            <p className="text-sm sm:text-base text-vyr-gray-400 max-w-2xl mx-auto px-2">
              Recursos exclusivos que transformam dados biométricos em insights acionáveis para estruturar sua rotina cognitiva.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {platformFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-6 rounded-sm border transition-colors ${
                  feature.exclusive
                    ? "bg-vyr-gray-800/50 border-vyr-gray-600/50"
                    : "bg-vyr-gray-800/30 border-vyr-gray-700/50"
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center flex-shrink-0 ${
                    feature.exclusive ? "bg-vyr-gray-700/50" : "bg-vyr-gray-700/30"
                  }`}>
                    <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      feature.exclusive ? "text-vyr-white" : "text-vyr-gray-400"
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1 sm:mb-2">
                      <h3 className="text-sm sm:text-lg font-semibold text-vyr-white">{feature.title}</h3>
                      {feature.exclusive && (
                        <span className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-mono font-semibold bg-vyr-gray-700 text-vyr-white rounded-sm">
                          Exclusivo
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-vyr-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-20 bg-vyr-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-vyr-white mb-3 sm:mb-4">
              O Que Está Incluído
            </h2>
            <p className="text-sm sm:text-base text-vyr-gray-400 max-w-2xl mx-auto px-2">
              Tudo que você precisa para gestão cognitiva completa em um único pacote.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {included.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-sm bg-vyr-gray-900/50 border border-vyr-gray-700/50"
              >
                <div className="w-10 h-10 rounded-sm bg-vyr-gray-800/50 flex items-center justify-center flex-shrink-0">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className="text-sm sm:text-base text-vyr-gray-300">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-vyr-gray-900/80 rounded-sm p-6 sm:p-10 border border-vyr-gray-700/50 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-vyr-white mb-3 sm:mb-4">
              Comece sua Jornada de Otimização
            </h3>
            <p className="text-sm sm:text-base text-vyr-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto">
              O VYR SYSTEM é a ferramenta mais completa para quem leva performance cognitiva a sério.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6">
              <Link to="/login?signup=true">
                <Button className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-mono bg-vyr-white hover:bg-vyr-gray-100 text-vyr-black rounded-sm transition-all duration-300 hover:scale-[1.02]">
                  Quero o VYR SYSTEM
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/rotina-completa">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-mono border-vyr-gray-600 bg-vyr-white text-vyr-black hover:bg-vyr-gray-100 rounded-sm"
                >
                  Ver Rotina Completa
                </Button>
              </Link>
            </div>

            <p className="text-xs text-vyr-gray-500 flex items-center justify-center gap-2">
              <Shield className="w-3.5 h-3.5" />
              Compra 100% segura • Garantia de 30 dias
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}