<template>
  <div
    class="bg-gray-100 pb-10 pt-8 text-center text-sm dark:bg-gray-800 dark:text-gray-300"
  >
    <p>
      {{ t("footer.underlicense") }}
      <a
        href="https://www.apache.org/licenses/LICENSE-2.0"
        class="text-decoration-none text-teal-600 dark:text-teal-400"
        target="_blank"
        >{{ $t("footer.license") }}</a
      >
    </p>
    <p>&copy; 2022 - {{ year }} Tien Do Nam</p>

    <!-- Links -->
    <div class="mt-8 flex flex-wrap justify-center">
      <TextButton
        href="https://github.com/localsend/localsend"
        target="_blank"
        icon="fa6-brands:github"
      >
        {{ t("footer.github") }}
      </TextButton>

      <TextButton
        href="https://discord.gg/GSRWmQNP87"
        target="_blank"
        icon="fa6-brands:discord"
        class="ms-2"
      >
        {{ t("footer.discord") }}
      </TextButton>

      <!-- https://github.com/nuxt/content/issues/1229 -->
<!--      <NuxtLink to="/news" class="ms-2">-->
<!--        <TextButton icon="material-symbols:article">-->
<!--          {{ t("news.title") }}-->
<!--        </TextButton>-->
<!--      </NuxtLink>-->
    </div>

    <!-- Links -->
    <div class="mt-4 flex flex-wrap justify-center">
      <NuxtLink to="/privacy" class="ms-2">
        <TextButton icon="material-symbols:shield-lock">
          {{ t("footer.privacy") }}
        </TextButton>
      </NuxtLink>

      <NuxtLink to="/terms" class="ms-2">
        <TextButton icon="material-symbols:gavel">
          {{ t("footer.terms") }}
        </TextButton>
      </NuxtLink>

      <NuxtLink to="/imprint" class="ms-2">
        <TextButton icon="material-symbols:info">
          {{ t("footer.imprint") }}
        </TextButton>
      </NuxtLink>

      <NuxtLink to="/contact" class="ms-2">
        <TextButton icon="material-symbols:chat-bubble">
          {{ t("footer.contact") }}
        </TextButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
const { t } = useI18n();
</script>
