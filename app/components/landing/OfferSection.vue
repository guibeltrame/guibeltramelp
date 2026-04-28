<script setup lang="ts">
const { t } = useI18n();
const { containerRef } = useScrollReveal();

const included = computed(() =>
  ([1, 2, 3, 4, 5, 6, 7, 8] as const).map((n) => t(`offer.included.${n}`)),
);
</script>

<template>
  <section
    id="oferta"
    ref="containerRef"
    aria-labelledby="offer-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(245,158,11,0.08),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-amber">
          {{ $t("offer.eyebrow") }}
        </p>
        <h2
          id="offer-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          {{ $t("offer.heading.prefix") }}
          <span class="text-amber">{{ $t("offer.heading.highlight") }}</span>
        </h2>
      </div>

      <!-- Offer card -->
      <div class="scroll-reveal mx-auto mt-12 max-w-2xl">
        <div
          class="rounded-2xl border border-amber/30 bg-dark-surface p-8 shadow-lg shadow-amber/5 md:p-10"
        >
          <!-- What's included -->
          <h3 class="text-lg font-bold text-text-on-dark">
            {{ $t("offer.includedTitle") }}
          </h3>

          <ul class="mt-6 space-y-3" role="list">
            <li
              v-for="item in included"
              :key="item"
              class="flex items-start gap-3"
            >
              <Icon
                name="lucide:check-circle"
                class="mt-0.5 size-5 shrink-0 text-amber"
                aria-hidden="true"
              />
              <span class="text-sm text-text-on-dark-muted sm:text-base">
                {{ item }}
              </span>
            </li>
          </ul>

          <!-- Divider -->
          <div class="my-8 border-t border-dark-muted" />

          <!-- Price -->
          <div class="text-center">
            <p class="text-sm text-text-on-dark-muted">
              {{ $t("offer.priceFromLabel") }}
              <span class="text-lg line-through">{{
                $t("offer.priceFrom")
              }}</span>
            </p>
            <p
              class="mt-2 text-4xl font-extrabold tracking-tight text-text-on-dark sm:text-5xl"
            >
              {{ $t("offer.priceCurrency") }}
              <span class="text-amber">{{ $t("offer.priceValue") }}</span>
            </p>
            <p class="mt-2 text-base text-text-on-dark-muted">
              {{ $t("offer.installmentPrefix") }}
              <strong class="text-text-on-dark">{{
                $t("offer.installmentStrong")
              }}</strong>
              {{ $t("offer.installmentSuffix") }}
            </p>
          </div>

          <!-- CTA -->
          <div class="mt-8">
            <UiCtaButton
              :label="$t('offer.ctaLabel')"
              href="https://pay.hotmart.com/A96166604R?off=utywll39&checkoutMode=10&bid=1776467144426"
              target="_blank"
              variant="primary"
              size="lg"
              :full-width="true"
            />
          </div>

          <!-- Trust badges -->
          <div
            class="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-text-on-dark-muted"
          >
            <span class="flex items-center gap-1.5">
              <Icon
                name="lucide:shield-check"
                class="size-4 text-amber"
                aria-hidden="true"
              />
              {{ $t("offer.trust.secure") }}
            </span>
            <span class="flex items-center gap-1.5">
              <Icon
                name="lucide:lock"
                class="size-4 text-amber"
                aria-hidden="true"
              />
              {{ $t("offer.trust.data") }}
            </span>
            <span class="flex items-center gap-1.5">
              <Icon
                name="lucide:refresh-cw"
                class="size-4 text-amber"
                aria-hidden="true"
              />
              {{ $t("offer.trust.guarantee") }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
