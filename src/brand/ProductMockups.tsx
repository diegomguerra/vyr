import { VYR_COLORS, VYR_LABELS, VYR_TYPOGRAPHY } from "./tokens";

interface SachetMockupProps {
  variant: "BOOT" | "HOLD" | "CLEAR";
  className?: string;
}

export function SachetMockup({ variant, className = "" }: SachetMockupProps) {
  const label = VYR_LABELS[variant];
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Sachet - Larger and more prominent */}
      <div 
        className="relative w-32 h-52 rounded-sm overflow-hidden shadow-lg"
        style={{ 
          backgroundColor: label.color,
          fontFamily: VYR_TYPOGRAPHY.logo.fontFamily 
        }}
      >
        {/* Top seal */}
        <div 
          className="absolute top-0 left-0 right-0 h-4"
          style={{ backgroundColor: VYR_COLORS.gray[700] }}
        />
        
        {/* Content area */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* VYR Logo */}
          <span 
            className="text-sm tracking-[0.35em] mb-1.5 font-bold"
            style={{ 
              color: variant === "BOOT" ? VYR_COLORS.black : VYR_COLORS.white,
              fontWeight: VYR_TYPOGRAPHY.logo.fontWeight 
            }}
          >
            VYR
          </span>
          
          {/* Label */}
          <span 
            className="text-xs tracking-[0.25em]"
            style={{ 
              color: variant === "BOOT" ? VYR_COLORS.gray[500] : VYR_COLORS.gray[300],
              fontWeight: 500 
            }}
          >
            {label.name.split(" ")[1]}
          </span>
        </div>
        
        {/* Bottom info */}
        <div className="absolute bottom-3 left-0 right-0 text-center">
          <span 
            className="text-[8px] tracking-widest opacity-60"
            style={{ color: variant === "BOOT" ? VYR_COLORS.black : VYR_COLORS.white }}
          >
            30 DOSES
          </span>
        </div>
      </div>
      
      {/* Spacer to maintain layout - label hidden */}
      <span className="mt-4 text-sm tracking-[0.2em] font-medium invisible">
        {label.name}
      </span>
    </div>
  );
}

interface BoxMockupProps {
  variant: "BOOT" | "HOLD" | "CLEAR";
  className?: string;
}

export function BoxMockup({ variant, className = "" }: BoxMockupProps) {
  const label = VYR_LABELS[variant];
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Box - 3D perspective */}
      <div className="relative" style={{ perspective: "400px" }}>
        {/* Front face */}
        <div 
          className="relative w-32 h-44 rounded-sm"
          style={{ 
            backgroundColor: label.color,
            fontFamily: VYR_TYPOGRAPHY.logo.fontFamily,
            transform: "rotateY(-5deg)",
            boxShadow: `8px 0 20px -5px ${VYR_COLORS.black}`
          }}
        >
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            {/* VYR Logo */}
            <span 
              className="text-lg tracking-[0.4em] mb-2"
              style={{ 
                color: variant === "BOOT" ? VYR_COLORS.black : VYR_COLORS.white,
                fontWeight: VYR_TYPOGRAPHY.logo.fontWeight 
              }}
            >
              VYR
            </span>
            
            {/* Label */}
            <span 
              className="text-xs tracking-[0.25em]"
              style={{ 
                color: variant === "BOOT" ? VYR_COLORS.gray[500] : VYR_COLORS.gray[300],
                fontWeight: 400 
              }}
            >
              {label.name.split(" ")[1]}
            </span>
          </div>
          
          {/* Bottom info */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span 
              className="text-[8px] tracking-widest opacity-40"
              style={{ color: variant === "BOOT" ? VYR_COLORS.black : VYR_COLORS.white }}
            >
              30 SACHETS
            </span>
          </div>
          
          {/* Side edge */}
          <div 
            className="absolute top-0 right-0 w-3 h-full rounded-r-sm"
            style={{ 
              backgroundColor: variant === "BOOT" ? VYR_COLORS.gray[200] : VYR_COLORS.gray[800],
              transform: "translateX(100%) rotateY(90deg)",
              transformOrigin: "left"
            }}
          />
        </div>
      </div>
      
      {/* Spacer to maintain layout - label hidden */}
      <span className="mt-4 text-xs tracking-[0.15em] invisible">
        {label.name}
      </span>
    </div>
  );
}

export function AllProductMockups() {
  return (
    <div className="space-y-16">
      {/* Sachets */}
      <div>
        <h3 
          className="text-xs tracking-[0.3em] mb-8 opacity-50"
          style={{ 
            color: VYR_COLORS.gray[400],
            fontFamily: VYR_TYPOGRAPHY.logo.fontFamily 
          }}
        >
          SACHETS
        </h3>
        <div className="flex items-end justify-center gap-8">
          <SachetMockup variant="BOOT" />
          <SachetMockup variant="HOLD" />
          <SachetMockup variant="CLEAR" />
        </div>
      </div>
      
      {/* Boxes */}
      <div>
        <h3 
          className="text-xs tracking-[0.3em] mb-8 opacity-50"
          style={{ 
            color: VYR_COLORS.gray[400],
            fontFamily: VYR_TYPOGRAPHY.logo.fontFamily 
          }}
        >
          PACKAGING
        </h3>
        <div className="flex items-end justify-center gap-12">
          <BoxMockup variant="BOOT" />
          <BoxMockup variant="HOLD" />
          <BoxMockup variant="CLEAR" />
        </div>
      </div>
    </div>
  );
}
