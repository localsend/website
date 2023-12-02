<template>
  <page-layout :sub-title="$t('community.title')">
    <template v-slot:content>
      <div class="text-center pb-3">
        <h1 class="text-h6 text-sm-h6">{{ $t('community.getHelp') }}</h1>

        <p>{{ $t('community.getHelpDescription') }}</p>

        <v-btn v-for="(b, index) in helpButtons" v-bind:key="index" variant="tonal" :class="index ? ['ml-4', 'mt-2'] : ['mt-2']" :href="b.url" target="_blank">
          {{ b.name }}
        </v-btn>

        <h1 class="text-h6 text-sm-h6 mt-8">{{ $t('community.getInvolved') }}</h1>

        <p>{{ $t('community.getInvolvedDescription') }}</p>

        <v-btn variant="tonal" href="https://discord.gg/GSRWmQNP87" class="mt-2" target="_blank">
          {{ $t('community.discord') }}
        </v-btn>

        <v-btn variant="tonal" href="https://github.com/localsend/localsend/issues" class="ml-4 mt-2" target="_blank">
          {{ $t('community.issues') }}
        </v-btn>

        <v-btn variant="tonal" href="https://github.com/localsend/localsend/pulls" class="ml-4 mt-2" target="_blank">
          {{ $t('community.pullRequests') }}
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
