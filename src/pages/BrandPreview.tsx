import { 
  VYR_COLORS, 
  VYR_TYPOGRAPHY,
  VYRLogo, 
  AllLabels, 
  LabelComparison,
  AllProductMockups,
  NodeShowcase 
} from "@/brand";

export default function BrandPreview() {
  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor: VYR_COLORS.black,
        fontFamily: VYR_TYPOGRAPHY.body.fontFamily 
      }}
    >
      {/* Header */}
      <header 
        className="border-b py-6 px-8"
        style={{ borderColor: VYR_COLORS.gray[800] }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <VYRLogo variant="light" size="md" />
          <span 
            className="text-xs tracking-[0.3em] opacity-40"
            style={{ 
              color: VYR_COLORS.gray[400],
              fontFamily: VYR_TYPOGRAPHY.logo.fontFamily 
            }}
          >
            BRAND IDENTITY — ATO 1
          </span>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-8 py-16 space-y-24">
        
        {/* Section 1: Logo */}
        <section>
          <SectionTitle>01 — LOGO</SectionTitle>
          <div 
            className="mt-8 p-12 rounded-sm border"
            style={{ 
              backgroundColor: VYR_COLORS.gray[900],
              borderColor: VYR_COLORS.gray[800]
            }}
          >
            <div className="space-y-12">
              {/* Logo on dark */}
              <div className="text-center">
                <p 
                  className="text-[10px] tracking-[0.2em] mb-6 opacity-40"
                  style={{ color: VYR_COLORS.gray[400] }}
                >
                  ON DARK BACKGROUND
                </p>
                <div className="flex justify-center gap-12">
                  <VYRLogo variant="light" size="sm" />
                  <VYRLogo variant="light" size="md" />
                  <VYRLogo variant="light" size="lg" />
                </div>
              </div>
              
              {/* Logo on light */}
              <div className="text-center">
                <p 
                  className="text-[10px] tracking-[0.2em] mb-6 opacity-40"
                  style={{ color: VYR_COLORS.gray[400] }}
                >
                  ON LIGHT BACKGROUND
                </p>
                <div 
                  className="p-8 rounded-sm"
                  style={{ backgroundColor: VYR_COLORS.white }}
                >
                  <div className="flex justify-center gap-12">
                    <VYRLogo variant="dark" size="sm" />
                    <VYRLogo variant="dark" size="md" />
                    <VYRLogo variant="dark" size="lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 2: Color Palette */}
        <section>
          <SectionTitle>02 — COLOR PALETTE</SectionTitle>
          <div 
            className="mt-8 p-12 rounded-sm border"
            style={{ 
              backgroundColor: VYR_COLORS.gray[900],
              borderColor: VYR_COLORS.gray[800]
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ColorSwatch name="BLACK" color={VYR_COLORS.black} hex="#0A0A0A" />
              <ColorSwatch name="WHITE" color={VYR_COLORS.white} hex="#FAFAFA" light />
              <ColorSwatch name="GRAY 100" color={VYR_COLORS.gray[100]} hex="#E5E5E5" light />
              <ColorSwatch name="GRAY 200" color={VYR_COLORS.gray[200]} hex="#D4D4D4" light />
              <ColorSwatch name="GRAY 300" color={VYR_COLORS.gray[300]} hex="#A3A3A3" />
              <ColorSwatch name="GRAY 400" color={VYR_COLORS.gray[400]} hex="#737373" />
              <ColorSwatch name="GRAY 500" color={VYR_COLORS.gray[500]} hex="#525252" />
              <ColorSwatch name="GRAY 600" color={VYR_COLORS.gray[600]} hex="#404040" />
              <ColorSwatch name="GRAY 700" color={VYR_COLORS.gray[700]} hex="#262626" />
              <ColorSwatch name="GRAY 800" color={VYR_COLORS.gray[800]} hex="#1A1A1A" />
              <ColorSwatch name="GRAY 900" color={VYR_COLORS.gray[900]} hex="#171717" />
              <ColorSwatch name="COLD BLUE" color={VYR_COLORS.coldBlue} hex="#1E293B" />
            </div>
          </div>
        </section>
        
        {/* Section 3: Labels System */}
        <section>
          <SectionTitle>03 — LABEL SYSTEM</SectionTitle>
          <div 
            className="mt-8 p-12 rounded-sm border"
            style={{ 
              backgroundColor: VYR_COLORS.gray[900],
              borderColor: VYR_COLORS.gray[800]
            }}
          >
            <div className="space-y-12">
              {/* All labels */}
              <div>
                <p 
                  className="text-[10px] tracking-[0.2em] mb-8 opacity-40"
                  style={{ color: VYR_COLORS.gray[400] }}
                >
                  PRODUCT LABELS
                </p>
                <AllLabels />
              </div>
              
              {/* Comparison */}
              <div>
                <p 
                  className="text-[10px] tracking-[0.2em] mb-8 opacity-40"
                  style={{ color: VYR_COLORS.gray[400] }}
                >
                  MIGRATION MAP
                </p>
                <LabelComparison />
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 4: Product Mockups */}
        <section>
          <SectionTitle>04 — PRODUCT PACKAGING</SectionTitle>
          <div 
            className="mt-8 p-12 rounded-sm border"
            style={{ 
              backgroundColor: VYR_COLORS.gray[900],
              borderColor: VYR_COLORS.gray[800]
            }}
          >
            <AllProductMockups />
          </div>
        </section>
        
        {/* Section 5: VYR NODE */}
        <section>
          <SectionTitle>05 — VYR NODE</SectionTitle>
          <div 
            className="mt-8 p-12 rounded-sm border"
            style={{ 
              backgroundColor: VYR_COLORS.gray[900],
              borderColor: VYR_COLORS.gray[800]
            }}
          >
            <NodeShowcase />
          </div>
        </section>
        
        {/* Section 6: Typography */}
        <section>
          <SectionTitle>06 — TYPOGRAPHY</SectionTitle>
          <div 
            className="mt-8 p-12 rounded-sm border"
            style={{ 
              backgroundColor: VYR_COLORS.gray[900],
              borderColor: VYR_COLORS.gray[800]
            }}
          >
            <div className="space-y-8">
              <div>
                <p 
                  className="text-[10px] tracking-[0.2em] mb-4 opacity-40"
                  style={{ color: VYR_COLORS.gray[400] }}
                >
                  LOGO TYPEFACE
                </p>
                <p 
                  className="text-4xl tracking-[0.4em]"
                  style={{ 
                    fontFamily: VYR_TYPOGRAPHY.logo.fontFamily,
                    fontWeight: VYR_TYPOGRAPHY.logo.fontWeight,
                    color: VYR_COLORS.white
                  }}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p 
                  className="text-2xl tracking-[0.3em] mt-4"
                  style={{ 
                    fontFamily: VYR_TYPOGRAPHY.logo.fontFamily,
                    fontWeight: VYR_TYPOGRAPHY.logo.fontWeight,
                    color: VYR_COLORS.gray[400]
                  }}
                >
                  0123456789
                </p>
                <p 
                  className="text-xs mt-4 opacity-50"
                  style={{ color: VYR_COLORS.gray[500] }}
                >
                  JetBrains Mono · Medium 500
                </p>
              </div>
              
              <div 
                className="pt-8 border-t"
                style={{ borderColor: VYR_COLORS.gray[800] }}
              >
                <p 
                  className="text-[10px] tracking-[0.2em] mb-4 opacity-40"
                  style={{ color: VYR_COLORS.gray[400] }}
                >
                  BODY TYPEFACE
                </p>
                <p 
                  className="text-lg"
                  style={{ 
                    fontFamily: VYR_TYPOGRAPHY.body.fontFamily,
                    color: VYR_COLORS.white
                  }}
                >
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p 
                  className="text-xs mt-4 opacity-50"
                  style={{ color: VYR_COLORS.gray[500] }}
                >
                  Inter · Regular 400
                </p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      
      {/* Footer */}
      <footer 
        className="border-t py-8 px-8"
        style={{ borderColor: VYR_COLORS.gray[800] }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <VYRLogo variant="light" size="sm" />
          <span 
            className="text-[10px] tracking-wider opacity-30"
            style={{ color: VYR_COLORS.gray[500] }}
          >
            © VYR SYSTEMS
          </span>
        </div>
      </footer>
    </div>
  );
}

// Helper Components

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 
      className="text-xs tracking-[0.4em]"
      style={{ 
        fontFamily: VYR_TYPOGRAPHY.logo.fontFamily,
        color: VYR_COLORS.gray[300]
      }}
    >
      {children}
    </h2>
  );
}

interface ColorSwatchProps {
  name: string;
  color: string;
  hex: string;
  light?: boolean;
}

function ColorSwatch({ name, color, hex, light = false }: ColorSwatchProps) {
  return (
    <div className="text-center">
      <div 
        className="w-full h-20 rounded-sm mb-3"
        style={{ 
          backgroundColor: color,
          border: light ? `1px solid ${VYR_COLORS.gray[700]}` : "none"
        }}
      />
      <p 
        className="text-[10px] tracking-[0.15em]"
        style={{ 
          fontFamily: VYR_TYPOGRAPHY.logo.fontFamily,
          color: VYR_COLORS.gray[400]
        }}
      >
        {name}
      </p>
      <p 
        className="text-[10px] mt-1 opacity-50"
        style={{ color: VYR_COLORS.gray[500] }}
      >
        {hex}
      </p>
    </div>
  );
}
