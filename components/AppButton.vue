<template>
  <div class="inline-block">
    <button class="hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
            :class="dark ? 'bg-teal-950' : 'bg-teal-600'">
      <Icon v-if="props.icon" :name="props.icon" class="mr-2"/>
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  dark: {type: Boolean, required: false, default: false},
  icon: {type: String, required: false},
});
</script>
