<template>
  <div class="dark:bg-gray-900">
    <div
      class="flex min-h-screen justify-center pb-12 pt-12 dark:text-gray-300"
    >
      <div class="flex flex-col items-center">
        <NuxtLink :to="localePath({ path: '/' })">
          <img
            src="~/assets/img/logo-512.png"
            alt="LocalSend Logo"
            style="height: 200px"
          />
        </NuxtLink>

        <h1 class="text-5xl font-black dark:text-white">LocalSend</h1>
        <h2 class="text-2xl font-light dark:text-white">
          {{ props.subTitle }}
        </h2>

        <slot name="tabs"></slot>

        <div
          class="rounded-lg bg-gray-200 p-4 dark:bg-gray-800"
          :class="$slots.tabs ? '' : 'mt-8'"
          style="width: calc(min(1200px, 100vw))"
        >
          <slot name="content"></slot>
        </div>

        <NuxtLink :to="localePath({ path: '/' })" class="mt-8">
          <TextButton
            :icon="
              direction === 'ltr'
                ? 'material-symbols:arrow-back'
                : 'material-symbols:arrow-forward'
            "
            class="dark:text-gray-300"
          >
            {{ $t("homepageButton") }}
          </TextButton>
        </NuxtLink>
      </div>
    </div>

    <div class="text-center dark:text-gray-300">
      <TextButton
        href="https://github.com/localsend/website"
        target="_blank"
        icon="material-symbols:build"
        class="mb-8"
      >
        {{ t("improveWebsite") }}
      </TextButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  subTitle: { type: String, required: true },
});

const { t } = useI18n();
const localePath = useLocalePath();

const head = useLocaleHead({
  addDirAttribute: true,
});

const direction = head.value.htmlAttrs!.dir;
</script>
