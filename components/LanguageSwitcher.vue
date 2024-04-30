<template>
  <div v-if="i18nEnabled" class="absolute" style="top: 20px; right: 20px;">
    <div class="flex items-center">
      <Icon name="material-symbols:translate" class="mr-1" />
      <select v-bind:value="localeIdentity" class="rounded-lg bg-white" :style="{'width': `${switchWidth}px`}" @change="changeLocale">
        <option v-for="(locale, index) in locales" :key="index" :value="locale.code">
          {{ localeMap[locale.code] }}
        </option>
      </select>
    </div>
  </div>

  <div class="absolute top-0">
    <!-- dummy select to get the width of the select based on the selected item -->
    <select ref="switchWidthRef" style="visibility: hidden">
      <option>{{ hiddenSwitchValue }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import {localeMap} from "~/i18n.config";

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const localeIdentity = ref('');
const switchWidth = ref(0);
const switchWidthRef = ref<HTMLElement | null>(null);
const hiddenSwitchValue = ref('');

const changeLocale = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  const path = switchLocalePath(target.value);
  hiddenSwitchValue.value = localeMap[target.value];
  navigateTo(path);

  setTimeout(() => {
    switchWidth.value = switchWidthRef.value!.offsetWidth;
  }, 100);
}

const i18nEnabled = computed(() => {
  // returns true if the resulting path is not empty
  return switchLocalePath('en');
});

watch(locale, () => {
  localeIdentity.value = locale.value;
});

onMounted(() => {
  localeIdentity.value = locale.value;

  hiddenSwitchValue.value = localeMap[locale.value];
  setTimeout(() => {
    switchWidth.value = switchWidthRef.value!.offsetWidth;
  }, 100);
})
</script>
