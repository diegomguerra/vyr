import { Circle, Activity, Moon, Brain, Zap, TrendingUp, Sparkles } from "lucide-react";
import { NodeVisual } from "@/brand";

const ringCapabilities = [{
  icon: Activity,
  title: "Variabilidade Cardíaca (HRV)",
  description: "Indicador contínuo de estresse e recuperação do sistema nervoso."
}, {
  icon: Moon,
  title: "Arquitetura do Sono",
  description: "Fases do sono, latência, despertares. Como você realmente recupera."
}, {
  icon: Brain,
  title: "Ritmo Fisiológico Diário",
  description: "Entenda os ciclos naturais do seu corpo ao longo do dia."
}];

const evolutionSteps = [{
  step: 1,
  label: "Suplementação",
  description: "Estrutura para o dia com menos atrito",
  active: true
}, {
  step: 2,
  label: "Relatos",
  description: "Sua percepção organizada ao longo do tempo",
  active: true
}, {
  step: 3,
  label: "VYR NODE",
  description: "Dados fisiológicos refinam o aprendizado",
  active: true,
  highlight: true
}];

// Componente do VYR NODE com especificações técnicas
function NodeShowcaseCompact() {
  return (
    <div className="flex flex-col items-center">
      {/* Node Visual principal */}
      <NodeVisual size="lg" showLabel={false} />
      
      {/* Especificações técnicas minimalistas */}
      <div className="mt-8 flex gap-8 text-center">
        <div>
          <span className="text-[10px] tracking-[0.2em] block mb-1 text-vyr-gray-500">SENSORS</span>
          <span className="text-xs text-vyr-gray-300">PPG · HRV · SpO2</span>
        </div>
        <div>
          <span className="text-[10px] tracking-[0.2em] block mb-1 text-vyr-gray-500">MATERIAL</span>
          <span className="text-xs text-vyr-gray-300">Titanium</span>
        </div>
        <div>
          <span className="text-[10px] tracking-[0.2em] block mb-1 text-vyr-gray-500">BATTERY</span>
          <span className="text-xs text-vyr-gray-300">7 Days</span>
        </div>
      </div>
    </div>
  );
}

export function SmartRingSection() {
  return (
    <section id="smartring" className="relative py-24 bg-vyr-black overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 vyr-gradient-bg" />
      <div className="absolute inset-0 vyr-gradient-radial opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="vyr-badge-accent mb-6">
            <Circle className="w-4 h-4" />
            <span className="text-sm tracking-wider">VYR NODE · SMART RING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-vyr-white mb-4">
            Quando a percepção encontra{" "}
            <span className="text-gradient-accent">
              o corpo
            </span>
          </h2>
          <p className="text-vyr-gray-400 max-w-3xl mx-auto text-lg mb-4">
            Dados fisiológicos contínuos para refinar o aprendizado do sistema.
          </p>
          <p className="text-vyr-gray-500 max-w-2xl mx-auto text-base">
            O VYR Node adiciona uma camada objetiva à sua percepção diária. 
            Ele não substitui o que você sente.{" "}
            <span className="text-vyr-white font-medium">
              Ele ajuda o sistema a entender quando o corpo confirma — ou diverge — da percepção.
            </span>
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Ring Visual - CSS-based NodeVisual */}
          <div className="relative flex justify-center">
            {/* Accent glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, hsl(var(--vyr-graphite) / 0.3) 0%, hsl(var(--vyr-accent) / 0.1) 50%, transparent 70%)' }} />
            </div>

            {/* VYR NODE Visual */}
            <div className="relative z-10">
              <NodeShowcaseCompact />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-2 vyr-card-graphite">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-vyr-accent rounded-full animate-pulse opacity-60" />
                  <span className="text-xs text-vyr-gray-300">SENSOR 24/7</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 px-3 py-2 vyr-card-graphite">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-vyr-gray-400" />
                  <span className="text-xs text-vyr-gray-300">DISCRETO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-6">
            <div className="mb-8">
              <p className="text-sm text-vyr-gray-500 uppercase tracking-widest mb-2">
                O que o NODE captura
              </p>
              <h3 className="text-2xl font-medium text-vyr-white">
                Biomarcadores Fisiológicos
              </h3>
            </div>

            <div className="grid gap-4">
              {ringCapabilities.map(cap => (
                <div key={cap.title} className="vyr-card-graphite flex items-start gap-4 p-4">
                  <div className="w-10 h-10 rounded-sm bg-vyr-graphite flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-5 h-5 text-vyr-accent vyr-icon-glow" />
                  </div>
                  <div>
                    <h4 className="text-vyr-white font-medium mb-1">{cap.title}</h4>
                    <p className="text-sm text-vyr-gray-400">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Evolution Steps */}
        <div className="relative">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest mb-2 text-vyr-gray-500">
              A evolução completa
            </p>
            <h3 className="text-2xl font-medium text-vyr-white">
              Do suplemento ao insight refinado
            </h3>
          </div>

          {/* Steps */}
          <div className="relative max-w-4xl mx-auto">
            {/* Connection line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-vyr-graphite" />

            <div className="grid grid-cols-3 gap-4 relative">
              {evolutionSteps.map(step => (
                <div key={step.step} className="relative text-center">
                  {/* Step circle */}
                  <div className={`relative z-10 w-24 h-24 mx-auto mb-4 rounded-sm flex flex-col items-center justify-center ${step.highlight ? 'bg-vyr-white' : 'vyr-card-graphite'}`}>
                    <span className={`text-2xl font-medium ${step.highlight ? 'text-vyr-black' : 'text-vyr-gray-400'}`}>
                      {step.step}
                    </span>
                    {step.highlight && <TrendingUp className="w-4 h-4 text-vyr-graphite mt-1" />}
                  </div>

                  <h4 className={`font-medium mb-1 tracking-wider ${step.highlight ? 'text-vyr-white' : 'text-vyr-gray-300'}`}>
                    {step.label}
                  </h4>
                  <p className="text-sm text-vyr-gray-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 vyr-card-graphite">
            <span className="text-vyr-gray-400 font-medium text-lg">
              Mais dados não significam mais esforço.
            </span>
            <span className="hidden sm:block w-px h-6 bg-vyr-graphite" />
            <span className="text-vyr-white tracking-wider">
              Significam menos dúvida.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}