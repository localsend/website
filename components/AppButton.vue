<template>
  <div class="inline-block">
    <a v-if="href" :href="href" :target="target" class="hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
       :class="dark ? 'bg-teal-950' : 'bg-teal-600'">
      <Icon v-if="props.icon" :name="props.icon" class="mr-2" />
      <slot></slot>
    </a>
    <button v-else class="hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
            :class="dark ? 'bg-teal-950' : 'bg-teal-600'">
      <Icon v-if="props.icon" :name="props.icon" class="mr-2" />
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  href: { type: String, required: false },
  target: { type: String, required: false },
  dark: {type: Boolean, required: false, default: false},
  icon: {type: String, required: false},
});
</script>
