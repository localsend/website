<template>
  <div class="inline-block">
    <a
      v-if="href"
      :href="href"
      :target="target"
      class="flex items-center rounded-lg px-4 py-2 font-bold text-white hover:bg-teal-700 dark:text-gray-300 dark:hover:bg-teal-800"
      :class="dark ? 'bg-teal-950' : 'bg-teal-600'"
    >
      <Icon
        v-if="props.icon"
        :name="props.icon"
        class="me-2 dark:text-gray-300"
      />
      <slot></slot>
    </a>
    <button
      v-else
      class="flex items-center rounded-lg px-4 py-2 font-bold text-white hover:bg-teal-700 dark:text-gray-300 dark:hover:bg-teal-800"
      :class="dark ? 'bg-teal-950' : 'bg-teal-600'"
    >
      <Icon
        v-if="props.icon"
        :name="props.icon"
        class="me-2 dark:text-gray-300"
      />
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  href: { type: String, required: false },
  target: { type: String, required: false },
  dark: { type: Boolean, required: false, default: false },
  icon: { type: String, required: false },
});
</script>
