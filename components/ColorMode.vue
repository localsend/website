<template>
  <div class="absolute right-32 top-5">
    <UseColorMode v-model="selectedMode">
      <button class="text-black dark:text-white" @click="next()">
        <span class="flex w-fit items-center space-x-2">
          <Moon
            v-if="mode === 'dark'"
            class="size-5 text-black dark:text-white"
          />
          <Sun
            v-if="mode === 'light'"
            class="size-5 text-black dark:text-white"
          />
          <span class="sr-only"> {{ mode }} mode </span>
        </span>
      </button>
    </UseColorMode>
  </div>
</template>

<script setup lang="ts">
import { useColorMode, useCycleList } from "@vueuse/core";
import { watchEffect } from "vue-demi";
import { Sun, Moon } from "lucide-vue-next";

const mode = useColorMode({
  emitAuto: false,
});

const selectedMode = ref(mode.value);

const updateMode = () => {
  mode.value = selectedMode.value;
};

const { state, next } = useCycleList(["dark", "light"] as const, {
  initialValue: mode,
});

watchEffect(() => (mode.value = state.value));
</script>
