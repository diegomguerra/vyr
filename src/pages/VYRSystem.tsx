import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sun, Sunset, Moon, Shield, Sparkles, ArrowRight, BarChart3, Lightbulb, Calendar, FileText } from "lucide-react";
import { LandingNav, Footer } from "@/components/landing";
import { SachetMockup } from "@/brand";

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

const platformFeatures = [
  {
    icon: BarChart3,
    title: "Painel de Gestão Cognitiva",
    description: "Visualize sua rotina cognitiva em um painel unificado, com histórico, padrões e evolução ao longo do tempo.",
  },
  {
    icon: Lightbulb,
    title: "Insights Personalizados",
    description: "Relatórios inteligentes que traduzem seu uso em orientações práticas para tomada de decisão.",
  },
  {
    icon: Calendar,
    title: "Planejamento de Rotina",
    description: "Organize seu ciclo cognitivo diário com base em objetivos, contexto e consistência.",
  },
  {
    icon: FileText,
    title: "Registros Estruturados",
    description: "Registre percepções, hábitos e estados cognitivos para análise longitudinal.",
  },
];

const included = [
  { text: "12 meses de VYR BOOT (360 sachês)", icon: Sun, color: "text-vyr-gray-100" },
  { text: "12 meses de VYR HOLD (360 sachês)", icon: Sunset, color: "text-vyr-gray-400" },
  { text: "12 meses de VYR CLEAR (360 sachês)", icon: Moon, color: "text-vyr-cold-blue" },
  { text: "Acesso completo à Plataforma VYR Labs", icon: BarChart3, color: "text-vyr-gray-300" },
  { text: "Insights e relatórios", icon: Lightbulb, color: "text-vyr-gray-300" },
  { text: "Suporte prioritário", icon: Shield, color: "text-vyr-gray-400" },
];

export default function VYRSystem() {
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
                Sistema Cognitivo Estruturado
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-vyr-white mb-4 sm:mb-6">
                Dados Precisos.
                <span className="block font-mono tracking-wider text-vyr-gray-300">
                  Decisões Inteligentes.
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-vyr-gray-400 mb-6 sm:mb-8 leading-relaxed">
                Suplementação cognitiva estruturada e inteligência de dados para orientar sua rotina — sem necessidade de dispositivos.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm bg-vyr-gray-800/50 border border-vyr-gray-700/50">
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-100" />
                  <span className="text-xs sm:text-sm text-vyr-gray-300 font-mono">BOOT</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm bg-vyr-gray-800/50 border border-vyr-gray-700/50">
                  <Sunset className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-400" />
                  <span className="text-xs sm:text-sm text-vyr-gray-300 font-mono">HOLD</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm bg-vyr-gray-800/50 border border-vyr-gray-700/50">
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-cold-blue" />
                  <span className="text-xs sm:text-sm text-vyr-gray-300 font-mono">CLEAR</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm bg-vyr-gray-800/50 border border-vyr-gray-700/50">
                  <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-400" />
                  <span className="text-xs sm:text-sm text-vyr-gray-300">Plataforma</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-vyr-gray-900/80 rounded-sm p-4 sm:p-6 border border-vyr-gray-700/50 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-vyr-white">R$ 2.160</span>
                  <span className="text-sm sm:text-base text-vyr-gray-400">ou 12x de R$ 180</span>
                </div>

                <Link to="/labs?signup=true">
                  <Button className="w-full py-4 sm:py-6 text-base sm:text-lg font-mono bg-vyr-white hover:bg-vyr-gray-100 text-vyr-black rounded-sm transition-all duration-300 hover:scale-[1.02]">
                    Quero o VYR SYSTEM
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                
                <Link 
                  to="/sistema-completo" 
                  className="block text-center text-sm text-vyr-gray-400 hover:text-vyr-gray-300 mt-4 transition-colors"
                >
                  Ver versão com biometria →
                </Link>
                
                <p className="text-xs text-vyr-gray-500 mt-3 flex items-center justify-center gap-2">
                  <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Compra 100% segura • Garantia de 30 dias
                </p>
              </div>
            </div>

            {/* Hero Visual - 3 Boxes + Platform Preview */}
            <div className="relative flex flex-col items-center gap-8">
              {/* 3 Boxes Preview */}
              <AllBoxesPreview />
              
              {/* Platform Preview */}
              <div className="w-full max-w-md p-4 sm:p-6 rounded-sm bg-vyr-gray-900/80 border border-vyr-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-sm bg-vyr-gray-800 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-vyr-gray-300" />
                  </div>
                  <span className="font-mono text-sm text-vyr-gray-300">VYR LABS</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-vyr-gray-800 rounded-full w-3/4" />
                  <div className="h-2 bg-vyr-gray-800 rounded-full w-1/2" />
                  <div className="h-2 bg-vyr-gray-800 rounded-full w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Os 3 Sachês do Ciclo Cognitivo */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-vyr-black to-vyr-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-vyr-white mb-3 sm:mb-4">
              Os 3 Sachês do Ciclo Cognitivo
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* VYR BOOT */}
            <div className="relative p-6 rounded-sm bg-vyr-gray-900/80 border border-vyr-gray-600/30 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-vyr-gray-100" />
              <div className="flex items-center gap-4 mb-4">
                <div className="scale-90 sm:scale-100">
                  <SachetMockup variant="BOOT" />
                </div>
                <div>
                  <h3 className="text-lg font-mono font-bold text-vyr-white tracking-wide">VYR BOOT</h3>
                  <span className="text-xs text-vyr-gray-400">Energia Cognitiva</span>
                </div>
              </div>
              <p className="text-sm text-vyr-gray-400 leading-relaxed">
                Ativa foco, clareza mental e prontidão cognitiva nas primeiras horas do dia.
              </p>
            </div>

            {/* VYR HOLD */}
            <div className="relative p-6 rounded-sm bg-vyr-gray-900/80 border border-vyr-gray-500/30 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-vyr-gray-600" />
              <div className="flex items-center gap-4 mb-4">
                <div className="scale-90 sm:scale-100">
                  <SachetMockup variant="HOLD" />
                </div>
                <div>
                  <h3 className="text-lg font-mono font-bold text-vyr-white tracking-wide">VYR HOLD</h3>
                  <span className="text-xs text-vyr-gray-400">Sustentação Cognitiva</span>
                </div>
              </div>
              <p className="text-sm text-vyr-gray-400 leading-relaxed">
                Mantém estabilidade mental, resiliência e desempenho ao longo do dia, reduzindo quedas de energia cognitiva.
              </p>
            </div>

            {/* VYR CLEAR */}
            <div className="relative p-6 rounded-sm bg-vyr-gray-900/80 border border-vyr-cold-blue/30 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-vyr-coldBlue" />
              <div className="flex items-center gap-4 mb-4">
                <div className="scale-90 sm:scale-100">
                  <SachetMockup variant="CLEAR" />
                </div>
                <div>
                  <h3 className="text-lg font-mono font-bold text-vyr-white tracking-wide">VYR CLEAR</h3>
                  <span className="text-xs text-vyr-gray-400">Recuperação Cognitiva</span>
                </div>
              </div>
              <p className="text-sm text-vyr-gray-400 leading-relaxed">
                Favorece processamento mental, consolidação da memória e clareza cognitiva durante o descanso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plataforma VYR Labs */}
      <section className="py-12 sm:py-20 bg-vyr-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-vyr-white mb-3 sm:mb-4">
              Plataforma VYR Labs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {platformFeatures.map((feature, idx) => (
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

      {/* Como Funciona Sem Node */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-vyr-gray-900 to-vyr-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-vyr-white mb-6 sm:mb-8">
            Como Funciona
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-vyr-gray-400 leading-relaxed">
            O VYR SYSTEM opera sem dispositivos externos. A plataforma organiza o ciclo cognitivo a partir do uso dos sachês e de registros estruturados, entregando clareza, previsibilidade e direção.
          </p>
        </div>
      </section>

      {/* O Que Está Incluído */}
      <section className="py-12 sm:py-20 bg-vyr-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-vyr-white mb-3 sm:mb-4">
              O Que Está Incluído
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {included.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 sm:gap-4 p-4 rounded-sm bg-vyr-gray-900/50 border border-vyr-gray-800/50"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-vyr-gray-800/50 flex items-center justify-center flex-shrink-0">
                  <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                </div>
                <span className="text-sm sm:text-base text-vyr-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparação Ultra Minimal */}
      <section className="py-12 sm:py-20 bg-vyr-gray-900">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-6 sm:p-8 rounded-sm bg-vyr-gray-900/80 border border-vyr-gray-700/50">
            <h3 className="text-xl sm:text-2xl font-mono font-bold text-vyr-white mb-2">
              VYR SYSTEM
            </h3>
            <p className="text-sm text-vyr-gray-400 mb-6">
              Sachês + Plataforma<br />
              <span className="text-vyr-gray-500">Sem dispositivo</span>
            </p>
            
            <Link to="/sistema-completo">
              <Button variant="outline" className="border-vyr-gray-600 text-vyr-gray-300 hover:bg-vyr-gray-800 hover:text-vyr-white">
                Ver VYR SYSTEM com biometria
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}