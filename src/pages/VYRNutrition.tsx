import { Link } from "react-router-dom";
import { ArrowLeft, Sun, Sunset, Moon, Package, Beaker, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingNav } from "@/components/landing/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { ScrollReveal } from "@/components/labs";
import { Label as VYRLabel, SachetMockup } from "@/brand";

const SACHETS = [
  {
    id: "boot",
    name: "VYR BOOT",
    variant: "BOOT" as const,
    period: "Manhã",
    icon: Sun,
    tagline: "Ativação com leveza",
    benefit: "Ajuda a iniciar o dia com clareza, menos atrito mental. Mais energia limpa.",
    usage: "Tomar ao acordar, em jejum ou com café",
    bgColor: "bg-vyr-gray-100",
    textColor: "text-vyr-black",
    composition: [
      "Citicolina 250mg",
      "Fosfatidilserina 100mg",
      "Bacopa monnieri 300mg",
      "Rhodiola rosea 200mg",
      "Vitaminas do complexo B",
    ],
    link: "/produtos/dia",
  },
  {
    id: "hold",
    name: "VYR HOLD",
    variant: "HOLD" as const,
    period: "Tarde",
    icon: Sunset,
    tagline: "Constância sob carga",
    benefit: "Mantém o ritmo cognitivo quando o dia exige mais. Menos oscilação. Mais continuidade.",
    usage: "Tomar após o almoço",
    bgColor: "bg-vyr-gray-600",
    textColor: "text-vyr-white",
    composition: [
      "Teacrina 100mg",
      "L-Teanina 200mg",
      "Cafeína 50mg",
      "Tirosina 500mg",
      "Vitamina B6",
    ],
    link: "/produtos/tarde",
  },
  {
    id: "clear",
    name: "VYR CLEAR",
    variant: "CLEAR" as const,
    period: "Noite",
    icon: Moon,
    tagline: "Descompressão cognitiva",
    benefit: "Desaceleração inteligente. Mais clareza ao acordar. O dia seguinte começa mais leve.",
    usage: "Tomar 1-2 horas antes de dormir",
    bgColor: "bg-[#1E293B]",
    textColor: "text-vyr-white",
    composition: [
      "NAC 600mg",
      "Ashwagandha 300mg",
      "Magnésio bisglicinato 200mg",
      "Glicina 3g",
      "L-Triptofano 250mg",
    ],
    link: "/produtos/noite",
  },
];

function SachetCard({ sachet }: { sachet: typeof SACHETS[0] }) {
  const Icon = sachet.icon;

  return (
    <div className="relative group h-full">
      <div className="relative p-4 sm:p-6 rounded-sm vyr-card-graphite transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col">
        {/* Visual da caixa com mockup do sachê */}
        <div className="relative mb-6 sm:mb-8">
          <div className={`relative w-full aspect-[4/3] rounded-sm ${sachet.bgColor} p-[2px]`}>
            <div className="w-full h-full rounded-sm bg-vyr-graphite-dark flex flex-col items-center justify-center p-3 sm:p-4">
              <VYRLabel variant={sachet.variant} />
              <span className="text-[10px] sm:text-xs text-vyr-gray-500 mt-2">30 sachês</span>
              <div className="mt-3 sm:mt-4 scale-90 sm:scale-100">
                <SachetMockup variant={sachet.variant} />
              </div>
            </div>
          </div>
          
          {/* Período badge */}
          <div className={`absolute -top-2 sm:-top-3 -right-2 sm:-right-3 px-2 sm:px-3 py-0.5 sm:py-1 rounded-sm ${sachet.bgColor} ${sachet.textColor} text-[10px] sm:text-xs tracking-wider flex items-center gap-1`}>
            <Icon className="w-3 h-3" />
            {sachet.period}
          </div>
        </div>
        
        <div className="flex flex-col h-full">
          {/* Conteúdo */}
          <div className="flex-1 flex flex-col">
            <p className="text-vyr-gray-300 font-medium text-xs sm:text-sm mb-1.5 sm:mb-2">{sachet.tagline}</p>
            <p className="text-vyr-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{sachet.benefit}</p>

            {/* Como usar */}
            <div className="pt-3 border-t border-vyr-graphite/50 mb-4">
              <span className="text-[10px] font-mono text-vyr-gray-500 uppercase tracking-wider">
                Como usar
              </span>
              <p className="text-xs text-vyr-gray-400 mt-1">{sachet.usage}</p>
            </div>

            {/* Composição */}
            <div className="pt-3 border-t border-vyr-graphite/50 flex-1">
              <span className="text-[10px] font-mono text-vyr-gray-500 uppercase tracking-wider">
                Composição
              </span>
              <ul className="mt-2 space-y-1">
                {sachet.composition.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-vyr-gray-400">
                    <Zap className="w-2.5 h-2.5 text-vyr-accent vyr-icon-glow flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Botão Saiba Mais */}
          <Link to={sachet.link} className="mt-6 block">
            <Button
              variant="outline"
              className="w-full justify-center py-2.5 text-xs sm:text-sm font-medium rounded-sm transition-all duration-300 bg-transparent hover:bg-vyr-gray-800 text-vyr-gray-300 hover:text-vyr-white border border-vyr-gray-700 hover:border-vyr-gray-500"
            >
              Saiba Mais
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function VYRNutrition() {
  return (
    <div className="min-h-screen bg-vyr-gray-900">
      <LandingNav />
      
      {/* Subtle radial glow */}
      <div className="fixed inset-0 vyr-gradient-radial opacity-50 pointer-events-none" />

      <main className="relative pt-24 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="space-y-6">
              {/* Back link */}
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-xs text-vyr-gray-400 hover:text-vyr-white transition-colors font-mono"
              >
                <ArrowLeft className="w-3 h-3" />
                VYR System
              </Link>
              
              {/* Label */}
              <div className="vyr-badge-accent">
                <Beaker className="w-3.5 h-3.5" />
                <span className="text-xs tracking-wider">MODULAÇÃO NUTRICIONAL</span>
              </div>
              
              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-vyr-white leading-tight tracking-tight max-w-2xl">
                Três momentos do dia.{" "}
                <span className="text-gradient-accent">Três formulações específicas.</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-vyr-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                A VYR Nutrition estrutura a modulação nutricional por períodos do ciclo circadiano, 
                respeitando as demandas fisiológicas de cada momento.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Sachets Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {SACHETS.map((sachet, index) => (
              <ScrollReveal key={sachet.id} delay={index * 100} className="h-full">
                <SachetCard sachet={sachet} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Info bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center gap-3 p-3 sm:p-4 vyr-card-graphite">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-vyr-graphite flex items-center justify-center flex-shrink-0">
                  <Beaker className="w-4 h-4 sm:w-5 sm:h-5 text-vyr-gray-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-vyr-white font-medium text-xs sm:text-sm">Composição Funcional</p>
                  <p className="text-vyr-gray-500 text-[10px] sm:text-xs">Ingredientes de alta pureza</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 vyr-card-graphite">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-vyr-graphite flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-vyr-gray-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-vyr-white font-medium text-xs sm:text-sm">Dosagem Calibrada</p>
                  <p className="text-vyr-gray-500 text-[10px] sm:text-xs">Para uso diário consistente</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 vyr-card-graphite">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-vyr-graphite flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-vyr-gray-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-vyr-white font-medium text-xs sm:text-sm">Sachês Individuais</p>
                  <p className="text-vyr-gray-500 text-[10px] sm:text-xs">30 doses por caixa</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Complete Routine */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <ScrollReveal>
            <div className="vyr-card-graphite p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-vyr-gray-400" />
                    <h3 className="font-mono text-sm tracking-wider text-vyr-white">
                      VYR SYSTEM — Rotina Completa
                    </h3>
                  </div>
                  <p className="text-sm text-vyr-gray-400 max-w-lg">
                    Os três sachês funcionam como sistema integrado. 
                    O ciclo completo oferece cobertura das principais janelas cognitivas do dia.
                  </p>
                </div>
                <Link to="/rotina-completa">
                  <Button 
                    variant="outline" 
                    className="border-vyr-gray-600 text-vyr-gray-300 hover:text-vyr-white hover:border-vyr-gray-500 text-sm whitespace-nowrap"
                  >
                    Ver rotina completa
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Practical Info */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
          <ScrollReveal>
            <div className="space-y-8">
              <h2 className="text-lg font-medium text-vyr-white">
                Informações práticas
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-vyr-gray-500 uppercase tracking-wider">
                    Conservação
                  </span>
                  <p className="text-sm text-vyr-gray-400">
                    Manter em local fresco e seco. Não refrigerar. 
                    Evitar exposição direta ao sol.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-vyr-gray-500 uppercase tracking-wider">
                    Validade
                  </span>
                  <p className="text-sm text-vyr-gray-400">
                    24 meses a partir da data de fabricação. 
                    Verificar na embalagem.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-vyr-gray-500 uppercase tracking-wider">
                    Preparo
                  </span>
                  <p className="text-sm text-vyr-gray-400">
                    Dissolver o conteúdo em 200ml de água. 
                    Pode ser misturado com café ou chá.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Footer CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
          <ScrollReveal>
            <div className="vyr-accent-line mb-12" />
            <div className="text-center">
              <p className="text-vyr-gray-400 text-sm mb-4">
                Quer entender a base científica por trás de cada formulação?
              </p>
              <Link to="/science">
                <Button 
                  variant="ghost" 
                  className="text-vyr-gray-300 hover:text-vyr-white text-sm"
                >
                  Acessar VYR Science →
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
