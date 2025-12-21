import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RegisterDose from "./pages/RegisterDose";
import SleepDay from "./pages/SleepDay";
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/Profile";
import { NavSidebar } from "./components/nzt";
import { signOut, getParticipante, createParticipante } from "./lib/api";
import type { Participante } from "./lib/types";

const queryClient = new QueryClient();

function Header({ codigo }: { codigo?: string }) {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header className="glass-header sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-foreground">NZT • Plataforma de Teste</h1>
          <p className="text-xs text-muted-foreground">
            {codigo ? `Código: ${codigo}` : "Carregando..."}
          </p>
        </div>
        <button className="nzt-btn text-sm" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </header>
  );
}

function AuthenticatedApp() {
  const [participante, setParticipante] = useState<Participante | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initParticipante = async () => {
      try {
        let p = await getParticipante();
        
        // Se não existe participante, cria um novo
        if (!p) {
          await createParticipante({});
          p = await getParticipante();
        }
        
        setParticipante(p);
      } catch (error) {
        console.error("Error initializing participante:", error);
      } finally {
        setLoading(false);
      }
    };

    initParticipante();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Inicializando perfil...</div>
      </div>
    );
  }

  // Se participante não tiver perfil_atividade, redireciona para onboarding
  const needsOnboarding = participante && !participante.perfil_atividade;

  return (
    <>
      <Header codigo={participante?.codigo} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-4 p-4">
        <NavSidebar />
        <main className="flex flex-col gap-4 animate-fade-in">
          <Routes>
            <Route 
              path="/" 
              element={<Navigate to={needsOnboarding ? "/anamnese" : "/painel"} replace />} 
            />
            <Route path="/painel" element={<Dashboard />} />
            <Route path="/dose" element={<RegisterDose />} />
            <Route path="/sono" element={<SleepDay />} />
            <Route path="/anamnese" element={<Onboarding />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="*" element={<Navigate to="/painel" replace />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {user ? <AuthenticatedApp /> : <Login />}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
