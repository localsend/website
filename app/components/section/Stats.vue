<template>
    <section class="stats section">
        <div class="container">
            <div class="card card-grid">
                <div class="stat-item">
                    <span class="stat-value">70k+</span>
                    <span class="stat-label">{{ t('home.stats.stars') }}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">5M+</span>
                    <span class="stat-label">{{ t('home.stats.downloads') }}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">100+</span>
                    <span class="stat-label">{{ t('home.stats.contributors') }}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">0</span>
                    <span class="stat-label">{{ t('home.stats.ads') }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped>
</style>