<template>
  <div class="inline-block">
    <a
      v-if="href"
      :href="href"
      :target="target"
      class="flex items-center rounded-lg px-2 py-1 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
    >
      <Icon v-if="props.icon" :name="props.icon" class="me-2" />
      <slot />
    </a>
    <div
      v-else
      class="flex items-center rounded-lg px-2 py-1 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
    >
      <Icon v-if="props.icon" :name="props.icon" class="me-2" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  href: { type: String, required: false },
  target: { type: String, required: false },
  icon: { type: String, required: false },
});
</script>
