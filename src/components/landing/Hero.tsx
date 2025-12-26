import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Activity, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Dark Neutral Background with subtle blue tint */}
      <div className="absolute inset-0 vyr-gradient-bg" />
      
      {/* Radial glow at top */}
      <div className="absolute inset-0 vyr-gradient-radial" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--vyr-gray-600)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--vyr-gray-600)) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
        {/* Badge with accent */}
        <div className="vyr-badge-accent mb-6 sm:mb-8">
          <span className="text-xs sm:text-sm font-mono tracking-wider">COGNITIVE PERFORMANCE SYSTEM</span>
        </div>

        {/* Main Heading with subtle glow */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-vyr-white mb-4 sm:mb-6 leading-[1.1] tracking-tight">
          <span className="vyr-text-glow">Sustente.</span> <span className="text-gradient-accent">Meça.</span> Evolua.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-4 sm:mb-6 leading-relaxed text-vyr-gray-300 px-2">
          O sistema de performance intelectual para profissionais de elite. 
          Traders, founders, desenvolvedores e estudantes de alto rendimento.
        </p>

        {/* Accent line */}
        <div className="vyr-accent-line max-w-xs mx-auto mb-4 sm:mb-6" />

        {/* Key phrase */}
        <p className="text-sm sm:text-base max-w-2xl mx-auto mb-3 sm:mb-4 text-vyr-gray-400 px-2 font-mono">
          "Alta performance intelectual não se ostenta. Se mede."
        </p>

        {/* Secondary tagline */}
        <p className="text-xs sm:text-sm max-w-xl mx-auto mb-8 sm:mb-10 text-vyr-gray-500 px-2">
          Suplementação por ciclo + Plataforma digital + VYR NODE. 
          Evolução mensurável baseada em dados.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 px-4">
          <Link to="/login?signup=true" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto vyr-btn-accent px-8 sm:px-12 py-5 sm:py-7 text-base sm:text-lg rounded-sm group">
              Começar agora
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a href="#sistema" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent px-8 sm:px-10 py-5 sm:py-7 text-base sm:text-lg rounded-sm border-vyr-gray-600 text-vyr-gray-300 hover:bg-vyr-gray-800 hover:border-vyr-accent/30 hover:text-vyr-white transition-all duration-300">
              Conhecer o sistema
            </Button>
          </a>
        </div>

        {/* Performance Pillars Bar - with glow effect */}
        <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-0 rounded-sm bg-vyr-gray-800/60 backdrop-blur-sm border border-vyr-gray-700 overflow-hidden w-full sm:w-auto max-w-sm sm:max-w-none mx-auto vyr-glow">
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-vyr-gray-700 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-vyr-accent vyr-icon-glow" />
            </div>
            <div className="text-left">
              <div className="text-base sm:text-lg font-medium text-vyr-white">Clareza</div>
              <div className="text-xs sm:text-sm text-vyr-gray-400">Mental sustentada</div>
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-16 bg-vyr-gray-700" />
          <div className="sm:hidden w-full h-px bg-vyr-gray-700" />
          
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-vyr-gray-700 flex items-center justify-center flex-shrink-0">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-vyr-cyan vyr-icon-glow" />
            </div>
            <div className="text-left">
              <div className="text-base sm:text-lg font-medium text-vyr-white">Consistência</div>
              <div className="text-xs sm:text-sm text-vyr-gray-400">Cognitiva ao tempo</div>
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-16 bg-vyr-gray-700" />
          <div className="sm:hidden w-full h-px bg-vyr-gray-700" />
          
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-vyr-gray-700 flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-vyr-accentGlow vyr-icon-glow" />
            </div>
            <div className="text-left">
              <div className="text-base sm:text-lg font-medium text-vyr-white">Evolução</div>
              <div className="text-xs sm:text-sm text-vyr-gray-400">Mensurável</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
