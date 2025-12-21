import { ClipboardCheck, TrendingUp, BarChart3, Brain, Zap, Moon, RefreshCw } from "lucide-react";

const trackingPillars = [
  {
    id: "ativacao",
    title: "Ativação & Clareza",
    period: "Manhã",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-400",
    questions: [
      "Como foi seu foco nas primeiras horas?",
      "Clareza nas decisões matinais?",
      "Energia mental ao iniciar o dia?",
    ],
  },
  {
    id: "sustentacao",
    title: "Sustentação & Resiliência",
    period: "Tarde",
    icon: Brain,
    color: "from-purple-500 to-fuchsia-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
    questions: [
      "Manteve o ritmo após o almoço?",
      "Resistência à fadiga cognitiva?",
      "Equilíbrio emocional sob pressão?",
    ],
  },
  {
    id: "recuperacao",
    title: "Recuperação Cognitiva",
    period: "Noite",
    icon: Moon,
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    textColor: "text-indigo-400",
    questions: [
      "Qualidade do sono percebida?",
      "Facilidade para adormecer?",
      "Sensação ao acordar?",
    ],
  },
];

const platformFeatures = [
  {
    icon: ClipboardCheck,
    title: "Registro Diário Simples",
    description: "Check-ins rápidos após cada dose. Menos de 1 minuto por registro.",
  },
  {
    icon: TrendingUp,
    title: "Evolução ao Longo do Tempo",
    description: "Veja padrões emergirem semana após semana. Sua linha de base se constrói.",
  },
  {
    icon: BarChart3,
    title: "Correlações Inteligentes",
    description: "Entenda como rotina, sono e suplementação impactam sua performance.",
  },
];

export function PlatformSection() {
  return (
    <section id="plataforma" className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 mb-6">
            <RefreshCw className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Plataforma de Mensuração</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Transforme percepção em{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              dados acionáveis
            </span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            A plataforma captura seu relato após cada dose, construindo uma linha de base 
            única que revela como os nootrópicos impactam{" "}
            <span className="text-white font-medium">seu</span> desempenho específico.
          </p>
        </div>

        {/* Os 3 Eixos de Mensuração */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">
              O que mensuramos
            </p>
            <h3 className="text-2xl font-bold text-white">
              3 Eixos do Ciclo Cognitivo
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trackingPillars.map((pillar) => (
              <div
                key={pillar.id}
                className={`relative p-6 rounded-2xl bg-slate-800/40 border ${pillar.borderColor} hover:bg-slate-800/60 transition-all duration-300`}
              >
                {/* Period badge */}
                <div className={`absolute -top-3 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${pillar.color} text-white text-xs font-semibold`}>
                  {pillar.period}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${pillar.bgColor} flex items-center justify-center mb-4`}>
                  <pillar.icon className={`w-7 h-7 ${pillar.textColor}`} />
                </div>

                {/* Title */}
                <h4 className={`text-xl font-bold ${pillar.textColor} mb-3`}>
                  {pillar.title}
                </h4>

                {/* Questions */}
                <ul className="space-y-2">
                  {pillar.questions.map((question, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 ${pillar.bgColor.replace('/10', '/50')}`} />
                      {question}
                    </li>
                  ))}
                </ul>

                {/* Visual escala */}
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span>Sua avaliação</span>
                    <span className={pillar.textColor}>1-10</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <div
                        key={n}
                        className={`flex-1 h-2 rounded-full ${
                          n <= 7 
                            ? `bg-gradient-to-r ${pillar.color} opacity-${n <= 4 ? '30' : n <= 6 ? '50' : '80'}`
                            : 'bg-slate-700'
                        }`}
                        style={{ opacity: n <= 7 ? 0.3 + (n * 0.08) : 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features da Plataforma */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {platformFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-5 rounded-xl bg-slate-800/30 border border-slate-700/50"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-violet-900/30 to-fuchsia-900/30 border border-violet-500/30">
            <span className="text-slate-400">Dados de relato são poderosos, mas</span>
            <span className="text-white font-semibold">dados fisiológicos são precisos →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
