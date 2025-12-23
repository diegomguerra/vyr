import type { PerfilAtividade, RotinaTrabalho, NivelExperiencia, FrequenciaExercicio, ConsumoSubstancia } from "./types";

export const OBJETIVOS = [
  { value: "FOCO_MENTAL", label: "Melhorar foco e clareza mental", icon: "Target" },
  { value: "ENERGIA_ESTAVEL", label: "Ter energia mais estável ao longo do dia", icon: "Zap" },
  { value: "QUALIDADE_SONO", label: "Melhorar qualidade do sono", icon: "Moon" },
  { value: "REDUZIR_ESTRESSE", label: "Reduzir estresse e ansiedade", icon: "Heart" },
  { value: "PERFORMANCE", label: "Otimizar performance cognitiva", icon: "Brain" },
  { value: "RECUPERACAO", label: "Melhorar recuperação física/mental", icon: "Activity" },
] as const;

export const EXPERIENCIA_SUPLEMENTOS: { value: NivelExperiencia; label: string; desc: string }[] = [
  { value: "NENHUMA", label: "Nenhuma", desc: "Nunca usei suplementos nootrópicos" },
  { value: "POUCA", label: "Pouca", desc: "Já experimentei alguns poucos" },
  { value: "MODERADA", label: "Moderada", desc: "Uso ou já usei regularmente" },
  { value: "ALTA", label: "Alta", desc: "Tenho bastante experiência com nootrópicos" },
];

export const CONDICOES_SAUDE = [
  { k: "nenhuma", label: "Nenhuma condição relevante" },
  { k: "hipertensao", label: "Hipertensão" },
  { k: "diabetes", label: "Diabetes" },
  { k: "tireoide", label: "Problemas de tireoide" },
  { k: "ansiedade", label: "Ansiedade diagnosticada" },
  { k: "depressao", label: "Depressão diagnosticada" },
  { k: "tdah", label: "TDAH" },
  { k: "insonia_cronica", label: "Insônia crônica" },
  { k: "enxaqueca", label: "Enxaqueca frequente" },
  { k: "cardiaco", label: "Condição cardíaca" },
] as const;

export const FREQUENCIA_EXERCICIO: { value: FrequenciaExercicio; label: string }[] = [
  { value: "NUNCA", label: "Não pratico exercícios" },
  { value: "1_2_SEMANA", label: "1-2x por semana" },
  { value: "3_4_SEMANA", label: "3-4x por semana" },
  { value: "5_MAIS_SEMANA", label: "5+ vezes por semana" },
];

export const CONSUMO_OPTIONS: { value: ConsumoSubstancia; label: string }[] = [
  { value: "NUNCA", label: "Nunca" },
  { value: "RARAMENTE", label: "Raramente" },
  { value: "MODERADO", label: "Moderado" },
  { value: "FREQUENTE", label: "Frequente" },
];

export const PERFIS: { value: PerfilAtividade; title: string; desc: string; icon: string }[] = [
  { 
    value: "CONDUCAO", 
    title: "Condução e organização", 
    desc: "Planejar, coordenar, decidir e acompanhar pessoas.",
    icon: "Briefcase"
  },
  { 
    value: "ANALISE", 
    title: "Análise e resolução", 
    desc: "Estruturar ideias, interpretar dados e construir soluções.",
    icon: "BarChart3"
  },
  { 
    value: "ENSINO", 
    title: "Ensino e orientação", 
    desc: "Educar, orientar e apoiar o desenvolvimento de outros.",
    icon: "GraduationCap"
  },
  { 
    value: "EXECUCAO", 
    title: "Execução prática", 
    desc: "Atuar com ritmo, coordenação e presença no mundo real.",
    icon: "Wrench"
  },
  { 
    value: "CRIACAO", 
    title: "Criação e expressão", 
    desc: "Criar, comunicar, escrever e expressar conceitos.",
    icon: "Palette"
  },
];

export const ROTINAS: { value: RotinaTrabalho; label: string; icon: string }[] = [
  { value: "REUNIOES", label: "Muitas reuniões e interações", icon: "Users" },
  { value: "FOCO", label: "Foco individual profundo", icon: "Headphones" },
  { value: "MISTO", label: "Combinação dos dois", icon: "Scale" },
];

export const ONBOARDING_STEPS = [
  { id: 1, title: "Objetivo", subtitle: "O que busca?" },
  { id: 2, title: "Perfil", subtitle: "Como você atua?" },
  { id: 3, title: "Saúde", subtitle: "Condições e hábitos" },
  { id: 4, title: "Sono", subtitle: "Padrões de descanso" },
  { id: 5, title: "Estilo", subtitle: "Rotina e consumo" },
] as const;
