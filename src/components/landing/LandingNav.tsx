import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { VYRLogo } from "@/brand";

export function LandingNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <VYRLogo variant="dark" size="md" />
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#produto" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Produto
            </a>
            <Link to="/como-funciona" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Como Funciona
            </Link>
            <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Benefícios
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              FAQ
            </a>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground text-xs sm:text-sm px-2 sm:px-4">
                Entrar
              </Button>
            </Link>
            <Link to="/login?signup=true">
              <Button size="sm" className="bg-foreground hover:bg-foreground/90 text-background text-xs sm:text-sm px-3 sm:px-4">
                Começar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-background/98 backdrop-blur-xl border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#produto"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Produto
            </a>
            <Link
              to="/como-funciona"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <a
              href="#beneficios"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefícios
            </a>
            <a
              href="#faq"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-3 border-t border-border flex gap-2">
              <Link to="/login" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Entrar
                </Button>
              </Link>
              <Link to="/login?signup=true" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full bg-foreground hover:bg-foreground/90 text-background text-xs">
                  Começar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
