<template>
    <header class="navbar" :class="{ 'scrolled': isScrolled }">
        <nav class="container">
            <NuxtLink :to="localePath('/')" class="logo">
                <img src="/img/logo.png" alt="LocalSend Logo">
                <span>LocalSend</span>
            </NuxtLink>
            
            <ul class="nav-links">
                <li><NuxtLink :to="localePath('/download')">{{ t('navigation.downloads') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath('/community')">{{ t('navigation.community') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath('/contact')">{{ t('navigation.contacts') }}</NuxtLink></li>
                <li><a href="https://github.com/localsend/localsend" target="_blank" class="github-link">GitHub</a></li>
            </ul>

            <div class="nav-actions">
                <button @click="toggleTheme" class="theme-toggle" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
                    <span class="material-symbols-rounded">{{ isDark ? 'light_mode' : 'dark_mode' }}</span>
                </button>
                <LanguageSwitcher />
                <NuxtLink :to="localePath('/download')" class="btn btn-primary btn-sm hide-mobile">{{ t('home.download') }}</NuxtLink>
                <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="mobile-toggle">
                    <span class="material-symbols-rounded">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
                </button>
            </div>
        </nav>

        <Transition name="fade">
            <div v-if="isMobileMenuOpen" class="mobile-menu">
                <ul class="mobile-nav-links">
                    <li><NuxtLink :to="localePath('/download')" @click="isMobileMenuOpen = false">{{ t('navigation.downloads') }}</NuxtLink></li>
                    <li><NuxtLink :to="localePath('/community')" @click="isMobileMenuOpen = false">{{ t('navigation.community') }}</NuxtLink></li>
                    <li><NuxtLink :to="localePath('/contact')" @click="isMobileMenuOpen = false">{{ t('navigation.contacts') }}</NuxtLink></li>
                    <li><a href="https://github.com/localsend/localsend" target="_blank">GitHub</a></li>
                </ul>
                <div class="mobile-menu-footer">
                    <NuxtLink :to="localePath('/download')" class="btn btn-primary btn-block" @click="isMobileMenuOpen = false">{{ t('home.download') }}</NuxtLink>
                </div>
            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
const { t } = useI18n();
const localePath = useLocalePath();
const { isDark, toggleTheme, initTheme } = useTheme();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
    initTheme();
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

watch(() => useRoute().path, () => {
    isMobileMenuOpen.value = false;
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu {
    position: fixed;
    top: 70px;
    left: 20px;
    right: 20px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    z-index: 1000;
}

.mobile-nav-links {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
}

.mobile-nav-links li {
    margin-bottom: 1rem;
}

.mobile-nav-links a {
    text-decoration: none;
    color: var(--text-main);
    font-size: 1.25rem;
    font-weight: 500;
}

.btn-block {
    display: block;
    width: 100%;
    text-align: center;
}

@media (min-width: 769px) {
    .mobile-menu {
        display: none;
    }
}
</style>