export type JanelaDose = "DIA" | "TARDE" | "NOITE";
export type Severidade = "NENHUM" | "LEVE" | "MODERADO" | "FORTE";

export type PerfilAtividade = "CONDUCAO" | "ANALISE" | "ENSINO" | "EXECUCAO" | "CRIACAO";
export type RotinaTrabalho = "REUNIOES" | "FOCO" | "MISTO";

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
