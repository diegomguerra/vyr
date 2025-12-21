import { Brain, Moon, TrendingUp, Shield, Activity, Target, BarChart3, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Clareza Mental Sustentada",
    description: "Tome decisões críticas com lucidez constante. Sem picos, sem quedas. Performance previsível.",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Activity,
    title: "Consistência Cognitiva",
    description: "Mantenha alto desempenho ao longo do tempo. Estrutura, dados e rotina como pilares.",
    color: "text-fuchsia-400",
    bgColor: "bg-fuchsia-500/10",
  },
  {
    icon: TrendingUp,
    title: "Evolução Mensurável",
    description: "Acompanhe sua progressão com dados reais. Saiba exatamente o que funciona para você.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Target,
    title: "Vantagem Competitiva Silenciosa",
    description: "Performance intelectual de elite que não se ostenta. O diferencial está nos resultados.",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Moon,
    title: "Recuperação Otimizada",
    description: "Sono reparador que prepara seu cérebro para o próximo dia de alta demanda cognitiva.",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: BarChart3,
    title: "Correlações Inteligentes",
    description: "Entenda como rotina, suplementação e recuperação impactam sua performance individual.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
];

const differentiators = [
  "Primeiro sistema focado exclusivamente em desempenho intelectual",
  "Não orientado a atletas físicos",
  "Smart Ring discreto, sem estética esportiva",
  "Comparação apenas do usuário consigo mesmo",
];

export function BenefitSection() {
  return (
    <section id="beneficios" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300 font-medium">O Strava do Cérebro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Performance Intelectual Mensurável
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            O mesmo rigor aplicado ao desempenho físico, agora para sua mente. 
            Traders, founders e desenvolvedores de elite.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-violet-500/30 hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 border border-violet-500/30">
            <h3 className="text-xl font-bold text-white text-center mb-6">
              Diferenciais Únicos
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {differentiators.map((diff, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-violet-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-violet-400 text-xs">✓</span>
                  </span>
                  <span className="text-slate-300 text-sm">{diff}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-800/30 border border-slate-700/50">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="text-slate-300">
              <span className="text-white font-semibold">Garantia de 30 dias</span> — Se não sentir diferença, devolvemos seu dinheiro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
