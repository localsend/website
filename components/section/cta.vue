<template>
    <UiSection size="full" spacing="xl" class="relative overflow-hidden text-center">
        <!-- Background Pattern -->
        <div class="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
            <!-- Hexagon Pattern with Radial Fade -->
            <div
                class="absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_40%,transparent_100%)]">
                <div class="absolute h-full w-full opacity-[0.15] dark:opacity-[0.08]"
                    style="background-image: url('data:image/svg+xml,%3Csvg width=\'50\' height=\'43.4\' viewBox=\'0 0 50 43.4\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M25 1l12.5 7.2v14.5L25 30l-12.5-7.2V8.2L25 1z\' fill=\'none\' stroke=\'%2314b8a6\' stroke-width=\'0.8\' opacity=\'0.4\'/%3E%3C/svg%3E'); background-size: 50px 43.4px;">
                </div>
            </div>

            <!-- Overlapping Circles Pattern -->
            <div
                class="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_90%)]">
                <div class="absolute h-full w-full opacity-[0.06] dark:opacity-[0.04]"
                    style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'8\' fill=\'none\' stroke=\'%230d9488\' stroke-width=\'0.5\'/%3E%3Ccircle cx=\'0\' cy=\'0\' r=\'8\' fill=\'none\' stroke=\'%230d9488\' stroke-width=\'0.5\'/%3E%3Ccircle cx=\'60\' cy=\'0\' r=\'8\' fill=\'none\' stroke=\'%230d9488\' stroke-width=\'0.5\'/%3E%3Ccircle cx=\'0\' cy=\'60\' r=\'8\' fill=\'none\' stroke=\'%230d9488\' stroke-width=\'0.5\'/%3E%3Ccircle cx=\'60\' cy=\'60\' r=\'8\' fill=\'none\' stroke=\'%230d9488\' stroke-width=\'0.5\'/%3E%3C/svg%3E'); background-size: 60px 60px;">
                </div>
            </div>

            <!-- Diamond Grid Pattern -->
            <div
                class="absolute inset-0 [mask-image:radial-gradient(ellipse_50%_40%_at_50%_50%,#000_20%,transparent_80%)]">
                <div class="absolute h-full w-full opacity-[0.08] dark:opacity-[0.05]"
                    style="background-image: url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0l10 10-10 10-10-10z\' fill=\'none\' stroke=\'%2306b6d4\' stroke-width=\'0.6\'/%3E%3C/svg%3E'); background-size: 40px 40px;">
                </div>
            </div>
        </div>

        <!-- Animated Gradient Orbs -->
        <div
            class="absolute top-1/4 left-1/4 -z-10 w-[300px] h-[300px] rounded-full bg-teal-400/15 blur-[100px] animate-blob">
        </div>
        <div
            class="absolute bottom-1/4 right-1/4 -z-10 w-[350px] h-[350px] rounded-full bg-blue-400/10 blur-[100px] animate-blob animation-delay-2000">
        </div>

        <div class="relative z-10 max-w-3xl mx-auto px-4">
            <h2
                class="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 dark:text-white mb-4 text-balance">
                {{ t("cta.title") || "Ready to share?" }}
            </h2>
            <p class="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                {{ t("cta.description") || "Download LocalSend now and share files effortlessly across your devices." }}
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <UiButton as="NuxtLink" :to="localePath({ path: '/download' })" size="lg"
                    icon="material-symbols:download" class="shadow-xl shadow-teal-500/20">
                    {{ t("cta.download") }}
                </UiButton>
            </div>
        </div>
    </UiSection>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<style scoped>
@keyframes blob {
    0% {
        transform: translate(0px, 0px) scale(1);
    }

    33% {
        transform: translate(30px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }

    100% {
        transform: translate(0px, 0px) scale(1);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}
</style>