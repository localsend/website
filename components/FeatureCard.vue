<template>
  <div
    class="flex flex-col items-center rounded-xl bg-gray-100 pb-4 pl-4 pr-4 pt-8 dark:bg-gray-800 dark:text-gray-300"
  >
    <Icon :name="props.icon" class="text-6xl dark:text-gray-300" />
    <h3 class="mt-4 text-center text-xl font-bold dark:text-white">
      {{ props.title }}
    </h3>
    <p class="mt-2 text-center dark:text-gray-400">{{ props.description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
});
</script>
