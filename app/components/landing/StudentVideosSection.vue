<script setup lang="ts">
const { t } = useI18n();
const { containerRef } = useScrollReveal();

const students = computed(() =>
  (
    [
      { key: "lorenzo", vimeoId: "1116623847" },
      { key: "jose", vimeoId: "1168210484" },
      { key: "caio", vimeoId: "1074795813" },
    ] as const
  ).map((s) => ({
    name: t(`studentVideos.items.${s.key}.name`),
    role: t(`studentVideos.items.${s.key}.role`),
    blurb: t(`studentVideos.items.${s.key}.blurb`),
    iframeTitle: t(`studentVideos.items.${s.key}.iframeTitle`),
    vimeoId: s.vimeoId,
  })),
);
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="student-videos-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-20%,rgba(245,158,11,0.12),transparent)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(245,158,11,0.04),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header class="scroll-reveal mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-amber">
          {{ $t("studentVideos.eyebrow") }}
        </p>
        <h2
          id="student-videos-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          {{ $t("studentVideos.heading.prefix") }}
          <span class="text-amber">{{
            $t("studentVideos.heading.highlight")
          }}</span>
        </h2>
        <p
          class="mt-4 text-base leading-relaxed text-text-on-dark-muted sm:text-lg"
        >
          {{ $t("studentVideos.subheading") }}
        </p>
      </header>

      <div
        class="scroll-reveal mt-10 flex justify-center sm:mt-12"
        aria-hidden="true"
      >
      </div>

      <div
        class="stagger-children mt-12 grid gap-8 sm:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10"
      >
        <div
          v-for="student in students"
          :key="student.vimeoId"
          class="scroll-reveal"
        >
          <LandingStudentVideoShowcaseCard v-bind="student" />
        </div>
      </div>
    </div>
  </section>
</template>
