<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    :aria-label="$t('footer.ariaLabel')"
    class="border-t border-dark-muted bg-dark py-8 sm:py-10"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left"
      >
        <!-- Brand -->

        <!-- Links -->
        <nav :aria-label="$t('footer.linksLabel')">
          <ul class="flex flex-wrap justify-center gap-4 sm:gap-6">
            <li>
              <a
                href="mailto:guibeltrame.s@gmail.com"
                class="text-sm text-text-on-dark-muted transition-colors hover:text-amber"
              >
                {{ $t("footer.contact") }}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Copyright -->
      <p class="mt-6 text-center text-xs text-text-on-dark-muted/60">
        {{ $t("footer.copyright", { year: currentYear }) }}
      </p>
    </div>
  </footer>
</template>
