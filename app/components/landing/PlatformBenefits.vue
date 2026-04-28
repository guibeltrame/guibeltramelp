<script setup lang="ts">
const { t } = useI18n();
const { containerRef } = useScrollReveal();

const ICONS = [
  "lucide:gauge",
  "lucide:headphones",
  "lucide:infinity",
  "lucide:smartphone",
  "lucide:refresh-cw",
  "lucide:download",
] as const;

const benefits = computed(() =>
  ([1, 2, 3, 4, 5, 6] as const).map((n, i) => ({
    icon: ICONS[i]!,
    title: t(`benefits.items.${n}.title`),
    description: t(`benefits.items.${n}.description`),
  })),
);
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="benefits-heading"
    class="bg-light py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-amber-dark"
        >
          {{ $t("benefits.eyebrow") }}
        </p>
        <h2
          id="benefits-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-light sm:text-3xl md:text-4xl"
        >
          {{ $t("benefits.heading.prefix") }}
          <span class="text-amber-dark">{{
            $t("benefits.heading.highlight")
          }}</span>
        </h2>
      </div>

      <!-- Benefits grid -->
      <div
        class="stagger-children mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        <article
          v-for="benefit in benefits"
          :key="benefit.title"
          class="scroll-reveal rounded-2xl border border-light-muted bg-light-surface p-6 transition-all duration-300 hover:border-amber-dark/30 hover:shadow-md"
        >
          <div
            class="mb-4 flex size-11 items-center justify-center rounded-xl bg-amber-dark/10"
          >
            <Icon
              :name="benefit.icon"
              class="size-5 text-amber-dark"
              aria-hidden="true"
            />
          </div>
          <h3 class="text-base font-bold text-text-on-light sm:text-lg">
            {{ benefit.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-text-on-light-muted">
            {{ benefit.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
