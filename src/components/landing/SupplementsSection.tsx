import { Sun, Moon, Sunset, Zap, Shield, Beaker } from "lucide-react";
import { Label as VYRLabel } from "@/brand";

// Import product images
import nztBoxesSachets from "@/assets/nzt-boxes-sachets.png";
import sachetDia from "@/assets/sachet-dia.png";
import sachetTarde from "@/assets/sachet-tarde.png";
import sachetNoite from "@/assets/sachet-noite.png";

const supplements = [
  {
    id: "boot",
    name: "VYR BOOT",
    variant: "BOOT" as const,
    icon: Sun,
    period: "Manhã",
    tagline: "Ativação & Clareza",
    description: "Fórmula nootrópica para máxima ativação cognitiva. Foco profundo, memória de trabalho e clareza mental desde as primeiras horas.",
    benefits: ["Foco intensificado", "Clareza nas decisões", "Energia mental sustentada"],
    bgColor: "bg-vyr-gray-100",
    borderColor: "border-vyr-gray-300",
    textColor: "text-vyr-gray-900",
    sachets: "30 sachês",
    sachetImage: sachetDia,
  },
  {
    id: "hold",
    name: "VYR HOLD",
    variant: "HOLD" as const,
    icon: Sunset,
    period: "Tarde",
    tagline: "Sustentação & Resiliência",
    description: "Mantém o estado de flow e protege contra fadiga cognitiva. Resistência mental para finalizar o dia no mesmo nível.",
    benefits: ["Flow prolongado", "Resistência à fadiga", "Equilíbrio emocional"],
    bgColor: "bg-vyr-gray-600",
    borderColor: "border-vyr-gray-500",
    textColor: "text-vyr-white",
    sachets: "30 sachês",
    sachetImage: sachetTarde,
  },
  {
    id: "clear",
    name: "VYR CLEAR",
    variant: "CLEAR" as const,
    icon: Moon,
    period: "Noite",
    tagline: "Recuperação Cognitiva",
    description: "Otimiza consolidação de memória e regeneração neural durante o sono. Acorde preparado para um novo dia de alta performance.",
    benefits: ["Sono reparador", "Consolidação de memória", "Regeneração neural"],
    bgColor: "bg-vyr-coldBlue",
    borderColor: "border-vyr-gray-600",
    textColor: "text-vyr-white",
    sachets: "30 sachês",
    sachetImage: sachetNoite,
  },
];

// Componente visual de caixa de suplemento
function SupplementBox({ supplement }: { supplement: typeof supplements[0] }) {
  return (
    <div className="relative group">
      {/* Caixa do suplemento */}
      <div className={`relative p-4 sm:p-6 rounded-sm bg-vyr-gray-800 border ${supplement.borderColor} transition-all duration-300 group-hover:border-vyr-gray-400 group-hover:translate-y-[-4px]`}>
        {/* Visual da caixa com imagem real do sachê */}
        <div className="relative mb-4 sm:mb-6">
          {/* Caixa simulada */}
          <div className={`relative w-full aspect-[4/3] rounded-sm ${supplement.bgColor} p-[2px]`}>
            <div className="w-full h-full rounded-sm bg-vyr-gray-900 flex flex-col items-center justify-center p-3 sm:p-4">
              {/* Label VYR */}
              <VYRLabel variant={supplement.variant} />
              <span className="text-[10px] sm:text-xs text-vyr-gray-500 mt-2 font-mono">{supplement.sachets}</span>
              
              {/* Imagem real do sachê (horizontal) */}
              <div className="mt-2 sm:mt-3 w-full flex justify-center">
                <img 
                  src={supplement.sachetImage} 
                  alt={`Sachê ${supplement.name}`}
                  className="w-20 sm:w-28 h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
          
          {/* Período badge */}
          <div className={`absolute -top-2 sm:-top-3 -right-2 sm:-right-3 px-2 sm:px-3 py-0.5 sm:py-1 rounded-sm ${supplement.bgColor} ${supplement.textColor} text-[10px] sm:text-xs font-mono tracking-wider`}>
            {supplement.period}
          </div>
        </div>
        
        {/* Conteúdo */}
        <h3 className="text-lg sm:text-xl font-medium text-vyr-white mb-0.5 sm:mb-1 font-mono tracking-wider">{supplement.name}</h3>
        <p className="text-vyr-gray-300 font-medium text-xs sm:text-sm mb-1.5 sm:mb-2">{supplement.tagline}</p>
        <p className="text-vyr-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{supplement.description}</p>
        
        {/* Benefícios */}
        <ul className="space-y-1.5 sm:space-y-2">
          {supplement.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-xs sm:text-sm text-vyr-gray-300">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-vyr-gray-400 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SupplementsSection() {
  return (
    <section id="suplementos" className="py-16 sm:py-24 bg-vyr-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com imagem das caixas */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm bg-vyr-gray-800 border border-vyr-gray-700 mb-4 sm:mb-6">
            <Beaker className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-400" />
            <span className="text-xs sm:text-sm font-mono text-vyr-gray-300 tracking-wider">SUPLEMENTAÇÃO NOOTRÓPICA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-vyr-white mb-3 sm:mb-4">
            Ciclo Cognitivo Completo
          </h2>
          <p className="text-vyr-gray-400 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 px-2">
            Três fórmulas nootrópicas cientificamente dosadas para cada fase do seu dia. 
            <span className="text-vyr-white font-medium"> Não é estimulante. É otimização neural estruturada.</span>
          </p>
          
          {/* Imagem das caixas com sachês */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative max-w-sm sm:max-w-lg lg:max-w-2xl w-full">
              <img 
                src={nztBoxesSachets} 
                alt="VYR Suplementos - Caixas BOOT, HOLD e CLEAR com sachês"
                className="w-full h-auto object-contain opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Grid de suplementos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {supplements.map((supplement) => (
            <SupplementBox key={supplement.id} supplement={supplement} />
          ))}
        </div>

        {/* Info bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-sm bg-vyr-gray-800 border border-vyr-gray-700">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-vyr-gray-700 flex items-center justify-center flex-shrink-0">
              <Beaker className="w-4 h-4 sm:w-5 sm:h-5 text-vyr-gray-300" />
            </div>
            <div className="min-w-0">
              <p className="text-vyr-white font-medium text-xs sm:text-sm">Nootrópicos Premium</p>
              <p className="text-vyr-gray-500 text-[10px] sm:text-xs">Compostos de alta pureza</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-sm bg-vyr-gray-800 border border-vyr-gray-700">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-vyr-gray-700 flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-vyr-gray-300" />
            </div>
            <div className="min-w-0">
              <p className="text-vyr-white font-medium text-xs sm:text-sm">Dosagem Otimizada</p>
              <p className="text-vyr-gray-500 text-[10px] sm:text-xs">Baseada em estudos clínicos</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-sm bg-vyr-gray-800 border border-vyr-gray-700">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-vyr-gray-700 flex items-center justify-center flex-shrink-0">
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-5 sm:px-8 py-4 sm:py-5 rounded-sm bg-vyr-gray-800 border border-vyr-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-vyr-gray-400 text-sm">Ciclo completo:</span>
              <span className="text-vyr-white font-medium text-sm font-mono">90 sachês/mês</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-vyr-gray-700" />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-vyr-gray-400">BOOT + HOLD + CLEAR</span>
              <span className="text-vyr-gray-300 font-medium">= Otimização 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
