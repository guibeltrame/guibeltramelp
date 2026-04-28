<script setup lang="ts">
const { t } = useI18n();
const { containerRef } = useScrollReveal();

const before = computed(() =>
  ([1, 2, 3, 4, 5] as const).map((n) => t(`transformation.before.${n}`)),
);
const after = computed(() =>
  ([1, 2, 3, 4, 5] as const).map((n) => t(`transformation.after.${n}`)),
);
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="transformation-heading"
    class="bg-light py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-amber-dark"
        >
          {{ $t("transformation.eyebrow") }}
        </p>
        <h2
          id="transformation-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-light sm:text-3xl md:text-4xl"
        >
          {{ $t("transformation.heading.prefix") }}
          <span class="text-amber-dark">{{
            $t("transformation.heading.highlight")
          }}</span>
        </h2>
      </div>

      <!-- Before / After -->
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
        <!-- Before -->
        <div
          class="scroll-reveal rounded-2xl border border-light-muted bg-light-surface p-6 md:p-8"
        >
          <div class="mb-6 flex items-center gap-3">
            <div
              class="flex size-10 items-center justify-center rounded-full bg-red-100"
            >
              <Icon
                name="lucide:x"
                class="size-5 text-red-500"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-lg font-bold text-text-on-light">
              {{ $t("transformation.beforeTitle") }}
            </h3>
          </div>
          <ul class="space-y-4" role="list">
            <li
              v-for="item in before"
              :key="item"
              class="flex items-start gap-3"
            >
              <Icon
                name="lucide:minus"
                class="mt-0.5 size-5 shrink-0 text-red-400"
                aria-hidden="true"
              />
              <span
                class="text-sm leading-relaxed text-text-on-light-muted sm:text-base"
              >
                {{ item }}
              </span>
            </li>
          </ul>
        </div>

        <!-- After -->
        <div
          class="scroll-reveal rounded-2xl border border-amber-dark/20 bg-light-surface p-6 shadow-sm md:p-8"
        >
          <div class="mb-6 flex items-center gap-3">
            <div
              class="flex size-10 items-center justify-center rounded-full bg-amber/10"
            >
              <Icon
                name="lucide:check"
                class="size-5 text-amber-dark"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-lg font-bold text-text-on-light">
              {{ $t("transformation.afterTitle") }}
            </h3>
          </div>
          <ul class="space-y-4" role="list">
            <li
              v-for="item in after"
              :key="item"
              class="flex items-start gap-3"
            >
              <Icon
                name="lucide:check"
                class="mt-0.5 size-5 shrink-0 text-amber-dark"
                aria-hidden="true"
              />
              <span
                class="text-sm leading-relaxed text-text-on-light sm:text-base"
              >
                {{ item }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
