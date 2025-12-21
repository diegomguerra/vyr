import { Sparkles, Eye, BarChart3, TrendingUp, Star } from "lucide-react";
import smartRingImage from "@/assets/smart-ring-transparent.png";

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
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Foco nos GANHOS */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 border border-fuchsia-500/30 mb-6">
            <Star className="w-4 h-4 text-fuchsia-400" />
            <span className="text-sm font-medium text-fuchsia-300">Sistema Completo de Performance</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            O que você ganha quando
            <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              leva performance mental a sério
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Não vendemos suplementos. Não vendemos tecnologia. 
            Entregamos <span className="text-white font-medium">resultados cognitivos mensuráveis</span> para quem 
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
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-fuchsia-500/40 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 border border-fuchsia-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <gain.icon className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{gain.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{gain.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ring Visual + Frase central */}
        <div className="relative py-16 mb-20">
          {/* Imagem do Ring centralizada */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Glow sutil atrás do ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/15 to-indigo-500/20 blur-3xl scale-150 rounded-full" />
              <img 
                src={smartRingImage} 
                alt="Smart Ring" 
                className="relative z-10 w-64 sm:w-80 lg:w-96 h-auto drop-shadow-2xl"
              />
            </div>
          </div>
          
          {/* Frase central */}
          <div className="relative flex justify-center">
            <div className="px-8 py-4 bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-fuchsia-500/30">
              <p className="text-xl sm:text-2xl font-medium text-white text-center">
                "Alta performance intelectual não se ostenta.{" "}
                <span className="text-fuchsia-400">Se mede.</span>"
              </p>
            </div>
          </div>
        </div>

        {/* O SISTEMA - Os meios integrados */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm text-violet-400 uppercase tracking-widest mb-2 font-medium">
              O Sistema
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Três componentes. Um objetivo.
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Cada peça foi desenhada para trabalhar em conjunto, entregando 
              os ganhos cognitivos que você busca.
            </p>
          </div>

          {/* Visual do Sistema Integrado */}
          <div className="relative">
            {/* Linha conectora central */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {systemComponents.map((component, index) => (
                <div key={component.label} className="relative">
                  {/* Ponto de conexão */}
                  <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-fuchsia-500 border-4 border-slate-900 z-10" />
                  
                  <div className={`relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-fuchsia-500/30 transition-all ${index === 1 ? 'lg:scale-105 lg:z-10 border-fuchsia-500/30' : ''}`}>
                    
                    <div className="text-center">
                      <span className="text-xs text-fuchsia-400 uppercase tracking-wider font-medium">{component.sublabel}</span>
                      <h4 className="text-xl font-bold text-white mt-1 mb-3">{component.label}</h4>
                      <p className="text-slate-400 text-sm">{component.description}</p>
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
