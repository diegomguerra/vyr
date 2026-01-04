import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { VYRLogo } from "@/brand";
import { NavDropdown, MobileNavDropdown } from "./NavDropdown";

const VYR_SUBMENU_ITEMS = [
  { label: "VYR SYSTEM", href: "/sistema", description: "Sachês + Plataforma" },
  { label: "VYR SYSTEM NODE", href: "/sistema-completo", description: "Sistema com biometria" },
  { label: "VYR NUTRITION", href: "/nutrition", description: "Modulação nutricional" },
  { label: "VYR LABS", href: "/labs", description: "Plataforma experimental" },
  { label: "VYR NODE", href: "/node", description: "Hardware layer" },
  { label: "VYR SCIENCE", href: "/science", description: "Base científica" },
];

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
            <NavDropdown trigger="VYR" items={VYR_SUBMENU_ITEMS} />
            <Link
              to="/como-funciona"
              className="text-muted-foreground hover:text-foreground transition-colors text-xl font-mono tracking-wide leading-none"
            >
              Como Funciona
            </Link>
            <Link
              to="/science"
              className="text-muted-foreground hover:text-foreground transition-colors text-xl font-mono tracking-wide leading-none"
            >
              VYR Science
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <Link to="/labs">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground text-xl font-mono tracking-wide px-3 sm:px-4 h-12"
              >
                VYR Labs
              </Button>
            </Link>
            <Link to="/labs?signup=true">
              <Button
                size="sm"
                className="bg-foreground hover:bg-foreground/90 text-background text-xl font-mono tracking-wide px-4 sm:px-5 h-12"
              >
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
          <div className="px-4 py-4 space-y-1">
            <MobileNavDropdown
              trigger="VYR"
              items={VYR_SUBMENU_ITEMS}
              onItemClick={() => setMobileMenuOpen(false)}
            />
            <Link
              to="/como-funciona"
              className="block py-3 text-muted-foreground hover:text-foreground transition-colors text-lg font-mono tracking-wide leading-none border-b border-border/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link
              to="/science"
              className="block py-3 text-muted-foreground hover:text-foreground transition-colors text-lg font-mono tracking-wide leading-none border-b border-border/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              VYR Science
            </Link>
            <div className="pt-4 flex gap-2">
              <Link to="/labs" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full text-lg font-mono tracking-wide h-12">
                  VYR Labs
                </Button>
              </Link>
              <Link to="/labs?signup=true" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full bg-foreground hover:bg-foreground/90 text-background text-lg font-mono tracking-wide h-12">
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
