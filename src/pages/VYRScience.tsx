import { Link } from "react-router-dom";
import { ArrowRight, Brain, Activity, BarChart3, Waves, Zap, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingNav } from "@/components/landing/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { ScrollReveal } from "@/components/labs";
import { useEffect, useState, useMemo } from "react";

// Floating particles component
function FloatingParticles() {
  const particles = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 30,
      delay: Math.random() * -20,
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-foreground/[0.03] animate-float-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Section divider component
function SectionDivider({ variant = "default" }: { variant?: "default" | "accent" }) {
  return (
    <div className="relative h-px w-full overflow-hidden">
      {/* Base line */}
      <div className="absolute inset-0 bg-border/20" />
      
      {/* Animated gradient line */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent
          animate-slide-divider`}
        style={{ width: '200%', marginLeft: '-50%' }}
      />
      
      {/* Center accent dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={`w-1.5 h-1.5 rounded-full ${variant === "accent" ? "bg-foreground/20" : "bg-muted-foreground/20"}`} />
      </div>
      
      {/* Side fade lines */}
      <div className="absolute left-1/2 top-0 h-full w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent" />
    </div>
  );
}

const PILLARS = [
  {
    icon: Brain,
    title: "Neurofisiologia da carga cognitiva",
    description: `Atenção, decisão e energia mental não falham por falta de estímulo.
Elas se degradam pelo acúmulo de carga mal recuperada.

Fadiga, estresse, variabilidade — sinais de fricção acumulada.
A ciência da VYR começa aqui.`,
  },
  {
    icon: Waves,
    title: "Ritmo, não intensidade",
    description: `Sistemas biológicos funcionam melhor com constância do que com picos.

Ciclo circadiano. Modular manhã, tarde, noite.
Em vez de empurrar o cérebro, trabalhamos com o fluxo natural.

Isso conecta diretamente com BOOT / HOLD / CLEAR.`,
  },
  {
    icon: Activity,
    title: "Percepção + fisiologia",
    description: `A experiência subjetiva importa.
Mas ela fica mais poderosa quando observada ao longo do tempo.

A VYR cruza percepção consciente com sinais fisiológicos
para identificar padrões — não para rotular pessoas.`,
  },
];

const NOT_PROMISES = [
  "aumento de QI",
  "performance extrema",
  "causalidade clínica",
  "resultados universais",
];

const WHAT_WE_MEASURE = [
  "variabilidade de energia",
  "recuperação",
  "estabilidade",
  "prontidão percebida",
  "coerência ao longo dos dias",
];

const FOUNDATIONS = [
  "Neurociência do esforço mental",
  "Fisiologia do estresse e recuperação",
  "Ritmo circadiano e performance",
  "Variabilidade autonômica",
];

const COMPARISON = [
  { them: "Ciência como vitrine", us: "Ciência como método" },
  { them: "Acúmulo de informação", us: "Clareza estrutural" },
  { them: "Tentativa de provar", us: "Compromisso com limites" },
  { them: "Ciência genérica", us: "Ciência aplicada ao indivíduo" },
  { them: "Promessa implícita", us: "Honestidade explícita" },
];

export default function VYRScience() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Grid pattern background */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <main className="relative z-10">
        {/* HERO */}
        <section className="min-h-[85vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <ScrollReveal>
              <div className="max-w-3xl space-y-8">
                {/* Label */}
                <span className="block font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground/60 uppercase">
                  VYR Science
                </span>
                
                {/* H1 */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground leading-[1.1] tracking-tight">
                  Ciência aplicada à redução de fricção cognitiva
                </h1>
                
                {/* Subtitle */}
                <div className="space-y-4 text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                  <p>
                    Não buscamos picos artificiais de desempenho.
                  </p>
                  <p className="text-foreground/90 font-medium">
                    Buscamos fluidez, constância e recuperação real.
                  </p>
                </div>
                
                {/* Core question */}
                <div className="pt-6 space-y-4">
                  <p className="text-muted-foreground text-sm sm:text-base">
                    A ciência da VYR não começa no produto.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Ela começa na pergunta certa:
                  </p>
                  <blockquote className="border-l-2 border-foreground/30 pl-6 py-2">
                    <p className="text-foreground text-lg sm:text-xl font-medium italic">
                      O que atrapalha o funcionamento natural do sistema nervoso ao longo do dia?
                    </p>
                  </blockquote>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* DIVIDER 1 */}
        <SectionDivider />

        {/* O QUE É / O QUE NÃO É */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="space-y-4 mb-12">
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground">
                    O que a ciência da VYR é — e o que ela não é
                  </h2>
                  <p className="text-muted-foreground text-base sm:text-lg">
                    A ciência orienta tudo o que construímos.<br />
                    Mas ela não é usada como argumento de venda.
                  </p>
                </div>
                
                {/* Not promises */}
                <div className="bg-card/30 border border-border/30 rounded-sm p-6 sm:p-8 space-y-6">
                  <p className="text-muted-foreground font-medium">
                    Nós não prometemos:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {NOT_PROMISES.map((item, i) => (
                      <li 
                        key={i} 
                        className="flex items-center gap-3 text-muted-foreground/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border/30">
                    <p className="text-sm text-muted-foreground/60">
                      A ciência séria começa quando se reconhecem os limites.<br />
                      O nosso trabalho acontece dentro deles.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* DIVIDER 2 */}
        <SectionDivider variant="accent" />

        {/* 3 PILARES */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl font-medium text-foreground">
                  Nosso modelo científico se apoia em três pilares
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {PILLARS.map((pillar, i) => (
                <div 
                  key={i}
                  className="group h-full bg-card/20 border border-border/30 rounded-sm p-6 sm:p-8 space-y-5 
                    opacity-0 translate-y-6 
                    animate-[fade-in_0.6s_ease-out_forwards,slide-up_0.6s_ease-out_forwards]
                    hover:bg-card/30 hover:border-border/50 
                    transition-all duration-500"
                  style={{ 
                    animationDelay: `${i * 200}ms`,
                  }}
                >
                  <pillar.icon 
                    className="w-6 h-6 text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300" 
                    strokeWidth={1.5} 
                  />
                  <h3 className="text-lg font-medium text-foreground leading-tight group-hover:text-foreground/90 transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed whitespace-pre-line">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIVIDER 3 */}
        <SectionDivider />
        <section className="py-24 sm:py-32 bg-card/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground">
                    Medimos sinais. Observamos padrões. Reduzimos fricção.
                  </h2>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Não medimos "inteligência".</p>
                    <p>Não medimos "performance cognitiva absoluta".</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="text-muted-foreground mb-6 font-medium">Observamos:</p>
                  <div className="grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
                    {WHAT_WE_MEASURE.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-3 text-muted-foreground/80"
                      >
                        <BarChart3 className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border/30 max-w-lg mx-auto">
                  <p className="text-sm text-muted-foreground/60">
                    Esses sinais não definem quem você é.<br />
                    Eles mostram onde o sistema encontra resistência.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* DIVIDER 4 */}
        <SectionDivider variant="accent" />

        {/* CIÊNCIA ≠ PROMESSA */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground">
                  Ciência não é promessa. É método.
                </h2>
                
                <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
                  <p>
                    A ciência da VYR não entrega respostas prontas.<br />
                    Ela constrói <span className="text-foreground">referências individuais</span>.
                  </p>
                  <p>
                    O objetivo não é prever comportamento.<br />
                    É reduzir o que atrapalha o funcionamento natural do sistema.
                  </p>
                </div>
                
                <div className="pt-6 space-y-1 text-foreground font-medium">
                  <p>Mais fluidez para funcionar bem.</p>
                  <p>Menos esforço invisível.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* DIVIDER 5 */}
        <SectionDivider />

        {/* FUNDAMENTOS */}
        <section className="py-24 sm:py-32 bg-card/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground mb-4">
                    Áreas que fundamentam nosso modelo
                  </h2>
                  <p className="text-muted-foreground">
                    Nosso trabalho é orientado por evidências consolidadas nas áreas de:
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                  {FOUNDATIONS.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 text-muted-foreground/80 bg-card/30 border border-border/20 rounded-sm px-4 py-3"
                    >
                      <Zap className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                
                <p className="text-center text-xs text-muted-foreground/50 mt-8">
                  Referências científicas são usadas como base metodológica,
                  não como promessa de resultado.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* DIVIDER 6 */}
        <SectionDivider variant="accent" />

        {/* COMPARATIVO - O QUE NOS DIFERENCIA */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground mb-4">
                    O que nos diferencia
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Usamos ciência para reduzir promessas, não para inflá-las.
                  </p>
                </div>
                
                <div className="space-y-3">
                  {COMPARISON.map((item, i) => (
                    <div 
                      key={i}
                      className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in"
                      style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
                    >
                      <div className="flex items-center gap-3 text-muted-foreground/50 bg-card/20 border border-border/20 rounded-sm px-4 py-3 text-sm">
                        <X className="w-4 h-4 text-muted-foreground/30 flex-shrink-0" />
                        <span className="line-through">{item.them}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/80 bg-card/40 border border-border/40 rounded-sm px-4 py-3 text-sm">
                        <Check className="w-4 h-4 text-foreground/50 flex-shrink-0" />
                        {item.us}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* DIVIDER 7 */}
        <SectionDivider />

        {/* BLOCO FINAL */}
        <section className="py-24 sm:py-32 bg-card/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center space-y-8">
                <h2 className="text-2xl sm:text-3xl font-medium text-foreground">
                  Ciência aplicada. Sistema em evolução.
                </h2>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A VYR Science não existe isolada.
                  </p>
                  <p>
                    Ela orienta o VYR System, o Labs e o Node<br />
                    como partes de um único processo:
                  </p>
                </div>
                
                <p className="text-foreground font-medium text-lg">
                  reduzir fricção → sustentar fluidez → permitir constância.
                </p>
                
                <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/system">
                    <Button 
                      variant="outline" 
                      className="border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                    >
                      Conheça o VYR System
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/labs">
                    <Button 
                      variant="ghost" 
                      className="text-muted-foreground/70 hover:text-foreground"
                    >
                      Explorar o Labs
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
