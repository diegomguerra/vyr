import { TrendingUp, Moon, Brain, Zap, Activity } from "lucide-react";

// Simulated Dashboard Screen
function DashboardScreen() {
  return (
    <div className="bg-slate-900 rounded-2xl p-3 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg" />
          <span className="text-white text-xs font-semibold">NZT Dashboard</span>
        </div>
        <div className="w-6 h-6 bg-slate-700 rounded-full" />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-slate-800 rounded-lg p-2">
          <div className="text-[8px] text-slate-400">Performance</div>
          <div className="text-sm font-bold text-emerald-400">+23%</div>
          <div className="flex gap-0.5 mt-1">
            {[40, 55, 45, 60, 75, 65, 80].map((h, i) => (
              <div key={i} className="w-1.5 bg-emerald-500/50 rounded-sm" style={{ height: `${h * 0.2}px` }} />
            ))}
          </div>
        </div>
        <div className="bg-slate-800 rounded-lg p-2">
          <div className="text-[8px] text-slate-400">Qualidade do Sono</div>
          <div className="text-sm font-bold text-violet-400">8.2h</div>
          <div className="flex gap-0.5 mt-1">
            {[60, 70, 65, 80, 75, 85, 90].map((h, i) => (
              <div key={i} className="w-1.5 bg-violet-500/50 rounded-sm" style={{ height: `${h * 0.2}px` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-slate-800 rounded-lg p-2 mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[8px] text-slate-400">Evolução Cognitiva</span>
          <span className="text-[8px] text-emerald-400">+15%</span>
        </div>
        <svg viewBox="0 0 200 60" className="w-full h-12">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q25,45 50,40 T100,30 T150,25 T200,15"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
          />
          <path
            d="M0,50 Q25,45 50,40 T100,30 T150,25 T200,15 L200,60 L0,60 Z"
            fill="url(#chartGradient)"
          />
        </svg>
      </div>

      {/* Stats Row */}
      <div className="flex gap-2">
        <div className="flex-1 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-lg p-2 border border-violet-500/30">
          <div className="text-[8px] text-slate-300">Foco</div>
          <div className="text-xs font-bold text-white">Alto</div>
        </div>
        <div className="flex-1 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg p-2 border border-emerald-500/30">
          <div className="text-[8px] text-slate-300">Energia</div>
          <div className="text-xs font-bold text-white">+18%</div>
        </div>
      </div>
    </div>
  );
}

// Simulated Sleep Tracking Screen
function SleepScreen() {
  return (
    <div className="bg-gradient-to-b from-indigo-950 to-slate-900 rounded-2xl p-3 h-full">
      {/* Header */}
      <div className="text-center mb-3">
        <Moon className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
        <span className="text-white text-xs font-semibold">Análise do Sono</span>
      </div>

      {/* Sleep Circle */}
      <div className="relative w-24 h-24 mx-auto mb-3">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#334155" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#sleepGradient)"
            strokeWidth="8"
            strokeDasharray="220"
            strokeDashoffset="44"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="sleepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-white">82%</span>
          <span className="text-[8px] text-indigo-300">Qualidade</span>
        </div>
      </div>

      {/* Sleep Phases */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-indigo-400 rounded-full" />
          <span className="text-[8px] text-slate-300 flex-1">REM</span>
          <span className="text-[8px] text-white font-medium">1h 45m</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-violet-400 rounded-full" />
          <span className="text-[8px] text-slate-300 flex-1">Profundo</span>
          <span className="text-[8px] text-white font-medium">2h 30m</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full" />
          <span className="text-[8px] text-slate-300 flex-1">Leve</span>
          <span className="text-[8px] text-white font-medium">3h 15m</span>
        </div>
      </div>

      {/* Bottom Stat */}
      <div className="mt-3 bg-indigo-900/50 rounded-lg p-2 text-center">
        <span className="text-[8px] text-indigo-300">Tempo Total</span>
        <div className="text-sm font-bold text-white">7h 30m</div>
      </div>
    </div>
  );
}

// iPhone Frame Component
function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame - More realistic with metallic edges */}
      <div className="relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-[3rem] p-[3px] shadow-2xl shadow-black/60">
        {/* Inner bezel */}
        <div className="bg-black rounded-[2.8rem] p-2">
          {/* Dynamic Island */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-slate-800 rounded-full" />
            <div className="w-3 h-3 bg-slate-900 rounded-full ring-1 ring-slate-700" />
          </div>
          {/* Screen */}
          <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden w-56 h-[480px]">
            <div className="pt-10 px-2 h-full">
              {children}
            </div>
            {/* Screen reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>
          {/* Bottom bar indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// Smart Ring Visual Component
function SmartRingVisual() {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Outer glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-indigo-500/20 rounded-full blur-xl" />
      
      {/* Ring */}
      <div className="relative w-24 h-24">
        {/* Ring body - gradient metallic look */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 shadow-2xl shadow-black/50" />
        
        {/* Inner circle (hole) */}
        <div className="absolute inset-[30%] rounded-full bg-slate-950 shadow-inner" />
        
        {/* Highlight arc */}
        <svg className="absolute inset-0 w-full h-full -rotate-45" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="url(#ringHighlight)"
            strokeWidth="4"
            strokeDasharray="60 180"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="ringHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Subtle inner glow */}
        <div className="absolute inset-[25%] rounded-full border border-fuchsia-500/20" />
      </div>
      
      {/* Floating metrics */}
      <div className="absolute -top-2 -right-2 px-2 py-1 bg-slate-800/90 rounded-lg border border-fuchsia-500/30 text-[10px]">
        <Activity className="w-3 h-3 text-fuchsia-400 inline mr-1" />
        <span className="text-white font-medium">24/7</span>
      </div>
    </div>
  );
}

export function AppShowcase() {
  const features = [
    { icon: Brain, label: "Performance Cognitiva", value: "Mensurável" },
    { icon: Moon, label: "Qualidade do Sono", value: "Rastreada" },
    { icon: TrendingUp, label: "Evolução Individual", value: "30+ dias" },
    { icon: Zap, label: "Correlações AI", value: "Tempo real" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-violet-900" />
      
      {/* Bokeh Effects */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-fuchsia-400/15 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/4 w-48 h-48 bg-indigo-300/15 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockups + Ring */}
          <div className="relative flex justify-center lg:justify-center">
            {/* Phones Container */}
            <div className="relative flex items-end">
              <PhoneFrame className="transform -rotate-6 translate-y-4 hover:-translate-y-2 transition-transform duration-500">
                <DashboardScreen />
              </PhoneFrame>
              <PhoneFrame className="transform rotate-6 -translate-x-12 z-10 hover:-translate-y-4 transition-transform duration-500">
                <SleepScreen />
              </PhoneFrame>
              
              {/* Smart Ring - floating near phones */}
              <div className="absolute -bottom-8 -right-4 z-20 transform hover:scale-110 transition-transform duration-300">
                <SmartRingVisual />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-fuchsia-400 uppercase tracking-widest mb-3 font-medium">
              Plataforma + Smart Ring
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Dados precisos para{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                evolução mensurável
              </span>
            </h2>
            
            <p className="text-lg text-white/80 mb-4 max-w-xl">
              Smart Ring discreto e elegante que coleta dados fisiológicos 24/7. 
              Não substitui relógios sociais. Não possui estética esportiva.
            </p>

            <p className="text-base text-white/60 mb-8 max-w-xl">
              Dashboard cognitivo com evolução histórica e correlação entre rotina, 
              suplementos, recuperação e desempenho. Comparação apenas consigo mesmo.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <feature.icon className="w-5 h-5 text-fuchsia-300" />
                  <div>
                    <div className="text-xs text-white/70">{feature.label}</div>
                    <div className="text-sm font-semibold text-white">{feature.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
