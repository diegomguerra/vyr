export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      participantes: {
        Row: {
          altura_cm: number | null
          codigo: string
          created_at: string
          data_nascimento: string
          id: string
          nome_publico: string
          perfil_atividade:
            | Database["public"]["Enums"]["perfil_atividade"]
            | null
          peso_kg: number | null
          rotina_trabalho: Database["public"]["Enums"]["rotina_trabalho"] | null
          sexo: Database["public"]["Enums"]["sexo_tipo"]
          updated_at: string
          user_id: string
        }
        Insert: {
          altura_cm?: number | null
          codigo: string
          created_at?: string
          data_nascimento: string
          id?: string
          nome_publico: string
          perfil_atividade?:
            | Database["public"]["Enums"]["perfil_atividade"]
            | null
          peso_kg?: number | null
          rotina_trabalho?:
            | Database["public"]["Enums"]["rotina_trabalho"]
            | null
          sexo?: Database["public"]["Enums"]["sexo_tipo"]
          updated_at?: string
          user_id: string
        }
        Update: {
          altura_cm?: number | null
          codigo?: string
          created_at?: string
          data_nascimento?: string
          id?: string
          nome_publico?: string
          perfil_atividade?:
            | Database["public"]["Enums"]["perfil_atividade"]
            | null
          peso_kg?: number | null
          rotina_trabalho?:
            | Database["public"]["Enums"]["rotina_trabalho"]
            | null
          sexo?: Database["public"]["Enums"]["sexo_tipo"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      referencias_populacionais: {
        Row: {
          faixa_max: number
          faixa_min: number
          id: string
          idade_max: number | null
          idade_min: number | null
          metrica: string
          sexo: Database["public"]["Enums"]["sexo_tipo"] | null
        }
        Insert: {
          faixa_max: number
          faixa_min: number
          id?: string
          idade_max?: number | null
          idade_min?: number | null
          metrica: string
          sexo?: Database["public"]["Enums"]["sexo_tipo"] | null
        }
        Update: {
          faixa_max?: number
          faixa_min?: number
          id?: string
          idade_max?: number | null
          idade_min?: number | null
          metrica?: string
          sexo?: Database["public"]["Enums"]["sexo_tipo"] | null
        }
        Relationships: []
      }
      registros_dose: {
        Row: {
          created_at: string
          data: string
          efeito_indesejado: Database["public"]["Enums"]["severidade"]
          escala_1: number | null
          escala_2: number | null
          escala_3: number | null
          horario_tomada: string | null
          id: string
          janela: Database["public"]["Enums"]["janela_dose"]
          observacoes: string | null
          participante_id: string
          sintomas: string[] | null
          tomou: boolean
        }
        Insert: {
          created_at?: string
          data: string
          efeito_indesejado?: Database["public"]["Enums"]["severidade"]
          escala_1?: number | null
          escala_2?: number | null
          escala_3?: number | null
          horario_tomada?: string | null
          id?: string
          janela: Database["public"]["Enums"]["janela_dose"]
          observacoes?: string | null
          participante_id: string
          sintomas?: string[] | null
          tomou?: boolean
        }
        Update: {
          created_at?: string
          data?: string
          efeito_indesejado?: Database["public"]["Enums"]["severidade"]
          escala_1?: number | null
          escala_2?: number | null
          escala_3?: number | null
          horario_tomada?: string | null
          id?: string
          janela?: Database["public"]["Enums"]["janela_dose"]
          observacoes?: string | null
          participante_id?: string
          sintomas?: string[] | null
          tomou?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "registros_dose_participante_id_fkey"
            columns: ["participante_id"]
            isOneToOne: false
            referencedRelation: "participantes"
            referencedColumns: ["id"]
          },
        ]
      }
      resumos_diarios: {
        Row: {
          cafeina_doses: number | null
          created_at: string
          data: string
          despertares: number | null
          estresse_dia: number | null
          id: string
          latencia_sono_min: number | null
          participante_id: string
          qualidade_sono: number | null
          recuperacao_ao_acordar: number | null
          sonolencia_diurna: number | null
        }
        Insert: {
          cafeina_doses?: number | null
          created_at?: string
          data: string
          despertares?: number | null
          estresse_dia?: number | null
          id?: string
          latencia_sono_min?: number | null
          participante_id: string
          qualidade_sono?: number | null
          recuperacao_ao_acordar?: number | null
          sonolencia_diurna?: number | null
        }
        Update: {
          cafeina_doses?: number | null
          created_at?: string
          data?: string
          despertares?: number | null
          estresse_dia?: number | null
          id?: string
          latencia_sono_min?: number | null
          participante_id?: string
          qualidade_sono?: number | null
          recuperacao_ao_acordar?: number | null
          sonolencia_diurna?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "resumos_diarios_participante_id_fkey"
            columns: ["participante_id"]
            isOneToOne: false
            referencedRelation: "participantes"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      janela_dose: "DIA" | "TARDE" | "NOITE"
      perfil_atividade:
        | "CONDUCAO"
        | "ANALISE"
        | "ENSINO"
        | "EXECUCAO"
        | "CRIACAO"
      rotina_trabalho: "REUNIOES" | "FOCO" | "MISTO"
      severidade: "NENHUM" | "LEVE" | "MODERADO" | "FORTE"
      sexo_tipo: "MASCULINO" | "FEMININO" | "OUTRO" | "NAO_INFORMAR"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      janela_dose: ["DIA", "TARDE", "NOITE"],
      perfil_atividade: [
        "CONDUCAO",
        "ANALISE",
        "ENSINO",
        "EXECUCAO",
        "CRIACAO",
      ],
      rotina_trabalho: ["REUNIOES", "FOCO", "MISTO"],
      severidade: ["NENHUM", "LEVE", "MODERADO", "FORTE"],
      sexo_tipo: ["MASCULINO", "FEMININO", "OUTRO", "NAO_INFORMAR"],
    },
  },
} as const
