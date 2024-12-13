<script setup>
const route = useRoute()
const { t } = useI18n()
const localeHead = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const title = computed(() => route.meta.title ? t(route.meta.title) : 'LocalSend')
const description = computed(() => route.meta.description ? t(route.meta.description) : null)
</script>

<template>
  <div>
    <Html :lang="localeHead.htmlAttrs.lang" :dir="localeHead.htmlAttrs.dir">
    <Head>
      <Title>{{ title }}</Title>
      <Meta v-if="description" name="description" :content="description"/>
      <template v-for="link in localeHead.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang"/>
      </template>
      <template v-for="meta in localeHead.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content"/>
      </template>
    </Head>
    <Body class="dark:bg-gray-900">
    <slot/>
    </Body>
    </Html>
  </div>
</template>
