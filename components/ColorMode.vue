<template>
  <div class="absolute right-32 top-5">
    <ClientOnly>
      <button class="text-black dark:text-white" @click="next()">
      <span class="flex w-fit items-center space-x-2">
        <Icon
            :name="mode == 'light' ? 'material-symbols:light-mode-outline' : 'material-symbols:dark-mode-outline'"
            class="size-5 text-black dark:text-white"
        />
        <span class="sr-only"> {{ mode }} mode </span>
      </span>
      </button>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useColorMode, useCycleList } from "@vueuse/core";

const mode = useColorMode();

const { state, next } = useCycleList(["dark", "light"] as const, {
  initialValue: mode,
});

watch(state, () => mode.value = state.value);
</script>
