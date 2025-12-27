<template>
  <div class="min-h-screen p-12 dark:bg-gray-800 dark:text-gray-300">
    <NuxtLink
      :to="localePath({ path: '/' })"
      class="mb-4 inline-block dark:text-white"
    >
      <div class="flex items-center">
        <img
          src="~/assets/img/logo-512.png"
          alt="LocalSend Logo"
          style="height: 40px"
          class="inline-block"
        />
        <span class="ms-2 text-3xl font-bold dark:text-white">LocalSend</span>
      </div>
    </NuxtLink>
    <slot></slot>
    <div class="mt-4">
      <NuxtLink :to="localePath({ path: '/' })">
        <TextButton
          icon="material-symbols:arrow-back"
          class="dark:text-gray-300"
        >
          {{ $t("homepageButton") }}
        </TextButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
