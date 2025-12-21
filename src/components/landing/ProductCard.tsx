import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";

export function ProductCard() {
  return (
    <section id="produto" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O Produto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nootrópico desenvolvido para otimização cognitiva sustentável
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="glass-card p-8 text-center">
            {/* Product Image Placeholder */}
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-border/50">
              <div className="text-6xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                NZT
              </div>
            </div>

            {/* Product Info */}
            <h3 className="text-2xl font-bold text-foreground mb-2">NZT Cognitive</h3>
            <p className="text-muted-foreground mb-6">
              Fórmula avançada para clareza mental e foco sustentado
            </p>

            {/* Features */}
            <ul className="text-left space-y-3 mb-8">
              {[
                "Melhora o foco e concentração",
                "Suporte à memória de trabalho",
                "Energia mental sustentada",
                "Formulação cientificamente validada",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mb-6">
              <span className="text-sm text-muted-foreground line-through">R$ 297,00</span>
              <div className="text-4xl font-bold text-foreground">
                R$ 197,00
                <span className="text-base font-normal text-muted-foreground">/mês</span>
              </div>
            </div>

            {/* CTA */}
            <Link to="/login?signup=true">
              <Button className="w-full bg-primary hover:bg-primary/90 py-6 text-lg rounded-xl">
                <ShoppingCart className="mr-2 w-5 h-5" />
                Adquirir agora
              </Button>
            </Link>

            <p className="mt-4 text-xs text-muted-foreground">
              Acesso completo à plataforma de acompanhamento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
