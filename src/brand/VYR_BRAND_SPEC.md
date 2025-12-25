# VYR — BRAND IDENTITY SPECIFICATION
## ATO 1: Visual Overlay System

---

## 1. MARCA MÃE — VYR

### Logo Tipográfico (Wordmark)

```
VYR
```

**Regras do Logo:**
- Apenas tipografia, sem ícones ou símbolos
- Sem ilustrações (cérebro, ondas, energia, coração)
- Minimalista, técnico, frio, estável, atemporal

**Tipografia do Logo:**
- Fonte: `JetBrains Mono` (monoespaçada, geométrica)
- Peso: `Medium (500)`
- Letter-spacing: `0.35em`
- Caracteres angulares, sem curvas orgânicas

**Variantes:**
| Contexto | Cor do Logo |
|----------|-------------|
| Fundo escuro | `#FAFAFA` (branco técnico) |
| Fundo claro | `#0A0A0A` (preto profundo) |

**Aplicações:**
- Header da plataforma
- Rodapé
- Embalagens
- Labels dos produtos

---

## 2. SISTEMA DE LABELS

Os labels são **funcionais**, não marcas independentes. Seguem a mesma tipografia e alinhamento do logo mãe.

### Mapeamento de Migração

| Antigo | Novo | Descrição |
|--------|------|-----------|
| NZT Dia | **VYR BOOT** | Inicialização cognitiva matinal |
| NZT Tarde | **VYR HOLD** | Sustentação de performance |
| NZT Noite | **VYR CLEAR** | Limpeza e recuperação noturna |
| Pacote Completo | **VYR SYSTEM** | Sistema integrado completo |
| Smart Ring | **VYR NODE** | Sensor fisiológico (hardware) |

### Apresentação Visual dos Labels

```
VYR
BOOT

VYR
HOLD

VYR
CLEAR

VYR
SYSTEM

VYR
NODE
```

**Tipografia dos Labels:**
- "VYR": `JetBrains Mono`, Medium 500, tracking `0.35em`
- Sublabel (BOOT/HOLD/CLEAR/etc): `JetBrains Mono`, Regular 400, tracking `0.25em`

---

## 3. PALETA DE CORES

### Cores Base (Obrigatórias)

| Token | Hex | Descrição |
|-------|-----|-----------|
| `--vyr-black` | `#0A0A0A` | Preto profundo (base) |
| `--vyr-white` | `#FAFAFA` | Branco técnico |
| `--vyr-gray-900` | `#171717` | Quase preto |
| `--vyr-gray-800` | `#1A1A1A` | Superfícies escuras |
| `--vyr-gray-700` | `#262626` | Bordas sutis |
| `--vyr-gray-600` | `#404040` | Grafite médio |
| `--vyr-gray-500` | `#525252` | Grafite |
| `--vyr-gray-400` | `#737373` | Texto secundário |
| `--vyr-gray-300` | `#A3A3A3` | Texto terciário |
| `--vyr-gray-200` | `#D4D4D4` | Cinza claro |
| `--vyr-gray-100` | `#E5E5E5` | Cinza muito claro |
| `--vyr-cold-blue` | `#1E293B` | Azul frio sutil (apenas CLEAR) |

### Cores por Produto

| Produto | Cor de Fundo | Cor do Texto |
|---------|--------------|--------------|
| VYR BOOT | `#E5E5E5` (gray-100) | `#0A0A0A` (black) |
| VYR HOLD | `#404040` (gray-600) | `#FAFAFA` (white) |
| VYR CLEAR | `#1E293B` (cold-blue) | `#FAFAFA` (white) |
| VYR SYSTEM | `#1A1A1A` (gray-800) | `#FAFAFA` (white) |
| VYR NODE | `#0A0A0A` (black) | `#A3A3A3` (gray-300) |

### Restrições de Cor

❌ **EVITAR:**
- Gradientes emocionais
- Roxo/rosa chamativo
- Cores vibrantes
- Qualquer cor que "chame atenção"

✅ **A cor não deve chamar atenção. O sistema deve.**

---

## 4. TIPOGRAFIA

### Hierarquia Tipográfica

| Uso | Fonte | Peso | Características |
|-----|-------|------|-----------------|
| Logo + Labels | JetBrains Mono | Medium 500 | Geométrica, monoespaçada |
| Corpo de texto | Inter | Regular 400 | Legibilidade, neutralidade |

### Especificações Detalhadas

**Logo VYR:**
```css
font-family: 'JetBrains Mono', monospace;
font-weight: 500;
letter-spacing: 0.35em;
text-transform: uppercase;
```

**Sublabels (BOOT, HOLD, etc):**
```css
font-family: 'JetBrains Mono', monospace;
font-weight: 400;
letter-spacing: 0.25em;
text-transform: uppercase;
```

**Texto informativo:**
```css
font-family: 'Inter', sans-serif;
font-weight: 400;
```

---

## 5. EMBALAGENS — SACHETS

### Especificações Visuais

**Características obrigatórias:**
- Visual minimalista e industrial
- Premium técnico
- Muito espaço vazio
- Informação mínima
- Nenhuma promessa emocional

**Estrutura do Sachet:**

```
┌─────────────────┐
│  ▀▀▀▀▀▀▀▀▀▀▀▀  │  ← Selo superior (cinza técnico)
│                 │
│       VYR       │  ← Logo centralizado
│      BOOT       │  ← Sublabel
│                 │
│                 │
│    30 DOSES     │  ← Info mínima (opacidade 50%)
└─────────────────┘
```

**Dimensões conceituais:**
- Proporção: ~1:1.67 (retrato)
- Cantos: arredondamento mínimo (2px)

### Cores por Variante

| Sachet | Fundo | Texto Principal | Texto Secundário |
|--------|-------|-----------------|------------------|
| BOOT | `#E5E5E5` | `#0A0A0A` | `#525252` |
| HOLD | `#404040` | `#FAFAFA` | `#A3A3A3` |
| CLEAR | `#1E293B` | `#FAFAFA` | `#A3A3A3` |

---

## 6. EMBALAGENS — CAIXAS

### Especificações Visuais

**Características:**
- Mesma estética dos sachets
- Perspectiva 3D sutil (rotação -5°)
- Sombra lateral para profundidade

**Estrutura da Caixa:**

```
┌──────────────────┬──┐
│                  │▓▓│  ← Lateral (cor secundária)
│        VYR       │▓▓│
│       BOOT       │▓▓│
│                  │▓▓│
│                  │▓▓│
│    30 SACHETS    │▓▓│
└──────────────────┴──┘
```

**Informações na caixa:**
- Logo VYR
- Sublabel do produto
- Quantidade: "30 SACHETS"
- Sem claims, benefícios ou promessas

---

## 7. VYR NODE — HARDWARE

### Especificações do Anel

**Filosofia visual:**
- Instrumento técnico (não acessório de moda)
- Discreto e minimal
- Sem LEDs chamativos
- Logo VYR gravado sutilmente (opacidade ~20%)

**Representação Visual:**

```
       ┌─────────────┐
      ╱               ╲
     │    ┌───────┐    │
     │    │       │    │
     │    │  VYR  │    │  ← Logo gravado (sutil)
     │    │       │    │
     │    └───────┘    │
      ╲               ╱
       └─────────────┘
            ●            ← Indicador de sensor (azul frio, sutil)
```

**Materiais:**
- Titânio (aparência técnica)
- Acabamento fosco
- Sem brilho ou reflexos chamativos

**Especificações Técnicas (para referência):**
- Sensores: PPG, HRV, SpO2
- Bateria: 7 dias
- Material: Titânio

---

## 8. PRINCÍPIOS DE DESIGN

### O que VYR DEVE parecer:

✅ Um sistema
✅ Uma infraestrutura
✅ Algo técnico e controlado
✅ Silencioso
✅ Respeitável tecnicamente
✅ Curioso (não explicativo)

### O que VYR NÃO DEVE parecer:

❌ Amigável
❌ Explicativo
❌ Motivacional
❌ Emocional
❌ Wellness/Lifestyle
❌ Suplemento fitness

### Sensação Final

> VYR não seduz. VYR se impõe como sistema.

A identidade deve causar:
- Silêncio
- Curiosidade
- Respeito técnico

---

## 9. REGRAS DE APLICAÇÃO

### O que MUDA (ATO 1):
- Nome: NZT → VYR
- Labels dos produtos
- Paleta de cores (mais neutra/técnica)
- Tipografia (JetBrains Mono para logo)
- Visual das embalagens
- Visual do anel (NODE)

### O que NÃO MUDA:
- Layout das páginas
- Estrutura do site
- Grid
- Navegação
- UX
- Fluxo de compra
- Copy principal
- Argumentação de venda
- Fórmulas dos produtos
- Funcionalidades

---

## 10. TOKENS CSS (Referência Técnica)

```css
:root {
  /* Core Colors */
  --vyr-black: #0A0A0A;
  --vyr-white: #FAFAFA;
  
  /* Gray Scale */
  --vyr-gray-100: #E5E5E5;
  --vyr-gray-200: #D4D4D4;
  --vyr-gray-300: #A3A3A3;
  --vyr-gray-400: #737373;
  --vyr-gray-500: #525252;
  --vyr-gray-600: #404040;
  --vyr-gray-700: #262626;
  --vyr-gray-800: #1A1A1A;
  --vyr-gray-900: #171717;
  
  /* Accent */
  --vyr-cold-blue: #1E293B;
  
  /* Typography */
  --vyr-font-logo: 'JetBrains Mono', monospace;
  --vyr-font-body: 'Inter', sans-serif;
  --vyr-font-weight-logo: 500;
  --vyr-letter-spacing-logo: 0.35em;
}
```

---

## CHECKLIST DE VALIDAÇÃO

- [ ] Logo VYR é apenas tipográfico (sem ícones)
- [ ] Tipografia é geométrica/monoespaçada (JetBrains Mono)
- [ ] Paleta é neutra (preto, branco, cinzas, azul frio sutil)
- [ ] Sem gradientes emocionais ou cores vibrantes
- [ ] Labels seguem estrutura VYR + SUBLABEL
- [ ] Embalagens são minimalistas com muito espaço vazio
- [ ] NODE parece instrumento técnico (não moda)
- [ ] Identidade causa silêncio/respeito (não simpatia)
- [ ] Nenhuma promessa emocional visível
- [ ] Sistema > Produto individual

---

**Versão:** 1.0
**Status:** ATO 1 Completo
**Próximo:** ATO 2 (Aplicação na Plataforma)
