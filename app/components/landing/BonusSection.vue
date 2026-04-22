<script setup lang="ts">
const { containerRef } = useScrollReveal();

const bonuses = [
  {
    image: "/images/prof.jpeg",
    title: "BÔNUS 1 | 10 Melodias Para Começar Seus Solos",
    description:
      "Um pack com 10 exemplos de caminhos melódicos diferentes para você praticar no improviso.",
    value: "R$ 97",
    imageAlt:
      "Capa do material bônus: 10 melodias para começar seus solos na guitarra",
  },
  {
    image: "/images/prof.jpeg",
    title: "BÔNUS 2 | Laboratório de Frases ROCK/BLUES",
    description:
      "Um guia com 10 frases de lendas da guitarra como David Gilmour, Slash, etc., explicadas e aplicadas no improviso para incrementar seu vocabulário.",
    value: "R$ 97",
    imageAlt:
      "Capa do material bônus: laboratório de frases rock e blues para guitarra",
  },
  {
    image: "/images/prof.jpeg",
    title: "BÔNUS 3 | Rotina Criativa",
    description:
      "Exemplo rápidos e práticos de como inserir treinos de criatividade na sua rotina de estudo, mesmo com pouco tempo.",
    value: "R$ 97",
    imageAlt:
      "Capa do material bônus: rotina criativa para estudo de guitarra",
  },
];
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="bonus-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_0%,rgba(245,158,11,0.07),transparent)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_80%_100%,rgba(245,158,11,0.04),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-amber">
          Bônus exclusivos
        </p>
        <h2
          id="bonus-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          Além de todo o curso, para contribuir mais na
          <span class="text-amber">sua evolução</span> você recebe
        </h2>
      </div>

      <!-- Bonus cards -->
      <div
        class="stagger-children mt-12 grid gap-8 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-3 lg:gap-8"
      >
        <article
          v-for="bonus in bonuses"
          :key="bonus.title"
          class="scroll-reveal group flex h-full flex-col overflow-hidden rounded-2xl border border-dark-muted bg-dark-surface shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow,transform] duration-300 hover:border-amber/25 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] motion-reduce:transition-none sm:hover:-translate-y-0.5 motion-reduce:sm:hover:translate-y-0"
        >
          <div class="relative shrink-0">
            <span
              class="absolute right-4 top-4 z-10 rounded-full bg-amber px-3 py-1 text-xs font-bold text-dark shadow-sm"
            >
              GRÁTIS
            </span>

            <div
              class="relative aspect-[3/4] w-full overflow-hidden bg-dark-muted"
            >
              <img
                :src="bonus.image"
                :alt="bonus.imageAlt"
                width="600"
                height="800"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent opacity-90"
                aria-hidden="true"
              />
            </div>
          </div>

          <div class="flex flex-1 flex-col p-6 sm:p-7">
            <h3
              class="text-lg font-bold leading-snug tracking-tight text-text-on-dark"
            >
              {{ bonus.title }}
            </h3>

            <p
              class="mt-3 flex-1 text-sm leading-relaxed text-text-on-dark-muted"
            >
              {{ bonus.description }}
            </p>

            <p class="mt-6 border-t border-dark-muted pt-5 text-sm text-text-on-dark-muted">
              Valor:
              <span class="text-text-on-dark line-through">{{
                bonus.value
              }}</span>
              <span class="ml-2 font-bold text-amber">R$ 0</span>
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
