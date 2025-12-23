import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sun, Moon, Sunset, Shield, Sparkles, ArrowRight, Activity, Brain, Heart, Zap, BarChart3, Lightbulb, Wifi, BatteryCharging, Fingerprint } from "lucide-react";
import { LandingNav, Footer } from "@/components/landing";

import smartRing from "@/assets/smart-ring.png";
import sistemaCompletoHero from "@/assets/sistema-completo-hero.png";
import sachetDia from "@/assets/sachet-dia.png";
import sachetTarde from "@/assets/sachet-tarde.png";
import sachetNoite from "@/assets/sachet-noite.png";

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
    title: "Dashboard Cognitivo Avançado",
    description: "Visualize todas as suas métricas em um painel unificado com gráficos evolutivos.",
  },
  {
    icon: Brain,
    title: "Correlações Inteligentes",
    description: "O sistema cruza dados do anel com seus registros de suplementação para identificar padrões.",
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
    description: "Dados do anel sincronizados automaticamente com a plataforma via Bluetooth.",
  },
];

const included = [
  { text: "12 meses de NZT Dia (360 sachês)", icon: Sun, color: "text-amber-500" },
  { text: "12 meses de NZT Tarde (360 sachês)", icon: Sunset, color: "text-purple-500" },
  { text: "12 meses de NZT Noite (360 sachês)", icon: Moon, color: "text-indigo-500" },
  { text: "Smart Ring NZT (sensor contínuo)", icon: Activity, color: "text-fuchsia-500" },
  { text: "Plataforma Premium com Correlações", icon: BarChart3, color: "text-violet-500" },
  { text: "Insights de AI Avançados", icon: Brain, color: "text-cyan-500" },
  { text: "Entrega expressa grátis", icon: Check, color: "text-emerald-500" },
  { text: "Suporte prioritário", icon: Shield, color: "text-slate-400" },
];

export default function SistemaCompleto() {
  return (
    <div className="min-h-screen bg-slate-950">
      <LandingNav />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-600/10 via-violet-600/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900/30 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Sistema Completo de Performance
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Dados Precisos.
                <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Decisões Inteligentes.
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-6 sm:mb-8 leading-relaxed">
                A combinação definitiva: 12 meses de suplementação cognitiva + Smart Ring com sensores avançados + Plataforma com Correlações e AI.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
                  <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fuchsia-400" />
                  <span className="text-xs sm:text-sm text-slate-300">Smart Ring</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
                  <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400" />
                  <span className="text-xs sm:text-sm text-slate-300">Insights AI</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
                  <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                  <span className="text-xs sm:text-sm text-slate-300">Correlações</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-slate-900/80 rounded-2xl p-4 sm:p-6 border border-fuchsia-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs sm:text-sm text-slate-500 line-through">R$ 6.561</span>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 sm:py-1 rounded-full">
                    -40% OFF
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-white">R$ 3.937</span>
                  <span className="text-sm sm:text-base text-slate-400">ou 12x de R$ 328</span>
                </div>

                <Link to="/login?signup=true">
                  <Button className="w-full py-4 sm:py-6 text-base sm:text-lg font-semibold bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 hover:from-fuchsia-700 hover:via-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-fuchsia-500/25 rounded-xl transition-all duration-300 hover:scale-[1.02]">
                    Quero o Sistema Completo
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-xs text-slate-500 mt-3 flex items-center justify-center gap-2">
                  <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Compra 100% segura • Garantia de 30 dias
                </p>
              </div>
            </div>

            {/* Hero Image - System Complete */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-indigo-500/20 blur-3xl rounded-full" />
              <img
                src={sistemaCompletoHero}
                alt="Sistema Completo NZT - Sachês, Smart Ring e Plataforma"
                className="relative z-10 w-full rounded-2xl shadow-2xl shadow-fuchsia-500/20"
              />
            </div>
          </div>

          {/* Sachets Overview */}
          <div className="mt-12 sm:mt-20">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Os 3 Sachês do Ciclo Cognitivo
              </h2>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto px-2">
                Fórmulas sincronizadas com seu ritmo circadiano para máximo desempenho ao longo do dia.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {/* NZT Dia */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-b from-amber-900/20 to-slate-900/50 border border-amber-500/20 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-xl bg-amber-500/10 flex items-center justify-center p-2">
                    <img src={sachetDia} alt="NZT Dia" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Sun className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-amber-400 font-medium uppercase">Manhã</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">NZT Dia</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  <strong className="text-amber-400">Foco e energia cognitiva.</strong> Otimiza neurotransmissores para clareza mental e concentração nas primeiras horas do dia.
                </p>
                <ul className="space-y-2 text-xs text-slate-500">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                    Bacopa, Lion's Mane, L-Tirosina
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                    Vitaminas B6, B12, D3
                  </li>
                </ul>
              </div>

              {/* NZT Tarde */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-slate-900/50 border border-purple-500/20 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-fuchsia-500" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-xl bg-purple-500/10 flex items-center justify-center p-2">
                    <img src={sachetTarde} alt="NZT Tarde" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Sunset className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-purple-400 font-medium uppercase">Tarde</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">NZT Tarde</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  <strong className="text-purple-400">Sustentação e resiliência.</strong> Mantém a performance enquanto prepara a transição para o relaxamento noturno.
                </p>
                <ul className="space-y-2 text-xs text-slate-500">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-400" />
                    Rhodiola, Ashwagandha
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-400" />
                    Magnésio, L-Teanina
                  </li>
                </ul>
              </div>

              {/* NZT Noite */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-b from-indigo-900/20 to-slate-900/50 border border-indigo-500/20 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-blue-500" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-xl bg-indigo-500/10 flex items-center justify-center p-2">
                    <img src={sachetNoite} alt="NZT Noite" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Moon className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs text-indigo-400 font-medium uppercase">Noite</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">NZT Noite</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  <strong className="text-indigo-400">Sono reparador.</strong> Promove relaxamento profundo e otimiza a consolidação da memória durante o sono.
                </p>
                <ul className="space-y-2 text-xs text-slate-500">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                    GABA, Melatonina, Glicina
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                    Passiflora, Valeriana
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-sm text-slate-500 mt-8">
              <span className="text-fuchsia-400 font-medium">1.080 sachês</span> inclusos no Sistema Completo — suprimento para 12 meses.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Ring Features */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Smart Ring: Monitoramento Biométrico
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto px-2">
              Sensores PPG e de movimento combinando luzes verde e vermelha para monitorar com precisão sua frequência cardíaca, oxigenação e movimentos 24/7.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {ringFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-fuchsia-500/30 transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-fuchsia-500/10 flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-400" />
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-12 sm:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Plataforma Premium
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto px-2">
              Recursos exclusivos que transformam dados biométricos em insights acionáveis para otimizar sua performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {platformFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-colors ${
                  feature.exclusive
                    ? "bg-gradient-to-br from-fuchsia-900/20 to-violet-900/20 border-fuchsia-500/30"
                    : "bg-slate-800/50 border-slate-700/50"
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ${
                    feature.exclusive ? "bg-fuchsia-500/20" : "bg-violet-500/10"
                  }`}>
                    <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      feature.exclusive ? "text-fuchsia-400" : "text-violet-400"
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1 sm:mb-2">
                      <h3 className="text-sm sm:text-lg font-semibold text-white">{feature.title}</h3>
                      {feature.exclusive && (
                        <span className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-semibold bg-fuchsia-500/20 text-fuchsia-400 rounded-full">
                          Exclusivo
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tudo Incluído no Sistema
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700/50"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className="text-slate-300">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Sachets Preview */}
          <div className="mt-12 flex justify-center gap-6">
            <img src={sachetDia} alt="NZT Dia" className="w-24 h-24 object-contain" />
            <img src={sachetTarde} alt="NZT Tarde" className="w-24 h-24 object-contain" />
            <img src={sachetNoite} alt="NZT Noite" className="w-24 h-24 object-contain" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-900/30 via-violet-900/30 to-indigo-900/30 border-y border-fuchsia-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para Alcançar seu
            <span className="block bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              Máximo Potencial Cognitivo?
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            12 meses de suplementação completa + Smart Ring + Plataforma Premium com Correlações e Insights AI.
          </p>

          <div className="inline-flex flex-col items-center">
            <div className="mb-4">
              <span className="text-slate-500 line-through mr-3">R$ 6.561</span>
              <span className="text-3xl font-bold text-white">R$ 3.937</span>
              <span className="text-emerald-400 ml-3 text-sm font-semibold">40% OFF</span>
            </div>
            
            <Link to="/login?signup=true">
              <Button className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 hover:from-fuchsia-700 hover:via-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-fuchsia-500/25 rounded-xl transition-all duration-300 hover:scale-[1.02]">
                Quero o Sistema Completo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <p className="text-sm text-slate-500 mt-4 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Compra 100% segura • Garantia de 30 dias
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
