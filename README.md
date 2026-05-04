# Guia da landing page

Este arquivo é o **manual de bordo** do seu site de vendas (landing page). A ideia é bem simples: você conseguir **trocar textos, cores, links e o vídeo do começo** sem precisar virar desenvolvedor da noite pro dia. Se algo aqui parecer meio “técnico demais”, respira: vamos passo a passo, meeeeo.

---

## 1. O que é este projeto?

- **O que é:** um **site de uma página só** (landing page) feito com ferramentas modernas de desenvolvimento web. Na prática, é o **arquivo do seu site** que o computador entende e transforma em página bonita no navegador.
- **Para que serve:** apresentar uma oferta (curso, produto, serviço), explicar benefícios, mostrar depoimentos, tirar dúvidas e levar a pessoa a **clicar no botão de compra ou contato**.
- **O que você pode mudar sozinho (na maioria dos casos):** textos, títulos, listas, preços de exemplo, links dos botões, **ID do vídeo do YouTube**, **tempo em segundos para exibir o CTA abaixo do vídeo**, cores “oficiais” do site (tons de fundo, âmbar/dourado, texto), e ajustes de tamanho de letra quando aparecem classes como `text-lg`, `text-2xl`, etc.
- **O que é melhor pedir para um desenvolvedor:** criar **nova seção** do zero, mudar **layout** (colunas, ordem visual pesada), mexer em **animações**, **formulários**, **pagamento**, **integração com e-mail** ou **analytics**, ou se algo **parar de funcionar** depois de uma edição.

---

## 2. Estrutura básica de pastas (o que é cada coisa)

Imagine o projeto como uma caixa de ferramentas. Os nomes abaixo são **reais** neste repositório:

| Pasta ou arquivo                         | Para que serve, em linguagem simples                                                                                                                                                                                  |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`app/pages/index.vue`**                | É a **página principal**: aqui entram o **vídeo inicial** (só o código que chama o vídeo), a **ordem das seções** e textos de **SEO** (título que aparece na aba do navegador, descrição para Google, link canônico). |
| **`app/components/landing/`**            | São os **blocos da landing**, um arquivo por seção (hero, depoimentos, FAQ, etc.). **A maior parte dos textos está aqui.**                                                                                            |
| **`app/components/ui/`**                 | Peças reutilizáveis, como o **botão padrão** (`CtaButton.vue`) e o **FAQ sanfona** (`AccordionItem.vue`).                                                                                                             |
| **`app/assets/css/main.css`**            | Onde ficam as **cores “oficiais”** do projeto, a **fonte Inter** e alguns ajustes globais (rolagem suave, animação de aparecer ao rolar a página).                                                                    |
| **`app/composables/useScrollReveal.ts`** | Código que ajuda as seções a **aparecerem com animação** ao rolar. Normalmente **não precisa mexer** para edição de conteúdo.                                                                                         |
| **`app/app.vue`**                        | “Casco” mínimo do app. **Quase sempre não precisa editar.**                                                                                                                                                           |
| **`nuxt.config.ts`**                     | Configurações do **site** (idioma da página, carregamento da fonte, etc.). Mexer aqui é coisa mais rara.                                                                                                              |
| **`package.json`**                       | Lista o **nome do projeto** e os **comandos** (`npm run dev`, etc.).                                                                                                                                                  |
| **`public/`**                            | Arquivos que o navegador acessa **direto pelo endereço**. Inclui `public/_robots.txt`, as **fontes** em **`public/fonts/`** e os **prints de depoimentos** em **`public/images/`** (`dep_01.jpeg` a `dep_08.jpeg`).   |

### Arquivos de seção em `app/components/landing/` (nome real → conteúdo)

Use esta tabela para **achar rápido** onde editar cada bloco:

| Arquivo                     | Conteúdo típico                                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `VideoIntro.vue`            | Textos do vídeo inicial e o **tempo em segundos** para exibir o CTA abaixo do player. |
| `HeroSection.vue`           | **Título principal**, subtítulo, botões do topo.                                                               |
| `SocialProofBar.vue`        | Números da faixa (alunos, nota, etc.).                                                                         |
| `PainIdentification.vue`    | Dor/problema do público.                                                                                       |
| `ProblemReframe.vue`        | Reenquadramento do problema.                                                                                   |
| `AuthoritySection.vue`      | Autoridade do professor (e **placeholder** de foto).                                                           |
| `MethodPillars.vue`         | Pilares do método.                                                                                             |
| `TransformationSection.vue` | Transformação prometida.                                                                                       |
| `CourseModules.vue`         | **Módulos** do curso (lista no script).                                                                        |
| `PlatformBenefits.vue`      | **Benefícios** da plataforma (lista no script).                                                                |
| `TestimonialsSection.vue`   | **Depoimentos visuais** — galeria de prints reais de WhatsApp com lightbox para ampliar.                       |
| `BonusSection.vue`          | **Bônus** (lista no script).                                                                                   |
| `OfferSection.vue`          | **Oferta**, preço, lista do que inclui, botão principal da compra.                                             |
| `GuaranteeSection.vue`      | Garantia.                                                                                                      |
| `FAQSection.vue`            | **Perguntas e respostas** (lista no script).                                                                   |
| `FinalCTASection.vue`       | Chamada final e botão.                                                                                         |
| `FooterSection.vue`         | Rodapé, links, e-mail de contato.                                                                              |

---

## 3. Como rodar o projeto no seu computador

### O que precisa ter instalado

1. **Node.js** (um programa que roda o site no modo desenvolvimento).
   - Use uma **versão recente** (por exemplo **18 ou superior**). Se não tiver certeza, baixe no site oficial do Node.js.

2. Um **editor de texto** para abrir os arquivos (Visual Studio Code, Cursor, Notepad++, etc.).

### Passo a passo

1. **Abra a pasta do projeto** no seu editor (a pasta onde está o `package.json`).

2. **Instale as dependências** (baixa as “peças” que o projeto precisa). No terminal, na pasta do projeto:

   ```bash
   npm install
   ```

   **Em português:** “npm, instala tudo que a lista do projeto pede”.

3. **Suba o site localmente** (modo de teste no seu PC):

   ```bash
   npm run dev
   ```

   **Em português:** “npm, roda o modo desenvolvedor do Nuxt”.

4. O terminal vai mostrar um endereço, em geral **`http://localhost:3000`**. Abra esse endereço no **Chrome**, **Edge** ou **Firefox**.

5. Para **parar** o servidor, volte no terminal e pressione **Ctrl+C**.

> **Dica:** no README antigo do projeto aparecia um erro de digitação (`locahost`). O endereço certo é **`localhost`** (com **al**).

---

## 4. Como alterar textos

### Onde estão os textos?

- **Página inteira e SEO (título da aba, descrição, etc.):** `app/pages/index.vue` — no trecho `<script setup>` com `useSeoMeta` e `useHead`.
- **Seções da página:** em geral no arquivo `.vue` correspondente em `app/components/landing/`, misturando:
  - **Texto direto no HTML** (entre tags como `<h1>`, `<p>`, `<span>`).
  - **Listas no topo do arquivo** (arrays como `testimonials`, `faqs`, `modules`, `bonuses`, `benefits`), quando existirem.

### Como editar sem quebrar

- **Não apague** símbolos como `<`, `>`, `{{`, `}}`, aspas `"` e vírgulas entre itens de lista.
- Se estiver editando uma **lista** (depoimentos, FAQ, módulos), altere só o texto **entre aspas**, mantendo a **vírgula** entre um item e outro.
- **Salve o arquivo** e olhe o navegador (com `npm run dev` rodando, a página costuma atualizar sozinha).

### O que acontece se eu mudar um título?

- Só o **texto na tela** muda. Se mudar o `<h1>` do herói, você muda o **título mais visível** da página (bom para testar mensagens).

---

## 5. Como alterar cores

Neste projeto as cores “de marca” estão centralizadas em **`app/assets/css/main.css`**, dentro do bloco `@theme { ... }`.

Lá você encontra variáveis como:

- `--color-dark` — fundo escuro principal
- `--color-amber` — cor de destaque (tipo dourado/laranja)
- `--color-text-on-dark` — texto claro em fundo escuro
- … e outras.

No restante dos arquivos, as cores aparecem com nomes curtos do **Tailwind** (uma forma de aplicar estilo sem inventar nome de arquivo novo). Exemplos que você pode ver nos componentes:

- `bg-dark` → fundo usando a cor `dark`
- `text-amber` → texto na cor de destaque
- `hover:bg-amber-light` → cor ao passar o mouse no botão

**Em linguagem bem simples:** o Tailwind é como uma **caixa de etiquetas prontas** (`bg-dark`, `text-amber`). Quando você muda o valor em `main.css`, **muitas partes do site** que usam aquela etiqueta mudam juntas.

### O que acontece se eu mudar `--color-amber`?

- Tudo que usa **âmbar** como destaque tende a **acompanhar** (botões, destaques, ícones que usam essa família de cor).

---

## 6. Como alterar fontes e tamanhos de texto

### Fonte (tipo de letra)

- A família principal está definida em **`app/assets/css/main.css`**: `--font-sans: "Inter", ...`
- Os arquivos de fonte são carregados de **`/fonts/...`** — ou seja, em termos de pasta no projeto: **`public/fonts/`** (crie essa pasta se ainda não existir e coloque os arquivos `.woff2`).
- O arquivo **`nuxt.config.ts`** também menciona `preload` de `inter-latin-400.woff2` e `inter-latin-700.woff2` para carregar mais rápido.

> **Honestidade:** neste repositório, a pasta `public/fonts/` pode ainda não estar versionada; se a fonte não carregar, confira se os arquivos existem em `public/fonts/` com os mesmos nomes usados no `main.css`.

### Tamanho do texto

Nos componentes, os tamanhos aparecem como classes Tailwind, por exemplo:

- `text-sm` — menor
- `text-base` — normal
- `text-lg`, `text-xl`, `text-2xl`… — maiores

**Cuidado no celular:** muitos títulos já têm tamanhos diferentes para telas pequenas e grandes (`sm:`, `md:`, `lg:`). Se aumentar demais só no maior, teste no **celular** também.

---

## 7. Como alterar imagens

### Onde ficariam as imagens

- O lugar usual é **`public/`**. Por exemplo, uma foto `public/fotos/professor.webp` vira o endereço **`/fotos/professor.webp`** no site.

### Situação deste projeto

- A seção de **depoimentos** (`TestimonialsSection.vue`) já usa **imagens reais**: são prints de conversas de WhatsApp salvos em **`public/images/dep_01.jpeg`** até **`dep_08.jpeg`**. Se quiser **trocar ou adicionar** um print, coloque o novo arquivo `.jpeg` na pasta `public/images/` e edite a lista `testimonials` no topo do arquivo `TestimonialsSection.vue` (caminho e texto alternativo).
- **Seção de autoridade:** a `AuthoritySection.vue` usa um **retângulo placeholder** (“Foto do professor”) com ícone, não um arquivo de foto ainda.
- Para **colocar uma foto de verdade** na autoridade, em geral alguém com noção de HTML coloca uma tag `<img src="/caminho/..." alt="Descrição">` no lugar do placeholder — isso pode ser uma boa hora de chamar um desenvolvedor se você não se sentir seguro.

### Cuidados com peso e velocidade

- Prefira **WebP** ou imagens **comprimidas**.
- Evite arquivo gigante de câmera direto no site.
- **O que acontece se a imagem for enorme?** O site pode ficar **lento**, principalmente no 4G.

---

## 8. Como trocar o vídeo inicial do YouTube

1. Abra **`app/pages/index.vue`**.
2. Procure a linha parecida com:

   ```vue
   <LandingVideoIntro video-id="JjVtwGpAaIA" />
   ```

3. Troque **`JphhnzD1l5g`** pelo **ID do vídeo** que você quer.

**Como achar o ID?** No YouTube, abra o vídeo e olhe a URL:

- `https://www.youtube.com/watch?v=JphhnzD1l5g` → o ID é **`JphhnzD1l5g`**.

### Como validar

- Rode `npm run dev`, abra o site: o vídeo novo deve aparecer no **primeiro bloco em tela cheia**.

---

## 9. Como alterar o tempo para exibir o CTA do vídeo

No comportamento atual, a landing fica **sempre visível e rolável**.  
O `UNLOCK_TIME_SECONDS` controla **somente** quando o bloco de CTA abaixo do vídeo aparece.

1. Abra **`app/components/landing/VideoIntro.vue`**.
2. No topo do `<script setup>`, localize algo como:

   ```ts
  const UNLOCK_TIME_SECONDS = 1179;
   ```

3. Esse número está em **segundos**.

**Exemplos:**

| Valor | Significado                         |
| ----- | ----------------------------------- |
| `10`  | 10 segundos                         |
| `60`  | 1 minuto                            |
| `180` | 3 minutos                           |
| `232` | 3 minutos e 52 segundos (3×60 + 52) |

Há um comentário no código dizendo que, em produção, costuma-se usar algo próximo da **duração total do vídeo**.

**O que acontece se eu colocar um número muito alto?** O CTA vai demorar mais para aparecer.  
Se colocar **muito baixo**, o CTA aparece quase na hora.

> **Importante (regra atual):** não existe bloqueio de página e não existe persistência dessa progressão em `localStorage`.

---

## 10. Como alterar botões e links

### Botão reutilizável (`UiCtaButton`)

Muitos botões usam o componente **`UiCtaButton`** em arquivos como `HeroSection.vue`, `OfferSection.vue`, `FinalCTASection.vue`.

Exemplo de uso:

```vue
<UiCtaButton
  label="Quero Começar Agora"
  href="#oferta"
  variant="primary"
  size="lg"
/>
```

- **`label`** → texto do botão.
- **`href`** → para onde o clique vai. Pode ser:
  - **âncora** na mesma página, como `#oferta` (a seção de oferta tem `id="oferta"` em `OfferSection.vue`);
  - **link completo**, como `https://pagamento.exemplo.com`.

**Link padrão:** se você não passar `href`, o componente usa **`#oferta`** (definido em `app/components/ui/CtaButton.vue`).

### Botão principal no bloco do vídeo

- Está em `VideoIntro.vue` e hoje aponta para o checkout da Hotmart.
- Ele só aparece quando o `UNLOCK_TIME_SECONDS` for atingido (ou no fim/erro do player).

### Como validar

- Clique no botão com `npm run dev` rodando e veja se abre a **seção certa** ou o **site certo**.

---

## 11. Depoimentos, benefícios, módulos, bônus e FAQ

### Depoimentos (prints de WhatsApp)

A seção de depoimentos (`TestimonialsSection.vue`) funciona de um jeito diferente das demais: em vez de textos, ela exibe **prints reais de conversas de WhatsApp** como imagens.

As imagens ficam em **`public/images/`** e seguem o padrão `dep_01.jpeg`, `dep_02.jpeg`, etc.

**Como trocar ou adicionar um print:**

1. Coloque o novo arquivo `.jpeg` em **`public/images/`** (ex.: `dep_09.jpeg`).
2. Abra **`app/components/landing/TestimonialsSection.vue`**.
3. No topo do arquivo, dentro da lista `testimonials`, **copie** um bloco já existente e cole logo abaixo.
4. Troque o **`src`** pelo caminho do novo arquivo (ex.: `"/images/dep_09.jpeg"`).
5. Troque o **`alt`** por uma descrição breve do print (ex.: `"Feedback real de aluno via WhatsApp — elogio ao módulo de improviso"`).

**Como remover um print:** apague o bloco inteiro (do `{` até a `},` correspondente) e não esqueça de manter as vírgulas entre os demais blocos.

**Funcionalidades da seção:**

- **Grid responsivo:** 2 colunas no celular, 3 no tablet, 4 no desktop.
- **Lightbox:** ao clicar em qualquer print, ele abre ampliado em tela cheia. Dá pra navegar entre prints pelas setas, pelo teclado (← → e Esc) ou arrastando o dedo no celular.
- **Lazy loading:** as imagens só carregam quando o visitante chega perto delas na página.

### Benefícios, módulos, bônus e FAQ

Estes seguem a mesma lógica: **lista no `<script setup>`** + repetição no HTML.

| Conteúdo                 | Arquivo                | Nome da lista no código |
| ------------------------ | ---------------------- | ----------------------- |
| Benefícios da plataforma | `PlatformBenefits.vue` | `benefits`              |
| Módulos do curso         | `CourseModules.vue`    | `modules`               |
| Bônus                    | `BonusSection.vue`     | `bonuses`               |
| FAQ                      | `FAQSection.vue`       | `faqs`                  |

**Como editar com segurança:**

1. Abra o arquivo certo.
2. Mude **texto dentro de aspas** (`title`, `question`, `answer`, etc.).
3. **Não remova vírgulas** entre objetos da lista.
4. Se **adicionar** um item (pergunta, módulo, bônus), **copie** um bloco inteiro já existente e cole logo abaixo, depois só troque os textos (assim você mantém a “forma” certa).

---

## 12. Cuidados importantes ao editar

- **Salve** o arquivo antes de olhar no navegador.
- Veja no **computador** e no **celular**.
- **Não apague** chaves `{}`, colchetes `[]`, vírgulas e tags HTML sem querer.
- **Mudança de cada vez:** se algo quebrar, fica mais fácil saber o que foi.
- Se o terminal mostrar **erro vermelho**, anote a mensagem — ajuda quem for te ajudar.

---

## 13. Quando chamar um desenvolvedor

Considere ajuda profissional se você quiser:

- **Nova seção** ou mudar o **desenho** (layout) inteiro.
- **Formulários**, **área de membros**, **checkout**, **pixel** de anúncio, **tag do Google**.
- **Trocar animações** ou mexer no comportamento do player sem testar responsividade e acessibilidade.
- Incluir **foto real** no lugar do placeholder da autoridade sem risco de quebrar o layout.
- **Corrigir erro** que impede o site de subir ou aparecer em branco.

---

## 14. Perguntas frequentes (FAQ deste guia)

**Onde troco o texto principal da página?**  
→ Em **`app/components/landing/HeroSection.vue`** (título e subtítulo principais). O título da **aba do navegador** está em **`app/pages/index.vue`** (`useSeoMeta`).

**Como mudo a cor do botão?**  
→ Muitos botões usam **`UiCtaButton`**, que já vem com estilo âmbar. Para mudar a **marca** inteira, ajuste as cores em **`app/assets/css/main.css`** (`@theme`). Para um caso isolado, às vezes é preciso mexer nas classes do próprio componente — aí um dev ajuda rápido.

**Como coloco outro vídeo?**  
→ Troque o **`video-id`** em **`app/pages/index.vue`** (veja seção 8).

**Como aumento o tempo para aparecer o CTA abaixo do vídeo?**  
→ Aumente **`UNLOCK_TIME_SECONDS`** em **`app/components/landing/VideoIntro.vue`** (veja seção 9).

**O que fazer se algo quebrar?**  
→ Use **Ctrl+Z** no editor para desfazer, ou **git** para voltar versão (se você usa). Se não souber, **chame quem mantém o código** com a mensagem de erro copiada.

**Onde fica o preço e o botão de compra?**  
→ **`app/components/landing/OfferSection.vue`**. O botão principal já aponta para um checkout Hotmart; altere o `href` se quiser trocar o destino.

**Onde mudo e-mail e links do rodapé?**  
→ **`app/components/landing/FooterSection.vue`** (ex.: `mailto:contato@exemplo.com.br`).

---

## Resumo rápido dos arquivos mais usados

| Quero mudar…                                     | Olhe primeiro este arquivo                 |
| ------------------------------------------------ | ------------------------------------------ |
| Título/descrição do Google e ID do vídeo         | `app/pages/index.vue`                      |
| Tempo para exibir CTA abaixo do vídeo            | `app/components/landing/VideoIntro.vue`    |
| Cores principais da marca                        | `app/assets/css/main.css`                  |
| Textos do herói e botões do topo                 | `app/components/landing/HeroSection.vue`   |
| Prints de depoimentos (WhatsApp)                 | `app/components/landing/TestimonialsSection.vue` + `public/images/dep_*.jpeg` |
| FAQ / módulos / bônus / benefícios               | Arquivos listados na tabela da seção 11    |
| Oferta e preço                                   | `app/components/landing/OfferSection.vue`  |
| Rodapé                                           | `app/components/landing/FooterSection.vue` |

---

Boa sorte com as alterações, menzinho. Com calma e salvando sempre, você faz um bocado de coisa sem stress — e quando pintar algo mais “arriscado”, chama reforço sem modéstia, meeeeo.
