<template>
    <UiSection label="Features" :title="t('home.features.title')" :description="t('home.features.description')"
        size="md" spacing="lg">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="(feature, index) in features" :key="index"
                class="group p-8 rounded-3xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">

                <!-- Icon Container -->
                <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-black/5 dark:border-white/10 shadow-lg bg-gradient-to-tr transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    :class="feature.gradientClasses">
                    <Icon :name="feature.icon" class="text-3xl transition-colors duration-500"
                        :class="feature.iconClasses" />
                </div>

                <!-- Content -->
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">
                    {{ feature.title }}
                </h3>
                <p class="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                    {{ feature.description }}
                </p>
            </div>
        </div>
    </UiSection>
</template>

<script setup lang="ts">
const { t } = useI18n();

const features = computed(() => [
    {
        icon: 'material-symbols:devices',
        title: t('home.features.crossPlatform'),
        description: t('home.features.crossPlatformDescription'),
        gradientClasses: 'from-gray-900/5 to-gray-900/0 dark:from-white/10 dark:to-white/5 group-hover:from-blue-500 group-hover:to-cyan-500',
        iconClasses: 'text-gray-700 dark:text-gray-300 group-hover:text-white',
    },
    {
        icon: 'material-symbols:shield-lock',
        title: t('home.features.secure'),
        description: t('home.features.secureDescription'),
        gradientClasses: 'from-gray-900/5 to-gray-900/0 dark:from-white/10 dark:to-white/5 group-hover:from-teal-500 group-hover:to-emerald-500',
        iconClasses: 'text-gray-700 dark:text-gray-300 group-hover:text-white',
    },
    {
        icon: 'material-symbols:wifi-off',
        title: t('home.features.noInternet'),
        description: t('home.features.noInternetDescription'),
        gradientClasses: 'from-gray-900/5 to-gray-900/0 dark:from-white/10 dark:to-white/5 group-hover:from-purple-500 group-hover:to-pink-500',
        iconClasses: 'text-gray-700 dark:text-gray-300 group-hover:text-white',
    },
    {
        icon: 'material-symbols:rocket-launch',
        title: t('home.features.fast'),
        description: t('home.features.fastDescription'),
        gradientClasses: 'from-gray-900/5 to-gray-900/0 dark:from-white/10 dark:to-white/5 group-hover:from-orange-500 group-hover:to-red-500',
        iconClasses: 'text-gray-700 dark:text-gray-300 group-hover:text-white',
    },
]);
</script>