import { Circle, Activity, Moon, Brain, Zap, TrendingUp, Sparkles } from "lucide-react";
import { NodeVisual } from "@/brand";

const ringCapabilities = [{
  icon: Activity,
  title: "HRV Contínuo",
  description: "Variabilidade da frequência cardíaca 24/7 revela estresse e recuperação em tempo real."
}, {
  icon: Moon,
  title: "Arquitetura do Sono",
  description: "Fases do sono, latência, despertares. Saiba exatamente como você recupera."
}, {
  icon: Brain,
  title: "Prontidão Mental",
  description: "Score diário de prontidão cognitiva baseado em biomarcadores reais."
}, {
  icon: Zap,
  title: "Resposta Autonômica",
  description: "Ativação simpática e parassimpática. Entenda seu sistema nervoso."
}];

const evolutionSteps = [{
  step: 1,
  label: "Suplementação",
  description: "Nootrópicos otimizam sua química cerebral",
  active: true
}, {
  step: 2,
  label: "Relatos",
  description: "Plataforma captura sua percepção subjetiva",
  active: true
}, {
  step: 3,
  label: "VYR NODE",
  description: "Dados fisiológicos validam e expandem a análise",
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
          <span className="text-[10px] font-mono tracking-[0.2em] block mb-1 text-vyr-gray-500">SENSORS</span>
          <span className="text-xs text-vyr-gray-300">PPG · HRV · SpO2</span>
        </div>
        <div>
          <span className="text-[10px] font-mono tracking-[0.2em] block mb-1 text-vyr-gray-500">MATERIAL</span>
          <span className="text-xs text-vyr-gray-300">Titanium</span>
        </div>
        <div>
          <span className="text-[10px] font-mono tracking-[0.2em] block mb-1 text-vyr-gray-500">BATTERY</span>
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
            <span className="text-sm font-mono tracking-wider">VYR NODE · SMART RING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-vyr-white mb-4">
            De percepção a{" "}
            <span className="text-gradient-accent">
              dados fisiológicos
            </span>
          </h2>
          <p className="text-vyr-gray-400 max-w-3xl mx-auto text-lg">
            Dados fisiológicos contínuos para análise de estado cognitivo. 
            O VYR NODE captura biomarcadores 24/7 que complementam a análise subjetiva.{" "}
            <span className="text-vyr-white font-medium">Discreto. Contínuo. Preciso.</span>
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
                  <span className="text-xs text-vyr-gray-300 font-mono">SENSOR 24/7</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 px-3 py-2 vyr-card-graphite">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-vyr-gray-400" />
                  <span className="text-xs text-vyr-gray-300 font-mono">DISCRETO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-6">
            <div className="mb-8">
              <p className="text-sm text-vyr-gray-500 uppercase tracking-widest mb-2 font-mono">
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
            <p className="text-sm uppercase tracking-widest mb-2 text-vyr-gray-500 font-mono">
              A evolução completa
            </p>
            <h3 className="text-2xl font-medium text-vyr-white">
              Do suplemento ao insight preciso
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
                    <span className={`text-2xl font-medium font-mono ${step.highlight ? 'text-vyr-black' : 'text-vyr-gray-400'}`}>
                      {step.step}
                    </span>
                    {step.highlight && <TrendingUp className="w-4 h-4 text-vyr-graphite mt-1" />}
                  </div>

                  <h4 className={`font-medium mb-1 font-mono tracking-wider ${step.highlight ? 'text-vyr-white' : 'text-vyr-gray-300'}`}>
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
              "O que não se mede, não se gerencia."
            </span>
            <span className="hidden sm:block w-px h-6 bg-vyr-graphite" />
            <span className="text-vyr-white font-mono tracking-wider">
              Mensuração ativa.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}