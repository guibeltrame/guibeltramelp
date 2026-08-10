<script setup lang="ts">
const VTURB_PLAYER_SCRIPT =
  "https://scripts.converteai.net/317ca4a5-62ee-4eb2-8032-cd11077af201/players/6a70d78cdd1d1ca7bf80dfde/v4/player.js";

// Otimização de carregamento: marca o instante de início o mais cedo possível
if (import.meta.client) {
  // @ts-ignore
  window._plt =
    // @ts-ignore
    window._plt ||
    (performance?.timeOrigin
      ? performance.timeOrigin + performance.now()
      : Date.now());
}

useHead({
  link: [
    {
      rel: "preload",
      href: "https://scripts.converteai.net/317ca4a5-62ee-4eb2-8032-cd11077af201/players/6a70d78cdd1d1ca7bf80dfde/v4/player.js",
      as: "script",
    },
    {
      rel: "preload",
      href: "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js",
      as: "script",
    },
    {
      rel: "preload",
      href: "https://cdn.converteai.net/317ca4a5-62ee-4eb2-8032-cd11077af201/6a70d6527cca3860e81a6ce1/main.m3u8",
      as: "fetch",
    },
    { rel: "dns-prefetch", href: "https://cdn.converteai.net" },
    { rel: "dns-prefetch", href: "https://scripts.converteai.net" },
    { rel: "dns-prefetch", href: "https://images.converteai.net" },
    { rel: "dns-prefetch", href: "https://license.vturb.com" },
  ],
});

onMounted(() => {
  if (document.querySelector(`script[src="${VTURB_PLAYER_SCRIPT}"]`)) return;

  const script = document.createElement("script");
  script.src = VTURB_PLAYER_SCRIPT;
  script.async = true;
  document.head.appendChild(script);
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
            <span class="text-amber">INDEPENDÊNCIA E MUSICALIDADE</span> NA GUITARRA NÃO DEPENDE APENAS DE TEORIA MUSICAL
          </h2>
          <h3
            class="mt-5 text-[17px] font-light leading-relaxed text-text-on-dark sm:mt-6 sm:text-[16px] md:text-[18px] lg:text-[19px]"
          >
            Você não precisa perder horas com exercícios mecânicos de escala, técnica ou assuntos avançados para ter fluência e também começar a criar seus próprios solos. Assista ao vídeo:
          </h3>
        </div>

        <div class="video-intro-video-shell w-full min-h-0 min-w-0">
          <div
  class="video-wrapper relative min-h-0 w-full shrink-0 overflow-visible bg-dark-surface shadow-2xl shadow-black/50 ring-1 ring-white/10"
>
  <ClientOnly>
    <div class="rounded-xl overflow-hidden">
      <vturb-smartplayer
        id="vid-6a70d78cdd1d1ca7bf80dfde"
        style="display: block; margin: 0 auto; width: 100%"
      >
        <div
          class="vturb-player-placeholder"
          style="position: relative; width: 100%; padding: 56.25% 0 0; z-index: 0; background-color: black"
        ></div>
      </vturb-smartplayer>
    </div>
  </ClientOnly>
</div>
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
</style>
