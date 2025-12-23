import { Sun, Moon, Sunset, Brain, Zap, Shield, Beaker } from "lucide-react";

// Import product images
import nztBoxesSachets from "@/assets/nzt-boxes-sachets.png";
import sachetDia from "@/assets/sachet-dia.png";
import sachetTarde from "@/assets/sachet-tarde.png";
import sachetNoite from "@/assets/sachet-noite.png";

const supplements = [
  {
    id: "dia",
    name: "NZT Dia",
    icon: Sun,
    period: "Manhã",
    tagline: "Ativação & Clareza",
    description: "Fórmula nootrópica para máxima ativação cognitiva. Foco profundo, memória de trabalho e clareza mental desde as primeiras horas.",
    benefits: ["Foco intensificado", "Clareza nas decisões", "Energia mental sustentada"],
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-400",
    sachets: "30 sachês",
    sachetImage: sachetDia,
  },
  {
    id: "tarde",
    name: "NZT Tarde",
    icon: Sunset,
    period: "Tarde",
    tagline: "Sustentação & Resiliência",
    description: "Mantém o estado de flow e protege contra fadiga cognitiva. Resistência mental para finalizar o dia no mesmo nível.",
    benefits: ["Flow prolongado", "Resistência à fadiga", "Equilíbrio emocional"],
    color: "from-purple-500 to-fuchsia-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
    sachets: "30 sachês",
    sachetImage: sachetTarde,
  },
  {
    id: "noite",
    name: "NZT Noite",
    icon: Moon,
    period: "Noite",
    tagline: "Recuperação Cognitiva",
    description: "Otimiza consolidação de memória e regeneração neural durante o sono. Acorde preparado para um novo dia de alta performance.",
    benefits: ["Sono reparador", "Consolidação de memória", "Regeneração neural"],
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    textColor: "text-indigo-400",
    sachets: "30 sachês",
    sachetImage: sachetNoite,
  },
];

// Componente visual de caixa de suplemento
function SupplementBox({ supplement }: { supplement: typeof supplements[0] }) {
  return (
    <div className="relative group">
      {/* Caixa do suplemento */}
      <div className={`relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900 border ${supplement.borderColor} transition-all duration-300 group-hover:border-opacity-60 group-hover:translate-y-[-4px]`}>
        {/* Visual da caixa com imagem real do sachê */}
        <div className="relative mb-4 sm:mb-6">
          {/* Caixa 3D simulada */}
          <div className={`relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br ${supplement.color} p-[2px] shadow-lg`}>
            <div className="w-full h-full rounded-xl bg-slate-900 flex flex-col items-center justify-center p-3 sm:p-4">
              {/* Logo/Icon */}
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full ${supplement.bgColor} flex items-center justify-center mb-1.5 sm:mb-2`}>
                <supplement.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${supplement.textColor}`} />
              </div>
              {/* Nome do produto */}
              <span className={`text-base sm:text-xl font-bold bg-gradient-to-r ${supplement.color} bg-clip-text text-transparent`}>
                {supplement.name}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">{supplement.sachets}</span>
              
              {/* Imagem real do sachê (horizontal) */}
              <div className="mt-2 sm:mt-3 w-full flex justify-center">
                <img 
                  src={supplement.sachetImage} 
                  alt={`Sachê ${supplement.name}`}
                  className="w-20 sm:w-28 h-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          
          {/* Período badge */}
          <div className={`absolute -top-2 sm:-top-3 -right-2 sm:-right-3 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r ${supplement.color} text-white text-[10px] sm:text-xs font-semibold shadow-lg`}>
            {supplement.period}
          </div>
        </div>
        
        {/* Conteúdo */}
        <h3 className={`text-lg sm:text-xl font-bold ${supplement.textColor} mb-0.5 sm:mb-1`}>{supplement.name}</h3>
        <p className="text-white font-medium text-xs sm:text-sm mb-1.5 sm:mb-2">{supplement.tagline}</p>
        <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{supplement.description}</p>
        
        {/* Benefícios */}
        <ul className="space-y-1.5 sm:space-y-2">
          {supplement.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <Zap className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${supplement.textColor} flex-shrink-0`} />
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
    <section id="suplementos" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com imagem das caixas */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4 sm:mb-6">
            <Beaker className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            <span className="text-xs sm:text-sm font-medium text-emerald-300">Suplementação Nootrópica Premium</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
            Ciclo Cognitivo Completo
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 px-2">
            Três fórmulas nootrópicas cientificamente dosadas para cada fase do seu dia. 
            <span className="text-white font-medium"> Não é estimulante. É otimização neural estruturada.</span>
          </p>
          
          {/* Imagem das caixas com sachês */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative max-w-sm sm:max-w-lg lg:max-w-2xl w-full">
              <img 
                src={nztBoxesSachets} 
                alt="NZT Suplementos - Caixas Dia, Tarde e Noite com sachês"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
              {/* Glow effect atrás da imagem */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl rounded-full scale-75" />
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
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <p className="text-white font-medium text-xs sm:text-sm">Nootrópicos Premium</p>
              <p className="text-slate-500 text-[10px] sm:text-xs">Compostos de alta pureza</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-500/15 flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
            </div>
            <div className="min-w-0">
              <p className="text-white font-medium text-xs sm:text-sm">Dosagem Otimizada</p>
              <p className="text-slate-500 text-[10px] sm:text-xs">Baseada em estudos clínicos</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            </div>
            <div className="min-w-0">
              <p className="text-white font-medium text-xs sm:text-sm">Sachês Individuais</p>
              <p className="text-slate-500 text-[10px] sm:text-xs">30 doses por caixa</p>
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-5 sm:px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-slate-700/50">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-sm">Ciclo completo:</span>
              <span className="text-white font-bold text-sm">90 sachês/mês</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-600" />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-400">Manhã + Tarde + Noite</span>
              <span className="text-emerald-400 font-semibold">= Otimização 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
