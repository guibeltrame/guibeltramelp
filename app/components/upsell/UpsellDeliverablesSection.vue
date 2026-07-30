<script setup lang="ts">
/**
 * UpsellDeliverablesSection — O que você vai receber no PLAY RAIO-X?
 *
 * Layout inspirado no modelo de referência: cada entregável em um card
 * com texto à esquerda e área de imagem à direita (alternado no 2º card).
 * Mantém bg-dark, radial gradient âmbar e scroll-reveal do padrão do projeto.
 */

const { containerRef } = useScrollReveal();

const deliverables = [
  {
    icon: 'lucide:clipboard-list',
    title: 'ACOMPANHAMENTO INDIVIDUAL PERSONALIZADO',
    intro:
      'Você receberá um formulário para uma pré-avaliação de assuntos práticos e teóricos. Isso é tudo o que será avaliado:',
    bullets: [
      'Técnica e Precisão',
      'Timbre',
      'Visualização do Braço',
      'Parte criativa',
    ],
    outro:
      'Você tem até 45 dias para enviar formulário e agendarmos nossa primeira sessão.',
    imageAlt: 'Diagnóstico inicial de 30 minutos',
    imageRight: true,
  },
  {
    icon: 'lucide:clipboard-list',
    title: 'ENCONTROS + PLANO DE ESTUDO',
    intro:
      'Duas sessões individuais com duração de 45 minutos que são feitas num intervalo de 20 dias mais um plano de estudo personalizado com quais assuntos devem ser o foco dos próximos meses de estudo.',
    bullets: [
      'Os 2 encontros são gravados para que você possa reassistir.',
    ],
    imageAlt: 'Diagnóstico inicial de 30 minutos',
    imageRight: false,
  },
];

</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="deliverables-heading"
    class="relative overflow-hidden bg-light py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Header — só título, sem subtítulo extra -->
      <div class="scroll-reveal mx-auto max-w-3xl text-center">
        <h2
          id="deliverables-heading"
          class="text-2xl font-bold uppercase tracking-tight text-text-on-light sm:text-3xl md:text-4xl"
        >
          O que você vai receber no
          <span class="text-amber-dark">PLAY RAIO-X?</span>
        </h2>
      </div>

      <!-- Cards: texto + imagem lado a lado, alternado -->
      <div class="stagger-children mt-12 space-y-6 lg:mt-16 lg:space-y-8">
        <article
          v-for="item in deliverables"
          :key="item.title"
          class="scroll-reveal grid items-center gap-0 overflow-hidden rounded-2xl border border-light-muted bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] transition-[box-shadow,transform] duration-300 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] sm:hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:sm:hover:translate-y-0 lg:grid-cols-2"
        >
          <!-- Texto -->
          <div
            class="p-8 sm:p-10"
            :class="item.imageRight ? 'lg:order-1' : 'lg:order-2'"
          >
            <h3 class="text-lg font-black uppercase tracking-tight text-text-on-light sm:text-xl">
              {{ item.title }}
            </h3>
            <p class="mt-1 text-sm font-semibold text-amber-dark sm:text-base">
              {{ item.subtitle }}
            </p>
            <p class="mt-3 text-sm leading-relaxed text-text-on-light-muted sm:text-base">
              {{ item.intro }}
            </p>
            <ul class="mt-3 space-y-2">
              <li
                v-for="bullet in item.bullets"
                :key="bullet"
                class="flex items-start gap-2 text-sm leading-relaxed text-text-on-light-muted sm:text-base"
              >
                <svg
                  class="mt-0.5 size-4 shrink-0 text-amber-dark"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="7.25" stroke="currentColor" stroke-width="1.5" />
                  <path d="M5 8l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>{{ bullet }}</span>
              </li>
            </ul>
            <p class="mt-3 text-sm leading-relaxed text-text-on-light-muted sm:text-base">
              {{ item.outro }}
            </p>
          </div>

          <!-- Área de vídeo -->
          <div
            class="flex items-center justify-center bg-light-surface p-6 sm:p-8 lg:p-10"
            :class="item.imageRight ? 'lg:order-2' : 'lg:order-1'"
          >
            <div class="w-full max-w-md overflow-hidden rounded-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.18)] ring-1 ring-black/8 lg:max-w-full">
              <div style="aspect-ratio: 16 / 9;">
                <iframe
                  src="https://player.vimeo.com/video/1204892244?badge=0&autopause=0&player_id=0&app_id=58479"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  style="width: 100%; height: 100%; display: block;"
                  :title="item.imageAlt"
                  loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
