<template>
  <SecondaryLayout :sub-title="t('news.title')">
    <template v-slot:content>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ContentList path="/news" v-slot="{ list }">
          <div v-for="article in list" :key="article._path">
            <NuxtLink
                :to="article._path"
                class="mb-4 inline-block dark:text-white"
            >
              <div class="bg-gray-300 dark:bg-gray-700 rounded p-4 cursor-pointer">
                <h2 class="text-2xl font-bold">{{ article.title }}</h2>
                <p class="mb-2">{{ new Date(article.date).toLocaleDateString() }}</p>
                <p>{{ article.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </ContentList>
      </div>
    </template>
  </SecondaryLayout>
</template>

<script setup lang="ts">
import SecondaryLayout from "~/components/layout/SecondaryLayout.vue";

defineI18nRoute(false);

const {t} = useI18n();
</script>
