<template>
  <div class="fill-viewport pa-12">
    <slot></slot>
    <v-btn variant="text" size="x-large" class="mt-4" color="primary" :prepend-icon="mdiArrowLeft" to="/">
      {{ $t('homepageButton') }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { mdiArrowLeft } from '@mdi/js'
</script>
