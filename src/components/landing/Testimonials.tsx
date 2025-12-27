import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafael M.",
    role: "Trader | B3",
    content: "Na abertura do mercado, cada segundo conta. VYR me dá a clareza que preciso para tomar decisões em milissegundos. Minha taxa de acerto aumentou significativamente.",
    highlight: "+42% na taxa de acerto",
    avatar: "RM",
  },
  {
    name: "Carolina S.",
    role: "Tech Lead | Unicórnio BR",
    content: "Code reviews de 4 horas sem perder a concentração. Finalmente consigo entrar em flow profundo sem aquela fadiga mental do meio da tarde.",
    highlight: "4h de deep work contínuo",
    avatar: "CS",
  },
  {
    name: "André L.",
    role: "Founder & CEO",
    content: "Reuniões das 8h às 22h são minha rotina. Com VYR, mantenho a mesma energia e clareza na última call do dia que tinha na primeira.",
    highlight: "14h de clareza sustentada",
    avatar: "AL",
  },
  {
    name: "Juliana F.",
    role: "Investment Analyst | Faria Lima",
    content: "Analisar 50 páginas de relatórios financeiros exige foco absoluto. A diferença é sentir que meu cérebro está funcionando no máximo potencial.",
    highlight: "3x mais relatórios/dia",
    avatar: "JF",
  },
  {
    name: "Pedro H.",
    role: "Software Engineer | FAANG",
    content: "Algoritmos complexos e debugging de sistemas distribuídos. VYR me ajuda a manter a nitidez mental durante sessões intensas de problem-solving.",
    highlight: "Debugging 2x mais rápido",
    avatar: "PH",
  },
  {
    name: "Mariana R.",
    role: "M&A Director",
    content: "Due diligence de milhões exige atenção aos detalhes. Não posso deixar nada passar. VYR se tornou parte essencial da minha rotina cognitiva.",
    highlight: "Zero erros em deals",
    avatar: "MR",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-vyr-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-vyr-white mb-4">
            Quem já está no <span className="text-vyr-gray-400">estado elevado</span>
          </h2>
          <p className="text-vyr-gray-400 max-w-2xl mx-auto text-lg">
            Profissionais em ambientes exigentes que escolheram estruturar sua rotina cognitiva
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-sm bg-vyr-gray-800 border border-vyr-gray-700 hover:border-vyr-gray-600 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-vyr-gray-700 mb-4" />
              
              {/* Content */}
              <p className="text-vyr-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Highlight Badge */}
              <div className="inline-flex px-3 py-1.5 rounded-sm bg-vyr-gray-700 border border-vyr-gray-600 mb-6">
                <span className="text-vyr-gray-300 text-sm font-mono">{testimonial.highlight}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-vyr-gray-700 flex items-center justify-center">
                  <span className="text-vyr-white text-sm font-mono">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="text-vyr-white font-medium">{testimonial.name}</div>
                  <div className="text-vyr-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-vyr-gray-500 text-sm">
            Junte-se a profissionais que estruturaram sua rotina cognitiva com dados
          </p>
        </div>
      </div>
    </section>
  );
}
