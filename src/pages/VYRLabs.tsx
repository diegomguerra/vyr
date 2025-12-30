import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { LabsHeader, InfoBlock, StatusCard, ScrollReveal } from "@/components/labs";
import { ArrowRight } from "lucide-react";

export default function VYRLabs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (searchParams.get("signup") === "true") {
      setIsSignUp(true);
    }
  }, [searchParams]);

  // Check if already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/app", { replace: true });
      }
    };
    checkAuth();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha email e senha.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Senha muito curta",
        description: "A senha deve ter pelo menos 6 caracteres.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/app`,
          },
        });
        if (error) {
          if (error.message.includes("already registered")) {
            toast({
              title: "Email já cadastrado",
              description: "Este email já está em uso. Tente fazer login.",
              variant: "destructive",
            });
          } else {
            throw error;
          }
        } else {
          toast({
            title: "Conta criada",
            description: "Verifique seu email para confirmar o cadastro.",
          });
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          if (error.message.includes("Invalid login credentials")) {
            toast({
              title: "Credenciais inválidas",
              description: "Email ou senha incorretos.",
              variant: "destructive",
            });
          } else {
            throw error;
          }
        } else {
          navigate("/app", { replace: true });
        }
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <LabsHeader />
      
      {/* Grid pattern background */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <main className="relative pt-24 pb-20">
        {/* Hero Section with Login */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Hero Content */}
            <div className="space-y-6 lg:pt-8">
              {/* Label */}
              <span className="inline-block font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground/70 uppercase">
                Ambiente Experimental
              </span>
              
              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-tight tracking-tight">
                Onde estados cognitivos são estudados antes de virarem sistema.
              </h1>
              
              {/* Subheadline */}
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg">
                A VYR Labs é o espaço de testes, validação e observação contínua que sustenta a evolução do VYR SYSTEM.
              </p>
              
              {/* Technical note */}
              <p className="font-mono text-xs text-muted-foreground/50 italic">
                Nem tudo aqui é definitivo. Tudo aqui é mensurado.
              </p>
            </div>

            {/* Right: Login Card */}
            <div className="lg:sticky lg:top-24">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium text-foreground">
                        {isSignUp ? "Criar conta" : "Acessar ambiente"}
                      </h2>
                      <p className="text-xs text-muted-foreground font-mono">
                        {isSignUp ? "Registre-se para participar do protocolo" : "Entre com suas credenciais"}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs text-muted-foreground">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-background/50 border-border/50 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-xs text-muted-foreground">
                          Senha
                        </Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="bg-background/50 border-border/50 text-sm"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-foreground hover:bg-foreground/90 text-background text-sm"
                      >
                        {isLoading ? "Processando..." : isSignUp ? "Criar conta" : "Entrar"}
                      </Button>
                    </form>

                    <div className="pt-2 text-center">
                      <button
                        type="button"
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {isSignUp
                          ? "Já tem conta? Entrar"
                          : "Não tem conta? Criar"}
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Info Blocks */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 space-y-20 sm:space-y-28">
          {/* Block 1 */}
          <ScrollReveal>
            <InfoBlock
              title="Sistemas confiáveis não nascem prontos."
              text="Antes de um protocolo ser entregue como sistema, ele passa por ciclos de observação, registro e correlação. A VYR Labs existe para testar hipóteses sobre estados cognitivos reais, em contextos reais, com usuários reais — sem simplificações artificiais."
            />
          </ScrollReveal>

          {/* Block 2 */}
          <ScrollReveal delay={100}>
            <InfoBlock
              title="O que observamos"
              list={[
                "Modulação de estados cognitivos ao longo do dia",
                "Relação entre percepção subjetiva e sinais fisiológicos",
                "Variabilidade individual de resposta",
                "Estabilidade vs flutuação cognitiva sob carga",
                "Efeitos acumulativos de ciclos prolongados",
              ]}
            />
          </ScrollReveal>

          {/* Block 3 */}
          <ScrollReveal delay={100}>
            <InfoBlock
              title="Da observação ao sistema"
              text="Os achados da VYR Labs não são publicados como promessas. Eles são incorporados ao VYR SYSTEM apenas quando atingem consistência suficiente para operação contínua. Tudo o que o VYR SYSTEM entrega hoje passou antes por este ambiente."
            />
          </ScrollReveal>

          {/* Block 4 */}
          <ScrollReveal delay={100}>
            <InfoBlock
              title="O que a VYR Labs não é"
              list={[
                "Não é um produto comercial",
                "Não é um blog de conteúdo",
                "Não é um espaço de marketing",
                "Não é um manifesto",
              ]}
              note="É um ambiente técnico de validação contínua."
            />
          </ScrollReveal>

          {/* Block 5 - Status */}
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-medium text-foreground tracking-wide">
                Estado atual
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <StatusCard label="Protocolos em teste" status="active" />
                <StatusCard label="Instrumentação ativa" status="active" />
                <StatusCard label="Ciclos em observação" status="active" />
                <StatusCard label="Integração progressiva" status="pending" />
              </div>
              <p className="text-muted-foreground/50 text-xs font-mono">
                Alguns dados ainda não são públicos.
              </p>
            </div>
          </ScrollReveal>
        </section>

        <ScrollReveal delay={150}>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 sm:mt-36">
            <div className="border-t border-border/30 pt-12 sm:pt-16 space-y-8">
              <p className="text-muted-foreground text-sm sm:text-base">
                Os resultados da VYR Labs se manifestam no VYR SYSTEM.
              </p>
              
              <Link to="/">
                <Button 
                  variant="outline" 
                  className="border-border/50 text-muted-foreground hover:text-foreground hover:bg-card/50 text-sm"
                >
                  Conhecer o sistema
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <p className="text-muted-foreground/40 text-xs font-mono italic max-w-md">
                Clareza mental é construída com consistência, recuperação e exigência cognitiva.
              </p>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  );
}
