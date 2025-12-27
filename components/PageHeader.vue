<template>
    <UiSection size="md" spacing="xl" class="pt-32 text-center relative overflow-hidden">
        <!-- Vercel-style Grid Background with Bottom Fade -->
        <div
            class="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)]">
        </div>

        <!-- Gradient Orb -->
        <div
            class="absolute left-0 right-0 top-0 -z-10 m-auto h-[240px] w-[240px] rounded-full bg-teal-400 opacity-20 blur-[100px]">
        </div>

        <div class="relative z-10 max-w-3xl mx-auto">
            <h1
                class="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 dark:text-white mb-3">
                {{ title }}
            </h1>
            <p v-if="description" class="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
                {{ description }}
            </p>
        </div>
    </UiSection>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    description?: string;
}>();
</script>