import { ref, onMounted, onUnmounted } from "vue";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const containerRef = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;

  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  onMounted(() => {
    if (!containerRef.value) return;

    if (prefersReducedMotion()) {
      const els = containerRef.value.querySelectorAll(".scroll-reveal");
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px 0px -40px 0px",
      },
    );

    const elements = containerRef.value.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer!.observe(el));
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return { containerRef };
}
