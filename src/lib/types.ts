export type JanelaDose = "DIA" | "TARDE" | "NOITE";
export type Severidade = "NENHUM" | "LEVE" | "MODERADO" | "FORTE";

export type PerfilAtividade = "CONDUCAO" | "ANALISE" | "ENSINO" | "EXECUCAO" | "CRIACAO";
export type RotinaTrabalho = "REUNIOES" | "FOCO" | "MISTO";

export type NivelExperiencia = "NENHUMA" | "POUCA" | "MODERADA" | "ALTA";
export type FrequenciaExercicio = "NUNCA" | "1_2_SEMANA" | "3_4_SEMANA" | "5_MAIS_SEMANA";
export type ConsumoSubstancia = "NUNCA" | "RARAMENTE" | "MODERADO" | "FREQUENTE";

export type Participante = {
  id: string;
  user_id: string;
  codigo: string;
  nome_publico: string;
  sexo: "MASCULINO" | "FEMININO" | "OUTRO" | "NAO_INFORMAR";
  data_nascimento: string;
  altura_cm: number | null;
  peso_kg: number | null;
  perfil_atividade: PerfilAtividade | null;
  rotina_trabalho: RotinaTrabalho | null;
  // Novos campos de perfil expandido
  objetivo_principal: string | null;
  nivel_experiencia_suplementos: NivelExperiencia | null;
  condicoes_saude: string[] | null;
  medicamentos_uso: string | null;
  qualidade_sono_geral: number | null;
  horas_sono_media: number | null;
  horario_acordar: string | null;
  horario_dormir: string | null;
  pratica_exercicio: boolean;
  frequencia_exercicio: FrequenciaExercicio | null;
  nivel_estresse_geral: number | null;
  consumo_cafeina: ConsumoSubstancia | null;
  consumo_alcool: ConsumoSubstancia | null;
  onboarding_completo: boolean;
  onboarding_etapa: number;
};

export type RegistroDose = {
  id?: string;
  participante_id: string;
  data: string;
  janela: JanelaDose;
  tomou: boolean;
  horario_tomada?: string | null;
  escala_1: number | null;
  escala_2: number | null;
  escala_3: number | null;
  efeito_indesejado: Severidade;
  sintomas: string[];
  observacoes?: string | null;
};

export type ResumoDiario = {
  id?: string;
  participante_id: string;
  data: string;
  latencia_sono_min?: number | null;
  despertares?: number | null;
  qualidade_sono?: number | null;
  recuperacao_ao_acordar?: number | null;
  sonolencia_diurna?: number | null;
  estresse_dia?: number | null;
  cafeina_doses?: number | null;
};

export type SerieData = {
  data: string;
  janela?: JanelaDose;
  tomou?: boolean;
  escala_1?: number | null;
  escala_2?: number | null;
  escala_3?: number | null;
  qualidade_sono?: number | null;
  recuperacao_ao_acordar?: number | null;
};

export type ReferenciaPopulacional = {
  metrica: string;
  faixa_min: number;
  faixa_max: number;
};
