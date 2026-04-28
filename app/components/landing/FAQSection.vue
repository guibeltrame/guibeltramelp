<script setup lang="ts">
const { t } = useI18n();
const { containerRef } = useScrollReveal();

const faqs = computed(() =>
  ([1, 2, 3, 4, 5, 6, 7, 8] as const).map((n) => ({
    question: t(`faq.items.${n}.question`),
    answer: t(`faq.items.${n}.answer`),
  })),
);
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
          {{ $t("faq.heading") }}
        </h2>
        <p
          class="mt-4 text-base leading-relaxed text-text-on-light-muted sm:text-lg"
        >
          {{ $t("faq.subheading") }}
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
