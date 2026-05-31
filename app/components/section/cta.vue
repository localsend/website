<template>
    <section id="contact" class="contact section">
        <div class="container text-center">
            <div class="section-header">
                <h2 class="section-title">{{ t('contact.title') }}</h2>
                <p class="section-subtitle">{{ t('contact.description') }}</p>
            </div>
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
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped>
</style>