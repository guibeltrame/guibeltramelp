<script setup lang="ts">
const { containerRef } = useScrollReveal();

const metrics = [
  { icon: "lucide:users", value: "500+", label: "Alunos ativos" },
  { icon: "lucide:star", value: "4.9/5", label: "Avaliação média" },
  { icon: "lucide:play-circle", value: "4h", label: "Aulas em vídeo" },
  { icon: "lucide:calendar", value: "10+", label: "Anos ensinando" },
];
</script>

<template>
  <section
    ref="containerRef"
    aria-label="Números e resultados"
    class="bg-dark-surface border-y border-dark-muted"
  >
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div
        class="stagger-children grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
      >
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="scroll-reveal flex flex-col items-center gap-2 text-center"
        >
          <Icon
            :name="metric.icon"
            class="size-6 text-amber"
            aria-hidden="true"
          />
          <span
            class="text-2xl font-bold tracking-tight text-text-on-dark md:text-3xl"
          >
            {{ metric.value }}
          </span>
          <span class="text-sm text-text-on-dark-muted">
            {{ metric.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
