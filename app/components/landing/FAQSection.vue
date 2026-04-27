<script setup lang="ts">
const { containerRef } = useScrollReveal();

const faqs = [
  {
    question: "Preciso ter experiência prévia com guitarra?",
    answer:
      "Sim, o curso é voltado para guitarristas que já tocam o mínimo pelo menos. Você não precisa ser avançado, mas precisa saber o básico do instrumento — como posicionar os dedos, fazer acordes e tirar músicas.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "O resultado é variavel de acordo com o seu tempo de prática. O curso foi desenhado para gerar resultados rápidos e progressivos.",
  },
  {
    question: "O acesso é realmente vitalício?",
    answer:
      "Sim. Uma vez que você compra, o acesso é seu para sempre. Sem mensalidades, sem renovações, sem prazo de expiração. Além disso, todas as atualizações futuras estão inclusas.",
  },
  {
    question: "Funciona para qualquer estilo musical?",
    answer:
      "O método é focado em desenvolver estrutura criativa, o que se aplica a qualquer estilo, mas é mais direcionado a linguagem rock, blues e fusion. Os princípios são universais e você os adapta ao seu contexto musical.",
  },
  {
    question: "E se eu não gostar do curso?",
    answer:
      "Você tem 7 dias de garantia incondicional. Se dentro desse período sentir que não é pra você, basta solicitar reembolso e devolvemos 100% do seu dinheiro. Sem perguntas.",
  },
  {
    question: "As aulas são ao vivo ou gravadas?",
    answer:
      "As aulas são gravadas em alta qualidade e ficam disponíveis 24/7 na plataforma. Você estuda no seu ritmo, revisa quantas vezes quiser e avança conforme sua rotina permite.",
  },
  {
    question:
      "Quero aprender técnicas como palhetada alternada e afins, é para mim?",
    answer:
      "Não, o curso é focado para quem quer começar no mundo da improvisação ou sente que está estagnado e quer desenvolver seu vocabulário. Não ensinamos fundamentos de técnica.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Você pode tirar dúvidas diretamente pela plataforma ou pela comunidade exclusiva de alunos. Nossa equipe responde em até 24 horas em dias úteis.",
  },
];
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="faq-heading"
    class="bg-light py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <h2
          id="faq-heading"
          class="text-2xl font-bold tracking-tight text-text-on-light sm:text-3xl md:text-4xl"
        >
          Perguntas frequentes
        </h2>
        <p
          class="mt-4 text-base leading-relaxed text-text-on-light-muted sm:text-lg"
        >
          Ainda tem alguma dúvida? Veja se a resposta está aqui.
        </p>
      </div>

      <!-- FAQ accordion -->
      <div class="scroll-reveal mx-auto mt-12 max-w-3xl">
        <UiAccordionItem
          v-for="faq in faqs"
          :key="faq.question"
          :title="faq.question"
          :dark="false"
        >
          {{ faq.answer }}
        </UiAccordionItem>
      </div>
    </div>
  </section>
</template>
