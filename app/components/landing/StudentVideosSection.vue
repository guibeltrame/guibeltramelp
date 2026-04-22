<script setup lang="ts">
const { containerRef } = useScrollReveal();

const students = [
  {
    name: "Lorenzo",
    role: "Criação de Solo do ZERO",
    vimeoId: "1116623847",
    blurb:
      "Ele não sabia nada de escalas e criou essa tema do zero seguindo o método.",
    iframeTitle:
      "Vídeo do aluno Lorenzo tocando guitarra — depoimento em vídeo do curso",
  },
  {
    name: "José",
    role: "Improvisando de forma livre",
    vimeoId: "1168210484",
    blurb:
      "Desenvolvendo improviso criando motivos e de forma livre pelo braço.",
    iframeTitle:
      "Vídeo do aluno José tocando guitarra — depoimento em vídeo do curso",
  },
  {
    name: "Caio",
    role: "Desenvolvimento de vocabulário",
    vimeoId: "1074795813",
    blurb:
      "Desenvolveu esse solo do zero criando suas próprias frases e aplicando licks dos seus ídolos.",
    iframeTitle:
      "Vídeo do aluno Caio tocando guitarra — depoimento em vídeo do curso",
  },
] as const;
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="student-videos-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-20%,rgba(245,158,11,0.12),transparent)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(245,158,11,0.04),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header class="scroll-reveal mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-amber">
          Essa transformação, não aconteceu só comigo...
        </p>
        <h2
          id="student-videos-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          A evolução que dá para
          <span class="text-amber">ouvir e ver</span>
        </h2>
        <p
          class="mt-4 text-base leading-relaxed text-text-on-dark-muted sm:text-lg"
        >
          Esses são alunos que aplicaram o método.
        </p>
      </header>

      <div
        class="scroll-reveal mt-10 flex justify-center sm:mt-12"
        aria-hidden="true"
      >
        <div
          class="inline-flex items-center gap-2 rounded-full border border-dark-muted bg-dark-surface/80 px-4 py-2 backdrop-blur-sm"
        >
          <Icon name="lucide:clapperboard" class="size-4 text-amber" />
          <span class="text-xs font-medium text-text-on-dark-muted sm:text-sm">
            Confira as transformações com o Ciência das 6 Cordas
          </span>
        </div>
      </div>

      <div
        class="stagger-children mt-12 grid gap-8 sm:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10"
      >
        <div
          v-for="student in students"
          :key="student.vimeoId"
          class="scroll-reveal"
        >
          <LandingStudentVideoShowcaseCard v-bind="student" />
        </div>
      </div>
    </div>
  </section>
</template>
