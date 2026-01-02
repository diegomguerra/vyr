import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

      {/* Minimal gradient accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vyr-accent/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-vyr-coldBlue/3 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-24 pb-12">
        {/* Main Title */}
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-vyr-white mb-6 tracking-tight leading-tight">
          Mais fluidez para funcionar bem.<br />
          Mais leveza para sustentar o dia.
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-vyr-gray-300 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Performance cognitiva guiada.<br className="sm:hidden" />
          Um sistema que aprende com você e reduz o esforço invisível do dia a dia.
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-vyr-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
          O VYR combina suplementação funcional em três momentos do dia com um sistema de registro e mensuração que evolui junto com você. Menos ruído. Menos oscilação. Mais constância para pensar, decidir e agir.
        </p>

        {/* Closing Line */}
        <p className="text-sm sm:text-base text-vyr-gray-500 mb-10 sm:mb-12 tracking-wide">
          Comece alinhado. Siga leve. Evolua com dados.
        </p>

        {/* CTA Button */}
        <div className="flex items-center justify-center mb-10 sm:mb-16 px-4">
          <Link to="/como-funciona" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto vyr-btn-accent px-8 sm:px-12 py-5 sm:py-7 text-base sm:text-lg rounded-sm group">
              Conheça o VYR SYSTEM
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Performance Pillars Bar - with graphite style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-vyr-gray-500 px-6 py-4 rounded-sm bg-vyr-gray-900/50 border border-vyr-gray-800 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-sm bg-vyr-gray-300" />
            <span className="uppercase tracking-wider">BOOT</span>
            <span className="text-vyr-gray-600">Ativação com leveza</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-vyr-gray-700" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-sm bg-vyr-gray-500" />
            <span className="uppercase tracking-wider">HOLD</span>
            <span className="text-vyr-gray-600">Constância sob carga</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-vyr-gray-700" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-sm bg-vyr-coldBlue" />
            <span className="uppercase tracking-wider">CLEAR</span>
            <span className="text-vyr-gray-600">Descompressão cognitiva</span>
          </div>
        </div>
      </div>
    </section>
  );
}
