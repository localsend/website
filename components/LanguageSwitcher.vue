<template>
  <div v-if="i18nEnabled" class="flex items-center">
    <Icon name="material-symbols:translate" class="me-1 dark:text-white" />
    <select
      v-bind:value="localeIdentity"
      class="rounded-lg text-black dark:text-white bg-white dark:bg-gray-900"
      :style="{ width: `${switchWidth}px` }"
      @change="changeLocale"
    >
      <option
        v-for="(locale, index) in locales"
        :key="index"
        :value="locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
  </div>

  <div class="absolute top-0 pointer-events-none">
    <!-- dummy select to get the width of the select based on the selected item -->
    <select ref="switch-width" style="visibility: hidden">
      <option>{{ currLocaleName }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const localeIdentity = ref("");
const switchWidth = ref(0);
const switchWidthRef = useTemplateRef("switch-width");

const changeLocale = (e: Event) => {
  const target = e.target as HTMLSelectElement;

  // @ts-ignore
  const path = switchLocalePath(target.value);
  navigateTo(path);

  setTimeout(() => {
    switchWidth.value = switchWidthRef.value!.offsetWidth;
  }, 100);
};

const currLocaleName = computed(() => {
  return locales.value.find((l) => l.code === locale.value)?.name;
});

const i18nEnabled = computed(() => {
  // returns true if the resulting path is not empty
  return switchLocalePath("en");
});

watch(locale, () => {
  localeIdentity.value = locale.value;
});

onMounted(() => {
  localeIdentity.value = locale.value;

  switchWidth.value = switchWidthRef.value!.offsetWidth;
});
</script>
