<template>
    <UiSection size="md" spacing="lg">
        <div
            class="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm overflow-hidden">
            <div
                class="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-800">

                <!-- GitHub Stars -->
                <div
                    class="p-8 flex flex-col items-center text-center group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <div
                        class="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl border border-black/5 dark:border-white/10 shadow-lg bg-gradient-to-tr from-gray-900/5 to-gray-900/0 dark:from-white/10 dark:to-white/5 group-hover:from-gray-800 group-hover:to-black dark:group-hover:from-white dark:group-hover:to-gray-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon name="fa6-brands:github"
                            class="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors duration-500" />
                    </div>
                    <div class="text-3xl font-medium text-gray-900 dark:text-white tracking-tight mb-1">70k+</div>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-400">GitHub Stars</div>
                </div>

                <!-- Downloads -->
                <div
                    class="p-8 flex flex-col items-center text-center group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <div
                        class="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl border border-black/5 dark:border-white/10 shadow-lg bg-gradient-to-tr from-gray-900/5 to-gray-900/0 dark:from-white/10 dark:to-white/5 group-hover:from-teal-500 group-hover:to-emerald-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon name="material-symbols:download"
                            class="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div class="text-3xl font-medium text-gray-900 dark:text-white tracking-tight mb-1">5M+</div>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Downloads</div>
                </div>

                <!-- Contributors -->
                <div
                    class="p-8 flex flex-col items-center text-center group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <div
                        class="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl border border-black/5 dark:border-white/10 shadow-lg bg-gradient-to-tr from-gray-900/5 to-gray-900/0 dark:from-white/10 dark:to-white/5 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon name="material-symbols:group"
                            class="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div class="text-3xl font-medium text-gray-900 dark:text-white tracking-tight mb-1">100+</div>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Contributors</div>
                </div>

                <!-- Privacy -->
                <div
                    class="p-8 flex flex-col items-center text-center group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <div
                        class="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl border border-black/5 dark:border-white/10 shadow-lg bg-gradient-to-tr from-gray-900/5 to-gray-900/0 dark:from-white/10 dark:to-white/5 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon name="material-symbols:visibility-off"
                            class="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div class="text-3xl font-medium text-gray-900 dark:text-white tracking-tight mb-1">0</div>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Ads or Trackers</div>
                </div>

            </div>
        </div>
    </UiSection>
</template>

<script setup lang="ts">
// No props needed
</script>