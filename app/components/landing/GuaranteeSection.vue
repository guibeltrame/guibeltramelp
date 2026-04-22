<script setup lang="ts">
const { containerRef } = useScrollReveal();
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="guarantee-heading"
    class="bg-light py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <!-- Shield icon -->
        <div
          class="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-amber-dark/10"
        >
          <Icon
            name="lucide:shield-check"
            class="size-10 text-amber-dark"
            aria-hidden="true"
          />
        </div>

        <h2
          id="guarantee-heading"
          class="text-2xl font-bold tracking-tight text-text-on-light sm:text-3xl md:text-4xl"
        >
          Garantia incondicional de
          <span class="text-amber-dark">7 dias</span>
        </h2>

        <div
          class="mt-6 space-y-4 text-base leading-relaxed text-text-on-light-muted sm:text-lg"
        >
          <p>
            Se dentro de 7 dias você sentir que o curso não é pra você, basta
            solicitar reembolso e devolvemos
            <strong class="text-text-on-light">100% do seu investimento</strong
            >. Sem perguntas, sem burocracia, sem letras miúdas.
          </p>
          <p>
            O risco é todo nosso. Sua única missão é assistir às aulas, praticar
            e aplicar o conteúdo.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
