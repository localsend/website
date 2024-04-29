<template>
  <SecondaryLayout :sub-title="t('community.title')">
    <template v-slot:content>
      <div class="text-center">
        <h3 class="text-xl font-bold">{{ t('community.getHelp') }}</h3>
        <h4>{{ t('community.getHelpDescription') }}</h4>
        <div class="flex flex-wrap justify-center">
          <template v-for="button in helpButtons" :key="button.name">
            <AppButton :href="button.url" target="_blank" class="m-2" :dark="true">{{ button.name }}</AppButton>
          </template>
        </div>

        <h3 class="text-xl font-bold mt-8">{{ t('community.getInvolved') }}</h3>
        <h4>{{ t('community.getInvolvedDescription') }}</h4>
        <div class="flex flex-wrap justify-center">
          <AppButton href="https://discord.gg/GSRWmQNP87" target="_blank" icon="fa6-brands:discord" class="m-2" :dark="true">
            {{ t('community.discord') }}
          </AppButton>

          <AppButton href="https://github.com/localsend/localsend/issues" icon="material-symbols:warning-rounded" target="_blank" class="m-2" :dark="true">
            {{ t('community.issues') }}
          </AppButton>

          <AppButton href="https://github.com/localsend/localsend/pulls" icon="material-symbols:call-merge" target="_blank" class="m-2" :dark="true">
            {{ t('community.pullRequests') }}
          </AppButton>
        </div>
      </div>
    </template>
  </SecondaryLayout>
</template>

<script setup lang="ts">
import SecondaryLayout from "~/components/layout/SecondaryLayout.vue";

definePageMeta({
  title: 'community.seo.title',
  description: 'community.seo.description',
})

const {t} = useI18n()

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
