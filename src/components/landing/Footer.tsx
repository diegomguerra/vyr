import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-xl text-foreground">NZT</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Plataforma de acompanhamento de suplementação cognitiva. 
              Otimize sua performance mental com dados e insights personalizados.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#produto" className="text-muted-foreground hover:text-foreground transition-colors">
                  Produto
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Conta</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors">
                  Entrar
                </Link>
              </li>
              <li>
                <Link to="/login?signup=true" className="text-muted-foreground hover:text-foreground transition-colors">
                  Criar conta
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NZT. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
