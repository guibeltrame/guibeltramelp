<script setup lang="ts">
const { containerRef } = useScrollReveal();

const modules = [
  {
    number: "01",
    label: "NÍVEL I",
    summary: "Domine o braço da guitarra num sistema visual claro para você enxergar acordes e escalas sem se perder e ideias iniciais para seus improvisos.",
    bullets: [
      "Teoria básica",
      "Notas no braço da guitarra",
      "Sistema CAGED",
      "Intervalos",
      "Formação de acordes",
      "Fundamentos da Técnica",
    ],
    lessons: 10,
  },
  {
    number: "02",
    label: "NÍVEL II",
    summary: "Novos elementos",
    bullets: [
      "Escala Pentatonica Maior e Menor",
      "Escala Maior e Menor",
      "Ciclo de Quartas e Quintas",
      "Campo Harmônico Maior/Menor",
      "Improviso e Criatividade I",
    ],
    lessons: 10,
  },
  {
    number: "03",
    label: "NÍVEL III",
    summary: "Aprenda a estruturar um solo do zero de forma prática e descomplicada.",
    bullets: [
      "Arpejos",
      "Temas e estrutura de solo",
      "Conexão de frases",
      "Notas de repouso",
      "Motivos melódicos",
      "Motivos Ritmicos",
      "Dinâmica e Interpretação",
    ],
    lessons: 10,
  },
  {
    number: "04",
    label: "NÍVEL IV",
    summary: "Adicione profundidade e personalidade aos seus solos com elementos avançados de interpretação e harmonia que fazem a diferença entre tocar e se expressar.",
    bullets: [
      "Harmonia avançada",
      "Menor harmônica",
      "Modos Gregos",
    ],
    lessons: 14,
  },
];
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="modules-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(245,158,11,0.05),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-amber">
          Sua jornada passo a passo
        </p>
        <h2
          id="modules-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          Aprender a criar e conquistar sua
          <span class="text-amber">liberdade criativa</span>
        </h2>
        <p
          class="mt-4 text-base leading-relaxed text-text-on-dark-muted sm:text-lg"
        >
          Todos os conceitos e ferramentas essenciais ao longo desse processo
          para desenvolver sua musicalidade que tornaram sua forma de tocar
          única.
        </p>
      </div>

      <!-- Módulos em lista aberta -->
      <div class="mx-auto mt-12 max-w-3xl lg:mt-16">
        <ol
          class="stagger-children list-none space-y-0"
          aria-label="Etapas do curso"
        >
          <li
            v-for="(mod, index) in modules"
            :key="mod.number"
            class="scroll-reveal group border-b border-dark-muted/90 motion-safe:transition-colors motion-safe:duration-300 last:border-b-0 motion-reduce:transition-none hover:border-amber/25"
          >
            <article class="py-12 sm:py-14">
              <!-- Badge maior -->
              <div
                class="inline-flex motion-safe:transition-transform motion-safe:duration-300 motion-reduce:transition-none sm:group-hover:-translate-y-px"
              >
                <span
                  class="inline-flex items-center rounded-full border border-amber/30 bg-dark-surface/90 px-5 py-2 text-sm font-bold uppercase tracking-[0.22em] text-amber shadow-sm ring-1 ring-white/5 sm:px-6 sm:py-2.5 sm:text-base"
                >
                  {{ mod.label }}
                </span>
              </div>

              <!-- Descrição curta -->
              <p
                class="mt-5 max-w-prose text-base leading-relaxed text-text-on-dark-muted sm:mt-6 sm:text-lg"
              >
                {{ mod.summary }}
              </p>

              <!-- Bullets de conteúdo -->
              <ul class="mt-5 space-y-2 sm:mt-6" aria-label="Conteúdos do módulo">
                <li
                  v-for="bullet in mod.bullets"
                  :key="bullet"
                  class="flex items-center gap-2.5 text-sm text-text-on-dark-muted sm:text-base"
                >
                  <Icon
                    name="lucide:check"
                    class="size-4 shrink-0 text-amber"
                    aria-hidden="true"
                  />
                  {{ bullet }}
                </li>
              </ul>

              <!-- Objetivo -->
              <p
                v-if="mod.objective"
                class="mt-6 flex max-w-prose items-start gap-2.5 rounded-lg border border-amber/20 bg-amber/5 px-3.5 py-3 text-base leading-relaxed sm:mt-7 sm:text-lg"
              >
                <Icon
                  name="lucide:target"
                  class="mt-1 size-4 shrink-0 text-amber/70"
                  aria-hidden="true"
                />
                <span>
                  <span
                    class="font-semibold uppercase tracking-wide text-amber"
                  >
                    Objetivo
                  </span>
                  <br />
                  <span class="text-text-on-dark-muted">
                    {{ mod.objective }}
                  </span>
                </span>
              </p>
            </article>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
