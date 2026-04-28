<script setup lang="ts">
const { t } = useI18n();
const { containerRef } = useScrollReveal();

/** Vimeo: https://vimeo.com/1074793365 */
const AUTHORITY_VIMEO_ID = "1074793365";

function vimeoEmbedSrc(id: string) {
  const params = new URLSearchParams({
    badge: "0",
    autopause: "0",
    player_id: "0",
    dnt: "1",
  });
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
}

const credentials = computed(() => [
  { icon: "lucide:guitar", text: t("authority.credentials.1") },
  { icon: "lucide:users", text: t("authority.credentials.2") },
  { icon: "lucide:award", text: t("authority.credentials.3") },
]);
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="authority-heading"
    class="bg-light py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <!-- Vídeo (estúdio — banda autoral) -->
        <figure
          class="scroll-reveal flex flex-col items-center justify-center lg:order-2"
        >
          <div class="relative w-full max-w-sm">
            <div
              class="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-black shadow-[0_24px_60px_-28px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
            >
              <iframe
                :src="vimeoEmbedSrc(AUTHORITY_VIMEO_ID)"
                class="pointer-events-auto absolute left-1/2 top-0 h-full w-[calc(100%*64/27)] max-w-none -translate-x-1/2 border-0"
                :title="$t('authority.videoTitle')"
                allow="
                  autoplay;
                  fullscreen;
                  picture-in-picture;
                  clipboard-write;
                  encrypted-media;
                  web-share;
                "
                referrerpolicy="strict-origin-when-cross-origin"
                loading="lazy"
              />
            </div>
            <!-- Decorative accent -->
            <div
              class="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border-2 border-amber-dark/20"
              aria-hidden="true"
            />
          </div>
          <figcaption
            class="mt-4 max-w-sm px-1 text-center text-xs font-medium italic leading-relaxed tracking-wide text-text-on-light-muted sm:text-sm"
          >
            {{ $t("authority.videoCaption") }}
          </figcaption>
        </figure>

        <!-- Bio -->
        <div class="lg:order-1">
          <p
            class="scroll-reveal text-sm font-semibold uppercase tracking-widest text-amber-dark"
          >
            {{ $t("authority.eyebrow") }}
          </p>

          <h2
            id="authority-heading"
            class="scroll-reveal mt-3 text-2xl font-bold tracking-tight text-text-on-light sm:text-3xl md:text-4xl"
          >
            {{ $t("authority.heading") }}
          </h2>

          <div
            class="scroll-reveal mt-6 space-y-4 text-base leading-relaxed text-text-on-light-muted sm:text-lg"
          >
            <p>{{ $t("authority.p1") }}</p>
            <p>{{ $t("authority.p2") }}</p>
            <p>{{ $t("authority.p3") }}</p>
            <p>
              <strong class="text-text-on-light">
                {{ $t("authority.p4Strong") }}
              </strong>
            </p>
          </div>

          <!-- Credenciais -->
          <ul class="scroll-reveal mt-8 space-y-3">
            <li
              v-for="cred in credentials"
              :key="cred.text"
              class="flex items-center gap-3"
            >
              <div
                class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber-dark/10"
              >
                <Icon
                  :name="cred.icon"
                  class="size-5 text-amber-dark"
                  aria-hidden="true"
                />
              </div>
              <span class="text-sm font-medium text-text-on-light sm:text-base">
                {{ cred.text }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
