import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrainLogo } from "@/components/BrainLogo";
import { Link } from "react-router-dom";
import brainLogo from "@/assets/brain-logo.png";
export function Hero() {
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden vyr-gradient-bg">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 vyr-gradient-radial" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `
            linear-gradient(hsl(var(--vyr-gray-400) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--vyr-gray-400) / 0.3) 1px, transparent 1px)
          `,
      backgroundSize: "80px 80px"
    }} />

      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 vyr-accent-line" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Hero Logo - Centered */}
        <div className="relative w-full mb-12 lg:mb-16 animate-fade-in flex justify-center">
          <BrainLogo src={brainLogo} alt="Cérebro VYR (logo)" className="w-[220px] sm:w-[280px] md:w-[360px] h-auto object-contain" />
        </div>

        {/* Text Content - Centered below image */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex vyr-badge-accent mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            <span className="uppercase text-cyan-700">Operação VYR</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium mb-6 tracking-tight leading-[1.1] text-secondary-foreground">
            Mais fluidez mental.
            <span className="block text-muted-foreground mt-2">
              Menos esforço invisível.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Um sistema que aprende com você para sustentar energia limpa,
            reduzir ruído cognitivo e manter constância ao longo do dia.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link to="/como-funciona">
              <Button size="lg" className="vyr-btn-accent px-8 sm:px-10 py-6 text-base rounded-sm group">
                Começar minha jornada
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/sistema-completo" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2 group">
              Ver como funciona
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Anchor phrase */}
          <p className="text-sm text-muted-foreground/80 tracking-wide">
            Você não força performance.{" "}
            <span className="text-cyan-700">Você remove o que atrapalha.</span>
          </p>
        </div>

        {/* Performance Pillars Bar */}
        <div className="mt-16 lg:mt-20">
          <div className="vyr-card-graphite flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm px-8 py-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-sm bg-[hsl(var(--vyr-boot))]" />
              <div className="flex flex-col">
                <span className="uppercase tracking-[0.15em] font-medium text-xs text-primary-foreground">
                  BOOT
                </span>
                <span className="text-muted-foreground text-[11px]">
                  Ativação com leveza
                </span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border/30" />
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-sm bg-[hsl(var(--vyr-graphite-light))]" />
              <div className="flex flex-col">
                <span className="uppercase tracking-[0.15em] font-medium text-xs text-primary-foreground">
                  HOLD
                </span>
                <span className="text-muted-foreground text-[11px]">
                  Constância sob carga
                </span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border/30" />
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-sm bg-[hsl(var(--vyr-accent))]" />
              <div className="flex flex-col">
                <span className="uppercase tracking-[0.15em] font-medium text-xs text-primary-foreground">
                  CLEAR
                </span>
                <span className="text-muted-foreground text-[11px]">
                  Descompressão cognitiva
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}