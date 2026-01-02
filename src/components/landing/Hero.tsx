import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sachetDiaVertical from "@/assets/sachet-dia-vertical.png";
import sachetTardeVertical from "@/assets/sachet-tarde-vertical.png";
import sachetNoiteVertical from "@/assets/sachet-noite-vertical.png";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden vyr-gradient-bg"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 vyr-gradient-radial" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--vyr-gray-400) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--vyr-gray-400) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 vyr-accent-line" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="vyr-badge-accent mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              <span className="uppercase">Performance Cognitiva Guiada</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-foreground mb-6 tracking-tight leading-[1.1]">
              Mais fluidez para funcionar bem.
              <span className="block text-muted-foreground mt-2">Mais leveza para sustentar o dia.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Um sistema que aprende com você e reduz o esforço invisível do dia a dia.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10">
              <Link to="/como-funciona">
                <Button size="lg" className="vyr-btn-accent px-8 sm:px-10 py-6 text-base rounded-sm group">
                  Conheça o VYR SYSTEM
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/sistema-completo" className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2 group">
                Ver como funciona
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Anchor phrase */}
            <p className="text-sm text-muted-foreground/60 tracking-wide font-mono">
              Comece alinhado. Siga leve. Evolua com dados.
            </p>
          </div>

          {/* Right: Visual Product Display - Sachets verticais */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative flex items-end justify-center gap-4 sm:gap-6 lg:gap-8">
              {/* Glow behind products */}
              <div className="absolute inset-0 -inset-x-10 bottom-0 top-1/3">
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--vyr-accent)/0.15)] via-[hsl(var(--vyr-graphite)/0.1)] to-transparent blur-3xl" />
              </div>

              {/* BOOT - Manhã */}
              <div className="relative group animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="absolute -inset-4 bg-[hsl(var(--vyr-boot)/0.1)] rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={sachetDiaVertical} 
                  alt="BOOT - Manhã" 
                  className="relative h-48 sm:h-56 lg:h-72 w-auto object-contain transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300 drop-shadow-xl"
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[hsl(var(--vyr-boot))]">BOOT</span>
                </div>
              </div>

              {/* HOLD - Tarde */}
              <div className="relative group animate-fade-in" style={{ animationDelay: '0.25s' }}>
                <div className="absolute -inset-4 bg-[hsl(var(--vyr-graphite)/0.15)] rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={sachetTardeVertical} 
                  alt="HOLD - Tarde" 
                  className="relative h-56 sm:h-64 lg:h-80 w-auto object-contain transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300 drop-shadow-xl"
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[hsl(var(--vyr-graphite-light))]">HOLD</span>
                </div>
              </div>

              {/* CLEAR - Noite */}
              <div className="relative group animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="absolute -inset-4 bg-[hsl(var(--vyr-accent)/0.12)] rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={sachetNoiteVertical} 
                  alt="CLEAR - Noite" 
                  className="relative h-48 sm:h-56 lg:h-72 w-auto object-contain transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300 drop-shadow-xl"
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[hsl(var(--vyr-accent-glow))]">CLEAR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Pillars Bar */}
        <div className="mt-20 lg:mt-28">
          <div className="vyr-card-graphite flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm px-8 py-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-sm bg-[hsl(var(--vyr-boot))]" />
              <div className="flex flex-col">
                <span className="uppercase tracking-[0.15em] font-medium text-foreground text-xs">BOOT</span>
                <span className="text-muted-foreground text-[11px]">Ativação com leveza</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border/30" />
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-sm bg-[hsl(var(--vyr-graphite-light))]" />
              <div className="flex flex-col">
                <span className="uppercase tracking-[0.15em] font-medium text-foreground text-xs">HOLD</span>
                <span className="text-muted-foreground text-[11px]">Constância sob carga</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border/30" />
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-sm bg-[hsl(var(--vyr-accent))]" />
              <div className="flex flex-col">
                <span className="uppercase tracking-[0.15em] font-medium text-foreground text-xs">CLEAR</span>
                <span className="text-muted-foreground text-[11px]">Descompressão cognitiva</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
