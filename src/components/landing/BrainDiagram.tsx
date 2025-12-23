import React from "react";

interface BrainArea {
  name: string;
  funcao: string;
}

interface BrainDiagramProps {
  areas: BrainArea[];
  accentColor: string;
  variant: "dia" | "tarde" | "noite";
}

export function BrainDiagram({ areas, accentColor, variant }: BrainDiagramProps) {
  const colors = {
    dia: {
      primary: "#f59e0b",
      secondary: "#fb923c",
      glow: "rgba(245, 158, 11, 0.3)",
      bg: "rgba(245, 158, 11, 0.05)"
    },
    tarde: {
      primary: "#a855f7",
      secondary: "#d946ef",
      glow: "rgba(168, 85, 247, 0.3)",
      bg: "rgba(168, 85, 247, 0.05)"
    },
    noite: {
      primary: "#6366f1",
      secondary: "#818cf8",
      glow: "rgba(99, 102, 241, 0.3)",
      bg: "rgba(99, 102, 241, 0.05)"
    }
  };

  const c = colors[variant];

  // Brain region positions for labels
  const regionPositions: Record<string, { x: number; y: number; align: "left" | "right" }> = {
    "Córtex Pré-Frontal": { x: 45, y: 35, align: "left" },
    "Hipocampo": { x: 145, y: 85, align: "right" },
    "Córtex Temporal Medial": { x: 145, y: 110, align: "right" },
    "Tronco Encefálico": { x: 145, y: 140, align: "right" },
    "Amígdala": { x: 45, y: 95, align: "left" },
    "Hipotálamo": { x: 45, y: 75, align: "left" },
    "Sistema Límbico": { x: 145, y: 70, align: "right" },
    "Sistema GABAérgico": { x: 45, y: 115, align: "left" },
    "Neocórtex": { x: 145, y: 45, align: "right" }
  };

  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full blur-3xl opacity-50"
        style={{ background: `radial-gradient(circle, ${c.glow} 0%, transparent 70%)` }}
      />
      
      <svg
        viewBox="0 0 200 180"
        className="w-full h-auto relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background glow */}
        <defs>
          <radialGradient id={`brainGlow-${variant}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={c.primary} stopOpacity="0.2" />
            <stop offset="100%" stopColor={c.primary} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`brainGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c.primary} />
            <stop offset="100%" stopColor={c.secondary} />
          </linearGradient>
          <filter id={`glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Head silhouette */}
        <path
          d="M100 10 
             C 140 10, 170 40, 170 80 
             C 170 110, 160 130, 145 145
             L 140 155
             C 138 160, 130 165, 120 165
             L 80 165
             C 70 165, 62 160, 60 155
             L 55 145
             C 40 130, 30 110, 30 80
             C 30 40, 60 10, 100 10 Z"
          fill="rgba(30, 41, 59, 0.8)"
          stroke={c.primary}
          strokeWidth="1.5"
          strokeOpacity="0.3"
        />

        {/* Brain shape */}
        <g filter={`url(#glow-${variant})`}>
          {/* Frontal lobe - Córtex Pré-Frontal */}
          <path
            d="M55 55 
               C 55 40, 70 30, 90 30
               C 95 30, 100 32, 100 35
               L 100 55
               C 100 60, 95 65, 85 65
               L 65 65
               C 58 65, 55 60, 55 55 Z"
            fill={areas.some(a => a.name.includes("Pré-Frontal")) ? c.primary : "rgba(100, 116, 139, 0.4)"}
            fillOpacity={areas.some(a => a.name.includes("Pré-Frontal")) ? "0.8" : "0.4"}
            stroke={c.primary}
            strokeWidth="1"
            strokeOpacity="0.5"
          />

          {/* Parietal lobe - Neocórtex */}
          <path
            d="M100 35
               C 100 32, 105 30, 110 30
               C 130 30, 145 40, 145 55
               C 145 60, 142 65, 135 65
               L 100 65
               L 100 35 Z"
            fill={areas.some(a => a.name.includes("Neocórtex") || a.name.includes("Córtex Cerebral")) ? c.primary : "rgba(100, 116, 139, 0.4)"}
            fillOpacity={areas.some(a => a.name.includes("Neocórtex") || a.name.includes("Córtex Cerebral")) ? "0.7" : "0.4"}
            stroke={c.primary}
            strokeWidth="1"
            strokeOpacity="0.5"
          />

          {/* Temporal lobe - Córtex Temporal */}
          <path
            d="M135 65
               C 145 65, 150 75, 150 85
               C 150 100, 140 110, 125 115
               L 110 115
               C 105 115, 100 110, 100 105
               L 100 65
               L 135 65 Z"
            fill={areas.some(a => a.name.includes("Temporal")) ? c.primary : "rgba(100, 116, 139, 0.4)"}
            fillOpacity={areas.some(a => a.name.includes("Temporal")) ? "0.75" : "0.4"}
            stroke={c.primary}
            strokeWidth="1"
            strokeOpacity="0.5"
          />

          {/* Hippocampus */}
          <ellipse
            cx="115"
            cy="90"
            rx="18"
            ry="12"
            fill={areas.some(a => a.name.includes("Hipocampo")) ? c.secondary : "rgba(100, 116, 139, 0.3)"}
            fillOpacity={areas.some(a => a.name.includes("Hipocampo")) ? "0.9" : "0.3"}
            stroke={c.secondary}
            strokeWidth="1.5"
            strokeOpacity={areas.some(a => a.name.includes("Hipocampo")) ? "1" : "0.3"}
          />

          {/* Amygdala */}
          <ellipse
            cx="90"
            cy="95"
            rx="10"
            ry="8"
            fill={areas.some(a => a.name.includes("Amígdala") || a.name.includes("Límbico")) ? c.secondary : "rgba(100, 116, 139, 0.3)"}
            fillOpacity={areas.some(a => a.name.includes("Amígdala") || a.name.includes("Límbico")) ? "0.9" : "0.3"}
            stroke={c.secondary}
            strokeWidth="1.5"
            strokeOpacity={areas.some(a => a.name.includes("Amígdala") || a.name.includes("Límbico")) ? "1" : "0.3"}
          />

          {/* Hypothalamus */}
          <ellipse
            cx="100"
            cy="110"
            rx="8"
            ry="6"
            fill={areas.some(a => a.name.includes("Hipotálamo")) ? c.secondary : "rgba(100, 116, 139, 0.3)"}
            fillOpacity={areas.some(a => a.name.includes("Hipotálamo")) ? "0.9" : "0.3"}
            stroke={c.secondary}
            strokeWidth="1.5"
            strokeOpacity={areas.some(a => a.name.includes("Hipotálamo")) ? "1" : "0.3"}
          />

          {/* Brain stem - Tronco Encefálico */}
          <path
            d="M95 115
               L 95 145
               C 95 150, 100 155, 105 155
               C 110 155, 115 150, 115 145
               L 115 115
               C 115 118, 108 120, 105 120
               C 102 120, 95 118, 95 115 Z"
            fill={areas.some(a => a.name.includes("Tronco") || a.name.includes("Encefálico")) ? c.primary : "rgba(100, 116, 139, 0.4)"}
            fillOpacity={areas.some(a => a.name.includes("Tronco") || a.name.includes("Encefálico")) ? "0.8" : "0.4"}
            stroke={c.primary}
            strokeWidth="1"
            strokeOpacity="0.5"
          />

          {/* Cerebellum */}
          <path
            d="M125 115
               C 140 115, 150 125, 150 135
               C 150 145, 140 150, 125 150
               L 115 145
               L 115 120
               C 115 118, 120 115, 125 115 Z"
            fill="rgba(100, 116, 139, 0.4)"
            stroke={c.primary}
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </g>

        {/* Connection lines and labels */}
        {areas.map((area, i) => {
          const pos = regionPositions[area.name];
          if (!pos) return null;

          const targetX = pos.align === "left" ? 70 : 130;
          const targetY = pos.y + 10;

          return (
            <g key={i}>
              {/* Connection line */}
              <line
                x1={pos.x}
                y1={pos.y + 5}
                x2={targetX}
                y2={targetY}
                stroke={c.primary}
                strokeWidth="1"
                strokeOpacity="0.5"
                strokeDasharray="2,2"
              />
              {/* Dot at brain */}
              <circle
                cx={targetX}
                cy={targetY}
                r="3"
                fill={c.primary}
              />
            </g>
          );
        })}
      </svg>

      {/* Labels */}
      <div className="mt-4 space-y-2">
        {areas.map((area, i) => (
          <div 
            key={i}
            className="flex items-center gap-2 text-xs"
          >
            <div 
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: c.primary }}
            />
            <span className="text-white font-medium">{area.name}</span>
            <span className="text-slate-500">— {area.funcao}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
