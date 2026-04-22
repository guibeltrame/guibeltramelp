<script setup lang="ts">
const { containerRef } = useScrollReveal();
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="final-cta-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <!-- Background gradient -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(245,158,11,0.1),transparent)]"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <h2
          id="final-cta-heading"
          class="text-2xl font-bold leading-tight tracking-tight text-text-on-dark sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Ficou com alguma dúvida?
        </h2>

        <p
          class="mt-6 text-base leading-relaxed text-text-on-dark-muted sm:text-lg"
        >
          Pare de improvisar no piloto automático. Comece a criar música com
          identidade, liberdade e personalidade — usando a técnica que você já
          tem hoje.
        </p>

        <div class="mt-10">
          <UiCtaButton
            label="CHAMAR NO WHATSAPP"
            href="https://wa.me/5511972040643?text=Fala%20Gui,%20tudo%20bem?%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Ci%C3%AAncia%20das%206%20Cordas"
            target="_blank"
            variant="primary"
            size="lg"
          />
        </div>

        <p class="mt-5 text-sm text-text-on-dark-muted">
          <Icon
            name="lucide:shield-check"
            class="mr-1 inline size-4 text-amber"
            aria-hidden="true"
          />
          Garantia incondicional de 7 dias — risco zero pra você
        </p>
      </div>
    </div>
  </section>
</template>
