<template>
  <div class="fill-viewport d-flex align-center justify-center pa-4 pa-md-12">
    <v-row style="max-width: 1800px">

      <!-- Logo and text -->
      <v-col cols="12" sm="12" md="8" lg="7" xl="7" class="d-flex align-center">
        <v-row>
          <v-col cols="12" md="4" class="d-flex justify-center justify-md-end">
            <img
              :height="logoHeight"
              alt="LocalSend Logo"
              src="@/assets/logo-512.png"
            />
          </v-col>
          <v-col cols="12" md="auto">
            <h1 class="text-h2 text-xl-h1 font-weight-black text-center text-md-start">LocalSend</h1>
            <h2 class="text-h5 text-xl-h4 text-center text-md-start mt-2">{{ $t('home.slogan1') }}</h2>
            <h2 class="text-h5 text-xl-h4 text-center text-md-start">{{ $t('home.slogan2') }}</h2>
            <div class="text-center text-md-start mt-2">
              <v-btn variant="tonal" size="x-large" class="mt-4" color="primary" :prepend-icon="mdiDownload" to="/download">
                {{ $t('home.download') }}
              </v-btn>
              <v-btn variant="tonal" size="x-large" class="ms-4 mt-4" :prepend-icon="mdiAccountMultiple" to="/community">
                {{ $t('home.community') }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <!-- Screenshots -->
      <v-col cols="12" sm="12" md="4" lg="5" xl="5" class="pt-12 pt-md-0">
        <v-row>
          <v-col cols="12" md="6" class="d-flex justify-center justify-md-end">
            <v-img
              :height="screenshotHeight"
              src="/img/screenshot-iphone.webp"
            />
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-center justify-md-start">
            <v-img
              :height="screenshotHeight"
              src="/img/screenshot-pc.webp"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { mdiDownload, mdiAccountMultiple } from '@mdi/js'
import { computed, ref } from "vue";
import { useDisplay } from 'vuetify'

const display = ref(useDisplay())

const logoHeight = computed(() => {
  const { xs, sm, md, lg } = display.value;
  if (xs) return 200;
  if (sm) return 200;
  if (md) return 140;
  if (lg) return 140;
  return 200;
});

const screenshotHeight = computed(() => {
  const { xs, sm, md, lg } = display.value;
  if (xs) return 200;
  if (sm) return 200;
  if (md) return 150;
  if (lg) return 300;
  return 400;
});
</script>
