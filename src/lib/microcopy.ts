import type { JanelaDose, PerfilAtividade } from "./types";

export const PERFIS: { value: PerfilAtividade; title: string; desc: string }[] = [
  { 
    value: "CONDUCAO", 
    title: "Condução e organização de pessoas e decisões", 
    desc: "Planejar, coordenar, decidir, acompanhar processos e pessoas." 
  },
  { 
    value: "ANALISE", 
    title: "Análise, raciocínio e resolução de problemas", 
    desc: "Estruturar ideias, interpretar dados, estudar cenários e construir soluções." 
  },
  { 
    value: "ENSINO", 
    title: "Ensino, orientação e desenvolvimento de pessoas", 
    desc: "Educar, orientar, acompanhar e apoiar o desenvolvimento de outros." 
  },
  { 
    value: "EXECUCAO", 
    title: "Ação prática, presença física e execução", 
    desc: "Atuar com ritmo, coordenação, presença e execução no mundo real." 
  },
  { 
    value: "CRIACAO", 
    title: "Criação, comunicação e expressão de ideias", 
    desc: "Criar, comunicar, escrever, apresentar ou expressar conceitos." 
  },
];

export const JANELAS: Record<JanelaDose, { titulo: string; subtitulo: string }> = {
  DIA: { titulo: "Dia (Core)", subtitulo: "Clareza • Atenção • Energia mental estável" },
  TARDE: { titulo: "Tarde (Boost)", subtitulo: "Foco • Energia útil • Impulso para agir" },
  NOITE: { titulo: "Noite (Knight)", subtitulo: "Desaceleração • Pronto para dormir • Tranquilidade" },
};

type EscalaDef = {
  nome: string;
  pergunta: string;
  ancora: string;
  exemploPorPerfil?: Partial<Record<PerfilAtividade, string>>;
};

export const ESCALAS: Record<JanelaDose, EscalaDef[]> = {
  DIA: [
    {
      nome: "Clareza mental",
      pergunta: "Minha mente está organizada e clara para executar o que preciso hoje?",
      ancora: "0=confusa • 10=cristalina",
      exemploPorPerfil: {
        CONDUCAO: "Pense em organizar prioridades e tomar decisões com segurança.",
        ANALISE: "Pense em estruturar raciocínios e compreender um problema com nitidez.",
        ENSINO: "Pense em conduzir orientações com presença, clareza e paciência.",
        EXECUCAO: "Pense em manter atenção, coordenação e ritmo durante a atividade.",
        CRIACAO: "Pense em organizar ideias para criar ou comunicar com fluidez.",
      },
    },
    { 
      nome: "Atenção sustentada", 
      pergunta: "Consigo manter atenção sem me dispersar com facilidade?", 
      ancora: "0=disperso • 10=foco contínuo" 
    },
    { 
      nome: "Energia mental estável", 
      pergunta: "Minha energia mental se mantém ao longo do dia, sem queda brusca?", 
      ancora: "0=exausto • 10=estável" 
    },
  ],
  TARDE: [
    {
      nome: "Foco de ataque",
      pergunta: "Consigo entrar em uma tarefa e avançar de forma objetiva?",
      ancora: "0=travado • 10=execução rápida",
      exemploPorPerfil: {
        CONDUCAO: "Pense em fechar decisões e concluir pendências com clareza.",
        ANALISE: "Pense em resolver um problema sem perder o fio lógico.",
        ENSINO: "Pense em manter presença e condução mesmo com energia menor na tarde.",
        EXECUCAO: "Pense em manter performance prática e atenção ao ambiente.",
        CRIACAO: "Pense em produzir e finalizar algo sem bloqueio.",
      },
    },
    { 
      nome: "Energia útil", 
      pergunta: "Minha energia vira ação prática (e não apenas agitação)?", 
      ancora: "0=sem energia • 10=produtiva" 
    },
    { 
      nome: "Impulso para agir", 
      pergunta: "O quanto foi fácil iniciar a tarefa mais importante da tarde?", 
      ancora: "0=difícil • 10=natural" 
    },
  ],
  NOITE: [
    {
      nome: "Desaceleração",
      pergunta: "Meu corpo e mente reduziram o ritmo ao longo da noite?",
      ancora: "0=acelerado • 10=desacelerado",
      exemploPorPerfil: {
        CONDUCAO: "Pense em desligar de decisões e ruminação mental do trabalho.",
        ANALISE: "Pense em parar de 'rodar' problemas e permitir descanso mental.",
        ENSINO: "Pense em soltar a tensão do cuidado e da presença constante.",
        EXECUCAO: "Pense em relaxar o corpo e reduzir o alerta físico.",
        CRIACAO: "Pense em encerrar o fluxo de ideias e desacoplar da criação.",
      },
    },
    { 
      nome: "Pronto para dormir", 
      pergunta: "O quanto me sinto naturalmente pronto para dormir agora?", 
      ancora: "0=sem sono • 10=sono natural" 
    },
    { 
      nome: "Tranquilidade emocional", 
      pergunta: "Como está meu estado emocional para encerrar o dia?", 
      ancora: "0=tenso • 10=calmo" 
    },
  ],
};

export const SINTOMAS = [
  { k: "dor_cabeca", label: "Dor de cabeça" },
  { k: "desconforto_gastrico", label: "Desconforto gástrico" },
  { k: "agitacao", label: "Agitação" },
  { k: "palpitacao", label: "Palpitação" },
  { k: "insonia", label: "Insônia" },
  { k: "sonolencia_fora_de_hora", label: "Sonolência fora de hora" },
  { k: "ansiedade", label: "Ansiedade" },
  { k: "irritabilidade", label: "Irritabilidade" },
] as const;
