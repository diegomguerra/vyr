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
    description: "Suplementação por ciclo + Smart Ring + Registro diário. O sistema funciona de forma integrada.",
  },
  {
    icon: BarChart3,
    title: "3. Evolua com Dados",
    description: "Dashboard cognitivo, correlações inteligentes e insights personalizados. Compare apenas consigo mesmo.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Uma jornada estruturada para sustentar e evoluir seu desempenho intelectual
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50" />
              )}

              <div className="p-8 text-center relative z-10 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center border border-violet-500/30">
                  <step.icon className="w-8 h-8 text-violet-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
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
