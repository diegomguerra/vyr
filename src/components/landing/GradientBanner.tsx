import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface GradientBannerProps {
  variant?: "newsletter" | "cta" | "info";
}

export function GradientBanner({ variant = "newsletter" }: GradientBannerProps) {
  if (variant === "newsletter") {
    return (
      <section className="bg-vyr-gray-800 py-16 border-y border-vyr-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-vyr-white max-w-lg">
              <h3 className="text-3xl font-medium mb-2">Fique por dentro.</h3>
              <p className="text-vyr-gray-400 text-sm">
                Receba conteúdo sobre rotina, clareza mental e evolução progressiva.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-3">
              <Input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-vyr-gray-700 border-vyr-gray-600 text-vyr-white placeholder:text-vyr-gray-500 focus:border-vyr-gray-400 rounded-sm"
              />
              <Button className="bg-vyr-white hover:bg-vyr-gray-100 text-vyr-black px-6 whitespace-nowrap rounded-sm">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "cta") {
    return (
      <section className="bg-vyr-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-vyr-gray-500 text-sm uppercase tracking-widest mb-2">
            Comece sua jornada
          </p>
          <h3 className="text-2xl font-medium text-vyr-black mb-3">
            Funcionar bem não deveria exigir esforço extra
          </h3>
          <p className="text-vyr-gray-600 text-sm mb-6 max-w-xl mx-auto">
            O VYR existe para reduzir o que pesa — não para adicionar mais uma tarefa.
          </p>
          <Link to="/como-funciona">
            <Button className="bg-vyr-black text-vyr-white hover:bg-vyr-gray-800 px-8 rounded-sm group">
              Começar agora
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  // variant === "info" - Proposta de Valor integrada
  return (
    <section className="bg-vyr-gray-800 py-16 border-y border-vyr-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Proposta de Valor - Bloco de Frases */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
          <div className="text-center">
            <span className="text-vyr-gray-500 text-sm">Menos ruído</span>
            <span className="text-vyr-gray-600 mx-2">→</span>
            <span className="text-vyr-white font-medium text-sm">mais fluidez</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-vyr-gray-600" />
          <div className="text-center">
            <span className="text-vyr-gray-500 text-sm">Menos peso</span>
            <span className="text-vyr-gray-600 mx-2">→</span>
            <span className="text-vyr-white font-medium text-sm">mais leveza</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-vyr-gray-600" />
          <div className="text-center">
            <span className="text-vyr-gray-500 text-sm">Menos esforço invisível</span>
            <span className="text-vyr-gray-600 mx-2">→</span>
            <span className="text-vyr-white font-medium text-sm">mais constância</span>
          </div>
        </div>
        
        {/* Frase Final */}
        <p className="text-vyr-gray-400 text-base max-w-xl mx-auto">
          O VYR não promete picos.{" "}
          <span className="text-vyr-white font-medium">Ele entrega dias melhores, com mais frequência.</span>
        </p>
      </div>
    </section>
  );
}