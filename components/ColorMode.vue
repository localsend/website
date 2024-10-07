<script setup lang="ts">
import { useColorMode, useCycleList } from "@vueuse/core";
import { watchEffect } from "vue-demi";

const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: "dark contrast",
    cafe: "cafe",
  },
});

const { state, next } = useCycleList(["dark", "light", "auto"] as const, {
  initialValue: mode,
});

watchEffect(() => (mode.value = state.value));
</script>

<template>
  <button @click="next()">
    <i
      v-if="state === 'dark'"
      i-carbon-moon
      inline-block
      align-middle
      class="align-middle"
    />
    <i
      v-if="state === 'light'"
      i-carbon-sun
      inline-block
      align-middle
      class="align-middle"
    />
    <i
      v-if="state === 'auto'"
      i-carbon-laptop
      inline-block
      align-middle
      class="align-middle"
    />

    <span class="ml-2 capitalize">{{ state }}</span>
  </button>
</template>

<style>
html.cafe {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}

html.contrast {
  filter: contrast(2);
}
</style>
