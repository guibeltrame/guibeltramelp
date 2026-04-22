<script setup lang="ts">
const { containerRef } = useScrollReveal();

const pains = [
  {
    image: "/images/dor01.jpg",
    title: "Seus solos sempre soam iguais",
    description:
      "Fica sobe e desce de escala, repete os mesmos clichês e sente que todo solo soa igual.",
    imageAlt:
      "Ilustra a sensação de ficar preso aos mesmos licks e frases na guitarra",
  },
  {
    image: "/images/dor02.jpg",
    title: "Insegurança pra improvisar",
    description:
      "No palco ou no quarto fica inseguro para improvisar porque não domina o braço da guitarra.",
    imageAlt:
      "Representa o bloqueio criativo na hora de improvisar na guitarra",
  },
  {
    image: "/images/dor03.jpg",
    title: "Muito conteúdo, pouca clareza",
    description:
      "Fica perdido com tanto conteúdo na internet e não sabe nem por onde começar pra criar e improvisar.",
    imageAlt:
      "Sugere a distância entre muito estudo e pouca aplicação na música na prática",
  },
  {
    image: "/images/dor04.jpg",
    title: "Você se compara e se frustra",
    description:
      'Fica frustrado porque vê outros guitarristas criando com as mesmas escalas que você conhece e se pergunta: "por que eu não consigo fazer isso?"',
    imageAlt:
      "Traduz a frustração ao comparar o próprio som com outros guitarristas",
  },
  {
    image: "/images/dor05.jpg",
    title: "Toca sem entender o que faz",
    description:
      "Só consegue tocar o que decorou e não entende nada do que está tocando, só reproduzindo no automático.",
    imageAlt: "Visualiza a falta de direção e de roteiro no estudo da guitarra",
  },
  {
    image: "/images/dor06.jpg",
    title: "Sente que não evolui",
    description:
      "Estuda há um tempo, mas sente que estagnou e fica desanimado por não ver evolução e seus solos soando iguais toda vez.",
    imageAlt:
      "Remete à busca por um som próprio e identidade musical na guitarra",
  },
];
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="pain-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_50%_0%,rgba(245,158,11,0.07),transparent)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_100%,rgba(245,158,11,0.04),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <h2
          id="pain-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          Você já se encontrou em
          <span class="text-amber">alguma dessas situações?</span>
        </h2>
        <p
          class="mt-4 text-base leading-relaxed text-text-on-dark-muted sm:text-lg"
        >
          Se pelo menos uma dessas frases faz sentido pra você, saiba que existe
          um caminho pra mudar isso.
        </p>
      </div>

      <div
        class="stagger-children mt-12 grid gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-3 lg:gap-8"
      >
        <article
          v-for="(pain, index) in pains"
          :key="pain.title"
          class="scroll-reveal group flex flex-col overflow-hidden rounded-2xl border border-dark-muted bg-dark-surface shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow,transform] duration-300 hover:border-amber/25 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] motion-reduce:transition-none sm:hover:-translate-y-0.5 motion-reduce:sm:hover:translate-y-0"
        >
          <div class="relative aspect-[4/3] overflow-hidden bg-dark-muted">
            <img
              :src="pain.image"
              :alt="pain.imageAlt"
              class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-surface/80 via-transparent to-transparent opacity-90"
              aria-hidden="true"
            />
          </div>

          <div
            class="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pt-6"
          >
            <h3
              class="text-lg font-bold leading-snug tracking-tight text-text-on-dark sm:text-xl"
            >
              {{ pain.title }}
            </h3>
            <p
              class="mt-3 text-sm leading-relaxed text-text-on-dark-muted sm:text-[0.9375rem] sm:leading-relaxed"
            >
              {{ pain.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
