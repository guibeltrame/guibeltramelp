<script setup lang="ts">
/**
 * UpsellOfferSection — A oferta principal (seção mais forte da página)
 *
 * Reutiliza e amplia o padrão de OfferSection.vue:
 * - bg-dark com radial gradient âmbar mais intenso
 * - Card oferta com border amber/30, resumo de benefícios, preço e CTA
 * - Badge de condição especial para alunos do CD6C
 * - Trust badges abaixo do CTA
 *
 * É a seção visualmente mais impactante da página.
 */

interface Props {
  ctaHref?: string;
}

const props = withDefaults(defineProps<Props>(), {
  ctaHref: 'https://pay.hotmart.com/SUBSTITUIR_LINK_SOLO_MESTRE',
});

const { containerRef } = useScrollReveal();

const included = [
  'Análise Individual e completa do seu primeiro solo',
  'Plano de estudo com o que deve ser melhorado',
  'Feedback de retorno após correção',
];
</script>

<template>
  <section
    id="oferta-solo-mestre"
    ref="containerRef"
    aria-labelledby="upsell-offer-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <!-- Glow mais intenso — sinaliza visualmente a seção principal -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(245,158,11,0.12),transparent)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(245,158,11,0.05),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-amber">
          Oferta exclusiva, somente para novos alunos do CD6C
        </p>
        <h2
          id="upsell-offer-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          Garanta o SOLO RAIO-X
          <span class="text-amber">agora, com condição especial</span>
        </h2>
        <p class="mt-4 text-base leading-relaxed text-text-on-dark-muted sm:text-lg">
          Esta oferta aparece apenas uma vez, imediatamente após a compra do CD6C.
          Depois disso, o valor volta ao normal.
        </p>
      </div>

      <!-- Offer card -->
      <div class="scroll-reveal mx-auto mt-12 max-w-2xl">
        <div
          class="relative overflow-hidden rounded-2xl border border-amber/40 bg-dark-surface p-8 shadow-[0_0_80px_-20px_rgba(245,158,11,0.18)] md:p-10"
        >
          <!-- Linha de destaque no topo do card -->
          <div
            class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber to-transparent"
            aria-hidden="true"
          />

          <!-- Badge de condição especial -->
          <div class="mb-6 flex justify-center">
            <span
              class="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber"
            >
              <Icon name="lucide:tag" class="size-3.5" aria-hidden="true" />
              DESCONTO DISPONÍVEL SOMENTE NESSA PÁGINA
            </span>
          </div>

          <!-- O que está incluso -->
          <h3 class="text-lg font-bold text-text-on-dark">
            Tudo que você recebe:
          </h3>

          <ul class="mt-6 space-y-3" role="list">
            <li
              v-for="item in included"
              :key="item"
              class="flex items-start gap-3"
            >
              <Icon
                name="lucide:check-circle"
                class="mt-0.5 size-5 shrink-0 text-amber"
                aria-hidden="true"
              />
              <span class="text-sm text-text-on-dark-muted sm:text-base">
                {{ item }}
              </span>
            </li>
          </ul>

          <!-- Divider -->
          <div class="my-8 border-t border-dark-muted" />

          <!-- Preço -->
          <div class="text-center">
            <p class="text-sm text-text-on-dark-muted">
              Preço normal:
              <span class="text-lg line-through">R$ 297</span>
            </p>
            <p class="mt-1 text-sm font-semibold text-amber">
              Só para quem acabou de comprar o CD6C:
            </p>
            <p
              class="mt-2 text-4xl font-extrabold tracking-tight text-text-on-dark sm:text-5xl"
            >
              R$ <span class="text-amber">127</span>
            </p>
            <p class="mt-2 text-base text-text-on-dark-muted">
              ou <strong class="text-text-on-dark">12x de R$ 20,37</strong> no cartão
            </p>
          </div>

          <!-- CTA principal -->
          <div class="mt-8">
            <UiCtaButton
              label="QUERO O RAIO-X DO MEU SOLO"
              :href="props.ctaHref"
              target="_blank"
              variant="primary"
              size="lg"
              :full-width="true"
            />
          </div>

          <!-- Recusar oferta -->
          <p class="mt-4 text-center text-xs text-text-on-dark-muted/50">
            Quero evoluir mais rápido e ter direcionamento
          </p>

          <!-- Trust badges -->
          <div
            class="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-text-on-dark-muted"
          >
            <span class="flex items-center gap-1.5">
              <Icon name="lucide:shield-check" class="size-4 text-amber" aria-hidden="true" />
              Compra segura
            </span>
            <span class="flex items-center gap-1.5">
              <Icon name="lucide:lock" class="size-4 text-amber" aria-hidden="true" />
              Dados protegidos
            </span>
            <span class="flex items-center gap-1.5">
              <Icon name="lucide:refresh-cw" class="size-4 text-amber" aria-hidden="true" />
              7 dias de garantia
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
