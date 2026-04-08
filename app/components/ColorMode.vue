<template>
  <ClientOnly>
    <button class="text-black dark:text-white" @click="mode = mode == 'light' ? 'dark' : 'light'">
    <span class="flex w-fit items-center space-x-2">
      <Icon
          :name="mode == 'light' ? 'material-symbols:light-mode-outline' : 'material-symbols:dark-mode-outline'"
          class="size-5 text-black dark:text-white"
      />
      <span class="sr-only"> {{ mode }} mode </span>
    </span>
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useColorMode } from "@vueuse/core";

const mode = useColorMode();
</script>
