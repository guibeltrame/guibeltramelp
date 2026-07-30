<script setup lang="ts">
/**
 * Página de Upsell — Solo Mestre 90 Dias
 * Rota: /raio-xsoloup
 *
 * Exibida imediatamente após a compra do Ciência das 6 Cordas.
 * O visitante já é cliente — o objetivo é apresentar o programa
 * de acompanhamento como próximo passo lógico.
 *
 * Componentes reutilizados da LP principal:
 * - UiCtaButton (dentro de cada seção)
 * - UiAccordionItem (dentro de UpsellFAQSection)
 * - LandingFooterSection (footer global)
 * - useScrollReveal (composable)
 *
 * Padrões visuais preservados:
 * - Tokens de cor: dark, amber, light e variantes
 * - Tipografia: Inter, mesma hierarquia eyebrow/h2/body
 * - Cards: rounded-2xl border-dark-muted bg-dark-surface
 * - Radial gradients âmbar como accent
 * - Seções alternando bg-dark e bg-light
 * - Motion: scroll-reveal + stagger-children
 * - Spacing: py-16 sm:py-20 md:py-24 lg:py-32
 */

/** Link de compra do Solo Mestre 90 Dias — substituir pelo real */
const CHECKOUT_HREF = 'https://pay.hotmart.com/SUBSTITUIR_LINK_SOLO_MESTRE';

useSeoMeta({
  title: 'Play RAIO-X',
  description:
    'Você acabou de adquirir o CD6C. Agora conheça o programa de acompanhamento que transforma o método em resultado: o Solo Mestre 90 Dias.',
  robots: 'noindex, nofollow', // Página de upsell — não indexar
  ogTitle: 'Solo Mestre 90 Dias — Acompanhamento Exclusivo',
  ogDescription:
    'Plano personalizado, encontros em grupo, feedback direto e comunidade exclusiva durante 90 dias.',
  ogType: 'website',
  ogLocale: 'pt_BR',
});

useHead({
  htmlAttrs: { lang: 'pt-BR' },
});
</script>

<template>
  <div>
    <!-- 1. Vídeo principal + CTA acima da dobra -->
    <UpsellVideoSection :cta-href="CHECKOUT_HREF" />

    <main id="main-content">
      <!-- 2. Prova social e resultados -->
      <UpsellProofSection />

      <!-- 3. O que é o Solo Mestre 90 Dias -->
      <UpsellWhatIsSection />

      <!-- 4. O que você vai receber (deliverables) -->
      <UpsellDeliverablesSection />

      <!-- 5. Oferta — seção mais forte visualmente -->
      <UpsellOfferSection :cta-href="CHECKOUT_HREF" />

      <!-- 6. Garantia -->
      <UpsellGuaranteeSection />

      <!-- 7. FAQ -->
      <UpsellFAQSection />

      <!-- 8. CTA Final -->
      <UpsellFinalCTASection :cta-href="CHECKOUT_HREF" />

      <!-- 9. Footer — reaproveitando o componente global -->
      <LandingFooterSection />
    </main>
  </div>
</template>
