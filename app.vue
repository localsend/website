<template>
  <NuxtLayout>
    <NuxtPage />
    <AppFooter />
    <LanguageSwitcher />
  </NuxtLayout>
</template>

<script setup lang="ts">
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
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
