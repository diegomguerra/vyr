import { Link } from "react-router-dom";
import { ArrowLeft, Check, ShoppingCart, Brain, Zap, Moon, Sun, Sparkles, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingNav } from "@/components/landing";

// Import sachet images
import sachetDiaVertical from "@/assets/sachet-dia-vertical.png";
import sachetTardeVertical from "@/assets/sachet-tarde-vertical.png";
import sachetNoiteVertical from "@/assets/sachet-noite-vertical.png";

const products = [
  {
    id: "dia",
    name: "NZT Dia",
    tagline: "Ativação Matinal",
    period: "6h às 12h",
    description: "Fórmula desenvolvida para máxima ativação cognitiva nas primeiras horas do dia. Potencializa foco, clareza mental e energia sustentável sem picos de ansiedade.",
    image: sachetDiaVertical,
    icon: Sun,
    color: "from-amber-400 to-orange-500",
    bgGlow: "bg-amber-500/20",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-400",
    benefits: [
      "Foco intenso e clareza mental",
      "Energia sustentável sem crash",
      "Melhora na memória de trabalho",
      "Redução da procrastinação matinal"
    ],
    ingredients: [
      "Bacopa Monnieri 300mg",
      "L-Teanina 200mg",
      "Citicolina 250mg",
      "Rhodiola Rosea 150mg",
      "Vitamina B12 1000mcg"
    ],
    usage: "Tomar 1 sachê ao acordar, preferencialmente com o café da manhã.",
    price: "R$ 147",
    priceOld: "R$ 197",
  },
  {
    id: "tarde",
    name: "NZT Tarde",
    tagline: "Performance Sustentada",
    period: "12h às 18h",
    description: "Fórmula para manter a produtividade no período mais desafiador do dia. Combate a fadiga pós-almoço e mantém o desempenho cognitivo estável até o fim do expediente.",
    image: sachetTardeVertical,
    icon: Zap,
    color: "from-emerald-400 to-teal-500",
    bgGlow: "bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-400",
    benefits: [
      "Combate à fadiga pós-almoço",
      "Produtividade sustentada",
      "Resistência ao estresse",
      "Melhora na tomada de decisões"
    ],
    ingredients: [
      "Lion's Mane 500mg",
      "Ashwagandha KSM-66 300mg",
      "Alpha-GPC 200mg",
      "Magnésio Treonato 144mg",
      "Vitamina D3 2000UI"
    ],
    usage: "Tomar 1 sachê após o almoço ou quando sentir queda de energia.",
    price: "R$ 147",
    priceOld: "R$ 197",
  },
  {
    id: "noite",
    name: "NZT Noite",
    tagline: "Recuperação Profunda",
    period: "20h às 6h",
    description: "Fórmula para otimizar a recuperação cognitiva durante o sono. Promove sono reparador e consolidação de memórias, preparando o cérebro para o próximo dia.",
    image: sachetNoiteVertical,
    icon: Moon,
    color: "from-violet-400 to-indigo-500",
    bgGlow: "bg-violet-500/20",
    borderColor: "border-violet-500/30",
    textColor: "text-violet-400",
    benefits: [
      "Sono mais profundo e reparador",
      "Consolidação de memórias",
      "Redução do cortisol noturno",
      "Despertar revigorado"
    ],
    ingredients: [
      "Glicina 3000mg",
      "L-Triptofano 500mg",
      "Fosfatidilserina 100mg",
      "Zinco 15mg",
      "Melatonina 0.5mg"
    ],
    usage: "Tomar 1 sachê 30-60 minutos antes de dormir.",
    price: "R$ 147",
    priceOld: "R$ 197",
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-slate-950">
      <LandingNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/50 via-slate-950 to-slate-950" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </Link>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 text-sm font-medium">Nootrópicos Premium</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Escolha seu <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Suplemento</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Três fórmulas exclusivas desenvolvidas para otimizar cada fase do seu dia cognitivo. 
            Selecione o produto ideal para suas necessidades.
          </p>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className={`relative rounded-3xl border ${product.borderColor} bg-slate-900/80 backdrop-blur-sm overflow-hidden group hover:scale-[1.02] transition-all duration-500`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 ${product.bgGlow} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${product.color} text-white`}>
                      {product.period}
                    </span>
                    <product.icon className={`w-5 h-5 ${product.textColor}`} />
                  </div>
                  
                  {/* Image */}
                  <div className="relative h-72 mb-6 flex items-center justify-center">
                    <div className={`absolute inset-0 ${product.bgGlow} blur-2xl opacity-50`} />
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="relative z-10 h-full w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                  <p className={`text-sm font-medium ${product.textColor} mb-3`}>{product.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{product.description}</p>
                  
                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className={`w-4 h-4 ${product.textColor} flex-shrink-0`} />
                        <span className="text-sm text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Ingredients */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Composição Principal</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.slice(0, 3).map((ing, index) => (
                        <span key={index} className="px-2 py-1 rounded-md bg-slate-800/80 text-xs text-slate-400 border border-slate-700/50">
                          {ing}
                        </span>
                      ))}
                      <span className="px-2 py-1 rounded-md bg-slate-800/80 text-xs text-slate-500 border border-slate-700/50">
                        +{product.ingredients.length - 3} mais
                      </span>
                    </div>
                  </div>
                  
                  {/* Usage */}
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-800/50 border border-slate-700/30 mb-6">
                    <Clock className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-slate-400">{product.usage}</p>
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm text-slate-500 line-through">{product.priceOld}</span>
                      <span className="text-2xl font-bold text-white ml-2">{product.price}</span>
                      <span className="text-sm text-slate-400 ml-1">/mês</span>
                    </div>
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                      -25% OFF
                    </span>
                  </div>
                  
                  <Link to="/login?signup=true">
                    <Button 
                      className={`w-full py-6 text-base font-semibold rounded-xl bg-gradient-to-r ${product.color} hover:opacity-90 text-white shadow-lg transition-all duration-300`}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Adicionar ao Carrinho
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Info Section */}
      <section className="py-16 px-4 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Brain className="w-7 h-7 text-violet-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Formulação Científica</h4>
              <p className="text-sm text-slate-400">Ingredientes em doses clínicas validadas por estudos científicos.</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center">
                <Shield className="w-7 h-7 text-fuchsia-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Segurança Garantida</h4>
              <p className="text-sm text-slate-400">Testado em laboratórios certificados. Sem efeitos colaterais severos.</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Plataforma Incluída</h4>
              <p className="text-sm text-slate-400">Acesso à plataforma digital para rastrear seu progresso cognitivo.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Full Package CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-violet-500/30 bg-gradient-to-br from-violet-950/50 via-slate-900 to-fuchsia-950/50 p-8 md:p-12">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10 blur-3xl" />
            
            <div className="relative z-10 text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold mb-6">
                MELHOR ESCOLHA
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Rotina Cognitiva Completa
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                Otimize seu cérebro 24h com os 3 suplementos integrados. 
                Economia de 30% em relação aos produtos individuais.
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-2xl text-slate-500 line-through">R$ 441</span>
                <span className="text-4xl font-bold text-white">R$ 297</span>
                <span className="text-slate-400">/mês</span>
              </div>
              
              <Link to="/login?signup=true">
                <Button className="px-8 py-6 text-lg font-semibold rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 hover:from-violet-700 hover:via-fuchsia-700 hover:to-violet-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300">
                  <ShoppingCart className="w-5 h-5 mr-2" />
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
