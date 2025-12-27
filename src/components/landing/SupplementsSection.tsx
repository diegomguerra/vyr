import { Sun, Moon, Sunset, Zap, Shield, Beaker } from "lucide-react";

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
    textColor: "text-vyr-black",
    sachets: "30 sachês",
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
  },
];

// Componente visual de caixa de suplemento - design limpo e sóbrio
function SupplementBox({ supplement }: { supplement: typeof supplements[0] }) {
  const Icon = supplement.icon;
  return (
    <div className="relative group">
      <div className={`relative p-5 sm:p-6 rounded-sm vyr-card-graphite transition-all duration-300 group-hover:translate-y-[-4px]`}>
        {/* Header com ícone e período */}
        <div className="flex items-center justify-between mb-4">
          <div className={`w-10 h-10 rounded-sm ${supplement.bgColor} flex items-center justify-center`}>
            <Icon className={`w-5 h-5 ${supplement.textColor}`} />
          </div>
          <span className={`px-3 py-1 rounded-sm ${supplement.bgColor} ${supplement.textColor} text-xs font-mono tracking-wider`}>
            {supplement.period}
          </span>
        </div>
        
        {/* Nome único - sem repetição */}
        <h3 className="text-xl font-medium text-vyr-white mb-1 font-mono tracking-wider">{supplement.name}</h3>
        <p className="text-vyr-gray-300 font-medium text-sm mb-3">{supplement.tagline}</p>
        <p className="text-vyr-gray-400 text-sm mb-5 leading-relaxed">{supplement.description}</p>
        
        {/* Benefícios */}
        <ul className="space-y-2">
          {supplement.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2.5 text-sm text-vyr-gray-300">
              <Zap className="w-3.5 h-3.5 text-vyr-accent flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Componente de visualização das 3 caixas VYR
function AllBoxesPreview() {
  return (
    <div className="flex items-end justify-center gap-4 sm:gap-6 lg:gap-8 py-6">
      {/* VYR BOOT Box */}
      <div className="relative" style={{ perspective: "400px" }}>
        <div 
          className="relative w-20 sm:w-28 lg:w-36 h-28 sm:h-36 lg:h-48 rounded-sm bg-vyr-gray-100 flex flex-col items-center justify-center"
          style={{ transform: "rotateY(-8deg)", boxShadow: "6px 0 20px -5px rgba(0,0,0,0.5)" }}
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-vyr-black font-medium">VYR</span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-vyr-gray-500">BOOT</span>
          <span className="font-mono text-[6px] sm:text-[8px] tracking-wider text-vyr-gray-400 mt-4 sm:mt-6 opacity-60">30 SACHETS</span>
        </div>
      </div>
      
      {/* VYR HOLD Box */}
      <div className="relative" style={{ perspective: "400px" }}>
        <div 
          className="relative w-20 sm:w-28 lg:w-36 h-28 sm:h-36 lg:h-48 rounded-sm bg-vyr-gray-600 flex flex-col items-center justify-center"
          style={{ boxShadow: "0 0 30px -5px rgba(0,0,0,0.5)" }}
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-vyr-white font-medium">VYR</span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-vyr-gray-300">HOLD</span>
          <span className="font-mono text-[6px] sm:text-[8px] tracking-wider text-vyr-gray-400 mt-4 sm:mt-6 opacity-60">30 SACHETS</span>
        </div>
      </div>
      
      {/* VYR CLEAR Box */}
      <div className="relative" style={{ perspective: "400px" }}>
        <div 
          className="relative w-20 sm:w-28 lg:w-36 h-28 sm:h-36 lg:h-48 rounded-sm bg-vyr-coldBlue flex flex-col items-center justify-center"
          style={{ transform: "rotateY(8deg)", boxShadow: "-6px 0 20px -5px rgba(0,0,0,0.5)" }}
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-vyr-white font-medium">VYR</span>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-vyr-gray-300">CLEAR</span>
          <span className="font-mono text-[6px] sm:text-[8px] tracking-wider text-vyr-gray-400 mt-4 sm:mt-6 opacity-60">30 SACHETS</span>
        </div>
      </div>
    </div>
  );
}

export function SupplementsSection() {
  return (
    <section id="suplementos" className="relative py-16 sm:py-24 bg-vyr-gray-900 overflow-hidden">
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
            Três fórmulas nootrópicas cientificamente dosadas para cada fase do seu dia. 
            <span className="text-vyr-white font-medium"> Não é estimulante. É otimização neural estruturada.</span>
          </p>
          
          {/* Preview das 3 caixas VYR (CSS-based) */}
          <AllBoxesPreview />
        </div>

        {/* Grid de suplementos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {supplements.map((supplement) => (
            <SupplementBox key={supplement.id} supplement={supplement} />
          ))}
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
              <span className="text-vyr-gray-300 font-medium">= Otimização 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}