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
            Você já toca há alguns anos, acumulou vários conteúdos, se sente <strong class="text-text-on-dark">estagnado e preso</strong> por não entender o que toca — e quando tenta improvisar fica naquele sobe e desce robótico.
          </p>
          <p class="scroll-reveal">
            Você quer dominar o braço da guitarra, começar a criar seus improvisos e, principalmente, ter <strong class="text-text-on-dark">organização do que realmente estudar</strong> para ter uma evolução constante.
          </p>
          <p class="scroll-reveal">
            Você não precisa ser um músico avançado, ter um <strong class="text-text-on-dark">talento natural</strong> ou toda a teoria musical.
          </p>
          <p class="scroll-reveal">
            A sua rotina de estudo não precisa ser chata — em que você se prende a aprender os fundamentos, mas não desenvolve a sua musicalidade de fato colocando em prática. O famoso músico que <strong class="text-text-on-dark">só sabe teoria, mas não aplica nada.</strong>
          </p>

          <p id="reframe-manifest-kicker" class="scroll-reveal text-center">
            Você precisa entender isso:
          </p>

          <!-- Manifesto: frase central da reinterpretação -->
            <p
              class="relative mx-auto max-w-[min(100%,19rem)] text-center font-bold leading-[1.15] tracking-tight text-text-on-dark sm:max-w-[22rem] md:max-w-[24rem] md:leading-tight"
            >
              <span
                class="text-center text-xl leading-tight sm:text-2xl md:text-3xl md:leading-tight"
              >
                MÚSICA É
                <span class="text-amber">COMUNICAÇÃO</span>
              </span>
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

          <p class="text-lg font-medium text-text-on-dark sm:text-xl">
            E pra todo músico que realmente quer aprender a se comunicar na guitarra/violão precisa passar pelos três pilares que eu batizei de <strong>TRÍADE CRIATIVA</strong>.
          </p>

          <p class="mt-6 text-lg font-medium text-text-on-dark sm:text-xl">
            Mas antes deixa eu me apresentar...
          </p>
          </article>
      </div>
    </div>
  </section>
</template>
