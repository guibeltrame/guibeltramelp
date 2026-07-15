<script setup lang="ts">
const { containerRef } = useScrollReveal();
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="reframe-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <!-- Background accent -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(245,158,11,0.06),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl">
        <!-- Headline -->
        <h2
          id="reframe-heading"
          class="scroll-reveal text-2xl font-bold leading-tight tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          O problema
          <span class="text-amber">não é falta de talento.</span>
        </h2>

        <!-- Body -->
        <div
          class="stagger-children mt-8 space-y-6 text-base leading-relaxed text-text-on-dark-muted sm:text-lg"
        >
          <p class="scroll-reveal">
            Entendo que talvez você até já tenha aprendido uma escala aqui ou outro lick ali, mas os improvisos ainda soam repetitivos e sem sentido. É frustrante estudar muitos conteúdos e sentir que não tem
            <strong class="text-text-on-dark">nenhum progresso.</strong>
          </p>
          <p class="scroll-reveal">
            Parece que tudo isso é só pra 
            <strong class="text-text-on-dark">guitarristas avançados</strong>, para quem tem <strong class="text-text-on-dark">talento natural</strong> ou precisa de muita <strong class="text-text-on-dark">teoria.</strong>
          </p>
          <p class="scroll-reveal">E você fica preso no mesmo ciclo de sempre.</p>
          <p class="scroll-reveal">Reproduz solos que gosta, mas quando chega sua vez de improvisar e criar tem o mesmo resultado.</p>
          <p class="scroll-reveal">
            Todo guitarrista tem
            <strong class="text-text-on-dark"
              >características únicas que podem ser desenvolvidas</strong
            >, mas improvisar não se baseia em somente aprender um shape de escala, ficar só copiando licks e tirar músicas de forma aleatória.
          </p>

          <p id="reframe-manifest-kicker" class="scroll-reveal text-center">
            A grande verdade é:
          </p>

          <!-- Manifesto: frase central da reinterpretação -->
            <p
              class="relative mx-auto max-w-[min(100%,19rem)] text-center font-bold leading-[1.15] tracking-tight text-text-on-dark sm:max-w-[22rem] md:max-w-[24rem] md:leading-tight"
            >
              <span
                class="text-center text-xl leading-tight sm:text-2xl md:text-3xl md:leading-tight"
              >
                ESCALA NENHUMA SALVA
                <span class="text-amber">SOLO SEM ESTRUTURA</span>
              </span>
            </p>

          <p class="scroll-reveal">
            Música é <strong class="text-text-on-dark">comunicação, comunicação precisa de estrutura</strong>. Não é ter uma técnica avançada ou conhecer escalas e teorias mais complexas.
          </p>
        </div>

        <!-- Visual separator / quote -->
<article
            class="scroll-reveal relative mx-auto mt-10 max-w-xl overflow-hidden rounded-2xl border border-amber/20 bg-dark-surface/90 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:mt-12 sm:max-w-2xl sm:p-6 md:p-8"
            aria-labelledby="reframe-manifest-kicker"
          >
            <div
              class="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber via-amber/70 to-amber/30"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute -right-12 top-1/2 size-48 -translate-y-1/2 rounded-full bg-amber/[0.07] blur-3xl"
              aria-hidden="true"
            />

            <p
              class="relative mx-auto max-w-[min(100%,19rem)] font-bold leading-[1.15] tracking-tight text-text-on-dark sm:max-w-[22rem] md:max-w-[24rem] md:leading-tight"
            >
          <p class="text-lg font-medium text-text-on-dark sm:text-xl">
            Se eu te disser que tem uma forma de desenvolver sua própria linguagem, 
            sem ser um guitarrista avançado, e não depender só da inspiração pra 
            criar seus próprios solos com o método que chamo de <strong>TRÍADE CRIATIVA</strong>?
          </p>

          <p class="mt-6 text-lg font-medium text-text-on-dark sm:text-xl">
            Mas antes deixa eu me apresentar...
          </p>
          </p>
          </article>
      </div>
    </div>
  </section>
</template>
