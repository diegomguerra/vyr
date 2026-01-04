import { Link } from "react-router-dom";
import { LandingNav, Footer } from "@/components/landing";
import { Button } from "@/components/ui/button";

const sachets = [
  {
    title: "VYR BOOT",
    subtitle: "Energia Cognitiva",
    text: "Ativa foco, clareza mental e prontidão cognitiva nas primeiras horas do dia.",
  },
  {
    title: "VYR HOLD",
    subtitle: "Sustentação Cognitiva",
    text: "Mantém estabilidade mental, resiliência e desempenho ao longo do dia, reduzindo quedas de energia cognitiva.",
  },
  {
    title: "VYR CLEAR",
    subtitle: "Recuperação Cognitiva",
    text: "Favorece processamento mental, consolidação da memória e clareza cognitiva durante o descanso.",
  },
];

const platformHighlights = [
  {
    title: "Painel de Gestão Cognitiva",
    text: "Visualize sua rotina cognitiva em um painel unificado, com histórico, padrões e evolução ao longo do tempo.",
  },
  {
    title: "Insights Personalizados",
    text: "Relatórios inteligentes que traduzem seu uso em orientações práticas para tomada de decisão.",
  },
  {
    title: "Planejamento de Rotina",
    text: "Organize seu ciclo cognitivo diário com base em objetivos, contexto e consistência.",
  },
  {
    title: "Registros Estruturados",
    text: "Registre percepções, hábitos e estados cognitivos para análise longitudinal.",
  },
];

const inclusions = [
  "12 meses de VYR BOOT (360 sachês)",
  "12 meses de VYR HOLD (360 sachês)",
  "12 meses de VYR CLEAR (360 sachês)",
  "Acesso completo à Plataforma VYR Labs",
  "Insights e relatórios",
  "Suporte prioritário",
];

export default function VYRSystemCore() {
  return (
    <div className="min-h-screen bg-vyr-black text-vyr-gray-200">
      <LandingNav />

      <main className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-mono tracking-[0.25em] text-vyr-gray-400">VYR SYSTEM</p>
                <h1 className="text-4xl sm:text-5xl font-semibold text-vyr-white leading-tight">
                  Dados Precisos. Decisões Inteligentes.
                </h1>
                <p className="text-lg sm:text-xl text-vyr-gray-300 leading-relaxed">
                  Suplementação cognitiva estruturada e inteligência de dados para orientar sua rotina — sem necessidade de dispositivos.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/login?signup=true">
                  <Button className="w-full sm:w-auto px-6 sm:px-8 py-4 text-base font-mono bg-vyr-white text-vyr-black hover:bg-vyr-gray-100 rounded-sm">
                    Quero o VYR SYSTEM
                  </Button>
                </Link>
                <Link to="/vyr-system" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto px-6 sm:px-8 py-4 text-base font-mono rounded-sm border-vyr-gray-700 bg-transparent text-vyr-white hover:bg-vyr-gray-900"
                  >
                    Ver versão com Node
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-sm border border-vyr-gray-800 bg-vyr-gray-900/50 p-8 shadow-xl shadow-vyr-black/20">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-vyr-gray-400">Ciclo Cognitivo</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {sachets.map((item) => (
                    <div key={item.title} className="p-4 rounded-sm bg-vyr-black/40 border border-vyr-gray-800 space-y-2">
                      <p className="text-sm font-mono tracking-widest text-vyr-gray-300">{item.title}</p>
                      <h3 className="text-lg font-semibold text-vyr-white">{item.subtitle}</h3>
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
            <h2 className="text-2xl sm:text-3xl font-semibold text-vyr-white mb-3">Os 3 Sachês do Ciclo Cognitivo</h2>
            <p className="text-vyr-gray-400 max-w-3xl">
              Estrutura diária para reduzir atrito mental e gerar consistência.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sachets.map((item) => (
              <div key={item.title} className="p-6 rounded-sm border border-vyr-gray-800 bg-vyr-gray-900/60">
                <p className="text-xs font-mono tracking-[0.25em] text-vyr-gray-400 mb-2">{item.title}</p>
                <h3 className="text-xl font-semibold text-vyr-white mb-2">{item.subtitle}</h3>
                <p className="text-sm text-vyr-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-vyr-white mb-3">Plataforma VYR Labs</h2>
            <p className="text-vyr-gray-400 max-w-3xl">
              Ferramentas para acompanhar, registrar e ajustar sua rotina cognitiva.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {platformHighlights.map((item) => (
              <div key={item.title} className="p-6 rounded-sm border border-vyr-gray-800 bg-vyr-gray-900/60 space-y-2">
                <h3 className="text-xl font-semibold text-vyr-white">{item.title}</h3>
                <p className="text-sm text-vyr-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="rounded-sm border border-vyr-gray-800 bg-vyr-gray-900/70 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-vyr-white mb-4">Como Funciona Sem Node</h2>
            <p className="text-lg text-vyr-gray-200 leading-relaxed">
              O VYR SYSTEM opera sem monitoramento automático. A plataforma organiza o ciclo cognitivo a partir do uso dos sachês e de registros estruturados, entregando clareza, previsibilidade e direção.
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
            <h3 className="text-xl sm:text-2xl font-semibold text-vyr-white">VYR SYSTEM</h3>
            <div className="space-y-1 text-vyr-gray-300 text-sm sm:text-base">
              <p>Sachês + Plataforma</p>
              <p>Sem dispositivo</p>
            </div>
            <Link to="/vyr-system">
              <Button className="px-6 py-3 text-sm sm:text-base font-mono rounded-sm bg-vyr-white text-vyr-black hover:bg-vyr-gray-100">
                Ver VYR SYSTEM NODE
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
