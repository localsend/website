<template>
    <UiSection :title="t('home.sponsors.title')" :description="t('home.sponsors.description')" size="lg" spacing="lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            <!-- Infrastructure Partner (LambdaTest) -->
            <a href="https://www.lambdatest.com/" target="_blank" rel="noopener noreferrer"
                class="group relative flex flex-col items-center justify-center p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300 hover:shadow-lg overflow-hidden">
                <!-- Badge -->
                <div
                    class="px-3 py-1 mb-8 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-100 dark:border-blue-800">
                    {{ t('home.sponsors.infrastructure') }}
                </div>

                <!-- Logo -->
                <div class="h-12 mb-6 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src="https://www.lambdatest.com/blue-logo.png" alt="LambdaTest"
                        class="h-full object-contain dark:brightness-0 dark:invert" />
                </div>

                <!-- Description -->
                <p class="text-center text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
                    {{ t('home.sponsors.lambdaTestDescription') }}
                </p>

                <!-- Hover Gradient -->
                <div
                    class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                </div>
            </a>

            <!-- Community Support (Donation) -->
            <a href="https://github.com/sponsors/localsend" target="_blank" rel="noopener noreferrer"
                class="group relative flex flex-col items-center justify-center p-8 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/20 hover:border-teal-500 dark:hover:border-teal-500 hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 hover:shadow-lg">
                <!-- Icon -->
                <div
                    class="mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="material-symbols:favorite" class="text-2xl" />
                </div>

                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ t('home.sponsors.becomeSponsor')
                    }}</h3>

                <p class="text-center text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
                    {{ t('home.sponsors.becomeSponsorDescription') }}
                </p>
            </a>

        </div>
    </UiSection>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>