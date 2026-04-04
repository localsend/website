<template>
  <div>
    <PageHeader :title="t('changelog.title')" :description="t('changelog.description')" />

    <UiSection size="md" spacing="md" class="pt-0">
      <!-- Controls -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        <!-- Search -->
        <div class="relative w-full sm:max-w-xs">
          <Icon name="material-symbols:search" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input v-model="searchQuery" type="text" :placeholder="t('changelog.searchPlaceholder')"
            class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors" />
        </div>

        <!-- Filter pills -->
        <div class="flex items-center gap-2 flex-wrap">
          <button v-for="f in filterOptions" :key="f.value" @click="activeFilter = f.value" :class="[
            'px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border',
            activeFilter === f.value
              ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent'
              : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
          ]">
            {{ f.label }}
            <span class="ml-1.5 opacity-60">{{ f.count }}</span>
          </button>
        </div>
      </div>

      <!-- Loading state -->
      <div v-if="status === 'pending'" class="flex items-center justify-center py-20">
        <Icon name="material-symbols:progress-activity" class="text-3xl text-teal-500 animate-spin" />
      </div>

      <!-- Error state -->
      <div v-else-if="status === 'error' || !versions" class="text-center py-20">
        <Icon name="material-symbols:error-outline" class="text-4xl text-gray-400 mb-4 block mx-auto" />
        <p class="text-gray-500 mb-4">{{ t('changelog.errorLoading') }}</p>
        <a href="https://github.com/localsend/localsend/blob/main/app/assets/CHANGELOG.md" target="_blank"
          class="inline-flex items-center gap-2 text-teal-600 hover:text-teal-500 text-sm font-medium transition-colors">
          <Icon name="mdi:github" />
          {{ t('changelog.viewOnGithub') }}
        </a>
      </div>

      <!-- Version list -->
      <div v-else>
        <!-- No results -->
        <div v-if="filteredVersions.length === 0" class="text-center py-16">
          <Icon name="material-symbols:search-off" class="text-4xl text-gray-400 mb-3 block mx-auto" />
          <p class="text-gray-500">{{ t('changelog.noResults') }}</p>
        </div>

        <div class="space-y-0">
          <article v-for="(version, i) in filteredVersions" :key="version.version"
            :class="['border-b border-gray-100 dark:border-gray-800/50 last:border-b-0', i === 0 ? 'pb-10' : 'py-10']">

            <!-- Version header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div class="flex items-center gap-3 flex-wrap">
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">
                  {{ formatVersionTitle(version.version) }}
                </h2>
                <span v-if="version.version.toLowerCase() === 'unreleased'"
                  class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
                  <span class="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  {{ t('changelog.upcoming') }}
                </span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <span v-if="version.date" class="text-gray-500 dark:text-gray-400">
                  {{ formatDate(version.date) }}
                </span>
                <span
                  class="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  {{ version.entries.length }} {{ version.entries.length === 1 ? t('changelog.change') :
                    t('changelog.changes') }}
                </span>
              </div>
            </div>

            <!-- Entries -->
            <div class="space-y-1.5">
              <div v-for="(entry, j) in version.entries" :key="j" class="flex items-start gap-2.5 py-1 text-sm">
                <!-- Type badge -->
                <span :class="typeBadgeClasses(entry.type)"
                  class="inline-flex items-center justify-center min-w-[42px] px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider flex-shrink-0 mt-px">
                  {{ entry.type }}
                </span>

                <!-- Platform tag -->
                <span v-if="entry.platform"
                  class="text-[11px] font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800/80 px-1.5 py-0.5 rounded flex-shrink-0 mt-px">
                  {{ entry.platform }}
                </span>

                <!-- Description -->
                <span class="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {{ entry.description }}
                </span>
              </div>
            </div>
          </article>
        </div>

        <!-- GitHub link -->
        <div class="flex justify-center pt-10">
          <a href="https://github.com/localsend/localsend/blob/main/app/assets/CHANGELOG.md" target="_blank"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <Icon name="mdi:github" class="text-lg" />
            {{ t('changelog.viewOnGithub') }}
          </a>
        </div>
      </div>
    </UiSection>

    <SectionCta />
  </div>
</template>

<script setup lang="ts">
import { parseChangelog } from '~/utils/parseChangelog';

definePageMeta({
  title: 'changelog.seo.title',
  description: 'changelog.seo.description',
});

const { t, locale } = useI18n();

const { data: versions, status } = await useAsyncData('changelog', async () => {
  const raw = await $fetch<string>(
    'https://raw.githubusercontent.com/localsend/localsend/main/app/assets/CHANGELOG.md',
    { responseType: 'text' },
  );
  return parseChangelog(raw);
});

const searchQuery = ref('');
const activeFilter = ref('all');

const filterOptions = computed(() => {
  if (!versions.value) return [];

  const allEntries = versions.value.flatMap(v => v.entries);
  return [
    { label: t('changelog.all'), value: 'all', count: allEntries.length },
    { label: t('changelog.features'), value: 'feat', count: allEntries.filter(e => e.type === 'feat').length },
    { label: t('changelog.fixes'), value: 'fix', count: allEntries.filter(e => e.type === 'fix').length },
    { label: t('changelog.i18nFilter'), value: 'i18n', count: allEntries.filter(e => e.type === 'i18n').length },
  ];
});

const filteredVersions = computed(() => {
  if (!versions.value) return [];

  const query = searchQuery.value.toLowerCase().trim();

  return versions.value
    .map(v => ({
      ...v,
      entries: v.entries.filter(e => {
        const matchesFilter = activeFilter.value === 'all' || e.type === activeFilter.value;
        const matchesSearch = !query
          || e.description.toLowerCase().includes(query)
          || e.platform?.toLowerCase().includes(query)
          || e.type.includes(query);
        return matchesFilter && matchesSearch;
      }),
    }))
    .filter(v => v.entries.length > 0);
});

function formatVersionTitle(version: string): string {
  if (version.toLowerCase() === 'unreleased') return 'Unreleased';
  return `v${version}`;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function typeBadgeClasses(type: string): string {
  switch (type) {
    case 'feat':
      return 'bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-400';
    case 'fix':
      return 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400';
    case 'i18n':
      return 'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-400';
    default:
      return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
  }
}
</script>
