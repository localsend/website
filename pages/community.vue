<template>
  <div>
    <!-- Hero Section -->
    <UiSection size="md" spacing="xl" class="pt-32 text-center relative overflow-hidden">
      <!-- Vercel-style Grid Background -->
      <div
        class="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      </div>
      <div
        class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-400 opacity-20 blur-[100px]">
      </div>

      <div class="relative z-10 max-w-3xl mx-auto">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-gray-900 dark:text-white mb-6">
          {{ t('community.title') }}
        </h1>
        <p class="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          {{ t('community.getHelpDescription') }}
        </p>
      </div>
    </UiSection>

    <!-- Social Platforms (Compact & Dense) -->
    <UiSection :title="t('community.getInvolved')" :description="t('community.getInvolvedDescription')" size="md"
      spacing="md">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Discord Card -->
        <a href="https://discord.gg/GSRWmQNP87" target="_blank"
          class="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm">
          <div class="flex items-start gap-4">
            <div class="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5865F2]/10 text-[#5865F2]">
              <Icon name="fa6-brands:discord" class="text-xl" />
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-base font-semibold text-gray-900 dark:text-white">Discord</h3>
                <Icon name="material-symbols:arrow-outward"
                  class="text-gray-400 group-hover:text-[#5865F2] transition-colors text-sm" />
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                Join our active server to chat with developers and get instant help.
              </p>
              <span class="text-xs font-medium text-[#5865F2] group-hover:underline">
                {{ t('community.discord') }}
              </span>
            </div>
          </div>
        </a>

        <!-- Reddit Card -->
        <a href="https://reddit.com/r/localsend" target="_blank"
          class="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm">
          <div class="flex items-start gap-4">
            <div class="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF4500]/10 text-[#FF4500]">
              <Icon name="fa6-brands:reddit" class="text-xl" />
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-base font-semibold text-gray-900 dark:text-white">Reddit</h3>
                <Icon name="material-symbols:arrow-outward"
                  class="text-gray-400 group-hover:text-[#FF4500] transition-colors text-sm" />
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                Participate in discussions and stay updated with announcements.
              </p>
              <span class="text-xs font-medium text-[#FF4500] group-hover:underline">
                {{ t('community.reddit') }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </UiSection>

    <!-- Development / Contribution (Compact) -->
    <UiSection title="Contribute" description="Help us improve LocalSend." size="md" spacing="lg">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Issues -->
        <a href="https://github.com/localsend/localsend/issues" target="_blank"
          class="group block p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-900 transition-all duration-200">
          <div class="flex items-center gap-3 mb-2">
            <Icon name="material-symbols:bug-report"
              class="text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            <h3 class="font-medium text-gray-900 dark:text-white">{{ t('community.issues') }}</h3>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 pl-8">Found a bug? Check our issue tracker.</p>
        </a>

        <!-- PRs -->
        <a href="https://github.com/localsend/localsend/pulls" target="_blank"
          class="group block p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-900 transition-all duration-200">
          <div class="flex items-center gap-3 mb-2">
            <Icon name="material-symbols:merge"
              class="text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            <h3 class="font-medium text-gray-900 dark:text-white">{{ t('community.pullRequests') }}</h3>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 pl-8">Ready to contribute code? Open a PR.</p>
        </a>
      </div>
    </UiSection>

    <!-- Language Support (Dense Grid) -->
    <UiSection :title="t('community.getHelp')" description="Join language-specific discussions." size="md" spacing="lg">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <a v-for="button in helpButtons" :key="button.name" :href="button.url" target="_blank"
          class="flex items-center justify-center px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200">
          <span class="text-xs font-medium text-gray-600 dark:text-gray-400">
            {{ button.name }}
          </span>
        </a>
      </div>
    </UiSection>

    <SectionCta />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'community.seo.title',
  description: 'community.seo.description',
})

const { t } = useI18n()

interface HelpButton {
  name: string;
  url: string;
}

const helpButtons: HelpButton[] = [
  {
    name: 'English',
    url: 'https://github.com/localsend/localsend/discussions/categories/discussion-english-international',
  },
  {
    name: 'Deutsch',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-deutsch',
  },
  {
    name: 'Español',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-espa%C3%B1ol',
  },
  {
    name: 'Français',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-fran%C3%A7ais',
  },
  {
    name: 'Italiano',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-italiano',
  },
  {
    name: 'Русский',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9',
  },
  {
    name: '日本語',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-%E6%97%A5%E6%9C%AC%E8%AA%9E',
  },
  {
    name: '简体中文',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87',
  },
];
</script>

<style scoped></style>
