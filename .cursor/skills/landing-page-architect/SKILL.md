---
name: landing-page-architect
description: Use esta skill para criar, revisar ou refatorar landing pages em Nuxt 3 com Vue 3 e Tailwind, com foco em SEO, acessibilidade, semântica HTML, performance e alta pontuação no Lighthouse.
---

# Landing Page Architect

## Objetivo

Criar e organizar landing pages com arquitetura simples, escalável e semântica, priorizando SEO, acessibilidade, performance e clareza de código.

## Contexto do projeto

- Stack: Nuxt 3, Vue 3, Tailwind CSS
- Idioma do site: português do Brasil
- Objetivo principal: landing page de alta performance
- Prioridades absolutas:
  1. SEO
  2. Acessibilidade
  3. Lighthouse
  4. Clareza estrutural
  5. Reutilização saudável de componentes

## Instruções

Ao criar ou revisar qualquer página, componente ou seção:

1. Use HTML semântico sempre que possível:
   - `header`
   - `main`
   - `section`
   - `article`
   - `nav`
   - `footer`

2. Garanta hierarquia correta de headings:
   - Apenas um `h1` por página
   - `h2` para seções principais
   - `h3` em subdivisões quando necessário
   - Nunca pular níveis sem motivo

3. Estruture a landing page com foco em escaneabilidade:
   - Hero claro
   - Proposta de valor objetiva
   - Benefícios
   - Prova social quando houver
   - CTA principal visível
   - CTA secundário apenas se necessário

4. Evite abstrações desnecessárias:
   - Não crie componentes para blocos que não serão reutilizados
   - Crie componentes quando houver ganho real de manutenção, consistência ou reaproveitamento

5. Prefira simplicidade:
   - Menos wrappers
   - Menos camadas
   - Menos lógica no template
   - Menos dependências externas

6. Em Nuxt:
   - Priorize renderização favorável para SEO
   - Evite depender de comportamento client-only para conteúdo relevante
   - Mantenha conteúdo importante renderizado no HTML

## Convenções obrigatórias

- O conteúdo textual deve estar em português
- O código deve ser limpo, legível e objetivo
- Os nomes de componentes devem ser claros e descritivos
- As seções devem ser organizadas para facilitar manutenção futura
- O layout deve ser responsivo desde a base

## Checklist de validação

Antes de finalizar qualquer entrega, confirme:

- Existe apenas um `h1`
- A estrutura está semanticamente correta
- O CTA principal está claro
- O conteúdo principal está visível sem depender de JS
- A página está simples, legível e bem organizada
- A implementação favorece Lighthouse alto
