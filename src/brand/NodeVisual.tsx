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
      {/* Ring representation - technical, minimal */}
      <div className="relative">
        {/* Outer ring */}
        <div 
          className="rounded-full"
          style={{
            width: dim.ring,
            height: dim.ring,
            background: `linear-gradient(135deg, ${VYR_COLORS.gray[800]} 0%, ${VYR_COLORS.black} 50%, ${VYR_COLORS.gray[900]} 100%)`,
            boxShadow: `
              inset 0 2px 4px rgba(255,255,255,0.05),
              inset 0 -2px 4px rgba(0,0,0,0.3),
              0 10px 30px -10px ${VYR_COLORS.black}
            `
          }}
        >
          {/* Inner cutout */}
          <div 
            className="absolute rounded-full"
            style={{
              top: dim.thickness,
              left: dim.thickness,
              right: dim.thickness,
              bottom: dim.thickness,
              backgroundColor: VYR_COLORS.black,
              boxShadow: `inset 0 2px 8px rgba(0,0,0,0.8)`
            }}
          />
          
          {/* Subtle sensor indicator - very minimal */}
          <div 
            className="absolute rounded-full opacity-30"
            style={{
              width: 4,
              height: 4,
              bottom: dim.thickness + 4,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: VYR_COLORS.coldBlue
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
