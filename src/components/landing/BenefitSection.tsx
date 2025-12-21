import { Brain, Moon, TrendingUp, Shield, Zap, Target } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Clareza Mental",
    description: "Melhore sua capacidade de processamento e tomada de decisões",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Moon,
    title: "Sono Otimizado",
    description: "Monitore seu sono e descubra como ele afeta seu desempenho",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: TrendingUp,
    title: "Acompanhamento",
    description: "Visualize sua evolução com gráficos e métricas personalizadas",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Shield,
    title: "Seguro e Eficaz",
    description: "Fórmula cientificamente desenvolvida com ingredientes de alta qualidade",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "Energia Sustentada",
    description: "Sem crashes ou dependência, energia mental durante todo o dia",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    icon: Target,
    title: "Foco Direcionado",
    description: "Concentre-se no que importa com maior precisão e menos distrações",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

export function BenefitSection() {
  return (
    <section id="beneficios" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Benefícios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa para elevar sua performance cognitiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:border-primary/30 transition-colors group"
            >
              <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
