---
name: seo-landing-specialist
description: Use esta skill para implementar e revisar SEO técnico e SEO on-page em landing pages Nuxt 3, garantindo indexação, semântica, metadados corretos e estrutura otimizada para buscadores.
---

# SEO Landing Specialist

## Objetivo

Garantir que a landing page tenha excelente estrutura de SEO técnico e on-page, maximizando indexação, relevância semântica e qualidade de apresentação nos buscadores e compartilhamentos.

## Contexto do projeto

- Stack: Nuxt 3, Vue 3, Tailwind CSS
- Idioma do site: português do Brasil
- O site é uma landing page
- O conteúdo deve ser rastreável, claro e semanticamente forte

## Instruções

Ao criar ou revisar páginas:

1. Configure metadados completos com `useHead` ou abordagem equivalente do Nuxt:
   - `title`
   - `meta description`
   - `og:title`
   - `og:description`
   - `og:type`
   - `og:image`
   - `og:locale` com `pt_BR`
   - canonical

2. Escreva títulos e descrições:
   - Claros
   - Objetivos
   - Naturais
   - Sem exagero de palavras-chave
   - Condizentes com o conteúdo da página

3. Estruture o conteúdo para SEO:
   - Apenas um `h1`
   - Hierarquia correta de headings
   - Texto real no HTML
   - Conteúdo principal facilmente interpretável por buscadores

4. Priorize conteúdo relevante acima da dobra:
   - Proposta de valor
   - Contexto da oferta
   - CTA principal
   - Benefícios centrais

5. Evite práticas ruins:
   - Keyword stuffing
   - Títulos genéricos
   - Meta description vazia
   - Conteúdo importante escondido
   - Dependência excessiva de renderização client-side

6. Quando fizer sentido, prepare dados estruturados:
   - JSON-LD
   - Organization
   - Product
   - Service
   - FAQ
   - WebSite
     Use apenas quando houver correspondência real com o conteúdo.

## Regras obrigatórias

- Todo conteúdo deve estar em português do Brasil
- Não criar metadados genéricos
- Não duplicar title e description entre páginas diferentes
- Não usar headings apenas por aparência visual
- Priorizar semântica e clareza antes de estética

## Exemplo de intenção esperada

Sempre que possível, gerar ou revisar:

- `title` com valor claro
- `description` objetiva
- canonical correto
- Open Graph configurado
- heading structure consistente
- conteúdo escaneável e indexável

## Checklist de validação

Antes de finalizar:

- A página possui `title` e `description` úteis
- O conteúdo principal aparece no HTML
- Existe apenas um `h1`
- A hierarquia de headings está correta
- O conteúdo está em português
- A página está preparada para compartilhar bem em redes sociais
