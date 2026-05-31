<template>
    <section id="faq" class="video-faq section">
        <div class="container">
            <div class="video-container">
                <iframe
                    :src="`https://www.youtube.com/embed/${youtubeVideoId}`"
                    :title="t('home.faq.videoTitle')"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>

            <div class="faq-container">
                <h2 class="section-title text-center">{{ t('home.faq.title') }}</h2>
                <div class="faq-list">
                    <div v-for="(faq, i) in faqs" :key="i" class="card faq-item">
                        <h3 class="faq-question">{{ faq.q }}</h3>
                        <p>{{ faq.a }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

const youtubeVideoId = computed(() => {
    switch (locale.value) {
        case 'de': return 'qfXkF-W09zk';
        default: return '2ITezMkbAqE';
    }
});

const faqs = computed(() => [
    { q: t('home.faq.q1'), a: t('home.faq.a1') },
    { q: t('home.faq.q2'), a: t('home.faq.a2') },
    { q: t('home.faq.q3'), a: t('home.faq.a3') },
    { q: t('home.faq.q4'), a: t('home.faq.a4') },
    { q: t('home.faq.q5'), a: t('home.faq.a5') },
    { q: t('home.faq.q6'), a: t('home.faq.a6') }
]);
</script>

<style scoped>
</style>