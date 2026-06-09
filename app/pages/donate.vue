<template>
  <div>
    <PageHeader :title="t('donate.title')" :description="t('donate.description')" />

    <section class="donate-page section pt-0">
        <div class="container">
            <div class="grid grid-3">
                <a href="https://github.com/sponsors/Tienisto" target="_blank" class="card contact-card">
                    <div class="feature-icon"><Icon name="material-symbols:favorite-outline" class="app-icon" /></div>
                    <h3>{{ t('donate.githubSponsors') }}</h3>
                    <p>{{ t('donate.githubSponsorsDescription') }}</p>
                    <span class="read-more">{{ t('donate.becomeSponsor') }} →</span>
                </a>
                <div class="card contact-card">
                    <div class="feature-icon"><Icon name="material-symbols:smartphone-outline" class="app-icon" /></div>
                    <h3>{{ t('donate.inApp') }}</h3>
                    <p>{{ t('donate.inAppDescription') }}</p>
                </div>
                <a href="https://github.com/localsend/localsend" target="_blank" class="card contact-card">
                    <div class="feature-icon"><Icon name="material-symbols:code" class="app-icon" /></div>
                    <h3>{{ t('donate.contribute') }}</h3>
                    <p>{{ t('donate.contributeDescription') }}</p>
                    <span class="read-more">{{ t('donate.openGithub') }} →</span>
                </a>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  title: 'donate.seo.title',
  description: 'donate.seo.description',
})
</script>