<script setup lang="ts">
const { t } = useI18n();
const { containerRef } = useScrollReveal();

const testimonials = computed(() =>
  ([1, 2, 3, 4, 5, 6, 7, 8] as const).map((n) => ({
    src: `/images/dep_0${n}.jpeg`,
    alt: t(`testimonials.imageAlt.${n}`),
  })),
);

const lightboxOpen = ref(false);
const lightboxIndex = ref(0);
const closeBtnRef = ref<HTMLButtonElement | null>(null);
let triggerEl: HTMLElement | null = null;

const activeTestimonial = computed(
  () => testimonials.value[lightboxIndex.value]!,
);

function openLightbox(index: number, event: Event) {
  triggerEl = event.currentTarget as HTMLElement;
  lightboxIndex.value = index;
  lightboxOpen.value = true;
}

function closeLightbox() {
  lightboxOpen.value = false;
  nextTick(() => {
    triggerEl?.focus();
    triggerEl = null;
  });
}

function navigateLightbox(direction: 1 | -1) {
  lightboxIndex.value =
    (lightboxIndex.value + direction + testimonials.value.length) %
    testimonials.value.length;
}

function onLightboxKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") closeLightbox();
  else if (e.key === "ArrowLeft") navigateLightbox(-1);
  else if (e.key === "ArrowRight") navigateLightbox(1);
}

let touchStartX = 0;

function onTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0]?.clientX ?? 0;
}

function onTouchEnd(e: TouchEvent) {
  const diff = (e.changedTouches[0]?.clientX ?? 0) - touchStartX;
  if (Math.abs(diff) > 50) {
    navigateLightbox(diff > 0 ? -1 : 1);
  }
}

watch(lightboxOpen, (open) => {
  if (!import.meta.client) return;
  document.body.style.overflow = open ? "hidden" : "";
  if (open) nextTick(() => closeBtnRef.value?.focus());
});

onUnmounted(() => {
  if (import.meta.client) document.body.style.overflow = "";
});
</script>

<template>
  <section
    ref="containerRef"
    aria-labelledby="testimonials-heading"
    class="relative overflow-hidden bg-dark py-16 sm:py-20 md:py-24 lg:py-32"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(245,158,11,0.06),transparent)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="scroll-reveal mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-amber">
          {{ $t("testimonials.eyebrow") }}
        </p>
        <h2
          id="testimonials-heading"
          class="mt-3 text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl"
        >
          {{ $t("testimonials.heading.prefix") }}
          <span class="text-amber">{{
            $t("testimonials.heading.highlight")
          }}</span>
        </h2>
      </div>

      <!-- Trust badge -->
      <div class="scroll-reveal mt-8 flex justify-center">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-dark-muted bg-dark-surface px-4 py-2"
        >
          <Icon
            name="lucide:shield-check"
            class="size-4 text-amber"
            aria-hidden="true"
          />
          <span class="text-xs font-medium text-text-on-dark-muted sm:text-sm">
            {{ $t("testimonials.trustBadge") }}
          </span>
        </div>
      </div>

      <!-- Grid -->
      <div
        class="stagger-children mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.src"
          class="scroll-reveal"
        >
          <button
            class="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-dark-muted bg-dark-surface p-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/30 hover:shadow-lg hover:shadow-amber/5 sm:rounded-2xl sm:p-2"
            :aria-label="
              $t('testimonials.lightbox.openLabel', {
                index: index + 1,
                total: testimonials.length,
              })
            "
            @click="openLightbox(index, $event)"
          >
            <img
              :src="testimonial.src"
              :alt="testimonial.alt"
              loading="lazy"
              decoding="async"
              class="w-full rounded-lg sm:rounded-xl"
            />

            <!-- Hover overlay -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-dark/0 transition-colors duration-300 group-hover:bg-dark/40"
              aria-hidden="true"
            >
              <span
                class="flex size-9 scale-75 items-center justify-center rounded-full bg-amber opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:size-10"
              >
                <Icon
                  name="lucide:zoom-in"
                  class="size-4 text-dark sm:size-5"
                />
              </span>
            </div>
          </button>
        </div>
      </div>

      <!-- Helper text -->
      <p
        class="scroll-reveal mt-6 text-center text-xs text-text-on-dark-muted/60 sm:mt-8 sm:text-sm"
      >
        {{ $t("testimonials.helper") }}
      </p>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          :aria-label="
            $t('testimonials.lightbox.dialogLabel', {
              index: lightboxIndex + 1,
              total: testimonials.length,
            })
          "
          @keydown="onLightboxKeydown"
          @click.self="closeLightbox"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <!-- Close -->
          <button
            ref="closeBtnRef"
            class="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white sm:top-6 sm:right-6 sm:size-11"
            :aria-label="$t('testimonials.lightbox.close')"
            @click="closeLightbox"
          >
            <Icon name="lucide:x" class="size-5" />
          </button>

          <!-- Counter -->
          <span
            class="absolute top-5 left-4 select-none text-sm font-medium text-white/50 sm:top-7 sm:left-6"
          >
            {{ lightboxIndex + 1 }} / {{ testimonials.length }}
          </span>

          <!-- Prev -->
          <button
            class="absolute left-2 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white sm:left-4 sm:size-11"
            :aria-label="$t('testimonials.lightbox.previous')"
            @click="navigateLightbox(-1)"
          >
            <Icon name="lucide:chevron-left" class="size-5" />
          </button>

          <!-- Image -->
          <Transition
            mode="out-in"
            enter-active-class="duration-200 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-150 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <img
              :key="lightboxIndex"
              :src="activeTestimonial.src"
              :alt="activeTestimonial.alt"
              class="max-h-[85vh] max-w-[90vw] select-none rounded-xl object-contain shadow-2xl sm:max-w-[75vw] md:max-w-[55vw] lg:max-w-[40vw]"
            />
          </Transition>

          <!-- Next -->
          <button
            class="absolute right-2 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white sm:right-4 sm:size-11"
            :aria-label="$t('testimonials.lightbox.next')"
            @click="navigateLightbox(1)"
          >
            <Icon name="lucide:chevron-right" class="size-5" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
