<template>
  <div class="flex flex-col items-center bg-gray-100 rounded-xl pb-4 pt-8 pl-4 pr-4">
    <Icon :name="props.icon" class="text-6xl" />
    <h3 class="text-xl font-bold text-center mt-4">{{ props.title }}</h3>
    <p class="text-center mt-2">{{ props.description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
});
</script>
