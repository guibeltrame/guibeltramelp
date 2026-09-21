<script setup lang="ts">
const { containerRef } = useScrollReveal();
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="time-value-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_15%_30%,rgba(245,158,11,0.07),transparent)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_70%,rgba(245,158,11,0.05),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="grid min-h-0 grid-cols-1 gap-x-4 gap-y-8 sm:gap-y-10 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] lg:gap-x-10 lg:gap-y-4 lg:items-start"
      >
        <!-- Cabeçalho + gancho -->
        <header class="scroll-reveal max-w-xl lg:pr-4">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-amber"
          ></p>
          <h2
            id="time-value-heading"
            class="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-text-on-dark sm:text-4xl md:text-5xl"
          >
            QUANTO <span class="text-amber">TEMPO</span> VOCÊ JÁ TENTOU SOZINHO?
            
          </h2>
         
        </header>

        <!-- Imagem à direita no desktop; mesma ordem de leitura no mobile -->
        <figure
          class="scroll-reveal group relative mx-auto w-full min-h-0 max-w-[280px] sm:max-w-[320px] max-lg:order-last lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mx-0 lg:w-full lg:justify-self-end lg:self-start"
        >
          <div
            class="relative overflow-hidden rounded-2xl border border-dark-muted bg-dark-surface shadow-2xl shadow-black/40 ring-1 ring-white/5 transition duration-500 ease-out will-change-transform group-hover:ring-amber/20 motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
          >
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent opacity-80"
              aria-hidden="true"
            />
            <img
              src="/images/prof.jpeg"
              alt="Gui Beltrame tocando guitarra em apresentação ao vivo, com iluminação de palco"
              width="600"
              height="800"
              loading="lazy"
              decoding="async"
              class="aspect-[3/4] w-full object-cover object-center"
            />
          </div>
        </figure>

        <!-- Corpo: contrastes + ancoragem -->
        <div
          class="scroll-reveal space-y-8 max-lg:order-2 lg:order-none lg:col-start-1 lg:row-start-2 lg:max-w-xl"
        >
          <div
            class="space-y-6 text-base leading-relaxed text-text-on-dark-muted sm:text-lg"
          >
            <p>
              Imagina hoje conseguir organizar os seus estudos para ter uma evolução constante, desenvolver o ouvido e entender o que está tocando.
            </p>
            <p>
              Conseguir fazer improvisos e até mesmo gravar vídeos tocando, com segurança do que está fazendo.
            </p>

            <p class="text-lg font-medium text-text-on-dark sm:text-xl">
              Seja no quarto ou no palco:
              <span class="text-amber">Você quer ser esse músico?</span>
            </p>
          </div>
          <div
            class="border-l-4 border-amber pl-5 sm:pl-6"
            role="note"
            aria-label="Ancoragem de valor"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
