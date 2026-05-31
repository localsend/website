<template>
    <section class="partners section">
        <div class="container text-center">
            <h2 class="section-title">{{ t('home.sponsors.title') }}</h2>
            <p class="section-subtitle">{{ t('home.sponsors.description') }}</p>
            <div class="partner-grid">
                <a href="https://www.testmuai.com/" target="_blank" class="card partner-card">
                    <span class="partner-type">{{ t('home.sponsors.infrastructure') }}</span>
                    <img src="/img/sponsors/TestMuAI_Logo.svg" alt="TestMu AI Logo" class="no-invert">
                </a>
                <a href="https://github.com/sponsors/Tienisto" target="_blank" class="card partner-card sponsor-cta">
                    <h3>{{ t('home.sponsors.becomeSponsor') }}</h3>
                    <div class="icon-circle"><Icon name="material-symbols:favorite-outline" class="app-icon" /></div>
                    <p>{{ t('home.sponsors.becomeSponsorDescription') }}</p>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped>
</style>