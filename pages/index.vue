<template>
  <div class="min-h-screen flex items-center justify-center pt-12 md:pt-0">
    <div style="max-width: 1800px" class="grid grid-cols-12">
      <!-- Logo and text -->
      <div class="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-7 grid grid-cols-12">
        <div class="col-span-12 md:col-span-4 flex items-center justify-center md:justify-end">
          <img
              id="logo"
              src="~/assets/img/logo-512.png" alt="LocalSend Logo"
              :style="{height: logoHeight + 'px'}"
          />
        </div>

        <div class="col-span-12 md:col-span-8 flex items-center justify-center md:justify-start pb-12 md:pb-0 lg:pl-2">
          <div>
            <h1 class="text-5xl sm:text-5xl xl:text-7xl 2xl:text-8xl font-black text-center md:text-start">LocalSend</h1>
            <h2 class="text-xl xl:text-2xl 2xl:text-3xl font-light text-center md:text-start mt-2">{{ t('home.slogan1') }}</h2>
            <h2 class="text-xl xl:text-2xl 2xl:text-3xl font-light text-center md:text-start">{{ t('home.slogan2') }}</h2>

            <div class="mt-6 text-center md:text-start">
              <NuxtLink :to="localePath({ path: '/download' })">
                <AppButton icon="material-symbols:arrow-downward">
                  {{ t('home.download') }}
                </AppButton>
              </NuxtLink>
              <NuxtLink :to="localePath({ path: '/community' })" class="ml-4">
                <AppButton icon="material-symbols:group" :dark="true">
                  {{ t('home.community') }}
                </AppButton>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Screenshots -->
      <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-5 grid grid-cols-2">
        <div class="col-span-2 md:col-span-1">
          <img src="/img/screenshot-iphone.webp" alt="iPhone Screenshot"
               :style="{height: screenshotHeight + 'px', margin: 'auto'}"
               class="object-contain"/>
        </div>
        <div class="col-span-2 md:col-span-1">
          <img src="/img/screenshot-pc.webp" alt="PC Screenshot"
               :style="{height: screenshotHeight + 'px', margin: 'auto'}" class="object-contain"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from "@vueuse/core";

definePageMeta({
  title: 'home.seo.title',
  description: 'home.seo.description',
})

const {t} = useI18n()
const localePath = useLocalePath()

const breakpoints = useBreakpoints(breakpointsTailwind);

const logoHeight = computed(() => {
  if (breakpoints.greaterOrEqual('2xl')) {
    return 200;
  }

  if (breakpoints.greaterOrEqual('xl')) {
    return 200;
  }

  if (breakpoints.greaterOrEqual('lg')) {
    return 200;
  }

  if (breakpoints.greaterOrEqual('md')) {
    return 150;
  }

  return 200;
});

const screenshotHeight = computed(() => {
  if (breakpoints.greaterOrEqual('2xl')) {
    return 400;
  }

  if (breakpoints.greaterOrEqual('xl')) {
    return 200;
  }

  if (breakpoints.greaterOrEqual('lg')) {
    return 150;
  }

  if (breakpoints.greaterOrEqual('md')) {
    return 150;
  }

  return 100;
});

onMounted(() => {
  // legacy redirects (remove after next store update)
  if (window.location.hash === '#/privacy') {
    window.location.href = '/privacy';
  }

  if (window.location.hash === '#/terms-of-service') {
    window.location.href = '/terms';
  }

  if (window.location.hash === '#/contact') {
    window.location.href = '/contact';
  }
});
</script>

<style scoped>
#logo {
  animation: rotating 40s linear infinite;
}
@keyframes rotating {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}
</style>
