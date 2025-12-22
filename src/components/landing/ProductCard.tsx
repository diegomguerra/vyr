import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Shield, Circle, Monitor, Sun, Moon, Sunset, Star } from "lucide-react";

const individualProducts = [
  {
    id: "dia",
    name: "NZT Dia",
    icon: Sun,
    tagline: "Ativação & Clareza",
    description: "Máxima performance cognitiva durante o dia. Ideal para trabalho intenso e tomada de decisões.",
    color: "text-amber-500",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/10",
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
  },
];

const offers = [
  {
    id: "unitario",
    tier: "Porta de Entrada",
    name: "Produto Unitário",
    description: "Escolha um produto individual para começar sua jornada de performance cognitiva.",
    price: "R$ 147",
    priceNote: "por produto",
    includes: ["1 produto à escolha (Dia, Tarde ou Noite)", "Acesso à plataforma digital básica", "30 dias de suprimento"],
    cta: "Escolher Produto",
    highlight: false,
    link: "/produtos",
  },
  {
    id: "rotina",
    tier: "Mais Vendido",
    name: "Rotina Cognitiva",
    description: "A combinação completa para otimização 24 horas. O sistema como foi desenhado.",
    originalPrice: "R$ 441",
    price: "R$ 397",
    priceNote: "por mês",
    discount: "10% OFF",
    includes: ["NZT Dia + Tarde + Noite", "Acesso à plataforma digital básica", "Registro de doses e evolução", "Entrega expressa grátis"],
    cta: "Quero a Rotina Completa",
    highlight: true,
    link: "/rotina-completa",
  },
  {
    id: "premium",
    tier: "Experiência Completa",
    name: "Sistema Completo",
    description: "Performance máxima: Suplementação + Smart Ring + Plataforma Premium com AI.",
    originalPrice: "R$ 6.561",
    price: "R$ 3.937",
    priceNote: "12 meses",
    discount: "40% OFF",
    includes: [
      "12 meses: NZT Dia + Tarde + Noite",
      "Smart Ring (sensor contínuo)",
      "Plataforma Premium",
      "Correlações inteligentes (exclusivo)",
      "Insights de AI (exclusivo)",
      "Entrega expressa grátis",
    ],
    cta: "Quero o Sistema Completo",
    highlight: false,
    premium: true,
    link: "/sistema-completo",
  },
];

export function ProductCard() {
  return (
    <section id="produto" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-violet-400 uppercase tracking-widest mb-3 font-medium">
            Modelo Simplificado
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Escolha sua Entrada no Sistema
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Poucas opções. Clareza imediata. Escada simples de valor.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`relative rounded-2xl p-1 ${
                offer.premium 
                  ? "bg-gradient-to-br from-fuchsia-600 via-violet-600 to-indigo-600" 
                  : offer.highlight 
                    ? "bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600"
                    : "bg-slate-700/50"
              }`}
            >
              {/* Glow for premium/highlight */}
              {(offer.premium || offer.highlight) && (
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-fuchsia-500/30 blur-xl rounded-2xl" />
              )}

              <div className={`relative bg-slate-900 rounded-xl p-6 h-full flex flex-col ${
                offer.premium ? "border border-fuchsia-500/20" : ""
              }`}>
                {/* Tier Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider ${
                    offer.premium 
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white"
                      : offer.highlight
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                        : "bg-slate-700 text-slate-300"
                  }`}>
                    {offer.premium && <Star className="w-3 h-3" />}
                    {offer.highlight && <Sparkles className="w-3 h-3" />}
                    {offer.tier}
                  </span>
                </div>

                {/* Name & Description */}
                <h3 className={`text-2xl font-bold mb-2 ${
                  offer.premium 
                    ? "bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"
                    : "text-white"
                }`}>
                  {offer.name}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {offer.description}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  {offer.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-slate-500 line-through">{offer.originalPrice}</span>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        {offer.discount}
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-bold ${offer.premium ? "text-fuchsia-400" : "text-white"}`}>
                      {offer.price}
                    </span>
                    <span className="text-slate-500 text-sm">{offer.priceNote}</span>
                  </div>
                </div>

                {/* Includes */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {offer.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 ${
                        offer.premium ? "text-fuchsia-400" : offer.highlight ? "text-violet-400" : "text-emerald-400"
                      }`} />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to={offer.link}>
                  <Button 
                    className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                      offer.premium
                        ? "bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 hover:from-fuchsia-700 hover:via-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-fuchsia-500/25 hover:shadow-xl hover:shadow-fuchsia-500/30 hover:scale-[1.02]"
                        : offer.highlight
                          ? "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02]"
                          : "bg-slate-700 hover:bg-slate-600 text-white"
                    }`}
                  >
                    {offer.cta}
                  </Button>
                </Link>

                {/* Security note for premium */}
                {offer.premium && (
                  <p className="text-xs text-slate-500 mt-4 flex items-center justify-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    Compra 100% segura • Garantia de 30 dias
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Individual Products Reference */}
        <div className="text-center mb-8">
          <p className="text-slate-500 text-sm">Conheça cada produto do ciclo cognitivo</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {individualProducts.map((product) => (
            <div
              key={product.id}
              className={`p-5 rounded-xl bg-slate-800/30 border ${product.borderColor} flex items-center gap-4`}
            >
              <div className={`w-12 h-12 rounded-xl ${product.bgColor} flex items-center justify-center`}>
                <product.icon className={`w-6 h-6 ${product.color}`} />
              </div>
              <div>
                <h4 className={`font-semibold ${product.color}`}>{product.name}</h4>
                <p className="text-slate-400 text-sm">{product.tagline}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform note */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <div className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-violet-400" />
              <span className="text-slate-300 text-sm">
                <span className="text-white font-medium">Plataforma digital básica</span> inclusa em todos os planos
              </span>
            </div>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 text-sm">
              <span className="text-fuchsia-400 font-medium">Correlações e Insights AI</span> exclusivos do Sistema Completo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
