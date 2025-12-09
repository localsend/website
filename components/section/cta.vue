<template>
    <UiSection size="full" spacing="xl"
        class="relative overflow-hidden border-t border-gray-200 dark:border-gray-800 text-center">
        <!-- Background Pattern -->
        <div
            class="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        </div>

        <!-- Gradient Blob -->
        <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-teal-400/20 blur-[120px]">
        </div>

        <div class="relative z-10 max-w-3xl mx-auto px-4">
            <h2
                class="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 dark:text-white mb-4 text-balance">
                {{ t("home.get") || "Ready to share?" }}
            </h2>
            <p class="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Join thousands of users sharing files securely and quickly.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <UiButton as="NuxtLink" :to="localePath({ path: '/download' })" size="lg"
                    icon="material-symbols:download" class="shadow-xl shadow-teal-500/20">
                    {{ t("home.download") }}
                </UiButton>
            </div>
        </div>
    </UiSection>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>