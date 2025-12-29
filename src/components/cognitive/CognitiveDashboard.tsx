import { useMemo, useState } from "react";
import {
  CognitiveProgressRing,
  MiniProgressRing,
  PhysiologicalCard,
  CognitiveHeatmap,
  FocusTimeChart,
  CognitiveProfileChart,
  InsightsSection,
  generateSampleHeatmapData,
  generateSampleProfileData,
} from "@/components/cognitive";
import type { DoseCheckin } from "@/lib/mvp-types";

type Period = 7 | 14 | 30;

interface CognitiveDashboardProps {
  checkins: DoseCheckin[];
}

// Gerar dados de exemplo para demonstração
function generateFocusData(days: number): { date: string; value: number }[] {
  const data = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Simular variação realista
    const baseValue = 45 + Math.random() * 30;
    const weekendPenalty = [0, 6].includes(date.getDay()) ? 0.6 : 1;
    
    data.push({
      date: date.toISOString().slice(0, 10),
      value: Math.round(baseValue * weekendPenalty),
    });
  }
  
  return data;
}

function generateClarityData(days: number): { date: string; value: number }[] {
  const data = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Evolução gradual com variação
    const progress = (days - i) / days;
    const baseValue = 40 + progress * 30 + (Math.random() - 0.5) * 20;
    
    data.push({
      date: date.toISOString().slice(0, 10),
      value: Math.round(Math.max(20, Math.min(100, baseValue))),
    });
  }
  
  return data;
}

export function CognitiveDashboard({ checkins }: CognitiveDashboardProps) {
  const [period, setPeriod] = useState<Period>(7);
  
  // Calcular métricas baseadas nos check-ins
  const metrics = useMemo(() => {
    const uniqueDays = new Set(checkins.map(c => c.dateISO)).size;
    const totalCheckins = checkins.length;
    
    // Índice cognitivo baseado em consistência
    const consistencyScore = Math.min(100, (uniqueDays / 30) * 100);
    
    // Média de foco dos check-ins que têm a métrica
    const focusCheckins = checkins.filter(c => c.focus !== undefined);
    const avgFocus = focusCheckins.length > 0 
      ? focusCheckins.reduce((acc, c) => acc + (c.focus || 0), 0) / focusCheckins.length
      : 0;
    
    // Média de clareza
    const clarityCheckins = checkins.filter(c => c.clarity !== undefined);
    const avgClarity = clarityCheckins.length > 0
      ? clarityCheckins.reduce((acc, c) => acc + (c.clarity || 0), 0) / clarityCheckins.length
      : 0;
    
    // Índice composto
    const cognitiveIndex = Math.round(
      consistencyScore * 0.4 + avgFocus * 10 * 0.3 + avgClarity * 10 * 0.3
    );
    
    return {
      cognitiveIndex: Math.min(100, cognitiveIndex || 15), // Mínimo para demonstração
      focusSustained: Math.round(avgFocus * 10) || 42,
      clarity: Math.round(avgClarity * 10) || 58,
      consistency: Math.round((uniqueDays / 7) * 100) || 35,
      uniqueDays,
    };
  }, [checkins]);

  // Dados de exemplo para gráficos
  const focusData = useMemo(() => generateFocusData(30), []);
  const clarityData = useMemo(() => generateClarityData(30), []);
  const heatmapData = useMemo(() => generateSampleHeatmapData(), []);
  const profileData = useMemo(() => generateSampleProfileData(), []);
  
  // Insights baseados nos dados
  const insights = useMemo(() => {
    const result: string[] = [];
    
    if (metrics.consistency > 50) {
      result.push("Consistência gera mais clareza que intensidade isolada.");
    }
    if (metrics.focusSustained > 60) {
      result.push("Sessões mais longas tendem a maior clareza.");
    }
    if (checkins.some(c => c.confounders?.caffeine)) {
      result.push("Alta carga cognitiva sem recuperação reduz clareza percebida.");
    }
    if (result.length === 0) {
      result.push("Continue registrando para desbloquear insights personalizados.");
    }
    
    return result;
  }, [metrics, checkins]);

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* === HOME / VISÃO GERAL === */}
      <section className="space-y-6">
        {/* Anel principal + Mini anéis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Anel de Progresso Cognitivo Principal */}
          <div className="flex items-center justify-center p-8 rounded-lg border border-border/60 bg-card/40">
            <CognitiveProgressRing value={metrics.cognitiveIndex} />
          </div>
          
          {/* Mini Anéis */}
          <div className="grid grid-cols-3 gap-4">
            <MiniProgressRing
              label="Foco Sustentado"
              value={metrics.focusSustained}
              trend="up"
            />
            <MiniProgressRing
              label="Clareza Percebida"
              value={metrics.clarity}
              trend="stable"
            />
            <MiniProgressRing
              label="Consistência"
              value={metrics.consistency}
              trend={metrics.uniqueDays > 3 ? "up" : "down"}
            />
          </div>
        </div>
        
        {/* Contexto Fisiológico */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium text-foreground">Contexto Fisiológico</h3>
            <span className="text-xs text-foreground/60 font-mono">
              Declarado pelo usuário
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <PhysiologicalCard
              type="sono"
              value="7h"
              subValue="Boa qualidade"
              status="favoravel"
            />
            <PhysiologicalCard
              type="energia"
              value="Média"
              status="neutro"
            />
            <PhysiologicalCard
              type="estresse"
              value="Baixo"
              status="favoravel"
            />
            <PhysiologicalCard
              type="exercicio"
              value="Sim"
              subValue="Leve"
              status="favoravel"
            />
          </div>
        </div>
      </section>
      
      {/* === EXECUÇÃO COGNITIVA === */}
      <section className="space-y-5">
        <h2 className="text-sm font-mono text-foreground/70 tracking-wider uppercase">
          Execução Cognitiva
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <CognitiveHeatmap data={heatmapData} />
          <CognitiveProfileChart data={profileData} />
        </div>
        
        <FocusTimeChart 
          data={focusData} 
          title="Tempo de Foco"
          yAxisLabel="min"
        />
      </section>
      
      {/* === EVOLUÇÃO === */}
      <section className="space-y-5">
        <h2 className="text-sm font-mono text-foreground/70 tracking-wider uppercase">
          Evolução
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <FocusTimeChart 
            data={clarityData} 
            title="Evolução da Clareza"
            yAxisLabel="%"
          />
          <FocusTimeChart 
            data={focusData.map(d => ({ ...d, value: Math.round(d.value * 0.7) }))} 
            title="Consistência de Uso"
            yAxisLabel="%"
          />
        </div>
      </section>
      
      {/* === INTERPRETAÇÃO === */}
      <section className="space-y-5">
        <h2 className="text-sm font-mono text-foreground/70 tracking-wider uppercase">
          Interpretação
        </h2>
        <InsightsSection insights={insights} />
      </section>
      
      {/* Mensagem fixa */}
      <p className="text-sm text-foreground/50 text-center pt-6 border-t border-border/40 italic">
        Clareza mental é construída com consistência, recuperação e exigência cognitiva.
      </p>
    </div>
  );
}
