import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Shield, Star, Cpu } from "lucide-react";
const offers = [{
  id: "vyr-system",
  tier: "Ponto de Partida",
  name: "VYR SYSTEM",
  description: "Para quem quer começar com estrutura, clareza e consistência.",
  shortText: "O essencial para reduzir atrito mental e criar constância diária.",
  plans: [{
    label: "Mensal",
    note: "1 caixa (30 unidades)",
    price: "R$ 397"
  }, {
    label: "Trimestral",
    note: "3 caixas",
    price: "R$ 1.071",
    discount: "10% OFF"
  }, {
    label: "Anual",
    note: "12 caixas",
    price: "R$ 3.576",
    discount: "25% OFF",
    highlight: true
  }],
  includes: ["Protocolo VYR completo (BOOT + HOLD + CLEAR)", "Plataforma VYR (registro, histórico e evolução)", "Rotina guiada de uso", "Entrega expressa"],
  cta: "Escolher VYR SYSTEM",
  microcopy: "O sistema funciona desde o primeiro dia. A evolução acontece com o tempo.",
  highlight: false,
  link: "/rotina-completa"
}, {
  id: "vyr-system-node",
  tier: "Experiência Completa",
  name: "VYR SYSTEM Node",
  description: "Para quem quer aprofundar a leitura e acelerar o aprendizado do sistema.",
  shortText: "Quando o sistema deixa de ser fixo e passa a se adaptar a você.",
  planNote: "Plano exclusivamente anual",
  price: "R$ 5.976",
  priceNote: "12 meses",
  includes: ["VYR SYSTEM — 12 meses", "VYR Node (Smart Ring) — monitoramento contínuo", "Plataforma Avançada", "• Correlações inteligentes", "• Insights com AI", "• Leitura integrada entre fisiologia e suplementação", "Entrega expressa completa"],
  cta: "Escolher o VYR SYSTEM Node",
  microcopy: "Com o Node, o VYR deixa de seguir um protocolo fixo e passa a se adaptar a você.",
  premium: true,
  link: "/sistema-completo"
}];
export function ProductCard() {
  return <section id="produto" className="py-24 bg-vyr-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-vyr-gray-500 uppercase tracking-widest mb-3">
            Escolha seu Plano
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-vyr-white mb-4">
            Comece sua Jornada
          </h2>
          <p className="text-vyr-gray-400 max-w-2xl mx-auto">
            Duas opções. Uma escada clara de valor.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* VYR SYSTEM Card */}
          <div className="relative rounded-sm p-[1px] bg-vyr-gray-700">
            <div className="relative rounded-sm p-8 h-full flex flex-col bg-primary-foreground">
              {/* Tier Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-sm uppercase tracking-wider bg-vyr-gray-800 text-primary-foreground">
                  {offers[0].tier}
                </span>
              </div>

              {/* Name & Description */}
              <h3 className="text-3xl font-medium mb-3 tracking-wider text-primary">
                {offers[0].name}
              </h3>
              <p className="text-vyr-gray-400 text-sm mb-2 leading-relaxed">
                {offers[0].description}
              </p>
              <p className="text-vyr-gray-500 text-xs mb-8 italic">
                {offers[0].shortText}
              </p>

              {/* Plans */}
              <div className="space-y-3 mb-8">
                {offers[0].plans.map((plan, index) => <div key={index} className={`flex items-center justify-between p-4 rounded-sm border ${plan.highlight ? "border-vyr-gray-500 bg-vyr-gray-800" : "border-vyr-gray-700 bg-vyr-gray-800/50"}`}>
                    <div>
                      <span className="text-vyr-white font-medium">{plan.label}</span>
                      <span className="text-sm ml-2 text-primary-foreground">— {plan.note}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {plan.discount && <span className="text-xs text-vyr-gray-300 bg-vyr-gray-700 px-2 py-0.5 rounded-sm">
                          {plan.discount}
                        </span>}
                      <span className="text-vyr-white font-medium">{plan.price}</span>
                    </div>
                  </div>)}
              </div>

              {/* Includes */}
              <ul className="space-y-3 mb-8 flex-grow">
                {offers[0].includes.map((item, index) => <li key={index} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 mt-0.5 text-vyr-gray-400" />
                    <span className="text-vyr-gray-300">{item}</span>
                  </li>)}
              </ul>

              {/* CTA */}
              <Link to={offers[0].link}>
                <Button className="w-full py-6 text-base font-medium rounded-sm transition-all duration-300 bg-vyr-gray-800 hover:bg-vyr-gray-700 text-vyr-white border border-vyr-gray-700">
                  {offers[0].cta}
                </Button>
              </Link>

              {/* Microcopy */}
              
            </div>
          </div>

          {/* VYR SYSTEM Node Card */}
          <div className="relative rounded-sm p-[1px] bg-vyr-white">
            <div className="relative bg-vyr-gray-900 rounded-sm p-8 h-full flex flex-col">
              {/* Tier Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-sm uppercase tracking-wider bg-vyr-white text-vyr-black">
                  <Star className="w-3 h-3" />
                  {offers[1].tier}
                </span>
              </div>

              {/* Name & Description */}
              <h3 className="text-3xl font-medium mb-3 tracking-wider text-vyr-white">
                {offers[1].name}
              </h3>
              <p className="text-vyr-gray-400 text-sm mb-2 leading-relaxed">
                {offers[1].description}
              </p>
              <p className="text-vyr-gray-500 text-xs mb-4 italic">
                {offers[1].shortText}
              </p>

              {/* Plan Note */}
              <p className="text-xs text-vyr-gray-500 uppercase tracking-wider mb-6">
                {offers[1].planNote}
              </p>

              {/* Pricing */}
              <div className="mb-8 p-4 rounded-sm bg-vyr-gray-800 border border-vyr-gray-700">
                <div className="flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-vyr-white" />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-medium text-vyr-white">{offers[1].price}</span>
                      <span className="text-vyr-gray-500 text-sm">{offers[1].priceNote}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Includes */}
              <ul className="space-y-3 mb-8 flex-grow">
                {offers[1].includes.map((item, index) => <li key={index} className={`flex items-start gap-3 text-sm ${item.startsWith("•") ? "pl-4" : ""}`}>
                    {!item.startsWith("•") && <Check className="w-4 h-4 mt-0.5 text-vyr-white" />}
                    <span className={item.startsWith("•") ? "text-vyr-gray-400" : "text-vyr-gray-300"}>
                      {item}
                    </span>
                  </li>)}
              </ul>

              {/* CTA */}
              <Link to={offers[1].link}>
                <Button className="w-full py-6 text-base font-medium rounded-sm transition-all duration-300 bg-vyr-white hover:bg-vyr-gray-100 text-vyr-black">
                  {offers[1].cta}
                </Button>
              </Link>

              {/* Microcopy */}
              

              {/* Security note */}
              
            </div>
          </div>
        </div>

        {/* Final Positioning Block */}
        <div className="text-center px-4 py-12 rounded-sm bg-vyr-gray-800 border border-vyr-gray-700">
          <p className="text-vyr-gray-400 text-base mb-4 leading-relaxed max-w-2xl mx-auto">
            Nem todo mundo precisa do Node no início.<br />
            <span className="text-vyr-white font-medium">Mas quem leva constância a sério, chega até ele.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <span className="text-vyr-gray-500">
              O <span className="text-vyr-white font-medium">VYR SYSTEM</span> é o ponto de partida.
            </span>
            <span className="hidden sm:block text-vyr-gray-600">→</span>
            <span className="text-vyr-gray-500">
              O <span className="text-vyr-white font-medium">VYR SYSTEM Node</span> é o destino natural.
            </span>
          </div>
        </div>
      </div>
    </section>;
}