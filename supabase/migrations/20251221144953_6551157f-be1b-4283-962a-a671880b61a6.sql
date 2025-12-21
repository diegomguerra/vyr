-- Create enums
CREATE TYPE public.janela_dose AS ENUM ('DIA', 'TARDE', 'NOITE');
CREATE TYPE public.severidade AS ENUM ('NENHUM', 'LEVE', 'MODERADO', 'FORTE');
CREATE TYPE public.perfil_atividade AS ENUM ('CONDUCAO', 'ANALISE', 'ENSINO', 'EXECUCAO', 'CRIACAO');
CREATE TYPE public.rotina_trabalho AS ENUM ('REUNIOES', 'FOCO', 'MISTO');
CREATE TYPE public.sexo_tipo AS ENUM ('MASCULINO', 'FEMININO', 'OUTRO', 'NAO_INFORMAR');

-- Create participantes table
CREATE TABLE public.participantes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  codigo TEXT NOT NULL UNIQUE,
  nome_publico TEXT NOT NULL,
  sexo public.sexo_tipo NOT NULL DEFAULT 'NAO_INFORMAR',
  data_nascimento DATE NOT NULL,
  altura_cm INTEGER,
  peso_kg NUMERIC(5,2),
  perfil_atividade public.perfil_atividade,
  rotina_trabalho public.rotina_trabalho,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Create registros_dose table
CREATE TABLE public.registros_dose (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  participante_id UUID NOT NULL REFERENCES public.participantes(id) ON DELETE CASCADE,
  data DATE NOT NULL,
  janela public.janela_dose NOT NULL,
  tomou BOOLEAN NOT NULL DEFAULT false,
  horario_tomada TIME,
  escala_1 INTEGER CHECK (escala_1 >= 1 AND escala_1 <= 10),
  escala_2 INTEGER CHECK (escala_2 >= 1 AND escala_2 <= 10),
  escala_3 INTEGER CHECK (escala_3 >= 1 AND escala_3 <= 10),
  efeito_indesejado public.severidade NOT NULL DEFAULT 'NENHUM',
  sintomas TEXT[] DEFAULT '{}',
  observacoes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(participante_id, data, janela)
);

-- Create resumos_diarios table
CREATE TABLE public.resumos_diarios (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  participante_id UUID NOT NULL REFERENCES public.participantes(id) ON DELETE CASCADE,
  data DATE NOT NULL,
  latencia_sono_min INTEGER,
  despertares INTEGER,
  qualidade_sono INTEGER CHECK (qualidade_sono >= 1 AND qualidade_sono <= 10),
  recuperacao_ao_acordar INTEGER CHECK (recuperacao_ao_acordar >= 1 AND recuperacao_ao_acordar <= 10),
  sonolencia_diurna INTEGER CHECK (sonolencia_diurna >= 1 AND sonolencia_diurna <= 10),
  estresse_dia INTEGER CHECK (estresse_dia >= 1 AND estresse_dia <= 10),
  cafeina_doses INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(participante_id, data)
);

-- Create referencias_populacionais table (public read, admin write)
CREATE TABLE public.referencias_populacionais (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  metrica TEXT NOT NULL,
  sexo public.sexo_tipo,
  idade_min INTEGER,
  idade_max INTEGER,
  faixa_min NUMERIC(4,2) NOT NULL,
  faixa_max NUMERIC(4,2) NOT NULL
);

-- Enable RLS on all tables
ALTER TABLE public.participantes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registros_dose ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resumos_diarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referencias_populacionais ENABLE ROW LEVEL SECURITY;

-- RLS Policies for participantes
CREATE POLICY "Users can view their own participante"
ON public.participantes FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own participante"
ON public.participantes FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own participante"
ON public.participantes FOR UPDATE
USING (auth.uid() = user_id);

-- RLS Policies for registros_dose
CREATE POLICY "Users can view their own registros"
ON public.registros_dose FOR SELECT
USING (
  participante_id IN (
    SELECT id FROM public.participantes WHERE user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert their own registros"
ON public.registros_dose FOR INSERT
WITH CHECK (
  participante_id IN (
    SELECT id FROM public.participantes WHERE user_id = auth.uid()
  )
);

CREATE POLICY "Users can update their own registros"
ON public.registros_dose FOR UPDATE
USING (
  participante_id IN (
    SELECT id FROM public.participantes WHERE user_id = auth.uid()
  )
);

-- RLS Policies for resumos_diarios
CREATE POLICY "Users can view their own resumos"
ON public.resumos_diarios FOR SELECT
USING (
  participante_id IN (
    SELECT id FROM public.participantes WHERE user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert their own resumos"
ON public.resumos_diarios FOR INSERT
WITH CHECK (
  participante_id IN (
    SELECT id FROM public.participantes WHERE user_id = auth.uid()
  )
);

CREATE POLICY "Users can update their own resumos"
ON public.resumos_diarios FOR UPDATE
USING (
  participante_id IN (
    SELECT id FROM public.participantes WHERE user_id = auth.uid()
  )
);

-- RLS Policy for referencias (public read)
CREATE POLICY "Anyone can view referencias"
ON public.referencias_populacionais FOR SELECT
USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for participantes
CREATE TRIGGER update_participantes_updated_at
BEFORE UPDATE ON public.participantes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default referencias populacionais
INSERT INTO public.referencias_populacionais (metrica, faixa_min, faixa_max) VALUES
  ('dia_clareza', 5.4, 6.7),
  ('tarde_foco', 4.9, 6.3),
  ('sono_qualidade', 6.0, 7.2);