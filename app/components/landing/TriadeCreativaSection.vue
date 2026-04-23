<script setup lang="ts">
/**
 * Vídeos YouTube da seção — altere só aqui.
 * IDs: trecho após youtu.be/ ou youtube.com/watch?v=
 *
 * Links atuais (referência):
 * - https://youtu.be/oAkWkao9cy8
 * - https://youtu.be/hYuCfJtwvRk
 */
const TRIADE_DEMO_YOUTUBE = [
  {
    videoId: "oAkWkao9cy8",
    iframeTitle:
      "Demonstração de solo em vídeo — exemplo de improviso (YouTube)",
  },
  {
    videoId: "hYuCfJtwvRk",
    iframeTitle: "Demonstração de solo em vídeo — segundo exemplo (YouTube)",
  },
] as const;

const demoVideos = TRIADE_DEMO_YOUTUBE.map((v) => ({
  id: v.videoId,
  iframeTitle: v.iframeTitle,
}));

const pillars = [
  {
    key: "visualizacao",
    title: "Visualização",
    description:
      "Construir um mapa de visualização do braço para ter liberdade e fluência sem limitações. Padronizar visualização de escalas, acordes, arpejos.",
    icon: "lucide:eye",
  },
  {
    key: "criacao",
    title: "Criação",
    description:
      "Construir linguagem e entender estruturas de solos de maneira consciente e criativa, sem só depender de frases prontas. Sair somente do clichês e padrões óbvios.",
    icon: "lucide:sparkles",
  },
  {
    key: "analise",
    title: "Análise",
    description:
      "Desenvolver um olhar autocrítico para conseguir explorar uma mesma ideia de diversas maneiras, melhorar e repetir esse processo.",
    icon: "lucide:scan-search",
  },
] as const;

const { containerRef } = useScrollReveal();
</script>

<template>
  <section
    id="triade-creativa"
    ref="containerRef"
    aria-labelledby="triade-heading"
    class="relative overflow-hidden border-t border-dark-muted/60 bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(245,158,11,0.09),transparent)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_0%_100%,rgba(245,158,11,0.05),transparent)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(245,158,11,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.15)_1px,transparent_1px)] [background-size:48px_48px]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header class="scroll-reveal mx-auto max-w-4xl text-center">
        <h2
          id="triade-heading"
          class="text-balance text-xl font-extrabold uppercase leading-tight tracking-[0.02em] text-text-on-dark sm:text-2xl md:text-3xl lg:text-4xl lg:leading-tight"
        >
          A aprendizagem do Ciência das 6 Cordas é baseada no
          <span class="text-amber">SISTEMA DE VISUALIZAÇÃO CRIATIVO</span>
        </h2>
      </header>

      <div
        class="stagger-children mt-12 grid gap-6 sm:mt-14 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-8"
      >
        <article
          v-for="pillar in pillars"
          :key="pillar.key"
          class="scroll-reveal group flex h-full flex-col overflow-hidden rounded-2xl border border-dark-muted bg-dark-surface p-6 text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow,transform] duration-300 hover:border-amber/25 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] motion-reduce:transition-none sm:hover:-translate-y-0.5 motion-reduce:sm:hover:translate-y-0 md:p-8"
        >
          <div
            class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber/10 transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            aria-hidden="true"
          >
            <Icon :name="pillar.icon" class="size-6 text-amber" />
          </div>
          <h3
            class="mt-5 text-lg font-bold uppercase tracking-[0.12em] text-text-on-dark sm:text-xl"
          >
            {{ pillar.title }}
          </h3>
          <p
            class="mt-4 flex-1 text-sm leading-relaxed text-text-on-dark-muted sm:text-[0.9375rem] sm:leading-relaxed"
          >
            {{ pillar.description }}
          </p>
        </article>
      </div>

      <div
        class="scroll-reveal mx-auto mt-12 max-w-2xl text-center sm:mt-14 lg:mt-16"
      >
        <p
          class="text-base font-bold uppercase tracking-wide text-text-on-dark sm:text-lg md:text-xl"
        >
          Para criar solos do zero como esses:
        </p>
      </div>

      <div
        class="stagger-children mt-10 grid gap-8 sm:mt-12 md:grid-cols-2 md:gap-8 lg:mt-14 lg:gap-10"
      >
        <figure
          v-for="video in demoVideos"
          :key="video.id"
          class="scroll-reveal group"
        >
          <div
            class="relative overflow-hidden rounded-2xl border border-dark-muted bg-dark-muted/40 p-1 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.75)] ring-1 ring-amber/10 transition-[border-color,box-shadow] duration-300 group-hover:border-amber/25 group-hover:shadow-[0_32px_90px_-28px_rgba(0,0,0,0.85)]"
          >
            <div
              class="relative aspect-video w-full overflow-hidden rounded-[0.875rem] bg-black"
            >
              <iframe
                :src="`https://www.youtube.com/embed/${video.id}`"
                class="absolute inset-0 h-full w-full"
                :title="video.iframeTitle"
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share;
                "
                allowfullscreen
              />
            </div>
          </div>
        </figure>
      </div>

      <footer
        class="scroll-reveal mx-auto mt-12 max-w-4xl text-center sm:mt-14 lg:mt-16"
      >
        <p
          class="text-balance text-sm font-bold uppercase leading-relaxed tracking-[0.06em] text-text-on-dark sm:text-base md:text-lg"
        >
          Uma sequência lógica de aprendizagem muito mais rápida e efetiva para
          construir solos tão bons e autênticos como dos seus ídolos.
        </p>
      </footer>
    </div>
  </section>
</template>
