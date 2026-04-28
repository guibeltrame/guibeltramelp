<script setup lang="ts">
const { t } = useI18n();
const { containerRef } = useScrollReveal();

const pillars = computed(() => [
  {
    number: "01",
    title: t("method.pillars.1.title"),
    description: t("method.pillars.1.description"),
    icon: "lucide:layout-grid",
  },
  {
    number: "02",
    title: t("method.pillars.2.title"),
    description: t("method.pillars.2.description"),
    icon: "lucide:message-square",
  },
  {
    number: "03",
    title: t("method.pillars.3.title"),
    description: t("method.pillars.3.description"),
    icon: "lucide:fingerprint",
  },
  {
    number: "04",
    title: t("method.pillars.4.title"),
    description: t("method.pillars.4.description"),
    icon: "lucide:target",
  },
]);

const mainPillars = computed(() => pillars.value.slice(0, 3));
const fourthPillar = computed(() => pillars.value[3]!);
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
        <p class="text-sm font-semibold uppercase tracking-widest text-amber">
          {{ $t("method.eyebrow") }}
        </p>
        <h2
          id="method-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          {{ $t("method.heading.prefix") }}
          <span class="text-amber">{{
            $t("method.heading.highlight")
          }}</span>
          {{ $t("method.heading.suffix") }}
        </h2>
        <p
          class="mt-4 text-base leading-relaxed text-text-on-dark-muted sm:text-lg"
        >
          {{ $t("method.subheading") }}
        </p>
      </div>

      <!-- Pillars grid: 3×4 cols + linha inteira para o 4º -->
      <div
        class="stagger-children mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12 lg:mt-16"
      >
        <article
          v-for="pillar in mainPillars"
          :key="pillar.number"
          class="scroll-reveal group rounded-2xl border border-dark-muted bg-dark-surface p-6 transition-all duration-300 hover:border-amber/20 md:col-span-4 md:p-8"
        >
          <div class="flex items-start gap-4">
            <div
              class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber/10"
            >
              <Icon
                :name="pillar.icon"
                class="size-6 text-amber"
                aria-hidden="true"
              />
            </div>
            <div>
              <span
                class="text-xs font-bold uppercase tracking-widest text-amber/60"
              >
                {{ $t("method.pillarLabel", { number: pillar.number }) }}
              </span>
              <h3 class="mt-1 text-lg font-bold text-text-on-dark">
                {{ pillar.title }}
              </h3>
            </div>
          </div>
          <p
            class="mt-4 text-sm leading-relaxed text-text-on-dark-muted sm:text-base"
          >
            {{ pillar.description }}
          </p>
        </article>

        <article
          class="scroll-reveal group relative overflow-hidden rounded-2xl border border-amber/20 bg-gradient-to-b from-amber/5 to-dark-surface p-7 shadow-[0_22px_55px_-14px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-[border-color,box-shadow,transform] duration-300 sm:p-8 motion-reduce:transition-none md:col-span-12 md:mx-auto md:max-w-4xl md:px-10 md:py-10 hover:border-amber/30 hover:shadow-[0_28px_65px_-12px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.05)] sm:hover:-translate-y-0.5 motion-reduce:sm:hover:translate-y-0"
        >
          <div
            class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(245,158,11,0.1),transparent_60%)]"
            aria-hidden="true"
          />
          <div class="relative z-10">
            <div class="flex items-center gap-4">
              <div
                class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber/10 ring-1 ring-amber/15"
              >
                <Icon
                  :name="fourthPillar.icon"
                  class="size-6 text-amber"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3
                  class="text-lg font-bold tracking-tight text-text-on-dark sm:text-balance md:text-xl"
                >
                  {{ fourthPillar.title }}
                </h3>
              </div>
            </div>
            <p
              class="mt-4 text-sm leading-relaxed text-text-on-dark-muted sm:text-base"
            >
              {{ fourthPillar.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
