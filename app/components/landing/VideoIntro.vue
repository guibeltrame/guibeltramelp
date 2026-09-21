<script setup lang="ts">
const YOUTUBE_VIDEO_ID = "DOakKfcLuJE";

/**
 * Tempo (em segundos) a partir do qual o botão de compra aparece.
 * 24:58 = 24 * 60 + 58 = 1498 segundos.
 */
const CTA_APPEAR_AT_SECONDS = 24 * 60 + 58; // 24:58

const PLAYER_EL_ID = "yt-intro-player";
const isPlayerReady = ref(false);
const isCtaVisible = ref(false);
let player: { destroy(): void; getCurrentTime(): number } | null = null;
let timeCheckInterval: ReturnType<typeof setInterval> | null = null;

useHead({
  link: [
    { rel: "dns-prefetch", href: "https://www.youtube.com" },
    { rel: "dns-prefetch", href: "https://i.ytimg.com" },
  ],
});

function loadYouTubeAPI(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).YT?.Player) {
      resolve();
      return;
    }
    const timeout = setTimeout(
      () => reject(new Error("YouTube API timeout")),
      15_000,
    );
    const prev = (window as any).onYouTubeIframeAPIReady;
    (window as any).onYouTubeIframeAPIReady = () => {
      clearTimeout(timeout);
      prev?.();
      resolve();
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.onerror = () => {
      clearTimeout(timeout);
      reject(new Error("YouTube API load failed"));
    };
    document.head.appendChild(tag);
  });
}

function createPlayer() {
  const YT = (window as any).YT;
  player = new YT.Player(PLAYER_EL_ID, {
    videoId: YOUTUBE_VIDEO_ID,
    playerVars: {
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
    },
    events: {
      onReady: () => {
        isPlayerReady.value = true;
        startTimeCheck();
      },
      onStateChange: (e: { data: number }) => {
        // Libera o CTA quando o vídeo termina, independentemente da minutagem
        if (e.data === YT.PlayerState.ENDED) {
          showCta();
        }
      },
      onError: () => {
        showCta();
      },
    },
  });
}

function startTimeCheck() {
  timeCheckInterval = setInterval(() => {
    if (!player) return;
    if (player.getCurrentTime() >= CTA_APPEAR_AT_SECONDS) {
      showCta();
    }
  }, 500);
}

function stopTimeCheck() {
  if (timeCheckInterval) {
    clearInterval(timeCheckInterval);
    timeCheckInterval = null;
  }
}

function showCta() {
  if (isCtaVisible.value) return;
  isCtaVisible.value = true;
  stopTimeCheck();
}

onMounted(async () => {
  try {
    await loadYouTubeAPI();
    createPlayer();
  } catch {
    showCta();
  }
});

onBeforeUnmount(() => {
  stopTimeCheck();
  player?.destroy();
});
</script>

<template>
  <section
    class="video-intro-section relative flex min-h-dvh items-center justify-center bg-dark px-4 pt-6 pb-28 sm:px-6 sm:pt-8 sm:pb-32 lg:pt-10 lg:pb-36"
    aria-label="Vídeo de apresentação do curso"
  >
    <!-- Ambient glow -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(245,158,11,0.06),transparent)]"
      />
    </div>

    <!-- Background professor image — lateral esquerda, decorativo -->
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-[45%] max-w-[420px] overflow-hidden"
      aria-hidden="true"
    >
      <img
        src="/images/prof.jpeg"
        alt=""
        class="prof-bg-img absolute bottom-0 left-0 h-[90%] w-auto max-w-none object-contain object-bottom opacity-30 mix-blend-luminosity select-none"
        draggable="false"
        fetchpriority="low"
        loading="lazy"
      />
      <!-- fade lateral da direita para não cortar bruscamente -->
      <div class="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-dark" />
    </div>

    <div
      class="video-intro-inner relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center"
    >
      <!-- Copy + vídeo: agrupados para layout compacto em landscape / altura curta -->
      <div class="video-intro-main w-full">
        <!-- Header -->
        <!--
          IDEIA GUARDADA (copy alternativo testado):
          Headline:  APRENDA A <span class="text-amber">CRIAR SOLOS MAIS BONITOS</span> E DESCUBRA SUA IDENTIDADE NA GUITARRA
          Subhead:   Domine o braço da guitarra e descubra como <strong>criar solos</strong>
                     sem precisar de <strong>escalas complexas</strong> ou <strong>teoria avançada</strong>. Mesmo que hoje você
                     não entende o que toca ou ache que não tem criatividade.
                     Assista ao vídeo:
        -->
        <div class="video-intro-copy mb-5 text-center sm:mb-7 lg:mb-8">
          <h2
            class="mt-4 text-[24px] font-bold leading-tight text-text-on-dark sm:mt-5 sm:text-[28px] md:text-[32px] lg:text-[34px]"
          >
                        VOCÊ NÃO PRECISA ESTUDAR ANOS SEM DIREÇÃO PARA <span class="text-amber">CONQUISTAR SUA FLUÊNCIA NA GUITARRA</span>
          </h2>
          <h3
            class="mt-5 text-[17px] font-light leading-relaxed text-text-on-dark sm:mt-6 sm:text-[16px] md:text-[18px] lg:text-[19px]"
          >
            Entenda como organizar teoria, repertório e criatividade para desenvolver sua musicalidade. Assista ao vídeo:
          </h3>
        </div>

        <div class="video-intro-video-shell w-full min-h-0 min-w-0">
          <div
            class="video-wrapper relative min-h-0 w-full shrink-0 overflow-hidden rounded-xl bg-dark-surface shadow-2xl shadow-black/50 ring-1 ring-white/10"
          >
            <!-- Spinner enquanto o player não está pronto -->
            <Transition name="spinner-fade">
              <div
                v-if="!isPlayerReady"
                class="absolute inset-0 z-10 flex items-center justify-center bg-dark-surface"
              >
                <div
                  class="size-10 animate-spin rounded-full border-[3px] border-dark-muted border-t-amber sm:size-12"
                />
              </div>
            </Transition>
            <div :id="PLAYER_EL_ID" class="absolute inset-0 w-full h-full" />
          </div>

          <!-- Botão de compra — aparece na minutagem definida em CTA_APPEAR_AT_SECONDS -->
          <Transition name="cta-reveal">
            <div
              v-if="isCtaVisible"
              class="mt-6 flex flex-col items-center gap-5 sm:mt-8"
            >
              <a
                href="#oferta"
                class="cta-glow cta-pulse group relative inline-flex items-center gap-2.5 rounded-xl bg-amber px-8 py-4 text-base font-bold text-dark shadow-lg shadow-amber/25 transition-all duration-300 hover:bg-amber-light hover:shadow-xl hover:shadow-amber/35 focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-dark active:scale-[0.97] active:bg-amber-dark sm:px-10 sm:py-4.5 sm:text-lg"
              >
                <span>ACESSO IMEDIATO E VITALÍCIO</span>
                <svg
                  class="size-5 transition-transform duration-300 group-hover:translate-x-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <!-- Scroll indicator -->
              <div class="flex flex-col items-center gap-2 pt-1">
                <p class="text-xs tracking-wide text-text-on-dark-muted sm:text-sm">
                  Descubra o que preparamos para você
                </p>
                <div
                  class="scroll-indicator flex flex-col items-center"
                  aria-hidden="true"
                >
                  <svg class="size-5 text-amber/70" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-3.96a.75.75 0 1 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0l-5.25-5.25a.75.75 0 1 1 1.06-1.06l3.96 3.96V3.75A.75.75 0 0 1 10 3Z" clip-rule="evenodd" />
                  </svg>
                  <svg class="-mt-2.5 size-5 text-amber/40" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-3.96a.75.75 0 1 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0l-5.25-5.25a.75.75 0 1 1 1.06-1.06l3.96 3.96V3.75A.75.75 0 0 1 10 3Z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
 * Bloco copy + vídeo: coluna no portrait; em landscape com pouca altura
 * vira grid para o player ficar na faixa útil sem ser empurrado pra fora.
 */
.video-intro-inner {
  min-width: 0;
  min-height: 0;
  /* Altura de referência estável para zoom + mobile (progressive enhancement). */
  --intro-vh: 100vh;
}

@supports (height: 100dvh) {
  .video-intro-inner {
    --intro-vh: min(100vh, 100dvh);
  }
}

@supports (height: 100svh) {
  .video-intro-inner {
    --intro-vh: min(100svh, 100vh);
  }
}

@supports (height: 100svh) and (height: 100dvh) {
  .video-intro-inner {
    --intro-vh: min(100svh, 100dvh);
  }
}

.video-intro-main {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  min-width: 0;
  min-height: 0;
}

.video-intro-video-shell {
  width: 100%;
  min-width: 0;
  min-height: 0;
}

@media (orientation: landscape) and (max-height: 37.5rem) {
  .video-intro-section {
    padding-block: 0.375rem;
    padding-inline: 0.5rem;
  }

  @media (min-width: 640px) {
    .video-intro-section {
      padding-inline: 1rem;
    }
  }

  .video-intro-main {
    display: grid;
    grid-template-columns: minmax(0, min(38vw, 14rem)) minmax(0, 1fr);
    grid-template-rows: minmax(0, calc(var(--intro-vh) - 0.75rem));
    column-gap: 0.5rem;
    align-items: stretch;
    align-content: center;
    width: 100%;
    max-width: 100%;
    min-height: 0;
    box-sizing: border-box;
  }

  .video-intro-copy {
    grid-column: 1;
    grid-row: 1;
    margin-bottom: 0 !important;
    text-align: left;
    align-self: start;
    min-height: 0;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
    padding-right: 0.125rem;
  }

  .video-intro-video-shell {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-height: 100%;
    min-height: 0;
    min-width: 0;
  }
}

/*
 * Wrapper do player: 16:9 com teto em viewport estável + --reserved em clamp
 * (rem + svh) para não “explodir” só em rem com zoom do browser.
 */
.video-wrapper {
  --v-cap: var(--intro-vh);
  --reserved: clamp(8.5rem, 11svh + 5.25rem, 20rem);
  width: 100%;
  max-width: min(
    100%,
    max(0px, calc((var(--v-cap) - var(--reserved)) * 16 / 9))
  );
  max-height: max(0px, calc(var(--v-cap) - var(--reserved)));
  aspect-ratio: 16 / 9;
  margin-inline: auto;
}

@media (orientation: landscape) and (max-height: 37.5rem) {
  .video-wrapper {
    --v-cap: var(--intro-vh);
    --reserved: 0;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    aspect-ratio: 16 / 9;
  }
}

@media (min-width: 640px) {
  .video-wrapper {
    --reserved: clamp(10rem, 12svh + 5.75rem, 21rem);
  }
}

@media (min-width: 1024px) {
  .video-wrapper {
    --reserved: clamp(11rem, 13svh + 6rem, 22rem);
  }
}

.video-wrapper :deep(iframe) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Spinner fade-out */
.spinner-fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.spinner-fade-leave-to {
  opacity: 0;
}

/* CTA reveal */
.cta-reveal-enter-active {
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.cta-reveal-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

/* Ambient glow behind CTA button */
.cta-glow::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(251, 191, 36, 0.4),
    rgba(245, 158, 11, 0.15),
    rgba(217, 119, 6, 0.4)
  );
  opacity: 0;
  filter: blur(12px);
  transition: opacity 0.3s ease;
  z-index: -1;
}
.cta-glow:hover::before {
  opacity: 1;
}

/* CTA — pulso contínuo */
.cta-glow.cta-pulse {
  animation: cta-btn-pulse 2.1s ease-in-out infinite;
}
.cta-glow.cta-pulse::before {
  opacity: 0.28;
  animation: cta-halo-pulse 2.1s ease-in-out infinite;
}
.cta-glow.cta-pulse:hover,
.cta-glow.cta-pulse:focus-visible {
  animation: none;
}
.cta-glow.cta-pulse:hover::before,
.cta-glow.cta-pulse:focus-visible::before {
  animation: none;
  opacity: 1;
}
@keyframes cta-btn-pulse {
  0%,
  100% {
    box-shadow:
      0 10px 15px -3px rgba(245, 158, 11, 0.22),
      0 4px 6px -4px rgba(245, 158, 11, 0.12),
      0 0 0 0 rgba(245, 158, 11, 0);
    transform: scale(1);
  }
  50% {
    box-shadow:
      0 16px 28px -4px rgba(245, 158, 11, 0.42),
      0 8px 14px -6px rgba(245, 158, 11, 0.22),
      0 0 0 10px rgba(245, 158, 11, 0.1);
    transform: scale(1.03);
  }
}
@keyframes cta-halo-pulse {
  0%,
  100% {
    opacity: 0.22;
    filter: blur(11px);
  }
  50% {
    opacity: 0.62;
    filter: blur(15px);
  }
}

/* Scroll indicator — cascading bounce */
.scroll-indicator {
  animation: scroll-bounce 2.4s ease-in-out infinite;
}
@keyframes scroll-bounce {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  50% {
    transform: translateY(6px);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cta-reveal-enter-active {
    transition: none;
  }
  .scroll-indicator {
    animation: none;
  }
  .cta-glow.cta-pulse {
    animation: none;
    transform: none;
  }
  .cta-glow.cta-pulse::before {
    animation: none;
    opacity: 0;
  }
  .cta-glow.cta-pulse:hover::before,
  .cta-glow.cta-pulse:focus-visible::before {
    opacity: 1;
  }
}
</style>
