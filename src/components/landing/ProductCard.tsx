import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Shield, Circle, Monitor, Sun, Moon, Sunset, Star, Sparkles } from "lucide-react";

const individualProducts = [{
  id: "boot",
  name: "VYR BOOT",
  icon: Sun,
  tagline: "Ativação & Clareza",
  description: "Máxima performance cognitiva durante o dia. Ideal para trabalho intenso e tomada de decisões.",
  bgColor: "bg-vyr-gray-100",
  textColor: "text-vyr-black",
  borderColor: "border-vyr-gray-300"
}, {
  id: "hold",
  name: "VYR HOLD",
  icon: Sunset,
  tagline: "Sustentação & Resiliência",
  description: "Mantém o flow produtivo e resistência mental até o final do expediente.",
  bgColor: "bg-vyr-gray-600",
  textColor: "text-vyr-white",
  borderColor: "border-vyr-gray-500"
}, {
  id: "clear",
  name: "VYR CLEAR",
  icon: Moon,
  tagline: "Recuperação Cognitiva",
  description: "Otimiza consolidação da memória e prepara o cérebro para recuperação profunda.",
  bgColor: "bg-vyr-coldBlue",
  textColor: "text-vyr-white",
  borderColor: "border-vyr-gray-600"
}];

const offers = [{
  id: "unitario",
  tier: "Porta de Entrada",
  name: "Produto Unitário",
  description: "Escolha um produto individual para começar sua jornada de performance cognitiva.",
  price: "R$ 147",
  priceNote: "por produto",
  includes: ["1 produto à escolha (BOOT, HOLD ou CLEAR)", "Acesso à plataforma digital básica", "30 dias de suprimento"],
  cta: "Escolher Produto",
  highlight: false,
  link: "/produtos"
}, {
  id: "rotina",
  tier: "Mais Vendido",
  name: "Rotina Cognitiva",
  description: "A combinação completa para otimização 24 horas. O sistema como foi desenhado.",
  originalPrice: "R$ 441",
  price: "R$ 397",
  priceNote: "por mês",
  discount: "10% OFF",
  includes: ["VYR BOOT + HOLD + CLEAR", "Acesso à plataforma digital básica", "Registro de doses e evolução", "Entrega expressa grátis"],
  cta: "Quero a Rotina Completa",
  highlight: true,
  link: "/rotina-completa"
}, {
  id: "premium",
  tier: "Experiência Completa",
  name: "VYR SYSTEM",
  description: "Performance máxima: Suplementação + VYR NODE + Plataforma Premium com AI.",
  originalPrice: "R$ 6.561",
  price: "R$ 3.937",
  priceNote: "12 meses",
  discount: "40% OFF",
  includes: ["12 meses: VYR BOOT + HOLD + CLEAR", "VYR NODE (sensor contínuo)", "Plataforma Premium", "Correlações inteligentes (exclusivo)", "Insights de AI (exclusivo)", "Entrega expressa grátis"],
  cta: "Quero o Sistema Completo",
  highlight: false,
  premium: true,
  link: "/sistema-completo"
}];

export function ProductCard() {
  return (
    <section id="produto" className="py-24 bg-vyr-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-vyr-gray-500 uppercase tracking-widest mb-3 font-mono">
            Modelo Simplificado
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-vyr-white mb-4">
            Escolha sua Entrada no Sistema
          </h2>
          <p className="text-vyr-gray-400 max-w-2xl mx-auto">
            Poucas opções. Clareza imediata. Escada simples de valor.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {offers.map(offer => (
            <div key={offer.id} className={`relative rounded-sm p-[1px] ${offer.premium ? "bg-vyr-white" : offer.highlight ? "bg-vyr-gray-400" : "bg-vyr-gray-700"}`}>
              <div className={`relative bg-vyr-gray-900 rounded-sm p-6 h-full flex flex-col`}>
                {/* Tier Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-sm uppercase tracking-wider ${offer.premium ? "bg-vyr-white text-vyr-black" : offer.highlight ? "bg-vyr-gray-300 text-vyr-black" : "bg-vyr-gray-800 text-vyr-gray-400"}`}>
                    {offer.premium && <Star className="w-3 h-3" />}
                    {offer.highlight && <Sparkles className="w-3 h-3" />}
                    {offer.tier}
                  </span>
                </div>

                {/* Name & Description */}
                <h3 className={`text-2xl font-medium mb-2 font-mono tracking-wider ${offer.premium ? "text-vyr-white" : "text-vyr-white"}`}>
                  {offer.name}
                </h3>
                <p className="text-vyr-gray-400 text-sm mb-6 leading-relaxed">
                  {offer.description}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  {offer.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-vyr-gray-600 line-through">{offer.originalPrice}</span>
                      <span className="text-xs font-mono text-vyr-gray-300 bg-vyr-gray-800 px-2 py-0.5 rounded-sm">
                        {offer.discount}
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-medium ${offer.premium ? "text-vyr-white" : "text-vyr-white"}`}>
                      {offer.price}
                    </span>
                    <span className="text-vyr-gray-500 text-sm">{offer.priceNote}</span>
                  </div>
                </div>

                {/* Includes */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {offer.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 ${offer.premium ? "text-vyr-white" : "text-vyr-gray-400"}`} />
                      <span className="text-vyr-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to={offer.link}>
                  <Button className={`w-full py-6 text-base font-medium rounded-sm transition-all duration-300 ${offer.premium ? "bg-vyr-white hover:bg-vyr-gray-100 text-vyr-black" : offer.highlight ? "bg-vyr-gray-200 hover:bg-vyr-white text-vyr-black" : "bg-vyr-gray-800 hover:bg-vyr-gray-700 text-vyr-white border border-vyr-gray-700"}`}>
                    {offer.cta}
                  </Button>
                </Link>

                {/* Security note for premium */}
                {offer.premium && (
                  <p className="text-xs text-vyr-gray-500 mt-4 flex items-center justify-center gap-1.5">
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
          <p className="text-sm text-vyr-gray-500">Conheça cada produto do ciclo cognitivo</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {individualProducts.map(product => (
            <div key={product.id} className={`p-5 rounded-sm bg-vyr-gray-800 border ${product.borderColor} flex items-center gap-4`}>
              <div className={`w-12 h-12 rounded-sm ${product.bgColor} flex items-center justify-center`}>
                <product.icon className={`w-6 h-6 ${product.textColor}`} />
              </div>
              <div>
                <h4 className="font-medium text-vyr-white font-mono tracking-wider">{product.name}</h4>
                <p className="text-vyr-gray-400 text-sm">{product.tagline}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform note */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-sm bg-vyr-gray-800 border border-vyr-gray-700">
            <div className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-vyr-gray-400" />
              <span className="text-vyr-gray-300 text-sm">
                <span className="text-vyr-white font-medium">Plataforma digital básica</span> inclusa em todos os planos
              </span>
            </div>
            <span className="text-vyr-gray-600 hidden sm:inline">•</span>
            <span className="text-vyr-gray-400 text-sm">
              <span className="text-vyr-gray-300 font-medium">Correlações e Insights AI</span> exclusivos do VYR SYSTEM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
