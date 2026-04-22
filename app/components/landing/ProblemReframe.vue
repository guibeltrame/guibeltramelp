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
        <!-- Eyebrow -->
        <p
          class="scroll-reveal text-sm font-semibold uppercase tracking-widest text-amber"
        >
          A verdade que ninguém te conta
        </p>

        <!-- Headline -->
        <h2
          id="reframe-heading"
          class="scroll-reveal mt-4 text-2xl font-bold leading-tight tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          O problema
          <span class="text-amber">nunca foi falta de talento.</span>
        </h2>

        <!-- Body -->
        <div
          class="scroll-reveal mt-8 space-y-6 text-base leading-relaxed text-text-on-dark-muted sm:text-lg"
        >
          <p>
            Entendo que a maior parte já passou horas e horas estudando, assim
            como eu. É frustrante estudar mais conteúdos e sentir que não tem
            <strong class="text-text-on-dark">nenhum progresso.</strong>
          </p>
          <p>
            Surge a sensação de que você é só um
            <strong class="text-text-on-dark">guitarrista COMUM</strong> e não
            tem nenhum diferencial.
          </p>

          <p>
            Isso não é verdade, todo guitarrista tem
            <strong class="text-text-on-dark"
              >características únicas que podem ser desenvolvidas</strong
            >, mas você não pode depender só de inspiração.
          </p>
          <p>A verdade é a seguinte:</p>
          <p>
            <strong class="text-text-on-dark"
              >Escala ou técnica nenhuma que salve um solo mal
              construído</strong
            >
          </p>
          <p>
            Sem estrutura, seu improviso vira o famoso "sobe e desce" de escala.
            E seu improviso não pode depender apenas e um bom dia de
            <strong class="text-text-on-dark">inspiração.</strong>
          </p>
        </div>

        <!-- Visual separator / quote -->
        <blockquote class="scroll-reveal mt-10 border-l-4 border-amber pl-6">
          <p class="text-lg font-medium italic text-text-on-dark sm:text-xl">
            "Mas e se eu te disse que tem uma forma de desenvolver sua própria
            linguagem e não depender só da inspiração pra criar seus próprios
            solos com um SISTEMA DE VISUALIZAÇÃO CRIATIVO?"
          </p>

          <p class="text-lg font-medium italic text-text-on-dark sm:text-xl">
            Mas antes deixa eu me apresentar"
          </p>
        </blockquote>
      </div>
    </div>
  </section>
</template>
