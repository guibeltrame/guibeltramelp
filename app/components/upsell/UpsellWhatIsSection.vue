<script setup lang="ts">
/**
 * UpsellWhatIsSection — O que é o Mestre do Solos 90D
 *
 * Layout inspirado no modelo de referência: fundo escuro, lado esquerdo com
 * o nome do produto em destaque, lado direito com o texto explicativo limpo.
 */

const { containerRef } = useScrollReveal();
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="what-is-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24"
  >
    <!-- Glow sutil de fundo -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.06),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        <!-- Lado esquerdo: nome do produto em destaque -->
        <div class="scroll-reveal flex items-center justify-center lg:justify-start">
          <h2
            id="what-is-heading"
            class="text-center text-4xl font-black uppercase leading-tight tracking-tight text-amber sm:text-5xl md:text-6xl lg:text-left"
          >
            SOLO
            <span class="text-text-on-dark">RAIO-X</span>
          </h2>
        </div>

        <!-- Lado direito: pergunta + descrição -->
        <div class="scroll-reveal">
          <h3 class="text-xl font-bold uppercase tracking-tight text-text-on-dark sm:text-2xl">
            O QUE É O SOLO RAIO-X?
          </h3>
          <div class="mt-4 space-y-3 text-base leading-relaxed text-text-on-dark-muted sm:text-lg">
            <p>
              É uma <strong class="text-text-on-dark">personalizada do seu primeiro solo</strong>.
            </p>
            <p>
              Para facilitar e otimizar a sua evolução você vai receber um
              <strong class="text-text-on-dark">plano de estudo</strong> após uma
              análise de play para detectar os principais furos dentro dos seus solos,
              junto com <strong class="text-text-on-dark">implementações a serem corrigidas</strong>.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
