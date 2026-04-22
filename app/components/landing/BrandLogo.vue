<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** hero: destaque principal; authority: assinatura na seção clara */
    size?: "hero" | "authority";
  }>(),
  { size: "hero" },
);

const imgClass =
  props.size === "hero"
    ? "h-[5rem] w-auto sm:h-[5.75rem] md:h-32"
    : "h-14 w-auto sm:h-16 md:h-[4.25rem]";
</script>

<template>
  <img
    src="/images/logo.png"
    alt="Ciência das 6 Cordas — logotipo do curso de guitarra"
    width="256"
    height="256"
    decoding="async"
    :class="['max-w-[min(100%,18rem)] object-contain sm:max-w-[min(100%,20rem)]', imgClass]"
    :loading="size === 'hero' ? 'eager' : 'lazy'"
  />
</template>
