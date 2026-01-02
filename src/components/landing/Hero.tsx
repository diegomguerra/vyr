import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sistemaHero from "@/assets/sistema-completo-hero.png";
import sachetDia from "@/assets/sachet-dia.png";
import sachetTarde from "@/assets/sachet-tarde.png";
import sachetNoite from "@/assets/sachet-noite.png";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0A 0%, #111111 50%, #0F0F0F 100%)",
      }}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-vyr-accent/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-vyr-coldBlue/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-vyr-warmBeige/3 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vyr-gray-800/50 border border-vyr-gray-700/50 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-vyr-accent animate-pulse" />
              <span className="text-xs sm:text-sm text-vyr-gray-300 uppercase tracking-wider font-medium">
                Performance Cognitiva Guiada
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-vyr-white mb-6 tracking-tight leading-[1.1]">
              Mais fluidez para funcionar bem.
              <span className="block text-vyr-gray-300">Mais leveza para sustentar o dia.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-vyr-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Um sistema que aprende com você e reduz o esforço invisível do dia a dia.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
              <Link to="/como-funciona">
                <Button size="lg" className="vyr-btn-accent px-8 sm:px-10 py-6 text-base rounded-sm group">
                  Conheça o VYR SYSTEM
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/sistema-completo" className="text-vyr-gray-400 hover:text-vyr-white transition-colors text-sm flex items-center gap-2">
                Ver como funciona
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Anchor phrase */}
            <p className="text-sm text-vyr-gray-500 tracking-wide">
              Comece alinhado. Siga leve. Evolua com dados.
            </p>
          </div>

          {/* Right: Visual Product Display */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Main product image with glow */}
            <div className="relative">
              {/* Glow effect behind main image */}
              <div className="absolute inset-0 bg-gradient-to-br from-vyr-accent/20 via-vyr-coldBlue/10 to-transparent rounded-3xl blur-3xl scale-110" />
              
              {/* Main system image */}
              <img 
                src={sistemaHero} 
                alt="VYR System - Kit completo" 
                className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />

              {/* Floating sachets */}
              <div className="absolute -left-8 top-1/4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-vyr-warmBeige/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
                  <img 
                    src={sachetDia} 
                    alt="BOOT - Manhã" 
                    className="relative w-16 sm:w-20 transform hover:scale-110 transition-transform cursor-pointer drop-shadow-lg"
                  />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-[10px] uppercase tracking-wider text-vyr-warmBeige font-medium">BOOT</span>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-1/3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-vyr-gray-400/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
                  <img 
                    src={sachetTarde} 
                    alt="HOLD - Tarde" 
                    className="relative w-16 sm:w-20 transform hover:scale-110 transition-transform cursor-pointer drop-shadow-lg"
                  />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-[10px] uppercase tracking-wider text-vyr-gray-400 font-medium">HOLD</span>
                  </div>
                </div>
              </div>

              <div className="absolute right-8 bottom-1/4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-vyr-coldBlue/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
                  <img 
                    src={sachetNoite} 
                    alt="CLEAR - Noite" 
                    className="relative w-16 sm:w-20 transform hover:scale-110 transition-transform cursor-pointer drop-shadow-lg"
                  />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-[10px] uppercase tracking-wider text-vyr-coldBlue font-medium">CLEAR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Pillars Bar */}
        <div className="mt-16 lg:mt-20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-vyr-gray-500 px-6 py-5 rounded-sm bg-vyr-gray-900/60 border border-vyr-gray-800/50 backdrop-blur-sm max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-vyr-warmBeige to-vyr-warmBeige/60" />
              <div className="flex flex-col">
                <span className="uppercase tracking-wider font-medium text-vyr-white">BOOT</span>
                <span className="text-vyr-gray-500 text-xs">Ativação com leveza</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-vyr-gray-700/50" />
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-vyr-gray-400 to-vyr-gray-500" />
              <div className="flex flex-col">
                <span className="uppercase tracking-wider font-medium text-vyr-white">HOLD</span>
                <span className="text-vyr-gray-500 text-xs">Constância sob carga</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-vyr-gray-700/50" />
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-vyr-coldBlue to-vyr-coldBlue/60" />
              <div className="flex flex-col">
                <span className="uppercase tracking-wider font-medium text-vyr-white">CLEAR</span>
                <span className="text-vyr-gray-500 text-xs">Descompressão cognitiva</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
