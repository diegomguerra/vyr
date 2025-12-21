import { useMemo } from "react";
import type { Participante } from "@/lib/types";
import { OBJETIVOS, PERFIS, EXPERIENCIA_SUPLEMENTOS, FREQUENCIA_EXERCICIO, CONSUMO_OPTIONS, ROTINAS } from "@/lib/onboarding-data";
import { calcularIdade } from "@/lib/date";

interface ProfileSummaryProps {
  participante: Participante;
}

function getLabel<T extends { value: string; label?: string; title?: string }>(
  arr: readonly T[] | T[],
  value: string | null | undefined
): string | null {
  if (!value) return null;
  const item = arr.find((x) => x.value === value);
  return item ? (item.title ?? item.label ?? null) : null;
}

function getObjetivoLabel(value: string | null): { label: string; icon: string } | null {
  if (!value) return null;
  const obj = OBJETIVOS.find((o) => o.value === value);
  return obj ? { label: obj.label, icon: obj.icon } : null;
}

function getPerfilLabel(value: string | null): { title: string; icon: string } | null {
  if (!value) return null;
  const p = PERFIS.find((x) => x.value === value);
  return p ? { title: p.title, icon: p.icon } : null;
}

function getRotinaLabel(value: string | null): { label: string; icon: string } | null {
  if (!value) return null;
  const r = ROTINAS.find((x) => x.value === value);
  return r ? { label: r.label, icon: r.icon } : null;
}

export function ProfileSummary({ participante }: ProfileSummaryProps) {
  const idade = useMemo(
    () => calcularIdade(participante.data_nascimento),
    [participante.data_nascimento]
  );

  const objetivo = getObjetivoLabel(participante.objetivo_principal);
  const perfil = getPerfilLabel(participante.perfil_atividade);
  const rotina = getRotinaLabel(participante.rotina_trabalho);
  const experiencia = getLabel(EXPERIENCIA_SUPLEMENTOS, participante.nivel_experiencia_suplementos);
  const frequenciaEx = getLabel(FREQUENCIA_EXERCICIO, participante.frequencia_exercicio);
  const consumoCafe = getLabel(CONSUMO_OPTIONS, participante.consumo_cafeina);
  const consumoAlcool = getLabel(CONSUMO_OPTIONS, participante.consumo_alcool);

  return (
    <div className="space-y-4">
      {/* Header com objetivo principal */}
      {objetivo && (
        <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20">
          <span className="text-2xl">{objetivo.icon}</span>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Objetivo principal</p>
            <p className="text-sm font-medium text-foreground">{objetivo.label}</p>
          </div>
        </div>
      )}

      {/* Grid de informações básicas */}
      <div className="grid grid-cols-2 gap-3">
        <InfoTile label="Idade" value={`${idade} anos`} />
        <InfoTile 
          label="Sexo" 
          value={
            participante.sexo === "MASCULINO" ? "Masculino" :
            participante.sexo === "FEMININO" ? "Feminino" :
            participante.sexo === "OUTRO" ? "Outro" : "Não informado"
          } 
        />
        {participante.peso_kg && (
          <InfoTile label="Peso" value={`${participante.peso_kg} kg`} />
        )}
        {participante.altura_cm && (
          <InfoTile label="Altura" value={`${participante.altura_cm} cm`} />
        )}
      </div>

      {/* Perfil de atividade e rotina */}
      {(perfil || rotina) && (
        <div className="space-y-2">
          {perfil && (
            <div className="flex items-center gap-2 text-sm">
              <span>{perfil.icon}</span>
              <span className="text-foreground">{perfil.title}</span>
            </div>
          )}
          {rotina && (
            <div className="flex items-center gap-2 text-sm">
              <span>{rotina.icon}</span>
              <span className="text-muted-foreground">{rotina.label}</span>
            </div>
          )}
        </div>
      )}

      {/* Baseline de sono e estresse */}
      <div className="space-y-2 pt-2 border-t border-border">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">Baseline inicial (anamnese)</p>
        <div className="grid grid-cols-2 gap-2">
          {participante.qualidade_sono_geral != null && (
            <BaselineTile 
              label="Qualidade sono" 
              value={participante.qualidade_sono_geral} 
              max={10} 
            />
          )}
          {participante.nivel_estresse_geral != null && (
            <BaselineTile 
              label="Nível estresse" 
              value={participante.nivel_estresse_geral} 
              max={10} 
              inverted 
            />
          )}
          {participante.horas_sono_media != null && (
            <InfoTile 
              label="Sono médio" 
              value={`${participante.horas_sono_media}h`} 
            />
          )}
          {frequenciaEx && (
            <InfoTile label="Exercício" value={frequenciaEx} small />
          )}
        </div>
      </div>

      {/* Consumo */}
      {(consumoCafe || consumoAlcool) && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          {consumoCafe && (
            <span className="nzt-badge">☕ Cafeína: {consumoCafe}</span>
          )}
          {consumoAlcool && (
            <span className="nzt-badge">🍷 Álcool: {consumoAlcool}</span>
          )}
        </div>
      )}

      {/* Experiência com suplementos */}
      {experiencia && (
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Experiência com nootrópicos: <span className="text-foreground">{experiencia}</span>
          </p>
        </div>
      )}
    </div>
  );
}

function InfoTile({ label, value, small }: { label: string; value: string; small?: boolean }) {
  return (
    <div className="p-2 rounded-lg bg-muted/30 border border-border/50">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className={`text-foreground ${small ? "text-xs" : "text-sm font-medium"}`}>{value}</p>
    </div>
  );
}

function BaselineTile({ 
  label, 
  value, 
  max, 
  inverted 
}: { 
  label: string; 
  value: number; 
  max: number; 
  inverted?: boolean;
}) {
  const percent = (value / max) * 100;
  // For inverted metrics (like stress), lower is better
  const isGood = inverted ? value <= max * 0.4 : value >= max * 0.6;
  const isBad = inverted ? value >= max * 0.7 : value <= max * 0.3;
  
  return (
    <div className="p-2 rounded-lg bg-muted/30 border border-border/50">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-foreground">{value}/{max}</span>
        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all ${
              isGood ? "bg-secondary" : isBad ? "bg-destructive" : "bg-primary"
            }`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
