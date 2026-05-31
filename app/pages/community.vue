<template>
  <div>
    <section class="community-hero">
      <div class="container">
        <h2>{{ t('community.getInvolved') }}</h2>
        <p class="section-subtitle text-center" style="margin-bottom: 40px;">{{ t('community.getInvolvedDescription') }}</p>
        <div class="social-grid">
          <a href="https://discord.gg/GSRWmQNP87" target="_blank" class="social-card discord-card">
            <div class="social-icon">
              <img src="/img/social/discord.svg" alt="" aria-hidden="true">
            </div>
            <div class="social-content">
              <span class="social-link">{{ t('community.discord') }} →</span>
            </div>
          </a>
          <a href="https://reddit.com/r/localsend" target="_blank" class="social-card reddit-card">
            <div class="social-icon">
              <img src="/img/social/reddit.svg" alt="" aria-hidden="true">
            </div>
            <div class="social-content">
              <span class="social-link">{{ t('community.reddit') }} →</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="community-section">
      <div class="container">
        <h2>{{ t('community.getHelp') }}</h2>
        <p class="section-subtitle text-center" style="margin-bottom: 40px;">{{ t('community.languageSpecific') }}</p>
        <div class="help-grid">
          <a v-for="btn in helpButtons" :key="btn.name"
             :href="btn.url"
             target="_blank"
             class="help-btn">
            {{ btn.name }}
          </a>
        </div>
      </div>
    </section>

    <section class="community-section">
      <div class="container">
        <h2>{{ t('community.contribute') }}</h2>
        <p class="section-subtitle text-center" style="margin-bottom: 40px;">{{ t('community.contributeDescription') }}</p>
        <div class="contribute-grid">
          <a href="https://github.com/localsend/localsend/issues" target="_blank" class="contribute-card">
            <Icon name="material-symbols:bug-report-outline" class="app-icon" />
            <div>
              <h4>{{ t('community.issues') }}</h4>
            </div>
          </a>
          <a href="https://github.com/localsend/localsend/pulls" target="_blank" class="contribute-card">
            <Icon name="material-symbols:merge" class="app-icon" />
            <div>
              <h4>{{ t('community.pullRequests') }}</h4>
            </div>
          </a>
          <a href="https://github.com/localsend/localsend/discussions" target="_blank" class="contribute-card">
            <Icon name="material-symbols:translate" class="app-icon" />
            <div>
              <h4>Translations</h4>
            </div>
          </a>
        </div>
      </div>
    </section>

    <SectionCta />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'community.seo.title',
  description: 'community.seo.description',
});

const { t } = useI18n();

const helpButtons = [
  { name: 'English', url: 'https://github.com/localsend/localsend/discussions/categories/discussion-english-international' },
  { name: 'Deutsch', url: 'https://github.com/localsend/localsend/discussions/categories/l-deutsch' },
  { name: 'Español', url: 'https://github.com/localsend/localsend/discussions/categories/l-espa%C3%B1ol' },
  { name: 'Français', url: 'https://github.com/localsend/localsend/discussions/categories/l-fran%C3%A7ais' },
  { name: 'Italiano', url: 'https://github.com/localsend/localsend/discussions/categories/l-italiano' },
  { name: 'Русский', url: 'https://github.com/localsend/localsend/discussions/categories/l-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9' },
  { name: '日本語', url: 'https://github.com/localsend/localsend/discussions/categories/l-%E6%97%A5%E6%9C%AC%E8%AA%9E' },
  { name: '简体中文', url: 'https://github.com/localsend/localsend/discussions/categories/l-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87' },
];
</script>

<style scoped></style>
