import { UserPlus, Activity, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "1. Configure seu Perfil",
    description: "Complete a anamnese cognitiva e defina seus objetivos de performance intelectual.",
  },
  {
    icon: Activity,
    title: "2. Use o Sistema",
    description: "Suplementação por ciclo + VYR NODE + Registro diário. O sistema funciona de forma integrada.",
  },
  {
    icon: BarChart3,
    title: "3. Evolua com Dados",
    description: "Dashboard cognitivo, correlações inteligentes e insights personalizados. Compare apenas consigo mesmo.",
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
            Uma jornada estruturada para sustentar e evoluir seu desempenho intelectual
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-vyr-gray-700" />
              )}

              <div className="p-8 text-center relative z-10 rounded-sm bg-vyr-gray-800 border border-vyr-gray-700 hover:border-vyr-gray-600 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-sm bg-vyr-gray-700 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-vyr-gray-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-vyr-white mb-3">
                  {step.title}
                </h3>
                <p className="text-vyr-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
