import { Sun, Moon, Sunset, Monitor, Circle, BarChart3 } from "lucide-react";

const layers = [
  {
    id: "suplementacao",
    title: "Suplementação por Ciclo",
    description: "Três fórmulas para cada fase do seu dia cognitivo",
    icon: Sun,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    items: [
      { icon: Sun, label: "Dia", desc: "Ativação e clareza" },
      { icon: Sunset, label: "Tarde", desc: "Sustentação e resiliência" },
      { icon: Moon, label: "Noite", desc: "Recuperação cognitiva" },
    ],
  },
  {
    id: "plataforma",
    title: "Plataforma Digital",
    description: "Registro e consolidação de padrões ao longo do tempo",
    icon: Monitor,
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    features: ["Registro diário de rotina", "Consolidação de padrões", "Evolução individual"],
  },
  {
    id: "ring",
    title: "Smart Ring",
    description: "Sensor contínuo, discreto e elegante. Não substitui relógios sociais.",
    icon: Circle,
    color: "text-fuchsia-400",
    bgColor: "bg-fuchsia-500/10",
    borderColor: "border-fuchsia-500/30",
    features: ["Monitoramento 24/7", "Design discreto", "Dados fisiológicos precisos"],
  },
  {
    id: "dashboard",
    title: "Dashboard Cognitivo",
    description: "Visual analítico e premium com correlações inteligentes",
    icon: BarChart3,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    features: ["Evolução histórica", "Correlação suplemento × performance", "Insights personalizados"],
  },
];

export function SystemSection() {
  return (
    <section id="sistema" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-violet-400 uppercase tracking-widest mb-3 font-medium">
            Arquitetura do Sistema
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            4 Camadas Integradas
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Ajudamos profissionais de elite a sustentar, medir e evoluir seu desempenho 
            intelectual com o mesmo rigor aplicado ao corpo.
          </p>
        </div>

        {/* Layers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((layer, index) => (
            <div
              key={layer.id}
              className={`relative group p-6 rounded-2xl bg-slate-800/30 border ${layer.borderColor} backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300`}
            >
              {/* Layer Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-sm font-bold text-slate-400">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${layer.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <layer.icon className={`w-7 h-7 ${layer.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {layer.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {layer.description}
              </p>

              {/* Items for Suplementação */}
              {layer.items && (
                <div className="space-y-2">
                  {layer.items.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-sm">
                      <item.icon className={`w-4 h-4 ${layer.color}`} />
                      <span className="text-white font-medium">{item.label}</span>
                      <span className="text-slate-500">— {item.desc}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Features for other layers */}
              {layer.features && (
                <ul className="space-y-2">
                  {layer.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className={`w-1.5 h-1.5 rounded-full ${layer.bgColor}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Primeiro sistema focado exclusivamente em desempenho intelectual. 
            Não orientado a atletas físicos. Comparação apenas do usuário consigo mesmo.
          </p>
        </div>
      </div>
    </section>
  );
}
