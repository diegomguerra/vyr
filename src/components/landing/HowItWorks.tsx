import { UserPlus, Pill, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "1. Cadastre-se",
    description: "Crie sua conta e complete seu perfil com informações sobre seu estilo de vida e objetivos.",
  },
  {
    icon: Pill,
    title: "2. Registre suas doses",
    description: "Acompanhe diariamente suas doses e relate como você se sente ao longo do dia.",
  },
  {
    icon: BarChart3,
    title: "3. Visualize sua evolução",
    description: "Descubra padrões, receba insights personalizados e otimize sua suplementação.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma jornada simples para otimizar sua performance cognitiva
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50" />
              )}

              <div className="glass-card p-8 text-center relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
