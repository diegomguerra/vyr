import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, FlaskConical, FileText, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LandingNav } from "@/components/landing/LandingNav";
import { ScrollReveal } from "@/components/labs";

const BOOT_COMPOUNDS = [
  {
    name: "Citicolina (CDP-Colina)",
    dose: "250mg",
    mechanism: "Precursor de acetilcolina e fosfatidilcolina. Suporta síntese de membranas neuronais e neurotransmissão colinérgica.",
    references: ["Secades, 2016", "Grieb, 2014"],
  },
  {
    name: "Fosfatidilserina",
    dose: "100mg",
    mechanism: "Fosfolipídio estrutural das membranas neuronais. Modula fluidez de membrana e sinalização celular.",
    references: ["Glade & Smith, 2015"],
  },
  {
    name: "Bacopa monnieri",
    dose: "300mg",
    mechanism: "Adaptógeno com bacosídeos que modulam vias serotoninérgicas e colinérgicas. Efeitos observados em memória e atenção.",
    references: ["Kongkeaw et al., 2014"],
  },
  {
    name: "Rhodiola rosea",
    dose: "200mg",
    mechanism: "Adaptógeno que modula resposta ao estresse via eixo HPA. Suporta resistência à fadiga mental.",
    references: ["Panossian & Wikman, 2010"],
  },
];

const HOLD_COMPOUNDS = [
  {
    name: "Teacrina",
    dose: "100mg",
    mechanism: "Análogo da cafeína com menor tolerância. Atua em receptores de adenosina sem habituação rápida.",
    references: ["Taylor et al., 2016"],
  },
  {
    name: "L-Teanina",
    dose: "200mg",
    mechanism: "Aminoácido do chá verde. Modula GABA e ondas alfa cerebrais, promovendo foco relaxado.",
    references: ["Nobre et al., 2008"],
  },
  {
    name: "Cafeína",
    dose: "50mg",
    mechanism: "Antagonista de adenosina. Dose baixa para sinergia com teanina sem hiperestimulação.",
    references: ["Haskell et al., 2008"],
  },
  {
    name: "L-Tirosina",
    dose: "500mg",
    mechanism: "Precursor de dopamina e noradrenalina. Suporta performance sob estresse e depleção de catecolaminas.",
    references: ["Jongkees et al., 2015"],
  },
];

const CLEAR_COMPOUNDS = [
  {
    name: "NAC (N-Acetilcisteína)",
    dose: "600mg",
    mechanism: "Precursor de glutationa. Modula glutamato e oferece suporte antioxidante ao SNC.",
    references: ["Dean et al., 2011"],
  },
  {
    name: "Ashwagandha (KSM-66)",
    dose: "300mg",
    mechanism: "Adaptógeno que reduz cortisol e modula eixo HPA. Suporta qualidade do sono e recuperação.",
    references: ["Chandrasekhar et al., 2012"],
  },
  {
    name: "Magnésio bisglicinato",
    dose: "200mg",
    mechanism: "Forma quelada de alta biodisponibilidade. Cofator em 300+ reações enzimáticas, incluindo síntese de GABA.",
    references: ["Abbasi et al., 2012"],
  },
  {
    name: "Glicina",
    dose: "3g",
    mechanism: "Neurotransmissor inibitório. Melhora qualidade subjetiva do sono e reduz latência.",
    references: ["Yamadera et al., 2007"],
  },
  {
    name: "L-Triptofano",
    dose: "250mg",
    mechanism: "Precursor de serotonina e melatonina. Suporta iniciação do ciclo do sono.",
    references: ["Hartmann, 1982"],
  },
];

const INCLUSION_CRITERIA = [
  "Evidência em humanos (preferencialmente RCTs ou meta-análises)",
  "Mecanismo de ação compreendido",
  "Perfil de segurança estabelecido",
  "Sinergia potencial com outros compostos da formulação",
  "Relevância para a janela circadiana específica",
];

const EXCLUSION_CRITERIA = [
  "Evidência apenas pré-clínica (in vitro ou animal)",
  "Compostos com interações medicamentosas significativas",
  "Substâncias com potencial de dependência",
  "Ingredientes com marketing maior que evidência",
  "Doses subterapêuticas ou simbólicas",
];

export default function VYRScience() {
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
            <div className="space-y-6 max-w-2xl">
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
                Scientific Foundation
              </span>
              
              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-tight tracking-tight">
                Base científica do VYR System
              </h1>
              
              {/* Subheadline */}
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Este repositório documenta a fundamentação científica das formulações VYR — 
                compostos, mecanismos, dosagens e literatura de suporte.
              </p>
              
              {/* Disclaimer */}
              <div className="p-4 border border-border/30 rounded-sm bg-muted/10">
                <p className="text-xs text-muted-foreground/70">
                  <strong className="text-muted-foreground">Nota:</strong> Este conteúdo é informativo e educacional. 
                  Não constitui aconselhamento médico. Consulte um profissional de saúde antes de usar qualquer suplemento.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Philosophy */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
          <ScrollReveal>
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <FlaskConical className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-lg sm:text-xl font-medium text-foreground">
                  Filosofia de formulação
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Inclusion */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500/70" />
                    Critérios de inclusão
                  </h3>
                  <ul className="space-y-2">
                    {INCLUSION_CRITERIA.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground/80 flex items-start gap-2">
                        <span className="text-muted-foreground/40 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Exclusion */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500/70" />
                    Critérios de exclusão
                  </h3>
                  <ul className="space-y-2">
                    {EXCLUSION_CRITERIA.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground/80 flex items-start gap-2">
                        <span className="text-muted-foreground/40 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* BOOT Compounds */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-vyr-gray-100 rounded-sm flex items-center justify-center">
                  <span className="font-mono text-xs text-vyr-graphite-dark">B</span>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-foreground">VYR BOOT</h2>
                  <span className="text-xs text-muted-foreground">Manhã — Ativação</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {BOOT_COMPOUNDS.map((compound, i) => (
                  <CompoundCard key={i} compound={compound} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* HOLD Compounds */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-vyr-graphite rounded-sm flex items-center justify-center">
                  <span className="font-mono text-xs text-vyr-white">H</span>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-foreground">VYR HOLD</h2>
                  <span className="text-xs text-muted-foreground">Tarde — Sustentação</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {HOLD_COMPOUNDS.map((compound, i) => (
                  <CompoundCard key={i} compound={compound} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* CLEAR Compounds */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-vyr-cold-blue rounded-sm flex items-center justify-center">
                  <span className="font-mono text-xs text-vyr-white">C</span>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-foreground">VYR CLEAR</h2>
                  <span className="text-xs text-muted-foreground">Noite — Recuperação</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {CLEAR_COMPOUNDS.map((compound, i) => (
                  <CompoundCard key={i} compound={compound} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Methodology */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
          <ScrollReveal>
            <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                    <h2 className="text-lg font-medium text-foreground">
                      Metodologia de validação
                    </h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                        Coleta de dados
                      </span>
                      <p>
                        Dados subjetivos (check-ins VYR Labs) e objetivos (VYR Node) 
                        são coletados ao longo de ciclos de uso.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                        Análise
                      </span>
                      <p>
                        Correlações são calculadas entre doses, timing, confundidores 
                        (sono, estresse, cafeína) e métricas de resultado.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                        Iteração
                      </span>
                      <p>
                        Achados consistentes podem informar ajustes de formulação. 
                        Mudanças são implementadas gradualmente.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
                        Limitações
                      </span>
                      <p>
                        Dados observacionais, não experimentais. Confundidores não são 
                        controlados. Resultados são indicativos, não definitivos.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </section>

        {/* Footer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
          <ScrollReveal>
            <div className="border-t border-border/30 pt-12 space-y-6">
              <p className="text-muted-foreground/60 text-sm italic max-w-lg">
                "A ciência evolui. O VYR System também."
              </p>
              
              <div className="flex items-center gap-4">
                <Link to="/nutrition">
                  <Button 
                    variant="outline" 
                    className="border-border/50 text-muted-foreground hover:text-foreground text-sm"
                  >
                    Ver produtos
                  </Button>
                </Link>
                <Link to="/labs">
                  <Button 
                    variant="ghost" 
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    Acessar VYR Labs →
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}

// Compound Card Component
function CompoundCard({ compound }: { compound: { name: string; dose: string; mechanism: string; references: string[] } }) {
  return (
    <Card className="border-border/30 bg-card/20">
      <CardContent className="p-4 sm:p-5">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h4 className="font-mono text-sm text-foreground">{compound.name}</h4>
            <span className="text-xs text-muted-foreground/60 font-mono whitespace-nowrap">
              {compound.dose}
            </span>
          </div>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {compound.mechanism}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <BookOpen className="w-3 h-3 text-muted-foreground/40" />
            {compound.references.map((ref, i) => (
              <span key={i} className="text-[10px] text-muted-foreground/50 font-mono">
                {ref}{i < compound.references.length - 1 && ","}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
