<template>
    <header
        class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-950/60">
        <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
            <!-- Logo & Brand -->
            <div class="flex items-center gap-8">
                <NuxtLink :to="localePath({ path: '/' })" class="flex items-center gap-3 group">
                    <img src="~/assets/img/logo-512.png" alt="LocalSend"
                        class="h-8 w-8 transition-transform group-hover:scale-110" />
                    <span class="text-xl font-medium text-gray-900 dark:text-white hidden md:inline-block">
                        LocalSend
                    </span>
                </NuxtLink>

                <!-- Desktop Navigation Links -->
                <div class="hidden md:flex items-center gap-1">
                    <NuxtLink :to="localePath({ path: '/download' })"
                        class="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors capitalize">
                        {{ t("navigation.downloads") }}
                    </NuxtLink>

                    <NuxtLink :to="localePath({ path: '/community' })"
                        class="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors capitalize">
                        {{ t("navigation.community") }}
                    </NuxtLink>

                    <NuxtLink :to="localePath({ path: '/contact' })"
                        class="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors capitalize">
                        {{ t("navigation.contacts") }}
                    </NuxtLink>

                    <a href="https://github.com/localsend/localsend" target="_blank" rel="noopener noreferrer"
                        class="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-1.5">
                        <Icon name="mdi:github" class="text-base" />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>

            <!-- Right Side Actions -->
            <div class="flex items-center gap-2">
                <!-- Theme Toggle -->
                <button @click="toggleTheme"
                    class="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
                    <Icon v-if="isDark" name="material-symbols:light-mode" class="text-xl" />
                    <Icon v-else name="material-symbols:dark-mode" class="text-xl" />
                </button>

                <!-- Language Switcher -->
                <LanguageSwitcher />

                <!-- CTA Button - Desktop -->
                <div class="hidden sm:block">
                    <UiButton as="NuxtLink" :to="localePath({ path: '/download' })" size="md"
                        icon="material-symbols:download" class="capitalize">
                        {{ t("navigation.downloads") }}
                    </UiButton>
                </div>

                <!-- Mobile Menu Toggle -->
                <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                    class="flex md:hidden h-9 w-9 items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="Toggle menu">
                    <Icon v-if="!isMobileMenuOpen" name="material-symbols:menu" class="text-2xl" />
                    <Icon v-else name="material-symbols:close" class="text-2xl" />
                </button>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <Transition enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in" leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2">
            <div v-if="isMobileMenuOpen"
                class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                <div class="mx-auto max-w-[1800px] px-4 py-4 space-y-1">
                    <NuxtLink :to="localePath({ path: '/download' })" @click="isMobileMenuOpen = false"
                        class="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors capitalize">
                        <Icon name="material-symbols:download" class="text-xl" />
                        {{ t("navigation.downloads") }}
                    </NuxtLink>

                    <NuxtLink :to="localePath({ path: '/community' })" @click="isMobileMenuOpen = false"
                        class="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors capitalize">
                        <Icon name="material-symbols:group" class="text-xl" />
                        {{ t("navigation.community") }}
                    </NuxtLink>

                    <a href="https://github.com/localsend/localsend" target="_blank" rel="noopener noreferrer"
                        @click="isMobileMenuOpen = false"
                        class="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <Icon name="mdi:github" class="text-xl" />
                        GitHub
                    </a>

                    <div class="pt-2 sm:hidden">
                        <UiButton as="NuxtLink" :to="localePath({ path: '/download' })"
                            @click="isMobileMenuOpen = false" full-width icon="material-symbols:arrow-downward">
                            {{ t("navigation.downloads") }}
                        </UiButton>
                    </div>
                </div>
            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const { isDark, toggleTheme, initTheme } = useTheme();

const isMobileMenuOpen = ref(false);

onMounted(() => {
    initTheme();
});

// Close mobile menu on route change
watch(() => useRoute().path, () => {
    isMobileMenuOpen.value = false;
});
</script>