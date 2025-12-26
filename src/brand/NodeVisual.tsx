import { VYR_COLORS, VYR_TYPOGRAPHY } from "./tokens";

interface NodeVisualProps {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export function NodeVisual({ size = "md", showLabel = true, className = "" }: NodeVisualProps) {
  const dimensions = {
    sm: { ring: 80, thickness: 8, logo: "text-[6px]" },
    md: { ring: 120, thickness: 12, logo: "text-[8px]" },
    lg: { ring: 180, thickness: 18, logo: "text-xs" },
  };
  
  const dim = dimensions[size];
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Ring representation - premium metallic with shine */}
      <div className="relative">
        {/* Outer glow - cold blue ambient */}
        <div 
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background: `radial-gradient(circle, hsl(200 30% 45% / 0.5) 0%, hsl(210 25% 30% / 0.3) 40%, transparent 70%)`,
            transform: 'scale(1.6)'
          }}
        />
        
        {/* Secondary glow layer */}
        <div 
          className="absolute inset-0 rounded-full blur-xl"
          style={{
            background: `radial-gradient(circle, hsl(195 35% 55% / 0.4) 0%, transparent 60%)`,
            transform: 'scale(1.3)'
          }}
        />
        
        {/* Outer ring - premium titanium look */}
        <div 
          className="relative rounded-full overflow-hidden"
          style={{
            width: dim.ring,
            height: dim.ring,
            background: `
              linear-gradient(145deg, 
                hsl(210 8% 55%) 0%, 
                hsl(210 6% 35%) 20%, 
                hsl(210 4% 18%) 50%, 
                hsl(210 6% 30%) 80%, 
                hsl(210 8% 45%) 100%
              )
            `,
            boxShadow: `
              inset 0 3px 8px rgba(255,255,255,0.25),
              inset 0 -3px 8px rgba(0,0,0,0.4),
              0 0 40px hsl(200 30% 50% / 0.35),
              0 0 80px hsl(200 25% 40% / 0.2),
              0 15px 40px -15px rgba(0,0,0,0.8)
            `
          }}
        >
          {/* Metallic highlight arc - top shine */}
          <div 
            className="absolute rounded-full"
            style={{
              top: 2,
              left: '15%',
              right: '15%',
              height: dim.thickness * 0.6,
              background: `linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)`,
              filter: 'blur(1px)'
            }}
          />
          
          {/* Secondary highlight - left edge */}
          <div 
            className="absolute rounded-full"
            style={{
              top: '20%',
              left: 2,
              width: dim.thickness * 0.4,
              height: '30%',
              background: `linear-gradient(90deg, rgba(255,255,255,0.2) 0%, transparent 100%)`,
              filter: 'blur(1px)'
            }}
          />
          
          {/* Inner cutout - deep black center */}
          <div 
            className="absolute rounded-full"
            style={{
              top: dim.thickness,
              left: dim.thickness,
              right: dim.thickness,
              bottom: dim.thickness,
              backgroundColor: VYR_COLORS.black,
              boxShadow: `
                inset 0 4px 12px rgba(0,0,0,0.9),
                inset 0 0 20px rgba(0,0,0,0.5)
              `
            }}
          />
          
          {/* Sensor indicator with enhanced glow */}
          <div 
            className="absolute rounded-full animate-pulse"
            style={{
              width: size === 'lg' ? 6 : size === 'md' ? 5 : 4,
              height: size === 'lg' ? 6 : size === 'md' ? 5 : 4,
              bottom: dim.thickness + 4,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: 'hsl(195 40% 55%)',
              boxShadow: `
                0 0 8px hsl(195 45% 55% / 0.9),
                0 0 16px hsl(195 40% 50% / 0.6),
                0 0 24px hsl(200 35% 45% / 0.4)
              `
            }}
          />
        </div>
        
        {/* Logo engraving - very subtle */}
        <div 
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: dim.thickness / 2 - 2,
            fontFamily: VYR_TYPOGRAPHY.logo.fontFamily
          }}
        >
          <span 
            className={`${dim.logo} tracking-[0.2em] opacity-20`}
            style={{ color: VYR_COLORS.gray[400] }}
          >
            VYR
          </span>
        </div>
      </div>
      
      {/* Label */}
      {showLabel && (
        <div className="mt-6 text-center">
          <span 
            className="text-xs tracking-[0.3em]"
            style={{ 
              color: VYR_COLORS.gray[400],
              fontFamily: VYR_TYPOGRAPHY.logo.fontFamily 
            }}
          >
            VYR NODE
          </span>
          <p 
            className="mt-2 text-[10px] tracking-wider opacity-50"
            style={{ color: VYR_COLORS.gray[500] }}
          >
            PHYSIOLOGICAL SENSOR
          </p>
        </div>
      )}
    </div>
  );
}

export function NodeShowcase() {
  return (
    <div className="space-y-12">
      {/* Main visual */}
      <div className="flex justify-center">
        <NodeVisual size="lg" />
      </div>
      
      {/* Technical specs - minimal */}
      <div 
        className="flex justify-center gap-12"
        style={{ fontFamily: VYR_TYPOGRAPHY.logo.fontFamily }}
      >
        <div className="text-center">
          <span 
            className="text-[10px] tracking-[0.2em] block mb-1"
            style={{ color: VYR_COLORS.gray[500] }}
          >
            SENSORS
          </span>
          <span 
            className="text-xs"
            style={{ color: VYR_COLORS.gray[300] }}
          >
            PPG · HRV · SpO2
          </span>
        </div>
        
        <div className="text-center">
          <span 
            className="text-[10px] tracking-[0.2em] block mb-1"
            style={{ color: VYR_COLORS.gray[500] }}
          >
            MATERIAL
          </span>
          <span 
            className="text-xs"
            style={{ color: VYR_COLORS.gray[300] }}
          >
            Titanium
          </span>
        </div>
        
        <div className="text-center">
          <span 
            className="text-[10px] tracking-[0.2em] block mb-1"
            style={{ color: VYR_COLORS.gray[500] }}
          >
            BATTERY
          </span>
          <span 
            className="text-xs"
            style={{ color: VYR_COLORS.gray[300] }}
          >
            7 Days
          </span>
        </div>
      </div>
      
      {/* Size variants */}
      <div>
        <h4 
          className="text-[10px] tracking-[0.3em] text-center mb-6 opacity-40"
          style={{ 
            color: VYR_COLORS.gray[400],
            fontFamily: VYR_TYPOGRAPHY.logo.fontFamily 
          }}
        >
          SIZE VARIANTS
        </h4>
        <div className="flex items-end justify-center gap-8">
          <NodeVisual size="sm" showLabel={false} />
          <NodeVisual size="md" showLabel={false} />
          <NodeVisual size="lg" showLabel={false} />
        </div>
      </div>
    </div>
  );
}
