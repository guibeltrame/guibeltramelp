<script setup lang="ts">
import { useI18n, useSwitchLocalePath } from "#imports";

interface LocaleOption {
  code: "pt-BR" | "en-US" | "es-ES";
  language: string;
  flag: string;
  shortLabel: string;
}

const FLAG_DATA_URI = {
  /** Brasil — verde, losango amarelo, círculo azul, faixa branca. SVG simplificado. */
  "pt-BR":
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 20" aria-hidden="true"><rect width="28" height="20" fill="#009C3B"/><polygon points="14,3 25,10 14,17 3,10" fill="#FFDF00"/><circle cx="14" cy="10" r="4" fill="#002776"/><path d="M10.2 10.4c2.4-1 5.2-1 7.6 0" fill="none" stroke="#fff" stroke-width="0.7"/></svg>`,
    ),
  /** EUA — 13 listras + cantão azul. SVG simplificado. */
  "en-US":
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 20" aria-hidden="true"><rect width="28" height="20" fill="#fff"/>${
        [0, 2, 4, 6, 8, 10, 12]
          .map(
            (y) =>
              `<rect y="${y * 1.538}" width="28" height="1.538" fill="#B22234"/>`,
          )
          .join("")
      }<rect width="12" height="10.77" fill="#3C3B6E"/><g fill="#fff">${
        Array.from({ length: 5 })
          .flatMap((_, row) =>
            Array.from({ length: 6 }).map((__, col) => {
              const x = 1 + col * 2;
              const y = 1.2 + row * 2;
              return `<circle cx="${x}" cy="${y}" r="0.45"/>`;
            }),
          )
          .join("")
      }</g></svg>`,
    ),
  /** Espanha — faixas vermelha/amarela/vermelha. SVG simplificado. */
  "es-ES":
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 20" aria-hidden="true"><rect width="28" height="20" fill="#AA151B"/><rect y="5" width="28" height="10" fill="#F1BF00"/><rect x="6" y="8.5" width="3.2" height="3.5" fill="#AA151B" rx="0.4"/></svg>`,
    ),
} as const;

const { locale, locales, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const options = computed<LocaleOption[]>(() =>
  (locales.value as Array<{ code: string; language?: string; name?: string }>)
    .filter((l): l is { code: LocaleOption["code"]; language: string; name: string } =>
      ["pt-BR", "en-US", "es-ES"].includes(l.code),
    )
    .map((l) => ({
      code: l.code,
      language: l.language ?? l.code,
      flag: FLAG_DATA_URI[l.code],
      shortLabel: l.code === "pt-BR" ? "PT" : l.code === "en-US" ? "EN" : "ES",
    })),
);

const currentOption = computed(
  () => options.value.find((o) => o.code === locale.value) ?? options.value[0],
);

const isOpen = ref(false);
const detailsRef = ref<HTMLDetailsElement | null>(null);

function close() {
  isOpen.value = false;
  if (detailsRef.value) detailsRef.value.open = false;
}

function onToggle(event: Event) {
  isOpen.value = (event.target as HTMLDetailsElement).open;
}

function onDocClick(event: MouseEvent) {
  if (!detailsRef.value) return;
  if (!detailsRef.value.contains(event.target as Node)) close();
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape" && isOpen.value) close();
}

onMounted(() => {
  document.addEventListener("click", onDocClick);
  document.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onDocClick);
  document.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <details
    ref="detailsRef"
    class="lang-selector relative inline-block"
    @toggle="onToggle"
  >
    <summary
      class="lang-trigger flex items-center gap-2 rounded-full border border-white/10 bg-dark-surface/80 px-3 py-1.5 text-sm font-medium text-text-on-dark shadow-sm ring-1 ring-white/5 backdrop-blur-md transition-colors duration-200 hover:border-amber/30 hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-dark sm:px-3.5 sm:py-2"
      role="button"
      :aria-label="t('common.languageSelector.label')"
      :aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <img
        v-if="currentOption"
        :src="currentOption.flag"
        :alt="''"
        aria-hidden="true"
        width="20"
        height="14"
        class="block h-3.5 w-5 rounded-[2px] object-cover ring-1 ring-white/10"
      />
      <span class="text-xs font-semibold uppercase tracking-wide sm:text-sm">{{
        currentOption?.shortLabel
      }}</span>
      <Icon
        name="lucide:chevron-down"
        class="size-3.5 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        aria-hidden="true"
      />
    </summary>

    <div
      class="lang-menu absolute right-0 z-50 mt-2 min-w-[12rem] origin-top-right overflow-hidden rounded-xl border border-white/10 bg-dark-surface/95 p-1 shadow-2xl shadow-black/50 ring-1 ring-white/5 backdrop-blur-lg"
      role="menu"
    >
      <NuxtLink
        v-for="opt in options"
        :key="opt.code"
        :to="switchLocalePath(opt.code) || '/'"
        :hreflang="opt.language"
        :aria-current="opt.code === locale ? 'true' : undefined"
        class="lang-option flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-text-on-dark transition-colors duration-150 hover:bg-amber/10 hover:text-amber focus-visible:bg-amber/10 focus-visible:text-amber focus-visible:outline-none aria-[current=true]:bg-amber/15 aria-[current=true]:text-amber"
        role="menuitem"
        @click="close"
      >
        <img
          :src="opt.flag"
          alt=""
          aria-hidden="true"
          width="22"
          height="16"
          class="h-4 w-[1.4rem] shrink-0 rounded-[2px] object-cover ring-1 ring-white/10"
        />
        <span class="flex-1 text-left font-medium">
          {{ t(`common.languageSelector.options.${opt.code}`) }}
        </span>
        <Icon
          v-if="opt.code === locale"
          name="lucide:check"
          class="size-4 text-amber"
          aria-hidden="true"
        />
      </NuxtLink>
    </div>
  </details>
</template>

<style scoped>
.lang-selector > summary {
  list-style: none;
  cursor: pointer;
}
.lang-selector > summary::-webkit-details-marker {
  display: none;
}
.lang-menu {
  animation: lang-menu-in 0.18s ease-out;
}
@keyframes lang-menu-in {
  from {
    opacity: 0;
    transform: translateY(-4px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (prefers-reduced-motion: reduce) {
  .lang-menu {
    animation: none;
  }
}
</style>
