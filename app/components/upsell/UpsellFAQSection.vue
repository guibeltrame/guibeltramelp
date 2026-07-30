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
    question: 'O que exatamente recebo no PLAY RAIO-X?',
    answer:
      'Você recebe uma análise, plano de estudo e dois encontros ao vivo de 45 minutos diretamente comigo.',
  },
  {
    question: 'Como funciona o processo depois que eu compro?',
    answer:
      'Após a confirmação da compra você receberá um formulário que poderá ser enviado em até 45 dias para pré-avaliação. A pré-avaliação é feita para termos maior efetividade nos nossos encontros.',
  },
  {
    question: 'Preciso ter comprado o Ciência das 6 Cordas para adquirir o Play Raio-X?',
    answer:
      'Sim. Está oferta não é vendida com essas condições após fechar essa página.',
  },
  {
    question: 'Em quanto tempo posso agendar meu primeiro encontro?',
    answer:
      'O prazo de entrega do formulário pode ser entregue em até 45 dias para agendarmos nossa primeira sessão. Eu entrarei em contato para verificar a disponibilidade de agenda.',
  },
  {
    question: 'Posso tirar dúvidas durante o programa?',
    answer:
      'Sim, você tem acesso ao meu contato pessoal para que até o fim do programa você possa enviar vídeos, dúvidas e você tenha o maior aproveitamento possível.',
  },
    {
    question: 'Consigo reassistir a aula?',
    answer:
      'Sim, a sua aula individual é gravada e enviada diretamente no seu e-mail ou whatsapp para que você possa reassistir os conceitos trabalhados.',
  },
  {
    question: 'Funciona para iniciantes?',
    answer:
      'Sim, esse encontro é personalizado de acordo com o momento em que você se encontra, independente do seu nível. O plano de estudo será sugerido e baseado nisso.',
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
