<script setup lang="ts">
interface Props {
  title: string;
  dark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  dark: true,
});

const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div
    :class="[
      'border-b transition-colors',
      props.dark ? 'border-dark-muted' : 'border-light-muted',
    ]"
  >
    <button
      type="button"
      :aria-expanded="isOpen"
      class="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold transition-colors cursor-pointer"
      :class="[
        props.dark
          ? 'text-text-on-dark hover:text-amber'
          : 'text-text-on-light hover:text-amber-dark',
      ]"
      @click="toggle"
    >
      <span class="text-base md:text-lg">{{ props.title }}</span>
      <Icon
        name="lucide:chevron-down"
        class="size-5 shrink-0 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        aria-hidden="true"
      />
    </button>

    <div
      class="grid transition-[grid-template-rows] duration-300 ease-out"
      :class="isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <div class="overflow-hidden">
        <div
          class="pb-5 text-sm md:text-base leading-relaxed"
          :class="
            props.dark ? 'text-text-on-dark-muted' : 'text-text-on-light-muted'
          "
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
