<script setup lang="ts">
/**
 * UpsellFAQSection — Perguntas frequentes do Solo Raio-X
 *
 * Reutiliza completamente o padrão de FAQSection.vue:
 * - Mesmo bg-light
 * - Mesmo componente UiAccordionItem (já existente)
 * - Mesma estrutura de header eyebrow + h2 + parágrafo
 * - FAQs adaptadas ao contexto da análise personalizada de solo
 */

const { containerRef } = useScrollReveal();

const faqs = [
  {
    question: 'O que exatamente recebo no Solo Raio-X?',
    answer:
      'Você recebe uma análise individual em vídeo do seu solo: o que está funcionando, os principais erros que limitam sua evolução, como corrigir cada ponto na prática e o que estudar a seguir. Depois de aplicar as correções, você pode enviar um novo vídeo em até 30 dias e receber uma segunda análise.',
  },
  {
    question: 'Como funciona o processo depois que eu compro?',
    answer:
      'Após a confirmação da compra, você conclui o primeiro desafio do CD6C, grava um vídeo tocando seu solo e nos envia. O Gui assiste, faz a análise completa e devolve em vídeo com todos os pontos identificados.',
  },
  {
    question: 'Preciso ter comprado o CD6C para adquirir o Solo Raio-X?',
    answer:
      'Sim. O Solo Raio-X é um complemento direto ao CD6C — a análise é feita com base no método que você acabou de adquirir. Sem o método base, a análise perde o contexto e o direcionamento.',
  },
  {
    question: 'Em quanto tempo recebo minha análise?',
    answer:
      'O prazo de entrega da análise em vídeo é informado no momento da compra. O importante é que você terá um retorno detalhado assim que o Gui assistir ao seu envio.',
  },
  {
    question: 'O que é a segunda análise?',
    answer:
      'Após receber a primeira análise e aplicar as correções indicadas, você tem até 30 dias para enviar um novo vídeo. O Gui analisa novamente para confirmar sua evolução e apontar os próximos passos.',
  },
  {
    question: 'Esse serviço é para iniciantes?',
    answer:
      'É para quem está em processo de aplicação do CD6C. Você não precisa ser avançado — precisa ter o método em mãos e disposição para praticar e corrigir o que for identificado.',
  },
  {
    question: 'E se eu não gostar ou não conseguir usar?',
    answer:
      'Você tem 7 dias de garantia incondicional. Basta solicitar o reembolso dentro do prazo e devolvemos 100% do valor. Sem perguntas.',
  },
];
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="upsell-faq-heading"
    class="bg-light py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <h2
          id="upsell-faq-heading"
          class="text-2xl font-bold tracking-tight text-text-on-light sm:text-3xl md:text-4xl"
        >
          Perguntas frequentes
        </h2>
        <p class="mt-4 text-base leading-relaxed text-text-on-light-muted sm:text-lg">
          Ainda tem alguma dúvida sobre o programa? Veja se a resposta está aqui.
        </p>
      </div>

      <!-- FAQ accordion — reutilizando UiAccordionItem existente -->
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
