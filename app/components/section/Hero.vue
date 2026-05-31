<template>
    <section class="hero section">
        <div class="container text-center">
            <h1>
                {{ t('home.hero.title1') }}
                <br>
                <span class="accent">{{ t('home.hero.title2') }}</span>
            </h1>
            <p class="subtitle">{{ t('home.hero.subtitle') }}</p>
            <div class="hero-ctas">
                <NuxtLink :to="localePath('/download')" class="btn btn-primary btn-lg">{{ t('home.download') }}</NuxtLink>
                <a href="https://web.localsend.org/" target="_blank" class="btn btn-secondary btn-lg">{{ t('home.web') }}</a>
            </div>
            
            <div class="hero-visual">
                <div class="desktop-mockup">
                    <img src="/img/hero-desktop.webp" :alt="t('home.hero.title1')">
                </div>
                <div class="mobile-mockup">
                    <img src="/img/hero-mobile.webp" :alt="t('home.hero.title1')">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<style scoped>
</style>
