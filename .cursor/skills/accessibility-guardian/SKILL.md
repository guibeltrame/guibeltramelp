---
name: accessibility-guardian
description: Use esta skill para revisar e implementar acessibilidade em páginas e componentes Vue/Nuxt, garantindo navegação por teclado, semântica correta, contraste, foco visível e compatibilidade com leitores de tela.
---

# Accessibility Guardian

## Objetivo

Garantir que a landing page e seus componentes sejam acessíveis, utilizáveis por teclado, semanticamente corretos e compatíveis com boas práticas de acessibilidade.

## Contexto do projeto

- Stack: Nuxt 3, Vue 3, Tailwind CSS
- Tipo: landing page
- Meta: máxima qualidade em acessibilidade e alta nota no Lighthouse

## Instruções

Ao criar ou revisar qualquer componente ou página:

1. Use elementos nativos corretos:
   - Botões devem ser `button`
   - Links devem ser `a` ou `NuxtLink`
   - Inputs devem ser `input`, `textarea`, `select` conforme o caso

2. Sempre garanta:
   - Navegação por teclado
   - Ordem lógica de foco
   - Foco visível
   - Leitura coerente por tecnologias assistivas

3. Inputs e formulários:
   - Todo campo deve ter label
   - Placeholder não substitui label
   - Mensagens de erro devem ser claras
   - Campos obrigatórios devem ser identificáveis

4. Imagens:
   - Toda imagem informativa deve possuir `alt` útil
   - Imagens decorativas devem usar `alt=""` quando apropriado
   - Não usar imagem para representar texto essencial

5. Ícones:
   - Ícones decorativos devem usar `aria-hidden="true"` quando aplicável
   - Ícones com função devem ter nome acessível

6. Contraste e legibilidade:
   - Garantir contraste suficiente entre texto e fundo
   - Evitar textos pequenos demais
   - Não depender apenas de cor para transmitir significado

7. Estrutura:
   - Preservar headings em ordem lógica
   - Usar landmarks semânticos corretamente
   - Evitar elementos clicáveis improvisados com `div` ou `span`

## Regras obrigatórias

- Nunca sacrificar acessibilidade por estética
- Nunca remover outline sem oferecer foco visível equivalente
- Nunca usar hover como única forma de acesso a conteúdo importante
- Nunca esconder contexto essencial de leitores de tela

## Checklist de validação

Antes de finalizar:

- Todos os elementos interativos são acessíveis por teclado
- O foco está visível
- Os formulários possuem labels
- As imagens possuem `alt` adequado
- A hierarquia de headings está correta
- Não há elementos clicáveis semanticamente incorretos
- O contraste visual está adequado
