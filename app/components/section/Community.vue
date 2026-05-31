<template>
    <section id="community" class="community section">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">{{ t('community.title') }}</h2>
                <p class="section-subtitle">{{ t('community.getInvolvedDescription') }}</p>
            </div>

            <div class="grid grid-2 community-grid">
                <div class="card community-card">
                    <h3>Social Media</h3>
                    <ul class="social-links">
                        <li><a href="https://discord.gg/GSRWmQNP87" target="_blank" class="card social-item"><span>{{ t('community.discord') }}</span> <span class="accent">↗</span></a></li>
                        <li><a href="https://reddit.com/r/localsend" target="_blank" class="card social-item"><span>{{ t('community.reddit') }}</span> <span class="accent">↗</span></a></li>
                        <li><a href="https://mastodon.social/@localsend" target="_blank" class="card social-item"><span>Mastodon</span> <span class="accent">↗</span></a></li>
                        <li><a href="https://shop.localsend.org/en-eur" target="_blank" class="card social-item"><span>{{ t('footer.merch') }}</span> <span class="accent">↗</span></a></li>
                    </ul>
                </div>
                <div class="card community-card">
                    <h3>{{ t('community.getHelp') }}</h3>
                    <p>{{ t('community.languageSpecific') }}</p>
                    <ul class="lang-links">
                        <li v-for="button in helpButtons" :key="button.name">
                            <a :href="button.url" target="_blank">{{ button.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const helpButtons = [
    { name: 'English', url: 'https://github.com/localsend/localsend/discussions/categories/discussion-english-international' },
    { name: 'Deutsch', url: 'https://github.com/localsend/localsend/discussions/categories/l-deutsch' },
    { name: 'Español', url: 'https://github.com/localsend/localsend/discussions/categories/l-espa%C3%B1ol' },
    { name: 'Français', url: 'https://github.com/localsend/localsend/discussions/categories/l-fran%C3%A7ais' },
    { name: 'Italiano', url: 'https://github.com/localsend/localsend/discussions/categories/l-italiano' },
    { name: '简体中文', url: 'https://github.com/localsend/localsend/discussions/categories/l-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87' }
];
</script>

<style scoped>
</style>
