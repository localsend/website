<template>
  <div>
    <!-- Hero Section -->
    <PageHeader :title="t('contact.title')" :description="t('contact.description')" />

    <!-- Contact Section -->
    <UiSection size="lg" spacing="xl" class="min-h-[60vh] flex flex-col justify-center text-center pt-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full text-left">
        <!-- Bug Reports -->
        <div class="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <div
            class="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400 mb-6">
            <Icon name="material-symbols:bug-report" class="text-2xl" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ t('contact.bugReport') }}</h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {{ t('contact.bugReportDescription') }}
          </p>
          <UiButton as="a" href="https://github.com/localsend/localsend/issues" target="_blank" variant="secondary"
            full-width icon="fa6-brands:github">
            {{ t('contact.openIssues') }}
          </UiButton>
        </div>

        <!-- General Inquiries -->
        <div class="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <div
            class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
            <Icon name="material-symbols:mail" class="text-2xl" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ t('contact.email') }}</h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {{ t('contact.emailDescription') }}
          </p>
          <UiButton as="a" href="mailto:support@localsend.org" variant="secondary" full-width
            icon="material-symbols:send">
            support@localsend.org
          </UiButton>
        </div>
      </div>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  title: 'contact.seo.title',
  description: 'contact.seo.description',
})
</script>
