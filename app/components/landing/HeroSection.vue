<script setup lang="ts">
const { t } = useI18n();
const { containerRef } = useScrollReveal();

const benefitItems = computed(() => [
  t("hero.benefits.1"),
  t("hero.benefits.2"),
  t("hero.benefits.3"),
  t("hero.benefits.4"),
  t("hero.benefits.5"),
  t("hero.benefits.6"),
]);
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="hero-heading"
    class="relative min-h-[90vh] flex items-center overflow-hidden bg-dark"
  >
    <!-- Background gradient (spotlight effect) -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.12),transparent)]"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(245,158,11,0.06),transparent)]"
      />
    </div>

    <div
      class="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div class="stagger-children mx-auto max-w-5xl text-center">
        <!-- Marca: logotipo em composição premium -->
        <div class="scroll-reveal mb-8 flex justify-center">
          <div
            class="relative rounded-2xl border border-amber/20 bg-dark-surface/70 px-6 py-8 shadow-[0_0_48px_-12px_rgba(245,158,11,0.28)] ring-1 ring-amber/10 backdrop-blur-sm sm:px-10 sm:py-10 md:px-12 md:py-12"
          >
            <div
              class="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.08),transparent)]"
              aria-hidden="true"
            />
            <LandingBrandLogo size="hero" class="relative mx-auto" />
          </div>
        </div>

        <!-- Badge de prova social -->
        <div
          class="scroll-reveal mb-8 inline-flex items-center gap-2 rounded-full border border-dark-muted bg-dark-surface px-4 py-2 text-sm text-text-on-dark-muted"
        >
          <Icon
            name="lucide:users"
            class="size-4 text-amber"
            aria-hidden="true"
          />
          <span>
            {{ $t("hero.socialBadgeBefore") }}
            <strong class="text-text-on-dark">{{
              $t("hero.socialBadgeStrong")
            }}</strong>
            {{ $t("hero.socialBadgeAfter") }}
          </span>
        </div>

        <!-- Headline -->
        <h1
          id="hero-heading"
          class="scroll-reveal mx-auto max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-text-on-dark sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {{ $t("hero.headline.prefix") }}
          <span class="text-amber">{{ $t("hero.headline.highlight") }}</span>
        </h1>

        <!-- Subheadline -->
        <p
          class="scroll-reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-on-dark-muted sm:text-xl"
        >
          {{ $t("hero.subheadlinePrefix") }}
          <strong class="text-text-on-dark">{{
            $t("hero.subheadlineStrong")
          }}</strong
          >{{ $t("hero.subheadlineSuffix") }}
        </p>

        <!-- Bloco de valor: selo, apoio e benefícios -->
        <div class="scroll-reveal mt-12 w-full text-left sm:mt-14">
          <div
            class="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-amber/15 bg-dark-surface/60 p-5 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.65)] ring-1 ring-white/5 backdrop-blur-md sm:rounded-3xl sm:p-8 md:p-10"
          >
            <div
              class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,rgba(245,158,11,0.07),transparent)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-amber/5 blur-3xl"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute -bottom-20 -left-12 size-56 rounded-full bg-amber/[0.04] blur-3xl"
              aria-hidden="true"
            />

            <div class="relative text-center">
              <p
                class="mx-auto inline-block rounded-full border border-amber/25 bg-amber/5 px-4 py-2 text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.2em] text-amber sm:px-5 sm:text-xs sm:tracking-[0.22em]"
              >
                {{ $t("hero.valueKicker") }}
              </p>

              <h2
                id="hero-value-subheading"
                class="mx-auto mt-6 max-w-3xl text-balance text-lg font-bold leading-snug tracking-tight text-text-on-dark sm:text-xl md:text-2xl"
              >
                {{ $t("hero.valueHeading") }}
              </h2>
            </div>

            <ul
              class="relative mt-8 grid list-none grid-cols-1 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-2"
              role="list"
              aria-labelledby="hero-value-subheading"
            >
              <li v-for="item in benefitItems" :key="item" class="group">
                <div
                  class="flex h-full min-h-[3.25rem] items-center gap-3.5 rounded-xl border border-dark-muted/80 bg-dark/40 px-4 py-3.5 shadow-inner shadow-black/20 ring-1 ring-white/[0.04] transition-[border-color,box-shadow,background-color] duration-300 sm:gap-4 sm:rounded-2xl sm:px-5 sm:py-4 motion-reduce:transition-none sm:hover:border-amber/20 sm:hover:bg-dark-surface/80 sm:hover:shadow-[0_12px_40px_-20px_rgba(245,158,11,0.12)] motion-reduce:sm:hover:border-dark-muted/80 motion-reduce:sm:hover:bg-dark/40 md:min-h-0 md:py-4"
                >
                  <span
                    class="flex size-9 shrink-0 items-center justify-center rounded-lg border border-amber/20 bg-gradient-to-br from-amber/15 to-amber/5 text-amber shadow-[0_0_20px_-8px_rgba(245,158,11,0.45)] sm:size-10 sm:rounded-xl"
                    aria-hidden="true"
                  >
                    <Icon
                      name="lucide:check"
                      class="size-4 sm:size-[1.125rem]"
                    />
                  </span>
                  <span
                    class="text-left text-sm font-medium leading-snug text-text-on-dark sm:text-base sm:leading-relaxed"
                  >
                    {{ item }}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative bottom fade -->
    <div
      class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent"
      aria-hidden="true"
    />
  </section>
</template>
