<template>
  <div class="fill-height pa-12">
    <slot></slot>
    <v-btn variant="text" size="x-large" class="mt-4" color="primary" :prepend-icon="mdiArrowLeft" to="/">
      Homepage
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { mdiArrowLeft } from '@mdi/js'
</script>
