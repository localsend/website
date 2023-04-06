<template>
  <div class="fill-height pt-md-12">
    <v-row>

      <!-- Logo -->
      <v-col cols="12">
        <v-img
          height="200"
          src="@/assets/logo-512.png"
        />
      </v-col>
      <v-col cols="12">
        <h1 class="text-h4 text-sm-h3 font-weight-black text-center">LocalSend</h1>
        <h2 class="text-subtitle-1 text-sm-h6 text-center">{{ props.subTitle }}</h2>
      </v-col>

      <slot name="tabs"></slot>

      <v-col cols="12">
        <v-row no-gutters>
          <v-col cols="0" md="1" lg="2" xl="3">
          </v-col>
          <v-col cols="12" md="10" lg="8" xl="6">
            <v-sheet color="grey-lighten-3" class="pa-4" rounded>
              <slot name="content"></slot>
            </v-sheet>
          </v-col>
          <v-col cols="0" md="1" lg="2" xl="3">
          </v-col>
        </v-row>
      </v-col>

      <!-- Homepage Button -->
      <v-col cols="12" class="d-flex justify-center">
        <v-btn variant="text" color="primary" :prepend-icon="mdiArrowLeft" to="/">
          Homepage
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { mdiArrowLeft } from '@mdi/js'

const props = defineProps({
  subTitle: { type: String, required: true },
});

</script>
