import { Link } from "react-router-dom";
import { LandingNav, Footer } from "@/components/landing";
import { Button } from "@/components/ui/button";

const nodeFeatures = [
  {
    title: "HRV Contínuo",
    text: "Variabilidade da frequência cardíaca monitorada 24/7 para avaliação de prontidão e recuperação.",
  },
  { title: "SpO₂", text: "Monitoramento da oxigenação sanguínea para análise de eficiência fisiológica diária." },
  {
    title: "Arquitetura do Sono",
    text: "Análise das fases do sono, duração e profundidade para entendimento da recuperação cognitiva.",
  },
  { title: "Sensores PPG", text: "Sensores ópticos de alta precisão para leitura fisiológica contínua." },
  { title: "Prontidão e Energia", text: "Indicadores combinados que refletem estado funcional e capacidade cognitiva diária." },
  { title: "Bateria de Longa Duração", text: "Operação contínua com autonomia estendida e carregamento rápido." },
];

const correlations = [
  { title: "Integração Total", text: "Dados biométricos, uso dos sachês e rotina cognitiva integrados automaticamente." },
  { title: "Identificação de Padrões", text: "A inteligência da plataforma identifica tendências, respostas e variações individuais." },
  { title: "Insights Avançados", text: "Recomendações baseadas em correlações reais entre fisiologia e desempenho cognitivo." },
];

const inclusions = [
  "Todos os itens do VYR SYSTEM",
  "VYR NODE (smart ring)",
  "Monitoramento biométrico contínuo",
  "Correlações automáticas",
  "Insights avançados por IA",
];

export default function VYRSystemNode() {
  return (
    <div className="min-h-screen bg-vyr-black text-vyr-gray-200">
      <LandingNav />

      <main className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-mono tracking-[0.25em] text-vyr-gray-400">VYR SYSTEM NODE</p>
                <h1 className="text-4xl sm:text-5xl font-semibold text-vyr-white leading-tight">
                  O VYR SYSTEM em sua forma completa.
                </h1>
                <p className="text-lg sm:text-xl text-vyr-gray-300 leading-relaxed">
                  Suplementação cognitiva, inteligência de dados e monitoramento biométrico contínuo integrados em um único sistema.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/login?signup=true">
                  <Button className="w-full sm:w-auto px-6 sm:px-8 py-4 text-base font-mono bg-vyr-white text-vyr-black hover:bg-vyr-gray-100 rounded-sm">
                    Quero o VYR SYSTEM NODE
                  </Button>
                </Link>
                <Link to="/vyr-system-core" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto px-6 sm:px-8 py-4 text-base font-mono rounded-sm border-vyr-gray-700 bg-transparent text-vyr-white hover:bg-vyr-gray-900"
                  >
                    Ver versão sem Node
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-sm border border-vyr-gray-800 bg-vyr-gray-900/50 p-8 shadow-xl shadow-vyr-black/20">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-vyr-gray-400">Monitoramento Biométrico</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {nodeFeatures.slice(0, 4).map((item) => (
                    <div key={item.title} className="p-4 rounded-sm bg-vyr-black/40 border border-vyr-gray-800 space-y-2">
                      <h3 className="text-lg font-semibold text-vyr-white">{item.title}</h3>
                      <p className="text-sm text-vyr-gray-400 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-vyr-white mb-3">VYR NODE: Monitoramento Biométrico</h2>
            <p className="text-vyr-gray-400 max-w-3xl">
              Leituras contínuas para entender respostas fisiológicas e ajustar a rotina cognitiva.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {nodeFeatures.map((item) => (
              <div key={item.title} className="p-6 rounded-sm border border-vyr-gray-800 bg-vyr-gray-900/60 space-y-2">
                <h3 className="text-xl font-semibold text-vyr-white">{item.title}</h3>
                <p className="text-sm text-vyr-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-vyr-white mb-3">Correlações Inteligentes</h2>
            <p className="text-vyr-gray-400 max-w-3xl">
              Conexões automáticas entre dados fisiológicos, uso dos sachês e rotina cognitiva.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {correlations.map((item) => (
              <div key={item.title} className="p-6 rounded-sm border border-vyr-gray-800 bg-vyr-gray-900/60 space-y-2">
                <h3 className="text-xl font-semibold text-vyr-white">{item.title}</h3>
                <p className="text-sm text-vyr-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="rounded-sm border border-vyr-gray-800 bg-vyr-gray-900/70 p-8 sm:p-10 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-semibold text-vyr-white">Os 3 Sachês (resumido)</h2>
            <p className="text-lg text-vyr-gray-200 leading-relaxed">
              BOOT, HOLD e CLEAR compõem o mesmo ciclo cognitivo do VYR SYSTEM, agora potencializado por biometria contínua.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-vyr-white mb-6">O Que Está Incluído</h2>
          <div className="rounded-sm border border-vyr-gray-800 bg-vyr-gray-900/70 p-6 sm:p-8">
            <ul className="space-y-3">
              {inclusions.map((item) => (
                <li key={item} className="text-sm sm:text-base text-vyr-gray-200 flex items-start gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-vyr-gray-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="rounded-sm border border-vyr-gray-800 bg-vyr-gray-900/70 p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-vyr-white">VYR SYSTEM NODE</h3>
            <div className="space-y-1 text-vyr-gray-300 text-sm sm:text-base">
              <p>Sachês + Plataforma + Node</p>
              <p>Monitoramento contínuo</p>
            </div>
            <Link to="/vyr-system-core">
              <Button className="px-6 py-3 text-sm sm:text-base font-mono rounded-sm bg-vyr-white text-vyr-black hover:bg-vyr-gray-100">
                Ver VYR SYSTEM
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
