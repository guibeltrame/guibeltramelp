<script setup lang="ts">
const { containerRef } = useScrollReveal();

const included = [
  "Plano guiado de aplicação prática em vídeo aulas",
  "Acesso vitalício",
  "Material complementar (PDFs, tablaturas, backing tracks)",
  "Suporte para dúvidas",
  "Atualizações gratuitas de conteúdo",
  "Bônus: 10 Melodias Para Você Começar Seus Solos",
  "Bônus: Laboratório de Frases do ROCK/BLUES",
  "Bônus: Rotina Criativa",
];
</script>

<template>
  <section
    id="oferta"
    ref="containerRef"
    aria-labelledby="offer-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(245,158,11,0.08),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-amber">
          Oferta especial com CUPOM de R$200 de DESCONTO
        </p>
        <h2
          id="offer-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          Comece sua transformação
          <span class="text-amber">agora mesmo</span>
        </h2>
      </div>

      <!-- Offer card -->
      <div class="scroll-reveal mx-auto mt-12 max-w-2xl">
        <div
          class="rounded-2xl border border-amber/30 bg-dark-surface p-8 shadow-lg shadow-amber/5 md:p-10"
        >
          <!-- What's included -->
          <h3 class="text-lg font-bold text-text-on-dark">
            Tudo que está incluso:
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

          <!-- Price -->
          <div class="text-center">
            <p class="text-sm text-text-on-dark-muted">
              De <span class="text-lg line-through">R$397</span>
            </p>
            <p
              class="mt-2 text-4xl font-extrabold tracking-tight text-text-on-dark sm:text-5xl"
            >
              R$ <span class="text-amber">197</span>
            </p>
            <p class="mt-2 text-base text-text-on-dark-muted">
              ou <strong class="text-text-on-dark">12x de R$ 20,37</strong> no
              cartão
            </p>
          </div>

          <!-- CTA -->
          <div class="mt-8">
            <UiCtaButton
              label="ACESSO IMEDIATO E VITALÍCIO"
              href="https://pay.hotmart.com/A96166604R?off=utywll39&checkoutMode=10&bid=1776467144426"
              target="_blank"
              variant="primary"
              size="lg"
              :full-width="true"
            />
          </div>

          <!-- Trust badges -->
          <div
            class="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-text-on-dark-muted"
          >
            <span class="flex items-center gap-1.5">
              <Icon
                name="lucide:shield-check"
                class="size-4 text-amber"
                aria-hidden="true"
              />
              Compra segura
            </span>
            <span class="flex items-center gap-1.5">
              <Icon
                name="lucide:lock"
                class="size-4 text-amber"
                aria-hidden="true"
              />
              Dados protegidos
            </span>
            <span class="flex items-center gap-1.5">
              <Icon
                name="lucide:refresh-cw"
                class="size-4 text-amber"
                aria-hidden="true"
              />
              7 dias de garantia
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
