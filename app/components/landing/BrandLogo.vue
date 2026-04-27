<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** hero: destaque principal; authority: assinatura na seção clara */
    size?: "hero" | "authority";
  }>(),
  { size: "hero" },
);

const maxWClass =
  props.size === "hero"
    ? "max-w-full object-contain"
    : "max-w-[min(100%,18rem)] object-contain sm:max-w-[min(100%,20rem)]";

const imgClass =
  props.size === "hero"
    ? "h-[min(21rem,48dvh)] w-auto sm:h-[min(24rem,44dvh)] md:h-[min(30rem,50dvh)]"
    : "h-14 w-auto sm:h-16 md:h-[4.25rem]";
</script>

<template>
  <img
    src="/images/logo.png"
    alt="Ciência das 6 Cordas — logotipo do curso de guitarra"
    width="256"
    height="256"
    decoding="async"
    :class="[maxWClass, imgClass]"
    :loading="size === 'hero' ? 'eager' : 'lazy'"
  />
</template>
