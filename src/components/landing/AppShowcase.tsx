import { TrendingUp, Moon, Brain, Zap } from "lucide-react";
import smartRingImage from "@/assets/smart-ring-nobg.png";

// Simulated Dashboard Screen
function DashboardScreen() {
  return (
    <div className="bg-vyr-gray-900 rounded-2xl p-3 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-vyr-gray-500 rounded-lg" />
          <span className="text-vyr-white text-xs font-semibold font-mono">VYR Dashboard</span>
        </div>
        <div className="w-6 h-6 bg-vyr-gray-500 rounded-full" />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-vyr-black rounded-lg p-2 border border-vyr-gray-500/20">
          <div className="text-[8px] text-vyr-gray-100/60">Performance</div>
          <div className="text-sm font-bold text-vyr-white">+23%</div>
          <div className="flex gap-0.5 mt-1">
            {[40, 55, 45, 60, 75, 65, 80].map((h, i) => (
              <div key={i} className="w-1.5 bg-vyr-gray-100/30 rounded-sm" style={{ height: `${h * 0.2}px` }} />
            ))}
          </div>
        </div>
        <div className="bg-vyr-black rounded-lg p-2 border border-vyr-gray-500/20">
          <div className="text-[8px] text-vyr-gray-100/60">Qualidade do Sono</div>
          <div className="text-sm font-bold text-vyr-cold-blue">8.2h</div>
          <div className="flex gap-0.5 mt-1">
            {[60, 70, 65, 80, 75, 85, 90].map((h, i) => (
              <div key={i} className="w-1.5 bg-vyr-cold-blue/30 rounded-sm" style={{ height: `${h * 0.2}px` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-vyr-black rounded-lg p-2 mb-3 border border-vyr-gray-500/20">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[8px] text-vyr-gray-100/60">Evolução Cognitiva</span>
          <span className="text-[8px] text-vyr-white">+15%</span>
        </div>
        <svg viewBox="0 0 200 60" className="w-full h-12">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#525252" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#525252" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q25,45 50,40 T100,30 T150,25 T200,15"
            fill="none"
            stroke="#E5E5E5"
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
        <div className="flex-1 bg-vyr-gray-900 rounded-lg p-2 border border-vyr-gray-500/30">
          <div className="text-[8px] text-vyr-gray-100/60">Foco</div>
          <div className="text-xs font-bold text-vyr-white">Alto</div>
        </div>
        <div className="flex-1 bg-vyr-gray-900 rounded-lg p-2 border border-vyr-gray-500/30">
          <div className="text-[8px] text-vyr-gray-100/60">Energia</div>
          <div className="text-xs font-bold text-vyr-white">+18%</div>
        </div>
      </div>
    </div>
  );
}

// Simulated Sleep Tracking Screen
function SleepScreen() {
  return (
    <div className="bg-vyr-gray-900 rounded-2xl p-3 h-full">
      {/* Header */}
      <div className="text-center mb-3">
        <Moon className="w-5 h-5 text-vyr-cold-blue mx-auto mb-1" />
        <span className="text-vyr-white text-xs font-semibold font-mono">Análise do Sono</span>
      </div>

      {/* Sleep Circle */}
      <div className="relative w-24 h-24 mx-auto mb-3">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#171717" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#1E293B"
            strokeWidth="8"
            strokeDasharray="220"
            strokeDashoffset="44"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-vyr-white">82%</span>
          <span className="text-[8px] text-vyr-cold-blue">Qualidade</span>
        </div>
      </div>

      {/* Sleep Phases */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-vyr-cold-blue rounded-full" />
          <span className="text-[8px] text-vyr-gray-100/60 flex-1">REM</span>
          <span className="text-[8px] text-vyr-white font-medium">1h 45m</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-vyr-gray-500 rounded-full" />
          <span className="text-[8px] text-vyr-gray-100/60 flex-1">Profundo</span>
          <span className="text-[8px] text-vyr-white font-medium">2h 30m</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-vyr-gray-100 rounded-full" />
          <span className="text-[8px] text-vyr-gray-100/60 flex-1">Leve</span>
          <span className="text-[8px] text-vyr-white font-medium">3h 15m</span>
        </div>
      </div>

      {/* Bottom Stat */}
      <div className="mt-3 bg-vyr-black rounded-lg p-2 text-center border border-vyr-gray-500/20">
        <span className="text-[8px] text-vyr-cold-blue">Tempo Total</span>
        <div className="text-sm font-bold text-vyr-white">7h 30m</div>
      </div>
    </div>
  );
}

// iPhone Frame Component
function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative bg-gradient-to-b from-vyr-gray-500 via-vyr-gray-900 to-vyr-black rounded-[2rem] sm:rounded-[3rem] p-[2px] sm:p-[3px] shadow-2xl shadow-black/60">
        {/* Inner bezel */}
        <div className="bg-vyr-black rounded-[1.8rem] sm:rounded-[2.8rem] p-1.5 sm:p-2">
          {/* Dynamic Island */}
          <div className="absolute top-3 sm:top-5 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-5 sm:h-7 bg-vyr-black rounded-full z-10 flex items-center justify-center gap-1.5 sm:gap-2">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-vyr-gray-900 rounded-full" />
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-vyr-gray-900 rounded-full ring-1 ring-vyr-gray-500/50" />
          </div>
          {/* Screen */}
          <div className="relative bg-vyr-gray-900 rounded-[2.5rem] overflow-hidden w-40 h-[340px] sm:w-56 sm:h-[480px]">
            <div className="pt-10 px-2 h-full">
              {children}
            </div>
            {/* Screen reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>
          {/* Bottom bar indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-28 h-1 bg-vyr-gray-500 rounded-full" />
        </div>
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
      {/* Background - Neutral VYR */}
      <div className="absolute inset-0 bg-vyr-gray-900" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#17171710_1px,transparent_1px),linear-gradient(to_bottom,#17171710_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockups + Ring */}
          <div className="relative flex justify-center">
            {/* Phones Container */}
            <div className="relative flex items-end scale-[0.7] sm:scale-100 origin-center">
              <PhoneFrame className="transform -rotate-6 translate-y-4 hover:-translate-y-2 transition-transform duration-500">
                <DashboardScreen />
              </PhoneFrame>
              <PhoneFrame className="transform rotate-6 -translate-x-8 sm:-translate-x-12 z-10 hover:-translate-y-4 transition-transform duration-500">
                <SleepScreen />
              </PhoneFrame>
              
              {/* VYR NODE - clean transparent image */}
              <div className="absolute -bottom-8 sm:-bottom-12 -right-2 sm:-right-4 z-20">
                <div className="relative group">
                  {/* Subtle glow */}
                  <div className="absolute inset-0 bg-vyr-gray-500/20 rounded-full blur-2xl scale-125 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                  <img 
                    src={smartRingImage} 
                    alt="VYR NODE" 
                    className="w-20 sm:w-32 h-auto relative z-10 drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-vyr-gray-100 uppercase tracking-widest mb-3 font-mono">
              Plataforma + VYR NODE
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vyr-white mb-6 leading-tight">
              Dados precisos para{" "}
              <span className="text-vyr-gray-100">
                evolução mensurável
              </span>
            </h2>
            
            <p className="text-lg text-vyr-gray-100/80 mb-4 max-w-xl">
              VYR NODE discreto e técnico que coleta dados fisiológicos 24/7. 
              Não substitui relógios sociais. Não possui estética esportiva.
            </p>

            <p className="text-base text-vyr-gray-500 mb-8 max-w-xl">
              Dashboard cognitivo com evolução histórica e correlação entre rotina, 
              suplementos, recuperação e desempenho. Comparação apenas consigo mesmo.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3 bg-vyr-black/50 backdrop-blur-sm rounded-xl p-3 border border-vyr-gray-500/20">
                  <feature.icon className="w-5 h-5 text-vyr-gray-100" />
                  <div>
                    <div className="text-xs text-vyr-gray-500">{feature.label}</div>
                    <div className="text-sm font-semibold text-vyr-white font-mono">{feature.value}</div>
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
