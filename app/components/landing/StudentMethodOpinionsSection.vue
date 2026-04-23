<script setup lang="ts">
const { containerRef } = useScrollReveal();

/** Troque `src` e `alt` por imagens reais de depoimentos quando tiver. */
const studentOpinionImages = [
  {
    id: "opinion-1",
    src: "/images/depi1.jpeg",
    alt: "Depoimento visual de aluno 1 sobre o método (imagem placeholder)",
  },
  {
    id: "opinion-2",
    src: "/images/depi2.png",
    alt: "Depoimento visual de aluno 2 sobre o método (imagem placeholder)",
  },
  {
    id: "opinion-3",
    src: "/images/depi3.jpeg",
    alt: "Depoimento visual de aluno 3 sobre o método (imagem placeholder)",
  },
] as const;
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="student-method-opinions-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-28"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_-10%,rgba(245,158,11,0.08),transparent)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_90%_100%,rgba(245,158,11,0.05),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header class="scroll-reveal mx-auto max-w-4xl text-center">
        <h2
          id="student-method-opinions-heading"
          class="text-balance text-2xl font-extrabold uppercase leading-[1.15] tracking-tight text-text-on-dark sm:text-3xl md:text-4xl lg:text-[2.35rem] lg:leading-tight"
        >
          VEJA A OPINIÃO DE ALUNOS QUE PASSARAM PELO MÉTODO
        </h2>
      </header>

      <ul
        class="stagger-children mt-10 grid list-none gap-6 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:mt-14 lg:grid-cols-3 lg:gap-8"
      >
        <li
          v-for="item in studentOpinionImages"
          :key="item.id"
          class="scroll-reveal mx-auto w-full max-w-md sm:max-w-none"
        >
          <figure
            class="group relative overflow-hidden rounded-2xl border border-dark-muted bg-dark-surface shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/5 transition-[border-color,box-shadow,transform] duration-300 ease-out will-change-transform hover:border-amber/20 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] hover:ring-amber/15 motion-reduce:transition-none sm:hover:-translate-y-0.5 motion-reduce:sm:hover:translate-y-0"
          >
            <div
              class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-dark/40 via-transparent to-transparent opacity-70"
              aria-hidden="true"
            />
            <div class="relative aspect-[4/5] w-full overflow-hidden bg-dark-muted sm:aspect-[3/4]">
              <img
                :src="item.src"
                :alt="item.alt"
                width="600"
                height="800"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
          </figure>
        </li>
      </ul>
    </div>
  </section>
</template>
