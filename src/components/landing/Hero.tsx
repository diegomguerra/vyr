import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, TrendingUp, Activity, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Dark Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Glowing Orbs - Smaller on mobile */}
      <div className="absolute top-1/4 left-1/4 w-[200px] sm:w-[300px] lg:w-[500px] h-[200px] sm:h-[300px] lg:h-[500px] bg-violet-600/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[150px] sm:w-[250px] lg:w-[400px] h-[150px] sm:h-[250px] lg:h-[400px] bg-indigo-500/15 rounded-full blur-[60px] sm:blur-[100px] animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-500/10 border border-violet-500/30 mb-6 sm:mb-8 backdrop-blur-sm">
          <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400" />
          <span className="text-xs sm:text-sm text-violet-300 font-medium tracking-wide">Cognitive Performance System</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight">
          <span className="relative">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Sustente. Meça. Evolua.
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-4 sm:mb-6 leading-relaxed text-slate-200 px-2">
          O sistema de performance intelectual para profissionais de elite. 
          Traders, founders, desenvolvedores e estudantes de alto rendimento.
        </p>

        {/* Key phrase */}
        <p className="text-sm sm:text-base max-w-2xl mx-auto mb-3 sm:mb-4 italic text-slate-300 px-2">
          "Alta performance intelectual não se ostenta. Se mede."
        </p>

        {/* Secondary tagline */}
        <p className="text-xs sm:text-sm max-w-xl mx-auto mb-8 sm:mb-10 text-slate-400 px-2">
          Suplementação por ciclo + Plataforma digital + Smart Ring. 
          Evolução mensurável baseada em dados.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 px-4">
          <Link to="/login?signup=true" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto relative bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 bg-[length:200%_100%] hover:bg-right text-white px-8 sm:px-12 py-5 sm:py-7 text-base sm:text-lg rounded-full group shadow-[0_0_40px_rgba(139,92,246,0.4)] border-0 transition-all duration-500">
              Começar agora
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a href="#sistema" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent px-8 sm:px-10 py-5 sm:py-7 text-base sm:text-lg rounded-full border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 hover:text-white">
              Conhecer o sistema
            </Button>
          </a>
        </div>

        {/* Performance Pillars Bar - Stack on mobile */}
        <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-0 rounded-2xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 overflow-hidden w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
            </div>
            <div className="text-left">
              <div className="text-base sm:text-lg font-bold text-white">Clareza</div>
              <div className="text-xs sm:text-sm text-slate-400">Mental sustentada</div>
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-16 bg-slate-600/50" />
          <div className="sm:hidden w-full h-px bg-slate-600/50" />
          
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-violet-500/15 flex items-center justify-center flex-shrink-0">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
            </div>
            <div className="text-left">
              <div className="text-base sm:text-lg font-bold text-white">Consistência</div>
              <div className="text-xs sm:text-sm text-slate-400">Cognitiva ao tempo</div>
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-16 bg-slate-600/50" />
          <div className="sm:hidden w-full h-px bg-slate-600/50" />
          
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
            <div className="text-left">
              <div className="text-base sm:text-lg font-bold text-white">Evolução</div>
              <div className="text-xs sm:text-sm text-slate-400">Mensurável</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
