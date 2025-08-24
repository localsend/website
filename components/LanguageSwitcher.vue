<template>
  <div v-if="i18nEnabled" class="relative flex items-center" ref="dropdownContainer">
    <div class="relative w-48">
      <button
        @click.stop="toggleDropdown"
        class="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none"
      >
        <span>{{ currLocaleName }}</span>
        <svg
          class="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <transition name="fade">
        <div
          v-if="dropdownOpen"
          class="absolute z-50 mt-2 w-full rounded-lg shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
          @click.stop
        >
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search language..."
            class="w-full px-3 py-2 border-b border-gray-200 dark:border-gray-700 bg-transparent text-black dark:text-white focus:outline-none"
            @keydown.stop
          />
          <ul class="max-h-60 overflow-y-auto">
            <li
              v-for="(locale, index) in filteredLocales"
              :key="index"
              @click="selectLocale(locale.code)"
              class="px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white"
              :class="{ 'bg-gray-100 dark:bg-gray-800': locale.code === localeIdentity }"
            >
              <span>{{ locale.name }}</span>
              <span
                v-if="locale.englishName"
                class="ml-2 text-xs text-gray-500 dark:text-gray-400"
              >
                ({{ locale.englishName }})
              </span>
            </li>
            <li
              v-if="filteredLocales.length === 0"
              class="px-3 py-2 text-gray-400 dark:text-gray-500"
            >
              No results
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const localeIdentity = ref("");
const dropdownOpen = ref(false);
const searchQuery = ref("");
const dropdownContainer = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
  if (dropdownOpen.value) {
    searchQuery.value = "";
  }
};

const selectLocale = (code: string) => {
  dropdownOpen.value = false;
  if (code !== localeIdentity.value) {
    const path = switchLocalePath(code);
    navigateTo(path);
  }
};

const filteredLocales = computed(() => {
  if (!searchQuery.value) return locales.value;
  return locales.value.filter((l: any) => {
    const english = l.englishName?.toLowerCase() || "";
    return (
      l.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      english.includes(searchQuery.value.toLowerCase()) ||
      l.code.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});

const currLocaleName = computed(() => {
  return locales.value.find((l: any) => l.code === locale.value)?.name;
});

const i18nEnabled = computed(() => {
  return switchLocalePath("en");
});

watch(locale, () => {
  localeIdentity.value = locale.value;
});

onMounted(() => {
  localeIdentity.value = locale.value;
  window.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  window.removeEventListener("click", handleClickOutside);
});

function handleClickOutside(event: MouseEvent) {
  if (
    dropdownOpen.value &&
    dropdownContainer.value &&
    !dropdownContainer.value.contains(event.target as Node)
  ) {
    dropdownOpen.value = false;
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
