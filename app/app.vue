
<template>
  <NuxtLayout>
    <NuxtPage />
    <AppFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      innerHTML: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.classList.add('dark') } else { document.documentElement.classList.remove('dark') }`
    }
  ]
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from {
  opacity: 0;
  transform: translate(20px, 0);
}

.page-leave-to {
  opacity: 0;
  transform: translate(-20px, 0);
}

body {
  /* disable horizontal scrolling */
  overflow-x: hidden;
}
</style>
