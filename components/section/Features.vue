<template>
    <UiSection label="Features" :title="t('home.features.title')"
        description="Everything you need for secure, fast file sharing across your local network." size="lg"
        spacing="lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(feature, index) in features" :key="index"
                class="group p-6 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200">
                <!-- Icon Container -->
                <div
                    class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon :name="feature.icon" class="text-2xl" />
                </div>

                <!-- Content -->
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">
                    {{ feature.title }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
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
    },
    {
        icon: 'material-symbols:shield-lock',
        title: t('home.features.secure'),
        description: t('home.features.secureDescription'),
    },
    {
        icon: 'material-symbols:wifi-off',
        title: 'No Internet Required',
        description: 'Works completely offline. Your data never leaves your local network.',
    },
    {
        icon: 'material-symbols:rocket-launch',
        title: 'Blazing Fast',
        description: 'Transfer files at the maximum speed of your WiFi network. No bandwidth limits.',
    },
]);
</script>