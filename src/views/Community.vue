<template>
  <page-layout :sub-title="$t('community.title')">
    <template v-slot:content>
      <div class="text-center pb-3">
        <h1 class="text-h6 text-sm-h6">{{ $t('community.getHelp') }}</h1>

        <p>{{ $t('community.getHelpDescription') }}</p>

        <v-btn v-for="(b, index) in helpButtons" v-bind:key="index" variant="tonal" :class="index ? ['ms-4', 'mt-2'] : ['mt-2']" :href="b.url" target="_blank">
          {{ b.name }}
        </v-btn>

        <h1 class="text-h6 text-sm-h6 mt-8">{{ $t('community.getInvolved') }}</h1>

        <p>{{ $t('community.getInvolvedDescription') }}</p>

        <v-btn variant="tonal" href="https://discord.gg/GSRWmQNP87" class="mt-2" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>
          &nbsp;{{ $t('community.discord') }}
        </v-btn>

        <v-btn variant="tonal" href="https://github.com/localsend/localsend/issues" class="ms-4 mt-2" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"/><path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0Z"/></svg>
          &nbsp;{{ $t('community.issues') }}
        </v-btn>

        <v-btn variant="tonal" href="https://github.com/localsend/localsend/pulls" class="ms-4 mt-2" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M305.8 2.1C314.4 5.9 320 14.5 320 24V64h16c70.7 0 128 57.3 128 128V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-35.3-28.7-64-64-64H320v40c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1zM104 80A24 24 0 1 0 56 80a24 24 0 1 0 48 0zm8 73.3V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80c0 32.8-19.7 61-48 73.3zM104 432a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm328 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
          &nbsp;{{ $t('community.pullRequests') }}
        </v-btn>
      </div>
    </template>
  </page-layout>
</template>

<script setup lang="ts">
import PageLayout from "@/layouts/PageLayout.vue";

interface HelpButton {
  name: string;
  url: string;
}

const helpButtons: HelpButton[] = [
  {
    name: 'English',
    url: 'https://github.com/localsend/localsend/discussions/categories/discussion-english-international',
  },
  {
    name: 'Deutsch',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-deutsch',
  },
  {
    name: 'Español',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-espa%C3%B1ol',
  },
  {
    name: 'Français',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-fran%C3%A7ais',
  },
  {
    name: 'Italiano',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-italiano',
  },
  {
    name: 'Русский',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9',
  },
  {
    name: '日本語',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-%E6%97%A5%E6%9C%AC%E8%AA%9E',
  },
  {
    name: '简体中文',
    url: 'https://github.com/localsend/localsend/discussions/categories/l-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87',
  },
];
</script>
