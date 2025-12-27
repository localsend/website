<template>
  <a :href="props.url" target="_blank" rel="noopener noreferrer nofollow"
     class="inline-block bg-gray-100 rounded-xl p-4 min-w-64">
    <Icon :name="props.language" class="text-2xl" />
    <h3 class="text-xl font-bold mt-1">{{ props.title }}</h3>
    <p class="mt-2">{{ props.description }}</p>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  language: { type: String, required: true },
  url: { type: String, required: true },
});
</script>
