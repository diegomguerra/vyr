import { Brain, Moon, TrendingUp, Shield, Activity, Target, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Clareza Mental Sustentada",
    description: "Tome decisões críticas com lucidez constante. Sem picos, sem quedas. Performance previsível.",
    color: "text-vyr-gray-100",
    bgColor: "bg-vyr-gray-100/10",
  },
  {
    icon: Activity,
    title: "Consistência Cognitiva",
    description: "Mantenha alto desempenho ao longo do tempo. Estrutura, dados e rotina como pilares.",
    color: "text-vyr-accent",
    bgColor: "bg-vyr-accent/10",
  },
  {
    icon: TrendingUp,
    title: "Evolução Mensurável",
    description: "Acompanhe sua progressão com dados reais. Saiba exatamente o que funciona para você.",
    color: "text-vyr-gray-400",
    bgColor: "bg-vyr-gray-400/10",
  },
  {
    icon: Target,
    title: "Vantagem Competitiva Silenciosa",
    description: "Capacidade funcional em ambientes exigentes que não se ostenta. O diferencial está nos resultados.",
    color: "text-vyr-cold-blue",
    bgColor: "bg-vyr-cold-blue/10",
  },
  {
    icon: Moon,
    title: "Recuperação Estruturada",
    description: "Sono reparador que prepara seu cérebro para o próximo dia de demanda cognitiva.",
    color: "text-vyr-gray-500",
    bgColor: "bg-vyr-gray-500/10",
  },
  {
    icon: BarChart3,
    title: "Correlações Inteligentes",
    description: "Entenda como rotina, suplementação e recuperação impactam sua performance individual.",
    color: "text-vyr-accent",
    bgColor: "bg-vyr-accent/10",
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
    <section id="beneficios" className="py-20 bg-vyr-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vyr-white mb-4">
            Performance Intelectual Mensurável
          </h2>
          <p className="text-vyr-gray-500 max-w-2xl mx-auto text-lg">
            O mesmo rigor aplicado ao desempenho físico, agora para sua mente. 
            Traders, founders e desenvolvedores em ambientes exigentes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-2xl bg-vyr-graphite-dark/60 border border-vyr-gray-700/50 backdrop-blur-sm hover:border-vyr-accent/30 hover:bg-vyr-graphite/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-vyr-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-vyr-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-vyr-graphite-dark/60 border border-vyr-gray-700/50">
            <h3 className="text-xl font-bold text-vyr-white text-center mb-6">
              Diferenciais Únicos
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {differentiators.map((diff, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-vyr-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-vyr-accent text-xs">✓</span>
                  </span>
                  <span className="text-vyr-gray-400 text-sm">{diff}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-vyr-graphite-dark/60 border border-vyr-gray-700/50">
            <Shield className="w-5 h-5 text-vyr-accent" />
            <span className="text-vyr-gray-400">
              <span className="text-vyr-white font-semibold">Garantia de 30 dias</span> — Se não sentir diferença, devolvemos seu dinheiro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
