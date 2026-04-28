<script setup lang="ts">
const props = defineProps<{
  name: string;
  role: string;
  blurb: string;
  vimeoId: string;
  iframeTitle: string;
}>();

function embedSrc(id: string) {
  const params = new URLSearchParams({
    badge: "0",
    autopause: "0",
    player_id: "0",
    dnt: "1",
  });
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
}

const headingId = computed(() => `student-card-${props.vimeoId}`);
</script>

<template>
  <article
    class="group h-full"
    :aria-labelledby="headingId"
  >
    <div
      class="relative flex h-full flex-col overflow-hidden rounded-2xl border border-dark-muted bg-dark-surface/90 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.75)] ring-1 ring-white/5 transition-transform duration-500 ease-out will-change-transform hover:-translate-y-0.5 hover:border-amber/25 hover:shadow-[0_28px_70px_-30px_rgba(245,158,11,0.1)] motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div
        class="flex flex-wrap items-end justify-between gap-3 border-b border-white/5 px-4 py-3 sm:px-5 sm:py-4"
      >
        <div class="min-w-0 text-left">
          <p
            class="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-on-dark-muted sm:text-[11px]"
          >
            {{ role }}
          </p>
          <h3
            :id="headingId"
            class="text-lg font-bold tracking-tight text-text-on-dark sm:text-xl"
          >
            {{ name }}
          </h3>
        </div>
        <span
          class="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-text-on-dark-muted"
        >
          {{ $t("studentVideos.studentBadge") }}
        </span>
      </div>

      <div
        class="relative bg-black/50"
        style="aspect-ratio: 16 / 9"
      >
        <iframe
          :src="embedSrc(vimeoId)"
          class="absolute inset-0 h-full w-full border-0"
          :title="iframeTitle"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          loading="lazy"
        />
      </div>

      <p
        class="flex-1 border-t border-white/5 px-4 py-4 text-sm leading-relaxed text-text-on-dark-muted sm:px-5 sm:py-5 sm:text-base"
      >
        {{ blurb }}
      </p>
    </div>
  </article>
</template>
