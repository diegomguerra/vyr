import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { LandingNav } from "@/components/landing/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { InfoBlock, StatusCard, ScrollReveal } from "@/components/labs";
import { ArrowRight, FlaskConical } from "lucide-react";
export default function VYRLabs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  useEffect(() => {
    if (searchParams.get("signup") === "true") {
      setIsSignUp(true);
    }
  }, [searchParams]);

  // Check if already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: {
          session
        }
      } = await supabase.auth.getSession();
      if (session) {
        navigate("/app", {
          replace: true
        });
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
        variant: "destructive"
      });
      return;
    }
    if (password.length < 6) {
      toast({
        title: "Senha muito curta",
        description: "A senha deve ter pelo menos 6 caracteres.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    try {
      if (isSignUp) {
        const {
          error
        } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/app`
          }
        });
        if (error) {
          if (error.message.includes("already registered")) {
            toast({
              title: "Email já cadastrado",
              description: "Este email já está em uso. Tente fazer login.",
              variant: "destructive"
            });
          } else {
            throw error;
          }
        } else {
          toast({
            title: "Conta criada",
            description: "Verifique seu email para confirmar o cadastro."
          });
        }
      } else {
        const {
          error
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) {
          if (error.message.includes("Invalid login credentials")) {
            toast({
              title: "Credenciais inválidas",
              description: "Email ou senha incorretos.",
              variant: "destructive"
            });
          } else {
            throw error;
          }
        } else {
          navigate("/app", {
            replace: true
          });
        }
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Ocorreu um erro. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen bg-vyr-gray-900">
      <LandingNav />
      
      {/* Subtle radial glow */}
      <div className="fixed inset-0 vyr-gradient-radial opacity-50 pointer-events-none" />

      <main className="relative pt-24 pb-20">
        {/* Hero Section with Login */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Hero Content */}
            <ScrollReveal>
              <div className="space-y-6 lg:pt-8">
                {/* Label */}
                <div className="vyr-badge-accent">
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span className="text-xs tracking-wider">AMBIENTE EXPERIMENTAL</span>
                </div>
                
                {/* Headline */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-vyr-white leading-tight tracking-tight max-w-2xl">
                  Onde estados cognitivos são estudados{" "}
                  <span className="text-gradient-accent">antes de virarem sistema.</span>
                </h1>
                
                {/* Subheadline */}
                <p className="text-vyr-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                  A VYR Labs é o espaço de testes, validação e observação contínua que sustenta a evolução do VYR SYSTEM.
                </p>
                
                {/* Technical note */}
                <p className="font-mono text-xs text-vyr-gray-500 italic">
                  Nem tudo aqui é definitivo. Tudo aqui é mensurado.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: Login Card */}
            <ScrollReveal delay={100}>
              <div className="lg:sticky lg:top-24">
                <div className="vyr-card-graphite p-6 sm:p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium text-vyr-white">
                        {isSignUp ? "Criar conta" : "Acessar ambiente"}
                      </h2>
                      <p className="text-xs text-vyr-gray-500 font-mono">
                        {isSignUp ? "Registre-se para participar do protocolo" : "Entre com suas credenciais"}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs text-vyr-gray-400">
                          Email
                        </Label>
                        <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} className="bg-vyr-graphite-dark border-vyr-graphite text-vyr-white text-sm placeholder:text-vyr-gray-600" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-xs text-vyr-gray-400">
                          Senha
                        </Label>
                        <Input id="password" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} className="bg-vyr-graphite-dark border-vyr-graphite text-vyr-white text-sm placeholder:text-vyr-gray-600" />
                      </div>

                      <Button type="submit" disabled={isLoading} className="w-full bg-vyr-white hover:bg-vyr-gray-100 text-vyr-black text-sm font-medium">
                        {isLoading ? "Processando..." : isSignUp ? "Criar conta" : "Entrar"}
                      </Button>
                    </form>

                    <div className="pt-2 text-center">
                      <button type="button" onClick={() => setIsSignUp(!isSignUp)} className="text-xs text-vyr-gray-500 hover:text-vyr-white transition-colors">
                        {isSignUp ? "Já tem conta? Entrar" : "Não tem conta? Criar"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Info Blocks */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 space-y-20 sm:space-y-28">
          {/* Block 1 */}
          <ScrollReveal>
            <InfoBlock title="Sistemas confiáveis não nascem prontos." text="Antes de um protocolo ser entregue como sistema, ele passa por ciclos de observação, registro e correlação. A VYR Labs existe para testar hipóteses sobre estados cognitivos reais, em contextos reais, com usuários reais — sem simplificações artificiais." />
          </ScrollReveal>

          {/* Block 2 */}
          <ScrollReveal delay={100}>
            <InfoBlock title="O que observamos" list={["Modulação de estados cognitivos ao longo do dia", "Relação entre percepção subjetiva e sinais fisiológicos", "Variabilidade individual de resposta", "Estabilidade vs flutuação cognitiva sob carga", "Efeitos acumulativos de ciclos prolongados"]} />
          </ScrollReveal>

          {/* Block 3 */}
          <ScrollReveal delay={100}>
            <InfoBlock title="Da observação ao sistema" text="Os achados da VYR Labs não são publicados como promessas. Eles são incorporados ao VYR SYSTEM apenas quando atingem consistência suficiente para operação contínua. Tudo o que o VYR SYSTEM entrega hoje passou antes por este ambiente." />
          </ScrollReveal>

          {/* Block 4 */}
          <ScrollReveal delay={100}>
            <InfoBlock title="O que a VYR Labs não é" list={["Não é um produto comercial", "Não é um blog de conteúdo", "Não é um espaço de marketing", "Não é um manifesto"]} note="É um ambiente técnico de validação contínua." />
          </ScrollReveal>

          {/* Block 5 - Status (removed empty block) */}
        </section>

        <ScrollReveal delay={150}>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 sm:mt-36">
            <div className="vyr-accent-line mb-12" />
            <div className="space-y-8">
              <p className="text-vyr-gray-400 text-sm sm:text-base">
                Os resultados da VYR Labs se manifestam no VYR SYSTEM.
              </p>
              
              <Link to="/">
                <Button variant="outline" className="border-vyr-gray-600 text-vyr-gray-300 hover:text-vyr-white hover:border-vyr-gray-500 text-sm">
                  Conhecer o sistema
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <p className="text-xs font-mono italic max-w-md text-primary-foreground">
                Clareza mental é construída com consistência, recuperação e exigência cognitiva.
              </p>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>;
}