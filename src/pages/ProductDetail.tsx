import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Check, X, ShoppingCart, Sun, Zap, Moon, Clock, Shield, Sparkles, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingNav } from "@/components/landing";

// Import sachet images
import sachetDiaVertical from "@/assets/sachet-dia-vertical.png";
import sachetTardeVertical from "@/assets/sachet-tarde-vertical.png";
import sachetNoiteVertical from "@/assets/sachet-noite-vertical.png";
import sachetPouringWater from "@/assets/sachet-pouring-water.png";
import lifestyleProfessional from "@/assets/lifestyle-professional.png";

const products = {
  dia: {
    id: "dia",
    name: "NZT Dia",
    tagline: "Ativação Matinal",
    period: "6h às 12h",
    heroDescription: "Fórmula desenvolvida para máxima ativação cognitiva nas primeiras horas do dia.",
    fullDescription: "Desenvolvemos o NZT Dia pensando em quem precisa de foco e clareza mental logo pela manhã. Nossa fórmula combina nootrópicos de última geração para potencializar sua produtividade, sem os picos de ansiedade comuns em estimulantes tradicionais.",
    detailText: "Apresentamos a você o NZT Dia, o suplemento que visa performance cognitiva e energia sustentável. Afinal, performance não é sinônimo de ansiedade e fadiga. Para nós da NZT, produtividade é sinônimo de equilíbrio e clareza.",
    image: sachetDiaVertical,
    icon: Sun,
    color: "from-amber-400 to-orange-500",
    bgGlow: "bg-amber-500/20",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-400",
    bgColor: "bg-amber-500",
    benefits: [
      { icon: Brain, title: "Foco Intenso", description: "Clareza mental e concentração" },
      { icon: Zap, title: "Energia Sustentável", description: "Sem crash ou picos de ansiedade" },
      { icon: Sparkles, title: "Memória Aprimorada", description: "Melhora na memória de trabalho" },
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
    name: "NZT Tarde",
    tagline: "Performance Sustentada",
    period: "12h às 18h",
    heroDescription: "Fórmula para manter a produtividade no período mais desafiador do dia.",
    fullDescription: "Desenvolvemos o NZT Tarde para combater a fadiga pós-almoço e manter seu desempenho cognitivo estável. Nossa fórmula adaptogênica ajuda a resistir ao estresse e manter a clareza mental até o fim do expediente.",
    detailText: "Apresentamos a você o NZT Tarde, o suplemento que visa performance sustentada ao longo do dia. Afinal, queda de energia não precisa fazer parte da sua rotina. Para nós da NZT, tarde é sinônimo de produtividade e resiliência.",
    image: sachetTardeVertical,
    icon: Zap,
    color: "from-emerald-400 to-teal-500",
    bgGlow: "bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-400",
    bgColor: "bg-emerald-500",
    benefits: [
      { icon: Zap, title: "Anti-Fadiga", description: "Combate à queda pós-almoço" },
      { icon: Brain, title: "Clareza Mental", description: "Produtividade sustentada" },
      { icon: Shield, title: "Adaptogênico", description: "Resistência ao estresse" },
      { icon: Sparkles, title: "Decisões Melhores", description: "Melhora na tomada de decisões" },
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
    name: "NZT Noite",
    tagline: "Recuperação Profunda",
    period: "20h às 6h",
    heroDescription: "Fórmula para otimizar a recuperação cognitiva durante o sono.",
    fullDescription: "Desenvolvemos o NZT Noite pensando na recuperação cerebral noturna. Nossa fórmula promove sono reparador e consolidação de memórias, preparando seu cérebro para o próximo dia de alta performance.",
    detailText: "Apresentamos a você o NZT Noite, o suplemento que visa recuperação cognitiva e sono de qualidade. Afinal, descanso não é sinônimo de perda de tempo. Para nós da NZT, noite é sinônimo de regeneração e preparo.",
    image: sachetNoiteVertical,
    icon: Moon,
    color: "from-violet-400 to-indigo-500",
    bgGlow: "bg-violet-500/20",
    borderColor: "border-violet-500/30",
    textColor: "text-violet-400",
    bgColor: "bg-violet-500",
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
    <div className="min-h-screen bg-slate-950">
      <LandingNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/50 via-slate-950 to-slate-950" />
        <div className={`absolute top-20 left-1/4 w-96 h-96 ${product.bgGlow} rounded-full blur-3xl`} />
        <div className={`absolute top-40 right-1/4 w-80 h-80 ${product.bgGlow} rounded-full blur-3xl opacity-50`} />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">Início</Link>
            <span className="text-slate-600">/</span>
            <Link to="/produtos" className="text-slate-400 hover:text-white transition-colors">Produtos</Link>
            <span className="text-slate-600">/</span>
            <span className={product.textColor}>{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative flex items-center justify-center">
              <div className={`absolute inset-0 ${product.bgGlow} blur-3xl opacity-50`} />
              <img 
                src={product.image} 
                alt={product.name}
                className="relative z-10 max-h-[500px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{product.name}</h1>
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${product.color} text-white`}>
                  {product.period}
                </span>
                <span className={`${product.textColor} font-medium`}>{product.tagline}</span>
              </div>
              
              <p className="text-lg text-slate-300 mb-8">{product.heroDescription}</p>
              
              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <span className="text-sm text-slate-500 line-through block">{product.priceOld}</span>
                  <span className="text-3xl font-bold text-white">{product.price}</span>
                  <span className="text-slate-400 ml-2">/mês</span>
                </div>
                <span className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-sm font-semibold">
                  -25% OFF
                </span>
              </div>
              
              {/* CTA */}
              <div className="flex gap-4">
                <Link to="/login?signup=true" className="flex-1">
                  <Button 
                    className={`w-full py-6 text-base font-semibold rounded-xl bg-gradient-to-r ${product.color} hover:opacity-90 text-white shadow-lg transition-all duration-300`}
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
      <section className="py-16 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
            Benefícios do Produto
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl border ${product.borderColor} bg-slate-900/50 backdrop-blur-sm`}
              >
                <div className={`w-12 h-12 rounded-xl ${product.bgGlow} flex items-center justify-center mb-4`}>
                  <benefit.icon className={`w-6 h-6 ${product.textColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.description}</p>
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
              <p className="text-slate-400 leading-relaxed mb-8">
                {product.fullDescription}
              </p>
              <img 
                src={lifestyleProfessional} 
                alt="Lifestyle profissional"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <img 
                src={product.image} 
                alt={product.name}
                className="max-h-64 w-auto object-contain mx-auto drop-shadow-xl"
              />
              <p className={`text-slate-300 leading-relaxed`}>
                {product.detailText.split(product.name).map((part, i, arr) => (
                  i < arr.length - 1 ? (
                    <span key={i}>{part}<span className={product.textColor}>{product.name}</span></span>
                  ) : part
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contains / Does Not Contain Section */}
      <section className="py-16 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Contains */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Possui</h3>
              <div className="space-y-3">
                {product.contains.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${product.textColor}`} />
                    <span className={product.textColor}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image */}
            <div className="flex justify-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="max-h-48 w-auto object-contain drop-shadow-xl"
              />
            </div>
            
            {/* Does Not Contain */}
            <div className="text-right">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Não Possui</h3>
              <div className="space-y-3">
                {product.doesNotContain.map((item, index) => (
                  <div key={index} className="flex items-center justify-end gap-3">
                    <span className="text-slate-400">{item}</span>
                    <X className="w-5 h-5 text-red-400" />
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
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Como Usar</h2>
              <p className={`${product.textColor} font-medium mb-4`}>{product.usage.instruction}</p>
              <p className="text-slate-400 mb-6">{product.usage.recommendation}</p>
              <p className="text-xs text-slate-500 leading-relaxed uppercase mb-6">
                {product.usage.warning}
              </p>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Modo de conservação:</h4>
                <p className="text-sm text-slate-500">{product.usage.storage}</p>
              </div>
            </div>
            <div>
              <img 
                src={sachetPouringWater} 
                alt="Como usar o sachê"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Ingredients Section */}
      <section className={`py-16 px-4 bg-gradient-to-r ${product.color} relative`}>
        <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ingredients List */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Ingredientes</h2>
              <p className="text-white/80 leading-relaxed">
                {product.ingredientsList}
              </p>
            </div>
            
            {/* Nutrition Table */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4">Tabela Nutricional</h3>
              <div className="text-sm text-white/80 mb-4">
                <p>Quantidade por porção: 5g (1 sachê)</p>
                <p>Porções por embalagem: 30</p>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-2 text-white/60 text-sm font-normal">Nutriente</th>
                    <th className="text-right py-2 text-white/60 text-sm font-normal">Quantidade</th>
                    <th className="text-right py-2 text-white/60 text-sm font-normal">%VD</th>
                  </tr>
                </thead>
                <tbody>
                  {product.nutritionTable.map((row, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="py-2 text-white">{row.nutrient}</td>
                      <td className="py-2 text-white text-right">{row.amount}</td>
                      <td className="py-2 text-white text-right">{row.vd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-white/60 mt-4">
                (*) % Valores Diários de referência com base em uma dieta de 2.000kcal ou 8.400kJ. Seus valores diários podem ser maiores ou menores, dependendo das suas necessidades energéticas. (**) Valores diários não estabelecidos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Pronto para otimizar seu dia?</h2>
          <p className="text-slate-400 mb-8">
            Experimente o {product.name} e sinta a diferença na sua performance cognitiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login?signup=true">
              <Button 
                className={`px-8 py-6 text-base font-semibold rounded-xl bg-gradient-to-r ${product.color} hover:opacity-90 text-white shadow-lg transition-all duration-300`}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Comprar Agora
              </Button>
            </Link>
            <Link to="/produtos">
              <Button 
                variant="outline"
                className="px-8 py-6 text-base font-semibold rounded-xl border-slate-700 text-slate-300 hover:bg-slate-800 transition-all duration-300"
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
