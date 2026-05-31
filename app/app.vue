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
