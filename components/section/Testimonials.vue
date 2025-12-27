<template>
    <UiSection :title="t('home.testimonials.title')" :description="t('home.testimonials.description')" size="full"
        spacing="lg">
        <div class="relative overflow-hidden space-y-4">
            <!-- Gradient Overlays for fade effect -->
            <div
                class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none">
            </div>
            <div
                class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none">
            </div>

            <!-- Row 1 - Scroll Left -->
            <div class="flex gap-4 animate-scroll-left">
                <div v-for="(review, i) in [...reviews, ...reviews]" :key="`row1-${i}`"
                    class="flex-none w-[350px] p-5 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="font-medium text-gray-900 dark:text-white text-sm">
                            {{ review.author }}
                        </div>
                        <Icon name="fa6-solid:bullhorn" class="ml-auto text-gray-400 dark:text-gray-600 text-md" />
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        "{{ review.text }}"
                    </p>
                </div>
            </div>

            <!-- Row 2 - Scroll Right (slower) -->
            <div class="flex gap-4 animate-scroll-right">
                <div v-for="(review, i) in [...reviews.slice().reverse(), ...reviews.slice().reverse()]"
                    :key="`row2-${i}`"
                    class="flex-none w-[350px] p-5 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="font-medium text-gray-900 dark:text-white text-sm">
                            {{ review.author }}
                        </div>
                        <Icon name="fa6-solid:bullhorn" class="ml-auto text-gray-400 dark:text-gray-600 text-md" />
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        "{{ review.text }}"
                    </p>
                </div>
            </div>
        </div>
    </UiSection>
</template>

<script setup lang="ts">
const { t } = useI18n();

const reviews = computed(() => [
    {
        text: "Nice >:]",
        author: "DySQRD"
    },
    {
        text: "Incredible software. Everything I wanted!",
        author: "sentrionic"
    },
    {
        text: "Final I don't have to use gmail drafts to easily share files",
        author: "Éric"
    },
    {
        text: "Great app and great work!",
        author: "ss"
    },
    {
        text: "Thank god for this app!! All my devices use different operating systems which is very annoying. LocalSend worked instantly, even on my fussy Linux pc! Thank you so much!",
        author: "Casey"
    },
    {
        text: "What a great app, thank you!",
        author: "Jesus Saves"
    },
    {
        text: "Nice app",
        author: "Francois"
    },
    {
        text: "Great app",
        author: "Lorenzo"
    },
    {
        text: "Thank you!",
        author: "Kiki"
    },
    {
        text: "Such a useful app!",
        author: "Magid"
    },
    {
        text: "This app gets job done and supports all different platforms I use. Well done",
        author: "Elias Jackson"
    },
    {
        text: "LocalSend rules!",
        author: "Johnny"
    },
    {
        text: "Exactly what apps should be like - clean beautiful UX, that solves customer problems.",
        author: "Imran"
    },
    {
        text: "LocalSend is fantastic. Thank you!",
        author: "Giorgio"
    }
]);
</script>

<style scoped>
@keyframes scroll-left {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

@keyframes scroll-right {
    0% {
        transform: translateX(-50%);
    }

    100% {
        transform: translateX(0);
    }
}

.animate-scroll-left {
    animation: scroll-left 30s linear infinite;
}

.animate-scroll-left:hover {
    animation-play-state: paused;
}

.animate-scroll-right {
    animation: scroll-right 35s linear infinite;
}

.animate-scroll-right:hover {
    animation-play-state: paused;
}

.animate-scroll-left-slow {
    animation: scroll-left 40s linear infinite;
}

.animate-scroll-left-slow:hover {
    animation-play-state: paused;
}
</style>