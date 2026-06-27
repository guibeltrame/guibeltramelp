<script setup lang="ts">
/**
 * UpsellFinalCTASection — CTA final da página de upsell
 *
 * Reutiliza o padrão de FinalCTASection.vue:
 * - bg-dark com radial gradient central
 * - Headline forte + parágrafo de reforço
 * - UiCtaButton primary size lg
 * - Badge de garantia abaixo do botão
 */

interface Props {
  ctaHref?: string;
}

const props = withDefaults(defineProps<Props>(), {
  ctaHref: '#oferta-solo-mestre',
});

const { containerRef } = useScrollReveal();
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="upsell-final-cta-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <!-- Background gradient -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(245,158,11,0.10),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <h2
          id="upsell-final-cta-heading"
          class="text-2xl font-bold leading-tight tracking-tight text-text-on-dark sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Não deixe o método
          <span class="text-amber">virar mais um arquivo parado</span>
        </h2>

        <p class="mt-6 text-base leading-relaxed text-text-on-dark-muted sm:text-lg">
          Você acabou de investir no CD6C. O SOLO RAIO-X garante que
          esse investimento se converta em resultado — com plano, acompanhamento
          e um guitarrista ao seu lado durante todo o processo.
        </p>

        <div class="mt-10 flex flex-col items-center gap-3">
          <UiCtaButton
            label="QUERO O RAIO-X DO MEU SOLO"
            :href="props.ctaHref"
            variant="primary"
            size="lg"
          />
          <p class="text-sm text-text-on-dark-muted">
            <Icon
              name="lucide:shield-check"
              class="mr-1 inline size-4 text-amber"
              aria-hidden="true"
            />
            Garantia incondicional de 7 dias — risco zero
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
