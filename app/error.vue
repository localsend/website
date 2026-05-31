<template>
  <div class="error-page flex-center h-screen">
    <div class="container text-center">
      <div class="error-content card">
        <span class="material-symbols-rounded accent mb-6" style="font-size: 80px;">sentiment_very_dissatisfied</span>
        <h1 class="version-tag mb-2">{{ error.statusCode }}</h1>
        <p class="text-muted mb-8 text-lg" v-if="error.statusCode === 404">
            Oops! This page doesn't exist.
        </p>
        <p class="text-muted mb-8 text-lg" v-else>
            An unexpected error occurred.
        </p>
        
        <button @click="handleClearError" class="btn btn-primary">
            <span class="material-symbols-rounded mr-2">home</span>
            {{ t('homepageButton') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object as any
});

const { t } = useI18n();
const localePath = useLocalePath();

const handleClearError = () => {
  clearError({ redirect: localePath('/') });
};
</script>

<style scoped>
.error-page {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: var(--font-main);
}

.error-content {
    max-width: 500px;
    margin: 0 auto;
    padding: 60px 40px;
}

.h-screen {
    height: 100vh;
}
</style>
