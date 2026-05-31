<template>
    <section class="page-header section">
        <div class="container text-center">
            <h1>{{ title }}</h1>
            <p v-if="description" class="subtitle">{{ description }}</p>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    description?: string;
}>();
</script>

<style scoped>
.page-header {
    padding-top: 180px;
    padding-bottom: 60px;
}

.page-header h1 {
    font-size: 3.5rem;
    letter-spacing: -1px;
    margin-bottom: 20px;
}

.page-header .subtitle {
    font-size: 1.2rem;
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto;
}
</style>