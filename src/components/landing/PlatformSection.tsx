import { ClipboardCheck, TrendingUp, BarChart3, Brain, Zap, Moon, RefreshCw } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from "recharts";

const trackingPillars = [
  {
    id: "ativacao",
    title: "Ativação & Clareza",
    period: "Manhã",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-400",
    questions: [
      "Como foi seu foco nas primeiras horas?",
      "Clareza nas decisões matinais?",
      "Energia mental ao iniciar o dia?",
    ],
  },
  {
    id: "sustentacao",
    title: "Sustentação & Resiliência",
    period: "Tarde",
    icon: Brain,
    color: "from-purple-500 to-fuchsia-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
    questions: [
      "Manteve o ritmo após o almoço?",
      "Resistência à fadiga cognitiva?",
      "Equilíbrio emocional sob pressão?",
    ],
  },
  {
    id: "recuperacao",
    title: "Recuperação Cognitiva",
    period: "Noite",
    icon: Moon,
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    textColor: "text-indigo-400",
    questions: [
      "Qualidade do sono percebida?",
      "Facilidade para adormecer?",
      "Sensação ao acordar?",
    ],
  },
];

const platformFeatures = [
  {
    icon: ClipboardCheck,
    title: "Registro Diário Simples",
    description: "Check-ins rápidos após cada dose. Menos de 1 minuto por registro.",
  },
  {
    icon: TrendingUp,
    title: "Evolução ao Longo do Tempo",
    description: "Veja padrões emergirem semana após semana. Sua linha de base se constrói.",
  },
  {
    icon: BarChart3,
    title: "Correlações Inteligentes",
    description: "Entenda como rotina, sono e suplementação impactam sua performance.",
  },
];

// Dados fictícios para os gráficos
const performanceData = [
  { day: "Seg", foco: 6.5, energia: 5.8, clareza: 6.2 },
  { day: "Ter", foco: 7.2, energia: 6.5, clareza: 6.8 },
  { day: "Qua", foco: 6.8, energia: 7.1, clareza: 7.0 },
  { day: "Qui", foco: 7.8, energia: 7.5, clareza: 7.5 },
  { day: "Sex", foco: 8.2, energia: 7.8, clareza: 8.1 },
  { day: "Sab", foco: 7.5, energia: 8.2, clareza: 7.8 },
  { day: "Dom", foco: 8.5, energia: 8.0, clareza: 8.4 },
];

const sleepData = [
  { day: "Seg", qualidade: 65 },
  { day: "Ter", qualidade: 72 },
  { day: "Qua", qualidade: 68 },
  { day: "Qui", qualidade: 78 },
  { day: "Sex", qualidade: 82 },
  { day: "Sab", qualidade: 85 },
  { day: "Dom", qualidade: 88 },
];

const weeklyTrend = [
  { week: "S1", score: 52 },
  { week: "S2", score: 58 },
  { week: "S3", score: 65 },
  { week: "S4", score: 72 },
  { week: "S5", score: 78 },
  { week: "S6", score: 82 },
];

export function PlatformSection() {
  return (
    <section id="plataforma" className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 mb-6">
            <RefreshCw className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Plataforma de Mensuração</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Transforme percepção em{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              dados acionáveis
            </span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            A plataforma captura seu relato após cada dose, construindo uma linha de base 
            única que revela como os nootrópicos impactam{" "}
            <span className="text-white font-medium">seu</span> desempenho específico.
          </p>
        </div>

        {/* Dashboard Preview Image */}
        <div className="mb-20 relative">
          <div className="relative mx-auto max-w-5xl">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 blur-3xl -z-10 scale-95" />
            
            {/* Dashboard image with frame */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-violet-500/10">
              <img 
                src={dashboardPreview} 
                alt="NZT Dashboard - Painel de Performance Cognitiva" 
                className="w-full h-auto"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating labels */}
            <div className="absolute -left-4 top-1/4 px-3 py-2 rounded-lg bg-slate-800/90 border border-violet-500/30 hidden lg:block">
              <span className="text-xs text-violet-400 font-medium">Métricas em tempo real</span>
            </div>
            <div className="absolute -right-4 top-1/3 px-3 py-2 rounded-lg bg-slate-800/90 border border-fuchsia-500/30 hidden lg:block">
              <span className="text-xs text-fuchsia-400 font-medium">Evolução visível</span>
            </div>
          </div>
        </div>

        {/* Os 3 Eixos de Mensuração */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">
              O que mensuramos
            </p>
            <h3 className="text-2xl font-bold text-white">
              3 Eixos do Ciclo Cognitivo
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trackingPillars.map((pillar) => (
              <div
                key={pillar.id}
                className={`relative p-6 rounded-2xl bg-slate-800/40 border ${pillar.borderColor} hover:bg-slate-800/60 transition-all duration-300`}
              >
                {/* Period badge */}
                <div className={`absolute -top-3 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${pillar.color} text-white text-xs font-semibold`}>
                  {pillar.period}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${pillar.bgColor} flex items-center justify-center mb-4`}>
                  <pillar.icon className={`w-7 h-7 ${pillar.textColor}`} />
                </div>

                {/* Title */}
                <h4 className={`text-xl font-bold ${pillar.textColor} mb-3`}>
                  {pillar.title}
                </h4>

                {/* Questions */}
                <ul className="space-y-2">
                  {pillar.questions.map((question, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 ${pillar.bgColor.replace('/10', '/50')}`} />
                      {question}
                    </li>
                  ))}
                </ul>

                {/* Visual escala */}
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span>Sua avaliação</span>
                    <span className={pillar.textColor}>1-10</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <div
                        key={n}
                        className={`flex-1 h-2 rounded-full ${
                          n <= 7 
                            ? `bg-gradient-to-r ${pillar.color} opacity-${n <= 4 ? '30' : n <= 6 ? '50' : '80'}`
                            : 'bg-slate-700'
                        }`}
                        style={{ opacity: n <= 7 ? 0.3 + (n * 0.08) : 0.2 }}
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
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">
              Visualize seus dados
            </p>
            <h3 className="text-2xl font-bold text-white">
              Dashboard de Performance Cognitiva
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Performance Chart */}
            <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-white font-semibold">Evolução Semanal</h4>
                  <p className="text-slate-400 text-sm">Foco, Energia e Clareza</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-slate-400">Foco</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span className="text-slate-400">Energia</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                    <span className="text-slate-400">Clareza</span>
                  </div>
                </div>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <XAxis 
                      dataKey="day" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#64748b', fontSize: 12 }}
                    />
                    <YAxis 
                      domain={[5, 10]} 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#64748b', fontSize: 12 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="foco" 
                      stroke="#fbbf24" 
                      strokeWidth={2} 
                      dot={{ fill: '#fbbf24', r: 3 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="energia" 
                      stroke="#a855f7" 
                      strokeWidth={2} 
                      dot={{ fill: '#a855f7', r: 3 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="clareza" 
                      stroke="#8b5cf6" 
                      strokeWidth={2} 
                      dot={{ fill: '#8b5cf6', r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sleep Quality */}
            <div className="p-6 rounded-2xl bg-slate-800/40 border border-indigo-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center">
                  <Moon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Qualidade do Sono</h4>
                  <p className="text-slate-400 text-xs">Últimos 7 dias</p>
                </div>
              </div>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sleepData}>
                    <defs>
                      <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area 
                      type="monotone" 
                      dataKey="qualidade" 
                      stroke="#6366f1" 
                      strokeWidth={2}
                      fill="url(#sleepGradient)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-slate-400 text-sm">Média</span>
                <span className="text-indigo-400 font-bold text-lg">77%</span>
              </div>
            </div>
          </div>

          {/* Second row of dashboard */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {/* Plasticidade Score */}
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-violet-500/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-sm">Plasticidade Cognitiva</span>
                <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">+12%</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-white">82</span>
                <span className="text-slate-400 text-sm mb-1">/100</span>
              </div>
              <div className="mt-3 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-[82%] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
              </div>
            </div>

            {/* Weekly Trend */}
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-sm">Tendência 6 Semanas</span>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div className="h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyTrend}>
                    <defs>
                      <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#22c55e" 
                      strokeWidth={2}
                      fill="url(#trendGradient)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Ring Scores Preview */}
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50">
              <span className="text-slate-400 text-sm">Índices do Dia</span>
              <div className="mt-3 flex items-center justify-around">
                {/* Circular progress indicators */}
                <div className="relative w-14 h-14">
                  <svg className="w-14 h-14 transform -rotate-90">
                    <circle cx="28" cy="28" r="24" stroke="#334155" strokeWidth="4" fill="none" />
                    <circle cx="28" cy="28" r="24" stroke="#ef4444" strokeWidth="4" fill="none" 
                      strokeDasharray={`${0.85 * 150.8} 150.8`} strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">85%</span>
                </div>
                <div className="relative w-14 h-14">
                  <svg className="w-14 h-14 transform -rotate-90">
                    <circle cx="28" cy="28" r="24" stroke="#334155" strokeWidth="4" fill="none" />
                    <circle cx="28" cy="28" r="24" stroke="#22c55e" strokeWidth="4" fill="none" 
                      strokeDasharray={`${0.72 * 150.8} 150.8`} strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">72%</span>
                </div>
                <div className="relative w-14 h-14">
                  <svg className="w-14 h-14 transform -rotate-90">
                    <circle cx="28" cy="28" r="24" stroke="#334155" strokeWidth="4" fill="none" />
                    <circle cx="28" cy="28" r="24" stroke="#3b82f6" strokeWidth="4" fill="none" 
                      strokeDasharray={`${0.91 * 150.8} 150.8`} strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">91%</span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-around text-xs text-slate-500">
                <span>Ativação</span>
                <span>Sustentação</span>
                <span>Recuperação</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features da Plataforma */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {platformFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-5 rounded-xl bg-slate-800/30 border border-slate-700/50"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-violet-900/30 to-fuchsia-900/30 border border-violet-500/30">
            <span className="text-slate-400">Dados de relato são poderosos, mas</span>
            <span className="text-white font-semibold">dados fisiológicos são precisos →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
