<template>
  <UiSection :title="t('home.sponsors.title')" :description="t('home.sponsors.description')" size="lg" spacing="lg">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

      <a href="https://devo.ai" target="_blank" rel="noopener noreferrer"
         class="md:col-span-2 group relative flex flex-col md:flex-row items-center justify-between p-10 rounded-3xl border border-teal-200/60 dark:border-teal-900/30 bg-white dark:bg-gray-900/40 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-500 hover:shadow-xl overflow-hidden">

        <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
          <div
              class="inline-flex px-3 py-1 mb-6 rounded-full bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 text-[10px] font-bold uppercase tracking-widest border border-teal-100 dark:border-teal-900/50">
            {{ t('home.sponsors.mainSponsor') || 'Main Sponsor' }}
          </div>

          <h3 class="text-2xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400">
            Devo.AI
          </h3>
          <p class="text-gray-500 dark:text-gray-400 max-w-sm mt-3 leading-relaxed">
            Devo is an international IT company that invests, develops and promotes projects in English-speaking markets.
          </p>
        </div>

        <div
            class="mt-8 md:mt-0 h-16 relative z-10 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
          <img src="https://devo.ai/img/logo_devo.png" alt="Main Sponsor"
               class="h-full object-contain dark:brightness-200"/>
        </div>

        <div
            class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-50/50 dark:bg-teal-900/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </a>

      <a href="https://www.lambdatest.com/" target="_blank" rel="noopener noreferrer"
         class="group relative flex flex-col items-center justify-center p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg">
        <div
            class="px-3 py-1 mb-8 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider border border-gray-100 dark:border-gray-700">
          {{ t('home.sponsors.infrastructure') }}
        </div>

        <div class="h-10 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
          <img src="https://www.lambdatest.com/blue-logo.png" alt="LambdaTest"
               class="h-full object-contain dark:brightness-0 dark:invert"/>
        </div>

        <p class="text-center text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
          {{ t('home.sponsors.lambdaTestDescription') }}
        </p>
      </a>

      <a href="https://github.com/sponsors/Tienisto" target="_blank" rel="noopener noreferrer"
         class="group relative flex flex-col items-center justify-center p-8 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/20 hover:border-teal-500 dark:hover:border-teal-500 hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 hover:shadow-lg">
        <div
            class="mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
          <Icon name="material-symbols:favorite" class="text-2xl"/>
        </div>

        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ t('home.sponsors.becomeSponsor') }}</h3>

        <p class="text-center text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
          {{ t('home.sponsors.becomeSponsorDescription') }}
        </p>
      </a>

    </div>
  </UiSection>
</template>

<script setup lang="ts">
const {t} = useI18n();
</script>