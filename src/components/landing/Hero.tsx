import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, TrendingUp, Activity, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Dark Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-fuchsia-500/10 rounded-full blur-[80px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 mb-8 backdrop-blur-sm">
          <Brain className="w-4 h-4 text-violet-400" />
          <span className="text-sm text-violet-300 font-medium tracking-wide">Cognitive Performance System</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          <span className="relative">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Sustente. Meça. Evolua.
            </span>
          </span>
        </h1>

        {/* Subtitle - Speaking to the target audience */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
          O sistema de performance intelectual para profissionais de elite. 
          Traders, founders, desenvolvedores e estudantes de alto rendimento.
        </p>

        {/* Key phrase */}
        <p className="text-base text-slate-400 max-w-2xl mx-auto mb-4 italic">
          "Alta performance intelectual não se ostenta. Se mede."
        </p>

        {/* Secondary tagline */}
        <p className="text-sm text-slate-500 max-w-xl mx-auto mb-10">
          Suplementação por ciclo + Plataforma digital + Smart Ring. 
          Evolução mensurável baseada em dados.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link to="/login?signup=true">
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 bg-[length:200%_100%] hover:bg-right text-white px-12 py-7 text-lg rounded-full group shadow-[0_0_40px_rgba(139,92,246,0.4)] border-0 transition-all duration-500"
            >
              Começar agora
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a href="#sistema">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent px-10 py-7 text-lg rounded-full border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 hover:text-white"
            >
              Conhecer o sistema
            </Button>
          </a>
        </div>

        {/* Performance Pillars Bar */}
        <div className="inline-flex items-center gap-0 rounded-2xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 overflow-hidden">
          <div className="flex items-center gap-4 px-6 sm:px-8 py-5">
            <div className="w-12 h-12 rounded-full bg-emerald-500/15 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-left">
              <div className="text-lg font-bold text-white">Clareza</div>
              <div className="text-sm text-slate-400">Mental sustentada</div>
            </div>
          </div>
          
          <div className="w-px h-16 bg-slate-600/50" />
          
          <div className="flex items-center gap-4 px-6 sm:px-8 py-5">
            <div className="w-12 h-12 rounded-full bg-violet-500/15 flex items-center justify-center">
              <Activity className="w-6 h-6 text-violet-400" />
            </div>
            <div className="text-left">
              <div className="text-lg font-bold text-white">Consistência</div>
              <div className="text-sm text-slate-400">Cognitiva ao tempo</div>
            </div>
          </div>
          
          <div className="w-px h-16 bg-slate-600/50" />
          
          <div className="flex items-center gap-4 px-6 sm:px-8 py-5">
            <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-amber-400" />
            </div>
            <div className="text-left">
              <div className="text-lg font-bold text-white">Evolução</div>
              <div className="text-sm text-slate-400">Mensurável</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
