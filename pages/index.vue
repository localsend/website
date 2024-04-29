<template>
  <div class="min-h-screen flex items-center justify-center pt-12 md:pt-0">
    <div style="max-width: 1800px" class="grid grid-cols-12">
      <!-- Logo and text -->
      <div class="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-7 pb-12 md:pb-0 grid grid-cols-12">
        <div class="col-span-12 md:col-span-4 flex items-center justify-center md:justify-end mt-0 lg:mt-2">
          <img
              id="logo"
              src="~/assets/img/logo-512.png" alt="LocalSend Logo"
              class="h-52 md:h-40 lg:h-40 xl:h-48 2xl:h-56 object-contain"
          />
        </div>

        <div class="col-span-12 md:col-span-8 flex items-center justify-center md:justify-start lg:pl-2">
          <div>
            <h1 class="text-5xl sm:text-5xl xl:text-7xl 2xl:text-8xl font-black text-center md:text-start">LocalSend</h1>
            <h2 class="slogan text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-light text-center md:text-start mt-2">{{ t('home.slogan1') }}</h2>
            <h2 class="slogan text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-light text-center md:text-start">{{ t('home.slogan2') }}</h2>

            <div class="buttons mt-6 text-center md:text-start">
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
      <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-5 grid grid-cols-3 gap-8 px-8">
        <div class="col-span-3 md:col-span-1 flex items-center justify-center">
          <img src="/img/screenshot-iphone.webp" alt="iPhone Screenshot"
               class="h-96 object-contain"/>
        </div>
        <div class="col-span-3 md:col-span-2 flex items-center justify-center">
          <img src="/img/screenshot-pc.webp" alt="PC Screenshot"
               class="h-96 object-contain"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'home.seo.title',
  description: 'home.seo.description',
})

const {t} = useI18n()
const localePath = useLocalePath()

onMounted(() => {
  // legacy redirects (remove after next store update)
  if (window.location.hash === '#/privacy') {
    navigateTo('/privacy');
  }

  if (window.location.hash === '#/terms-of-service') {
    navigateTo('/terms');
  }

  if (window.location.hash === '#/contact') {
    navigateTo('/contact');
  }
});
</script>

<style scoped>
#logo {
  animation: rotating 40s linear infinite;
}

.slogan {
  opacity: 0;
  animation: fadeIn 0.2s 0.3s forwards ease-out;
}

.buttons {
  opacity: 0;
  animation: fadeIn 0.2s 0.5s forwards ease-out;
}

@keyframes rotating {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
  }
}

</style>
