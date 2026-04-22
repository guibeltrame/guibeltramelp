<script setup lang="ts">
interface Props {
  label: string;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "base" | "lg";
  fullWidth?: boolean;
  /** e.g. `_blank` to open in a new tab */
  target?: string;
  rel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  href: "#oferta",
  variant: "primary",
  size: "base",
  fullWidth: false,
});

const relAttr = computed(() => {
  if (props.rel) {
    return props.rel;
  }
  if (props.target === "_blank") {
    return "noopener noreferrer";
  }
  return undefined;
});

const classes = computed(() => {
  const base =
    "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 cursor-pointer select-none";

  const sizeClasses =
    props.size === "lg" ? "px-10 py-4 text-lg" : "px-8 py-3.5 text-base";

  const variantClasses =
    props.variant === "primary"
      ? "bg-amber text-dark hover:bg-amber-light shadow-lg shadow-amber/20 hover:shadow-xl hover:shadow-amber/30 active:bg-amber-dark"
      : "border-2 border-amber text-amber hover:bg-amber/10 active:bg-amber/20";

  const widthClass = props.fullWidth ? "w-full" : "";

  return [base, sizeClasses, variantClasses, widthClass]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <a
    :href="props.href"
    :target="props.target"
    :rel="relAttr"
    :class="classes"
    role="link"
  >
    <slot>{{ props.label }}</slot>
  </a>
</template>
