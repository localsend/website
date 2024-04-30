<template>
  <NuxtLayout>
    <NuxtPage :transition="{
        name: 'page',
        mode: 'out-in',
        onBeforeEnter
      }"/>
    <AppFooter />
    <LanguageSwitcher />
  </NuxtLayout>
</template>

<script setup lang="ts">
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";

const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  // TODO: https://github.com/nuxt-modules/i18n/issues/2820
  await finalizePendingLocaleChange()
}
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
