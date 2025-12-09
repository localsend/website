<template>
  <div>
    <UiSection title="Contact Us" description="Get in touch with the team or the community." size="lg" spacing="xl"
      class="min-h-[60vh] flex flex-col justify-center text-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full text-left">
        <!-- Bug Reports -->
        <div class="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <div
            class="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400 mb-6">
            <Icon name="material-symbols:bug-report" class="text-2xl" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Report a Bug</h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            Found an issue? Please report it on our GitHub Issues page so we can track and fix it.
          </p>
          <UiButton as="a" href="https://github.com/localsend/localsend/issues" target="_blank" variant="secondary"
            full-width icon="fa6-brands:github">
            Open GitHub Issues
          </UiButton>
        </div>

        <!-- General Inquiries -->
        <div class="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <div
            class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
            <Icon name="material-symbols:mail" class="text-2xl" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            For general inquiries, partnership opportunities, or private matters.
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
definePageMeta({
  title: 'Contact - LocalSend',
})
</script>
