import { Sparkles, Eye, BarChart3, TrendingUp, Star } from "lucide-react";

// Os GANHOS são o centro - resultados que o usuário busca
const cognitiveGains = [
  {
    icon: Sparkles,
    title: "Clareza Mental Sustentada",
    description: "Menos névoa, mais decisões precisas ao longo do dia inteiro",
  },
  {
    icon: BarChart3,
    title: "Consistência Cognitiva",
    description: "Performance estável, sem picos e quedas imprevisíveis",
  },
  {
    icon: TrendingUp,
    title: "Evolução Mensurável",
    description: "Dados reais que mostram seu progresso semana após semana",
  },
  {
    icon: Eye,
    title: "Vantagem Competitiva Silenciosa",
    description: "Opere em outro nível enquanto outros dependem de café e sorte",
  },
];

// O sistema é o MEIO - as ferramentas integradas
const systemComponents = [
  {
    label: "Suplementação",
    sublabel: "Dia • Tarde • Noite",
    description: "Ciclo cognitivo completo que sustenta clareza do amanhecer ao sono",
  },
  {
    label: "Plataforma",
    sublabel: "Dashboard Inteligente",
    description: "Dados consolidados que revelam padrões e orientam evolução",
  },
  {
    label: "Smart Ring",
    sublabel: "Sensor 24/7",
    description: "Coleta fisiológica contínua que alimenta insights precisos",
  },
];

export function PremiumShowcase() {
  return (
    <section className="py-24 bg-vyr-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Foco nos GANHOS */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vyr-graphite/50 border border-vyr-gray-700/50 mb-6">
            <Star className="w-4 h-4 text-vyr-accent" />
            <span className="text-sm font-medium text-vyr-gray-100 font-mono">Sistema Completo de Performance</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vyr-white mb-6">
            O que você ganha quando
            <span className="block text-vyr-accent">
              leva performance mental a sério
            </span>
          </h2>
          <p className="text-vyr-gray-500 max-w-2xl mx-auto text-lg">
            Não vendemos suplementos. Não vendemos tecnologia. 
            Entregamos <span className="text-vyr-white font-medium">resultados cognitivos mensuráveis</span> para quem 
            compete com a própria mente.
          </p>
        </div>

        {/* Seção de GANHOS - Os resultados são o centro */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {cognitiveGains.map((gain, index) => (
            <div 
              key={gain.title}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-6 rounded-2xl bg-vyr-graphite-dark/60 border border-vyr-gray-700/50 hover:border-vyr-accent/40 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="w-12 h-12 rounded-xl bg-vyr-graphite border border-vyr-gray-700/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <gain.icon className="w-6 h-6 text-vyr-accent" />
                </div>
                <h3 className="text-lg font-bold text-vyr-white mb-2">{gain.title}</h3>
                <p className="text-vyr-gray-500 text-sm leading-relaxed">{gain.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Frase central */}
        <div className="relative py-8 mb-16">
          <div className="relative flex justify-center">
            <div className="px-8 py-4 bg-vyr-graphite-dark/80 backdrop-blur-sm rounded-2xl border border-vyr-gray-700/50">
              <p className="text-xl sm:text-2xl font-medium text-vyr-white text-center">
                "Alta performance cognitiva não se ostenta.{" "}
                <span className="text-vyr-accent">Se mensura.</span>"
              </p>
            </div>
          </div>
        </div>

        {/* O SISTEMA - Os meios integrados */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm text-vyr-accent uppercase tracking-widest mb-2 font-medium font-mono">
              O Sistema
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-vyr-white mb-4">
              Três componentes. Um objetivo.
            </h3>
            <p className="text-vyr-gray-500 max-w-xl mx-auto">
              Cada peça foi desenhada para trabalhar em conjunto, entregando 
              os ganhos cognitivos que você busca.
            </p>
          </div>

          {/* Visual do Sistema Integrado */}
          <div className="relative">
            {/* Linha conectora central */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vyr-accent/50 to-transparent" />
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {systemComponents.map((component, index) => (
                <div key={component.label} className="relative">
                  {/* Ponto de conexão */}
                  <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-vyr-accent border-4 border-vyr-black z-10" />
                  
                  <div className={`relative p-8 rounded-2xl bg-vyr-graphite-dark/60 border border-vyr-gray-700/50 hover:border-vyr-accent/30 transition-all ${index === 1 ? 'lg:scale-105 lg:z-10 border-vyr-accent/30' : ''}`}>
                    
                    <div className="text-center">
                      <span className="text-xs text-vyr-accent uppercase tracking-wider font-medium font-mono">{component.sublabel}</span>
                      <h4 className="text-xl font-bold text-vyr-white mt-1 mb-3">{component.label}</h4>
                      <p className="text-vyr-gray-500 text-sm">{component.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
