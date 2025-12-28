import { Circle, BarChart3, Cpu } from "lucide-react";

const steps = [
  {
    icon: Circle,
    title: "Protocolo VYR",
    description: "Você inicia com o protocolo BOOT, HOLD e CLEAR, organizado para sustentar foco, estabilidade e clareza mental ao longo do dia.",
    note: "O sistema já foi desenhado para funcionar como um todo, sem escolhas confusas.",
  },
  {
    icon: BarChart3,
    title: "Plataforma VYR",
    description: "Registre doses, acompanhe sua evolução e construa histórico real de performance cognitiva.",
    note: "Nesta fase, o sistema é guiado: consistente, previsível e estruturado. É o ponto de partida.",
  },
  {
    icon: Cpu,
    title: "Evolução com dados",
    subtitle: "VYR Node · Smart Ring",
    description: "Ao integrar o VYR Node (Smart Ring), o sistema deixa de ser apenas guiado e passa a ser adaptativo.",
    note: "O VYR começa a correlacionar padrões fisiológicos, rotina e resposta individual ao protocolo. Aqui o sistema se torna completo.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-vyr-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-vyr-white mb-4">
            Como Funciona
          </h2>
          <p className="text-vyr-gray-400 max-w-2xl mx-auto">
            Uma jornada estruturada do guiado ao adaptativo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-vyr-gray-700" />
              )}

              <div className={`p-8 text-center relative z-10 rounded-sm border transition-all duration-300 h-full flex flex-col ${
                index === 2 
                  ? "bg-vyr-gray-800 border-vyr-white/20 hover:border-vyr-white/40" 
                  : "bg-vyr-gray-800 border-vyr-gray-700 hover:border-vyr-gray-600"
              }`}>
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-sm flex items-center justify-center ${
                  index === 2 ? "bg-vyr-white" : "bg-vyr-gray-700"
                }`}>
                  <step.icon className={`w-8 h-8 ${index === 2 ? "text-vyr-black" : "text-vyr-gray-300"}`} />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-medium text-vyr-white mb-1">
                    {step.title}
                  </h3>
                  {step.subtitle && (
                    <p className="text-sm font-mono text-vyr-gray-400 mb-3 tracking-wider">
                      {step.subtitle}
                    </p>
                  )}
                  <p className="text-vyr-gray-300 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <p className="text-vyr-gray-500 text-xs leading-relaxed italic">
                    {step.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
