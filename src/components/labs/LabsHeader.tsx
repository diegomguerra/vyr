import { ArrowLeft } from "lucide-react";

export function LabsHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo VYR LABS */}
          <div className="flex items-center gap-3">
            <span 
              className="font-mono text-base sm:text-lg font-medium tracking-[0.35em] text-foreground"
              style={{ letterSpacing: '0.35em' }}
            >
              VYR LABS
            </span>
          </div>

          {/* Link back to VYR System */}
          <a
            href="/sistema-completo"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm font-mono"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">VYR System</span>
          </a>
        </div>
      </div>
    </header>
  );
}
