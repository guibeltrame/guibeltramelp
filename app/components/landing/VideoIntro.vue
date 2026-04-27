<script setup lang="ts">
const props = defineProps<{
  videoId: string;
}>();

const emit = defineEmits<{
  released: [];
}>();

/**
 * Tempo mínimo de vídeo (em segundos) para liberar a landing page.
 * DEBUG: ajuste este valor para testar rapidamente. Valor final de produção: ~duração total do vídeo.
 */
const UNLOCK_TIME_SECONDS = 1180;

/** Chave estável para progresso do gate do vídeo (por domínio). */
const WATCH_PROGRESS_STORAGE_KEY = "guibeltramelp:video-intro:watch-progress";
const WATCH_PROGRESS_STORAGE_VERSION = 1 as const;

type WatchProgressPayload = {
  v: typeof WATCH_PROGRESS_STORAGE_VERSION;
  videoId: string;
  maxWatchedSec: number;
};

const PLAYER_EL_ID = "yt-intro-player";
const isPlayerReady = ref(false);
const isReleased = ref(false);
/** Pico na linha do tempo do vídeo nesta sessão (gate + persistência). */
const peakWatchedSeconds = ref(0);
let lastPersistedIntegerSecond = -1;
/**
 * Progresso salvo lido uma vez ao montar; usado para `seekTo` ao dar play e valor inicial do pico.
 */
let sessionStoredBaseline = 0;
/** Usuário já tocou no CTA e o fluxo "começou" (overlay de bloqueio ativo). */
const hasUserStarted = ref(false);
/** Sincronizado com o YouTube: reproduzindo (inclui buffering) ou pausado. */
const isYtPlaying = ref(false);

let player: {
  destroy(): void;
  getCurrentTime(): number;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  playVideo(): void;
  pauseVideo(): void;
  unMute(): void;
  setVolume(volume: number): void;
} | null = null;
let timeCheckInterval: ReturnType<typeof setInterval> | null = null;

function readStoredPeakSeconds(): number {
  if (!import.meta.client) return 0;
  try {
    const raw = localStorage.getItem(WATCH_PROGRESS_STORAGE_KEY);
    if (!raw) return 0;
    const data = JSON.parse(raw) as Partial<WatchProgressPayload>;
    if (
      data.v !== WATCH_PROGRESS_STORAGE_VERSION ||
      typeof data.maxWatchedSec !== "number" ||
      !Number.isFinite(data.maxWatchedSec) ||
      typeof data.videoId !== "string"
    ) {
      return 0;
    }
    if (data.videoId !== props.videoId) return 0;
    return Math.max(0, data.maxWatchedSec);
  } catch {
    return 0;
  }
}

function writeStoredProgress(peakSec: number): void {
  if (!import.meta.client) return;
  try {
    const payload: WatchProgressPayload = {
      v: WATCH_PROGRESS_STORAGE_VERSION,
      videoId: props.videoId,
      maxWatchedSec: Math.max(0, peakSec),
    };
    localStorage.setItem(WATCH_PROGRESS_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    /* quota / private mode */
  }
}

/** Evita escrita a cada tick: persiste quando o segundo inteiro do pico avança. */
function persistProgressThrottled(peakSec: number): void {
  const intSec = Math.floor(peakSec);
  if (intSec <= lastPersistedIntegerSecond) return;
  lastPersistedIntegerSecond = intSec;
  writeStoredProgress(peakSec);
}

function flushPersistProgress(peakSec: number): void {
  writeStoredProgress(peakSec);
  lastPersistedIntegerSecond = Math.floor(peakSec);
}

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
    videoId: props.videoId,
    playerVars: {
      controls: 0,
      disablekb: 1,
      fs: 0,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      iv_load_policy: 3,
    },
    events: {
      onReady: () => {
        isPlayerReady.value = true;
      },
      onStateChange: (e: { data: number }) => {
        if (
          e.data === YT.PlayerState.PLAYING ||
          e.data === YT.PlayerState.BUFFERING
        ) {
          isYtPlaying.value = true;
        } else {
          isYtPlaying.value = false;
        }
        if (e.data === YT.PlayerState.ENDED) {
          release();
        }
      },
      onError: () => {
        release();
      },
    },
  });
}

function startTimeCheck() {
  timeCheckInterval = setInterval(() => {
    if (!player) return;
    const rawT = player.getCurrentTime();
    const fromPlayer = Number.isFinite(rawT) ? Math.max(0, rawT) : 0;
    peakWatchedSeconds.value = Math.max(peakWatchedSeconds.value, fromPlayer);
    persistProgressThrottled(peakWatchedSeconds.value);
    if (peakWatchedSeconds.value >= UNLOCK_TIME_SECONDS) {
      release();
    }
  }, 500);
}

function stopTimeCheck() {
  if (timeCheckInterval) {
    clearInterval(timeCheckInterval);
    timeCheckInterval = null;
  }
}

function release() {
  if (isReleased.value) return;
  peakWatchedSeconds.value = Math.max(
    peakWatchedSeconds.value,
    UNLOCK_TIME_SECONDS,
  );
  flushPersistProgress(peakWatchedSeconds.value);
  isReleased.value = true;
  stopTimeCheck();
  document.documentElement.style.overflow = "";
  emit("released");
}

function startPlayback() {
  if (!player || hasUserStarted.value) return;
  if (sessionStoredBaseline > 0) {
    player.seekTo(sessionStoredBaseline, true);
  }
  player.unMute();
  player.setVolume(100);
  player.playVideo();
  hasUserStarted.value = true;
  startTimeCheck();
}

function togglePlayPause() {
  if (!player) return;
  if (isYtPlaying.value) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}

onMounted(async () => {
  sessionStoredBaseline = readStoredPeakSeconds();
  peakWatchedSeconds.value = sessionStoredBaseline;
  lastPersistedIntegerSecond = Math.floor(sessionStoredBaseline);

  if (sessionStoredBaseline >= UNLOCK_TIME_SECONDS) {
    release();
  } else {
    document.documentElement.style.overflow = "hidden";
  }

  try {
    await loadYouTubeAPI();
    createPlayer();
  } catch {
    release();
  }
});

onBeforeUnmount(() => {
  stopTimeCheck();
  if (import.meta.client && !isReleased.value) {
    flushPersistProgress(peakWatchedSeconds.value);
  }
  player?.destroy();
  document.documentElement.style.overflow = "";
});
</script>

<template>
  <section
    class="relative flex min-h-dvh items-center justify-center bg-dark px-4 py-6 sm:px-6 sm:py-8 lg:py-10"
    aria-label="Vídeo de apresentação do curso"
  >
    <!-- Ambient glow -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(245,158,11,0.06),transparent)]"
      />
    </div>

    <div
      class="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center"
    >
      <!-- Header -->
      <div class="mb-3 text-center sm:mb-5 lg:mb-6">
        <p
          class="text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm"
        >
          Você já sabe tocar,
        </p>
        <h2
          class="mt-2 text-base font-bold leading-tight text-text-on-dark sm:text-2xl md:text-3xl"
        >
          MAS NA HORA DE
          <span class="text-amber">CRIAR OU IMPROVISAR</span> SEMPRE
          <p>REPETE A MESMA COISA</p>
        </h2>
        <h3
          class="mt-2 text-sm font-bold leading-snug text-text-on-dark sm:text-base md:text-lg"
        >
          Veja como ter ideias infinitas para criar frases e melodias sem
          depender de inspiração, independente do seu nível técnico e sem
          escalas complexas.

          <p class="mt-3 sm:mt-6 lg:mt-8">Dê o play no vídeo abaixo:</p>
        </h3>
      </div>

      <!-- Video -->
      <div
        class="video-wrapper relative overflow-hidden rounded-xl bg-dark-surface shadow-2xl shadow-black/50 ring-1 ring-white/10"
      >
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

        <div :id="PLAYER_EL_ID" />

        <!--
          Overlay clique-bloqueador: impede que o usuário pause o vídeo
          clicando no iframe ou interaja com o branding do YouTube.
          Aparece somente após o vídeo iniciar; antes disso, o próprio
          botão de play cobre toda a área do player.
        -->
        <div
          v-if="isPlayerReady && hasUserStarted"
          class="absolute inset-0 z-20"
          aria-hidden="true"
        />

        <!-- Controle play/pause estilo barra do YouTube (canto inferior esquerdo) -->
        <div
          v-if="isPlayerReady && hasUserStarted"
          class="pointer-events-none absolute inset-0 z-30 flex items-end"
        >
          <button
            type="button"
            class="yt-like-transport pointer-events-auto mb-2.5 ml-2.5 flex size-9 shrink-0 items-center justify-center rounded-sm bg-black/60 text-white shadow-sm ring-1 ring-white/10 transition-[background,transform] hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-0 active:scale-95 sm:mb-3 sm:ml-3 sm:size-10"
            :aria-pressed="isYtPlaying"
            :aria-label="isYtPlaying ? 'Pausar o vídeo' : 'Reproduzir o vídeo'"
            @click="togglePlayPause"
          >
            <svg
              v-if="isYtPlaying"
              class="size-[18px] shrink-0 sm:size-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <!-- Barras centradas no viewBox 24×24 (o path padrão do heroicons fica à esquerda) -->
              <path d="M6.5 5.25h2v13.5h-2V5.25ZM15.5 5.25h2v13.5h-2V5.25Z" />
            </svg>
            <svg
              v-else
              class="ml-0.5 size-[18px] sm:size-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              />
            </svg>
          </button>
        </div>

        <!-- Botão Play: cobre o player até o usuário iniciar o vídeo -->
        <Transition name="play-cta-fade">
          <button
            v-if="isPlayerReady && !hasUserStarted"
            type="button"
            class="play-cta group absolute inset-0 z-30 flex items-center justify-center bg-black/45 backdrop-blur-[1px] transition-colors duration-200 hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            aria-label="Iniciar o vídeo"
            @click="startPlayback"
          >
            <span
              class="pointer-events-none flex items-center gap-2.5 rounded-xl bg-amber px-5 py-3 text-sm font-bold uppercase tracking-wide text-dark shadow-xl shadow-black/40 transition-transform duration-200 group-hover:scale-[1.04] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
            >
              <svg
                class="size-5 sm:size-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                />
              </svg>
              Toque para assistir o vídeo
            </span>
          </button>
        </Transition>
      </div>

      <!-- CTA + Scroll indicator (aparecem após liberação) -->
      <Transition name="cta-reveal">
        <div
          v-if="isReleased"
          class="mt-6 flex flex-col items-center gap-5 sm:mt-8"
        >
          <a
            href="https://pay.hotmart.com/A96166604R?off=utywll39&checkoutMode=10&bid=1776467144426"
            target="_blank"
            rel="noopener noreferrer"
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
              <svg
                class="size-5 text-amber/70"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-3.96a.75.75 0 1 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0l-5.25-5.25a.75.75 0 1 1 1.06-1.06l3.96 3.96V3.75A.75.75 0 0 1 10 3Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="-mt-2.5 size-5 text-amber/40"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-3.96a.75.75 0 1 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0l-5.25-5.25a.75.75 0 1 1 1.06-1.06l3.96 3.96V3.75A.75.75 0 0 1 10 3Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.spinner-fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.spinner-fade-leave-to {
  opacity: 0;
}

/* Botão "Toque para assistir" — fade-out suave após o clique */
.play-cta-fade-leave-active {
  transition: opacity 0.35s ease-out;
}

.play-cta-fade-leave-to {
  opacity: 0;
}

/* Pulso sutil no botão de play para chamar atenção */
.play-cta > span {
  animation: play-cta-pulse 2s ease-in-out infinite;
}

@keyframes play-cta-pulse {
  0%,
  100% {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
    transform: scale(1);
  }
  50% {
    box-shadow:
      0 14px 32px -6px rgba(0, 0, 0, 0.55),
      0 0 0 8px rgba(245, 158, 11, 0.18);
    transform: scale(1.03);
  }
}

/*
 * Wrapper do player: preserva proporção 16:9 e garante que o vídeo
 * caiba na altura útil do viewport, encolhendo proporcionalmente
 * (largura E altura) quando a altura é o fator limitante.
 *
 * --reserved: espaço vertical aproximado consumido pelo header,
 * paddings da section e respiro visual. Reduzido em telas curtas
 * para que o vídeo permaneça com tamanho confortável.
 */
.video-wrapper {
  --reserved: 17rem;
  width: 100%;
  max-width: min(100%, calc((100dvh - var(--reserved)) * 16 / 9));
  aspect-ratio: 16 / 9;
  margin-inline: auto;
}

@media (min-width: 640px) {
  .video-wrapper {
    --reserved: 20rem;
  }
}

@media (min-width: 1024px) {
  .video-wrapper {
    --reserved: 22rem;
  }
}

/* Fallback para navegadores sem suporte a 100dvh */
@supports not (height: 100dvh) {
  .video-wrapper {
    max-width: min(100%, calc((100vh - var(--reserved)) * 16 / 9));
  }
}

.video-wrapper :deep(iframe) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* CTA reveal transition */
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

/* CTA — pulso contínuo para chamar atenção (pausa no hover/focus) */
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

  .play-cta > span {
    animation: none;
    transform: none;
  }
}
</style>
