import type { Participante, RegistroDose, ResumoDiario, SerieData, ReferenciaPopulacional } from "./types";
import { hojeISO } from "./date";

// Mock data for UI-only mode

const MOCK_PARTICIPANTE: Participante = {
  id: "mock-001",
  user_id: "mock-user-001",
  codigo: "P742",
  nome_publico: "Participante Demo",
  sexo: "NAO_INFORMAR",
  data_nascimento: "1990-05-15",
  altura_cm: 175,
  peso_kg: 72,
  perfil_atividade: "ANALISE",
  rotina_trabalho: "MISTO",
};

function generateMockSeries(): SerieData[] {
  const series: SerieData[] = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];
    
    // Add DIA entries
    series.push({
      data: dateStr,
      janela: "DIA",
      tomou: Math.random() > 0.1,
      escala_1: Math.floor(5 + Math.random() * 4 + (29 - i) * 0.05),
      escala_2: Math.floor(4 + Math.random() * 4 + (29 - i) * 0.04),
      escala_3: Math.floor(5 + Math.random() * 3 + (29 - i) * 0.03),
      qualidade_sono: Math.floor(5 + Math.random() * 3 + (29 - i) * 0.04),
      recuperacao_ao_acordar: Math.floor(4 + Math.random() * 4 + (29 - i) * 0.03),
    });
    
    // Add TARDE entries
    series.push({
      data: dateStr,
      janela: "TARDE",
      tomou: Math.random() > 0.15,
      escala_1: Math.floor(4 + Math.random() * 4 + (29 - i) * 0.04),
      escala_2: Math.floor(5 + Math.random() * 3 + (29 - i) * 0.03),
      escala_3: Math.floor(4 + Math.random() * 4 + (29 - i) * 0.05),
    });
    
    // Add NOITE entries
    series.push({
      data: dateStr,
      janela: "NOITE",
      tomou: Math.random() > 0.2,
      escala_1: Math.floor(5 + Math.random() * 3 + (29 - i) * 0.03),
      escala_2: Math.floor(5 + Math.random() * 4 + (29 - i) * 0.04),
      escala_3: Math.floor(6 + Math.random() * 3 + (29 - i) * 0.02),
    });
  }
  
  return series;
}

function generateMockSono(): { data: string; valor: number | null }[] {
  const sono: { data: string; valor: number | null }[] = [];
  const today = new Date();
  
  for (let i = 59; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    sono.push({
      data: date.toISOString().split("T")[0],
      valor: Math.min(10, Math.floor(5 + Math.random() * 3 + (59 - i) * 0.03)),
    });
  }
  
  return sono;
}

const MOCK_REFERENCIAS: Record<string, { min: number; max: number }> = {
  dia_clareza: { min: 5.4, max: 6.7 },
  tarde_foco: { min: 4.9, max: 6.3 },
  sono_qualidade: { min: 6.0, max: 7.2 },
};

let mockParticipante = { ...MOCK_PARTICIPANTE };
let mockSeries = generateMockSeries();
let mockSono = generateMockSono();
let isLoggedIn = false;

// API functions (mock implementations)

export async function getSession() {
  return { data: { session: isLoggedIn ? { user: { id: "mock-user-001" } } : null } };
}

export async function signInMagicLink(email: string) {
  // Simulate login
  isLoggedIn = true;
  return { error: null };
}

export async function signOut() {
  isLoggedIn = false;
  return { error: null };
}

export async function getParticipante(): Promise<Participante | null> {
  if (!isLoggedIn) return null;
  return mockParticipante;
}

export async function createParticipante(payload: Partial<Participante>) {
  mockParticipante = { ...MOCK_PARTICIPANTE, ...payload } as Participante;
}

export async function updateParticipante(id: string, patch: Partial<Participante>) {
  mockParticipante = { ...mockParticipante, ...patch };
}

export async function upsertRegistroDose(payload: RegistroDose) {
  // In mock mode, just log the action
  console.log("Mock: Registro de dose salvo", payload);
}

export async function upsertResumoDiario(payload: ResumoDiario) {
  // In mock mode, just log the action
  console.log("Mock: Resumo diário salvo", payload);
}

export async function getSeries30d(): Promise<SerieData[]> {
  return mockSeries;
}

export async function getSono60d(participante_id: string): Promise<{ data: string; valor: number | null }[]> {
  return mockSono;
}

export async function getReferencias(sexo: string, idade: number): Promise<ReferenciaPopulacional[]> {
  return Object.entries(MOCK_REFERENCIAS).map(([metrica, faixa]) => ({
    metrica,
    faixa_min: faixa.min,
    faixa_max: faixa.max,
  }));
}

// Helper to simulate login for demo
export function setLoggedIn(value: boolean) {
  isLoggedIn = value;
}

export function isUserLoggedIn() {
  return isLoggedIn;
}
