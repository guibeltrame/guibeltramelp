<script setup lang="ts">
const i18nHead = useLocaleHead({ seo: true });

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
    dir: i18nHead.value.htmlAttrs?.dir,
  },
  link: () => i18nHead.value.link ?? [],
  meta: () => i18nHead.value.meta ?? [],
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
