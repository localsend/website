<template>
    <UiSection as="div" size="xl" spacing="xl" :container-padding="true"
        class="min-h-[90vh] flex items-center justify-center overflow-hidden relative pt-32 pb-20">
        <!-- 1. Base Background -->
        <div class="absolute inset-0 -z-30 h-full w-full bg-white dark:bg-gray-950"></div>

        <!-- 2. Top Spotlight / Aurora Effect -->
        <div class="absolute top-0 left-0 right-0 -z-20 h-[600px] w-full overflow-hidden pointer-events-none">
            <div
                class="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-[100%] bg-gradient-to-b from-teal-100/40 via-blue-100/20 to-transparent dark:from-teal-900/20 dark:via-blue-900/10 blur-3xl">
            </div>
        </div>

        <!-- 3. Animated Gradient Orbs -->
        <div
            class="absolute top-20 left-1/4 -z-20 w-96 h-96 bg-teal-400/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-70 animate-blob">
        </div>
        <div
            class="absolute top-20 right-1/4 -z-20 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-70 animate-blob animation-delay-2000">
        </div>
        <div
            class="absolute -bottom-32 left-1/2 -translate-x-1/2 -z-20 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-70 animate-blob animation-delay-4000">
        </div>

        <!-- 4. Grid Pattern with Radial Mask -->
        <div
            class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        </div>

        <div class="relative z-10 w-full max-w-6xl mx-auto text-center">

            <!-- Badge -->
            <div class="flex justify-center mb-8 animate-fade-in-up">
                <NuxtLink :to="localePath('/download')"
                    class="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/50 px-4 py-1.5 text-sm font-medium text-gray-600 backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950/50 dark:text-gray-400 dark:hover:bg-gray-950 dark:hover:text-white shadow-sm hover:shadow-md">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    <span>
                        {{ t('home.hero.badge') }}
                    </span>
                    <Icon name="material-symbols:arrow-forward"
                        class="text-gray-400 transition-transform group-hover:translate-x-0.5" />
                </NuxtLink>
            </div>

            <!-- Hero Title -->
            <h1
                class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-gray-900 dark:text-white mb-8 text-balance leading-[1.1] animate-fade-in-up delay-100">
                {{ t('home.hero.title1') }}
                <br class="hidden md:block" />
                <span
                    class="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-400 dark:from-gray-400 dark:to-gray-600">
                    {{ t('home.hero.title2') }}
                </span>
            </h1>

            <!-- Hero Description -->
            <p
                class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-normal animate-fade-in-up delay-200">
                {{ t("home.slogan1") }} {{ t("home.slogan2") }}
                {{ t('home.hero.subtitle') }}
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up delay-300">
                <UiButton as="NuxtLink" :to="localePath('/download')" size="lg" icon="material-symbols:download"
                    class="shadow-xl shadow-teal-500/20">
                    {{ t("home.download") }}
                </UiButton>

                <UiButton as="a" href="https://web.localsend.org" variant="secondary" size="lg"
                    icon="material-symbols:language">
                    {{ t("home.web") }}
                </UiButton>
            </div>

            <!-- Visuals Container -->
            <div class="relative mx-auto max-w-5xl px-4 animate-fade-in-up delay-500 perspective-1000">

                <!-- Desktop Image (Main) -->
                <div
                    class="relative z-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 p-2 shadow-2xl shadow-gray-200/50 dark:shadow-black/50 backdrop-blur-sm transform transition-transform hover:scale-[1.01] duration-500">
                    <img :src="'/img/hero-image-desktop.webp'" alt="LocalSend Desktop"
                        class="rounded-xl w-full border border-gray-100 dark:border-gray-800" />
                </div>

                <!-- Mobile Image (Overlay) -->
                <div
                    class="absolute -bottom-6 -right-2 md:-bottom-12 md:-right-12 z-20 w-[25%] min-w-[140px] max-w-[240px]">
                    <div
                        class="relative rounded-[1rem] md:rounded-[2rem] border-[6px] md:border-8 border-gray-900 dark:border-gray-800 bg-gray-900 shadow-2xl overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500 hover:scale-105 hover:z-30 origin-bottom-right">

                        <!-- Screen Image -->
                        <img :src="'/img/screenshot-phone-1.webp'" alt="LocalSend Mobile"
                            class="w-full h-auto rounded-[1rem] md:rounded-[1.5rem] border border-gray-800 opacity-90 bg-gray-800" />
                    </div>
                </div>

            </div>
        </div>
    </UiSection>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
    transform: translateY(20px);
}

.delay-100 {
    animation-delay: 0.1s;
}

.delay-200 {
    animation-delay: 0.2s;
}

.delay-300 {
    animation-delay: 0.3s;
}

.delay-500 {
    animation-delay: 0.5s;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Blob Animation */
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

.animation-delay-4000 {
    animation-delay: 4s;
}

.perspective-1000 {
    perspective: 1000px;
}
</style>
