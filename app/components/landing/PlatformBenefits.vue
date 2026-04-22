<script setup lang="ts">
const { containerRef } = useScrollReveal();

const benefits = [
  {
    icon: "lucide:gauge",
    title: "Plano Guiado e Prático",
    description: "Aulas de 5 à 12 minutos para aplicação prática e rápida.",
  },
  {
    icon: "lucide:headphones",
    title: "Níveis de Suporte",
    description:
      "Dúvidas diretamente na plataforma, Comunidade e um encontro ao vivo mensal.",
  },
  {
    icon: "lucide:infinity",
    title: "Acesso Imediato e Vitalício",
    description:
      "Comprou uma vez, é seu para sempre e para melhorar sua experiência de aplicação, você tem acesso a todas futuras atualizações.",
  },
  {
    icon: "lucide:smartphone",
    title: "Assista de qualquer lugar",
    description:
      "Aulas disponíveis no celular, tablet ou computador. Acesso pela plataforma Hotmart ou Hotmart Sparkle (mobile).",
  },
  {
    icon: "lucide:refresh-cw",
    title: "Atualizações",
    description:
      "Preocupado sempre em melhorar a sua experiência de aplicação, você tem acesso a futuras atualizações sem custo nenhum.",
  },
  {
    icon: "lucide:download",
    title: "Material complementar",
    description:
      "Backing tracks, PDFs, tablaturas e exercícios práticos para acelerar seu progresso.",
  },
];
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="benefits-heading"
    class="bg-light py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-amber-dark"
        >
          Sua experiência dentro do Ciência das 6 Cordas
        </p>
        <h2
          id="benefits-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-light sm:text-3xl md:text-4xl"
        >
          Tudo o que você vai ter
          <span class="text-amber-dark">acesso</span>
        </h2>
      </div>

      <!-- Benefits grid -->
      <div
        class="stagger-children mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        <article
          v-for="benefit in benefits"
          :key="benefit.title"
          class="scroll-reveal rounded-2xl border border-light-muted bg-light-surface p-6 transition-all duration-300 hover:border-amber-dark/30 hover:shadow-md"
        >
          <div
            class="mb-4 flex size-11 items-center justify-center rounded-xl bg-amber-dark/10"
          >
            <Icon
              :name="benefit.icon"
              class="size-5 text-amber-dark"
              aria-hidden="true"
            />
          </div>
          <h3 class="text-base font-bold text-text-on-light sm:text-lg">
            {{ benefit.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-text-on-light-muted">
            {{ benefit.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
