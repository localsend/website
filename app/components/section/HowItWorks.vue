<template>
    <section id="how-it-works" class="how-it-works section" ref="sectionRef">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">{{ t('howItWorks.title') }}</h2>
                <p class="section-subtitle">{{ t('howItWorks.description') }}</p>
            </div>

            <div class="steps-grid" :class="{ 'animate-drag': isVisible }">
                <div class="step-card">
                    <div class="step-visual card flex-center">
                        <div class="install-animation">
                            <div class="install-app"><img src="/img/logo.png" alt="LocalSend"></div>
                            <div class="install-success"><span class="material-symbols-rounded">check_circle</span></div>
                            <div class="install-folder"><span class="material-symbols-rounded">folder_open</span></div>
                            <div class="install-cursor"><span class="material-symbols-rounded">near_me</span></div>
                        </div>
                    </div>
                    <h3>{{ t('howItWorks.step1Title') }}</h3>
                    <p>{{ t('howItWorks.step1Desc') }}</p>
                </div>
                <div class="step-card">
                    <div class="step-visual card flex-center">
                        <div class="file-stack">
                            <div class="file-item"></div>
                            <div class="file-item"></div>
                            <div class="file-item"></div>
                        </div>
                    </div>
                    <h3>{{ t('howItWorks.step2Title') }}</h3>
                    <p>{{ t('howItWorks.step2Desc') }}</p>
                </div>
                <div class="step-card">
                    <div class="step-visual card flex-center">
                        <div class="transfer-animation">
                            <div class="device-mini">
                                <div class="transfer-file-source"></div>
                            </div>
                            <div class="transfer-indicator"></div>
                            <div class="device-mini">
                                <div class="transfer-file-target"></div>
                            </div>
                        </div>
                    </div>
                    <h3>{{ t('howItWorks.step3Title') }}</h3>
                    <p>{{ t('howItWorks.step3Desc') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const { t } = useI18n();

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isVisible.value = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (sectionRef.value) {
        observer.observe(sectionRef.value);
    }
});
</script>

<style scoped>
</style>