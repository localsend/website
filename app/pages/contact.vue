<template>
  <div>
    <PageHeader :title="t('contact.title')" :description="t('contact.description')" />

    <section class="contact-page section pt-0">
        <div class="container">
            <div class="grid grid-2">
                <a href="https://github.com/localsend/localsend/issues" target="_blank" class="card contact-card">
                    <div class="feature-icon"><span class="material-symbols-rounded">bug_report</span></div>
                    <h3>{{ t('contact.bugReport') }}</h3>
                    <p>{{ t('contact.bugReportDescription') }}</p>
                    <span class="read-more">{{ t('contact.openIssues') }} →</span>
                </a>
                <a href="mailto:support@localsend.org" class="card contact-card">
                    <div class="feature-icon"><span class="material-symbols-rounded">mail</span></div>
                    <h3>{{ t('contact.email') }}</h3>
                    <p>{{ t('contact.emailDescription') }}</p>
                    <span class="read-more">support@localsend.org →</span>
                </a>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  title: 'contact.seo.title',
  description: 'contact.seo.description',
})
</script>
