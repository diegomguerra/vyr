import { Link } from "react-router-dom";
import { ArrowLeft, Sun, Sunset, Moon, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LandingNav } from "@/components/landing/LandingNav";
import { ScrollReveal } from "@/components/labs";

import sachetDia from "@/assets/sachet-dia-vertical.png";
import sachetTarde from "@/assets/sachet-tarde-vertical.png";
import sachetNoite from "@/assets/sachet-noite-vertical.png";

const SACHETS = [
  {
    id: "boot",
    name: "VYR BOOT",
    period: "Manhã",
    icon: Sun,
    image: sachetDia,
    color: "bg-vyr-gray-100",
    textColor: "text-vyr-graphite-dark",
    benefit: "Ativação cognitiva para início do ciclo diário",
    usage: "Tomar ao acordar, em jejum ou com café",
    composition: [
      "Citicolina 250mg",
      "Fosfatidilserina 100mg",
      "Bacopa monnieri 300mg",
      "Rhodiola rosea 200mg",
      "Vitaminas do complexo B",
    ],
  },
  {
    id: "hold",
    name: "VYR HOLD",
    period: "Tarde",
    icon: Sunset,
    image: sachetTarde,
    color: "bg-vyr-graphite",
    textColor: "text-vyr-white",
    benefit: "Manutenção de foco sob carga cognitiva prolongada",
    usage: "Tomar após o almoço, antes do período de maior demanda",
    composition: [
      "Teacrina 100mg",
      "L-Teanina 200mg",
      "Cafeína 50mg",
      "Tirosina 500mg",
      "Vitamina B6",
    ],
  },
  {
    id: "clear",
    name: "VYR CLEAR",
    period: "Noite",
    icon: Moon,
    image: sachetNoite,
    color: "bg-vyr-coldBlue",
    textColor: "text-vyr-white",
    benefit: "Preparação para recuperação noturna e consolidação",
    usage: "Tomar 1-2 horas antes de dormir",
    composition: [
      "NAC 600mg",
      "Ashwagandha 300mg",
      "Magnésio bisglicinato 200mg",
      "Glicina 3g",
      "L-Triptofano 250mg",
    ],
  },
];

export default function VYRNutrition() {
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
                Modulação Nutricional
              </span>
              
              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-tight tracking-tight max-w-2xl">
                Três momentos do dia. Três formulações específicas.
              </h1>
              
              {/* Subheadline */}
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
                A VYR Nutrition estrutura a modulação nutricional por períodos do ciclo circadiano, 
                respeitando as demandas fisiológicas de cada momento.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Sachets Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {SACHETS.map((sachet, index) => (
              <ScrollReveal key={sachet.id} delay={index * 100}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden h-full">
                  <CardContent className="p-0">
                    {/* Sachet Image */}
                    <div className={`${sachet.color} p-6 flex items-center justify-center`}>
                      <img 
                        src={sachet.image} 
                        alt={sachet.name}
                        className="h-48 object-contain"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-mono text-sm tracking-wider text-foreground">
                            {sachet.name}
                          </h3>
                          <span className="text-xs text-muted-foreground">
                            {sachet.period}
                          </span>
                        </div>
                        <sachet.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      
                      {/* Benefit */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {sachet.benefit}
                      </p>
                      
                      {/* Usage */}
                      <div className="pt-3 border-t border-border/30">
                        <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                          Como usar
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">
                          {sachet.usage}
                        </p>
                      </div>
                      
                      {/* Composition */}
                      <div className="pt-3 border-t border-border/30">
                        <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                          Composição
                        </span>
                        <ul className="mt-2 space-y-1">
                          {sachet.composition.map((item, i) => (
                            <li key={i} className="text-xs text-muted-foreground/80">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Complete Routine */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
          <ScrollReveal>
            <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Package className="w-5 h-5 text-muted-foreground" />
                      <h3 className="font-mono text-sm tracking-wider text-foreground">
                        VYR SYSTEM — Rotina Completa
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-lg">
                      Os três sachês funcionam como sistema integrado. 
                      O ciclo completo oferece cobertura das principais janelas cognitivas do dia.
                    </p>
                  </div>
                  <Link to="/rotina-completa">
                    <Button 
                      variant="outline" 
                      className="border-border/50 text-muted-foreground hover:text-foreground text-sm whitespace-nowrap"
                    >
                      Ver rotina completa
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </section>

        {/* Practical Info */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
          <ScrollReveal>
            <div className="space-y-8">
              <h2 className="text-lg font-medium text-foreground">
                Informações práticas
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                    Conservação
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Manter em local fresco e seco. Não refrigerar. 
                    Evitar exposição direta ao sol.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                    Validade
                  </span>
                  <p className="text-sm text-muted-foreground">
                    24 meses a partir da data de fabricação. 
                    Verificar na embalagem.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                    Preparo
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Dissolver o conteúdo em 200ml de água. 
                    Pode ser misturado com café ou chá.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Footer CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
          <ScrollReveal>
            <div className="border-t border-border/30 pt-12">
              <p className="text-muted-foreground text-sm">
                Quer entender a base científica por trás de cada formulação?
              </p>
              <Link to="/science" className="inline-block mt-4">
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground hover:text-foreground text-sm px-0"
                >
                  Acessar VYR Science →
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}
