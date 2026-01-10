import { Card } from "@/components/nzt";
import Profile from "@/pages/Profile";
import Onboarding from "@/pages/Onboarding";

export default function LabsSettings() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-vyr-gray-500">Perfil e Config</p>
        <h1 className="text-xl sm:text-2xl font-semibold text-vyr-white">
          Perfil, anamnese e diretrizes do sistema
        </h1>
      </header>

      <Profile />

      <Onboarding />

      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Como o sistema funciona" subtitle="Resumo operacional">
          <ul className="list-disc space-y-2 pl-5 text-sm text-vyr-gray-300">
            <li>Combina ritual diário com leitura heurística local.</li>
            <li>Observa padrões no seu histórico, sem promessas clínicas.</li>
            <li>O Node é opcional e serve apenas como suporte contextual.</li>
          </ul>
        </Card>

        <Card title="O que o sistema faz" subtitle="Entrega direta">
          <ul className="list-disc space-y-2 pl-5 text-sm text-vyr-gray-300">
            <li>Gera leituras e micro-ações com base no ritual.</li>
            <li>Mostra progresso semanal e consistência do registro.</li>
            <li>Aponta sinais e tendências com linguagem operacional.</li>
          </ul>
        </Card>

        <Card title="O que o sistema NÃO faz" subtitle="Limites claros">
          <ul className="list-disc space-y-2 pl-5 text-sm text-vyr-gray-300">
            <li>Não faz avaliação clínica nem promessas clínicas.</li>
            <li>Não substitui acompanhamento profissional.</li>
            <li>Não usa sinais para decisão clínica.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
