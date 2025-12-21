import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sun, Sunset, Moon } from "lucide-react";

const products = [
  {
    id: "dia",
    name: "NZT Dia",
    tagline: "Foco & Clareza",
    description: "Fórmula para máxima performance cognitiva durante o dia. Ideal para trabalho intenso e tomada de decisões.",
    icon: Sun,
    color: "from-amber-400 to-orange-500",
    features: ["Foco intenso", "Clareza mental", "Energia sustentada"],
    originalPrice: "R$ 197,00",
    price: "R$ 147,00",
    discount: "25% OFF",
  },
  {
    id: "tarde",
    name: "NZT Tarde",
    tagline: "Criatividade & Flow",
    description: "Potencializa o pensamento criativo e mantém o flow produtivo até o final do expediente.",
    icon: Sunset,
    color: "from-purple-500 to-pink-500",
    features: ["Estado de flow", "Criatividade", "Resistência mental"],
    originalPrice: "R$ 197,00",
    price: "R$ 147,00",
    discount: "25% OFF",
  },
  {
    id: "noite",
    name: "NZT Noite",
    tagline: "Recuperação & Memória",
    description: "Otimiza a consolidação da memória e prepara o cérebro para uma recuperação profunda.",
    icon: Moon,
    color: "from-indigo-500 to-purple-600",
    features: ["Memória consolidada", "Sono reparador", "Recuperação neural"],
    originalPrice: "R$ 197,00",
    price: "R$ 147,00",
    discount: "25% OFF",
  },
];

export function ProductCard() {
  return (
    <section id="produto" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma linha completa para otimização cognitiva em cada momento do seu dia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div key={product.id} className="glass-card p-6 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
                {/* Product Header */}
                <div className="text-center mb-6">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {product.tagline}
                  </span>
                  <h3 className={`text-2xl font-bold mt-1 bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                    {product.name}
                  </h3>
                </div>

                {/* Product Visual */}
                <div className={`w-full h-40 mx-auto mb-6 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                  <IconComponent className="w-16 h-16 text-white" />
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground text-center mb-6 flex-grow">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    <span className="text-xs font-medium text-secondary">{product.discount}</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {product.price}
                  </div>
                </div>

                {/* CTA */}
                <Link to="/login?signup=true" className="mt-auto">
                  <Button variant="outline" className="w-full py-5 rounded-lg border-border/50 hover:bg-primary/10 hover:border-primary/50">
                    Saiba mais
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bundle CTA */}
        <div className="mt-12 text-center">
          <div className="glass-card inline-block px-8 py-6">
            <p className="text-muted-foreground mb-2">Adquira o pacote completo</p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-lg text-muted-foreground line-through">R$ 591,00</span>
              <span className="text-3xl font-bold text-foreground">R$ 397,00</span>
              <span className="text-sm font-medium text-secondary">33% OFF</span>
            </div>
            <Link to="/login?signup=true">
              <Button className="bg-primary hover:bg-primary/90 px-8 py-5 text-lg rounded-xl">
                Adquirir Pacote Completo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
