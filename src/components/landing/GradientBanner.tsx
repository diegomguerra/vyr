import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
                Receba novidades sobre otimização cognitiva e promoções exclusivas dos nossos produtos.
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
          <p className="text-vyr-gray-500 text-sm uppercase tracking-widest mb-2 font-mono">
            Comece sua jornada
          </p>
          <h3 className="text-2xl font-medium text-vyr-black mb-4">
            Otimize sua performance cognitiva hoje
          </h3>
          <Button className="bg-vyr-black text-vyr-white hover:bg-vyr-gray-800 px-8 rounded-sm">
            Começar agora
          </Button>
        </div>
      </section>
    );
  }

  // variant === "info"
  return (
    <section className="bg-vyr-gray-800 py-10 border-y border-vyr-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-vyr-white font-medium text-lg">
          Mais de <span className="font-mono">500+</span> usuários já estão otimizando sua cognição
        </p>
      </div>
    </section>
  );
}
