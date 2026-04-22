---
name: lighthouse-performance-enforcer
description: Use esta skill para implementar e revisar decisões de performance em landing pages Nuxt 3, com foco em Core Web Vitals, redução de JavaScript desnecessário, carregamento eficiente e máxima nota no Lighthouse.
---

# Lighthouse Performance Enforcer

## Objetivo

Maximizar a performance da landing page e aumentar a pontuação no Lighthouse, com foco especial em LCP, CLS, INP e redução de custo de renderização.

## Contexto do projeto

- Stack: Nuxt 3, Vue 3, Tailwind CSS
- Página do tipo landing page
- O site deve ser leve, rápido e previsível

## Instruções

Ao criar ou revisar páginas e componentes:

1. Priorize conteúdo acima da dobra:
   - Hero
   - Headline
   - Subheadline
   - CTA principal
   - Imagem principal otimizada quando houver

2. Reduza JavaScript desnecessário:
   - Evite bibliotecas pesadas sem necessidade
   - Evite lógica reativa excessiva
   - Evite componentes complexos para blocos estáticos
   - Evite animações custosas

3. Controle layout shift:
   - Defina dimensões de imagens e mídias
   - Evite carregamento tardio que empurre conteúdo
   - Mantenha estrutura estável durante a renderização

4. Otimize renderização:
   - Prefira conteúdo estático quando possível
   - Evite hidratação desnecessária
   - Não use plugins ou scripts de terceiros sem justificativa real

5. Imagens e assets:
   - Use imagens leves
   - Otimize formatos
   - Não carregue mídia maior que o necessário
   - Faça lazy load do que estiver fora da dobra

6. Tailwind:
   - Use classes utilitárias com objetividade
   - Evite excesso de complexidade visual
   - Não introduza CSS paralelo desnecessário

7. Fontes:
   - Reduza peso e quantidade de variantes
   - Evite múltiplas famílias sem necessidade
   - Garanta estratégia que minimize impacto de carregamento

## Regras obrigatórias

- Toda decisão visual deve considerar impacto em performance
- Qualquer dependência nova precisa ser justificada
- O site deve manter excelente experiência em dispositivos móveis
- O conteúdo principal deve carregar rápido e com estabilidade

## Checklist de validação

Antes de finalizar:

- O conteúdo acima da dobra é prioritário
- Não há bibliotecas desnecessárias
- As imagens estão otimizadas
- O layout não sofre deslocamentos evitáveis
- O HTML e CSS estão enxutos
- A implementação favorece alta nota no Lighthouse
