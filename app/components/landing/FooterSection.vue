<template>
  <footer
    aria-label="Rodapé"
    class="border-t border-dark-muted bg-dark py-8 sm:py-10"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left"
      >
        <!-- Brand -->

        <!-- Links -->
        <nav aria-label="Links legais">
          <ul class="flex flex-wrap justify-center gap-4 sm:gap-6">
            <li>
              <a
                href="mailto:guibeltrame.s@gmail.com"
                class="text-sm text-text-on-dark-muted transition-colors hover:text-amber"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Copyright -->
      <p class="mt-6 text-center text-xs text-text-on-dark-muted/60">
        GT BELT - Copyright &copy; {{ new Date().getFullYear() }} - Todos os
        direitos reservados.
      </p>
    </div>
  </footer>
</template>
