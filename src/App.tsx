import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Sun, Moon, Brain } from "lucide-react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import RotinaCompleta from "./pages/RotinaCompleta";
import SistemaCompleto from "./pages/SistemaCompleto";
import ComoFunciona from "./pages/ComoFunciona";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";
import { NavSidebar } from "./components/nzt";
import { signOut, getParticipante, createParticipante } from "./lib/api";
import { ThemeProvider, useTheme } from "./hooks/use-theme";
import type { Participante } from "./lib/types";

const queryClient = new QueryClient();

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="nzt-btn p-2 rounded-full"
      aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function Header({ codigo }: { codigo?: string }) {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-slate-900 via-slate-900/95 to-indigo-950/90 backdrop-blur-xl border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="min-w-0 flex-1 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-white text-sm sm:text-base">NZT Platform</h1>
            <p className="text-[10px] sm:text-xs text-slate-400">
              {codigo ? `ID: ${codigo}` : "Carregando..."}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <ThemeToggle />
          <button 
            className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 border border-slate-700/50 transition-all" 
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}

const NAV_ITEMS = [
  { to: "/app/painel", label: "Painel", icon: "📊" },
  { to: "/app/anamnese", label: "Anamnese", icon: "📋" },
  { to: "/app/perfil", label: "Perfil", icon: "👤" },
];

function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50">
      <div className="flex items-center justify-around py-2 px-1 safe-area-inset-bottom">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.to}
            href={item.to}
            className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all min-w-0"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
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

  // Se participante não tiver onboarding completo, mostra Welcome em tela cheia
  const needsOnboarding = participante && !participante.onboarding_completo;

  if (needsOnboarding) {
    return (
      <Routes>
        <Route path="/*" element={<Welcome />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <Header codigo={participante?.codigo} />
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[220px_1fr] gap-4 p-3 sm:p-4 pb-24 lg:pb-4">
        {/* Sidebar - hidden on mobile, shown on desktop */}
        <div className="hidden lg:block">
          <NavSidebar />
        </div>
        <main className="flex flex-col gap-4 animate-fade-in min-w-0">
          <Routes>
            <Route path="/" element={<Navigate to="/app/painel" replace />} />
            <Route path="/painel" element={<Dashboard />} />
            <Route path="/anamnese" element={<Onboarding />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="*" element={<Navigate to="/app/painel" replace />} />
          </Routes>
        </main>
      </div>
      {/* Mobile bottom navigation */}
      <MobileNav />
    </div>
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
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/produtos/:id" element={<ProductDetail />} />
              <Route path="/rotina-completa" element={<RotinaCompleta />} />
              <Route path="/sistema-completo" element={<SistemaCompleto />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/login" element={user ? <Navigate to="/app" replace /> : <Login />} />
              
              {/* Protected routes */}
              <Route 
                path="/app/*" 
                element={user ? <AuthenticatedApp /> : <Navigate to="/login" replace />} 
              />
              
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
