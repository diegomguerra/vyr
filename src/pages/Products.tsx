import { Link } from "react-router-dom";
import { ArrowLeft, Check, ShoppingCart, Brain, Zap, Moon, Sun, Sparkles, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingNav } from "@/components/landing";
import { SachetMockup } from "@/brand/ProductMockups";

const products = [
  {
    id: "dia",
    name: "VYR BOOT",
    tagline: "Ativação Matinal",
    period: "6h às 12h",
    description: "Fórmula estruturada para indução de estado cognitivo inicial nas primeiras horas do dia. Potencializa foco, clareza mental e energia sustentável sem picos de ansiedade.",
    variant: "BOOT" as const,
    icon: Sun,
    benefits: [
      "Foco intenso e clareza mental",
      "Energia sustentável sem crash",
      "Suporte à memória de trabalho",
      "Redução da procrastinação matinal"
    ],
    ingredients: [
      "Citicolina 250mg",
      "Fosfatidilserina 200mg",
      "Bacopa monnieri 400mg",
      "L-teanina 100mg",
      "Creatina 3g",
      "PQQ 10mg"
    ],
    usage: "Tomar 1 sachê ao acordar, preferencialmente com o café da manhã.",
    price: "R$ 147",
    priceOld: "R$ 197",
  },
  {
    id: "tarde",
    name: "VYR HOLD",
    tagline: "Performance Sustentada",
    period: "12h às 18h",
    description: "Fórmula para manutenção do estado cognitivo no período mais desafiador do dia. Combate a fadiga pós-almoço e contribui para desempenho cognitivo estável até o fim do expediente.",
    variant: "HOLD" as const,
    icon: Zap,
    benefits: [
      "Combate à fadiga pós-almoço",
      "Produtividade sustentada",
      "Resistência ao estresse",
      "Suporte à tomada de decisões"
    ],
    ingredients: [
      "Teacrina 100mg",
      "L-teanina 100mg",
      "L-taurina 250mg",
      "Cafeína 25mg",
      "Bicarbonato de sódio 1,4g"
    ],
    usage: "Tomar 1 sachê após o almoço ou quando sentir queda de energia.",
    price: "R$ 147",
    priceOld: "R$ 197",
  },
  {
    id: "noite",
    name: "VYR CLEAR",
    tagline: "Recuperação Profunda",
    period: "20h às 6h",
    description: "Fórmula para favorecer a recuperação cognitiva durante o sono. Promove sono reparador e consolidação de memórias, preparando o cérebro para o próximo dia.",
    variant: "CLEAR" as const,
    icon: Moon,
    benefits: [
      "Sono mais profundo e reparador",
      "Consolidação de memórias",
      "Redução do cortisol noturno",
      "Despertar revigorado"
    ],
    ingredients: [
      "N-acetilcisteína (NAC) 600mg",
      "Ashwagandha 300mg",
      "Magnésio quelato 200mg"
    ],
    usage: "Tomar 1 sachê 30-60 minutos antes de dormir.",
    price: "R$ 147",
    priceOld: "R$ 197",
  }
];

export default function Products() {
  return (
    <div className="min-h-screen vyr-gradient-bg">
      <LandingNav />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 vyr-gradient-radial opacity-60" />
        <div className="absolute top-20 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-vyr-accent/8 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-vyr-cyan/6 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-vyr-gray-400 hover:text-vyr-white mb-6 sm:mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </Link>
          
          <div className="vyr-badge-accent mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-accent" />
            <span className="text-vyr-accent text-xs sm:text-sm font-medium">Suplementos VYR</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-vyr-white mb-4 sm:mb-6">
            Escolha seu <span className="text-gradient-accent">Suplemento</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-vyr-gray-400 max-w-2xl mx-auto px-2">
            Três fórmulas exclusivas estruturadas para cada fase do seu dia cognitivo. 
            Selecione o produto ideal para suas necessidades.
          </p>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="relative rounded-2xl sm:rounded-3xl vyr-card-graphite overflow-hidden group hover:scale-[1.02] transition-all duration-500"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-vyr-accent/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 p-4 sm:p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-vyr-graphite border border-vyr-gray-600/50 text-vyr-gray-300">
                      {product.period}
                    </span>
                    <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-vyr-accent vyr-icon-glow" />
                  </div>
                  
                  {/* Sachet Mockup */}
                  <div className="relative h-56 sm:h-72 mb-4 sm:mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-vyr-accent/5 blur-2xl opacity-50" />
                    <div className="relative z-10 transform scale-110 sm:scale-125 group-hover:scale-115 sm:group-hover:scale-130 transition-transform duration-500">
                      <SachetMockup variant={product.variant} />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-xl sm:text-2xl font-bold text-vyr-white mb-0.5 sm:mb-1 font-mono tracking-tight">{product.name}</h3>
                  <p className="text-xs sm:text-sm font-medium text-vyr-accent mb-2 sm:mb-3">{product.tagline}</p>
                  <p className="text-vyr-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{product.description}</p>
                  
                  {/* Benefits */}
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-accent flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-vyr-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Ingredients */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-[10px] sm:text-xs font-semibold text-vyr-gray-500 uppercase tracking-wider mb-2 sm:mb-3">Composição Principal</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {product.ingredients.slice(0, 3).map((ing, index) => (
                        <span key={index} className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-vyr-graphite text-[10px] sm:text-xs text-vyr-gray-400 border border-vyr-gray-700/50">
                          {ing}
                        </span>
                      ))}
                      <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-vyr-graphite text-[10px] sm:text-xs text-vyr-gray-500 border border-vyr-gray-700/50">
                        +{product.ingredients.length - 3} mais
                      </span>
                    </div>
                  </div>
                  
                  {/* Usage */}
                  <div className="flex items-start gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-vyr-graphite-dark border border-vyr-gray-700/30 mb-4 sm:mb-6">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vyr-gray-500 mt-0.5 flex-shrink-0" />
                    <p className="text-[10px] sm:text-xs text-vyr-gray-400">{product.usage}</p>
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div>
                      <span className="text-xs sm:text-sm text-vyr-gray-500 line-through">{product.priceOld}</span>
                      <span className="text-xl sm:text-2xl font-bold text-vyr-white ml-2">{product.price}</span>
                      <span className="text-xs sm:text-sm text-vyr-gray-400 ml-1">/mês</span>
                    </div>
                    <span className="px-2 py-0.5 sm:py-1 rounded-md bg-vyr-accent/10 text-vyr-accent text-[10px] sm:text-xs font-semibold">
                      -25% OFF
                    </span>
                  </div>
                  
                  <div className="flex gap-2 sm:gap-3">
                    <Link to={`/produtos/${product.id}`} className="flex-1">
                      <Button 
                        variant="outline"
                        className="w-full py-4 sm:py-6 text-xs sm:text-base font-semibold rounded-lg sm:rounded-xl border-vyr-gray-600 text-vyr-gray-300 hover:bg-vyr-graphite hover:text-vyr-white hover:border-vyr-accent/50 transition-all duration-300"
                      >
                        Saiba Mais
                      </Button>
                    </Link>
                    <Link to="/login?signup=true" className="flex-1">
                      <Button 
                        className="w-full py-4 sm:py-6 text-xs sm:text-base font-semibold rounded-lg sm:rounded-xl vyr-btn-accent shadow-lg transition-all duration-300"
                      >
                        <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                        Comprar
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Info Section */}
      <section className="py-12 sm:py-16 px-4 border-t border-vyr-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center vyr-card-graphite p-6 sm:p-8 rounded-2xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-vyr-accent/10 border border-vyr-accent/20 flex items-center justify-center">
                <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-vyr-accent vyr-icon-glow" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-vyr-white mb-1.5 sm:mb-2">Formulação Científica</h4>
              <p className="text-xs sm:text-sm text-vyr-gray-400">Ingredientes em doses clínicas validadas por estudos científicos.</p>
            </div>
            
            <div className="text-center vyr-card-graphite p-6 sm:p-8 rounded-2xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-vyr-cyan/10 border border-vyr-cyan/20 flex items-center justify-center">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-vyr-cyan vyr-icon-glow" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-vyr-white mb-1.5 sm:mb-2">Segurança Garantida</h4>
              <p className="text-xs sm:text-sm text-vyr-gray-400">Testado em laboratórios certificados. Sem efeitos colaterais severos.</p>
            </div>
            
            <div className="text-center vyr-card-graphite p-6 sm:p-8 rounded-2xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-vyr-accent/10 border border-vyr-accent/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-vyr-accent vyr-icon-glow" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-vyr-white mb-1.5 sm:mb-2">Plataforma Incluída</h4>
              <p className="text-xs sm:text-sm text-vyr-gray-400">Acesso à plataforma digital para rastrear seu progresso cognitivo.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Full Package CTA */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden vyr-card-graphite p-6 sm:p-8 md:p-12">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-vyr-accent/8 via-vyr-cyan/5 to-vyr-accent/8 blur-3xl" />
            
            <div className="relative z-10 text-center">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-vyr-accent/20 border border-vyr-accent/30 text-vyr-accent text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                MELHOR ESCOLHA
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-vyr-white mb-3 sm:mb-4">
                Rotina Cognitiva <span className="text-gradient-accent">Completa</span>
              </h2>
              <p className="text-vyr-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
                Estruture sua rotina cognitiva 24h com os 3 suplementos VYR integrados. 
                Economia de 30% em relação aos produtos individuais.
              </p>
              
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 flex-wrap">
                <span className="text-lg sm:text-2xl text-vyr-gray-500 line-through">R$ 441</span>
                <span className="text-3xl sm:text-4xl font-bold text-vyr-white">R$ 297</span>
                <span className="text-vyr-gray-400 text-sm">/mês</span>
              </div>
              
              {/* Sachets Preview */}
              <div className="flex justify-center gap-4 sm:gap-8 mb-8">
                <div className="transform scale-75 sm:scale-90">
                  <SachetMockup variant="BOOT" />
                </div>
                <div className="transform scale-75 sm:scale-90">
                  <SachetMockup variant="HOLD" />
                </div>
                <div className="transform scale-75 sm:scale-90">
                  <SachetMockup variant="CLEAR" />
                </div>
              </div>
              
              <Link to="/login?signup=true">
                <Button className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-xl vyr-btn-accent shadow-lg shadow-vyr-accent/20 hover:shadow-xl hover:shadow-vyr-accent/25 transition-all duration-300">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Quero a Rotina Completa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
