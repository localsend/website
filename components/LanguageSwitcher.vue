<template>
  <div v-if="i18nEnabled" class="relative" ref="dropdownContainer">
    <button @click.stop="toggleDropdown" class="group relative flex items-center justify-between w-36 h-10 px-4 rounded-xl transition-all duration-300 focus:outline-none
             bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
             text-gray-900 dark:text-white text-sm font-medium
             border border-gray-200 dark:border-gray-700
             shadow-md shadow-black/5
             hover:shadow-lg hover:-translate-y-[1px]
             active:scale-[0.98]">
      <!-- Gloss Effect -->
      <div
        class="absolute inset-0 rounded-xl bg-gradient-to-br from-white/60 via-white/30 to-transparent dark:from-white/10 dark:via-white/5 pointer-events-none">
      </div>

      <span class="relative z-10 truncate mr-2">{{ currLocaleName }}</span>
      <Icon name="material-symbols:keyboard-arrow-down-rounded"
        class="relative z-10 text-gray-500 transition-transform duration-300 text-lg"
        :class="{ 'rotate-180': dropdownOpen }" />
    </button>

    <transition name="fade">
      <div v-if="dropdownOpen" class="absolute right-0 z-50 mt-2 w-64 rounded-xl shadow-xl 
               bg-white/95 dark:bg-gray-900/95 backdrop-blur-md
               border border-gray-200 dark:border-gray-700 overflow-hidden origin-top-right" @click.stop>
        <!-- Search Input -->
        <div class="p-2 border-b border-gray-100 dark:border-gray-800">
          <div class="relative">
            <Icon name="material-symbols:search"
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input v-model="searchQuery" type="text" placeholder="Search language..."
              class="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all border border-transparent focus:border-teal-500/20"
              @keydown.stop />
          </div>
        </div>

        <!-- List -->
        <ul class="max-h-64 overflow-y-auto py-1 scrollbar-thin">
          <li v-for="locale in filteredLocales" :key="locale.code" @click="selectLocale(locale.code)"
            class="px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between group" :class="[
              locale.code === localeIdentity
                ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
            ]">
            <div class="flex flex-col">
              <span class="font-medium">{{ locale.name }}</span>
              <span v-if="locale.englishName"
                class="text-xs text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400">
                {{ locale.englishName }}
              </span>
            </div>
            <Icon v-if="locale.code === localeIdentity" name="material-symbols:check" class="text-teal-500" />
          </li>
          <li v-if="filteredLocales.length === 0"
            class="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
            No languages found
          </li>
        </ul>
      </div>
    </transition>
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
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

/* Custom Scrollbar for the list */
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.3);
  border-radius: 20px;
}

.dark .scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.6);
}
</style>
