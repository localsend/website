<template>
  <div class="absolute right-32 top-5">
    <div class="flex flex-row items-center space-x-2">
      <Moon
        v-if="selectedMode === 'dark'"
        class="size-5 text-black dark:text-white"
      />
      <Sun
        v-if="selectedMode === 'light'"
        class="size-5 text-black dark:text-white"
      />
      <select
        v-model="selectedMode"
        class="h-fit w-fit rounded-lg bg-white"
        @change="updateMode"
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Sun, Moon } from "lucide-vue-next";

const mode = useColorMode({
  emitAuto: false,
});

const selectedMode = ref(mode.value);

const updateMode = () => {
  mode.value = selectedMode.value;
};
</script>
