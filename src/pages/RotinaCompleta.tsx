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
    name: "NZT Dia",
    icon: Sun,
    tagline: "Ativação & Clareza",
    description: "Máxima performance cognitiva durante o dia. Ideal para trabalho intenso e tomada de decisões.",
    color: "text-amber-500",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/10",
    image: sachetDia,
    benefits: ["Foco intenso", "Clareza mental", "Memória de trabalho"],
    keyIngredients: ["Citicolina 250mg", "Bacopa 400mg", "Creatina 3g"],
  },
  {
    id: "tarde",
    name: "NZT Tarde",
    icon: Sunset,
    tagline: "Sustentação & Resiliência",
    description: "Mantém o flow produtivo e resistência mental até o final do expediente.",
    color: "text-purple-500",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10",
    image: sachetTarde,
    benefits: ["Energia sustentada", "Anti-fadiga", "Resistência mental"],
    keyIngredients: ["Teacrina 100mg", "L-taurina 250mg", "Bicarbonato 1.4g"],
  },
  {
    id: "noite",
    name: "NZT Noite",
    icon: Moon,
    tagline: "Recuperação Cognitiva",
    description: "Otimiza consolidação da memória e prepara o cérebro para recuperação profunda.",
    color: "text-indigo-500",
    borderColor: "border-indigo-500/30",
    bgColor: "bg-indigo-500/10",
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
    <div className="min-h-screen bg-slate-950">
      <LandingNav />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Rotina Cognitiva Completa
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Otimização Cognitiva
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                24 Horas por Dia
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Os 3 sachês trabalhando em sinergia: ativação pela manhã, sustentação à tarde e recuperação à noite. O sistema como foi desenhado para funcionar.
            </p>
          </div>

          {/* 3 Sachets Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {sachets.map((sachet) => (
              <div
                key={sachet.id}
                className={`relative rounded-2xl p-6 bg-slate-900/80 border ${sachet.borderColor} backdrop-blur-sm`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl ${sachet.bgColor} flex items-center justify-center`}>
                    <sachet.icon className={`w-7 h-7 ${sachet.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${sachet.color}`}>{sachet.name}</h3>
                    <p className="text-slate-400 text-sm">{sachet.tagline}</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {sachet.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-4">
                  {sachet.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 ${sachet.color}`} />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Key Ingredients */}
                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Principais Ativos</p>
                  <div className="flex flex-wrap gap-2">
                    {sachet.keyIngredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded-full ${sachet.bgColor} ${sachet.color}`}
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
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Escolha seu Plano
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Quanto maior o período, maior o desconto. Todos os planos incluem os 3 sachês e acesso à plataforma digital.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative rounded-2xl p-1 transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? "bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 scale-[1.02]"
                    : "bg-slate-700/50 hover:bg-slate-700"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className={`relative bg-slate-900 rounded-xl p-6 h-full ${
                  selectedPlan === plan.id ? "border border-violet-500/30" : ""
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Timer className="w-5 h-5 text-violet-400" />
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    </div>
                    <span className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                      -{plan.discount}%
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-4">
                    {plan.months} meses • {plan.sachetsTotal} sachês
                  </p>

                  <div className="mb-4">
                    <span className="text-sm text-slate-500 line-through">
                      R$ {plan.priceOriginal.toLocaleString("pt-BR")}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">
                        R$ {plan.price.toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mt-1">
                      ou R$ {plan.pricePerMonth}/mês
                    </p>
                  </div>

                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === plan.id
                      ? "border-violet-500 bg-violet-500"
                      : "border-slate-600"
                  }`}>
                    {selectedPlan === plan.id && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* What's included */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50 mb-8">
            <h3 className="text-xl font-bold text-white mb-6">O que está incluído:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "NZT Dia + NZT Tarde + NZT Noite",
                "Acesso à plataforma digital",
                "Registro de doses e evolução",
                "Histórico de métricas pessoais",
                "Entrega expressa grátis",
                "Garantia de 30 dias",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-violet-400" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <p className="text-sm text-slate-400">
                <span className="text-amber-400 font-medium">Nota:</span> Para recursos avançados como Correlações Inteligentes e Insights de AI, confira o{" "}
                <Link to="/sistema-completo" className="text-violet-400 hover:underline">
                  Sistema Completo
                </Link>
                .
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/login?signup=true">
              <Button className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 rounded-xl transition-all duration-300 hover:scale-[1.02]">
                Começar Rotina Completa
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <p className="text-sm text-slate-500 mt-4 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Compra 100% segura • Garantia de 30 dias
            </p>
          </div>
        </div>
      </section>

      {/* Upgrade Banner */}
      <section className="py-16 bg-gradient-to-r from-fuchsia-900/20 via-violet-900/20 to-indigo-900/20 border-y border-fuchsia-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Quer o máximo de performance?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            O Sistema Completo inclui Smart Ring para monitoramento biométrico contínuo, correlações inteligentes entre suas métricas e insights personalizados por AI.
          </p>
          <Link to="/sistema-completo">
            <Button variant="outline" className="border-fuchsia-500/50 text-fuchsia-400 hover:bg-fuchsia-500/10 px-8 py-5 text-base">
              Conhecer Sistema Completo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
