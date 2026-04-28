<script setup lang="ts">
defineProps<{
  /** Quando true, esconde o header (usado durante o gate do vídeo de intro). */
  hidden?: boolean;
}>();
</script>

<template>
  <header
    class="site-header pointer-events-none fixed inset-x-0 top-0 z-40 transition-opacity duration-300"
    :class="hidden ? 'opacity-0' : 'opacity-100'"
    :aria-hidden="hidden ? 'true' : undefined"
  >
    <div
      class="mx-auto flex w-full max-w-7xl items-center justify-end px-3 pt-3 sm:px-4 sm:pt-4 lg:px-8"
    >
      <div class="pointer-events-auto">
        <UiLanguageSelector />
      </div>
    </div>
  </header>
</template>
