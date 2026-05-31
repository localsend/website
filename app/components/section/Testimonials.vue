<template>
    <section class="testimonials section">
        <div class="container text-center">
            <h2 class="section-title">{{ t('home.testimonials.title') }}</h2>
            <p class="section-subtitle">{{ t('home.testimonials.description') }}</p>
            
            <div class="testimonial-scroller">
                <div class="testimonial-row ltr">
                    <div class="testimonial-track">
                        <div v-for="(review, i) in [...row1, ...row1]" :key="`row1-${i}`" class="card testimonial-card">
                            <div class="testimonial-header">
                                <span class="author">{{ review.author }}</span>
                                <span class="source-icon"><span class="material-symbols-rounded">campaign</span></span>
                            </div>
                            <p>"{{ review.text }}"</p>
                        </div>
                    </div>
                </div>

                <div class="testimonial-row rtl">
                    <div class="testimonial-track">
                        <div v-for="(review, i) in [...row2, ...row2]" :key="`row2-${i}`" class="card testimonial-card">
                            <div class="testimonial-header">
                                <span class="author">{{ review.author }}</span>
                                <span class="source-icon"><span class="material-symbols-rounded">campaign</span></span>
                            </div>
                            <p>"{{ review.text }}"</p>
                        </div>
                    </div>
                </div>

                <div class="testimonial-row ltr fast">
                    <div class="testimonial-track">
                        <div v-for="(review, i) in [...row3, ...row3]" :key="`row3-${i}`" class="card testimonial-card">
                            <div class="testimonial-header">
                                <span class="author">{{ review.author }}</span>
                                <span class="source-icon"><span class="material-symbols-rounded">campaign</span></span>
                            </div>
                            <p>"{{ review.text }}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const reviews = [
    { text: "Nice >:]", author: "DySQRD" },
    { text: "Incredible software. Everything I wanted!", author: "sentrionic" },
    { text: "Final I don't have to use gmail drafts to easily share files", author: "Éric" },
    { text: "Great app and great work!", author: "ss" },
    { text: "Thank god for this app!! All my devices use different operating systems which is very annoying. LocalSend worked instantly, even on my fussy Linux pc! Thank you so much!", author: "Casey" },
    { text: "What a great app, thank you!", author: "Jesus Saves" },
    { text: "Nice app", author: "Francois" },
    { text: "Great app", author: "Lorenzo" },
    { text: "Thank you!", author: "Kiki" },
    { text: "Such a useful app!", author: "Magid" },
    { text: "This app gets job done and supports all different platforms I use. Well done", author: "Elias Jackson" },
    { text: "LocalSend rules!", author: "Johnny" },
    { text: "Exactly what apps should be like - clean beautiful UX, that solves customer problems.", author: "Imran" },
    { text: "LocalSend is fantastic. Thank you!", author: "Giorgio" }
];

const row1 = reviews.slice(0, 5);
const row2 = reviews.slice(5, 10);
const row3 = reviews.slice(10);
</script>

<style scoped>
</style>