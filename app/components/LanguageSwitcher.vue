<template>
  <div v-if="i18nEnabled" class="lang-switcher" ref="dropdownContainer">
    <button @click.stop="toggleDropdown" class="nav-action-btn" :class="{ 'active': dropdownOpen }">
      <span class="curr-lang">{{ currLocaleName }}</span>
      <Icon name="material-symbols:keyboard-arrow-down" class="app-icon" />
    </button>

    <Transition name="slide-up">
      <div v-if="dropdownOpen" class="lang-dropdown" @click.stop>
        <div class="lang-search-wrapper">
          <Icon name="material-symbols:search" class="app-icon" />
          <input v-model="searchQuery" type="text" :placeholder="t('home.search_lang')" class="lang-search-input" @keydown.stop />
        </div>

        <ul class="lang-list">
          <li v-for="locale in filteredLocales" :key="locale.code" 
            @click="selectLocale(locale.code)"
            class="lang-item" 
            :class="{ 'active': locale.code === localeIdentity }">
            <div class="lang-info">
              <span class="lang-name">{{ locale.name }}</span>
              <span v-if="locale.englishName" class="lang-en-name">{{ locale.englishName }}</span>
            </div>
            <Icon v-if="locale.code === localeIdentity" name="material-symbols:check" class="app-icon accent" />
          </li>
          <li v-if="filteredLocales.length === 0" class="lang-not-found">
            {{ t('home.lang_notfound') }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
const { t, locale, locales } = useI18n();
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
.lang-switcher {
    position: relative;
}

.nav-action-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    color: var(--text-main);
    padding: 8px 16px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: var(--transition-fast);
    font-size: 0.9rem;
    font-weight: 600;
}

.nav-action-btn:hover, .nav-action-btn.active {
    background: rgba(130, 213, 200, 0.1);
    border-color: var(--accent-primary);
}

.nav-action-btn .app-icon {
    font-size: 18px;
    transition: transform 0.3s ease;
}

.nav-action-btn.active .app-icon {
    transform: rotate(180deg);
}

.lang-dropdown {
    position: absolute;
    top: calc(100% + 15px);
    right: 0;
    width: 280px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 10px;
    z-index: 1000;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.lang-search-wrapper {
    position: relative;
    margin-bottom: 10px;
}

.lang-search-wrapper .app-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    color: var(--text-muted);
}

.lang-search-input {
    width: 100%;
    background: var(--bg-dark);
    border: 1px solid var(--border-color);
    padding: 10px 10px 10px 40px;
    border-radius: 12px;
    color: #FFFFFF;
    font-size: 0.85rem;
    box-sizing: border-box;
}

.lang-list {
    list-style: none;
    max-height: 350px;
    overflow-y: auto;
    padding: 0;
    margin: 0;
}

.lang-list::-webkit-scrollbar {
    width: 6px;
}

.lang-list::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.lang-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-radius: 12px;
    cursor: pointer;
    transition: var(--transition-fast);
}

.lang-item:hover {
    background: rgba(255, 255, 255, 0.05);
}

.lang-item.active {
    background: rgba(130, 213, 200, 0.05);
}

.lang-info {
    display: flex;
    flex-direction: column;
}

.lang-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #FFFFFF;
}

.lang-en-name {
    font-size: 0.75rem;
    color: var(--text-muted);
}

.lang-not-found {
    padding: 30px;
    text-align: center;
    color: var(--text-muted);
    font-size: 0.9rem;
}

.slide-up-enter-active, .slide-up-leave-active {
    transition: all 0.3s ease;
}

.slide-up-enter-from, .slide-up-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
