import { Circle, Activity, Moon, Brain, Zap, TrendingUp, Sparkles } from "lucide-react";
import smartRingImage from "@/assets/smart-ring-nobg.png";

const ringCapabilities = [
  {
    icon: Activity,
    title: "HRV Contínuo",
    description: "Variabilidade da frequência cardíaca 24/7 revela estresse e recuperação em tempo real.",
  },
  {
    icon: Moon,
    title: "Arquitetura do Sono",
    description: "Fases do sono, latência, despertares. Saiba exatamente como você recupera.",
  },
  {
    icon: Brain,
    title: "Prontidão Mental",
    description: "Score diário de prontidão cognitiva baseado em biomarcadores reais.",
  },
  {
    icon: Zap,
    title: "Resposta Autonômica",
    description: "Ativação simpática e parassimpática. Entenda seu sistema nervoso.",
  },
];

const evolutionSteps = [
  {
    step: 1,
    label: "Suplementação",
    description: "Nootrópicos otimizam sua química cerebral",
    active: true,
  },
  {
    step: 2,
    label: "Relatos",
    description: "Plataforma captura sua percepção subjetiva",
    active: true,
  },
  {
    step: 3,
    label: "Smart Ring",
    description: "Dados fisiológicos validam e expandem a análise",
    active: true,
    highlight: true,
  },
];

export function SmartRingSection() {
  return (
    <section id="smartring" className="py-24 bg-gradient-to-b from-slate-950 via-fuchsia-950/10 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 mb-6">
            <Circle className="w-4 h-4 text-fuchsia-400" />
            <span className="text-sm font-medium text-fuchsia-300">Smart Ring — O Diferencial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            De percepção a{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              precisão científica
            </span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            O Smart Ring fecha o ciclo: captura dados fisiológicos 24/7 que revelam 
            exatamente como seu corpo responde aos nootrópicos.{" "}
            <span className="text-white font-medium">Discreto como uma aliança. Poderoso como um laboratório.</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Ring Visual */}
          <div className="relative flex justify-center">
            {/* Glow effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-violet-500/20 rounded-full blur-2xl" />
            </div>

            {/* Ring Image */}
            <div className="relative z-10">
              <img 
                src={smartRingImage} 
                alt="Smart Ring NZT" 
                className="w-72 h-auto drop-shadow-2xl"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl bg-slate-800/90 border border-fuchsia-500/40 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-slate-300">Sensor Ativo 24/7</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl bg-slate-800/90 border border-violet-500/40 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-violet-400" />
                  <span className="text-xs text-slate-300">Design Elegante</span>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-6">
            <div className="mb-8">
              <p className="text-sm text-fuchsia-400 uppercase tracking-widest mb-2 font-medium">
                O que o Ring captura
              </p>
              <h3 className="text-2xl font-bold text-white">
                Biomarcadores de Performance Real
              </h3>
            </div>

            <div className="grid gap-4">
              {ringCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-fuchsia-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-fuchsia-500/15 flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{cap.title}</h4>
                    <p className="text-slate-400 text-sm">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Evolution Steps */}
        <div className="relative">
          <div className="text-center mb-10">
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">
              A evolução completa
            </p>
            <h3 className="text-2xl font-bold text-white">
              Do suplemento ao insight preciso
            </h3>
          </div>

          {/* Steps */}
          <div className="relative max-w-4xl mx-auto">
            {/* Connection line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/50 via-violet-500/50 to-fuchsia-500 rounded-full" />

            <div className="grid grid-cols-3 gap-4 relative">
              {evolutionSteps.map((step) => (
                <div key={step.step} className="relative text-center">
                  {/* Step circle */}
                  <div className={`relative z-10 w-24 h-24 mx-auto mb-4 rounded-2xl flex flex-col items-center justify-center ${
                    step.highlight 
                      ? 'bg-gradient-to-br from-fuchsia-600 to-violet-600 shadow-lg shadow-fuchsia-500/30'
                      : 'bg-slate-800 border border-slate-700'
                  }`}>
                    <span className={`text-2xl font-bold ${step.highlight ? 'text-white' : 'text-slate-400'}`}>
                      {step.step}
                    </span>
                    {step.highlight && (
                      <TrendingUp className="w-4 h-4 text-fuchsia-200 mt-1" />
                    )}
                  </div>

                  <h4 className={`font-bold mb-1 ${step.highlight ? 'text-fuchsia-400' : 'text-white'}`}>
                    {step.label}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-fuchsia-900/30 to-violet-900/30 border border-fuchsia-500/30">
            <span className="text-white font-medium text-lg">
              "O que não se mede, não se gerencia."
            </span>
            <span className="hidden sm:block w-px h-6 bg-fuchsia-500/50" />
            <span className="text-fuchsia-400 font-semibold">
              Agora você pode medir.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
