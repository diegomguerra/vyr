import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Check, X, ShoppingCart, Sun, Zap, Moon, Clock, Shield, Sparkles, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingNav } from "@/components/landing";
import { SachetMockup } from "@/brand/ProductMockups";

const products = {
  dia: {
    id: "dia",
    name: "VYR BOOT",
    tagline: "Ativação Matinal",
    period: "6h às 12h",
    heroDescription: "Fórmula estruturada para indução de estado cognitivo inicial nas primeiras horas do dia.",
    fullDescription: "Desenvolvemos o VYR BOOT pensando em quem precisa de foco e clareza mental logo pela manhã. Nossa fórmula combina nootrópicos de última geração para potencializar sua produtividade, sem os picos de ansiedade comuns em estimulantes tradicionais.",
    detailText: "Apresentamos a você o VYR BOOT, o suplemento que visa capacidade funcional e energia sustentável. Afinal, capacidade funcional não é sinônimo de ansiedade e fadiga. Para nós da VYR, produtividade é sinônimo de equilíbrio e clareza.",
    variant: "BOOT" as const,
    icon: Sun,
    benefits: [
      { icon: Brain, title: "Foco Intenso", description: "Clareza mental e concentração" },
      { icon: Zap, title: "Energia Sustentável", description: "Sem crash ou picos de ansiedade" },
      { icon: Sparkles, title: "Memória Aprimorada", description: "Suporte à memória de trabalho" },
      { icon: Shield, title: "Neuroproteção", description: "Proteção cognitiva de longo prazo" },
    ],
    contains: ["Citicolina", "Bacopa Monnieri", "Fosfatidilserina", "L-Teanina", "Creatina", "PQQ"],
    doesNotContain: ["Açúcar", "Glúten", "Lactose"],
    usage: {
      instruction: "Diluir 1 sachê em 200ml de água.",
      recommendation: "Adultos ≥ 19 anos, consumir 1 sachê pela manhã, ou de acordo com orientação profissional.",
      warning: "ESTE PRODUTO NÃO É UM MEDICAMENTO. NÃO EXCEDER A RECOMENDAÇÃO DIÁRIA DE CONSUMO INDICADA NA EMBALAGEM. MANTENHA FORA DO ALCANCE DE CRIANÇAS. ESTE PRODUTO NÃO DEVE SER CONSUMIDO POR GESTANTES, LACTANTES, CRIANÇAS E PESSOAS ENVOLVIDAS EM ATIVIDADES QUE REQUEREM ATENÇÃO CONSTANTE. PESSOAS COM ENFERMIDADES E/OU SOB O USO DE MEDICAMENTOS, CONSULTE SEU MÉDICO.",
      storage: "Conservar este produto ao abrigo da luz, calor e umidade. Após aberto, consumo imediato.",
    },
    ingredientsList: "Citicolina, Fosfatidilserina, Bacopa monnieri (extrato), Vitamina B6, Vitamina B9, Vitamina B12, L-teanina, Teacrina, PQQ (Pirroloquinolina quinona), Creatina. NÃO CONTÉM GLÚTEN. CONTÉM AROMATIZANTE.",
    nutritionTable: [
      { nutrient: "Citicolina", amount: "250 mg", vd: "*" },
      { nutrient: "Fosfatidilserina", amount: "200 mg", vd: "*" },
      { nutrient: "Bacopa monnieri (extrato)", amount: "400 mg", vd: "*" },
      { nutrient: "Vitamina B6", amount: "25 mg", vd: "*" },
      { nutrient: "Vitamina B9", amount: "400 mcg", vd: "*" },
      { nutrient: "Vitamina B12", amount: "500 mcg", vd: "*" },
      { nutrient: "L-teanina", amount: "100 mg", vd: "*" },
      { nutrient: "Teacrina", amount: "100 mg", vd: "*" },
      { nutrient: "PQQ (Pirroloquinolina quinona)", amount: "10 mg", vd: "*" },
      { nutrient: "Creatina", amount: "3 g", vd: "*" },
    ],
    price: "R$ 147",
    priceOld: "R$ 197",
  },
  tarde: {
    id: "tarde",
    name: "VYR HOLD",
    tagline: "Performance Sustentada",
    period: "12h às 18h",
    heroDescription: "Fórmula para manutenção do estado cognitivo no período mais desafiador do dia.",
    fullDescription: "Desenvolvemos o VYR HOLD para combater a fadiga pós-almoço e manter seu desempenho cognitivo estável. Nossa fórmula adaptogênica contribui para resistência ao estresse e manter a clareza mental até o fim do expediente.",
    detailText: "Apresentamos a você o VYR HOLD, o suplemento que visa manutenção de estado cognitivo ao longo do dia. Afinal, queda de energia não precisa fazer parte da sua rotina. Para nós da VYR, tarde é sinônimo de produtividade e resiliência.",
    variant: "HOLD" as const,
    icon: Zap,
    benefits: [
      { icon: Zap, title: "Anti-Fadiga", description: "Combate à queda pós-almoço" },
      { icon: Brain, title: "Clareza Mental", description: "Produtividade sustentada" },
      { icon: Shield, title: "Adaptogênico", description: "Resistência ao estresse" },
      { icon: Sparkles, title: "Decisões Estruturadas", description: "Suporte à tomada de decisões" },
    ],
    contains: ["Teacrina", "L-Teanina", "L-Taurina", "Cafeína", "Bicarbonato de sódio"],
    doesNotContain: ["Açúcar", "Glúten", "Lactose"],
    usage: {
      instruction: "Diluir 1 sachê em 200ml de água.",
      recommendation: "Adultos ≥ 19 anos, consumir 1 sachê após o almoço, ou de acordo com orientação profissional.",
      warning: "ESTE PRODUTO NÃO É UM MEDICAMENTO. NÃO EXCEDER A RECOMENDAÇÃO DIÁRIA DE CONSUMO INDICADA NA EMBALAGEM. MANTENHA FORA DO ALCANCE DE CRIANÇAS. ESTE PRODUTO NÃO DEVE SER CONSUMIDO POR GESTANTES, LACTANTES, CRIANÇAS E PESSOAS ENVOLVIDAS EM ATIVIDADES QUE REQUEREM ATENÇÃO CONSTANTE. PESSOAS COM ENFERMIDADES E/OU SOB O USO DE MEDICAMENTOS, CONSULTE SEU MÉDICO.",
      storage: "Conservar este produto ao abrigo da luz, calor e umidade. Após aberto, consumo imediato.",
    },
    ingredientsList: "Teacrina, L-teanina, L-taurina, Cafeína, Bicarbonato de sódio, Edulcorante, Aromatizante q.s. NÃO CONTÉM GLÚTEN. CONTÉM AROMATIZANTE.",
    nutritionTable: [
      { nutrient: "Teacrina", amount: "100 mg", vd: "*" },
      { nutrient: "L-teanina", amount: "100 mg", vd: "*" },
      { nutrient: "L-taurina", amount: "250 mg", vd: "*" },
      { nutrient: "Cafeína", amount: "25 mg", vd: "*" },
      { nutrient: "Bicarbonato de sódio", amount: "1,4 g", vd: "*" },
    ],
    price: "R$ 147",
    priceOld: "R$ 197",
  },
  noite: {
    id: "noite",
    name: "VYR CLEAR",
    tagline: "Recuperação Profunda",
    period: "20h às 6h",
    heroDescription: "Fórmula para favorecer a recuperação cognitiva durante o sono.",
    fullDescription: "Desenvolvemos o VYR CLEAR pensando na recuperação cerebral noturna. Nossa fórmula promove sono reparador e consolidação de memórias, preparando seu cérebro para o próximo dia de alta performance cognitiva.",
    detailText: "Apresentamos a você o VYR CLEAR, o suplemento que visa recuperação cognitiva e sono de qualidade. Afinal, descanso não é sinônimo de perda de tempo. Para nós da VYR, noite é sinônimo de regeneração e preparo.",
    variant: "CLEAR" as const,
    icon: Moon,
    benefits: [
      { icon: Moon, title: "Sono Profundo", description: "Sono mais reparador" },
      { icon: Brain, title: "Consolidação", description: "Consolidação de memórias" },
      { icon: Shield, title: "Anti-Cortisol", description: "Redução do estresse noturno" },
      { icon: Sparkles, title: "Despertar Leve", description: "Acordar revigorado" },
    ],
    contains: ["N-acetilcisteína (NAC)", "Ashwagandha", "Magnésio quelato"],
    doesNotContain: ["Açúcar", "Glúten", "Lactose", "Cafeína"],
    usage: {
      instruction: "Diluir 1 sachê em 200ml de água.",
      recommendation: "Adultos ≥ 19 anos, consumir 1 sachê 30-60 minutos antes de dormir, ou de acordo com orientação profissional.",
      warning: "ESTE PRODUTO NÃO É UM MEDICAMENTO. NÃO EXCEDER A RECOMENDAÇÃO DIÁRIA DE CONSUMO INDICADA NA EMBALAGEM. MANTENHA FORA DO ALCANCE DE CRIANÇAS. ESTE PRODUTO NÃO DEVE SER CONSUMIDO POR GESTANTES, LACTANTES, CRIANÇAS E PESSOAS ENVOLVIDAS EM ATIVIDADES QUE REQUEREM ATENÇÃO CONSTANTE. PESSOAS COM ENFERMIDADES E/OU SOB O USO DE MEDICAMENTOS, CONSULTE SEU MÉDICO.",
      storage: "Conservar este produto ao abrigo da luz, calor e umidade. Após aberto, consumo imediato.",
    },
    ingredientsList: "N-acetilcisteína (NAC), Ashwagandha, Magnésio quelato. NÃO CONTÉM GLÚTEN. CONTÉM AROMATIZANTE.",
    nutritionTable: [
      { nutrient: "N-acetilcisteína (NAC)", amount: "600 mg", vd: "*" },
      { nutrient: "Ashwagandha", amount: "300 mg", vd: "*" },
      { nutrient: "Magnésio quelato", amount: "200 mg", vd: "*" },
    ],
    price: "R$ 147",
    priceOld: "R$ 197",
  },
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !products[id as keyof typeof products]) {
    return <Navigate to="/produtos" replace />;
  }
  
  const product = products[id as keyof typeof products];
  const IconComponent = product.icon;

  return (
    <div className="min-h-screen vyr-gradient-bg">
      <LandingNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 vyr-gradient-radial opacity-60" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-vyr-accent/8 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-vyr-cyan/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-vyr-gray-400 hover:text-vyr-white transition-colors">Início</Link>
            <span className="text-vyr-gray-600">/</span>
            <Link to="/produtos" className="text-vyr-gray-400 hover:text-vyr-white transition-colors">Produtos</Link>
            <span className="text-vyr-gray-600">/</span>
            <span className="text-vyr-accent">{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sachet Mockup */}
            <div className="relative flex items-center justify-center py-8">
              <div className="absolute inset-0 bg-vyr-accent/5 blur-3xl opacity-50" />
              <div className="relative z-10 transform scale-150 sm:scale-175">
                <SachetMockup variant={product.variant} />
              </div>
            </div>
            
            {/* Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-vyr-white mb-2 font-mono tracking-tight">{product.name}</h1>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-vyr-graphite border border-vyr-gray-600/50 text-vyr-gray-300">
                  {product.period}
                </span>
                <span className="text-vyr-accent font-medium">{product.tagline}</span>
              </div>
              
              <p className="text-lg text-vyr-gray-300 mb-8">{product.heroDescription}</p>
              
              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <span className="text-sm text-vyr-gray-500 line-through block">{product.priceOld}</span>
                  <span className="text-3xl font-bold text-vyr-white">{product.price}</span>
                  <span className="text-vyr-gray-400 ml-2">/mês</span>
                </div>
                <span className="px-3 py-1 rounded-md bg-vyr-accent/10 text-vyr-accent text-sm font-semibold">
                  -25% OFF
                </span>
              </div>
              
              {/* CTA */}
              <div className="flex gap-4">
                <Link to="/login?signup=true" className="flex-1">
                  <Button 
                    className="w-full py-6 text-base font-semibold rounded-xl vyr-btn-accent shadow-lg shadow-vyr-accent/20 transition-all duration-300"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Adicionar ao Carrinho
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 px-4 border-t border-vyr-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-sm font-semibold text-vyr-gray-500 uppercase tracking-wider mb-8">
            Benefícios do Produto
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl vyr-card-graphite"
              >
                <div className="w-12 h-12 rounded-xl bg-vyr-accent/10 border border-vyr-accent/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-vyr-accent vyr-icon-glow" />
                </div>
                <h3 className="text-lg font-semibold text-vyr-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-vyr-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-vyr-gray-400 leading-relaxed mb-8">
                {product.fullDescription}
              </p>
              <div className="vyr-card-graphite p-6 rounded-2xl">
                <h4 className="text-vyr-accent font-semibold mb-3">Sistema VYR</h4>
                <p className="text-vyr-gray-400 text-sm">
                  Cada suplemento VYR foi projetado para trabalhar em sinergia com os demais, 
                  criando um ciclo cognitivo completo de 24 horas.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="transform scale-125">
                  <SachetMockup variant={product.variant} />
                </div>
              </div>
              <p className="text-vyr-gray-300 leading-relaxed text-center">
                {product.detailText.split(product.name).map((part, i, arr) => (
                  i < arr.length - 1 ? (
                    <span key={i}>{part}<span className="text-vyr-accent font-semibold">{product.name}</span></span>
                  ) : part
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contains / Does Not Contain Section */}
      <section className="py-16 px-4 border-t border-vyr-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Contains */}
            <div className="vyr-card-graphite p-6 rounded-2xl">
              <h3 className="text-sm font-semibold text-vyr-gray-500 uppercase tracking-wider mb-6">Possui</h3>
              <div className="space-y-3">
                {product.contains.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-vyr-accent" />
                    <span className="text-vyr-accent">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image */}
            <div className="flex justify-center py-8">
              <div className="transform scale-110">
                <SachetMockup variant={product.variant} />
              </div>
            </div>
            
            {/* Does Not Contain */}
            <div className="vyr-card-graphite p-6 rounded-2xl text-right">
              <h3 className="text-sm font-semibold text-vyr-gray-500 uppercase tracking-wider mb-6">Não Possui</h3>
              <div className="space-y-3">
                {product.doesNotContain.map((item, index) => (
                  <div key={index} className="flex items-center justify-end gap-3">
                    <span className="text-vyr-gray-400">{item}</span>
                    <X className="w-5 h-5 text-red-400/70" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How to Use Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="vyr-card-graphite p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-vyr-white mb-6">Como Usar</h2>
              <p className="text-vyr-accent font-medium mb-4">{product.usage.instruction}</p>
              <p className="text-vyr-gray-400 mb-6">{product.usage.recommendation}</p>
              <p className="text-xs text-vyr-gray-500 leading-relaxed uppercase mb-6">
                {product.usage.warning}
              </p>
              <div className="border-t border-vyr-gray-700/50 pt-4">
                <h4 className="text-sm font-semibold text-vyr-gray-400 mb-2">Modo de conservação:</h4>
                <p className="text-sm text-vyr-gray-500">{product.usage.storage}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="vyr-card-graphite p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-8 h-8 text-vyr-accent vyr-icon-glow" />
                  <div>
                    <p className="text-vyr-white font-semibold">Horário Ideal</p>
                    <p className="text-vyr-gray-400 text-sm">{product.period}</p>
                  </div>
                </div>
                <div className="transform scale-100">
                  <SachetMockup variant={product.variant} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ingredients Section */}
      <section className="py-16 px-4 bg-vyr-graphite-dark relative">
        <div className="absolute inset-0 bg-gradient-to-r from-vyr-accent/5 via-transparent to-vyr-cyan/5" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ingredients List */}
            <div>
              <h2 className="text-3xl font-bold text-vyr-white mb-6">Ingredientes</h2>
              <p className="text-vyr-gray-300 leading-relaxed">
                {product.ingredientsList}
              </p>
            </div>
            
            {/* Nutrition Table */}
            <div className="vyr-card-graphite p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-vyr-white mb-4">Tabela Nutricional</h3>
              <div className="text-sm text-vyr-gray-400 mb-4">
                <p>Quantidade por porção: 5g (1 sachê)</p>
                <p>Porções por embalagem: 30</p>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-vyr-gray-700/50">
                    <th className="text-left py-2 text-vyr-gray-500 text-sm font-normal">Nutriente</th>
                    <th className="text-right py-2 text-vyr-gray-500 text-sm font-normal">Quantidade</th>
                    <th className="text-right py-2 text-vyr-gray-500 text-sm font-normal">%VD</th>
                  </tr>
                </thead>
                <tbody>
                  {product.nutritionTable.map((row, index) => (
                    <tr key={index} className="border-b border-vyr-gray-700/30">
                      <td className="py-2 text-vyr-gray-300">{row.nutrient}</td>
                      <td className="py-2 text-vyr-gray-300 text-right">{row.amount}</td>
                      <td className="py-2 text-vyr-gray-300 text-right">{row.vd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-vyr-gray-500 mt-4">
                (*) % Valores Diários de referência com base em uma dieta de 2.000kcal ou 8.400kJ. Seus valores diários podem ser maiores ou menores, dependendo das suas necessidades energéticas. (**) Valores diários não estabelecidos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-vyr-white mb-4">Pronto para otimizar seu dia?</h2>
          <p className="text-vyr-gray-400 mb-8">
            Experimente o <span className="text-vyr-accent font-semibold">{product.name}</span> e sinta a diferença na sua performance cognitiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login?signup=true">
              <Button 
                className="px-8 py-6 text-base font-semibold rounded-xl vyr-btn-accent shadow-lg shadow-vyr-accent/20 transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Comprar Agora
              </Button>
            </Link>
            <Link to="/produtos">
              <Button 
                variant="outline"
                className="px-8 py-6 text-base font-semibold rounded-xl border-vyr-gray-600 text-vyr-gray-300 hover:bg-vyr-graphite hover:text-vyr-white hover:border-vyr-accent/50 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Ver Outros Produtos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
