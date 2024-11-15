<template>
  <footer class="border-t border-slate-200 pt-8 dark:border-slate-800">
    <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div class="mb-4 md:mb-0">
        <div class="shrink-0 flex flex-col md:flex-row items-center">
          <!-- Logo -->
          <a class="inline-flex mb-2 md:mb-0" href="index.html" aria-label="API guide">
            <img src="../images/logo.svg" width="92" height="32" alt="Docs" />
          </a>
          <div class="text-sm text-slate-500 ml-4">Copyright © Remy Ranger<span class="md:hidden lg:inline">. All rights reserved.</span></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
}
</script>
