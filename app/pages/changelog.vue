<template>
  <div>
    <PageHeader :title="t('changelog.title')" :description="t('changelog.description')" />

    <section class="changelog section pt-0">
        <div class="container">
            <div class="changelog-controls">
                <div class="search-wrapper">
                    <Icon name="material-symbols:search" class="app-icon" />
                    <input v-model="searchQuery" type="text" :placeholder="t('changelog.searchPlaceholder')" class="search-input" />
                </div>

                <div class="filter-group">
                    <button v-for="f in filterOptions" :key="f.value" 
                        @click="activeFilter = f.value" 
                        class="filter-btn"
                        :class="{ active: activeFilter === f.value }">
                        {{ f.label }}
                        ({{ f.count }})
                    </button>
                </div>
            </div>

            <div v-if="status === 'pending'" class="flex-center py-20">
                <Icon name="material-symbols:progress-activity" class="app-icon accent animate-spin" />
            </div>

            <div v-else-if="status === 'error' || !versions" class="text-center py-20">
                <Icon name="material-symbols:error-outline" class="app-icon text-muted mb-4" style="font-size: 48px;" />
                <p class="text-muted mb-6">{{ t('changelog.errorLoading') }}</p>
                <a href="https://github.com/localsend/localsend/blob/main/app/assets/CHANGELOG.md" target="_blank" class="btn btn-secondary">
                    <Icon name="material-symbols:code" class="app-icon mr-2" />
                    {{ t('changelog.viewOnGithub') }}
                </a>
            </div>

            <div v-else>
                <div v-if="filteredVersions.length === 0" class="text-center py-16">
                    <Icon name="material-symbols:search-off" class="app-icon text-muted mb-4" style="font-size: 48px;" />
                    <p class="text-muted">{{ t('changelog.noResults') }}</p>
                </div>

                <div class="version-list">
                    <article v-for="version in filteredVersions" :key="version.version" class="version-item">
                        <div class="version-header">
                            <div>
                                <div class="version-tag">{{ formatVersionTitle(version.version) }}</div>
                                <div v-if="version.date" class="version-date">{{ formatDate(version.date) }}</div>
                            </div>
                            <div v-if="version.version.toLowerCase() === 'unreleased'" class="badge">
                                {{ t('changelog.upcoming') }}
                            </div>
                        </div>

                        <div class="card changelog-card">
                            <div v-for="(entry, j) in version.entries" :key="j" class="change-item">
                                <span class="type-tag" :class="`type-${entry.type}`">{{ entry.type }}</span>
                                <div class="change-content">
                                    <span v-if="entry.platform" class="platform-tag mr-2">{{ entry.platform }}</span>
                                    <span class="change-desc">{{ entry.description }}</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="flex-center pt-10">
                    <a href="https://github.com/localsend/localsend/blob/main/app/assets/CHANGELOG.md" target="_blank" class="btn btn-secondary">
                        <Icon name="material-symbols:code" class="app-icon mr-2" />
                        {{ t('changelog.viewOnGithub') }}
                    </a>
                </div>
            </div>
        </div>
    </section>

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

</script>

<style scoped>
/*
 * In dark mode the global theme defines --button-bg and --accent-primary as the
 * same colour, so the shared "button-bg background + accent-primary text" pairs
 * render invisible text. Override the affected elements with contrasting colours
 * that hold up in both light and dark themes.
 */

/* "feat" tag: keep the green colour-coding (matches .type-fix / .type-i18n). */
.type-tag.type-feat {
    background: rgba(0, 169, 154, 0.1);
    color: #00A99A;
}

/* "Upcoming" pill. */
.badge {
    color: var(--button-text);
}

/* "View on GitHub" button hover. */
.btn-secondary:hover {
    color: var(--button-text);
}
</style>
