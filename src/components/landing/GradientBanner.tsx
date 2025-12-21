import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface GradientBannerProps {
  variant?: "newsletter" | "cta" | "info";
}

export function GradientBanner({ variant = "newsletter" }: GradientBannerProps) {
  if (variant === "newsletter") {
    return (
      <section className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-lg">
              <h3 className="text-3xl font-light mb-2">Fique por dentro.</h3>
              <p className="text-white/80 text-sm">
                Receba novidades sobre otimização cognitiva e promoções exclusivas dos nossos produtos.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-3">
              <Input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white"
              />
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 whitespace-nowrap">
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
      <section className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 text-sm uppercase tracking-wider mb-2">
            Comece sua jornada
          </p>
          <h3 className="text-2xl font-light text-white mb-4">
            Otimize sua performance cognitiva hoje
          </h3>
          <Button className="bg-white text-orange-600 hover:bg-white/90 px-8">
            Começar agora
          </Button>
        </div>
      </section>
    );
  }

  // variant === "info"
  return (
    <section className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white font-light text-lg">
          Mais de <span className="font-semibold">500+ usuários</span> já estão otimizando sua cognição
        </p>
      </div>
    </section>
  );
}