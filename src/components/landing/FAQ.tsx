import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o VYR?",
    answer:
      "VYR é um sistema de performance cognitiva que combina suplementação nootrópica (BOOT, HOLD, CLEAR), plataforma de mensuração e o VYR NODE para otimização intelectual baseada em dados.",
  },
  {
    question: "Como funciona a plataforma de acompanhamento?",
    answer:
      "Após adquirir o produto, você terá acesso à nossa plataforma onde poderá registrar suas doses diárias, monitorar seu sono e visualizar gráficos de evolução. Isso permite entender como seu corpo responde à suplementação.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "Os efeitos agudos podem ser sentidos nas primeiras doses. Porém, para resultados otimizados e sustentáveis, recomendamos um ciclo de pelo menos 30 dias com acompanhamento consistente na plataforma.",
  },
  {
    question: "Posso usar com outros suplementos?",
    answer:
      "O sistema VYR foi desenvolvido para ser usado de forma isolada. Consulte um profissional de saúde antes de combinar com outros suplementos ou medicamentos.",
  },
  {
    question: "Como faço para acessar minha área de acompanhamento?",
    answer:
      "Após a compra, você receberá um email com instruções para criar sua conta na plataforma. Lá você poderá completar sua anamnese e começar a registrar seus dados.",
  },
  {
    question: "Existe garantia?",
    answer:
      "Sim, oferecemos garantia de satisfação de 30 dias. Se você não estiver satisfeito com os resultados, entre em contato conosco para reembolso.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-vyr-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-vyr-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-vyr-gray-400 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o VYR e a plataforma
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-vyr-gray-800 border border-vyr-gray-700 rounded-sm px-6"
            >
              <AccordionTrigger className="text-vyr-white hover:no-underline py-6 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-vyr-gray-400 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
