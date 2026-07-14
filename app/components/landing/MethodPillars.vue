<script setup lang="ts">
const { containerRef } = useScrollReveal();

const pillars = [
  {
    number: "01",
    title: "Técnica é o mensageiro",
    description:
      "Tocar muitas ou poucas notas, pouco importa. A técnica é responsável por como você passa a mensagem e trabalhar elementos de interpretação como dinâmica, rítmica, respiro e expressividade vai dar vida às notas das escalas.",
    image: "/images/pillar-van-halen.jpg",
    imageAlt: "Eddie Van Halen tocando guitarra no palco",
  },
  {
    number: "02",
    title: "Repertório é a fonte da criatividade",
    description:
      "A falta de referências leva a bloqueios criativos. Nenhum assunto de escalas ou qualquer teoria vai fazer sentido se você não ver isso acontecendo de maneira prática para que você desenvolva seu vocabulário.",
    image: "/images/pillar-syn.jpg",
    imageAlt: "Synyster Gates tocando guitarra no palco",
  },
  {
    number: "03",
    title: "Consciência é a liberdade",
    description:
      "Conhecer escalas, acordes, arpejos e suas formações de forma teórica é essencial, mas é fundamental visualizar isso no braço de maneira prática para desenvolver independência.",
    image: "/images/pillar-srv.jpg",
    imageAlt: "Stevie Ray Vaughan tocando guitarra no palco",
  },
  {
    number: "04",
    title: "Música é comunicação e todo bom solo soa como uma história.",
    bullets: [
      "A técnica passa a emoção e mensagem",
      "Repertório são suas referências para desenvolver vocabulário",
      "Teoria musical te dá o controle total do que está fazendo e para onde vai",
    ],
  },
];

const mainPillars = pillars.slice(0, 3);
const fourthPillar = pillars[3]!;
</script>

<template>
  <section
    id="metodo"
    ref="containerRef"
    aria-labelledby="method-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <!-- Background accent -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_50%,rgba(245,158,11,0.05),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <h2
          id="method-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          O que a
          <span class="text-amber">TRÍADE CRIATIVA</span>
          trabalha na sua musicalidade?
        </h2>
        <p
          class="mt-4 text-base leading-relaxed text-text-on-dark-muted sm:text-lg"
        >
          Três princípios explicam:
        </p>
      </div>

      <!-- Pillars grid: 3×4 cols + linha inteira para o 4º -->
      <div
        class="stagger-children mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12 lg:mt-16"
      >
        <article
          v-for="pillar in mainPillars"
          :key="pillar.number"
          class="scroll-reveal group relative overflow-hidden rounded-2xl border border-dark-muted bg-dark-surface p-6 transition-all duration-300 hover:border-amber/20 md:col-span-4 md:p-8"
        >
          <!-- Background image -->
          <img
            :src="pillar.image"
            :alt="pillar.imageAlt"
            class="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-10 transition-opacity duration-300 group-hover:opacity-15"
            aria-hidden="true"
            loading="lazy"
          />
          <!-- Dark overlay to keep text legible -->
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/80 to-dark-surface/40"
            aria-hidden="true"
          />
          <div class="relative z-10">
            <h3 class="text-lg font-bold text-text-on-dark">
              {{ pillar.title }}
            </h3>
            <p
              class="mt-4 text-sm leading-relaxed text-text-on-dark-muted sm:text-base"
            >
              {{ pillar.description }}
            </p>
          </div>
        </article>

        <article
          class="scroll-reveal group relative overflow-hidden rounded-2xl border border-amber/20 bg-gradient-to-b from-amber/5 to-dark-surface p-7 shadow-[0_22px_55px_-14px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-[border-color,box-shadow,transform] duration-300 sm:p-8 motion-reduce:transition-none md:col-span-12 md:mx-auto md:max-w-4xl md:px-10 md:py-10 hover:border-amber/30 hover:shadow-[0_28px_65px_-12px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.05)] sm:hover:-translate-y-0.5 motion-reduce:sm:hover:translate-y-0"
        >
          <div
            class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(245,158,11,0.1),transparent_60%)]"
            aria-hidden="true"
          />
          <div class="relative z-10">
            <h3
              class="text-lg font-bold tracking-tight text-text-on-dark sm:text-balance md:text-xl"
            >
              {{ fourthPillar.title }}
            </h3>
            <ul
              class="mt-4 space-y-2"
              aria-label="Três princípios do método"
            >
              <li
                v-for="bullet in fourthPillar.bullets"
                :key="bullet"
                class="flex items-start gap-2 text-sm leading-relaxed text-text-on-dark-muted sm:text-base"
              >
                <Icon
                  name="lucide:check"
                  class="mt-0.5 size-4 shrink-0 text-amber"
                  aria-hidden="true"
                />
                {{ bullet }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
