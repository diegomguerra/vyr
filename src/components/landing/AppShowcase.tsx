import { Button } from "@/components/ui/button";
import { TrendingUp, Moon, Brain, Zap } from "lucide-react";

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
      {/* Phone Frame */}
      <div className="relative bg-slate-800 rounded-[2.5rem] p-2 shadow-2xl shadow-black/50">
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
        {/* Screen */}
        <div className="relative bg-slate-900 rounded-[2rem] overflow-hidden w-44 h-80">
          <div className="pt-6 px-1 h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppShowcase() {
  const features = [
    { icon: Brain, label: "Performance Cognitiva", value: "+23%" },
    { icon: Moon, label: "Qualidade do Sono", value: "82%" },
    { icon: TrendingUp, label: "Evolução Contínua", value: "30 dias" },
    { icon: Zap, label: "Insights em Tempo Real", value: "24/7" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-500 to-cyan-600" />
      
      {/* Bokeh Effects */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/4 w-48 h-48 bg-amber-200/20 rounded-full blur-2xl" />
      <div className="absolute bottom-40 left-1/4 w-56 h-56 bg-emerald-300/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockups */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Stats Badge */}
            <div className="absolute -left-4 top-1/4 z-20 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-2xl font-bold text-slate-800">500+</div>
              <div className="text-xs text-slate-600">Usuários</div>
            </div>

            {/* Phones Container */}
            <div className="relative flex items-end gap-[-20px]">
              <PhoneFrame className="transform -rotate-6 translate-y-4 hover:-translate-y-2 transition-transform duration-500">
                <DashboardScreen />
              </PhoneFrame>
              <PhoneFrame className="transform rotate-6 -translate-x-8 z-10 hover:-translate-y-4 transition-transform duration-500">
                <SleepScreen />
              </PhoneFrame>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Os insights mais detalhados sobre sua{" "}
              <span className="text-cyan-200">performance cognitiva</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Acompanhe sua suplementação com dados precisos sobre sono, foco e energia. 
              Visualize sua evolução ao longo do tempo com dashboards intuitivos e 
              recomendações personalizadas baseadas em seus dados.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <feature.icon className="w-5 h-5 text-cyan-300" />
                  <div>
                    <div className="text-xs text-white/70">{feature.label}</div>
                    <div className="text-sm font-semibold text-white">{feature.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
