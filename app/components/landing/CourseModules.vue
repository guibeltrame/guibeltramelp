<script setup lang="ts">
const { containerRef } = useScrollReveal();

const modules = [
  {
    number: "01",
    title: "BASE SÓLIDA DA CRIATIVIDADE",
    description:
      "Construir um sistema de visualização e padronizacão das escalas, arpejos e acordes para que você além de não se perder no braço da guitarra, consiga enxergar caminhos e possibilidades melódicas novas para você começar seu processo criativo de frases e solos. Você ainda vê essa visualização sendo aplicada em solos como 'Wasting Love (Iron Maiden)'.",
    objective: "Liberdade ao longo do braço para tocar em qualquer tom.",
    lessons: 10,
  },
  {
    number: "02",
    title: "CONSTRUÇÃO DE VOCABULÁRIO",
    description:
      "Aplicação prática de ideias para você construir suas próprias frases e extrair frases que já existem para aplicar elas em contexto de criação e improvisação. Tenha exemplos de fraseado de músicas como 'Belief (John Mayer), Tennesse Whiskey (Chris Stapleton), Seize The Day (Avenged Sevenfold).'.",
    objective: "Reconhecer os principais detalhes para criar boas frases.",
    lessons: 10,
  },
  {
    number: "03",
    title: "CRIANDO SOLOS DO ZERO",
    description:
      "Desenvolver a habilidade por trás da construção de solos, entendendo a ideia e estrutura desde os temas mais simples até mais complexos de uma maneira descomplicada. Aprenda também através da estrutura de solos icônicos como 'Stairway to Heaven (Led Zeppelin), Time (Pink Floyd)'.",
    objective: "Criar e entender estruturas para seu primeiro solo.",
    lessons: 10,
  },
  {
    number: "04",
    title: "SOLO SIGNATURE",
    description:
      "Aprimorar todas as ferramentas de criação para desenvolver elementos que impulsionam ainda mais sua interpretação, que deixam seus solos mais sofisticados e você comece a desenvolver suas características únicas. Você conta com a análise de solos na linguagem Blues e Rock.",
    objective:
      "Aperfeiçoar a habilidade de criação adicionando mais elementos mais profundos de análise e interpretação.",
    lessons: 14,
  },
  {
    number: "05",
    title: "Teoria Musical + Harmonia",
    description:
      "Teoria musical do zero ao avançado com uma apostila e módulo completo com exemplos práticos para quem nunca estudou nada sobre teoria musical.",
    lessons: 16,
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
            <article class="py-10 sm:py-12">
              <div
                class="inline-flex motion-safe:transition-transform motion-safe:duration-300 motion-reduce:transition-none sm:group-hover:-translate-y-px"
              >
                <span
                  class="inline-flex items-center rounded-full border border-amber/25 bg-dark-surface/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-amber shadow-sm ring-1 ring-white/5 sm:px-3.5 sm:py-2 sm:text-xs"
                >
                  {{ index + 1 == 5 ? "EXTRA" : `Etapa ${index + 1}` }}
                </span>
              </div>

              <h3
                class="mt-4 text-xl font-bold leading-snug tracking-tight text-text-on-dark sm:mt-5 sm:text-2xl md:text-[1.65rem]"
              >
                {{ mod.title }}
              </h3>

              <p
                class="mt-3 max-w-prose text-base leading-relaxed text-text-on-dark-muted sm:mt-4 sm:text-lg"
              >
                {{ mod.description }}
              </p>

              <p
                v-if="mod.objective"
                class="mt-4 flex max-w-prose items-start gap-2.5 rounded-lg border border-amber/20 bg-amber/5 px-3.5 py-3 text-base leading-relaxed sm:mt-5 sm:text-lg"
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
