import { Circle, Brain, Activity, Heart, Moon, Zap, Target, TrendingUp, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import smartRingImage from "@/assets/smart-ring.png";

const ringFeatures = [
  {
    icon: Moon,
    title: "Análise de Sono",
    description: "Estágios, latência, eficiência e qualidade do sono em detalhe",
  },
  {
    icon: Activity,
    title: "Monitoramento de Estresse",
    description: "Identifica momentos de tensão e relaxamento ao longo do dia",
  },
  {
    icon: Heart,
    title: "Variabilidade Cardíaca",
    description: "HRV contínuo para medir recuperação e prontidão cognitiva",
  },
  {
    icon: Zap,
    title: "Prontidão Mental",
    description: "Score diário baseado em dados fisiológicos reais",
  },
];

const systemPillars = [
  {
    icon: Circle,
    label: "Smart Ring",
    description: "Sensor invisível e elegante",
    color: "from-fuchsia-500 to-violet-500",
  },
  {
    icon: Brain,
    label: "Suplementação",
    description: "Ciclo cognitivo completo",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Target,
    label: "Plataforma",
    description: "Dashboard inteligente",
    color: "from-emerald-500 to-teal-500",
  },
];

export function PremiumShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 border border-fuchsia-500/30 mb-6">
            <Star className="w-4 h-4 text-fuchsia-400" />
            <span className="text-sm font-medium text-fuchsia-300">Experiência Premium</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            O Sistema Completo de
            <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Performance Intelectual
            </span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Precisão. Performance. Elegância. Três pilares integrados para quem leva 
            performance mental tão a sério quanto atletas levam o corpo.
          </p>
        </div>

        {/* Main Visual: Ring + Pillars */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Ring Image */}
          <div className="relative">
            {/* Glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-indigo-500/20 blur-3xl rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative">
              <img 
                src={smartRingImage} 
                alt="NZT Smart Ring" 
                className="w-full max-w-md mx-auto relative z-10 drop-shadow-2xl"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-full">
                <p className="text-sm text-slate-300">
                  <span className="text-fuchsia-400 font-semibold">Design discreto</span> • Sensor contínuo 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Elegância que mede. Precisão que evolui.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                O Smart Ring é a peça central do sistema. Discreto como uma aliança, 
                poderoso como um laboratório. Não substitui relógios sociais — 
                os complementa com dados que realmente importam para sua performance mental.
              </p>
            </div>

            {/* Ring Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {ringFeatures.map((feature) => (
                <div 
                  key={feature.title}
                  className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-fuchsia-500/30 transition-colors group"
                >
                  <feature.icon className="w-5 h-5 text-fuchsia-400 mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                  <p className="text-slate-500 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-sm text-violet-400 uppercase tracking-widest mb-2 font-medium">
              Três Pilares Integrados
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Um sistema. Uma missão.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {systemPillars.map((pillar, index) => (
              <div 
                key={pillar.label}
                className="relative group"
              >
                {/* Connection line */}
                {index < systemPillars.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-slate-600 to-slate-700" />
                )}
                
                <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-fuchsia-500/30 transition-all hover:translate-y-[-4px]">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{pillar.label}</h4>
                  <p className="text-slate-400">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition Box */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-violet-600/10 to-indigo-600/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          
          <div className="relative p-8 md:p-12 border border-fuchsia-500/20 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white mb-4">
                    <Star className="w-3 h-3" />
                    Plano Premium
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    R$ 1.297
                  </h3>
                  <p className="text-slate-400 text-sm">investimento único no sistema completo</p>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "Smart Ring com sensores de precisão",
                    "Suplementação completa (Dia + Tarde + Noite)",
                    "Plataforma digital premium",
                    "Dashboard cognitivo avançado",
                    "Correlações e insights com AI",
                    "Evolução individual mensurável",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link to="/login?signup=true">
                  <Button className="w-full md:w-auto px-8 py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 hover:from-fuchsia-700 hover:via-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-fuchsia-500/25 hover:shadow-xl hover:shadow-fuchsia-500/30 hover:scale-[1.02] transition-all">
                    Quero o Sistema Completo
                  </Button>
                </Link>

                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  Compra 100% segura • Garantia de 30 dias
                </p>
              </div>

              {/* Quote */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500/10 to-violet-500/10 blur-2xl rounded-full" />
                <div className="relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                  <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-6">
                    "Alta performance intelectual não se ostenta.
                    <span className="block text-fuchsia-400 mt-2">Se mede."</span>
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Filosofia NZT</p>
                      <p className="text-slate-500 text-sm">Cognitive Performance System</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
