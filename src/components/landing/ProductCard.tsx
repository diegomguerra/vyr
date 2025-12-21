import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Shield, Clock, TrendingUp } from "lucide-react";

const products = [
  {
    id: "dia",
    name: "NZT Dia",
    tagline: "Performance Diurna",
    description: "Fórmula para máxima performance cognitiva durante o dia. Ideal para trabalho intenso e tomada de decisões.",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "text-amber-600",
    borderAccent: "border-amber-500/30",
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
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accentColor: "text-purple-600",
    borderAccent: "border-purple-500/30",
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
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    accentColor: "text-indigo-600",
    borderAccent: "border-indigo-500/30",
    features: ["Memória consolidada", "Sono reparador", "Recuperação neural"],
    originalPrice: "R$ 197,00",
    price: "R$ 147,00",
    discount: "25% OFF",
  },
];

const bundleBenefits = [
  { icon: Sparkles, text: "Otimização 24 horas por dia" },
  { icon: TrendingUp, text: "Resultados potencializados" },
  { icon: Shield, text: "Garantia de 30 dias" },
  { icon: Clock, text: "Entrega expressa grátis" },
];

export function ProductCard() {
  return (
    <section id="produto" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">
            Nossa Linha
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
            Suplementação Cognitiva Avançada
          </h2>
        </div>

        {/* Bundle CTA - Hero Product */}
        <div className="mb-16">
          <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 rounded-3xl p-1">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/50 via-purple-500/50 to-fuchsia-500/50 blur-xl" />
            
            <div className="relative bg-card/95 backdrop-blur-sm rounded-[22px] p-8 md:p-12">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Mais Vendido
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left - Content */}
                <div className="text-center md:text-left">
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
                    Protocolo Completo
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent mb-3">
                    Pacote Completo
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    A solução definitiva para quem busca performance cognitiva de elite. 
                    Combine os três suplementos e experimente o potencial máximo do seu cérebro.
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {bundleBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <benefit.icon className="w-4 h-4 text-purple-500" />
                        <span>{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Included products */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-xs bg-amber-500/10 text-amber-600 px-3 py-1.5 rounded-full border border-amber-500/20">
                      <Check className="w-3 h-3" /> NZT Dia
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs bg-purple-500/10 text-purple-600 px-3 py-1.5 rounded-full border border-purple-500/20">
                      <Check className="w-3 h-3" /> NZT Tarde
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs bg-indigo-500/10 text-indigo-600 px-3 py-1.5 rounded-full border border-indigo-500/20">
                      <Check className="w-3 h-3" /> NZT Noite
                    </span>
                  </div>
                </div>

                {/* Right - Pricing & CTA */}
                <div className="bg-muted/30 rounded-2xl p-8 text-center border border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">Economia de R$ 194,00</p>
                  
                  <div className="mb-2">
                    <span className="text-lg text-muted-foreground line-through">R$ 591,00</span>
                  </div>
                  
                  <div className="flex items-baseline justify-center gap-3 mb-2">
                    <span className="text-5xl font-bold text-foreground">R$ 397</span>
                    <span className="text-2xl text-muted-foreground">,00</span>
                  </div>
                  
                  <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
                    33% OFF
                  </div>

                  <p className="text-xs text-muted-foreground mb-6">
                    ou 12x de R$ 39,08 sem juros
                  </p>

                  <Link to="/login?signup=true" className="block">
                    <Button className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02]">
                      Quero o Protocolo Completo
                    </Button>
                  </Link>

                  <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    Compra 100% segura • Satisfação garantida
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Products */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">Ou escolha individualmente</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`bg-card border ${product.borderAccent} rounded-2xl p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300`}
            >
              {/* Tag */}
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {product.tagline}
              </p>
              
              {/* Product Name */}
              <h3 className={`text-xl font-semibold ${product.accentColor} mb-4`}>
                {product.name}
              </h3>

              {/* Product Visual - Clean placeholder for future product image */}
              <div className={`w-full h-48 mb-6 rounded-xl bg-gradient-to-br ${product.gradient} border border-border/30 flex items-center justify-center`}>
                <span className="text-4xl font-light text-muted-foreground/50">NZT</span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-foreground">{product.price}</span>
                  <span className="text-xs font-medium text-secondary">{product.discount}</span>
                </div>
              </div>

              {/* CTA */}
              <Link to="/login?signup=true" className="mt-auto">
                <Button variant="outline" className="w-full py-5 rounded-lg">
                  Saiba mais
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
