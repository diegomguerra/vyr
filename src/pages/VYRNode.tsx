import { Link } from "react-router-dom";
import { ArrowLeft, Activity, Moon, Heart, Thermometer, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LandingNav } from "@/components/landing/LandingNav";
import { ScrollReveal } from "@/components/labs";

import smartRing from "@/assets/smart-ring-transparent.png";

const METRICS = [
  {
    icon: Heart,
    label: "Frequência Cardíaca",
    description: "Monitoramento contínuo 24/7 para detectar padrões e variações",
  },
  {
    icon: Activity,
    label: "Variabilidade (HRV)",
    description: "Indicador de capacidade adaptativa e recuperação do sistema nervoso",
  },
  {
    icon: Zap,
    label: "SpO₂",
    description: "Saturação de oxigênio no sangue durante sono e atividade",
  },
  {
    icon: Thermometer,
    label: "Temperatura Corporal",
    description: "Variações térmicas que indicam estados metabólicos",
  },
  {
    icon: Moon,
    label: "Arquitetura do Sono",
    description: "Fases do sono, despertares e qualidade da recuperação noturna",
  },
  {
    icon: Activity,
    label: "Atividade & Movimento",
    description: "Padrões de atividade física e gasto energético estimado",
  },
];

export default function VYRNode() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      
      {/* Grid pattern background */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <main className="relative pt-24 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <ScrollReveal>
              <div className="space-y-6">
                {/* Back link */}
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  <ArrowLeft className="w-3 h-3" />
                  VYR System
                </Link>
                
                {/* Label */}
                <span className="block font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground/70 uppercase">
                  Hardware Layer
                </span>
                
                {/* Headline */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-tight tracking-tight">
                  Dados fisiológicos contínuos, integrados ao sistema.
                </h1>
                
                {/* Subheadline */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg">
                  O VYR Node é a camada de hardware do ecossistema — um dispositivo de coleta 
                  de dados fisiológicos que alimenta o VYR Labs com sinais objetivos.
                </p>
                
                {/* Technical note */}
                <p className="font-mono text-xs text-muted-foreground/50 italic">
                  Não é o produto principal. É sensor a serviço do sistema.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: Ring Image */}
            <ScrollReveal delay={100}>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-radial from-muted/20 to-transparent rounded-full blur-3xl" />
                  <img 
                    src={smartRing}
                    alt="VYR Node Smart Ring"
                    className="relative w-64 h-64 sm:w-80 sm:h-80 object-contain"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What is VYR Node */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
          <ScrollReveal>
            <div className="max-w-2xl space-y-6">
              <h2 className="text-lg sm:text-xl font-medium text-foreground">
                O que é o VYR Node
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  O VYR Node é um dispositivo vestível (wearable) projetado para capturar 
                  dados fisiológicos de forma contínua e não invasiva.
                </p>
                <p>
                  Seu papel no ecossistema VYR é adicionar uma camada de objetividade 
                  aos dados subjetivos coletados via VYR Labs — correlacionando o que 
                  você sente com o que seu corpo está realmente expressando.
                </p>
                <p>
                  O Node não substitui a percepção consciente. Ele a complementa.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Metrics Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
          <ScrollReveal>
            <h2 className="text-lg sm:text-xl font-medium text-foreground mb-8">
              Métricas capturadas
            </h2>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {METRICS.map((metric, index) => (
              <ScrollReveal key={metric.label} delay={index * 50}>
                <Card className="border-border/50 bg-card/30 backdrop-blur-sm h-full">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm bg-muted/50 flex items-center justify-center flex-shrink-0">
                        <metric.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-mono text-xs tracking-wider text-foreground">
                          {metric.label}
                        </h3>
                        <p className="text-xs text-muted-foreground/80 leading-relaxed">
                          {metric.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Integration with Labs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
          <ScrollReveal>
            <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  <h2 className="text-lg font-medium text-foreground">
                    Integração com VYR Labs
                  </h2>
                  
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                        Sincronização
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Dados sincronizam automaticamente com a plataforma VYR Labs 
                        durante períodos de conectividade.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                        Correlação
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Algoritmos do Labs correlacionam dados objetivos do Node 
                        com percepções subjetivas registradas pelo usuário.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                        Personalização
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Com mais dados, o sistema refina suas inferências e 
                        oferece insights cada vez mais precisos.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </section>

        {/* Current Status */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-foreground">
                Status atual
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 border border-border/30 rounded-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500/70" />
                  <span className="text-sm text-muted-foreground">Protótipo em validação</span>
                </div>
                <div className="flex items-center gap-3 p-4 border border-border/30 rounded-sm">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                  <span className="text-sm text-muted-foreground">Lançamento previsto: 2025</span>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground/50 font-mono italic">
                O VYR System opera de forma completa mesmo sem o Node. 
                O hardware é uma camada opcional de precisão.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Footer Quote */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
          <ScrollReveal>
            <div className="border-t border-border/30 pt-12 space-y-8">
              <blockquote className="text-muted-foreground/60 text-sm italic max-w-lg">
                "O Node não substitui a percepção consciente. Ele a complementa — 
                oferecendo ao sistema uma segunda perspectiva sobre seu estado."
              </blockquote>
              
              <Link to="/labs">
                <Button 
                  variant="outline" 
                  className="border-border/50 text-muted-foreground hover:text-foreground text-sm"
                >
                  Explorar VYR Labs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}
