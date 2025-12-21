import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RegisterDose from "./pages/RegisterDose";
import SleepDay from "./pages/SleepDay";
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/Profile";
import { NavSidebar } from "./components/nzt";
import { setLoggedIn } from "./lib/api";

const queryClient = new QueryClient();

function Header({ codigo }: { codigo?: string }) {
  return (
    <header className="glass-header sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-foreground">NZT • Plataforma de Teste</h1>
          <p className="text-xs text-muted-foreground">
            {codigo ? `Código: ${codigo}` : "Modo demonstração"}
          </p>
        </div>
        <button 
          className="nzt-btn text-sm"
          onClick={() => {
            setLoggedIn(false);
            window.location.reload();
          }}
        >
          Sair
        </button>
      </div>
    </header>
  );
}

function AuthenticatedApp() {
  return (
    <>
      <Header codigo="P742" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-4 p-4">
        <NavSidebar />
        <main className="flex flex-col gap-4 animate-fade-in">
          <Routes>
            <Route path="/" element={<Navigate to="/painel" replace />} />
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
  const [isLoggedIn, setIsLoggedInState] = useState(false);

  function handleLoginSuccess() {
    setIsLoggedInState(true);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {isLoggedIn ? (
            <AuthenticatedApp />
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
