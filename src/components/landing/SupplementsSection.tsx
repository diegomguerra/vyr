import { Sun, Moon, Sunset, Zap, Shield, Beaker, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Label as VYRLabel, SachetMockup } from "@/brand";
import { Button } from "@/components/ui/button";
const supplements = [{
  id: "boot",
  name: "VYR BOOT",
  variant: "BOOT" as const,
  icon: Sun,
  period: "Manhã",
  tagline: "Ativação & Clareza",
  description: "Estado inicial de ativação cognitiva. Indução de estado cognitivo inicial com suporte à atenção, memória operacional e clareza decisória.",
  benefits: ["Suporte à atenção", "Memória operacional", "Clareza decisória"],
  bgColor: "bg-vyr-gray-100",
  borderColor: "border-vyr-gray-300",
  textColor: "text-vyr-black",
  sachets: "30 sachês",
  link: "/produtos/dia"
}, {
  id: "hold",
  name: "VYR HOLD",
  variant: "HOLD" as const,
  icon: Sunset,
  period: "Tarde",
  tagline: "Manutenção de Estado Cognitivo",
  description: "Manutenção de estado cognitivo sob carga. Contribui para a manutenção do estado cognitivo sob carga prolongada e redução da variabilidade ao longo do dia.",
  benefits: ["Manutenção sob carga", "Redução de variabilidade", "Estabilidade ao longo do dia"],
  bgColor: "bg-vyr-gray-600",
  borderColor: "border-vyr-gray-500",
  textColor: "text-vyr-white",
  sachets: "30 sachês",
  link: "/produtos/tarde"
}, {
  id: "clear",
  name: "VYR CLEAR",
  variant: "CLEAR" as const,
  icon: Moon,
  period: "Noite",
  tagline: "Recuperação Cognitiva",
  description: "Redução de carga e recuperação neural. Favorece processos associados à consolidação neural e recuperação fisiológica durante o sono.",
  benefits: ["Descompressão cognitiva", "Consolidação neural", "Recuperação fisiológica"],
  bgColor: "bg-vyr-coldBlue",
  borderColor: "border-vyr-gray-600",
  textColor: "text-vyr-white",
  sachets: "30 sachês",
  link: "/produtos/noite"
}];

// Componente visual de caixa de suplemento usando mockups do brand
function SupplementBox({
  supplement
}: {
  supplement: typeof supplements[0];
}) {
  return <div className="relative group">
      {/* Caixa do suplemento */}
      <div className={`relative p-4 sm:p-6 rounded-sm vyr-card-graphite transition-all duration-300 group-hover:translate-y-[-4px]`}>
        {/* Visual da caixa com mockup do sachê */}
        <div className="relative mb-6 sm:mb-8">
          {/* Caixa simulada com borda do produto */}
          <div className={`relative w-full aspect-[4/3] rounded-sm ${supplement.bgColor} p-[2px]`}>
            <div className="w-full h-full rounded-sm bg-vyr-graphite-dark flex flex-col items-center justify-center p-3 sm:p-4">
              {/* Label VYR */}
              <VYRLabel variant={supplement.variant} />
              <span className="text-[10px] sm:text-xs text-vyr-gray-500 mt-2 font-mono">{supplement.sachets}</span>
              
              {/* Mockup visual do sachê (CSS-based) - Larger and more prominent */}
              <div className="mt-3 sm:mt-4 scale-90 sm:scale-100">
                <SachetMockup variant={supplement.variant} />
              </div>
            </div>
          </div>
          
          {/* Período badge */}
          <div className={`absolute -top-2 sm:-top-3 -right-2 sm:-right-3 px-2 sm:px-3 py-0.5 sm:py-1 rounded-sm ${supplement.bgColor} ${supplement.textColor} text-[10px] sm:text-xs font-mono tracking-wider`}>
            {supplement.period}
          </div>
        </div>
        
        {/* Conteúdo */}
        
        <p className="text-vyr-gray-300 font-medium text-xs sm:text-sm mb-1.5 sm:mb-2">{supplement.tagline}</p>
        <p className="text-vyr-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{supplement.description}</p>
        
        {/* Benefícios */}
        <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          {supplement.benefits.map(benefit => <li key={benefit} className="flex items-center gap-2 text-xs sm:text-sm text-vyr-gray-300">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-vyr-accent vyr-icon-glow flex-shrink-0" />
              {benefit}
            </li>)}
        </ul>

        {/* Botão Saiba Mais */}
        <Link to={supplement.link}>
          <Button variant="outline" className="w-full py-2.5 text-xs sm:text-sm font-medium rounded-sm transition-all duration-300 bg-transparent hover:bg-vyr-gray-800 text-vyr-gray-300 hover:text-vyr-white border border-vyr-gray-700 hover:border-vyr-gray-500">
            Saiba Mais
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </Link>
      </div>
    </div>;
}

// Componente de visualização das 3 caixas VYR
function AllBoxesPreview() {
  return <div className="flex items-end justify-center gap-4 sm:gap-6 lg:gap-8 py-6">
      {/* VYR BOOT Box */}
      <div className="relative" style={{
      perspective: "400px"
    }}>
        <div className="relative w-20 sm:w-28 lg:w-36 h-28 sm:h-36 lg:h-48 rounded-sm bg-vyr-gray-100 flex flex-col items-center justify-center" style={{
        transform: "rotateY(-8deg)",
        boxShadow: "6px 0 20px -5px rgba(0,0,0,0.5)"
      }}>
          <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-vyr-black font-medium">VYR</span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-vyr-gray-500">BOOT</span>
          <span className="font-mono text-[6px] sm:text-[8px] tracking-wider text-vyr-gray-400 mt-4 sm:mt-6 opacity-60">30 SACHETS</span>
        </div>
      </div>
      
      {/* VYR HOLD Box */}
      <div className="relative" style={{
      perspective: "400px"
    }}>
        <div className="relative w-20 sm:w-28 lg:w-36 h-28 sm:h-36 lg:h-48 rounded-sm bg-vyr-gray-600 flex flex-col items-center justify-center" style={{
        boxShadow: "0 0 30px -5px rgba(0,0,0,0.5)"
      }}>
          <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-vyr-white font-medium">VYR</span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-vyr-gray-300">HOLD</span>
          <span className="font-mono text-[6px] sm:text-[8px] tracking-wider text-vyr-gray-400 mt-4 sm:mt-6 opacity-60">30 SACHETS</span>
        </div>
      </div>
      
      {/* VYR CLEAR Box */}
      <div className="relative" style={{
      perspective: "400px"
    }}>
        <div className="relative w-20 sm:w-28 lg:w-36 h-28 sm:h-36 lg:h-48 rounded-sm bg-vyr-coldBlue flex flex-col items-center justify-center" style={{
        transform: "rotateY(8deg)",
        boxShadow: "-6px 0 20px -5px rgba(0,0,0,0.5)"
      }}>
          <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-vyr-white font-medium">VYR</span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-vyr-gray-300">CLEAR</span>
          <span className="font-mono text-[6px] sm:text-[8px] tracking-wider text-vyr-gray-400 mt-4 sm:mt-6 opacity-60">30 SACHETS</span>
        </div>
      </div>
    </div>;
}
export function SupplementsSection() {
  return <section id="suplementos" className="relative py-16 sm:py-24 bg-vyr-gray-900 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 vyr-gradient-radial opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com visualização das caixas */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="vyr-badge-accent mb-4 sm:mb-6">
            <Beaker className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-mono tracking-wider">SUPLEMENTAÇÃO NOOTRÓPICA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-vyr-white mb-3 sm:mb-4">
            Ciclo <span className="text-gradient-accent">Cognitivo</span> Completo
          </h2>
          <p className="text-vyr-gray-400 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 px-2">
            Três módulos nootrópicos estruturados para diferentes estados cognitivos ao longo do dia. 
            <span className="text-vyr-white font-medium"> Não atua por estímulo agudo, mas por modulação progressiva do estado neural.</span>
          </p>
          
          {/* Preview das 3 caixas VYR (CSS-based) */}
          <AllBoxesPreview />
        </div>

        {/* Grid de suplementos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {supplements.map(supplement => <SupplementBox key={supplement.id} supplement={supplement} />)}
        </div>

        {/* Info bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 p-3 sm:p-4 vyr-card-graphite">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-vyr-graphite flex items-center justify-center flex-shrink-0">
              <Beaker className="w-4 h-4 sm:w-5 sm:h-5 text-vyr-gray-300" />
            </div>
            <div className="min-w-0">
              <p className="text-vyr-white font-medium text-xs sm:text-sm">Nootrópicos Premium</p>
              <p className="text-vyr-gray-500 text-[10px] sm:text-xs">Compostos de alta pureza</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 sm:p-4 vyr-card-graphite">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-vyr-graphite flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-vyr-gray-300" />
            </div>
            <div className="min-w-0">
              <p className="text-vyr-white font-medium text-xs sm:text-sm">Dosagem Otimizada</p>
              <p className="text-vyr-gray-500 text-[10px] sm:text-xs">Baseada em estudos clínicos</p>
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

        {/* Callout */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-5 sm:px-8 py-4 sm:py-5 vyr-card-graphite">
            <div className="flex items-center gap-2">
              <span className="text-vyr-gray-400 text-sm">Ciclo completo:</span>
              <span className="text-vyr-white font-medium text-sm font-mono">90 sachês/mês</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-vyr-graphite" />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-vyr-gray-400">BOOT + HOLD + CLEAR</span>
              <span className="text-vyr-gray-300 font-medium">= Gestão cognitiva 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
}