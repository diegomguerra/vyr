import { useState } from "react";
import { Card } from "@/components/nzt";
import { signInMagicLink, setLoggedIn } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "E-mail necessário",
        description: "Por favor, insira seu e-mail.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate login for demo mode
    setTimeout(() => {
      setLoggedIn(true);
      toast({
        title: "Acesso concedido",
        description: "Bem-vindo à plataforma NZT (modo demo).",
      });
      onLoginSuccess();
      setIsLoading(false);
    }, 800);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <Card 
        title="NZT • Acesso" 
        subtitle="Entre com seu e-mail para acessar a plataforma"
        className="w-full max-w-md"
      >
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="nzt-input"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <div className="h-3" />
          <button
            type="submit"
            className="nzt-btn-primary w-full"
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar (Demo)"}
          </button>
        </form>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Esta plataforma mede adaptação gradual. Sem promessas imediatas.
        </p>
        <p className="text-xs text-primary/70 mt-2 text-center">
          Modo demonstração — dados não são persistidos.
        </p>
      </Card>
    </div>
  );
}
