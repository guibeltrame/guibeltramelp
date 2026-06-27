<script setup lang="ts">
/**
 * UpsellVideoSection — Hero da página de upsell Solo Mestre 90 Dias
 *
 * Mantém o mesmo padrão visual do VideoIntro.vue da LP principal:
 * - bg-dark com radial gradient âmbar
 * - Tipografia Inter bold, mesma hierarquia
 * - CTA abaixo do player com UiCtaButton reutilizado
 *
 * Elementos de urgência adicionados (padrão OTO/upsell):
 * - Barra vermelha fixa no topo: aviso de compra não concluída
 * - Barra de progresso animada
 * - Badge âmbar de tempo estimado do vídeo
 */

interface Props {
  /** URL da oferta (Hotmart, Kiwify, etc.) */
  ctaHref?: string;
}

const props = withDefaults(defineProps<Props>(), {
  ctaHref: '#oferta-solo-mestre',
});

const { containerRef } = useScrollReveal();

/**
 * ID do player vturb para o vídeo de upsell.
 * Substituir pelo ID real quando disponível.
 */
const VTURB_PLAYER_ID = 'SUBSTITUIR_PELO_ID_DO_PLAYER_UPSELL';
const VTURB_ACCOUNT_ID = '317ca4a5-62ee-4eb2-8032-cd11077af201';
const VTURB_SCRIPT_SRC = `https://scripts.converteai.net/${VTURB_ACCOUNT_ID}/players/${VTURB_PLAYER_ID}/v4/player.js`;

onMounted(() => {
  if (document.querySelector(`script[src="${VTURB_SCRIPT_SRC}"]`)) return;
  const script = document.createElement('script');
  script.src = VTURB_SCRIPT_SRC;
  script.async = true;
  document.head.appendChild(script);
});
</script>

<template>
  <div>
    <!-- ─── Barra de urgência (topo fixo) ─── -->
    <div
      role="alert"
      class="w-full bg-red-600 px-4 py-2.5 text-center"
    >
      <p class="text-xs font-black uppercase tracking-widest text-white sm:text-sm">
        ⚠️ CALMA! SUA COMPRA NÃO FOI 100% CONCLUÍDA!
      </p>
      <p class="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white/90 sm:text-xs">
        NÃO APERTE "VOLTAR" E NÃO FECHE ESSA PÁGINA
      </p>
    </div>

    <!-- ─── Seção hero ─── -->
    <section
      ref="containerRef"
      aria-labelledby="upsell-hero-heading"
      class="relative overflow-hidden bg-dark px-4 pt-10 pb-20 sm:px-6 sm:pt-14 sm:pb-24 lg:pt-18 lg:pb-28"
    >
      <!-- Ambient glow — mesma abordagem do VideoIntro -->
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(245,158,11,0.07),transparent)]"
        aria-hidden="true"
      />

      <div class="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center">

        <!-- Barra de progresso animada -->
        <div
          class="scroll-reveal mb-6 w-full max-w-sm overflow-hidden rounded-full bg-dark-muted/60 ring-1 ring-white/10"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Progresso da sua compra"
        >
          <div
            class="h-3 rounded-full bg-gradient-to-r from-green-500 to-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]"
            style="width: 75%; animation: progress-pulse 2s ease-in-out infinite;"
          />
        </div>

        <!-- Aviso importante -->
        <p class="scroll-reveal text-center text-lg font-black uppercase tracking-wide text-text-on-dark sm:text-xl">
          ⚠️ AVISO IMPORTANTE
        </p>

        <!-- Headline -->
        <h1
          id="upsell-hero-heading"
          class="scroll-reveal mt-3 max-w-2xl text-center text-base leading-snug text-text-on-dark-muted sm:text-lg"
        >
          Destrave um <strong class="text-amber">BÔNUS EXTRA</strong> na sua área de membros
          ao dar Play no vídeo abaixo <span class="italic">(não é clickbait)</span>
        </h1>

        <!-- Badge âmbar de tempo -->
        <div class="scroll-reveal mt-5">
          <span class="inline-block rounded-md bg-amber px-4 py-2 text-sm font-bold text-dark shadow-lg shadow-amber/20">
            🎬 3 recados importantes em menos de 5 minutos
          </span>
        </div>

        <!-- Player VSL -->
        <div class="scroll-reveal mt-8 w-full sm:mt-10">
          <div
            class="relative w-full overflow-hidden rounded-2xl bg-dark-surface shadow-2xl shadow-black/60 ring-1 ring-white/10"
            style="aspect-ratio: 16 / 9;"
          >
            <ClientOnly>
              <!-- Placeholder até ter o ID do player -->
              <div
                class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-dark-muted"
                aria-label="Área do vídeo de apresentação do Solo Mestre 90 Dias"
              >
                <Icon name="lucide:clapperboard" class="size-12 text-amber/40" aria-hidden="true" />
                <p class="text-sm text-text-on-dark-muted">
                  Insira o player vturb aqui — substitua pelo ID real
                </p>
              </div>
              <!-- Descomente e configure quando tiver o ID do player:
              <vturb-smartplayer
                id="SUBSTITUIR_PELO_ID_DO_PLAYER_UPSELL"
                style="display: block; margin: 0 auto; width: 100%"
              />
              -->
            </ClientOnly>
          </div>
        </div>

        <!-- CTA pós-vídeo -->
        <div class="scroll-reveal mt-8 flex w-full flex-col items-center gap-3 sm:mt-10">
          <UiCtaButton
            label="QUERO O RAIO-X DO MEU SOLO"
            :href="props.ctaHref"
            variant="primary"
            size="lg"
            :full-width="false"
          />
          <p class="text-xs text-text-on-dark-muted/70">
            <Icon name="lucide:lock" class="mr-1 inline size-3.5" aria-hidden="true" />
            Oferta exclusiva para novos alunos do CD6C · Compra 100% segura
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes progress-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.75; }
}
</style>
