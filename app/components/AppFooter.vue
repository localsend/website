<template>
    <footer class="footer section">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <NuxtLink :to="localePath('/')" class="logo">
                        <img src="/img/logo.png" alt="LocalSend Logo">
                        <span>LocalSend</span>
                    </NuxtLink>
                    <p>{{ t('footer.description') }}</p>
                </div>
                <div class="footer-links">
                    <div class="footer-col">
                        <h4>{{ t('footer.product') }}</h4>
                        <ul>
                            <li><NuxtLink :to="localePath('/download')">{{ t('footer.download') }}</NuxtLink></li>
                            <li><a href="https://web.localsend.org/" target="_blank">{{ t('footer.webapp') }}</a></li>
                            <li><NuxtLink :to="localePath('/changelog')">{{ t('footer.changelog') }}</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>{{ t('footer.community') }}</h4>
                        <ul>
                            <li><a href="https://github.com/localsend/localsend" target="_blank">{{ t('footer.github') }}</a></li>
                            <li><a href="https://discord.gg/GSRWmQNP87" target="_blank">{{ t('footer.discord') }}</a></li>
                            <li><a href="https://reddit.com/r/localsend" target="_blank">{{ t('footer.reddit') }}</a></li>
                            <li><a href="https://mastodon.social/@localsend" target="_blank">Mastodon</a></li>
                            <li><NuxtLink :to="localePath('/donate')">{{ t('footer.donate') }}</NuxtLink></li>
                            <li><a href="https://shop.localsend.org/en-eur" target="_blank">{{ t('footer.merch') }}</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>{{ t('footer.legal') }}</h4>
                        <ul>
                            <li><NuxtLink :to="localePath('/privacy')">{{ t('footer.privacy') }}</NuxtLink></li>
                            <li><NuxtLink :to="localePath('/terms')">{{ t('footer.terms') }}</NuxtLink></li>
                            <li><NuxtLink :to="localePath('/imprint')">{{ t('footer.imprint') }}</NuxtLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="copyright">
                    &copy; 2022 - {{ year }} 
                    <a href="https://github.com/Tienisto" target="_blank">Tien Do Nam</a>. 
                    {{ t('footer.underlicense') }} 
                    <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" class="license-link">{{ t('footer.license') }}</a>
                </div>
                <div class="attribution">
                    {{ t('footer.design_by') }} 
                    <a href="https://skyade.carrd.co/" target="_blank">Skyade</a>.
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<style scoped>
</style>
