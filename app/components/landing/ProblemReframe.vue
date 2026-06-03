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
          <span class="text-amber">nunca foi falta de talento.</span>
        </h2>

        <!-- Body -->
        <div
          class="stagger-children mt-8 space-y-6 text-base leading-relaxed text-text-on-dark-muted sm:text-lg"
        >
          <p class="scroll-reveal">
            Entendo que a maior parte já passou horas e horas estudando, assim
            como eu. É frustrante estudar mais conteúdos e sentir que não tem
            <strong class="text-text-on-dark">nenhum progresso.</strong>
          </p>
          <p class="scroll-reveal">
            Surge a sensação de que você é só um
            <strong class="text-text-on-dark">guitarrista COMUM</strong> e não
            tem nenhum diferencial.
          </p>

          <p class="scroll-reveal">
            Isso não é verdade, todo guitarrista tem
            <strong class="text-text-on-dark"
              >características únicas que podem ser desenvolvidas</strong
            >, mas você não pode depender só de inspiração.
          </p>

          <p id="reframe-manifest-kicker" class="scroll-reveal text-center">
            A grande verdade é:
          </p>

          <!-- Manifesto: frase central da reinterpretação -->
          <article
            class="scroll-reveal relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-amber/20 bg-dark-surface/90 p-6 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:max-w-2xl sm:p-8 md:p-10"
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
              <span
                class="text-xl leading-tight sm:text-2xl md:text-3xl md:leading-tight"
              >
                ESCALA OU TÉCNICA NENHUMA SALVA
                <span class="text-amber">SOLO SEM ESTRUTURA</span>
              </span>
            </p>
          </article>

          <p class="scroll-reveal">
            Sem estrutura, seu improviso vira o famoso "sobe e desce" de escala.
            E seu improviso não pode depender apenas e um bom dia de
            <strong class="text-text-on-dark">inspiração.</strong>
          </p>
        </div>

        <!-- Visual separator / quote -->
        <blockquote class="scroll-reveal mt-10 border-l-4 border-amber pl-6">
          <p class="text-lg font-medium text-text-on-dark sm:text-xl">
            Mas e se eu te disser que tem uma forma de desenvolver sua própria
            linguagem e não depender só da inspiração pra criar seus próprios
            solos com um TRÍADE CRIATIVA?
          </p>

          <p class="text-lg font-medium text-text-on-dark sm:text-xl">
            Mas antes deixa eu me apresentar...
          </p>
        </blockquote>
      </div>
    </div>
  </section>
</template>
