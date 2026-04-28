<script setup lang="ts">
const { t } = useI18n();
const { containerRef } = useScrollReveal();

const pains = computed(() =>
  ([1, 2, 3, 4, 5, 6] as const).map((n) => ({
    image: `/images/dor0${n}.jpg`,
    title: t(`pain.items.${n}.title`),
    description: t(`pain.items.${n}.description`),
    imageAlt: t(`pain.items.${n}.imageAlt`),
  })),
);
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="pain-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_50%_0%,rgba(245,158,11,0.07),transparent)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_100%,rgba(245,158,11,0.04),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <h2
          id="pain-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          {{ $t("pain.heading.prefix") }}
          <span class="text-amber">{{ $t("pain.heading.highlight") }}</span>
        </h2>
        <p
          class="mt-4 text-base leading-relaxed text-text-on-dark-muted sm:text-lg"
        >
          {{ $t("pain.subheading") }}
        </p>
      </div>

      <div
        class="stagger-children mt-12 grid gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-3 lg:gap-8"
      >
        <article
          v-for="pain in pains"
          :key="pain.title"
          class="scroll-reveal group flex flex-col overflow-hidden rounded-2xl border border-dark-muted bg-dark-surface shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow,transform] duration-300 hover:border-amber/25 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] motion-reduce:transition-none sm:hover:-translate-y-0.5 motion-reduce:sm:hover:translate-y-0"
        >
          <div
            class="relative aspect-[3/2] overflow-hidden bg-dark-muted lg:aspect-[8/5]"
          >
            <img
              :src="pain.image"
              :alt="pain.imageAlt"
              class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-surface/80 via-transparent to-transparent opacity-90"
              aria-hidden="true"
            />
          </div>

          <div
            class="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pt-6"
          >
            <h3
              class="text-lg font-bold leading-snug tracking-tight text-text-on-dark sm:text-xl"
            >
              {{ pain.title }}
            </h3>
            <p
              class="mt-3 text-sm leading-relaxed text-text-on-dark-muted sm:text-[0.9375rem] sm:leading-relaxed"
            >
              {{ pain.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
