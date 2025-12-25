import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sun, Moon, Sunset, Shield, Sparkles, ArrowRight, Timer } from "lucide-react";
import { LandingNav, Footer } from "@/components/landing";

import sachetDia from "@/assets/sachet-dia.png";
import sachetTarde from "@/assets/sachet-tarde.png";
import sachetNoite from "@/assets/sachet-noite.png";

const sachets = [
  {
    id: "dia",
    name: "VYR BOOT",
    icon: Sun,
    tagline: "Ativação & Clareza",
    description: "Máxima performance cognitiva durante o dia. Ideal para trabalho intenso e tomada de decisões.",
    color: "text-vyr-gray-100",
    borderColor: "border-vyr-gray-600/30",
    bgColor: "bg-vyr-gray-800/50",
    image: sachetDia,
    benefits: ["Foco intenso", "Clareza mental", "Memória de trabalho"],
    keyIngredients: ["Citicolina 250mg", "Bacopa 400mg", "Creatina 3g"],
  },
  {
    id: "tarde",
    name: "VYR HOLD",
    icon: Sunset,
    tagline: "Sustentação & Resiliência",
    description: "Mantém o flow produtivo e resistência mental até o final do expediente.",
    color: "text-vyr-gray-400",
    borderColor: "border-vyr-gray-500/30",
    bgColor: "bg-vyr-gray-700/50",
    image: sachetTarde,
    benefits: ["Energia sustentada", "Anti-fadiga", "Resistência mental"],
    keyIngredients: ["Teacrina 100mg", "L-taurina 250mg", "Bicarbonato 1.4g"],
  },
  {
    id: "noite",
    name: "VYR CLEAR",
    icon: Moon,
    tagline: "Recuperação Cognitiva",
    description: "Otimiza consolidação da memória e prepara o cérebro para recuperação profunda.",
    color: "text-vyr-cold-blue",
    borderColor: "border-vyr-cold-blue/30",
    bgColor: "bg-vyr-cold-blue/10",
    image: sachetNoite,
    benefits: ["Sono reparador", "Consolidação da memória", "Neuroproteção"],
    keyIngredients: ["NAC 600mg", "Ashwagandha 300mg", "Magnésio 200mg"],
  },
];

const plans = [
  {
    id: "trimestral",
    name: "Trimestral",
    months: 3,
    sachetsTotal: 90,
    priceOriginal: 1191,
    price: 1071,
    pricePerMonth: 357,
    discount: 10,
    highlight: false,
  },
  {
    id: "semestral",
    name: "Semestral",
    months: 6,
    sachetsTotal: 180,
    priceOriginal: 2382,
    price: 1906,
    pricePerMonth: 318,
    discount: 20,
    highlight: true,
  },
  {
    id: "anual",
    name: "Anual",
    months: 12,
    sachetsTotal: 360,
    priceOriginal: 4764,
    price: 3334,
    pricePerMonth: 278,
    discount: 30,
    highlight: false,
  },
];

export default function RotinaCompleta() {
  const [selectedPlan, setSelectedPlan] = useState("semestral");

  return (
    <div className="min-h-screen bg-vyr-black">
      <LandingNav />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-vyr-gray-900/50 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-vyr-gray-800/50 border border-vyr-gray-700/50 text-vyr-gray-300 text-xs sm:text-sm font-mono mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Rotina Cognitiva Completa
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-vyr-white mb-4 sm:mb-6">
              Otimização Cognitiva
              <span className="block font-mono tracking-wider text-vyr-gray-300">
                24 Horas por Dia
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-vyr-gray-400 max-w-3xl mx-auto px-2">
              Os 3 sachês trabalhando em sinergia: ativação pela manhã, sustentação à tarde e recuperação à noite. O sistema como foi desenhado para funcionar.
            </p>
          </div>

          {/* 3 Sachets Overview */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
            {sachets.map((sachet) => (
              <div
                key={sachet.id}
                className={`relative rounded-2xl p-6 bg-vyr-gray-900/80 border ${sachet.borderColor} backdrop-blur-sm`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl ${sachet.bgColor} flex items-center justify-center`}>
                    <sachet.icon className={`w-7 h-7 ${sachet.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-mono font-bold tracking-wide ${sachet.color}`}>{sachet.name}</h3>
                    <p className="text-vyr-gray-400 text-sm">{sachet.tagline}</p>
                  </div>
                </div>

                <p className="text-vyr-gray-300 text-sm mb-4 leading-relaxed">
                  {sachet.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-4">
                  {sachet.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 ${sachet.color}`} />
                      <span className="text-vyr-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Key Ingredients */}
                <div className="pt-4 border-t border-vyr-gray-700/50">
                  <p className="text-xs text-vyr-gray-500 mb-2 uppercase tracking-wider font-mono">Principais Ativos</p>
                  <div className="flex flex-wrap gap-2">
                    {sachet.keyIngredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded-full ${sachet.bgColor} ${sachet.color} font-mono`}
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link to details */}
                <Link
                  to={`/produtos/${sachet.id}`}
                  className={`mt-4 inline-flex items-center gap-1 text-sm ${sachet.color} hover:underline`}
                >
                  Ver detalhes <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Selection */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-vyr-black to-vyr-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-vyr-white mb-3 sm:mb-4">
              Escolha seu Plano
            </h2>
            <p className="text-sm sm:text-base text-vyr-gray-400 max-w-2xl mx-auto px-2">
              Quanto maior o período, maior o desconto. Todos os planos incluem os 3 sachês e acesso à plataforma digital.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative rounded-2xl p-1 transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? "bg-vyr-white scale-[1.02]"
                    : "bg-vyr-gray-700/50 hover:bg-vyr-gray-700"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-3 py-1 bg-vyr-gray-100 text-vyr-black text-xs font-mono font-semibold rounded-full uppercase tracking-wide">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className={`relative bg-vyr-gray-900 rounded-xl p-6 h-full ${
                  selectedPlan === plan.id ? "border border-vyr-gray-500/50" : ""
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Timer className="w-5 h-5 text-vyr-gray-400" />
                      <h3 className="text-xl font-bold text-vyr-white">{plan.name}</h3>
                    </div>
                    <span className="text-sm font-semibold text-vyr-gray-300 bg-vyr-gray-800 px-2 py-1 rounded-full font-mono">
                      -{plan.discount}%
                    </span>
                  </div>

                  <p className="text-vyr-gray-400 text-sm mb-4">
                    {plan.months} meses • {plan.sachetsTotal} sachês
                  </p>

                  <div className="mb-4">
                    <span className="text-sm text-vyr-gray-500 line-through">
                      R$ {plan.priceOriginal.toLocaleString("pt-BR")}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-vyr-white">
                        R$ {plan.price.toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <p className="text-sm text-vyr-gray-400 mt-1">
                      ou R$ {plan.pricePerMonth}/mês
                    </p>
                  </div>

                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === plan.id
                      ? "border-vyr-white bg-vyr-white"
                      : "border-vyr-gray-600"
                  }`}>
                    {selectedPlan === plan.id && (
                      <Check className="w-4 h-4 text-vyr-black" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* What's included */}
          <div className="bg-vyr-gray-900/50 rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-vyr-gray-700/50 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-vyr-white mb-4 sm:mb-6">O que está incluído:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "VYR BOOT + VYR HOLD + VYR CLEAR",
                "Acesso à plataforma digital",
                "Registro de doses e evolução",
                "Histórico de métricas pessoais",
                "Entrega expressa grátis",
                "Garantia de 30 dias",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-vyr-gray-300 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-vyr-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-vyr-gray-800/50 border border-vyr-gray-700/50">
              <p className="text-xs sm:text-sm text-vyr-gray-400">
                <span className="text-vyr-gray-300 font-medium">Nota:</span> Para recursos avançados como Correlações Inteligentes e Insights de AI, confira o{" "}
                <Link to="/sistema-completo" className="text-vyr-white hover:underline font-mono">
                  VYR SYSTEM
                </Link>
                .
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/login?signup=true">
              <Button className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-mono bg-vyr-white hover:bg-vyr-gray-100 text-vyr-black rounded-lg transition-all duration-300 hover:scale-[1.02]">
                Começar Rotina Completa
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
            <p className="text-xs sm:text-sm text-vyr-gray-500 mt-4 flex items-center justify-center gap-2">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Compra 100% segura • Garantia de 30 dias
            </p>
          </div>
        </div>
      </section>

      {/* Upgrade Banner */}
      <section className="py-10 sm:py-16 bg-vyr-gray-900 border-y border-vyr-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-vyr-white mb-3 sm:mb-4">
            Quer o máximo de performance?
          </h3>
          <p className="text-sm sm:text-base text-vyr-gray-400 mb-5 sm:mb-6 max-w-2xl mx-auto px-2">
            O VYR SYSTEM inclui VYR NODE para monitoramento biométrico contínuo, correlações inteligentes entre suas métricas e insights personalizados por AI.
          </p>
          <Link to="/sistema-completo">
            <Button variant="outline" className="w-full sm:w-auto border-vyr-gray-600 text-vyr-white hover:bg-vyr-gray-800 px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base font-mono">
              Conhecer VYR SYSTEM
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}