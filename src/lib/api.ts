import { supabase } from "@/integrations/supabase/client";
import type { Participante, RegistroDose, ResumoDiario, SerieData, ReferenciaPopulacional } from "./types";

// Auth functions
export async function getSession() {
  return supabase.auth.getSession();
}

export async function signInWithEmail(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signUpWithEmail(email: string, password: string) {
  const redirectUrl = `${window.location.origin}/`;
  return supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: redirectUrl }
  });
}

export async function signOut() {
  return supabase.auth.signOut();
}

// Participante functions
export async function getParticipante(): Promise<Participante | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("participantes")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    console.error("Error fetching participante:", error);
    return null;
  }

  return data as Participante | null;
}

export async function createParticipante(payload: Partial<Participante>) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("User not authenticated");

  const codigo = `P${Math.floor(100 + Math.random() * 900)}`;
  
  const { error } = await supabase
    .from("participantes")
    .insert({
      user_id: user.id,
      codigo,
      nome_publico: payload.nome_publico || "Novo Participante",
      sexo: payload.sexo || "NAO_INFORMAR",
      data_nascimento: payload.data_nascimento || "1990-01-01",
      altura_cm: payload.altura_cm,
      peso_kg: payload.peso_kg,
      perfil_atividade: payload.perfil_atividade,
      rotina_trabalho: payload.rotina_trabalho,
    });

  if (error) throw error;
}

export async function updateParticipante(id: string, patch: Partial<Participante>) {
  const { error } = await supabase
    .from("participantes")
    .update(patch)
    .eq("id", id);

  if (error) throw error;
}

// Registro Dose functions
export async function upsertRegistroDose(payload: RegistroDose) {
  const { error } = await supabase
    .from("registros_dose")
    .upsert({
      participante_id: payload.participante_id,
      data: payload.data,
      janela: payload.janela,
      tomou: payload.tomou,
      horario_tomada: payload.horario_tomada,
      escala_1: payload.escala_1,
      escala_2: payload.escala_2,
      escala_3: payload.escala_3,
      efeito_indesejado: payload.efeito_indesejado,
      sintomas: payload.sintomas,
      observacoes: payload.observacoes,
    }, {
      onConflict: "participante_id,data,janela"
    });

  if (error) throw error;
}

// Resumo Diário functions
export async function upsertResumoDiario(payload: ResumoDiario) {
  const { error } = await supabase
    .from("resumos_diarios")
    .upsert({
      participante_id: payload.participante_id,
      data: payload.data,
      latencia_sono_min: payload.latencia_sono_min,
      despertares: payload.despertares,
      qualidade_sono: payload.qualidade_sono,
      recuperacao_ao_acordar: payload.recuperacao_ao_acordar,
      sonolencia_diurna: payload.sonolencia_diurna,
      estresse_dia: payload.estresse_dia,
      cafeina_doses: payload.cafeina_doses,
    }, {
      onConflict: "participante_id,data"
    });

  if (error) throw error;
}

// Series data (combines registros_dose + resumos_diarios for last 30 days)
export async function getSeries30d(): Promise<SerieData[]> {
  const participante = await getParticipante();
  if (!participante) return [];

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const fromDate = thirtyDaysAgo.toISOString().split("T")[0];

  const [registrosResult, resumosResult] = await Promise.all([
    supabase
      .from("registros_dose")
      .select("data, janela, tomou, escala_1, escala_2, escala_3")
      .eq("participante_id", participante.id)
      .gte("data", fromDate)
      .order("data", { ascending: true }),
    supabase
      .from("resumos_diarios")
      .select("data, qualidade_sono, recuperacao_ao_acordar")
      .eq("participante_id", participante.id)
      .gte("data", fromDate)
      .order("data", { ascending: true })
  ]);

  const series: SerieData[] = [];

  // Add dose registros
  if (registrosResult.data) {
    for (const r of registrosResult.data) {
      series.push({
        data: r.data,
        janela: r.janela,
        tomou: r.tomou,
        escala_1: r.escala_1,
        escala_2: r.escala_2,
        escala_3: r.escala_3,
      });
    }
  }

  // Add resumos (as "SONO" entries with janela = DIA for consistency)
  if (resumosResult.data) {
    for (const r of resumosResult.data) {
      series.push({
        data: r.data,
        janela: "DIA",
        qualidade_sono: r.qualidade_sono,
        recuperacao_ao_acordar: r.recuperacao_ao_acordar,
      });
    }
  }

  return series;
}

// Sleep data for last 60 days
export async function getSono60d(participante_id: string): Promise<{ data: string; valor: number | null }[]> {
  const sixtyDaysAgo = new Date();
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);
  const fromDate = sixtyDaysAgo.toISOString().split("T")[0];

  const { data, error } = await supabase
    .from("resumos_diarios")
    .select("data, qualidade_sono")
    .eq("participante_id", participante_id)
    .gte("data", fromDate)
    .order("data", { ascending: true });

  if (error) {
    console.error("Error fetching sono data:", error);
    return [];
  }

  return (data || []).map(r => ({
    data: r.data,
    valor: r.qualidade_sono
  }));
}

// Reference values
export async function getReferencias(sexo: string, idade: number): Promise<ReferenciaPopulacional[]> {
  const { data, error } = await supabase
    .from("referencias_populacionais")
    .select("metrica, faixa_min, faixa_max")
    .or(`sexo.is.null,sexo.eq.${sexo}`)
    .or(`idade_min.is.null,idade_min.lte.${idade}`)
    .or(`idade_max.is.null,idade_max.gte.${idade}`);

  if (error) {
    console.error("Error fetching referencias:", error);
    return [];
  }

  return (data || []).map(r => ({
    metrica: r.metrica,
    faixa_min: Number(r.faixa_min),
    faixa_max: Number(r.faixa_max),
  }));
}
