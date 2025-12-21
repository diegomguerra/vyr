-- Adicionar novos campos de perfil na tabela participantes
ALTER TABLE public.participantes
ADD COLUMN IF NOT EXISTS objetivo_principal TEXT,
ADD COLUMN IF NOT EXISTS nivel_experiencia_suplementos TEXT,
ADD COLUMN IF NOT EXISTS condicoes_saude TEXT[],
ADD COLUMN IF NOT EXISTS medicamentos_uso TEXT,
ADD COLUMN IF NOT EXISTS qualidade_sono_geral INTEGER,
ADD COLUMN IF NOT EXISTS horas_sono_media NUMERIC(3,1),
ADD COLUMN IF NOT EXISTS horario_acordar TIME,
ADD COLUMN IF NOT EXISTS horario_dormir TIME,
ADD COLUMN IF NOT EXISTS pratica_exercicio BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS frequencia_exercicio TEXT,
ADD COLUMN IF NOT EXISTS nivel_estresse_geral INTEGER,
ADD COLUMN IF NOT EXISTS consumo_cafeina TEXT,
ADD COLUMN IF NOT EXISTS consumo_alcool TEXT,
ADD COLUMN IF NOT EXISTS onboarding_completo BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS onboarding_etapa INTEGER DEFAULT 0;