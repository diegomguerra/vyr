import { ClipboardCheck, TrendingUp, BarChart3, Brain, Zap, Moon, RefreshCw, Sun, Sunset } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from "recharts";

const trackingPillars = [
  {
    id: "ativacao",
    title: "Ativação & Clareza",
    period: "Manhã",
    icon: Sun,
    bgColor: "bg-vyr-gray-200/15",
    borderColor: "border-vyr-gray-200/30",
    textColor: "text-vyr-gray-100",
    questions: ["Como foi seu foco nas primeiras horas?", "Clareza nas decisões matinais?", "Energia mental ao iniciar o dia?"]
  },
  {
    id: "sustentacao",
    title: "Sustentação & Resiliência",
    period: "Tarde",
    icon: Sunset,
    bgColor: "bg-vyr-gray-400/15",
    borderColor: "border-vyr-gray-400/30",
    textColor: "text-vyr-gray-300",
    questions: ["Manteve o ritmo após o almoço?", "Resistência à fadiga cognitiva?", "Equilíbrio emocional sob pressão?"]
  },
  {
    id: "recuperacao",
    title: "Recuperação Cognitiva",
    period: "Noite",
    icon: Moon,
    bgColor: "bg-vyr-accent/15",
    borderColor: "border-vyr-accent/30",
    textColor: "text-vyr-accent",
    questions: ["Qualidade do sono percebida?", "Facilidade para adormecer?", "Sensação ao acordar?"]
  }
];

const platformFeatures = [
  {
    icon: ClipboardCheck,
    title: "Registro Diário Simples",
    description: "Check-ins rápidos após cada dose. Menos de 1 minuto por registro."
  },
  {
    icon: TrendingUp,
    title: "Evolução ao Longo do Tempo",
    description: "Veja padrões emergirem semana após semana. Sua linha de base se constrói."
  },
  {
    icon: BarChart3,
    title: "Correlações Inteligentes",
    description: "Entenda como rotina, sono e suplementação impactam sua constância."
  }
];

// Dados fictícios para os gráficos
const performanceData = [
  { day: "Seg", foco: 6.5, energia: 5.8, clareza: 6.2 },
  { day: "Ter", foco: 7.2, energia: 6.5, clareza: 6.8 },
  { day: "Qua", foco: 6.8, energia: 7.1, clareza: 7.0 },
  { day: "Qui", foco: 7.8, energia: 7.5, clareza: 7.5 },
  { day: "Sex", foco: 8.2, energia: 7.8, clareza: 8.1 },
  { day: "Sab", foco: 7.5, energia: 8.2, clareza: 7.8 },
  { day: "Dom", foco: 8.5, energia: 8.0, clareza: 8.4 }
];

const sleepData = [
  { day: "Seg", qualidade: 65 },
  { day: "Ter", qualidade: 72 },
  { day: "Qua", qualidade: 68 },
  { day: "Qui", qualidade: 78 },
  { day: "Sex", qualidade: 82 },
  { day: "Sab", qualidade: 85 },
  { day: "Dom", qualidade: 88 }
];

const weeklyTrend = [
  { week: "S1", score: 52 },
  { week: "S2", score: 58 },
  { week: "S3", score: 65 },
  { week: "S4", score: 72 },
  { week: "S5", score: 78 },
  { week: "S6", score: 82 }
];

export function PlatformSection() {
  return (
    <section id="plataforma" className="py-24 bg-vyr-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vyr-gray-700/30 border border-vyr-gray-600/40 mb-6">
            <RefreshCw className="w-4 h-4 text-vyr-gray-200" />
            <span className="text-sm font-medium text-vyr-gray-200">Plataforma de Registro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-vyr-white mb-4">
            O sistema{" "}
            <span className="text-vyr-gray-200">
              aprende com você
            </span>
          </h2>
          <p className="text-vyr-gray-400 max-w-3xl mx-auto text-lg mb-4">
            Você registra como se sente. O VYR organiza, observa e aprende padrões ao longo do tempo.
          </p>
          <p className="text-vyr-gray-500 max-w-2xl mx-auto text-base">
            Após cada uso, você registra percepção simples — foco, clareza, energia, recuperação.
            Com o tempo, o sistema constrói sua linha de base e reduz a variabilidade do dia a dia.{" "}
            <span className="text-vyr-white font-medium">Sem comparações externas. Sem competição. A evolução é só com você mesmo.</span>
          </p>
        </div>

        {/* Micro phrase */}
        <div className="text-center mb-12">
          <p className="text-vyr-accent text-sm italic">
            Abrir o VYR hoje é se alinhar.
          </p>
        </div>

        {/* Dashboard Preview Image */}
        <div className="mb-20 relative">
          <div className="relative mx-auto max-w-5xl">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-vyr-gray-500/10 blur-3xl -z-10 scale-95" />
            
            {/* Dashboard image with frame */}
            <div className="relative rounded-2xl overflow-hidden border border-vyr-gray-600/30 shadow-2xl">
              <img src={dashboardPreview} alt="VYR - Painel de Evolução Cognitiva" className="w-full h-auto" />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-vyr-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating labels */}
            <div className="absolute -left-4 top-1/4 px-3 py-2 rounded-lg bg-vyr-gray-900/90 border border-vyr-gray-600/30 hidden lg:block">
              <span className="text-xs text-vyr-gray-200 font-medium">Tendências visíveis</span>
            </div>
            <div className="absolute -right-4 top-1/3 px-3 py-2 rounded-lg bg-vyr-gray-900/90 border border-vyr-gray-600/30 hidden lg:block">
              <span className="text-xs text-vyr-gray-200 font-medium">Evolução progressiva</span>
            </div>
          </div>
        </div>

        {/* Os 3 Eixos de Mensuração */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest mb-2 text-vyr-gray-400">
              O que registramos
            </p>
            <h3 className="text-2xl font-medium text-vyr-white">
              3 Eixos do Ciclo Cognitivo
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trackingPillars.map(pillar => (
              <div 
                key={pillar.id} 
                className={`relative p-6 rounded-2xl bg-vyr-gray-900/40 border ${pillar.borderColor} hover:bg-vyr-gray-900/60 transition-all duration-300`}
              >
                {/* Period badge */}
                <div className={`absolute -top-3 right-4 px-3 py-1 rounded-full ${pillar.bgColor} ${pillar.textColor} text-xs font-medium border ${pillar.borderColor}`}>
                  {pillar.period}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${pillar.bgColor} flex items-center justify-center mb-4`}>
                  <pillar.icon className={`w-7 h-7 ${pillar.textColor}`} />
                </div>

                {/* Title */}
                <h4 className={`text-xl font-medium ${pillar.textColor} mb-3`}>
                  {pillar.title}
                </h4>

                {/* Questions */}
                <ul className="space-y-2">
                  {pillar.questions.map((question, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-vyr-gray-400">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 ${pillar.bgColor.replace('/15', '/60')}`} />
                      {question}
                    </li>
                  ))}
                </ul>

                {/* Visual escala */}
                <div className="mt-4 pt-4 border-t border-vyr-gray-600/30">
                  <div className="flex items-center justify-between text-xs text-vyr-gray-400 mb-2">
                    <span>Sua avaliação</span>
                    <span className={pillar.textColor}>1-10</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <div 
                        key={n} 
                        className={`flex-1 h-2 rounded-full ${n <= 7 ? pillar.bgColor : 'bg-vyr-gray-900'}`}
                        style={{ opacity: n <= 7 ? 0.3 + n * 0.08 : 0.2 }} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest mb-2 text-vyr-gray-400">
              Visualize sua evolução
            </p>
            <h3 className="text-2xl font-medium text-vyr-white">
              Evolução que faz sentido, não barulho
            </h3>
            <p className="text-vyr-gray-500 max-w-2xl mx-auto mt-3 text-sm">
              O painel mostra tendências, não excesso de dados. O objetivo não é observar tudo — é entender o que muda quando o atrito diminui.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Performance Chart */}
            <div className="lg:col-span-2 p-6 rounded-2xl bg-vyr-gray-900/40 border border-vyr-gray-600/30">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-vyr-white font-medium">Variação e Evolução Semanal</h4>
                  <p className="text-vyr-gray-400 text-sm">Indicadores diários</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-vyr-gray-300" />
                    <span className="text-vyr-gray-400">Foco</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-vyr-gray-500" />
                    <span className="text-vyr-gray-400">Energia</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-vyr-accent" />
                    <span className="text-vyr-gray-400">Clareza</span>
                  </div>
                </div>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#404040', fontSize: 11 }} />
                    <YAxis domain={[5, 10]} axisLine={false} tickLine={false} tick={{ fill: '#404040', fontSize: 11 }} />
                    <Line type="monotone" dataKey="foco" stroke="#737373" strokeWidth={2} dot={{ fill: '#737373', r: 3, strokeWidth: 0 }} />
                    <Line type="monotone" dataKey="energia" stroke="#404040" strokeWidth={2} dot={{ fill: '#404040', r: 3, strokeWidth: 0 }} />
                    <Line type="monotone" dataKey="clareza" stroke="#3b4f63" strokeWidth={2} dot={{ fill: '#3b4f63', r: 3, strokeWidth: 0 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sleep Quality */}
            <div className="p-6 rounded-2xl bg-vyr-graphite-dark/60 border border-vyr-gray-700/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-vyr-accent/10 flex items-center justify-center border border-vyr-accent/20">
                  <Moon className="w-5 h-5 text-vyr-accent" />
                </div>
                <div>
                  <h4 className="text-vyr-white font-medium">Qualidade do Sono</h4>
                  <p className="text-vyr-gray-400 text-xs">Últimos 7 dias</p>
                </div>
              </div>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sleepData}>
                    <defs>
                      <linearGradient id="sleepGradientVyr" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4a6275" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#4a6275" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="qualidade" stroke="#4a6275" strokeWidth={2} fill="url(#sleepGradientVyr)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-vyr-gray-400 text-sm">Média</span>
                <span className="text-vyr-accent font-medium text-lg">77%</span>
              </div>
            </div>
          </div>

          {/* Second row of dashboard */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {/* Plasticidade Score */}
            <div className="p-5 rounded-2xl bg-vyr-graphite-dark/60 border border-vyr-gray-700/40">
              <div className="flex items-center justify-between mb-3">
                <span className="text-vyr-gray-400 text-sm">Constância Cognitiva</span>
                <span className="text-xs px-2 py-1 rounded-full bg-vyr-accent/15 text-vyr-accent border border-vyr-accent/30">+12%</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-medium text-vyr-white">82</span>
                <span className="text-vyr-gray-400 text-sm mb-1">/100</span>
              </div>
              <div className="mt-3 h-2 bg-vyr-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-[82%] bg-gradient-to-r from-vyr-gray-400 to-vyr-accent rounded-full" />
              </div>
            </div>

            {/* Weekly Trend */}
            <div className="p-5 rounded-2xl bg-vyr-graphite-dark/60 border border-vyr-gray-700/40">
              <div className="flex items-center justify-between mb-3">
                <span className="text-vyr-gray-400 text-sm">Tendência 6 Semanas</span>
                <TrendingUp className="w-4 h-4 text-vyr-accent" />
              </div>
              <div className="h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyTrend}>
                    <defs>
                      <linearGradient id="trendGradientVyr" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#737373" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#737373" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="score" stroke="#737373" strokeWidth={2} fill="url(#trendGradientVyr)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Ring Scores Preview */}
            <div className="p-5 rounded-2xl bg-vyr-graphite-dark/60 border border-vyr-gray-700/40">
              <span className="text-vyr-gray-400 text-sm">Índices do Dia</span>
              <div className="mt-3 flex items-center justify-around">
                {/* Circular progress indicators */}
                <div className="relative w-14 h-14">
                  <svg className="w-14 h-14 transform -rotate-90">
                    <circle cx="28" cy="28" r="24" stroke="#262626" strokeWidth="4" fill="none" />
                    <circle cx="28" cy="28" r="24" stroke="#8a8a8a" strokeWidth="4" fill="none" strokeDasharray={`${0.85 * 150.8} 150.8`} strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-vyr-white">85%</span>
                </div>
                <div className="relative w-14 h-14">
                  <svg className="w-14 h-14 transform -rotate-90">
                    <circle cx="28" cy="28" r="24" stroke="#262626" strokeWidth="4" fill="none" />
                    <circle cx="28" cy="28" r="24" stroke="#6b6b6b" strokeWidth="4" fill="none" strokeDasharray={`${0.72 * 150.8} 150.8`} strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-vyr-white">72%</span>
                </div>
                <div className="relative w-14 h-14">
                  <svg className="w-14 h-14 transform -rotate-90">
                    <circle cx="28" cy="28" r="24" stroke="#262626" strokeWidth="4" fill="none" />
                    <circle cx="28" cy="28" r="24" stroke="#4a6275" strokeWidth="4" fill="none" strokeDasharray={`${0.91 * 150.8} 150.8`} strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-vyr-white">91%</span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-around text-xs text-vyr-gray-400">
                <span>Ativação</span>
                <span>Sustentação</span>
                <span>Recuperação</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-vyr-gray-900/30 border border-vyr-gray-700/30">
              <p className="text-vyr-white font-medium text-sm">Menos dias "ruins sem explicação"</p>
            </div>
            <div className="p-4 rounded-xl bg-vyr-gray-900/30 border border-vyr-gray-700/30">
              <p className="text-vyr-white font-medium text-sm">Mais constância percebida</p>
            </div>
            <div className="p-4 rounded-xl bg-vyr-gray-900/30 border border-vyr-gray-700/30">
              <p className="text-vyr-white font-medium text-sm">Menos esforço para manter o ritmo</p>
            </div>
          </div>
        </div>

        {/* Features da Plataforma */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {platformFeatures.map(feature => (
            <div key={feature.title} className="flex items-start gap-4 p-5 rounded-xl bg-vyr-gray-900/30 border border-vyr-gray-600/30">
              <div className="w-12 h-12 rounded-xl bg-vyr-gray-600/20 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-vyr-gray-200" />
              </div>
              <div>
                <h4 className="text-vyr-white font-medium mb-1">{feature.title}</h4>
                <p className="text-vyr-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-vyr-gray-900/30 border border-vyr-gray-600/30">
            <span className="text-vyr-gray-400">Dados existem para aliviar decisões,</span>
            <span className="text-vyr-white font-medium">
              não para criar peso.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}