import { VYR_COLORS, VYR_TYPOGRAPHY } from "@/brand";

export default function BrandExport() {
  return (
    <div 
      className="min-h-screen bg-white text-black print:bg-white"
      style={{ fontFamily: VYR_TYPOGRAPHY.body.fontFamily }}
    >
      {/* Print styles */}
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .page-break { page-break-before: always; }
          .no-break { page-break-inside: avoid; }
        }
        @page { margin: 1.5cm; }
      `}</style>

      <div className="max-w-4xl mx-auto p-8 print:p-0">
        
        {/* Cover */}
        <header className="text-center py-20 border-b-2 border-black mb-12 no-break">
          <p className="text-xs tracking-[0.4em] text-gray-500 mb-8" style={{ fontFamily: VYR_TYPOGRAPHY.logo.fontFamily }}>
            BRAND IDENTITY SPECIFICATION
          </p>
          <h1 
            className="text-7xl tracking-[0.5em] mb-4"
            style={{ fontFamily: VYR_TYPOGRAPHY.logo.fontFamily, fontWeight: 500 }}
          >
            VYR
          </h1>
          <p className="text-sm tracking-[0.3em] text-gray-600 mt-8" style={{ fontFamily: VYR_TYPOGRAPHY.logo.fontFamily }}>
            ATO 1 — VISUAL OVERLAY SYSTEM
          </p>
          <p className="text-xs text-gray-400 mt-16">
            Versão 1.0 · Documento Confidencial
          </p>
        </header>

        {/* Section 1: Logo */}
        <section className="mb-16 no-break">
          <SectionHeader number="01" title="MARCA MÃE — VYR" />
          
          <div className="mt-8 space-y-6">
            <div className="bg-black text-white p-12 text-center">
              <span 
                className="text-5xl tracking-[0.5em]"
                style={{ fontFamily: VYR_TYPOGRAPHY.logo.fontFamily, fontWeight: 500 }}
              >
                VYR
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-xs tracking-wider text-gray-500 mb-3">TIPOGRAFIA</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>Fonte:</strong> JetBrains Mono</li>
                  <li><strong>Peso:</strong> Medium (500)</li>
                  <li><strong>Letter-spacing:</strong> 0.35em</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-wider text-gray-500 mb-3">REGRAS</h4>
                <ul className="text-sm space-y-1">
                  <li>✗ Sem ícones ou símbolos</li>
                  <li>✗ Sem ilustrações</li>
                  <li>✓ Minimalista e técnico</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Color Palette */}
        <section className="mb-16 page-break no-break">
          <SectionHeader number="02" title="PALETA DE CORES" />
          
          <div className="mt-8">
            <div className="grid grid-cols-4 gap-3">
              <ColorSwatch name="BLACK" hex="#0A0A0A" color="#0A0A0A" light={false} />
              <ColorSwatch name="WHITE" hex="#FAFAFA" color="#FAFAFA" light={true} />
              <ColorSwatch name="GRAY 100" hex="#E5E5E5" color="#E5E5E5" light={true} />
              <ColorSwatch name="GRAY 200" hex="#D4D4D4" color="#D4D4D4" light={true} />
              <ColorSwatch name="GRAY 300" hex="#A3A3A3" color="#A3A3A3" light={true} />
              <ColorSwatch name="GRAY 400" hex="#737373" color="#737373" light={false} />
              <ColorSwatch name="GRAY 500" hex="#525252" color="#525252" light={false} />
              <ColorSwatch name="GRAY 600" hex="#404040" color="#404040" light={false} />
              <ColorSwatch name="GRAY 700" hex="#262626" color="#262626" light={false} />
              <ColorSwatch name="GRAY 800" hex="#1A1A1A" color="#1A1A1A" light={false} />
              <ColorSwatch name="GRAY 900" hex="#171717" color="#171717" light={false} />
              <ColorSwatch name="COLD BLUE" hex="#1E293B" color="#1E293B" light={false} />
            </div>

            <div className="mt-8 p-4 bg-gray-100 text-sm">
              <p className="font-medium mb-2">Restrições:</p>
              <p className="text-gray-600">Evitar gradientes emocionais, roxo/rosa chamativo, cores vibrantes. A cor não deve chamar atenção — o sistema deve.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Label System */}
        <section className="mb-16 no-break">
          <SectionHeader number="03" title="SISTEMA DE LABELS" />
          
          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-6">
              Labels são funcionais, não marcas independentes. Seguem a mesma tipografia do logo mãe.
            </p>

            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-3 pr-4">ANTIGO</th>
                  <th className="text-left py-3 pr-4">NOVO</th>
                  <th className="text-left py-3">COR</th>
                </tr>
              </thead>
              <tbody>
                <LabelRow old="NZT Dia" newLabel="VYR BOOT" color="#E5E5E5" colorName="Gray 100" />
                <LabelRow old="NZT Tarde" newLabel="VYR HOLD" color="#404040" colorName="Gray 600" />
                <LabelRow old="NZT Noite" newLabel="VYR CLEAR" color="#1E293B" colorName="Cold Blue" />
                <LabelRow old="Pacote Completo" newLabel="VYR SYSTEM" color="#1A1A1A" colorName="Gray 800" />
                <LabelRow old="Smart Ring" newLabel="VYR NODE" color="#0A0A0A" colorName="Black" />
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Products */}
        <section className="mb-16 page-break no-break">
          <SectionHeader number="04" title="EMBALAGENS — SACHETS & CAIXAS" />
          
          <div className="mt-8 space-y-8">
            <div className="grid grid-cols-3 gap-6">
              <ProductMockup variant="BOOT" />
              <ProductMockup variant="HOLD" />
              <ProductMockup variant="CLEAR" />
            </div>

            <div className="p-4 bg-gray-100 text-sm">
              <p className="font-medium mb-2">Características obrigatórias:</p>
              <ul className="text-gray-600 space-y-1">
                <li>• Visual minimalista e industrial</li>
                <li>• Premium técnico</li>
                <li>• Muito espaço vazio</li>
                <li>• Informação mínima</li>
                <li>• Nenhuma promessa emocional</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: VYR NODE */}
        <section className="mb-16 no-break">
          <SectionHeader number="05" title="VYR NODE — HARDWARE" />
          
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <div 
                className="aspect-square bg-black flex items-center justify-center"
              >
                <div 
                  className="w-32 h-32 rounded-full border-8 border-gray-800 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #262626 0%, #0A0A0A 50%, #171717 100%)' }}
                >
                  <span 
                    className="text-[8px] tracking-[0.2em] text-gray-600"
                    style={{ fontFamily: VYR_TYPOGRAPHY.logo.fontFamily }}
                  >
                    VYR
                  </span>
                </div>
              </div>
            </div>
            <div className="text-sm space-y-4">
              <div>
                <h4 className="text-xs tracking-wider text-gray-500 mb-2">FILOSOFIA</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Instrumento técnico (não moda)</li>
                  <li>• Discreto e minimal</li>
                  <li>• Sem LEDs chamativos</li>
                  <li>• Logo VYR gravado sutilmente</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-wider text-gray-500 mb-2">ESPECIFICAÇÕES</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><strong>Sensores:</strong> PPG, HRV, SpO2</li>
                  <li><strong>Material:</strong> Titânio</li>
                  <li><strong>Bateria:</strong> 7 dias</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Typography */}
        <section className="mb-16 page-break no-break">
          <SectionHeader number="06" title="TIPOGRAFIA" />
          
          <div className="mt-8 space-y-8">
            <div className="border-b pb-6">
              <h4 className="text-xs tracking-wider text-gray-500 mb-4">LOGO TYPEFACE</h4>
              <p 
                className="text-3xl tracking-[0.4em]"
                style={{ fontFamily: VYR_TYPOGRAPHY.logo.fontFamily, fontWeight: 500 }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p 
                className="text-xl tracking-[0.3em] mt-2 text-gray-500"
                style={{ fontFamily: VYR_TYPOGRAPHY.logo.fontFamily, fontWeight: 500 }}
              >
                0123456789
              </p>
              <p className="text-xs text-gray-400 mt-4">JetBrains Mono · Medium 500</p>
            </div>
            
            <div>
              <h4 className="text-xs tracking-wider text-gray-500 mb-4">BODY TYPEFACE</h4>
              <p className="text-lg" style={{ fontFamily: VYR_TYPOGRAPHY.body.fontFamily }}>
                The quick brown fox jumps over the lazy dog.
              </p>
              <p className="text-xs text-gray-400 mt-4">Inter · Regular 400</p>
            </div>
          </div>
        </section>

        {/* Section 7: Design Principles */}
        <section className="mb-16 no-break">
          <SectionHeader number="07" title="PRINCÍPIOS DE DESIGN" />
          
          <div className="mt-8 grid grid-cols-2 gap-8 text-sm">
            <div className="p-6 bg-gray-100">
              <h4 className="font-medium mb-4 text-green-700">✓ VYR DEVE PARECER</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Um sistema</li>
                <li>Uma infraestrutura</li>
                <li>Algo técnico e controlado</li>
                <li>Silencioso</li>
                <li>Respeitável tecnicamente</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-100">
              <h4 className="font-medium mb-4 text-red-700">✗ VYR NÃO DEVE PARECER</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Amigável</li>
                <li>Explicativo</li>
                <li>Motivacional</li>
                <li>Emocional</li>
                <li>Wellness/Lifestyle</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-black text-white text-center">
            <p className="text-lg italic">
              "VYR não seduz. VYR se impõe como sistema."
            </p>
          </div>
        </section>

        {/* Section 8: Checklist */}
        <section className="mb-16 page-break no-break">
          <SectionHeader number="08" title="CHECKLIST DE VALIDAÇÃO" />
          
          <div className="mt-8 text-sm">
            <div className="grid grid-cols-1 gap-2">
              <CheckItem text="Logo VYR é apenas tipográfico (sem ícones)" />
              <CheckItem text="Tipografia é geométrica/monoespaçada (JetBrains Mono)" />
              <CheckItem text="Paleta é neutra (preto, branco, cinzas, azul frio sutil)" />
              <CheckItem text="Sem gradientes emocionais ou cores vibrantes" />
              <CheckItem text="Labels seguem estrutura VYR + SUBLABEL" />
              <CheckItem text="Embalagens são minimalistas com muito espaço vazio" />
              <CheckItem text="NODE parece instrumento técnico (não moda)" />
              <CheckItem text="Identidade causa silêncio/respeito (não simpatia)" />
              <CheckItem text="Nenhuma promessa emocional visível" />
              <CheckItem text="Sistema > Produto individual" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-black pt-8 mt-16 text-center text-xs text-gray-500">
          <p style={{ fontFamily: VYR_TYPOGRAPHY.logo.fontFamily }} className="tracking-[0.3em] mb-2">
            VYR SYSTEMS
          </p>
          <p>Brand Identity Specification · ATO 1 · Versão 1.0</p>
          <p className="mt-4">Documento gerado para validação e aprovação</p>
        </footer>

      </div>

      {/* Print button - hidden when printing */}
      <div className="fixed bottom-8 right-8 print:hidden">
        <button 
          onClick={() => window.print()}
          className="bg-black text-white px-6 py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors"
          style={{ fontFamily: VYR_TYPOGRAPHY.logo.fontFamily }}
        >
          EXPORTAR PDF
        </button>
      </div>
    </div>
  );
}

// Helper Components

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-gray-300 pb-2">
      <span className="text-xs text-gray-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        {number}
      </span>
      <h2 className="text-sm tracking-[0.2em] font-medium">
        {title}
      </h2>
    </div>
  );
}

function ColorSwatch({ name, hex, color, light }: { name: string; hex: string; color: string; light: boolean }) {
  return (
    <div className="text-center">
      <div 
        className="h-16 mb-2"
        style={{ 
          backgroundColor: color,
          border: light ? '1px solid #e5e5e5' : 'none'
        }}
      />
      <p className="text-[10px] tracking-wider">{name}</p>
      <p className="text-[10px] text-gray-400">{hex}</p>
    </div>
  );
}

function LabelRow({ old, newLabel, color, colorName }: { old: string; newLabel: string; color: string; colorName: string }) {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-3 pr-4 text-gray-400 line-through">{old}</td>
      <td className="py-3 pr-4 font-medium" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{newLabel}</td>
      <td className="py-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4" style={{ backgroundColor: color, border: color === '#E5E5E5' ? '1px solid #ccc' : 'none' }} />
          <span className="text-gray-500">{colorName}</span>
        </div>
      </td>
    </tr>
  );
}

function ProductMockup({ variant }: { variant: "BOOT" | "HOLD" | "CLEAR" }) {
  const colors = {
    BOOT: { bg: "#E5E5E5", text: "#0A0A0A" },
    HOLD: { bg: "#404040", text: "#FAFAFA" },
    CLEAR: { bg: "#1E293B", text: "#FAFAFA" },
  };
  const c = colors[variant];

  return (
    <div className="text-center">
      <div 
        className="aspect-[3/5] flex flex-col items-center justify-center p-4"
        style={{ backgroundColor: c.bg, color: c.text }}
      >
        <span 
          className="text-sm tracking-[0.3em]"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
        >
          VYR
        </span>
        <span 
          className="text-xs tracking-[0.2em] opacity-70"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {variant}
        </span>
      </div>
      <p className="text-xs text-gray-500 mt-2">VYR {variant}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-gray-100">
      <div className="w-4 h-4 border border-gray-400" />
      <span>{text}</span>
    </div>
  );
}
