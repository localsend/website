<template>
  <SecondaryLayout :sub-title="t('news.title')">
    <template v-slot:content>
      <ContentDoc>
        <template v-slot="{ doc }">
          <article class="article">
            <h1>{{ doc.title }}</h1>
            <p class="mb-4">{{ new Date(doc.date).toLocaleDateString() }}</p>
            <ContentRenderer :value="doc" />
          </article>
        </template>
      </ContentDoc>

      <TextButton
          v-if="router.currentRoute.value.fullPath.startsWith('/news/releases')"
          href="https://github.com/localsend/localsend/blob/main/app/assets/CHANGELOG.md"
          class="mt-4 underline"
      >
        Checkout the full changelog
      </TextButton>
    </template>

    <template v-slot:back>
      <NuxtLink to="/news" class="mt-8">
        <TextButton
            class="dark:text-gray-300"
        >
          {{ $t("news.showAll") }}
        </TextButton>
      </NuxtLink>
    </template>
  </SecondaryLayout>
</template>

<script setup lang="ts">
import SecondaryLayout from "~/components/layout/SecondaryLayout.vue";

defineI18nRoute(false);

const {t} = useI18n();

const router = useRouter();

onMounted(async () => {
  const path = router.currentRoute.value.fullPath;
  await useAsyncData(() => queryContent(path).findOne())
});
</script>

<style>
.article h1 {
  font-size: 2rem;
  font-weight: 700;
}

.article h2 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1rem;
}

.article ul {
  list-style-type: circle;
  list-style-position: inside;
  padding: 0;
}

</style>