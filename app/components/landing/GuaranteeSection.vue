<script setup lang="ts">
const { containerRef } = useScrollReveal();
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="guarantee-heading"
    class="bg-light py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <!-- Shield icon -->
        <div
          class="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-amber-dark/10"
        >
          <Icon
            name="lucide:shield-check"
            class="size-10 text-amber-dark"
            aria-hidden="true"
          />
        </div>

        <h2
          id="guarantee-heading"
          class="text-2xl font-bold tracking-tight text-text-on-light sm:text-3xl md:text-4xl"
        >
          {{ $t("guarantee.headingPrefix") }}
          <span class="text-amber-dark">{{
            $t("guarantee.headingHighlight")
          }}</span>
        </h2>

        <div
          class="mt-6 space-y-4 text-base leading-relaxed text-text-on-light-muted sm:text-lg"
        >
          <p>
            {{ $t("guarantee.p1Prefix") }}
            <strong class="text-text-on-light">{{
              $t("guarantee.p1Strong")
            }}</strong
            >{{ $t("guarantee.p1Suffix") }}
          </p>
          <p>{{ $t("guarantee.p2") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
