<template>
    <section class="features section" id="features">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">{{ t('home.features.title') }}</h2>
                <p class="section-subtitle">{{ t('home.features.description') }}</p>
            </div>
            <div class="grid grid-4 features-grid">
                <div v-for="(feature, index) in features" :key="index" class="card feature-card">
                    <div class="feature-icon">
                        <Icon :name="feature.icon" class="app-icon" />
                    </div>
                    <h3>{{ feature.title }}</h3>
                    <p>{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </section>
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
        icon: 'material-symbols:shield-outline',
        title: t('home.features.secure'),
        description: t('home.features.secureDescription'),
    },
    {
        icon: 'material-symbols:wifi-off',
        title: t('home.features.noInternet'),
        description: t('home.features.noInternetDescription'),
    },
    {
        icon: 'material-symbols:bolt-outline',
        title: t('home.features.fast'),
        description: t('home.features.fastDescription'),
    },
]);
</script>

<style scoped>
</style>